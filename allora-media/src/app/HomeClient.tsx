"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle, Target, Film, Rocket, ChevronRight } from "lucide-react";
import { HeroBanner } from "@/components/HeroBanner";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { siteConfig, credibilityStats } from "@/lib/constants";
import { featuredCaseStudies } from "@/lib/shared-data";

export default function HomeClient() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <HeroBanner
        videoSrc="/videos/hero-homepage.mp4"
        overlayOpacity={50}
        cursorSpotlight
        cinematic
      >
        <div className="relative z-20 mx-auto max-w-6xl px-6 text-center lg:px-8">
          {/* Dramatic word-by-word title reveal */}
          <div className="overflow-hidden mb-2">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm font-semibold uppercase tracking-[0.35em] text-[#68ccd1]"
            >
              Strategy-Led Video Production
            </motion.p>
          </div>

          <h1 className="font-heading text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl text-shadow-hero">
            {["Video", "Campaigns", "That"].map((word, i) => (
              <span key={word} className="inline-block overflow-hidden mr-[0.25em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", rotateX: 40 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <br className="hidden md:block" />
            {["Build", "Trust"].map((word, i) => (
              <span key={word} className="inline-block overflow-hidden mr-[0.25em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", rotateX: 40 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{ duration: 1, delay: 0.45 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <span className="inline-block overflow-hidden">
              <motion.span
                className="inline-block text-[#68ccd1]"
                initial={{ y: "110%", rotateX: 40 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
              >
                &amp; Drive Growth
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
          >
            We combine strategy, cinematic production, and deployment to create content systems that earn trust, shorten sales cycles, and turn video into a measurable growth asset.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-[#080808] shadow-lg shadow-[#68ccd1]/25 transition-all duration-300 hover:bg-[#7dd6da] hover:scale-[1.03] hover:shadow-xl hover:shadow-[#68ccd1]/30"
            >
              Book a Strategy Call
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-[#68ccd1] hover:bg-[#68ccd1]/10"
            >
              <Play size={18} className="mr-2" />
              See Our Work
            </Link>
          </motion.div>
        </div>
      </HeroBanner>

      {/* ═══════ CREDIBILITY BAR ═══════ */}
      <section className="relative bg-[#f5fafa] py-10 border-y border-[#68ccd1]/10">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { value: credibilityStats.projectsDelivered, label: "Projects Delivered" },
              { value: credibilityStats.yearsInBusiness, label: "Years in Business" },
              { value: credibilityStats.industriesServed, label: "Industries Served" },
              { value: credibilityStats.googleRating, label: "Google Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-2xl font-black text-[#52b0b6] md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#4a4a4a]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PROBLEM ═══════ */}
      <Section variant="light">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#52b0b6]">The Problem</p>
            <h2 className="font-heading text-3xl font-black text-[#1a1a1a] md:text-4xl lg:text-5xl">
              Random Videos Don&apos;t Build Trust or Pipeline —
              <span className="text-[#52b0b6]"> Systems Do.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4a4a4a]">
              Most organizations treat video as a one-off project: hire a videographer, get a deliverable, hope it works. The result is disconnected content that sits on a YouTube channel collecting dust. No strategy behind it. No distribution plan. No measurable impact.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#4a4a4a]">
              Your competitors are building content systems — libraries of strategic video assets designed to build trust, shorten sales cycles, and drive measurable growth across every channel. The question isn&apos;t whether you need video. It&apos;s whether your video is actually working.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* ═══════ THE STORY REAL METHOD (3 Pillars) ═══════ */}
      <Section variant="dark">
        <SectionHeader
          eyebrow="The Story Real Method"
          title="Strategy. Production. Deployment."
          description="Three disciplines, one integrated process. Every engagement flows through our proven methodology — ensuring your video content is strategic, cinematic, and distribution-ready from day one."
        />

        <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Target,
              step: "01",
              title: "Strategy",
              description: "We start with your business objectives, audience, and distribution channels — not a camera. The result is a Media Blueprint that defines exactly what content you need, why, and how it will be deployed.",
              href: "/strategy",
              cta: "Learn About Strategy",
            },
            {
              icon: Film,
              step: "02",
              title: "Production",
              description: "Cinematic video production with a disciplined process — from pre-production planning through multi-day shoots to polished post-production. Every shot serves the strategy.",
              href: "/production",
              cta: "Learn About Production",
            },
            {
              icon: Rocket,
              step: "03",
              title: "Deployment",
              description: "Content becomes a system, not a single deliverable. We deliver distribution-ready assets in every format you need — optimized for your website, ads, email, social, and sales enablement.",
              href: "/deployment",
              cta: "Learn About Deployment",
            },
          ].map((pillar) => (
            <StaggerItem key={pillar.step}>
              <div className="group relative rounded-2xl border border-[#1a4a58]/40 bg-[#0e2a35] p-8 transition-all duration-500 hover:border-[#68ccd1]/30 hover:bg-[#123642] gradient-border-card">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#68ccd1]/10">
                    <pillar.icon size={24} className="text-[#68ccd1]" />
                  </div>
                  <span className="text-sm font-bold text-[#68ccd1]/40">{pillar.step}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">{pillar.title}</h3>
                <p className="mt-3 text-white/60 leading-relaxed">{pillar.description}</p>
                <Link
                  href={pillar.href}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-[#68ccd1] transition-colors hover:text-[#7dd6da]"
                >
                  {pillar.cta}
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ═══════ FEATURED WORK ═══════ */}
      <Section variant="light">
        <SectionHeader
          eyebrow="Selected Work"
          title="Results That Speak for Themselves"
          description="Every project starts with strategy and ends with measurable outcomes. Here's how we've helped organizations build trust, shorten sales cycles, and drive growth through video."
          variant="light"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredCaseStudies.map((study, i) => (
            <FadeIn key={study.href} delay={i * 0.1}>
              <Link href={study.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#a8e0e4]">{study.industry}</p>
                    <h3 className="mt-1 font-heading text-lg font-bold text-white">{study.title}</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-3xl font-black text-[#52b0b6]">{study.metric}</span>
                    <span className="text-sm text-[#4a4a4a]">{study.metricLabel}</span>
                  </div>
                  <p className="mt-2 text-sm text-[#666] line-clamp-2">{study.result}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="inline-flex items-center text-sm font-semibold text-[#52b0b6] transition-colors hover:text-[#68ccd1]"
          >
            View All Case Studies
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </Section>

      {/* ═══════ PARALLAX QUOTE — LUKE IN ACTION ═══════ */}
      <section
        className="relative h-[60vh] md:h-[70vh]"
        style={{
          backgroundImage: "url(/images/production/bts-camera-op.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 via-[#080808]/40 to-[#080808]/70" />
        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <FadeIn>
            <div className="max-w-3xl text-center">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#68ccd1]">Our Philosophy</p>
              <blockquote className="font-heading text-2xl font-black leading-snug text-white md:text-4xl lg:text-5xl text-shadow-hero">
                &ldquo;Every frame should earn its place. Strategy first, then story, then cinema.&rdquo;
              </blockquote>
              <p className="mt-6 text-base font-medium text-white/60">
                — Luke, Founder &amp; Creative Director
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════ INDUSTRIES ═══════ */}
      <Section variant="dark">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Deep Expertise Where It Matters"
          description="We specialize in industries where trust, credibility, and clarity are essential to growth — and where video delivers outsized returns."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Manufacturing", href: "/industries/manufacturing", desc: "Factory tours, capability videos, and recruitment content" },
            { title: "Nonprofits", href: "/industries/nonprofits", desc: "Fundraising campaigns, impact stories, and donor trust" },
            { title: "Health & Biotech", href: "/industries/health-biotech", desc: "Brand films, recruitment, and investor content" },
            { title: "Brand Lifestyle & DTC", href: "/industries/brand-lifestyle", desc: "Campaign films, product content, and performance creative" },
            { title: "Sports & Entertainment", href: "/industries/sports-entertainment", desc: "Athlete stories, game-day content, and brand partnerships" },
            { title: "Professional Services", href: "/industries/professional-services", desc: "Authority content, team profiles, and thought leadership" },
          ].map((industry) => (
            <FadeIn key={industry.href}>
              <Link
                href={industry.href}
                className="group flex items-center justify-between rounded-xl border border-[#1a4a58]/40 bg-[#0e2a35] p-6 transition-all duration-300 hover:border-[#68ccd1]/30 hover:bg-[#123642]"
              >
                <div>
                  <h3 className="font-heading text-base font-bold text-white group-hover:text-[#68ccd1] transition-colors">{industry.title}</h3>
                  <p className="mt-1 text-sm text-white/50">{industry.desc}</p>
                </div>
                <ChevronRight size={20} className="text-white/20 group-hover:text-[#68ccd1] transition-colors shrink-0" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ═══════ PROCESS PREVIEW ═══════ */}
      <Section variant="light">
        <SectionHeader
          eyebrow="How We Work"
          title="From Discovery to Deployment"
          description="A clear, repeatable process that removes guesswork and delivers results. Every engagement follows five phases — each building on the last."
          variant="light"
        />

        {/* Process video preview */}
        <FadeIn className="mt-8 mb-12">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-lg">
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
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {[
            { step: "01", title: "Discovery", desc: "Understand your goals, audience, and competitive landscape" },
            { step: "02", title: "Blueprint", desc: "Define content strategy, messaging, and distribution plan" },
            { step: "03", title: "Production", desc: "Cinematic filming with disciplined pre- and post-production" },
            { step: "04", title: "Launch", desc: "Deliver distribution-ready assets across all platforms" },
            { step: "05", title: "Library", desc: "Build an asset system that compounds in value over time" },
          ].map((phase) => (
            <FadeIn key={phase.step}>
              <div className="text-center md:text-left">
                <span className="font-heading text-3xl font-black text-[#68ccd1]/30">{phase.step}</span>
                <h3 className="mt-2 font-heading text-base font-bold text-[#1a1a1a]">{phase.title}</h3>
                <p className="mt-2 text-sm text-[#4a4a4a]">{phase.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/process"
            className="inline-flex items-center text-sm font-semibold text-[#52b0b6] transition-colors hover:text-[#68ccd1]"
          >
            See Our Full Process
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </Section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <Section variant="dark">
        <SectionHeader
          eyebrow="What Clients Say"
          title="Trusted by Business Leaders"
        />
        <TestimonialCarousel />
      </Section>

      {/* ═══════ FINAL CTA ═══════ */}
      <CTASection
        variant="light"
        headline="Ready to build a video campaign that actually works?"
        subhead="Book a free strategy call. We'll review your current content, identify the biggest opportunities, and give you a clear roadmap — whether you work with us or not."
        primaryLabel="Book a Strategy Call"
        primaryHref={siteConfig.bookingUrl}
        secondaryLabel="See Our Work"
        secondaryHref="/work"
      />
    </>
  );
}
