"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroBanner } from "@/components/HeroBanner";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import {
  FileText,
  Camera,
  RefreshCcw,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

/* ─── Engagement Tiers ─── */
const tiers = [
  {
    icon: <FileText size={28} />,
    name: "Strategy Blueprint",
    range: "$5K – $10K",
    tagline: "Clarity before cameras.",
    description:
      "A standalone strategic engagement for organizations that need a research-backed content plan before committing to production. You walk away with a complete Media Blueprint — the operating system behind every future creative decision.",
    includes: [
      "Stakeholder interviews and goal alignment",
      "Audience research and segmentation",
      "Competitive content landscape analysis",
      "Messaging framework and core narratives",
      "Content architecture with channel mapping",
      "Media Blueprint document with deployment roadmap",
    ],
    ideal: "Organizations exploring a rebrand, launching a new initiative, or needing strategic clarity before a major production investment.",
    scopeNote: "Scope depends on the number of stakeholder interviews, depth of competitive research, and complexity of audience segmentation.",
  },
  {
    icon: <Camera size={28} />,
    name: "Campaign Production",
    range: "$15K – $50K+",
    tagline: "Strategy + production + deployment. One system.",
    featured: true,
    description:
      "The full Story Real Method applied to a defined campaign. Strategy, cinematic production, post-production, and deployment — integrated end-to-end. This is how we build the video systems that compound trust and drive measurable outcomes.",
    includes: [
      "Complete Strategy Blueprint (included)",
      "Pre-production planning and logistics",
      "Cinematic filming with professional crews",
      "Multi-camera interviews and B-roll capture",
      "Drone cinematography (where applicable)",
      "Professional editing, color grading, and sound design",
      "Custom motion graphics and lower thirds",
      "Platform-native exports for all channels",
      "Organized content library with deployment guide",
    ],
    ideal: "Organizations ready to invest in a flagship content system — testimonial campaigns, brand films, facility tours, recruitment series, or product launch content.",
    scopeNote: "Investment depends on shoot days, location count, number of final deliverables, motion graphics complexity, and whether drone or specialized equipment is required.",
  },
  {
    icon: <RefreshCcw size={28} />,
    name: "Ongoing Content System",
    range: "$5K – $15K/mo",
    tagline: "Fresh creative. Every month.",
    description:
      "For organizations that need a continuous pipeline of professional content — not just a one-time campaign. Monthly production cycles, rolling strategy refinement, content library management, and ongoing deployment support. Your content system stays active.",
    includes: [
      "Monthly strategy and editorial planning",
      "Recurring production days (video + photo)",
      "Ongoing editing and post-production",
      "Content library management and organization",
      "Platform-native formatting and deployment",
      "Monthly performance review and strategy refinement",
      "Priority scheduling and dedicated team access",
    ],
    ideal: "Organizations with active content operations that need a consistent flow of cinematic content across multiple channels — without managing freelancers or building an in-house team.",
    scopeNote: "Monthly investment depends on production frequency, deliverable volume, number of platforms served, and whether the engagement includes paid media creative.",
  },
];

