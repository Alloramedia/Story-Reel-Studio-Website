"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/constants";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24, filter: "blur(3px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Footer() {

  return (
    <footer className="relative bg-[#080808] border-t border-white/5 noise-texture">
      {/* Top glow divider */}
      <div className="absolute top-0 left-0 right-0 section-glow-divider" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-5"
        >
          {/* Brand */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/allora-logo-white.png"
                alt="Allora Media"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Performance-driven marketing built on paid growth strategy, authority media production, and disciplined execution.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-[#65B207]"
              >
                <Phone size={16} className="text-[#65B207] shrink-0" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-[#65B207]"
              >
                <Mail size={16} className="text-[#65B207] shrink-0" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin size={16} className="text-[#65B207] shrink-0" />
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all duration-400 hover:bg-[#65B207] hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-[#65B207]/20"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all duration-400 hover:bg-[#65B207] hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-[#65B207]/20"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all duration-400 hover:bg-[#65B207] hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-[#65B207]/20"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={staggerItem}>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#65B207]">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white link-hover-underline inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={staggerItem}>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#65B207]">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white link-hover-underline inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries & Personal */}
          <motion.div variants={staggerItem}>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#65B207]">
              Industries
            </h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white link-hover-underline inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3 border-t border-white/5">
                <Link
                  href="/personal"
                  className="text-sm text-white/60 transition-colors hover:text-white link-hover-underline inline-block"
                >
                  Personal Content
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-white/5 bg-white/2 p-8 md:p-10"
        >
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div>
              <h3 className="font-heading text-lg font-bold text-white">Ready to grow?</h3>
              <p className="mt-1 text-sm text-white/55">Book a free strategy call — we&apos;ll map out your next move together.</p>
            </div>
            <Link
              href="/contact"
              className="flex shrink-0 items-center gap-2 rounded-full bg-[#65B207] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#7acc09] hover:shadow-lg hover:shadow-[#65B207]/20"
            >
              <ArrowRight size={14} />
              Book a Call
            </Link>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row"
        >
          <p className="text-xs text-white/55">
            &copy; {new Date().getFullYear()} Allora Media. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/website-policies#privacy-policy"
              className="text-xs text-white/60 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/website-policies#terms-of-service"
              className="text-xs text-white/60 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
