"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Filter, X } from "lucide-react";
import { HeroBanner } from "@/components/HeroBanner";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import {
  caseStudies,
  getCaseStudyIndustries,
  getCaseStudyVideoTypes,
  type CaseStudy,
} from "@/lib/case-studies-data";

const industries = getCaseStudyIndustries();
const videoTypes = getCaseStudyVideoTypes();

export default function WorkClient() {
  const [activeIndustry, setActiveIndustry] = useState<string>("All");
  const [activeVideoType, setActiveVideoType] = useState<string>("All");

  const filtered = useMemo(() => {
    return caseStudies.filter((cs) => {
      const matchIndustry =
        activeIndustry === "All" || cs.industry === activeIndustry;
      const matchType =
        activeVideoType === "All" || cs.videoType === activeVideoType;
      return matchIndustry && (videoTypes.length === 0 || matchType);
      return matchIndustry && matchType;
    });
  }, [activeIndustry, activeVideoType]);

  const hasActiveFilters =
    activeIndustry !== "All" || activeVideoType !== "All";

  function clearFilters() {
    setActiveIndustry("All");
    setActiveVideoType("All");
  }

  return (
    <>
      {/* ═══ HERO ═══ */}
      <HeroBanner
        videoSrc="/videos/hero-casestudies.mp4"
        overlayOpacity={72}
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-bold uppercase text-[#68ccd1]"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            Campaigns that move <br className="hidden md:block" />
            the numbers that matter.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Every project below started with a strategic question, not a
            shot list. The result: video systems that shortened sales cycles,
            increased conversions, and compounded trust over time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-[#0e2a35] shadow-lg shadow-[#68ccd1]/25 transition-all duration-300 hover:bg-[#7dd6da] hover:scale-[1.03]"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </HeroBanner>

      {/* ═══ FILTER BAR + CASE STUDY GRID ═══ */}
      <Section variant="light">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real clients. Measured results."
          description="Every engagement follows the Story Real Method — strategy first, cinematic production second, measurable deployment third. Filter by industry or video type to find work relevant to your goals."
          variant="light"
        />

        {/* ── Filters ── */}
        <FadeIn className="mb-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-center">
            {/* Industry filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#888]">
                <Filter size={14} /> Industry
              </span>
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveIndustry(industry)}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-300 ${
                    activeIndustry === industry
                      ? "bg-[#68ccd1] text-[#0e2a35] shadow-md shadow-[#68ccd1]/20"
                      : "border border-[#e0e0e0] text-[#4a4a4a] hover:border-[#52b0b6]/40 hover:text-[#0a1a1f]"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>

            {/* Video type filter */}
            {videoTypes.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#888]">
                  <Filter size={14} /> Type
                </span>
                {["All", ...videoTypes].map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveVideoType(type)}
                    className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-300 ${
                      activeVideoType === type
                        ? "bg-[#68ccd1] text-[#0e2a35] shadow-md shadow-[#68ccd1]/20"
                        : "border border-[#e0e0e0] text-[#4a4a4a] hover:border-[#52b0b6]/40 hover:text-[#0a1a1f]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}

            {/* Clear filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#52b0b6] transition-colors hover:text-[#0a1a1f]"
              >
                <X size={14} /> Clear
              </button>
            )}
          </div>
        </FadeIn>

        {/* ── Case Study Cards ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeIndustry}-${activeVideoType}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((cs, i) => (
              <WorkCard key={cs.slug} study={cs} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-[#666]">
              No case studies match the current filters.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 text-sm font-semibold text-[#52b0b6] underline underline-offset-4 transition-colors hover:text-[#0a1a1f]"
            >
              Clear all filters
            </button>
          </div>
        )}
      </Section>

      {/* ═══ CTA ═══ */}
      <CTASection
        headline="Your story is next."
        subhead="Book a free strategy call and we'll show you exactly how a video system can drive measurable growth for your organization."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="See Our Process"
        secondaryHref="/process"
      />
    </>
  );
}

/* ─────────────────────────────────────────────
   WORK CARD — Problem → Approach → Outcome
   ───────────────────────────────────────────── */
function WorkCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group overflow-hidden rounded-2xl border border-[#e0e0e0] bg-white shadow-md transition-all duration-500 hover:border-[#52b0b6]/30 hover:shadow-xl"
    >
      <Link href={`/work/${study.slug}`} className="block">
        {/* Hero image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={study.heroImage || study.image}
            alt={study.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 flex gap-2">
            <span className="inline-flex rounded-full bg-[#52b0b6]/20 px-3 py-1 text-xs font-semibold text-[#52b0b6]">
              {study.industry}
            </span>
            {study.videoType && (
              <span className="inline-flex rounded-full bg-[#0a1a1f]/10 px-3 py-1 text-xs font-semibold text-[#4a4a4a]">
                {study.videoType}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-[#0a1a1f]">
            {study.client || study.clientName}
          </h3>

          {/* Problem → Approach → Outcome */}
          <div className="mt-4 space-y-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#52b0b6]">
                Problem
              </p>
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[#666]">
                {Array.isArray(study.challenge) ? study.challenge[0] : study.challenge}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#52b0b6]">
                Approach
              </p>
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[#666]">
                {Array.isArray(study.strategy) ? study.strategy[0] : study.strategy}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#52b0b6]">
                Outcome
              </p>
              <p className="mt-1 text-sm font-semibold leading-relaxed text-[#0a1a1f]">
                {study.heroOutcome || study.summary}
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#e0e0e0] pt-4">
            {study.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-heading text-lg font-bold text-[#52b0b6]">
                  {m.value}
                </p>
                <p className="text-[11px] leading-tight text-[#666]">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* Read more */}
          <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#52b0b6] transition-all group-hover:translate-x-1">
            Read case study{" "}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