/* ─── Pricing FAQs ─── */
const faqs = [
  {
    question: "Why ranges instead of fixed prices?",
    answer:
      "Because scope drives investment — not arbitrary packages. A two-day testimonial campaign for one location is a fundamentally different engagement than a multi-location brand film with drone cinematography and motion graphics. We publish ranges so you can orient quickly, then we scope your specific project in detail during a strategy call.",
  },
  {
    question: "What determines where my project falls within a range?",
    answer:
      "The primary variables are: number of shoot days, locations, interview subjects, final deliverable count, motion graphics complexity, and specialized equipment needs (drone, studio lighting, teleprompter). We'll walk through each variable on your strategy call and provide a detailed, line-item proposal.",
  },
  {
    question: "Do you require a deposit or milestone payments?",
    answer:
      "Yes. Standard engagements follow a milestone structure: 50% at project kickoff, 25% at production completion, and 25% at final delivery. For ongoing content systems, we invoice monthly in advance. Enterprise and procurement-friendly billing structures are available.",
  },
  {
    question: "How long does a typical campaign take from kickoff to delivery?",
    answer:
      "Strategy Blueprints deliver in 2–3 weeks. Full campaign productions typically run 4–8 weeks from discovery through final delivery, depending on scope, location count, and stakeholder availability. We provide detailed timelines in every proposal.",
  },
  {
    question: "Can we start with a Strategy Blueprint and decide on production later?",
    answer:
      "Absolutely — and many clients do exactly that. The Strategy Blueprint is designed as a standalone deliverable. You'll walk away with a complete Media Blueprint that any competent production team could execute. If you choose to move into production with us, the Blueprint investment is applied toward your campaign scope.",
  },
  {
    question: "Do you work with procurement departments and purchase orders?",
    answer:
      "Yes. We regularly work with organizations that have formal procurement processes, including PO-based billing, W-9 documentation, insurance certificates, and net-30/net-60 terms for qualified accounts. We'll adapt to your process.",
  },
  {
    question: "What about your Studio rental? Is that priced separately?",
    answer:
      "Yes. Our production studio is available for independent rental — separate from campaign engagements. Studio pricing covers the physical space, lighting grid, and production infrastructure. Visit our Studio page for availability and rates.",
  },
  {
    question: "What if we need something outside these three engagement modes?",
    answer:
      "These are our core engagement structures, but we're not rigid. If you need a hybrid approach — say, a Strategy Blueprint combined with a single shoot day for a pitch video — we'll scope it accordingly. The strategy call is where we figure out the right structure for your goals.",
  },
];

