"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { HeroBanner } from "@/components/HeroBanner";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { credibilityStats, siteConfig } from "@/lib/constants";
import {
  Target,
  Clapperboard,
  Rocket,
  Handshake,
  Award,
  Users,
  Star,
} from "lucide-react";

/* ─── Core Values ─── */
const values = [
  {
    icon: <Target size={28} />,
    title: "Strategy-First",
    description:
      "Every frame exists because of a strategic decision. We don't shoot first and figure out purpose later — we architect the story system before a camera ever rolls.",
  },
  {
    icon: <Clapperboard size={28} />,
    title: "Cinematic Craft",
    description:
      "Broadcast-grade production isn't optional. Professional crews, cinema-grade equipment, and post-production standards that hold up on any screen, any platform, any context.",
  },
  {
    icon: <Rocket size={28} />,
    title: "Deployment Mindset",
    description:
      "Beautiful content on a hard drive is worthless. Every asset we produce ships with a distribution plan, platform-native formatting, and measurable deployment targets.",
  },
  {
    icon: <Handshake size={28} />,
    title: "Partnership Over Projects",
    description:
      "We don't do one-off gigs. Our best work happens inside long-term partnerships where we understand your business deeply enough to operate as an extension of your team.",
  },
];

/* ─── Team Structure ─── */
const team = [
  {
    role: "Founder & Creative Director",
    description:
      "Sets the creative vision and strategic direction for every engagement. Oversees the integration of strategy, production, and deployment across all client work.",
  },
  {
    role: "Head of Production",
    description:
      "Manages production logistics, crew coordination, and post-production pipelines. Ensures every shoot runs on time, on budget, and at the cinematic standard clients expect.",
  },
  {
    role: "Senior Strategist",
    description:
      "Leads discovery research, audience architecture, and messaging framework development. Translates business objectives into actionable content strategies.",
  },
  {
    role: "Content Strategist",
    description:
      "Designs content systems and distribution plans. Ensures every asset is formatted, tagged, and deployed for maximum reach and measurable performance.",
  },
  {
    role: "Director of Photography",
    description:
      "Brings the cinematic vision to life on set. Manages camera, lighting, and movement to deliver imagery that meets broadcast and digital standards.",
  },
  {
    role: "Post-Production Lead",
    description:
      "Oversees editing, color grading, motion graphics, and sound design. Manages review cadences and delivers final assets in every required format.",
  },
];

/* ─── Recognition ─── */
const recognition = [
  {
    icon: <Star size={24} />,
    title: `${credibilityStats.googleRating} Google Rating`,
    detail: `${credibilityStats.googleReviewCount} verified reviews from real clients`,
  },
  {
    icon: <Award size={24} />,
    title: `${credibilityStats.projectsDelivered} Projects Delivered`,
    detail: "Campaigns spanning manufacturing, healthcare, nonprofits, and product brands",
  },
  {
    icon: <Users size={24} />,
    title: `${credibilityStats.industriesServed} Industries Served`,
    detail: "Deep vertical expertise — not surface-level generalists",
  },
  {
    icon: <Award size={24} />,
    title: `${credibilityStats.yearsInBusiness} Years in Business`,
    detail: `Operating since ${siteConfig.foundingDate} out of Connecticut`,
  },
];

