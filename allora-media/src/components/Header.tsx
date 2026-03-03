"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { navLinks, siteConfig, type NavLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    };
  }, []);

  const handleDropdownEnter = (href: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(href);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
        return;
      }

      if (e.key === "Tab" && mobileNavRef.current) {
        const focusable = mobileNavRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen, closeMobileMenu]);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#080808]/90 backdrop-blur-xl shadow-lg shadow-black/30"
            : "bg-transparent"
        )}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile layout */}
          <div className="flex h-20 items-center justify-between lg:hidden">
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logos/story-real-logo.png"
                alt="Story Real Studios"
                width={160}
                height={48}
                className={cn(
                  "transition-all duration-500",
                  scrolled ? "h-8 w-auto" : "h-10 w-auto"
                )}
                style={{ transform: scrolled ? "scale(0.85)" : "scale(1)" }}
                priority
              />
            </Link>
            <button
              className="text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop layout — flex: left logo | center nav | right CTA */}
          <div className="hidden lg:flex h-20 items-center justify-between">
            {/* Left: Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logos/story-real-logo.png"
                alt="Story Real Studios"
                width={180}
                height={48}
                className={cn(
                  "transition-all duration-500",
                  scrolled ? "h-8 w-auto" : "h-10 w-auto"
                )}
                style={{ transform: scrolled ? "scale(0.85)" : "scale(1)" }}
                priority
              />
            </Link>

            {/* Center: Nav links */}
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <NavItem
                  key={link.href}
                  link={link}
                  openDropdown={openDropdown}
                  onEnter={handleDropdownEnter}
                  onLeave={handleDropdownLeave}
                  pathname={pathname}
                />
              ))}
            </nav>

            {/* Right: CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#68ccd1] px-6 py-2.5 text-sm font-semibold text-[#080808] transition-all hover:bg-[#7dd6da] hover:scale-105 shadow-lg shadow-[#68ccd1]/20 whitespace-nowrap"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile nav — rendered OUTSIDE <header> */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            ref={mobileNavRef}
            className="fixed inset-0 top-20 bg-[#080808]/98 backdrop-blur-xl lg:hidden z-40 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <nav className="flex flex-col gap-1 px-6 py-8">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.href}>
                    <button
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === link.href ? null : link.href
                        )
                      }
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-lg font-medium text-white transition-colors hover:bg-white/5 hover:text-[#68ccd1]"
                      aria-expanded={mobileExpanded === link.href}
                    >
                      {link.label}
                      <ChevronDown
                        size={20}
                        className={cn(
                          "transition-transform duration-200",
                          mobileExpanded === link.href && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileExpanded === link.href && (
                      <div className="ml-4 flex flex-col gap-0.5 border-l border-white/10 pl-4 py-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="rounded-lg px-4 py-2.5 text-base text-white/70 transition-colors hover:bg-white/5 hover:text-[#68ccd1]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-3.5 text-lg font-medium text-white transition-colors hover:bg-white/5 hover:text-[#68ccd1]"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 rounded-full bg-[#68ccd1] px-6 py-4 text-center text-base font-semibold text-[#080808] transition-colors hover:bg-[#7dd6da]"
              >
                Book a Call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ───── Desktop nav item (supports dropdown children) ───── */
function NavItem({
  link,
  openDropdown,
  onEnter,
  onLeave,
  pathname,
}: {
  link: NavLink;
  openDropdown: string | null;
  onEnter: (href: string) => void;
  onLeave: () => void;
  pathname: string;
}) {
  const isOpen = openDropdown === link.href;
  const isActive = pathname === link.href || (link.children && link.children.some(c => pathname.startsWith(c.href)));

  if (!link.children) {
    return (
      <Link
        href={link.href}
        className={cn(
          "nav-link-animated text-sm font-medium transition-colors hover:text-[#68ccd1] uppercase tracking-wider whitespace-nowrap",
          isActive ? "text-[#68ccd1]" : "text-white/80"
        )}
        data-active={isActive}
      >
        {link.label}
      </Link>
    );
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (isOpen) {
        onLeave();
      } else {
        onEnter(link.href);
      }
    } else if (e.key === "Escape" && isOpen) {
      onLeave();
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => onEnter(link.href)}
      onMouseLeave={onLeave}
    >
      <button
        className={cn(
          "nav-link-animated flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#68ccd1] uppercase tracking-wider whitespace-nowrap",
          isActive ? "text-[#68ccd1]" : "text-white/80"
        )}
        data-active={isActive}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onKeyDown={handleKeyDown}
      >
        {link.label}
        <ChevronDown
          size={14}
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
            role="menu"
          >
            <div className="min-w-60 rounded-xl border border-white/10 bg-[#111111]/95 backdrop-blur-xl shadow-2xl shadow-black/40 py-2">
              {link.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  role="menuitem"
                  className="flex items-center px-5 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-[#68ccd1]"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
