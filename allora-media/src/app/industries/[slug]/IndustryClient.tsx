"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { IndustryData } from "@/lib/industries-data";
import { AngleDivider, EdgeAccentStripe, GradientOverlay, RadialGlow } from "@/components/SectionTextures";
import {
  Target,
  Video,
  BarChart3,
  Users,
  MapPin,
  Shield,
  Calendar,
  RefreshCw,
  Phone,
  Camera,
  PhoneCall,
  Sun,
  Star,
  Utensils,
  CalendarCheck,
  PartyPopper,
  LayoutGrid,
  ShoppingBag,
  Sparkles,
  Megaphone,
  Award,
  Clock,
  BookOpen,
  Eye,
  Clapperboard,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { HeroBanner } from "@/components/HeroBanner";
import { GoogleLogo } from "@/components/GoogleLogo";
import { googleReview } from "@/lib/constants";
import {
  trustedLogos,
  googleReviews,
  featuredCaseStudies,
} from "@/lib/shared-data";

const iconMap: Record<string, LucideIcon> = {
  Target,
  Video,
  BarChart3,
  Users,
  MapPin,
  Shield,
  Calendar,
  RefreshCw,
  Phone,
  Camera,
  PhoneCall,
  Sun,
  Star,
  Utensils,
  CalendarCheck,
  PartyPopper,
  LayoutGrid,
  ShoppingBag,
  Sparkles,
  Megaphone,
  Award,
  Clock,
  BookOpen,
  Eye,
  Clapperboard,
};


export function IndustryClient({ industry }: { industry: IndustryData }) {
  return (
    <>

      {/* ──────────── HERO ──────────── */}
      <HeroBanner
        videoSrc="/videos/hero-general.mp4"
        overlayOpacity={68}
        cursorSpotlight
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-balance text-[#68ccd1]"
          >
            {industry.name} Video Production in Connecticut
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            {industry.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            {industry.subhead}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-white transition-all hover:scale-[1.03] hover:bg-[#7dd6da] shadow-lg shadow-[#68ccd1]/20"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/5"
            >
              See Case Studies
            </Link>
          </motion.div>
        </div>
      </HeroBanner>

      {/* ──────────── STATS BAR ──────────── */}
      <section className="relative z-10 -mt-8 md:-mt-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl md:grid-cols-4"
          >
            {industry.stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center px-4 py-6 text-center md:py-8"
              >
                <span className="text-3xl font-heading font-black text-[#68ccd1] md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs font-medium uppercase tracking-wider text-white/55">
                  {stat.label}
                </span>
                {stat.benchmark && (
                  <span className="mt-1 text-[10px] text-white/50">{stat.benchmark}</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────── DESCRIPTION ──────────── */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to bottom" />
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-heading font-bold tracking-tight md:text-3xl">
            We understand your business.
          </h2>
          <p className="text-lg leading-relaxed text-white/60">
            {industry.description}
          </p>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#080808" />

      {/* ──────────── CHALLENGES ──────────── */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="right" width="5%" />
        <GradientOverlay from="rgba(14,42,53,0.03)" to="transparent" direction="to bottom right" />
        <RadialGlow color="#68ccd1" position="90% 20%" size="600px" opacity={0.04} />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="Sound Familiar?"
          title={`The problems ${industry.name.toLowerCase()} businesses deal with every day.`}
          description="If any of these apply to you, you're not alone. These are the exact issues our clients had before they started working with us."
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {industry.challenges.map((challenge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#151515] p-4"
            >
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
              <span className="text-base text-white/80">{challenge}</span>
            </motion.div>
          ))}
        </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#f5fafa" flip />

      {/* ──────────── SERVICES (Industry-Specific) ──────────── */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to top left" />
        <RadialGlow color="#68ccd1" position="10% 50%" size="500px" opacity={0.03} />
        <SectionHeader
          eyebrow="What You Get"
          title={`Everything your ${industry.name.toLowerCase()} business needs — one team.`}
          description="No more juggling freelancers, agencies, and platforms. Everything is built, launched, and managed by one team that knows your industry."
        />
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industry.services.map((service, i) => {
            const IconComponent = iconMap[service.icon] || Target;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative h-full rounded-2xl border border-white/10 bg-white/2 p-6 transition-all hover:border-[#68ccd1]/30 hover:bg-[#68ccd1]/4"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#68ccd1]/10 text-[#68ccd1] transition-colors group-hover:bg-[#68ccd1]/20">
                  <IconComponent size={20} />
                </div>
                <h3 className="mb-2 text-base font-bold text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#080808" />

      {/* ──────────── WHY STORY REAL ──────────── */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="left" width="4%" />
        <GradientOverlay from="rgba(14,42,53,0.03)" to="rgba(104,204,209,0.02)" direction="to bottom" />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="Why Story Real"
          title={`What makes us different for ${industry.name.toLowerCase()} businesses.`}
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {industry.differentiators.map((diff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="relative h-full rounded-2xl border border-white/10 bg-[#151515] p-7 hover-lift border-t-4 border-t-[#68ccd1]"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#68ccd1] text-white">
                <CheckCircle2 size={18} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">{diff.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{diff.description}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#f5fafa" flip />

      {/* ──────────── RESULTS ──────────── */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.02)" to="transparent" direction="to top" />
        <SectionHeader
          eyebrow="Real Results"
          title="Numbers that speak for themselves."
          description={`Here's what our ${industry.name.toLowerCase()} clients have achieved with Story Real.`}
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {industry.results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="h-full rounded-2xl border border-white/10 p-6"
            >
              <div className="mb-3 flex items-center gap-2 text-[#68ccd1]">
                <TrendingUp size={18} />
              </div>
              <p className="mb-2 text-xl font-heading font-black text-white">{result.metric}</p>
              <p className="text-sm leading-relaxed text-white/55">{result.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#080808" />

      {/* ──────────── OUR APPROACH ──────────── */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="left" width="4%" />
        <GradientOverlay from="rgba(14,42,53,0.03)" to="rgba(104,204,209,0.02)" direction="to bottom" />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow={`Our ${industry.name} Playbook`}
          title="How we build your content system."
          description="Every step is designed specifically for your industry — not a generic template."
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {industry.approach.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group flex items-start gap-4 rounded-xl border border-white/10 bg-[#151515] p-5 transition-all hover:border-[#68ccd1]/20 hover:bg-[#68ccd1]/4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#68ccd1] text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="text-base leading-relaxed text-white/80">{item}</span>
            </motion.div>
          ))}
        </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#f5fafa" flip />

      {/* ──────────── CASE STUDIES & REVIEWS ──────────── */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to bottom right" />

        {/* Logo marquee */}
        <p className="mb-8 text-center text-sm font-bold uppercase tracking-[0.2em] text-white/50">
          Trusted by Businesses Across Connecticut
        </p>
        <div className="relative mb-16 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-marquee w-max gap-12 py-4">
            {[...trustedLogos, ...trustedLogos].map((logo, i) => (
              <div
                key={`${logo.file}-${i}`}
                className="flex shrink-0 items-center justify-center opacity-70 brightness-200 grayscale transition-all hover:opacity-100 hover:brightness-100 hover:grayscale-0"
              >
                <Image
                  src={`/images/${logo.file}`}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <SectionHeader
          eyebrow="Proven Results"
          title="Don't take our word for it."
          description="Here are businesses like yours that went from guessing to growing with a real content strategy behind them."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {featuredCaseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="h-full"
            >
              <Link
                href={study.href}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#080808] transition-all hover:border-[#68ccd1]/30"
              >
                <div className="relative aspect-video overflow-hidden image-shine">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 inline-flex rounded-full bg-[#68ccd1]/20 px-3 py-1 text-xs font-semibold text-[#68ccd1]">
                    {study.industry}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/55">{study.result}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="font-heading text-2xl font-black text-[#68ccd1]">
                        {study.metric}
                      </p>
                      <p className="text-xs text-white/50">
                        {study.metricLabel}
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-[#68ccd1] opacity-0 transition-opacity group-hover:opacity-100">
                      View details <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#68ccd1] px-8 py-3.5 font-semibold text-[#68ccd1] transition-all hover:bg-[#68ccd1] hover:text-white"
          >
            View All Case Studies
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Google Reviews */}
        <div className="mx-auto mt-20 mb-4 flex items-center justify-center gap-2">
          <GoogleLogo className="h-6 w-6" />
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-[#FBBC05] text-[#FBBC05]" />
            ))}
          </div>
          <span className="text-lg font-bold text-white">{googleReview.rating}</span>
          <span className="text-sm text-white/50">&bull;&nbsp;5-Star Rated</span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-2xl border border-white/8 bg-[#080808]/80 p-6">
                <div className="mb-3 flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-white/70">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#68ccd1]/15 text-sm font-bold text-[#68ccd1]">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{review.name}</p>
                      <p className="text-xs text-white/40">{review.date}</p>
                    </div>
                  </div>
                  <GoogleLogo className="h-4 w-4 opacity-30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={googleReview.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#68ccd1] to-[#4a8a05] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#68ccd1]/20 transition-all duration-300 hover:shadow-[#68ccd1]/30 hover:scale-[1.03]"
          >
            <GoogleLogo className="h-5 w-5" />
            Read All Reviews on Google
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#080808" />

      {/* ──────────── FAQ ──────────── */}
      <Section variant="light">
        <GradientOverlay from="rgba(14,42,53,0.03)" to="transparent" direction="to bottom right" />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="Questions & Answers"
          title={`What ${industry.name.toLowerCase()} business owners ask us.`}
        />
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={industry.faqs} variant="light" />
        </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#f5fafa" flip />

      {/* ──────────── INLINE CTA ──────────── */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to top" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl rounded-3xl border border-[#68ccd1]/20 bg-linear-to-br from-[#68ccd1]/10 via-[#151515] to-[#151515] p-10 text-center md:p-14"
        >
          <h2 className="font-heading text-2xl font-black text-white md:text-3xl lg:text-4xl">
            Ready to see what this looks like for your {industry.name.toLowerCase()} business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/55">
            Book a free Strategy Call. We&apos;ll audit your current content strategy, show you what&apos;s working in your market, and map out a clear plan — no obligation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#68ccd1]/20 transition-all hover:scale-[1.03] hover:bg-[#7dd6da]"
            >
              Book a Strategy Call
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white transition-all hover:border-[#68ccd1]"
            >
              See Case Studies
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* ──────────── BOTTOM CTA ──────────── */}
      <CTASection
        headline={`Let\u2019s build a content system for your ${industry.name.toLowerCase()} business.`}
        subhead="Book a free Strategy Call. We\u2019ll review your current content strategy, identify the biggest opportunities in your market, and give you a clear plan \u2014 whether you work with us or not."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="See Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
