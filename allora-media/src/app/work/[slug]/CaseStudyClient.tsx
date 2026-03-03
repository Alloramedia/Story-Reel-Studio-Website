"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Quote,
  Target,
  Lightbulb,
  Film,
  TrendingUp,
} from "lucide-react";
import { HeroBanner } from "@/components/HeroBanner";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import type { CaseStudy } from "@/lib/case-studies-data";

const smoothOut = [0.22, 1, 0.36, 1] as const;

export function CaseStudyClient({ study }: { study: CaseStudy }) {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <HeroBanner
        videoSrc={study.videoSrc}
        imageSrc={study.heroImage || study.image}
        imageAlt={`${study.client || study.clientName} — Case Study`}
        overlayOpacity={72}
      >
        <div className="max-w-4xl">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: smoothOut }}
          >
            <Link
              href="/work"
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-white/50 transition-colors hover:text-[#68ccd1]"
            >
              <ArrowLeft size={14} /> All Case Studies
            </Link>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: smoothOut }}
            className="mb-4 flex flex-wrap gap-2"
          >
            <span className="inline-flex rounded-full bg-[#68ccd1]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#68ccd1]">
              {study.industry}
            </span>
            {study.videoType && (
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/60">
                {study.videoType}
              </span>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.15, ease: smoothOut }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            {study.client || study.clientName}
          </motion.h1>

          {/* Outcome */}
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.28, ease: smoothOut }}
            className="mt-6 max-w-2xl text-xl leading-relaxed text-white/80 md:text-2xl"
          >
            {study.heroOutcome || study.summary}
          </motion.p>

          {/* Metrics strip */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: smoothOut }}
            className="mt-10 flex flex-wrap gap-8"
          >
            {study.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-heading text-3xl font-black text-[#68ccd1] md:text-4xl">
                  {m.value}
                </p>
                <p className="mt-1 text-sm font-medium text-white/50">
                  {m.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </HeroBanner>

      {/* ═══ THE CHALLENGE ═══ */}
      <Section variant="light">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#52b0b6]/15">
                <Target size={20} className="text-[#52b0b6]" />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#52b0b6]">
                The Challenge
              </p>
            </div>
            <h2 className="font-heading text-3xl font-black text-[#0a1a1f] md:text-4xl">
              Where they were stuck
            </h2>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="space-y-4 text-lg leading-relaxed text-[#4a4a4a]">
              {(Array.isArray(study.challenge) ? study.challenge : [study.challenge]).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ═══ THE STRATEGY ═══ */}
      <Section variant="dark">
        <div className="grid items-start gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#68ccd1]/15">
                  <Lightbulb size={20} className="text-[#68ccd1]" />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#68ccd1]">
                  The Strategy
                </p>
              </div>
              <h2 className="font-heading text-3xl font-black text-white md:text-4xl">
                How we mapped the solution
              </h2>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div className="space-y-4 text-lg leading-relaxed text-white/70">
                {(Array.isArray(study.strategy) ? study.strategy : [study.strategy]).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </FadeIn>
        </div>
      </Section>

      {/* ═══ THE PRODUCTION ═══ */}
      {(study.production || study.buildingFoundation?.length > 0) && (
        <Section variant="light">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#52b0b6]/15">
                  <Film size={20} className="text-[#52b0b6]" />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#52b0b6]">
                  The Production
                </p>
              </div>
              <h2 className="font-heading text-3xl font-black text-[#0a1a1f] md:text-4xl">
                What we built
              </h2>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div className="space-y-4 text-lg leading-relaxed text-[#4a4a4a]">
                {(study.production
                  ? [study.production]
                  : study.buildingFoundation || []
                ).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </FadeIn>
          </div>
        </Section>
      )}

      {/* ═══ THE RESULTS ═══ */}
      <Section variant="dark">
        <div className="grid items-start gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#68ccd1]/15">
                  <TrendingUp size={20} className="text-[#68ccd1]" />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#68ccd1]">
                  The Results
                </p>
              </div>
              <h2 className="font-heading text-3xl font-black text-white md:text-4xl">
                What changed
              </h2>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div className="space-y-4 text-lg leading-relaxed text-white/70">
                {(Array.isArray(study.results) ? study.results : [study.results]).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </FadeIn>

          {/* Metrics blocks */}
          <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-2">
            {study.metrics.map((m) => (
              <StaggerItem key={m.label}>
                <div className="rounded-2xl border border-white/10 bg-[#0a2029] p-8 text-center transition-colors duration-300 hover:border-[#68ccd1]/30">
                  <p className="font-heading text-4xl font-black text-[#68ccd1] md:text-5xl">
                    {m.value}
                  </p>
                  <p className="mt-3 text-sm font-medium text-white/50">
                    {m.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* ═══ DELIVERABLES ═══ */}
      {study.deliverables && study.deliverables.length > 0 && (
        <Section variant="light">
          <SectionHeader
            eyebrow="Deliverables"
            eyebrowColor="text-[#52b0b6]"
            title="What we delivered"
            description="Every asset was designed to serve a specific strategic purpose — not just look impressive on a portfolio page."
            center
            variant="light"
          />
          <StaggerContainer className="mx-auto mt-12 max-w-3xl grid gap-4 sm:grid-cols-2">
            {study.deliverables.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3 rounded-xl border border-[#e0e0e0] bg-white px-5 py-4 shadow-sm transition-colors duration-300 hover:border-[#52b0b6]/20">
                  <CheckCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-[#52b0b6]"
                  />
                  <p className="text-sm font-medium leading-relaxed text-[#4a4a4a]">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      )}

      {/* ═══ TESTIMONIAL (conditional) ═══ */}
      {study.testimonialQuote && (
        <Section variant="dark">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <Quote
                size={48}
                className="mx-auto mb-8 text-[#68ccd1]/30"
              />
              <blockquote className="font-heading text-2xl font-bold leading-relaxed text-white md:text-3xl lg:text-4xl">
                &ldquo;{study.testimonialQuote}&rdquo;
              </blockquote>
              {study.testimonialAuthor && (
                <div className="mt-8">
                  <p className="text-base font-bold text-[#68ccd1]">
                    {study.testimonialAuthor}
                  </p>
                  {study.testimonialRole && (
                    <p className="mt-1 text-sm text-white/50">
                      {study.testimonialRole}
                    </p>
                  )}
                </div>
              )}
            </FadeIn>
          </div>
        </Section>
      )}

      {/* ═══ CREDITS ═══ */}
      <Section variant="light">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#52b0b6]">
              Project Credits
            </p>
            <h2 className="font-heading text-3xl font-black text-[#0a1a1f] md:text-4xl">
              {study.client || study.clientName}
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-[#666]">
              <div>
                <span className="font-bold text-[#4a4a4a]">Industry:</span>{" "}
                {study.industry}
              </div>
              {study.videoType && (
                <div>
                  <span className="font-bold text-[#4a4a4a]">Video Type:</span>{" "}
                  {study.videoType}
                </div>
              )}
              <div>
                <span className="font-bold text-[#4a4a4a]">Production:</span>{" "}
                Story Real Studios
              </div>
            </div>
          </FadeIn>

          {/* More work link */}
          <FadeIn delay={0.2}>
            <div className="mt-12">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0a1a1f]/20 px-8 py-4 text-base font-bold text-[#0a1a1f] transition-all duration-300 hover:border-[#52b0b6] hover:bg-[#52b0b6]/10"
              >
                View More Case Studies
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ═══ CTA ═══ */}
      <CTASection
        headline="Ready to build your own success story?"
        subhead="Book a free strategy call. We'll review your current content, identify the biggest opportunities, and map out a system that drives real results."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="See Our Process"
        secondaryHref="/process"
      />
    </>
  );
}
