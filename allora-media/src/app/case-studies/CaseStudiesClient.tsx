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
  { value: "300+", label: "Videos Produced" },
  { value: "6", label: "Industries Served" },
  { value: "Telly", label: "Award-Winning Studio"},
  { value: "100%", label: "Client Retention Rate" },
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
            className="mb-4 text-sm font-semibold uppercase text-balance text-[#68ccd1]"
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
            Every production company says they make great videos. We show
            you the strategy behind the content and the results it drives.
            Each case study breaks down the challenge, the production
            approach, and the measurable impact — with real outcomes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-white transition-all hover:scale-[1.03] hover:bg-[#7dd6da]"
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
                <p className="font-heading text-3xl font-black text-[#68ccd1] md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/55">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTERS + CASE STUDIES */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to bottom" />
        <SectionHeader
          eyebrow="Filter by Industry"
          title="Find a business like yours."
          description="Click an industry to see the work we've done. Every production strategy is built around your specific audience — not a one-size-fits-all template."
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
                  ? "bg-[#68ccd1] text-white"
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

      <AngleDivider variant="notch" fill="#fafcfd" from="#0e2a35" />

      {/* WHY THESE RESULTS HAPPEN */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="right" width="5%" />
        <GradientOverlay from="rgba(14,42,53,0.03)" to="transparent" direction="to bottom right" />
        <RadialGlow color="#68ccd1" position="90% 20%" size="600px" opacity={0.04} />
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
                title: "We start with story strategy",
                desc: "Before a single camera rolls, we dig into your mission, audience, and goals. Every production decision flows from a strategic brief — so your content actually moves the needle.",
              },
              {
                step: "02",
                title: "We produce content libraries",
                desc: "Not just a single video. Every shoot yields brand films, interview segments, social cuts, b-roll packages, and platform-specific edits — giving you months of strategic content.",
              },
              {
                step: "03",
                title: "We measure what matters",
                desc: "Views, engagement, website traffic, lead generation, investor interest, donor response — we track the outcomes your content was built to drive.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5 rounded-2xl border border-white/10 bg-[#0a2029] p-6"
              >
                <span className="font-heading text-2xl font-black text-[#68ccd1]">
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

      <AngleDivider variant="notch" fill="#0e2a35" from="#fafcfd" flip />

      {/* INDUSTRY ROI BENCHMARKS */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to top left" />
        <RadialGlow color="#68ccd1" position="10% 50%" size="500px" opacity={0.03} />
        <SectionHeader
          eyebrow="By Industry"
          title="What we've built for organizations like yours."
          description="Every industry has unique storytelling needs. Here's a snapshot of what strategic video production delivers in each sector we serve."
        />
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                industry: "Manufacturing",
                highlight: "20+ Sales Assets",
                outcome: "3x LinkedIn Growth",
                detail: "Product overviews, facility tours, and capability videos that give sales teams tools to close — resulting in tens of thousands of units sold.",
              },
              {
                industry: "Health & Biotech",
                highlight: "100+ Videos",
                outcome: "Investor Confidence",
                detail: "Clinical pipeline explainers, executive profiles, and investor-grade content for a company that went from startup to NASDAQ listing.",
              },
              {
                industry: "Nonprofit & Advocacy",
                highlight: "Telly Award",
                outcome: "Record Fundraising",
                detail: "Impact films and donor stories that connect audiences emotionally to the mission — driving donations and volunteer engagement.",
              },
              {
                industry: "Lifestyle & DTC",
                highlight: "40% ↓ CPA",
                outcome: "Brand Awareness",
                detail: "Adventure-driven brand films, product demos, and UGC-style content that builds authentic connection with consumers.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="h-full rounded-2xl border border-white/10 bg-[#0e2a35] p-6 hover-lift border-glow"
              >
                <h3 className="font-heading text-lg font-bold text-white">{item.industry}</h3>
                <div className="mt-3 flex gap-6">
                  <div>
                    <p className="text-xs text-white/40">Key Highlight</p>
                    <p className="font-heading text-xl font-black text-[#68ccd1]">{item.highlight}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40">Outcome</p>
                    <p className="font-heading text-xl font-black text-[#68ccd1]">{item.outcome}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/55">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#fafcfd" from="#0e2a35" />

      {/* URGENCY */}
      <Section variant="light">
        <GradientOverlay from="rgba(14,42,53,0.03)" to="transparent" direction="to bottom right" />
        <div className="mx-auto max-w-3xl py-6">
          <ScaleIn>
          <div className="rounded-2xl border border-[#68ccd1]/20 bg-[#0a2029] p-8 text-center md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#68ccd1]/10">
                <Clock size={28} className="text-[#68ccd1]" />
              </div>
              <h2 className="font-heading text-2xl font-black text-white md:text-3xl">
                We only take on a handful of new clients each month.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
                We&apos;re a small, focused team — not a factory. Every client gets direct access to the producers and directors behind their project. To keep that quality, we limit new engagements to <span className="font-bold text-[#68ccd1]">3–5 new clients per month</span>. When we&apos;re full, we&apos;re full.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#68ccd1]/25 transition-all hover:bg-[#7dd6da] hover:scale-[1.03]"
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
        headline="Ready to see what video can do for your organization?"
        subhead="Book a Brand Story Consultation. We'll learn about your mission, your audience, and your goals — and map out exactly how cinematic content can drive real results."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
      />
    </>
  );
}
