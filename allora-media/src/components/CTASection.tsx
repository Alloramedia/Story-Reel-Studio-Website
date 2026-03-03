"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  subhead?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "light";
}

export function CTASection({
  headline = "Ready to get content that actually works?",
  subhead = "Book a free Strategy Call. We\u2019ll review your current content strategy, identify the biggest opportunities, and give you a clear plan to drive real results \u2014 whether you work with us or not.",
  primaryLabel = "Book a Strategy Call",
  primaryHref = "/contact",
  secondaryLabel = "See Our Work",
  secondaryHref = "/work",
  variant = "dark",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`relative py-20 lg:py-28 overflow-hidden ${
        isDark
          ? "bg-[#0e2a35] noise-texture cta-glow animated-border"
          : "bg-[#fafcfd]"
      }`}
    >
      {isDark && (
        <>
          <div className="absolute top-0 left-0 right-0 section-glow-divider" />
          <div className="absolute bottom-0 left-0 right-0 section-glow-divider" />
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#68ccd1]/[0.06] blur-3xl pointer-events-none" />
          <div className="absolute -right-32 top-1/4 w-48 h-48 rounded-full bg-[#68ccd1]/[0.04] blur-3xl pointer-events-none" />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`font-heading text-3xl font-black md:text-4xl lg:text-5xl ${
            isDark ? "text-white text-shadow-hero" : "text-[#0a1a1f]"
          }`}
        >
          {headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mx-auto mt-6 max-w-xl text-lg leading-relaxed ${
            isDark ? "text-white/60" : "text-[#4a4a4a]"
          }`}
        >
          {subhead}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href={primaryHref}
            className={`inline-flex items-center rounded-full px-8 py-4 text-base font-bold shadow-lg transition-all duration-300 hover:scale-[1.03] ${
              isDark
                ? "bg-[#68ccd1] text-[#0e2a35] shadow-[#68ccd1]/25 hover:bg-[#7dd6da]"
                : "bg-[#52b0b6] text-white shadow-[#52b0b6]/25 hover:bg-[#68ccd1]"
            }`}
          >
            <Star size={18} className="mr-2" />
            {primaryLabel}
          </Link>
          {secondaryLabel && (
            <Link
              href={secondaryHref}
              className={`inline-flex items-center rounded-full border-2 px-8 py-4 text-base font-bold transition-all duration-300 ${
                isDark
                  ? "border-white/20 text-white hover:border-[#68ccd1] hover:bg-[#68ccd1]/10"
                  : "border-[#52b0b6]/30 text-[#0a1a1f] hover:border-[#52b0b6] hover:bg-[#52b0b6]/10"
              }`}
            >
              {secondaryLabel}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
