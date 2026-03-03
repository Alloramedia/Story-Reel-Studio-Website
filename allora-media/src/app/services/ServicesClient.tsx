"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Film,
  Factory,
  Package,
  UserPlus,
  GraduationCap,
  Tv,
  Plane,
  Box,
  Mic,
  Compass,
  Camera,
  Rocket,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { HeroBanner } from "@/components/HeroBanner";
import {
  AngleDivider,
  GradientOverlay,
  RadialGlow,
} from "@/components/SectionTextures";

/* ─── Three Pillars of the Story Real Method ─── */
const pillars = [
  {
    icon: <Compass size={32} />,
    title: "Strategy",
    href: "/strategy",
    description:
      "Before a single frame is shot, we define your messaging, map your audience, assign channel intent, and architect the story system. The output is your Media Blueprint — the operating system behind every creative decision.",
    deliverables: [
      "Messaging framework",
      "Audience architecture",
      "Channel intent mapping",
      "Story architecture",
      "Media Blueprint document",
    ],
  },
  {
    icon: <Camera size={32} />,
    title: "Production",
    href: "/production",
    description:
      "Cinematic production built to serve strategy — not the other way around. Multi-camera interviews, drone aerials, studio shoots, motion graphics, and post-production that meets broadcast standards. Every frame has a job.",
    deliverables: [
      "Cinematic filming",
      "Multi-camera interviews",
      "Drone cinematography",
      "Motion graphics & 3D",
      "Professional post-production",
    ],
  },
  {
    icon: <Rocket size={32} />,
    title: "Deployment",
    href: "/deployment",
    description:
      "Content that sits on a hard drive is worthless. We deploy across owned, paid, and earned channels with platform-native formatting, performance tracking, and optimization cycles that compound your investment over time.",
    deliverables: [
      "Platform-native formatting",
      "Paid media creative",
      "Channel deployment",
      "Performance tracking",
      "Optimization cycles",
    ],
  },
];

/* ─── Specific Service Capabilities ─── */
const serviceCapabilities = [
  {
    icon: <Film size={22} />,
    title: "Testimonial Videos",
    href: "/services/testimonial-videos",
    brief: "Authentic customer stories with cinematic production values that build trust faster than any pitch deck.",
  },
  {
    icon: <Factory size={22} />,
    title: "Factory & Facility Tours",
    href: "/services/factory-tours",
    brief: "Cinematic tours that let prospects experience your capabilities without traveling — a trust-building asset that works 24/7.",
  },
  {
    icon: <Package size={22} />,
    title: "Product Demo Videos",
    href: "/services/product-demo",
    brief: "Cinematic demonstrations that make your product's value immediately clear — for landing pages, ads, and sales enablement.",
  },
  {
    icon: <UserPlus size={22} />,
    title: "Recruitment Videos",
    href: "/services/recruitment",
    brief: "Culture stories that attract better candidates and reduce hiring costs by showing what it's really like to work with you.",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Training Videos",
    href: "/services/training",
    brief: "Scalable instructional content that reduces onboarding time, improves consistency, and frees your subject matter experts.",
  },
  {
    icon: <Tv size={22} />,
    title: "Commercials & OTT",
    href: "/services/commercials-ott",
    brief: "Broadcast-quality creative for television, streaming platforms, and digital channels — built to perform across every screen.",
  },
  {
    icon: <Plane size={22} />,
    title: "Drone Cinematography",
    href: "/services/drone",
    brief: "FAA-compliant aerial footage with cinema-grade cameras that adds scale, context, and cinematic impact to any project.",
  },
  {
    icon: <Box size={22} />,
    title: "3D & Motion Graphics",
    href: "/services/3d-animation",
    brief: "Visualize what the camera can't capture — complex products, processes, and concepts made immediately understandable.",
  },
  {
    icon: <Mic size={22} />,
    title: "Podcast Production",
    href: "/services/podcast-production",
    brief: "Studio-quality audio and video podcast production with post-production and content repurposing built in.",
  },
];