export function PricingClient() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroBanner
        videoSrc="/videos/hero-about.mp4"
        imageSrc="/images/portfolio/hero-banner-poster.jpg"
        imageAlt="Story Real Studios pricing"
        overlayOpacity={65}
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-bold uppercase text-[#68ccd1]"
          >
            Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Premium video.{" "}
            <span className="text-[#68ccd1]">Transparent investment.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/60"
          >
            Three engagement modes built around how organizations actually
            invest in video. Clear ranges, defined deliverables, and no hidden
            costs. Scope drives investment — not arbitrary tier names.
          </motion.p>
        </div>
      </HeroBanner>

      {/* ── ENGAGEMENT TIERS ── */}
      <Section variant="light">
        <SectionHeader
          eyebrow="Engagement Modes"
          title="Choose the structure that fits your goals."
          description="Every engagement starts with a strategy call where we scope your project in detail. These ranges give you immediate orientation — your proposal will be precise."
          variant="light"
        />
        <StaggerContainer className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  tier.featured
                    ? "border-[#52b0b6]/40 bg-[#52b0b6]/[0.06] shadow-lg shadow-[#52b0b6]/10"
                    : "border-[#e0e0e0] bg-white shadow-md hover:border-[#52b0b6]/40 hover:shadow-lg"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-6 rounded-full bg-[#68ccd1] px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#080808]">
                    Most Popular
                  </div>
                )}

                {/* Icon + Name */}
                <div className="mb-4 inline-flex rounded-xl bg-[#52b0b6]/10 p-3 text-[#52b0b6]">
                  {tier.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#1a1a1a]">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#52b0b6]">
                  {tier.tagline}
                </p>

                {/* Price Range */}
                <div className="mt-6 border-t border-[#e0e0e0] pt-6">
                  <p className="font-heading text-3xl font-black text-[#1a1a1a] md:text-4xl">
                    {tier.range}
                  </p>
                  <p className="mt-1 text-xs text-[#888]">
                    {tier.name === "Ongoing Content System"
                      ? "per month"
                      : "per engagement"}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-6 flex-1 text-sm leading-relaxed text-[#4a4a4a]">
                  {tier.description}
                </p>

                {/* What's Included */}
                <div className="mt-6 border-t border-[#e0e0e0] pt-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#888]">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-2">
                    {tier.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[#666]"
                      >
                        <CheckCircle
                          size={14}
                          className="mt-0.5 shrink-0 text-[#52b0b6]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="mt-6 rounded-xl bg-[#f0f0f0] p-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-[#52b0b6]">
                    Ideal For
                  </p>
                  <p className="text-sm leading-relaxed text-[#666]">
                    {tier.ideal}
                  </p>
                </div>

                {/* Scope Note */}
                <p className="mt-4 text-xs italic text-[#999]">
                  {tier.scopeNote}
                </p>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
                    tier.featured
                      ? "bg-[#68ccd1] text-[#080808] shadow-lg shadow-[#68ccd1]/25 hover:bg-[#7dd6da] hover:scale-[1.03]"
                      : "border-2 border-[#e0e0e0] text-[#1a1a1a] hover:border-[#52b0b6] hover:bg-[#52b0b6]/10"
                  }`}
                >
                  {tier.featured ? (
                    <>
                      <Star size={16} className="mr-2" />
                      Book a Strategy Call
                    </>
                  ) : (
                    <>
                      Get Started
                      <ArrowRight size={16} className="ml-2" />
                    </>
                  )}
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ── HOW SCOPE WORKS ── */}
      <Section variant="dark">
        <SectionHeader
          eyebrow="How Scope Works"
          title="What actually drives the investment."
          description="We don't price by the minute or the deliverable count. Here are the variables that determine where your project falls within a range."
          eyebrowColor="text-[#68ccd1]"
        />
        <div className="mx-auto mt-16 max-w-3xl">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {[
              { factor: "Shoot Days", detail: "More locations or interview subjects require additional production days." },
              { factor: "Location Count", detail: "Multi-site campaigns involve travel logistics, permitting, and additional crew time." },
              { factor: "Deliverable Volume", detail: "A 5-video campaign scopes differently than a 20-asset content library." },
              { factor: "Motion Graphics", detail: "Simple lower thirds vs. full 3D animation — complexity scales the post-production timeline." },
              { factor: "Specialized Equipment", detail: "Drone cinematography, studio lighting rigs, teleprompter — each adds to the production spec." },
              { factor: "Review Cadence", detail: "Standard review rounds are included. Accelerated timelines or additional revision cycles adjust scope." },
            ].map((item) => (
              <StaggerItem key={item.factor}>
                <div className="rounded-xl border border-[#1a4a58]/40 bg-[#0e2a35] p-6 transition-all duration-300 hover:border-[#68ccd1]/30">
                  <h3 className="font-heading text-base font-bold text-white">
                    {item.factor}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {item.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* ── STUDIO LINK ── */}
      <Section variant="light">
        <FadeIn>
          <div className="mx-auto max-w-2xl rounded-2xl border border-[#e0e0e0] bg-white p-8 text-center shadow-md md:p-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#52b0b6]">
              Studio Rental
            </p>
            <h2 className="font-heading text-2xl font-black text-[#1a1a1a] md:text-3xl">
              Need the space without the full production?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#4a4a4a]">
              Our production studio is available for independent rental —
              complete with lighting grid, cyc wall, and production
              infrastructure. Studio pricing is separate from campaign
              engagements.
            </p>
            <Link
              href="/studio"
              className="mt-8 inline-flex items-center rounded-full border-2 border-[#e0e0e0] px-8 py-4 text-base font-bold text-[#1a1a1a] transition-all duration-300 hover:border-[#52b0b6] hover:bg-[#52b0b6]/10"
            >
              View Studio Details
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* ── FAQS ── */}
      <Section variant="dark">
        <SectionHeader
          eyebrow="Common Questions"
          title="Budgets, procurement, and timelines."
          description="Straight answers to the questions we hear most often from marketing directors, founders, and procurement teams."
          eyebrowColor="text-[#68ccd1]"
        />
        <div className="mx-auto mt-16 max-w-3xl">
          <FAQAccordion items={faqs} variant="dark" />
        </div>
      </Section>

      {/* ── CTA ── */}
      <CTASection
        variant="light"
        headline="Let's scope your project."
        subhead="Book a strategy call. We'll walk through your goals, define scope, and provide a detailed proposal — with zero obligation and zero pressure."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="See Our Process"
        secondaryHref="/process"
      />
    </>
  );
}
