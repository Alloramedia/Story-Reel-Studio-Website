"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Video,
  Share2,
  CheckCircle,
  Star,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import {
  AngleDivider,
  EdgeAccentStripe,
  GradientOverlay,
  RadialGlow,
} from "@/components/SectionTextures";
import { GoogleLogo } from "@/components/GoogleLogo";
import { googleReview } from "@/lib/constants";
import {
  trustedLogos,
  googleReviews,
  featuredCaseStudies,
} from "@/lib/shared-data";

const servicePillars = [
  {
    icon: <TrendingUp size={28} />,
    badge: "Core Service",
    title: "Paid Media",
    desc: "Facebook & Instagram ad campaigns that put your business in front of the right people — and track every lead, call, and customer back to the campaign that brought them in.",
    href: "/paid-media",
    items: [
      "Meta Ads (Facebook & Instagram)",
      "Retargeting & lookalike audiences",
      "Conversion event tracking",
      "Monthly performance reviews",
    ],
  },
  {
    icon: <Video size={28} />,
    badge: "Creative",
    title: "Media Production",
    desc: "Professional video, photography, drone content, TV commercials, and graphic design — produced by our in-house team and built to make your ads and brand look world-class.",
    href: "/media-production",
    items: [
      "Video production & testimonials",
      "Corporate & product photography",
      "TV commercials & drone content",
      "Graphic design & brand assets",
    ],
  },
  {
    icon: <Share2 size={28} />,
    badge: "Support",
    title: "Organic Social",
    desc: "Consistent, on-brand content across your social platforms that builds credibility, stays top of mind, and feeds your retargeting audiences. Best paired with Paid Media.",
    href: "/organic-social",
    items: [
      "Platform management & scheduling",
      "Content themes & brand voice",
      "Community engagement (optional)",
      "Retargeting audience growth",
    ],
  },
];

export function PillarsSection() {
  return (
    <>
      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="left" width="4%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="rgba(101,178,7,0.02)" direction="to bottom" />
        <RadialGlow color="#65B207" position="50% 80%" size="800px" opacity={0.035} />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            variant="light"
            eyebrow="Our Services"
            title="Three pillars. One paid media system."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicePillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Link
                  href={pillar.href}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#080808] p-8 transition-all hover:border-[#65B207]/40 hover:shadow-lg hover:shadow-[#65B207]/5"
                >
                  <div className="mb-1 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#65B207]/10 text-[#65B207]">
                      {pillar.icon}
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                        i === 0
                          ? "bg-[#65B207]/20 text-[#65B207]"
                          : "bg-white/5 text-white/40"
                      }`}
                    >
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-white md:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {pillar.desc}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-white/55"
                      >
                        <CheckCircle
                          size={15}
                          className="mt-0.5 shrink-0 text-[#65B207]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#65B207]">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

export function CaseStudySection() {
  return (
    <>
      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" flip />
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to bottom right" />

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
          description="Here are businesses like yours that went from guessing to growing with a real marketing strategy behind them."
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
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#080808] transition-all hover:border-[#65B207]/30"
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
                  <span className="absolute bottom-3 left-4 inline-flex rounded-full bg-[#65B207]/20 px-3 py-1 text-xs font-semibold text-[#65B207]">
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
                      <p className="font-heading text-2xl font-black text-[#65B207]">
                        {study.metric}
                      </p>
                      <p className="text-xs text-white/50">
                        {study.metricLabel}
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-[#65B207] opacity-0 transition-opacity group-hover:opacity-100">
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
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#65B207] px-8 py-3.5 font-semibold text-[#65B207] transition-all hover:bg-[#65B207] hover:text-white"
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
          <span className="text-sm text-white/50">•&nbsp;5-Star Rated</span>
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
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#65B207]/15 text-sm font-bold text-[#65B207]">
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
            className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#65B207] to-[#4a8a05] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#65B207]/20 transition-all duration-300 hover:shadow-[#65B207]/30 hover:scale-[1.03]"
          >
            <GoogleLogo className="h-5 w-5" />
            Read All Reviews on Google
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Section>
    </>
  );
}
