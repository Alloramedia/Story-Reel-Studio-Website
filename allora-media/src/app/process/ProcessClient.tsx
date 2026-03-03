"use client";

import { motion } from "framer-motion";
import { Search, Map, Camera, Rocket, BarChart3, RefreshCcw, CheckCircle, ShieldCheck, Flame, Users } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { SlideIn, ScaleIn, RevealLine } from "@/components/animations";
import { HeroBanner } from "@/components/HeroBanner";
import { AngleDivider, EdgeAccentStripe, GradientOverlay, RadialGlow } from "@/components/SectionTextures";

const steps = [
  {
    icon: <Search size={28} />,
    step: "01",
    title: "Discovery",
    description:
      "We start by learning everything about your organization — your mission, your audience, what you've tried before, and where video and content can create the biggest impact. We audit your current content ecosystem, study your competitors, and map the strategic landscape.",
    details: [
      "Deep dive into your organization, audience, and goals",
      "Audit of your existing video, website, and content presence",
      "Competitive research on how your market communicates",
      "Stakeholder interviews and brand voice alignment",
      "Clear goal setting and success metrics definition",
    ],
  },
  {
    icon: <Map size={28} />,
    step: "02",
    title: "Media Blueprint",
    description:
      "We build your Media Blueprint — a strategic plan covering exactly what stories to tell, who they're for, how they'll be produced, and where they'll be deployed. You'll see the full creative direction, shot lists, and distribution strategy before a single camera rolls.",
    details: [
      "Messaging framework and story architecture",
      "Creative direction — concepts, tone, visual approach",
      "Shot lists and production planning for each deliverable",
      "Distribution strategy across all target channels",
      "Timeline and milestones so you always know what's next",
    ],
  },
  {
    icon: <Camera size={28} />,
    step: "03",
    title: "Production",
    description:
      "Our team handles every aspect of production — cinematic video, photography, drone, interviews, graphics. Everything is shot and edited in-house with our crew. No outsourced freelancers. Every asset is purpose-built for your strategy, not generic B-roll.",
    details: [
      "Pre-production — casting, location scouting, scripting",
      "Cinematic shoot days with professional crew and equipment",
      "Testimonial interviews, brand stories, product demos",
      "Drone and aerial cinematography",
      "Full post-production — editing, color, sound, motion graphics",
    ],
  },
  {
    icon: <Rocket size={28} />,
    step: "04",
    title: "Content Library & Deployment",
    description:
      "We deliver a complete, organized content library — every asset formatted, labeled, and ready to deploy across every channel. We also build your deployment guides: what goes where, when, and why. Your team or ours can execute from day one.",
    details: [
      "Finished videos in all platform formats and aspect ratios",
      "Organized content library with naming conventions",
      "Platform-specific deployment guides",
      "Organic social content calendar and posting strategy",
      "Paid media creative sets ready for campaign launch",
    ],
  },
  {
    icon: <BarChart3 size={28} />,
    step: "05",
    title: "Deployment & Optimization",
    description:
      "If you're on an ongoing engagement, we deploy your content across paid and organic channels — monitoring performance, testing creative variations, and optimizing distribution for maximum reach and conversion.",
    details: [
      "Paid media campaign setup and management",
      "Organic social content publishing and management",
      "Creative A/B testing across platforms",
      "Budget optimization toward top-performing content",
      "Retargeting audiences built from engaged viewers",
    ],
  },
  {
    icon: <RefreshCcw size={28} />,
    step: "06",
    title: "Review & Evolve",
    description:
      "Every month we review performance together — what content is resonating, where the pipeline impact is strongest, and what to produce next. Your content system evolves with real data, not guesswork.",
    details: [
      "Monthly performance review and content audit",
      "Live strategy call to discuss results and direction",
      "Pipeline and engagement analysis by content type",
      "Next cycle planning — new stories, refreshed creative",
      "24/7 access to your project dashboard and content library",
    ],
  },
];

