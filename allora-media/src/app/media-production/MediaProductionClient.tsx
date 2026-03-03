"use client";

import { motion } from "framer-motion";
import {
  Film, Camera, Plane, Palette, CheckCircle, XCircle,
  Sparkles, Layers, Eye, BarChart3,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { MetricsStrip } from "@/components/MetricsStrip";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { FAQSchema } from "@/components/StructuredData";
import { TestimonialSection } from "@/components/TestimonialSection";
import { SlideIn, ScaleIn } from "@/components/animations";
import { HeroBanner } from "@/components/HeroBanner";
import { TiltCard } from "@/components/TiltCard";
import { AngleDivider, EdgeAccentStripe, GradientOverlay, RadialGlow } from "@/components/SectionTextures";

const capabilities = [
  {
    icon: <Film size={24} />,
    title: "Cinematic Video",
    description:
      "Brand films, testimonial series, TV commercials, training videos, and campaign content — shot with cinema-grade equipment and produced entirely in-house.",
  },
  {
    icon: <Camera size={24} />,
    title: "Professional Photography",
    description:
      "Team portraits, facility photography, product shoots, event coverage, and project documentation — styled and lit to match your brand's visual standard.",
  },
  {
    icon: <Plane size={24} />,
    title: "Drone & Aerial",
    description:
      "FAA Part 107-certified aerial cinematography for facilities, construction, real estate, events, and establishing shots that add scale and cinematic impact.",
  },
  {
    icon: <Palette size={24} />,
    title: "Graphic Design",
    description:
      "Social media graphics, presentation decks, brand collateral, and visual assets — designed to maintain brand consistency across every touchpoint.",
  },
  {
    icon: <Layers size={24} />,
    title: "Content Library",
    description:
      "Every production delivers an organized, labeled content library — formatted for every platform, ready to deploy across paid, organic, and owned channels.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Post-Production",
    description:
      "Full editing, color grading, sound design, motion graphics, and format optimization — every asset is polished and deployment-ready.",
  },
];

const faqItems = [
  {
    question: "What's included in a production engagement?",
    answer:
      "Every production starts with a Media Blueprint (strategy and creative direction), includes one or more shoot days with our professional crew, and delivers a complete content library — edited, formatted, and ready to deploy across all your channels.",
  },
  {
    question: "Do you only produce video?",
    answer:
      "No — we produce video, photography, drone content, and graphic design. Most clients engage us for video as the primary deliverable, but our shoot days always capture supporting photography and B-roll that expand your content library.",
  },
  {
    question: "How long does a production take?",
    answer:
      "A typical production cycle is 4–8 weeks from kickoff to final delivery. This includes strategy and pre-production (1–2 weeks), shoot days, and post-production (2–4 weeks). We'll set clear milestones during your Media Blueprint phase.",
  },
  {
    question: "Can we use the content for anything we want?",
    answer:
      "Yes — you get full usage rights to everything we produce. Use it on your website, social media, ads, proposals, internal presentations, trade shows — anything. No licensing restrictions or per-use fees.",
  },
  {
    question: "What kind of organizations do you produce for?",
    answer:
      "We work with purpose-led organizations across manufacturing, nonprofits, health & biotech, professional services, real estate, and product brands. If your audience trusts video and you need a production partner who understands strategy, we're a fit.",
  },
  {
    question: "What equipment do you use?",
    answer:
      "We shoot on cinema-grade cameras (Sony FX series, RED), professional lighting kits, wireless audio systems, gimbals, and FAA-certified drones. Every production is crewed — not a one-person run-and-gun operation.",
  },
];

export function MediaProductionClient() {
  return (
    <>
      <FAQSchema faqs={faqItems} />

      {/* HERO */}
      <HeroBanner
        videoSrc="/videos/hero-production.mp4"
        imageSrc="/images/media-production-hero.jpg"
        imageAlt="Professional media production studio"
        overlayOpacity={65}
        cursorSpotlight
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-bold uppercase tracking-wider text-[#68ccd1]"
          >
            Media Production
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            Professional content that builds trust and drives growth.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Cinematic video, professional photography, drone content, and
            graphic design — all produced in-house with strategy, craft, and
            your business objectives in mind.
          </motion.p>
        </div>
      </HeroBanner>

      {/* CREDIBILITY */}
      <MetricsStrip
        metrics={[
          { value: "200+", label: "Projects Produced" },
          { value: "50+", label: "Organizations Served" },
          { value: "7+", label: "Years in Production" },
          { value: "5.0", label: "Google Rating" },
        ]}
      />

      {/* CAPABILITIES */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to bottom" />
        <SectionHeader
          eyebrow="What We Produce"
          title="Every type of content your brand needs — under one roof."
          description="No outsourcing. No freelancer juggling. Our in-house team handles every aspect of production from pre-production through final delivery."
        />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <SlideIn key={cap.title} from="bottom" delay={i * 0.06}>
              <TiltCard className="h-full rounded-2xl border border-white/5 bg-[#0a2029] p-6 hover-lift">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#68ccd1]/10 text-[#68ccd1]">
                  {cap.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{cap.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{cap.description}</p>
              </TiltCard>
            </SlideIn>
          ))}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#fafcfd" from="#0e2a35" />

      {/* ONE SHOOT = ENTIRE LIBRARY */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="left" width="5%" />
        <GradientOverlay from="rgba(104,204,209,0.04)" to="transparent" direction="to bottom right" />
        <SectionHeader
          variant="light"
          eyebrow="The Content Multiplier"
          title="One production day. An entire content library."
          description="A single shoot day with Story Real doesn't produce one deliverable — it builds an arsenal of content that fuels your channels for months."
        />
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <ScaleIn>
              <div className="rounded-2xl border border-red-200/30 bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                  <XCircle size={20} className="text-red-400" />
                  <h3 className="text-lg font-bold text-[#0a1a1f]">Stock Content & DIY</h3>
                </div>
                <ul className="space-y-3 text-sm text-[#0a1a1f]/60">
                  {[
                    "Generic stock footage that looks like everyone else",
                    "Phone videos with poor lighting and audio",
                    "No B-roll library to pull from between shoots",
                    "Same template graphics your competitors use",
                    "Content production is reactive — always scrambling",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.1}>
              <div className="rounded-2xl border border-[#68ccd1]/30 bg-white p-6 shadow-lg shadow-[#68ccd1]/5">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-[#68ccd1]" />
                  <h3 className="text-lg font-bold text-[#0a1a1f]">Story Real Production</h3>
                </div>
                <ul className="space-y-3 text-sm text-[#0a1a1f]/60">
                  {[
                    "Cinematic footage that looks and feels premium",
                    "Professional crew with cinema-grade equipment",
                    "Full B-roll library organized by theme and platform",
                    "Custom graphics that match your brand identity",
                    "Proactive content system — planned months ahead",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#68ccd1]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScaleIn>
          </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#0e2a35" from="#fafcfd" flip />

      {/* TESTIMONIALS */}
      <TestimonialSection />

      <AngleDivider variant="notch" fill="#fafcfd" from="#0e2a35" />

      {/* FAQ */}
      <Section variant="light">
        <SectionHeader
          variant="light"
          eyebrow="FAQ"
          title="Common questions about media production."
        />
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqItems} variant="light" />
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready to build a content library that works as hard as you do?"
        subhead="Book a free Strategy Call. We'll audit your current content, identify the biggest production opportunities, and show you what a professional content system looks like."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="See Our Work"
        secondaryHref="/case-studies"
      />
    </>
  );
}
