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
      "We start by learning everything about your business — who your customers are, what you've tried before, what's working, and where the biggest growth opportunities are. We look at your current marketing, your competitors, and your analytics to figure out the smartest path forward.",
    details: [
      "Deep dive into your business, customers, and goals",
      "Audit of your current ads, website, and social media",
      "Competitive research on what's working in your market",
      "Assessment of your current tracking setup",
      "Clear goal setting and success metrics definition",
    ],
  },
  {
    icon: <Map size={28} />,
    step: "02",
    title: "Strategy & Planning",
    description:
      "Based on what we learn, we build your Growth Blueprint — a detailed plan covering exactly who we're targeting, what ads we're running, what content we need to produce, how much to spend, and what results to expect. You'll know the plan before a single dollar goes to work.",
    details: [
      "Campaign plan with targeting and audience strategy",
      "Creative direction — what content we need to produce",
      "Budget recommendations with expected cost per lead",
      "Tracking and attribution setup plan",
      "Timeline and milestones so you know what's next",
    ],
  },
  {
    icon: <Camera size={28} />,
    step: "03",
    title: "Content Production",
    description:
      "We produce all the professional video, photography, and graphics your campaigns need — in-house, with our team. No stock photos. No outsourced freelancers. Everything is built specifically for your ads, your website, and your brand.",
    details: [
      "Professional video (testimonials, brand stories, drone)",
      "Photography (team photos, project shots, products)",
      "Ad graphics and social media content",
      "Multiple sizes and formats for every platform",
      "Different ad variations ready for testing",
    ],
  },
  {
    icon: <Rocket size={28} />,
    step: "04",
    title: "Campaign Launch",
    description:
      "We build your campaigns, install all tracking on your website, set up call tracking if needed, and go live. Every campaign launches with proper measurement from day one — so you can see leads coming in from the start.",
    details: [
      "Full campaign setup on Facebook and Instagram",
      "Tracking pixel and conversion tracking installation",
      "Call tracking setup for phone leads",
      "Budget controls and spending safeguards",
      "Quality check and launch",
    ],
  },
  {
    icon: <BarChart3 size={28} />,
    step: "05",
    title: "Optimization",
    description:
      "Once live, we monitor your campaigns daily and make improvements weekly. We test different ads, refine who sees them, adjust budgets toward what's working, and cut what isn't. This is how your cost per lead goes down over time.",
    details: [
      "Daily campaign monitoring for issues or opportunities",
      "Weekly ad and audience optimization",
      "A/B testing on headlines, images, videos, and hooks",
      "Budget shifted toward best-performing campaigns",
      "Landing page and form improvements when needed",
    ],
  },
  {
    icon: <RefreshCcw size={28} />,
    step: "06",
    title: "Monthly Review",
    description:
      "Every month we sit down with you, walk through the results, explain what worked, address what didn't, and plan the next month's strategy together. You always know exactly what your marketing is doing for your business.",
    details: [
      "Clear monthly performance report",
      "Live review call to discuss results together",
      "Budget and cost per lead analysis",
      "Next month's plan for content and campaigns",
      "24/7 access to real-time data in your client portal",
    ],
  },
];

export function ProcessClient() {
  return (
    <>
      {/* HERO */}
      <HeroBanner
        videoSrc="/videos/hero-drone.mp4"
        imageSrc="/images/process-hero.jpg"
        imageAlt="Our marketing process"
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
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to bottom" />
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
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <RadialGlow color="#68ccd1" position="90% 20%" size="600px" opacity={0.04} />
        <SectionHeader
          variant="light"
          eyebrow="The Deliverables"
          title="What you'll have after 90 days."
          description="This isn't vague. Here's the tangible, measurable stuff you walk away with after your first 90 days as a Story Real Studios client."
        />
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "A fully built and optimized ad campaign on Facebook & Instagram",
              "Conversion tracking installed on your website",
              "Call tracking for phone leads (if applicable)",
              "Professional video content — testimonials, brand story, project docs",
              "Professional photography — team, projects, products",
              "Custom ad graphics and social media content",
              "A growing retargeting audience of warm prospects",
              "A real-time client portal with all your campaign data",
              "3 monthly performance reports with clear ROI analysis",
              "A proven system generating leads on autopilot",
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
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to top left" />
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
                  We don&apos;t charge setup fees just to get started. And we&apos;ll give you a complete Growth Blueprint — with competitor research, campaign strategy, and budget recommendations — <span className="font-bold text-[#68ccd1]">before you spend a single dollar</span>. If we don&apos;t believe we can get you results, we&apos;ll tell you straight up. That&apos;s how confident we are in this process.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-6 md:justify-start">
                  {[
                    { icon: <Flame size={16} />, text: "Free Growth Blueprint before you commit" },
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
        subhead="Book a free Growth Blueprint Call. We'll walk you through this process, audit your current marketing, and show you exactly what we'd build for your business."
        primaryLabel="Book a Free Growth Blueprint Call"
        primaryHref="/contact"
        secondaryLabel="See Client Results"
        secondaryHref="/case-studies"
      />
    </>
  );
}
