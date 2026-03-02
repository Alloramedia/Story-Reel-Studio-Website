"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  Shield,
  DollarSign,
  Clock,
  AlertTriangle,
  Users,
  ShieldCheck,
  Flame,
} from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { Section, SectionHeader } from "@/components/Section";
import {
  AngleDivider,
  EdgeAccentStripe,
  GradientOverlay,
  RadialGlow,
  FloatingDollarSigns,
} from "@/components/SectionTextures";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We learn your business inside and out — your customers, your competition, what you've tried, and where the biggest opportunities are hiding.",
  },
  {
    step: "02",
    title: "Strategy & Setup",
    desc: "Before spending a dollar on ads, we build your complete plan — targeting, creative direction, tracking setup, and budget allocation.",
  },
  {
    step: "03",
    title: "Production & Launch",
    desc: "We shoot your content, build your campaigns, install tracking, and go live — all handled by our team, start to finish.",
  },
  {
    step: "04",
    title: "Optimize & Report",
    desc: "Every month we review performance together, show you exactly what's working, and make data-backed adjustments to keep improving.",
  },
];

export function ProcessSection() {
  return (
    <>
      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="right" width="3%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="rgba(101,178,7,0.02)" direction="to bottom left" />
        <RadialGlow color="#65B207" position="80% 30%" size="500px" opacity={0.04} />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            variant="light"
            eyebrow="How It Works"
            title="Simple, structured, and transparent."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="h-full"
              >
                <TiltCard tiltIntensity={6} className="h-full">
                  <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-[#080808] p-7 hover-lift gradient-border-card border-glow border-l-4 border-l-[#65B207]">
                    <span className="font-heading text-4xl font-black text-[#65B207]/20">
                      {step.step}
                    </span>
                    <h3 className="mt-3 font-heading text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                      {step.desc}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#65B207] transition-colors hover:text-[#7acc09]"
            >
              See the full process
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

export function PortalSection() {
  return (
    <>
      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" />
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.02)" to="transparent" direction="to top" />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#65B207]">
              Transparency Built In
            </p>
            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">
              You always know where your money is going.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              Every client gets access to the Allora Media Hub — your
              dedicated portal where you can see campaign performance,
              access all creative assets, track project timelines, and
              review exactly how your marketing investment is performing.
              No more wondering. No more vague reports.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Real-time campaign performance dashboards",
                "Deliverable library with all creative assets",
                "Project timelines and milestone tracking",
                "Monthly performance reports and insights",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/60"
                >
                  <Shield size={16} className="shrink-0 text-[#65B207]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/client-portal"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-[#65B207] hover:bg-[#65B207]/10"
              >
                <Monitor size={16} />
                Learn About the Client Portal
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-[#080808] overflow-hidden shadow-2xl shadow-black/50">
            <Image
              src="/images/portal-screenshot.jpg"
              alt="Allora Media Client Portal"
              width={1200}
              height={628}
              className="w-full h-auto"
              quality={90}
            />
          </div>
        </div>
      </Section>
    </>
  );
}

export function GuaranteeSection() {
  return (
    <>
      <AngleDivider variant="notch" fill="#65B207" from="#080808" />
      <Section variant="accent" className="py-16! lg:py-20!">
        <GradientOverlay from="rgba(0,0,0,0.08)" to="transparent" direction="to bottom" />
        <div className="mx-auto max-w-4xl py-4">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/20">
              <ShieldCheck size={40} className="text-white" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-black text-white md:text-3xl">
                Our Growth Blueprint Guarantee
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                Book a Growth Blueprint Call with us and we&apos;ll audit your
                current marketing, research your competitors, and deliver a
                clear, actionable plan for growth —{" "}
                <span className="font-bold text-white underline">
                  whether you hire us or not.
                </span>{" "}
                If we don&apos;t believe we can get you results, we&apos;ll tell you.
                No hard sell. We earn your
                business by proving it first.
              </p>
              <div className="mt-6 flex flex-wrap gap-6">
                {[
                  { icon: <Flame size={16} />, text: "Free strategy session with real insights" },
                  { icon: <ShieldCheck size={16} />, text: "Month-to-month — cancel anytime" },
                  { icon: <Users size={16} />, text: "We'll tell you if we're not the right fit" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/90">
                    <span className="text-white">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export function CostOfNothingSection() {
  return (
    <>
      <AngleDivider variant="notch" fill="#080808" from="#65B207" flip />
      <Section variant="dark">
        <GradientOverlay from="rgba(220,38,38,0.03)" to="transparent" direction="to bottom" />
        <RadialGlow color="#dc2626" position="50% 30%" size="800px" opacity={0.03} />
        <FloatingDollarSigns className="right-[2%] top-[10%] w-62.5 h-75 text-red-400 hidden lg:block" />
        <FloatingDollarSigns className="left-[3%] bottom-[15%] w-50 h-62.5 text-red-400 hidden lg:block rotate-12" />
        <SectionHeader
          eyebrow="The Hard Truth"
          eyebrowColor="text-red-400"
          title={<>Every month you wait, your competitors{' '}<span className="block text-red-400">are getting further ahead.</span></>}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <DollarSign size={24} />,
              stat: "$3,000–$10,000+",
              title: "Revenue lost per month",
              detail:
                "Without a consistent lead generation system, your competitors are capturing the customers you should be getting. Every month without a system is revenue you'll never recover.",
            },
            {
              icon: <Clock size={24} />,
              stat: "6–12 months",
              title: "Head start your competition has",
              detail:
                "Businesses that started running targeted ads 6 months ago already have retargeting audiences, optimized campaigns, and lower costs per lead. The gap only widens.",
            },
            {
              icon: <AlertTriangle size={24} />,
              stat: "73%",
              title: "Of buyers research online first (Google)",
              detail:
                "If your business isn't showing up with professional content and paid visibility when someone searches for your service, you're invisible during the buying decision.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex h-full flex-col rounded-2xl border border-red-500/20 bg-[#080808] p-7 hover-lift"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                {item.icon}
              </div>
              <p className="font-heading text-2xl font-black text-red-400">
                {item.stat}
              </p>
              <h3 className="mt-1 font-heading text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#65B207] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#65B207]/25 transition-all hover:bg-[#7acc09] hover:scale-[1.03]"
          >
            Stop Losing Customers — Talk to Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}

export function FinalCTASection() {
  return (
    <>
      <AngleDivider variant="notch" fill="#0f3d15" from="#080808" />
      <Section variant="green" className="cta-glow z-2">
        <EdgeAccentStripe color="#65B207" side="left" width="4%" />
        <EdgeAccentStripe color="#65B207" side="right" width="4%" />
        <GradientOverlay from="rgba(0,0,0,0.15)" to="rgba(101,178,7,0.05)" direction="to top" />
        <RadialGlow color="#65B207" position="50% 50%" size="700px" opacity={0.05} />
        <div className="absolute inset-0 opacity-5 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-black text-white md:text-4xl lg:text-5xl">
            Ready to stop guessing{' '}
            <span className="block animate-text-gradient">
              and start growing?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/60">
            Book a free Growth Blueprint Call. We&apos;ll audit your current
            marketing, show you where the biggest opportunities are, and
            give you a clear plan — whether you work with us or not.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#65B207] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#65B207]/25 transition-all duration-300 hover:bg-[#7acc09] hover:scale-[1.03]"
            >
              Book a Growth Blueprint Call
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-[#65B207] hover:bg-[#65B207]/10"
            >
              See Our Results
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
