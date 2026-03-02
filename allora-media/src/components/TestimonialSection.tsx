"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import { googleReview } from "@/lib/constants";
import { GoogleLogo } from "@/components/GoogleLogo";
import {
  trustedLogos,
  googleReviews,
  featuredCaseStudies,
} from "@/lib/shared-data";

const marqueeLogos = [...trustedLogos, ...trustedLogos];

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export function TestimonialSection() {
  return (
    <section className="relative py-14 lg:py-24 noise-texture bg-[#0d0d0d]">
      <div className="absolute top-0 left-0 right-0 section-glow-divider" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#65B207]">
            <span className="mr-2 inline-block h-px w-6 bg-[#65B207] align-middle" />
            Proven Results
            <span className="ml-2 inline-block h-px w-6 bg-[#65B207] align-middle" />
          </p>
          <h2 className="font-heading text-3xl font-black text-white md:text-4xl lg:text-5xl">
            Don&apos;t take our word for it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/55">
            Here are businesses like yours that went from guessing to growing
            with a real marketing strategy behind them.
          </p>
        </motion.div>

        {/* ── Logo marquee ── */}
        <p className="mb-8 text-center text-sm font-bold uppercase tracking-[0.2em] text-white/50">
          Trusted by Businesses Across Connecticut
        </p>
        <div className="relative mb-16 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" aria-hidden="true">
          <div className="flex animate-marquee w-max gap-12 py-4">
            {marqueeLogos.map((logo, i) => (
              <div
                key={`${logo.file}-${i}`}
                className="flex shrink-0 items-center justify-center opacity-70 brightness-200 grayscale transition-all hover:opacity-100 hover:brightness-100 hover:grayscale-0"
              >
                <Image
                  src={`/images/${logo.file}`}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Case Study Cards ── */}
        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {featuredCaseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={study.href}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#080808] transition-all hover:border-[#65B207]/30"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 inline-flex rounded-full bg-[#65B207]/20 px-3 py-1 text-xs font-semibold text-[#65B207]">
                    {study.industry}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/55">{study.result}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="font-heading text-2xl font-black text-[#65B207]">
                        {study.metric}
                      </p>
                      <p className="text-xs text-white/40">
                        {study.metricLabel}
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-[#65B207] opacity-0 transition-opacity group-hover:opacity-100">
                      View details <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#65B207] px-8 py-3.5 font-semibold text-[#65B207] transition-all hover:bg-[#65B207] hover:text-white"
          >
            View All Case Studies
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* ── Google Reviews Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-4 flex items-center justify-center gap-2"
        >
          <GoogleLogo className="h-6 w-6" />
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-[#FBBC05] text-[#FBBC05]" />
            ))}
          </div>
          <span className="text-lg font-bold text-white">
            {googleReview.rating}
          </span>
          <span className="text-sm text-white/50">&bull;&nbsp;5-Star Rated</span>
        </motion.div>

        {/* ── Review Cards Grid ── */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="flex h-full flex-col rounded-2xl border border-white/8 bg-[#080808]/80 p-6"
            >
              <div className="mb-3 flex items-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-white/70">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#65B207]/15 text-sm font-bold text-[#65B207]">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{review.name}</p>
                    <p className="text-xs text-white/40">{review.date}</p>
                  </div>
                </div>
                <GoogleLogo className="h-4 w-4 opacity-30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href={googleReview.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#65B207] to-[#4a8a05] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#65B207]/20 transition-all duration-300 hover:shadow-[#65B207]/30 hover:scale-[1.03]"
          >
            <GoogleLogo className="h-5 w-5" />
            Read All Reviews on Google
            <ExternalLink
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
