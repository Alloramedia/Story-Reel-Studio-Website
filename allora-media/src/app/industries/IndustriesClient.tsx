"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Factory, Heart, ShoppingBag, Dna, Building2, Megaphone, type LucideIcon } from "lucide-react";
import { industries } from "@/lib/industries-data";
import { HeroBanner } from "@/components/HeroBanner";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import {
  AngleDivider,
  GradientOverlay,
  RadialGlow,
} from "@/components/SectionTextures";

/* ── Icon mapping per industry slug ── */
const industryIcons: Record<string, LucideIcon> = {
  manufacturing: Factory,
  nonprofits: Heart,
  "product-brands": ShoppingBag,
  "health-biotech": Dna,
  "real-estate": Building2,
  "marketing-teams": Megaphone,
};

export default function IndustriesClient() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <HeroBanner
        videoSrc="/videos/hero-production.mp4"
        overlayOpacity={70}
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-bold uppercase text-[#68ccd1]"
          >
            Industries We Serve
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
            Every industry earns trust differently.{" "}
            <span className="text-[#68ccd1]">Your video should too.</span>
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
            We build cinematic video campaigns for purpose-led organizations
            across manufacturing, nonprofits, product brands, health &amp; biotech,
            real estate, and marketing teams. Same process. Different playbook for
            every vertical.
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
              href="/work"
              className="inline-flex items-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-[#68ccd1] hover:bg-[#68ccd1]/10"
            >
              See Our Work
            </Link>
          </motion.div>
        </div>
      </HeroBanner>

      <AngleDivider variant="notch" fill="#f5fafa" from="#080808" />

      {/* ═══ WHY INDUSTRY MATTERS ═══ */}
      <Section variant="light">
        <GradientOverlay
          from="rgba(200,169,126,0.03)"
          to="transparent"
          direction="to bottom"
        />
        <SectionHeader
          eyebrow="Our Approach"
          title={
            <>
              Generic video is a{" "}
              <span className="text-[#52b0b6]">budget line item.</span>{" "}
              Industry-specific video is a{" "}
              <span className="text-[#52b0b6]">growth lever.</span>
            </>
          }
          description="A factory tour and a fundraising campaign film require fundamentally different storytelling, pacing, and distribution strategies. We don't use one template for every client — we adapt the Story Real Method to the way your industry earns trust, builds relationships, and closes business."
          variant="light"
        />

        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="rounded-2xl border border-[#e0e0e0] bg-white p-8 shadow-md md:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    label: "Strategy shaped by your buyer journey",
                    detail:
                      "We research how your prospects evaluate, compare, and decide — then build a content plan that meets them at every stage.",
                  },
                  {
                    label: "Production designed for your environment",
                    detail:
                      "Whether it's a manufacturing floor, a clinical lab, or a living room set, we bring the right crew, gear, and safety protocols.",
                  },
                  {
                    label: "Deployment tuned to your channels",
                    detail:
                      "LinkedIn for B2B, Meta for DTC, email for nonprofits, MLS for real estate — we format and optimize for where your audience lives.",
                  },
                  {
                    label: "Measurement tied to your KPIs",
                    detail:
                      "Lead generation, donor conversion, sales cycle compression, talent acquisition — we track what actually matters to your organization.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="rounded-xl border border-[#1a1a1a]/10 bg-[#f5fafa] p-5"
                  >
                    <p className="text-sm font-bold text-[#52b0b6]">{item.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#4a4a4a]">
                      {item.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#151515" from="#f5fafa" />

      {/* ═══ INDUSTRIES GRID ═══ */}
      <Section className="bg-[#151515] noise-texture">
        <RadialGlow
          color="#68ccd1"
          position="50% 20%"
          size="700px"
          opacity={0.04}
        />
        <SectionHeader
          eyebrow="Industries"
          eyebrowColor="text-[#68ccd1]"
          title={
            <>
              Choose your industry.{" "}
              <span className="text-[#68ccd1]">See your playbook.</span>
            </>
          }
          description="Select your vertical below to explore the specific pain points we solve, the video types that perform best, and the campaign stack we recommend."
        />

        <div className="mx-auto max-w-5xl">
          <StaggerContainer
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.08}
          >
            {industries.map((industry) => {
              const Icon = industryIcons[industry.slug] ?? Factory;
              return (
                <StaggerItem key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group block h-full"
                  >
                    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#111] p-8 transition-all duration-300 hover:border-[#68ccd1]/30 hover:bg-[#1a1a1a]">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#68ccd1]/10 text-[#68ccd1] transition-transform duration-300 group-hover:scale-110">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-heading font-black text-white">
                        {industry.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                        {industry.headline}
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#68ccd1] transition-all duration-300 group-hover:gap-3">
                        View playbook <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#151515" flip />

      {/* ═══ PROCESS OVERVIEW ═══ */}
      <Section variant="light">
        <GradientOverlay
          from="rgba(200,169,126,0.02)"
          to="transparent"
          direction="to bottom right"
        />
        <SectionHeader
          eyebrow="How It Works"
          title={
            <>
              One proven method.{" "}
              <span className="text-[#52b0b6]">Tailored to your world.</span>
            </>
          }
          description="Regardless of industry, every engagement follows the Story Real Method — strategy, production, and deployment — customized to your goals, your audience, and your competitive landscape."
          variant="light"
        />

        <div className="mx-auto max-w-4xl">
          <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.12}>
            {[
              {
                step: "01",
                title: "Strategy",
                body: "We audit your current content, research your market, identify the strongest stories, and build a production plan with clear KPIs.",
                href: "/strategy",
              },
              {
                step: "02",
                title: "Production",
                body: "Cinematic production tailored to your environment — factory floors, boardrooms, outdoor locations, studios. Professional crews, premium gear, zero hassle.",
                href: "/production",
              },
              {
                step: "03",
                title: "Deployment",
                body: "We don't hand over files and disappear. We format, optimize, and deploy content across the channels that drive results for your specific industry.",
                href: "/deployment",
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <Link href={item.href} className="group block h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-[#e0e0e0] bg-white p-8 shadow-md transition-all duration-300 hover:border-[#52b0b6]/40 hover:shadow-lg">
                    <span className="mb-3 text-3xl font-heading font-black text-[#52b0b6]/30">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-heading font-black text-[#1a1a1a]">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4a4a4a]">
                      {item.body}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#52b0b6] transition-all duration-300 group-hover:gap-3">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* ═══ CTA ═══ */}
      <CTASection
        headline="Not sure which playbook fits your organization?"
        subhead="Book a free strategy call. We'll listen to your goals, assess your current content, and recommend the right approach — whether you work with us or not."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="See Our Work"
        secondaryHref="/work"
      />
    </>
  );
}
