"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Facebook, Instagram, Mail, Phone, ChevronDown } from "lucide-react";
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

  // Clean up dropdown timeout on unmount
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

  // Close mobile menu on Escape, trap focus
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
        return;
      }

      // Focus trap
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

    // Prevent background scroll
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
              src="/images/allora-logo-white.png"
              alt="Allora Media"
              width={140}
              height={48}
              className={cn(
                "transition-all duration-500",
                scrolled ? "h-7 w-auto" : "h-9 w-auto"
              )}
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

        {/* Desktop layout — 3-column grid: left | centered logo | right */}
        <div className="hidden lg:grid h-24 items-center" style={{ gridTemplateColumns: "1fr auto 1fr" }}>
          {/* Left: Social icons + nav links */}
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 social-icon-hover"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 social-icon-hover"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-white/60 social-icon-hover"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="text-white/60 social-icon-hover"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
            {navLinks.slice(0, 3).map((link) => (
              <NavItem
                key={link.href}
                link={link}
                openDropdown={openDropdown}
                onEnter={handleDropdownEnter}
                onLeave={handleDropdownLeave}
                pathname={pathname}
              />
            ))}
          </div>

          {/* Center: Logo — always centered on page */}
          <Link href="/" className="justify-self-center px-6">
            <Image
              src="/images/allora-logo-white.png"
              alt="Allora Media"
              width={140}
              height={48}
              className={cn(
                "transition-all duration-500",
                scrolled ? "h-8 w-auto" : "h-11 w-auto"
              )}
              priority
            />
          </Link>

          {/* Right: nav links + Client Portal + CTA */}
          <div className="flex items-center gap-7 justify-self-end">
            {navLinks.slice(3).map((link) => (
              <NavItem
                key={link.href}
                link={link}
                openDropdown={openDropdown}
                onEnter={handleDropdownEnter}
                onLeave={handleDropdownLeave}
                pathname={pathname}
              />
            ))}
            <a
              href={siteConfig.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/60 transition-colors hover:text-[#65B207] uppercase tracking-wider whitespace-nowrap"
            >
              Client Portal
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#65B207] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#7acc09] hover:scale-105 shadow-lg shadow-[#65B207]/20 whitespace-nowrap"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>

    </header>

      {/* Mobile nav — rendered OUTSIDE <header> so backdrop-blur-xl on the header
          doesn't create a containing block that traps this fixed overlay */}
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
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-lg font-medium text-white transition-colors hover:bg-white/5 hover:text-[#65B207]"
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
                          className="rounded-lg px-4 py-2.5 text-base text-white/70 transition-colors hover:bg-white/5 hover:text-[#65B207]"
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
                  className="rounded-lg px-4 py-3.5 text-lg font-medium text-white transition-colors hover:bg-white/5 hover:text-[#65B207]"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={siteConfig.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-4 py-3.5 text-lg font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-[#65B207]"
            >
              Client Portal
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 rounded-full bg-[#65B207] px-6 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-[#7acc09]"
            >
              Book a Call
            </Link>
            {/* Social icons mobile */}
            <div className="mt-8 flex items-center justify-center gap-6">
              <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#65B207]" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#65B207]" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-white/60 hover:text-[#65B207]" aria-label="Email">
                <Mail size={22} />
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-white/60 hover:text-[#65B207]" aria-label="Phone">
                <Phone size={22} />
              </a>
            </div>
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
          "nav-link-animated text-sm font-medium transition-colors hover:text-[#65B207] uppercase tracking-wider whitespace-nowrap",
          isActive ? "text-[#65B207]" : "text-white/80"
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
          "nav-link-animated flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#65B207] uppercase tracking-wider whitespace-nowrap",
          isActive ? "text-[#65B207]" : "text-white/80"
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
                className="flex items-center px-5 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-[#65B207]"
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