export default function ServicesClient() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroBanner
        videoSrc="/videos/hero-general.mp4"
        overlayOpacity={72}
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-bold uppercase text-balance text-[#68ccd1]"
          >
            Services
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
            Strategy. Production. Deployment.
            <br className="hidden md:block" />
            <span className="text-[#68ccd1]">The Story Real Method.</span>
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
            Most studios shoot first and hope for the best. We build the
            strategic foundation, produce cinematic content against it, and
            deploy across every channel with measurable intent. That&apos;s the
            difference between content and a content system.
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
              See Our Process
            </Link>
          </motion.div>
        </div>
      </HeroBanner>

      {/* ── THE THREE PILLARS ── */}
      <Section variant="light">
        <GradientOverlay
          from="rgba(200,169,126,0.03)"
          to="transparent"
          direction="to bottom"
        />
        <SectionHeader
          eyebrow="The Story Real Method"
          title={
            <>
              Three pillars.{" "}
              <span className="text-[#52b0b6]">One integrated system.</span>
            </>
          }
          description="Every engagement moves through Strategy, Production, and Deployment — in that order. Each pillar builds on the one before it, so nothing is wasted and everything compounds."
          variant="light"
        />

        <div className="mx-auto max-w-6xl">
          <StaggerContainer className="grid gap-8 lg:grid-cols-3" staggerDelay={0.15}>
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <Link href={pillar.href} className="group block h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-[#e0e0e0] bg-white p-8 shadow-md transition-all duration-300 hover:border-[#52b0b6]/40 hover:shadow-lg">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#52b0b6]/10 text-[#52b0b6] transition-transform duration-300 group-hover:scale-110">
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-heading font-black text-[#1a1a1a]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-[#4a4a4a]">
                      {pillar.description}
                    </p>
                    <ul className="mt-6 space-y-2 border-t border-[#e0e0e0] pt-6">
                      {pillar.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-sm text-[#666]"
                        >
                          <span className="h-1 w-1 rounded-full bg-[#52b0b6]" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#52b0b6] transition-all duration-300 group-hover:gap-3">
                      Learn more <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#151515" from="#f5fafa" />

      {/* ── ALL SERVICE CAPABILITIES ── */}
      <Section className="bg-[#151515] noise-texture">
        <RadialGlow
          color="#68ccd1"
          position="80% 20%"
          size="600px"
          opacity={0.04}
        />
        <SectionHeader
          eyebrow="Service Capabilities"
          eyebrowColor="text-[#68ccd1]"
          title={
            <>
              Every type of content.{" "}
              <span className="text-[#68ccd1]">One production partner.</span>
            </>
          }
          description="From testimonial videos to broadcast commercials, drone cinematography to 3D animation — we produce every format your content system requires, all under one roof."
        />

        <div className="mx-auto max-w-6xl">
          <StaggerContainer
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.08}
          >
            {serviceCapabilities.map((service) => (
              <StaggerItem key={service.title}>
                <Link href={service.href} className="group block h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0c0c0c] p-6 transition-all duration-300 hover:border-[#68ccd1]/25 hover:bg-[#111]">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#68ccd1]/10 text-[#68ccd1] transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-heading font-black text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                      {service.brief}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-bold text-[#68ccd1] transition-all duration-300 group-hover:gap-3">
                      View details <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#151515" flip />

      {/* ── WHY A SYSTEM MATTERS ── */}
      <Section variant="light">
        <GradientOverlay
          from="rgba(200,169,126,0.02)"
          to="transparent"
          direction="to bottom right"
        />
        <SectionHeader
          eyebrow="Why It Matters"
          title={
            <>
              The difference between content and{" "}
              <span className="text-[#52b0b6]">a content system.</span>
            </>
          }
          variant="light"
        />

        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Without a system */}
              <div className="rounded-2xl border border-[#e0e0e0] bg-white p-8 shadow-md">
                <h3 className="mb-4 text-lg font-heading font-black text-[#999]">
                  Content without a system
                </h3>
                <ul className="space-y-3">
                  {[
                    "Videos that look great but don't convert",
                    "No connection between channels or assets",
                    "Every project starts from scratch",
                    "No way to measure what's working",
                    "Diminishing returns on production spend",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#999]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ccc]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* With the Story Real Method */}
              <div className="rounded-2xl border border-[#52b0b6]/25 bg-[#f0fafa] p-8 shadow-md">
                <h3 className="mb-4 text-lg font-heading font-black text-[#52b0b6]">
                  The Story Real Method
                </h3>
                <ul className="space-y-3">
                  {[
                    "Every asset built against a strategic framework",
                    "Content that compounds across channels",
                    "A library that grows in value over time",
                    "Clear KPIs tied to business outcomes",
                    "Increasing returns as the system matures",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#4a4a4a]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#52b0b6]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── CTA ── */}
      <CTASection
        headline="Ready to build a content system that compounds?"
        subhead="Book a strategy call. We'll review your current content, identify the biggest opportunities, and show you how the Story Real Method applies to your organization — no obligation, no pitch deck."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="See Our Work"
        secondaryHref="/work"
      />
    </>
  );
}
