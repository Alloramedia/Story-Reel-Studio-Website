"use client";

import { motion } from "framer-motion";
import {
  Film,
  Mic,
  Factory,
  Monitor,
  Users,
  GraduationCap,
  Tv,
  Plane,
  Scissors,
  Clapperboard,
  CheckCircle,
  ShieldCheck,
  BarChart3,
  Eye,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { HeroBanner } from "@/components/HeroBanner";
import {
  AngleDivider,
  GradientOverlay,
  RadialGlow,
  EdgeAccentStripe,
} from "@/components/SectionTextures";
import { siteConfig } from "@/lib/constants";

/* ─── Production Capabilities ─── */
const capabilities = [
  {
    icon: <Film size={28} />,
    title: "Brand Films",
    description:
      "Cinematic narratives that distill your company's origin, mission, and competitive advantage into a piece your audience watches start to finish. Not a corporate overview — a story that earns trust in under three minutes.",
  },
  {
    icon: <Mic size={28} />,
    title: "Testimonial Videos",
    description:
      "Real customers, real results, captured in a way that feels authentic and looks premium. We design interview frameworks that surface the proof points your prospects actually care about — without scripting anyone.",
  },
  {
    icon: <Factory size={28} />,
    title: "Factory & Facility Tours",
    description:
      "We transform operational environments into visual proof of capability. From clean rooms to production floors, we capture the scale, precision, and craftsmanship that photographs and brochures can never convey.",
  },
  {
    icon: <Monitor size={28} />,
    title: "Product Demos",
    description:
      "Technical demonstrations that make complex products intuitive. We distill features into benefits, workflows into outcomes, and specs into stories — so prospects understand value before the sales call.",
  },
  {
    icon: <Users size={28} />,
    title: "Recruitment Videos",
    description:
      "Attract the talent your competitors can't reach. We capture the culture, the people, and the work environment in a way that self-selects for candidates who are the right fit — not just anyone with a résumé.",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Training Videos",
    description:
      "Scalable onboarding and operational training built for retention. Clear structure, professional production, and a modular format that reduces ramp time and keeps your institutional knowledge intact as you grow.",
  },
  {
    icon: <Tv size={28} />,
    title: "Commercials & OTT",
    description:
      "Broadcast-grade spots and connected TV placements built to compete with national brands. From 15-second pre-rolls to 60-second hero spots, every frame is engineered for attention, recall, and conversion.",
  },
  {
    icon: <Plane size={28} />,
    title: "Drone Cinematography",
    description:
      "FAA Part 107 certified aerial production that adds scale and perspective to any project. Facility aerials, construction progress, event coverage, and cinematic establishing shots — captured safely and legally.",
  },
  {
    icon: <Scissors size={28} />,
    title: "Post-Production",
    description:
      "Color grading, sound design, motion graphics, and editorial — all handled in-house. Every project receives the same finishing standard: broadcast-quality color, mixed and mastered audio, and graphics that reinforce brand identity.",
  },
  {
    icon: <Clapperboard size={28} />,
    title: "Motion & 3D Partner Workflows",
    description:
      "For projects requiring advanced 3D animation, CGI, or complex motion design, we manage vetted specialist partners within our production pipeline — so you get one point of contact, one timeline, and zero coordination headaches.",
  },
];

/* ─── Performance Framing ─── */
const performancePoints = [
  {
    icon: <BarChart3 size={24} />,
    label: "Built for Conversion",
    detail:
      "Every video we produce is designed to move a specific audience toward a specific action. We don't measure success by how good the footage looks — we measure it by whether the content drove the result you hired us for.",
  },
  {
    icon: <ShieldCheck size={24} />,
    label: "Trust, Not Just Aesthetics",
    detail:
      "Pretty videos are everywhere. Trust is rare. Our production process is engineered to surface authenticity — real people, real environments, real proof — packaged in a way that looks premium without feeling manufactured.",
  },
  {
    icon: <Eye size={24} />,
    label: "Attention-Engineered",
    detail:
      "We study where attention drops. Opening hooks, pacing, sound design, and visual rhythm are all calibrated using real platform data — not guesswork — so your content holds viewers through the message that matters.",
  },
  {
    icon: <CheckCircle size={24} />,
    label: "Sales-Ready Assets",
    detail:
      "Production doesn't end with a hero video. Every project includes cut-downs, social edits, and sales-enablement clips your team can deploy immediately — in proposals, on LinkedIn, in email sequences, and on your website.",
  },
];

/* ─── QA Process Steps ─── */
const qaSteps = [
  {
    step: "01",
    title: "Pre-Production",
    description:
      "Creative direction, shot lists, location scouting, talent coordination, and logistics planning. Every detail is locked before a single camera leaves the case. You receive a production book that covers schedule, crew, equipment, locations, and deliverables — reviewed and approved before we proceed.",
  },
  {
    step: "02",
    title: "Shoot Day Execution",
    description:
      "Professional crews, cinema-grade equipment, and a director who manages the set so your team can focus on being present rather than managing logistics. We capture interview selects, b-roll, aerials, and product footage with redundancy built in — nothing gets missed.",
  },
  {
    step: "03",
    title: "Post-Production & Assembly",
    description:
      "Editorial, color grading, sound design, motion graphics, and music licensing — all handled by our in-house team. You receive a rough cut within the agreed timeline, with a clear feedback framework so notes are consolidated, specific, and actionable.",
  },
  {
    step: "04",
    title: "Review Cadence & Delivery",
    description:
      "Two structured review rounds are built into every project. Each round includes a live review session where we walk through changes, discuss feedback, and align on final direction. After approval, we deliver in every format your channels require — web, social, broadcast, and internal.",
  },
];

/* ─── FAQs ─── */
const faqs = [
  {
    question: "How many shoot days does a typical project require?",
    answer:
      "Most projects require one to three shoot days, depending on scope. A single brand film or testimonial package can often be captured in a single well-planned day. Multi-location projects, large-scale facility tours, or campaigns with multiple deliverables typically require two to three days. We build the schedule during pre-production so there are no surprises — you'll know the exact day count and daily agenda before we confirm anything.",
  },
  {
    question: "What does a production crew look like?",
    answer:
      "The crew size is tailored to the project. A focused interview-based shoot might require a director, DP, audio tech, and a production assistant — four people total. A commercial or multi-camera brand film could involve a director, DP, AC, gaffer, grip, audio engineer, teleprompter operator, and a drone pilot. We never over-crew or under-crew. The proposal specifies exactly who will be on set and what each role covers.",
  },
  {
    question: "Can you shoot on location or do we need to come to your studio?",
    answer:
      "Both. We shoot on location anywhere in the Northeast and travel nationally for the right projects. Your office, factory floor, job site, or event venue is often the best backdrop for authentic content. We also have studio access for controlled-environment shoots — product demos, green screen work, and interview setups that need a clean, distraction-free look.",
  },
  {
    question: "Who owns the usage rights to the finished content?",
    answer:
      "You do. Every project includes full, perpetual usage rights for all deliverables specified in the scope of work. You can use the content on your website, social channels, in paid advertising, at trade shows, in sales presentations, and anywhere else your business needs it. We retain portfolio usage rights unless you request otherwise — and we'll always ask before featuring your work publicly.",
  },
  {
    question: "How many rounds of revisions are included?",
    answer:
      "Every project includes two structured revision rounds. The first round is a rough cut review — we present the assembly, walk through creative decisions, and collect your consolidated feedback. The second round is a fine cut review focused on polish: color, audio, graphics, pacing. In our experience, two structured rounds with live review sessions produce better results than unlimited revision policies that drag projects out for weeks.",
  },
  {
    question: "What does the turnaround time look like from shoot to delivery?",
    answer:
      "Standard post-production turnaround is three to five weeks from the final shoot day to delivery, depending on project complexity and the number of deliverables. A single testimonial video with minimal graphics can be delivered faster. A multi-piece campaign with motion graphics and color grading will take the full window. We lock the timeline during pre-production so you can plan your launch around it.",
  },
  {
    question: "Do you handle music licensing and talent releases?",
    answer:
      "Yes. We source and license production music from premium libraries with full commercial clearance — no copyright strikes, no royalty surprises. For on-camera talent, we prepare and manage all release forms. If your project involves union talent or requires SAG-AFTRA compliance, we handle that coordination as well. Every legal and licensing detail is managed before delivery so your content is clear to publish everywhere.",
  },
  {
    question: "What if we need to reschedule or cancel a shoot day?",
    answer:
      "Life happens. If you need to reschedule, we ask for a minimum of five business days' notice to reallocate crew and equipment without penalty. Cancellations within that window may incur partial crew fees, which are outlined in the production agreement before you sign. Weather-dependent shoots — drone work, outdoor locations — include built-in contingency dates at no additional cost.",
  },
];

export default function ProductionClient() {
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
            Production
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
            We don&apos;t make pretty videos.
            <br className="hidden md:block" />
            <span className="text-[#68ccd1]">We build proof.</span>
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
            Cinematic production engineered for performance. Every frame, every
            cut, every sound cue exists to earn trust, hold attention, and move
            your audience toward a decision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-[#080808] shadow-lg shadow-[#68ccd1]/25 transition-all duration-300 hover:bg-[#7dd6da] hover:scale-[1.03]"
            >
              Request a Production Plan
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-[#68ccd1] hover:bg-[#68ccd1]/10"
            >
              See Our Work
            </Link>
          </motion.div>
        </div>
      </HeroBanner>

      {/* ── CAPABILITIES ── */}
      <Section variant="light">
        <GradientOverlay
          from="rgba(200,169,126,0.03)"
          to="transparent"
          direction="to bottom"
        />
        {/* BTS photo banner */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: "/images/production/bts-interview.jpeg", alt: "Behind-the-scenes interview setup" },
            { src: "/images/production/bts-camera-op.jpg", alt: "Camera operator behind the scenes" },
            { src: "/images/production/sono-shoot.jpg", alt: "On-location shoot" },
            { src: "/images/production/interview-setup.jpg", alt: "Interview with lighting setup" },
          ].map((photo) => (
            <div key={photo.src} className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
        <SectionHeader
          eyebrow="What We Produce"
          title={
            <>
              Ten capabilities.{" "}
              <span className="text-[#52b0b6]">One production team.</span>
            </>
          }
          description="Every format your business needs — from brand narratives to drone aerials to motion graphics — managed under a single roof with a single point of contact."
          variant="light"
        />

        <div className="mx-auto max-w-6xl">
          <StaggerContainer
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.08}
          >
            {capabilities.map((cap, i) => (
              <StaggerItem key={i}>
                <div className="group h-full rounded-2xl border border-[#e0e0e0] bg-white p-8 shadow-md transition-all duration-300 hover:border-[#52b0b6]/40 hover:shadow-lg">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#52b0b6]/10 text-[#52b0b6] transition-transform duration-300 group-hover:scale-110">
                    {cap.icon}
                  </div>
                  <h3 className="text-xl font-heading font-black text-[#1a1a1a]">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#4a4a4a]">
                    {cap.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#151515" from="#f5fafa" />

      {/* ── PERFORMANCE + TRUST FRAMING ── */}
      <Section className="bg-[#151515] noise-texture">
        <EdgeAccentStripe color="#68ccd1" side="left" width="4%" />
        <RadialGlow
          color="#68ccd1"
          position="10% 30%"
          size="600px"
          opacity={0.04}
        />
        <SectionHeader
          eyebrow="Why It Works"
          eyebrowColor="text-[#68ccd1]"
          title={
            <>
              Production built for{" "}
              <span className="text-[#68ccd1]">performance, not applause.</span>
            </>
          }
          description="Cinematic quality is the baseline. What separates our work is that every creative decision — from pacing to sound design to interview structure — is reverse-engineered from the business outcome you need."
          center={false}
        />

        <div className="mx-auto max-w-5xl">
          <StaggerContainer
            className="grid gap-6 md:grid-cols-2"
            staggerDelay={0.1}
          >
            {performancePoints.map((point, i) => (
              <StaggerItem key={i}>
                <div className="rounded-2xl border border-white/10 bg-[#0c0c0c] p-8 transition-all duration-300 hover:border-[#68ccd1]/20">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#68ccd1]/10 text-[#68ccd1]">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-heading font-black text-[#68ccd1]">
                      {point.label}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-white/60">
                    {point.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#151515" flip />

      {/* ── QA PROCESS ── */}
      <Section variant="light">
        <GradientOverlay
          from="rgba(200,169,126,0.02)"
          to="transparent"
          direction="to bottom right"
        />
        <SectionHeader
          eyebrow="Our Quality Process"
          title="Four stages. Zero guesswork."
          description="Every project follows a disciplined production pipeline from pre-production through final delivery. You know what's happening at every stage, and nothing ships until you sign off."
          variant="light"
        />

        <div className="mx-auto max-w-4xl space-y-12">
          {qaSteps.map((step, i) => (
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

      {/* ── WHAT YOU GET ── */}
      <Section className="bg-[#111] noise-texture">
        <RadialGlow
          color="#68ccd1"
          position="80% 40%"
          size="500px"
          opacity={0.04}
        />
        <SectionHeader
          eyebrow="What You Walk Away With"
          eyebrowColor="text-[#68ccd1]"
          title={
            <>
              Every project delivers{" "}
              <span className="text-[#68ccd1]">more than a hero video.</span>
            </>
          }
          description="Production is an investment. We make sure you extract maximum value from every shoot day."
        />

        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="rounded-2xl border border-[#68ccd1]/20 bg-[#0c0c0c] p-8 md:p-10">
              <p className="mb-8 text-lg leading-relaxed text-white/70">
                Every engagement is scoped to include not just the primary
                deliverable, but the full ecosystem of assets your marketing and
                sales teams need to deploy immediately. Here&apos;s what a
                typical production package includes:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Hero video — fully graded, mixed, and titled",
                  "Social cut-downs (16:9, 9:16, 1:1) for every major platform",
                  "15- and 30-second ad edits for paid campaigns",
                  "Behind-the-scenes content for organic social",
                  "Sales-enablement clips — objection-handling, proof points, intros",
                  "Thumbnail and poster frame selects",
                  "SRT caption files for accessibility and silent autoplay",
                  "Raw interview transcripts for blog, email, and PR repurposing",
                ].map((item, i) => (
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
          title="Everything you need to know before shoot day."
          description="The questions our clients ask most — answered directly so you can make informed decisions faster."
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
        headline="Ready to build content that performs?"
        subhead="Request a Production Plan. We'll review your goals, recommend the right formats, and give you a clear scope, timeline, and investment — no obligation, no generic proposals."
        primaryLabel="Request a Production Plan"
        primaryHref="/contact"
        secondaryLabel="See Our Work"
        secondaryHref="/work"
      />
    </>
  );
}