export function ProcessClient() {
  return (
    <>
      {/* HERO */}
      <HeroBanner
        videoSrc="/videos/hero-production.mp4"
        imageSrc="/images/process-hero.jpg"
        imageAlt="Our production process"
        overlayOpacity={65}
        cursorSpotlight
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-bold uppercase text-balance text-[#68ccd1]"
          >
            Our Process
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            Exactly how we take you from signed to scaling.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Every client goes through the same structured six-step process.
            No surprises, no ambiguity. You&apos;ll always know what phase
            you&apos;re in, what we&apos;re working on, and what comes next.
          </motion.p>
        </div>
      </HeroBanner>

      {/* PROCESS STEPS */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to bottom" />
        <div className="mx-auto max-w-4xl space-y-16">
          {steps.map((step, i) => (
            <SlideIn key={i} from={i % 2 === 0 ? "left" : "right"} delay={i * 0.05}>
              <div className="grid gap-8 md:grid-cols-[120px_1fr]">
                <div className="flex flex-col items-start gap-3">
                  <motion.span
                    className="text-5xl font-bold text-white/20"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: i * 0.05 + 0.2 }}
                  >
                    {step.step}
                  </motion.span>
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#151515] text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.icon}
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-black md:text-3xl">{step.title}</h3>
                  <RevealLine className="my-3" />
                  <p className="mt-4 text-lg leading-relaxed text-white/60">
                    {step.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {step.details.map((detail, di) => (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: di * 0.05 }}
                        className="flex items-start gap-3 text-base text-white/80"
                      >
                        <motion.span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#68ccd1]"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: di * 0.05 + 0.1 }}
                        />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#080808" />

      {/* WHAT YOU'LL HAVE AFTER 90 DAYS */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="right" width="5%" />
        <GradientOverlay from="rgba(14,42,53,0.03)" to="transparent" direction="to bottom right" />
        <RadialGlow color="#68ccd1" position="90% 20%" size="600px" opacity={0.04} />
        <SectionHeader
          variant="light"
          eyebrow="The Deliverables"
          title="What you'll have after your first engagement."
          description="This isn't vague. Here's exactly what you walk away with after your first production cycle with Story Real Studios."
        />
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "A complete Media Blueprint with messaging and creative strategy",
              "Cinematic brand film or campaign video — fully produced and edited",
              "Testimonial videos from your best clients or stakeholders",
              "Professional photography — team, facilities, products, projects",
              "Full content library — organized, labeled, and deployment-ready",
              "Social media content formatted for every major platform",
              "Paid media creative sets ready for campaign launch",
              "Distribution guides for organic and paid channels",
              "Drone and aerial footage (when applicable)",
              "A scalable content system you can build on quarter after quarter",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="flex items-start gap-3 rounded-xl border border-[#1a1a1a]/15 bg-white/50 p-4 hover-lift"
              >
                <CheckCircle size={18} className="mt-0.5 shrink-0 text-[#68ccd1]" />
                <span className="text-sm text-[#1a1a1a]/70">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#f5fafa" flip />

      {/* NO-RISK GUARANTEE */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to top left" />
        <RadialGlow color="#68ccd1" position="10% 50%" size="500px" opacity={0.03} />
        <div className="mx-auto max-w-4xl">
          <ScaleIn>
          <div className="rounded-2xl border border-[#68ccd1]/20 bg-[#151515] p-8 md:p-10 border-glow">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left">
              <motion.div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#68ccd1]/10" whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: "spring" }}>
                <ShieldCheck size={32} className="text-[#68ccd1]" />
              </motion.div>
              <div>
                <h2 className="font-heading text-2xl font-black text-white md:text-3xl">
                  Zero risk. Zero obligation. Every time.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/60">
                  We don&apos;t charge setup fees just to get started. And we&apos;ll give you a complete Strategy Session — with audience analysis, content audit, and creative direction — <span className="font-bold text-[#68ccd1]">before you commit to production</span>. If we don&apos;t believe we can deliver real impact, we&apos;ll tell you straight up. That&apos;s how confident we are in this process.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-6 md:justify-start">
                  {[
                    { icon: <Flame size={16} />, text: "Free Strategy Session before you commit" },
                    { icon: <ShieldCheck size={16} />, text: "Month-to-month — cancel anytime" },
                    { icon: <Users size={16} />, text: "We’ll tell you if we’re not the right fit" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="text-[#68ccd1]">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </ScaleIn>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready to get started?"
        subhead="Book a free Strategy Call. We'll walk you through this process, audit your current content strategy, and show you exactly what we'd build for your business."
        primaryLabel="Book a Free Strategy Call"
        primaryHref="/contact"
        secondaryLabel="See Client Results"
        secondaryHref="/case-studies"
      />
    </>
  );
}
