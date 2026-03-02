"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/Section";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTASection } from "@/components/CTASection";
import { caseStudies, industries } from "@/lib/case-studies-data";
import { cn } from "@/lib/utils";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ArrowRight, Clock } from "lucide-react";
import { ScaleIn } from "@/components/animations";
import { HeroBanner } from "@/components/HeroBanner";
import { AngleDivider, EdgeAccentStripe, GradientOverlay, RadialGlow } from "@/components/SectionTextures";

const stats = [
  { value: "150+", label: "Campaigns Managed" },
  { value: "$0.32–$0.65", label: "Avg. CPC Range", benchmark: "Industry Avg: $1.95" },
  { value: "3–5x", label: "Typical ROAS", benchmark: "Industry Avg: 1.5–2x" },
  { value: "30M+", label: "Ad Impressions Delivered" },
];

export function CaseStudiesClient() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? caseStudies
      : caseStudies.filter((s) => s.industry === filter);

  return (
    <>
      {/* HERO */}
      <HeroBanner
        videoSrc="/videos/hero-casestudies.mp4"
        overlayOpacity={70}
        cursorSpotlight
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-semibold uppercase text-balance text-[#65B207]"
          >
            Proof Over Promises
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            Real businesses. Real results.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Every agency says they get results. We show you exactly how.
            Each case study below breaks down the problem, the strategy we
            built, and the measurable outcome — with real numbers. These
            are the same approaches we&apos;ll use for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#65B207] px-8 py-4 text-base font-bold text-white transition-all hover:scale-[1.03] hover:bg-[#7acc09]"
            >
              Get Results Like These
            </Link>
          </motion.div>
        </div>
      </HeroBanner>

      {/* AGGREGATE STATS */}
      <section className="border-b border-white/10 bg-[#0d0d0d] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-heading text-3xl font-black text-[#65B207] md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/55">{stat.label}</p>
                {stat.benchmark && (
                  <p className="mt-1 text-xs text-white/50">{stat.benchmark}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTERS + CASE STUDIES */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to bottom" />
        <SectionHeader
          eyebrow="Filter by Industry"
          title="Find a business like yours."
          description="Click an industry to see how we helped businesses in that space. Every strategy is built around your specific market — not a one-size-fits-all template."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setFilter(industry)}
              aria-pressed={filter === industry}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                filter === industry
                  ? "bg-[#65B207] text-white"
                  : "bg-[#0d0d0d] text-white/60 hover:bg-white/10"
              )}
            >
              {industry}
            </button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* WHY THESE RESULTS HAPPEN */}
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="right" width="5%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <RadialGlow color="#65B207" position="90% 20%" size="600px" opacity={0.04} />
        <div className="mx-auto max-w-3xl py-6 text-center">
          <SectionHeader
            variant="light"
            eyebrow="The Pattern"
            title="Why these results happen."
          />
          <div className="space-y-6 text-left">
            {[
              {
                step: "01",
                title: "We install real tracking first",
                desc: "Before launching anything, we set up conversion tracking so every lead, call, and form submission is attributed to the exact campaign that generated it. No guessing.",
              },
              {
                step: "02",
                title: "We produce content that performs",
                desc: "Every video, photo, and graphic is designed for ad performance — not just aesthetics. Testimonial videos, project documentation, and brand content built to convert.",
              },
              {
                step: "03",
                title: "We optimize with real data",
                desc: "Monthly reviews, creative testing, audience refinement, and budget optimization — all based on actual performance data, not gut feelings.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5 rounded-2xl border border-white/10 bg-[#131E13] p-6"
              >
                <span className="font-heading text-2xl font-black text-[#65B207]">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-white/55">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" flip />

      {/* INDUSTRY ROI BENCHMARKS */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to top left" />
        <RadialGlow color="#65B207" position="10% 50%" size="500px" opacity={0.03} />
        <SectionHeader
          eyebrow="Industry Benchmarks"
          title="What's possible in your industry."
          description="These are real ranges based on campaigns we've managed. Your results will vary based on your market, offer, and budget — but this is what we consistently deliver."
        />
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                industry: "Construction & Trades",
                cpl: "$40–$250",
                roas: "5–15x",
                detail: "High-ticket services sustain higher CPLs — a single roofing or remodeling close can pay for months of ad spend.",
              },
              {
                industry: "Home Services",
                cpl: "$25–$80",
                roas: "4–10x",
                detail: "Recurring service potential makes each customer worth far more than the initial job.",
              },
              {
                industry: "Food & Beverage",
                cpl: "$5–$25",
                roas: "3–8x",
                detail: "Low CPL with high volume. Social proof and visual content drive foot traffic fast.",
              },
              {
                industry: "Beauty & Retail",
                cpl: "$10–$40",
                roas: "4–8x",
                detail: "Visual-first industry where professional content has an outsized impact on conversion.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="h-full rounded-2xl border border-white/10 bg-[#080808] p-6 hover-lift border-glow"
              >
                <h3 className="font-heading text-lg font-bold text-white">{item.industry}</h3>
                <div className="mt-3 flex gap-6">
                  <div>
                    <p className="text-xs text-white/40">Cost Per Lead</p>
                    <p className="font-heading text-xl font-black text-[#65B207]">{item.cpl}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40">Typical ROAS</p>
                    <p className="font-heading text-xl font-black text-[#65B207]">{item.roas}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/55">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* URGENCY */}
      <Section variant="light">
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <div className="mx-auto max-w-3xl py-6">
          <ScaleIn>
          <div className="rounded-2xl border border-[#65B207]/20 bg-[#131E13] p-8 text-center md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#65B207]/10">
                <Clock size={28} className="text-[#65B207]" />
              </div>
              <h2 className="font-heading text-2xl font-black text-white md:text-3xl">
                We only take on a handful of new clients each month.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
                We&apos;re a small, focused team — not a factory. Every client gets direct access to the people building and managing their campaigns. To keep that quality, we limit new onboarding to <span className="font-bold text-[#65B207]">3–5 new clients per month</span>. When we&apos;re full, we&apos;re full.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#65B207] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#65B207]/25 transition-all hover:bg-[#7acc09] hover:scale-[1.03]"
              >
                Claim Your Spot
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
          </ScaleIn>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialSection />

      {/* CTA */}
      <CTASection
        headline="Want results like these for your business?"
        subhead="Book a free Growth Blueprint Call. We'll audit your current marketing, show you the gaps, and give you a clear plan to get real, measurable results — whether you work with us or not."
        primaryLabel="Book a Growth Blueprint Call"
        primaryHref="/contact"
      />
    </>
  );
}