export function AboutClient() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroBanner
        videoSrc="/videos/hero-about.mp4"
        overlayOpacity={60}
        cursorSpotlight
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-bold uppercase text-[#68ccd1]"
          >
            About Story Real Studios
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl"
          >
            We build video systems that{" "}
            <span className="text-[#68ccd1]">compound trust.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/60"
          >
            Story Real Studios builds cinematic video campaigns and content
            systems for purpose-led organizations — combining strategy,
            production, and deployment into a single integrated system.
          </motion.p>
        </div>
      </HeroBanner>

      {/* ── ORIGIN ── */}
      <Section variant="light">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <FadeIn direction="right">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#52b0b6]">
              Our Story
            </p>
            <h2 className="font-heading text-3xl font-black text-[#0a1a1f] md:text-4xl">
              Founded in {siteConfig.foundingDate}. Built on conviction.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#4a4a4a]">
              <p>
                Story Real Studios started with a simple observation: most
                organizations invest in video that looks good but doesn&apos;t
                do anything. Beautiful reels that never leave a hard drive.
                One-off projects with no distribution plan. Production companies
                that disappear after delivery.
              </p>
              <p>
                We built a different model. From our base in Connecticut, we
                architected an end-to-end system that treats video as a business
                asset — not a creative indulgence. Strategy defines the story.
                Production executes at a cinematic standard. And every asset
                ships with a deployment plan designed to compound trust over
                time.
              </p>
              <p>
                Seven years and {credibilityStats.projectsDelivered} projects
                later, we&apos;ve refined that model into something our clients
                rely on: a predictable, repeatable system for building
                credibility through video. No surprises. No scope creep. Just
                clear process, premium craft, and measurable outcomes.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/production/team-group.jpg"
                  alt="Story Real Studios full team"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-6 rounded-2xl border border-[#e0e0e0] bg-white p-8 shadow-md">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: credibilityStats.projectsDelivered, label: "Projects Delivered" },
                    { value: credibilityStats.yearsInBusiness, label: "Years in Business" },
                    { value: credibilityStats.industriesServed, label: "Industries Served" },
                    { value: credibilityStats.googleRating, label: "Google Rating" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-heading text-3xl font-black text-[#52b0b6] md:text-4xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-[#666]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── VALUES ── */}
      <Section variant="dark">
        {/* Team production photo banner */}
        <div className="mb-12 overflow-hidden rounded-2xl">
          <Image
            src="/images/team/team-camera.jpg"
            alt="Story Real Studios camera operator on set"
            width={1400}
            height={500}
            className="w-full h-64 object-cover object-center"
          />
        </div>
        <SectionHeader
          eyebrow="What We Stand On"
          title="Four principles. Zero filler."
          description="These aren't values we wrote for a website. They're operating principles that shape every engagement, every decision, and every deliverable."
          eyebrowColor="text-[#68ccd1]"
        />
        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="group rounded-2xl border border-[#1a4a58]/40 bg-[#0e2a35] p-8 transition-all duration-300 hover:border-[#68ccd1]/30 hover:bg-[#123642]">
                <div className="mb-4 inline-flex rounded-xl bg-[#68ccd1]/10 p-3 text-[#68ccd1]">
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/60">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ── TEAM ── */}
      <Section variant="light">
        {/* Team outdoor photo */}
        <div className="mb-12 overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/production/team-outdoor.jpeg"
            alt="Story Real Studios team outdoors"
            width={1400}
            height={500}
            className="w-full h-72 object-cover object-center"
          />
        </div>
        <SectionHeader
          eyebrow="The Team"
          title="Senior operators. Not junior account managers."
          description="Every person on your project has deep experience in their discipline. We keep teams small and senior — because that's what produces great work."
          variant="light"
        />
        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <StaggerItem key={member.role}>
              <div className="group rounded-2xl border border-[#e0e0e0] bg-white p-8 shadow-md transition-all duration-300 hover:border-[#52b0b6]/40 hover:shadow-lg">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#52b0b6]/10">
                  <Users size={28} className="text-[#52b0b6]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0a1a1f]">
                  {member.role}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4a4a4a]">
                  {member.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ── RECOGNITION ── */}
      <Section variant="dark">
        <SectionHeader
          eyebrow="Recognition & Track Record"
          title="The work speaks. The numbers confirm it."
          description="We don't chase awards — we chase outcomes. But when you deliver consistently for seven years, the track record builds itself."
          eyebrowColor="text-[#68ccd1]"
        />
        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {recognition.map((item) => (
            <StaggerItem key={item.title}>
              <div className="rounded-2xl border border-[#1a4a58]/40 bg-[#0e2a35] p-6 text-center transition-all duration-300 hover:border-[#68ccd1]/30 hover:bg-[#123642]">
                <div className="mx-auto mb-4 inline-flex rounded-xl bg-[#68ccd1]/10 p-3 text-[#68ccd1]">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {item.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ── CTA ── */}
      <CTASection
        variant="light"
        headline="Ready to build a video system that actually works?"
        subhead="Book a strategy call. We'll review your current content, identify the biggest opportunities, and map a clear path forward — whether you work with us or not."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="See Our Work"
        secondaryHref="/work"
      />
    </>
  );
}
