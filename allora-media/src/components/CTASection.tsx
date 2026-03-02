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
}

export function CTASection({
  headline = "Ready to get marketing that actually works?",
  subhead = "Book a free Growth Blueprint Call. We\u2019ll review your current marketing, identify the biggest opportunities, and give you a clear plan to drive real results \u2014 whether you work with us or not.",
  primaryLabel = "Book a Growth Blueprint Call",
  primaryHref = "/contact",
  secondaryLabel = "See Our Results",
  secondaryHref = "/case-studies",
}: CTASectionProps) {
  return (
    <section className="relative bg-[#131E13] py-20 lg:py-28 overflow-hidden noise-texture cta-glow animated-border">
      {/* Top glow divider */}
      <div className="absolute top-0 left-0 right-0 section-glow-divider" />
      {/* Bottom glow divider */}
      <div className="absolute bottom-0 left-0 right-0 section-glow-divider" />
      {/* Ambient glow orbs */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#65B207]/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute -right-32 top-1/4 w-48 h-48 rounded-full bg-[#65B207]/[0.04] blur-3xl pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-black text-white md:text-4xl lg:text-5xl text-shadow-hero"
        >
          {headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60"
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
            className="inline-flex items-center rounded-full bg-[#65B207] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#65B207]/25 transition-all duration-300 hover:bg-[#7acc09] hover:scale-[1.03]"
          >
            <Star size={18} className="mr-2" />
            {primaryLabel}
          </Link>
          {secondaryLabel && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-[#65B207] hover:bg-[#65B207]/10"
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
