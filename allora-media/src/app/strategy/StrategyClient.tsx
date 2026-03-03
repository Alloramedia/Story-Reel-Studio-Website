"use client";

import { motion } from "framer-motion";
import {
  Target,
  Users,
  FileText,
  CheckCircle,
  Compass,
  MessageSquare,
  Layers,
  Handshake,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { HeroBanner } from "@/components/HeroBanner";
import {
  AngleDivider,
  GradientOverlay,
  RadialGlow,
  EdgeAccentStripe,
} from "@/components/SectionTextures";
import { siteConfig } from "@/lib/constants";

/* ─── Strategy Pillars ─── */
const strategyPillars = [
  {
    icon: <MessageSquare size={28} />,
    title: "Messaging Framework",
    description:
      "We define what your brand says — and how it says it. Not taglines-by-committee, but a clear articulation of your value that resonates with decision-makers. Every piece of content maps back to this framework, so the story stays coherent whether someone watches a 60-second ad or a 12-minute case study.",
  },
  {
    icon: <Users size={28} />,
    title: "Audience Architecture",
    description:
      "We map your buyer landscape — primary, secondary, and internal audiences — so you know exactly who each piece of content is built for. We identify where they spend attention, what triggers trust, and what moves them from awareness to conversation.",
  },
  {
    icon: <Compass size={28} />,
    title: "Channel Intent",
    description:
      "Every channel has a job. LinkedIn builds authority. YouTube builds depth. Your website closes. We assign clear intent to each channel so content isn't repurposed randomly — it's deployed with purpose and measured against the right benchmarks.",
  },
  {
    icon: <Layers size={28} />,
    title: "Story Architecture",
    description:
      "We design the narrative structure for your entire content system — from hero brand stories to proof-point testimonials to product explainers. Each piece exists in relationship to the others, building a layered argument that compounds trust over time.",
  },
];

/* ─── Blueprint Deliverables ─── */
const blueprintDeliverables = [
  "Brand messaging framework with positioning language and proof points",
  "Stakeholder interview guide and question bank",
  "Audience persona profiles with channel behavior mapping",
  "Content matrix — every asset, its purpose, its audience, and its channel",
  "Story architecture map showing narrative flow across the buyer journey",
  "Production brief with creative direction, tone, and reference selects",
  "Channel deployment plan with format specs and cadence recommendations",
  "KPI framework tied to business outcomes, not vanity metrics",
];

/* ─── Process Steps ─── */
const processSteps = [
  {
    step: "01",
    title: "Concepting",
    description:
      "We review your existing content, competitive landscape, and growth goals. Then we develop two to three strategic directions — each with a distinct narrative angle, audience focus, and production approach. You see the thinking before we lock anything in.",
  },
  {
    step: "02",
    title: "Scripting & Interview Planning",
    description:
      "Once the direction is locked, we write scripts, build interview question banks, and outline every shoot. For testimonial-driven work, we design conversations that surface real stories without putting words in anyone's mouth. For scripted content, every frame has purpose.",
  },
  {
    step: "03",
    title: "Stakeholder Alignment",
    description:
      "Before production begins, every decision-maker sees the plan. We walk your team through the Media Blueprint — messaging, visuals, timeline, budget allocation, and success metrics. No surprises on shoot day. No emergency revisions after delivery.",
  },
];

/* ─── Success Outcomes ─── */
const successOutcomes = [
  {
    icon: <Handshake size={24} />,
    label: "Trust",
    detail:
      "Your audience sees a brand that knows what it stands for. Messaging is consistent across every touchpoint. Prospects arrive at sales conversations already believing you're credible.",
  },
  {
    icon: <Target size={24} />,
    label: "Clarity",
    detail:
      "Your internal team — marketing, sales, leadership — speaks the same language about who you serve, what you offer, and why it matters. No more conflicting decks or ad-hoc brand interpretations.",
  },
  {
    icon: <FileText size={24} />,
    label: "Conversion Readiness",
    detail:
      "Content is built to move people. Every asset has a job in the funnel — awareness, consideration, or decision — and the calls to action are specific, tested, and aligned with how your buyers actually buy.",
  },
  {
    icon: <Users size={24} />,
    label: "Sales Enablement",
    detail:
      "Your sales team gets content they can actually use — case study videos, objection-handling clips, one-pagers, and proof-point reels. Strategy doesn't end at marketing. It arms the people closing deals.",
  },
];

/* ─── FAQs ─── */
const faqs = [
  {
    question: "How long does the strategy phase take?",
    answer:
      "Most strategy engagements run two to four weeks from kickoff to final Media Blueprint delivery. The timeline depends on the number of stakeholder interviews, the complexity of your audience landscape, and how quickly your team can provide feedback on drafts. We never rush this phase — the quality of your strategy directly determines the ROI of everything that follows.",
  },
  {
    question: "What does a strategy engagement cost?",
    answer:
      "Strategy is included in every full production engagement. If you need a standalone strategy engagement — for example, to build an internal content roadmap or align leadership before committing to production — pricing starts at $5,000 and scales with scope. We'll scope it on a discovery call so you know the number before committing.",
  },
  {
    question: "Who needs to be involved from our side?",
    answer:
      "At minimum, we need access to someone who understands your customers and someone who approves the brand direction — often a marketing lead and a founder or VP. For stakeholder interviews, we'll also want to talk to salespeople, customer success leads, or subject-matter experts. We handle all the scheduling and keep sessions to 30–45 minutes.",
  },
  {
    question: "What if we already have brand guidelines?",
    answer:
      "Great — we incorporate them. Existing brand guidelines, style guides, and messaging docs give us a running start. But we'll still pressure-test them against your current audience, competitive environment, and business objectives. Strategy isn't about ignoring what exists. It's about making sure what exists is still working.",
  },
  {
    question: "How many rounds of revisions are included?",
    answer:
      "The Media Blueprint goes through two structured review rounds. We present the first draft in a live session, incorporate your feedback, and deliver a refined final version. Most clients lock the blueprint in two rounds. If your organization has a more complex approval process, we'll build that into the timeline upfront.",
  },
  {
    question: "Can we use the Media Blueprint with another production team?",
    answer:
      "Yes. The Media Blueprint is yours. If you choose to produce content in-house or with another vendor, the blueprint gives them everything they need — messaging framework, creative direction, audience profiles, and production specs. That said, most clients find the handoff is seamless when the team that built the strategy also shoots and edits the content.",
  },
  {
    question: "What happens if our goals change mid-project?",
    answer:
      "Goals shift — especially in growing companies. If priorities change after the blueprint is locked, we'll revisit the affected sections and adjust. Minor pivots are built into the process. If the scope changes significantly — new audience, new product line, new market — we'll re-scope transparently and give you a clear cost and timeline before proceeding.",
  },
  {
    question: "How do you measure whether the strategy actually worked?",
    answer:
      "Every Media Blueprint includes a KPI framework — specific, measurable outcomes tied to business goals, not vanity metrics. We track content performance against those benchmarks post-deployment and report on what's working, what needs adjustment, and where to double down. Strategy without measurement is just a nice document.",
  },
];

export default function StrategyClient() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroBanner
        videoSrc="/videos/hero-general.mp4"
        overlayOpacity={70}
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-bold uppercase text-balance text-[#68ccd1]"
          >
            Strategy
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
            Great content starts with a decision —
            <br className="hidden md:block" />
            <span className="text-[#68ccd1]">not a camera.</span>
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
            Before a single frame is shot, we define your messaging, map your
            audience, assign channel intent, and architect the story system that
            makes every production dollar work harder.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-[#080808] shadow-lg shadow-[#68ccd1]/25 transition-all duration-300 hover:bg-[#7dd6da] hover:scale-[1.03]"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/process"
              className="inline-flex items-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-[#68ccd1] hover:bg-[#68ccd1]/10"
            >
              See Our Full Process
            </Link>
          </motion.div>
        </div>
      </HeroBanner>

      {/* ── WHAT STRATEGY MEANS ── */}
      <Section variant="light">
        <GradientOverlay
          from="rgba(200,169,126,0.03)"
          to="transparent"
          direction="to bottom"
        />
        {/* Strategy planning photo */}
        <div className="mb-12 overflow-hidden rounded-2xl shadow-lg mx-auto max-w-4xl">
          <Image
            src="/images/portfolio/pre-pro-preview.jpg"
            alt="Pre-production strategy planning session"
            width={1200}
            height={600}
            className="w-full h-72 object-cover"
          />
        </div>
        <SectionHeader
          eyebrow="What Strategy Means Here"
          title={
            <>
              Four pillars that define every project{" "}
              <span className="text-[#52b0b6]">before production begins.</span>
            </>
          }
          description="Strategy isn't a slide deck you forget about. It's the operating system behind every script, every shot list, and every deployment decision. Here's what we build."
          variant="light"
        />

        <div className="mx-auto max-w-5xl">
          <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerDelay={0.12}>
            {strategyPillars.map((pillar, i) => (
              <StaggerItem key={i}>
                <div className="group rounded-2xl border border-[#e0e0e0] bg-white p-8 shadow-md transition-all duration-300 hover:border-[#52b0b6]/40 hover:shadow-lg">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#52b0b6]/10 text-[#52b0b6] transition-transform duration-300 group-hover:scale-110">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-heading font-black text-[#1a1a1a]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#4a4a4a]">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#151515" from="#f5fafa" />

      {/* ── THE MEDIA BLUEPRINT ── */}
      <Section className="bg-[#151515] noise-texture">
        <EdgeAccentStripe color="#68ccd1" side="left" width="4%" />
        <RadialGlow
          color="#68ccd1"
          position="10% 30%"
          size="600px"
          opacity={0.04}
        />
        <SectionHeader
          eyebrow="The Deliverable"
          eyebrowColor="text-[#68ccd1]"
          title={
            <>
              Your <span className="text-[#68ccd1]">Media Blueprint.</span>
            </>
          }
          description="Not a mood board. Not a vague creative brief. A structured, actionable document that your team, your producers, and your sales department can all execute against."
          center={false}
        />

        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="rounded-2xl border border-[#68ccd1]/20 bg-[#0c0c0c] p-8 md:p-10">
              <p className="mb-8 text-lg leading-relaxed text-white/70">
                The Media Blueprint is the tangible output of every strategy
                engagement. It&apos;s the document that bridges the gap between
                business goals and production execution — and it&apos;s yours to
                keep, whether you produce with us or not.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {blueprintDeliverables.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="flex items-start gap-3 rounded-xl border border-[#1a4a58]/40 bg-[#0e2a35] p-4"
                  >
                    <CheckCircle
                      size={18}
                      className="mt-0.5 shrink-0 text-[#68ccd1]"
                    />
                    <span className="text-sm leading-relaxed text-white/70">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#151515" flip />

      {/* ── PROCESS: CONCEPTING → SCRIPTING → ALIGNMENT ── */}
      <Section variant="light">
        <GradientOverlay
          from="rgba(200,169,126,0.02)"
          to="transparent"
          direction="to bottom right"
        />
        {/* Pre-production video preview */}
        <div className="mb-12 overflow-hidden rounded-2xl shadow-lg mx-auto max-w-3xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-video object-cover"
          >
            <source src="/videos/services/pre-production.mp4" type="video/mp4" />
          </video>
        </div>
        <SectionHeader
          eyebrow="How We Work"
          title="From blank page to locked blueprint in three moves."
          description="Every strategy engagement follows the same disciplined sequence. You'll know what's happening at every stage, and nothing moves to production until you sign off."
          variant="light"
        />

        <div className="mx-auto max-w-4xl space-y-12">
          {processSteps.map((step, i) => (
            <SlideIn
              key={i}
              from={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.08}
            >
              <div className="grid gap-6 md:grid-cols-[100px_1fr]">
                <motion.span
                  className="text-5xl font-bold text-[#52b0b6]/20"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: i * 0.08 + 0.2 }}
                >
                  {step.step}
                </motion.span>
                <div>
                  <h3 className="text-2xl font-heading font-black text-[#1a1a1a] md:text-3xl">
                    {step.title}
                  </h3>
                  <div className="my-3 h-px w-16 bg-[#52b0b6]/30" />
                  <p className="text-lg leading-relaxed text-[#4a4a4a]">
                    {step.description}
                  </p>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#111" from="#f5fafa" />

      {/* ── WHAT SUCCESS LOOKS LIKE ── */}
      <Section className="bg-[#111] noise-texture">
        <RadialGlow
          color="#68ccd1"
          position="80% 40%"
          size="500px"
          opacity={0.04}
        />
        <SectionHeader
          eyebrow="What Success Looks Like"
          eyebrowColor="text-[#68ccd1]"
          title={
            <>
              Strategy is successful when your content{" "}
              <span className="text-[#68ccd1]">does four things.</span>
            </>
          }
          description="These aren't aspirational. They're the measurable outcomes every Media Blueprint is engineered to produce."
        />

        <div className="mx-auto max-w-5xl">
          <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerDelay={0.1}>
            {successOutcomes.map((outcome, i) => (
              <StaggerItem key={i}>
                <div className="rounded-2xl border border-white/10 bg-[#0c0c0c] p-8 transition-all duration-300 hover:border-[#68ccd1]/20">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#68ccd1]/10 text-[#68ccd1]">
                      {outcome.icon}
                    </div>
                    <h3 className="text-xl font-heading font-black text-[#68ccd1]">
                      {outcome.label}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-white/60">
                    {outcome.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#111" flip />

      {/* ── FAQs ── */}
      <Section variant="light">
        <GradientOverlay
          from="rgba(200,169,126,0.02)"
          to="transparent"
          direction="to bottom"
        />
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Answers before you have to ask."
          description="The questions we hear most about strategy engagements — answered directly."
          variant="light"
        />

        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <FAQAccordion items={faqs} variant="light" />
          </FadeIn>
        </div>
      </Section>

      {/* ── CTA ── */}
      <CTASection
        headline="Ready to build the strategy behind the story?"
        subhead="Book a Strategy Call. We'll review your current content, identify the gaps, and show you exactly how a Media Blueprint would work for your organization — no obligation, no pitch deck."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="See Our Full Process"
        secondaryHref="/process"
      />
    </>
  );
}
