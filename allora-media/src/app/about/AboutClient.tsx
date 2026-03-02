"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { HeroBanner } from "@/components/HeroBanner";
import { StaggerContainer, StaggerItem, SlideIn, FadeIn, RevealLine } from "@/components/animations";
import { XCircle, CheckCircle } from "lucide-react";
import { credibilityStats } from "@/lib/constants";
import { AngleDivider, EdgeAccentStripe, GradientOverlay, RadialGlow } from "@/components/SectionTextures";

export function AboutClient() {
  return (
    <>
      {/* HERO */}
      <HeroBanner
        videoSrc="/videos/hero-about.mp4"
        imageSrc="/images/about-hero.jpg"
        imageAlt="About Allora Media"
        overlayOpacity={60}
        cursorSpotlight
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-bold uppercase text-balance text-[#65B207]"
          >
            About Allora Media
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl font-black leading-tight text-pretty text-white md:text-5xl lg:text-6xl"
          >
            A marketing agency built{' '}
            <span className="block animate-text-gradient">by someone who gets it.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/60"
          >
            Allora Media is a full-service marketing agency based in
            Southington, Connecticut. We combine paid advertising, professional
            media production, and social media management to help local
            businesses get more customers — and prove it with real data.
          </motion.p>
        </div>
      </HeroBanner>

      {/* ORIGIN STORY */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to bottom" />
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <FadeIn direction="right">
            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">
              How <span className="text-[#65B207]">Allora Media</span> started.
            </h2>
            <RevealLine className="mt-4 w-24" />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-white/60">
              <p>
                Allora Media started the way a lot of agencies do — doing one
                thing really well. For us, that was media production. We shot
                videos, took photos, and built creative for businesses that
                needed their work to look as good online as it did in person.
              </p>
              <p>
                But we kept seeing the same problem. Businesses would invest in
                beautiful content, post it to social media, and then wonder why
                the phone still wasn&apos;t ringing. There was no ad strategy.
                No tracking. No way to know what was actually generating
                customers. The content was great — but it was just sitting
                there.
              </p>
              <p>
                That&apos;s why we evolved into what we are today: a full-service
                marketing partner. We don&apos;t just produce content — we build
                the paid advertising campaigns that put it in front of the right
                people, install the tracking that ties every lead back to its
                source, and review performance with you every month. One team,
                one system, real accountability.
              </p>
            </div>
          </FadeIn>
          <SlideIn from="right" delay={0.2}>
            <Image
              src="/images/team.jpg"
              alt="Allora Media Team"
              width={700}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
          </SlideIn>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* VALUES / APPROACH */}
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="right" width="5%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <RadialGlow color="#65B207" position="90% 20%" size="600px" opacity={0.04} />
        <SectionHeader
          variant="light"
          eyebrow="How We Work"
          title="What makes us different."
        />
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {[
            {
              title: "Strategy Comes First",
              text: "We don't jump into creating ads or content without a plan. We start by understanding your business, your customers, and your goals — then build a strategy around what will actually move the needle.",
            },
            {
              title: "Results, Not Just Activity",
              text: "We measure leads, cost per customer, return on ad spend, and brand awareness — the numbers that impact your revenue. Not likes, not followers.",
            },
            {
              title: "A Real System, Not Guesswork",
              text: "Every campaign follows a structured process: build, test, measure, optimize, review. This consistency is what makes results compound month over month.",
            },
            {
              title: "Total Transparency",
              text: "Every client gets portal access to real-time campaign data, all creative assets, and monthly performance reports. You always know where your money is going.",
            },
            {
              title: "Everything Produced In-House",
              text: "All video, photography, and design is produced by our team — not outsourced to freelancers. This means better quality, faster turnaround, and creative built specifically for your campaigns.",
            },
            {
              title: "You Work Directly With Us",
              text: "No junior account managers. No middlemen. You work with the people who actually build and manage your campaigns. We know your business, your market, and your numbers.",
            },
          ].map((item, i) => (
            <StaggerItem key={i}>
              <div className="rounded-2xl border border-[#0f3d15]/15 bg-white/50 p-6 h-full hover-lift border-glow">
                <h3 className="mb-2 font-heading text-lg font-bold text-[#0f3d15]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#0f3d15]/60">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" flip />

      {/* BY THE NUMBERS */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to top left" />
        <RadialGlow color="#65B207" position="10% 50%" size="500px" opacity={0.03} />
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="rounded-2xl border border-[#65B207]/20 bg-[#0d1a10] p-8 md:p-10"
          >
            <p className="mb-8 text-center text-sm font-bold uppercase tracking-[0.2em] text-[#65B207]">
              Allora Media by the Numbers
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: credibilityStats.businessesServed, label: "Businesses Served" },
                { value: "500+", label: "Videos Produced" },
                { value: "7M+", label: "Ad Impressions Delivered" },
                { value: "100%", label: "Client Retention Rate" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="font-heading text-3xl font-black text-[#65B207] md:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/55">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* WHO WE'RE NOT FOR */}
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="left" width="4%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="rgba(101,178,7,0.02)" direction="to bottom" />
        <SectionHeader
          variant="light"
          eyebrow="Honest Disclaimer"
          title="We're not for everyone. And that's on purpose."
          description="We'd rather be upfront now than waste your time. Here's who we work best with — and who should probably look elsewhere."
        />
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            <SlideIn from="left">
              <div className="rounded-2xl border border-red-500/20 bg-[#080808] p-6 h-full border-glow">
              <h3 className="mb-4 font-heading text-lg font-bold text-red-400">We&apos;re NOT for you if&hellip;</h3>
              <ul className="space-y-3 text-sm text-white/55">
                {[
                  "You want 1,000 followers but don't care about revenue",
                  "You're looking for the cheapest option on Fiverr",
                  "You expect overnight results with no patience for strategy",
                  "You don't actually want to grow — you just want to look busy",
                  "You want to micromanage every post and ad",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <XCircle size={16} className="mt-0.5 shrink-0 text-red-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
              </div>
            </SlideIn>
            <SlideIn from="right" delay={0.15}>
              <div className="rounded-2xl border border-[#65B207]/20 bg-[#080808] p-6 h-full border-glow">
              <h3 className="mb-4 font-heading text-lg font-bold text-[#65B207]">We&apos;re PERFECT for you if&hellip;</h3>
              <ul className="space-y-3 text-sm text-white/70">
                {[
                  "You're a real business that wants more real customers",
                  "You value quality and understand marketing is an investment",
                  "You want to track every dollar and see measurable ROI",
                  "You're tired of agencies that can't show results",
                  "You want one team that handles everything, top to bottom",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 shrink-0 text-[#65B207]" />
                    {item}
                  </li>
                ))}
              </ul>
              </div>
            </SlideIn>
          </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" flip />

      {/* STUDIO */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.02)" to="transparent" direction="to top" />
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <SlideIn from="left">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/images/studio.webp"
                alt="Allora Media production studio in Southington, CT"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </SlideIn>
          <FadeIn direction="left" delay={0.2}>
            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">
              Our <span className="text-[#65B207]">Studio</span> in Southington, CT
            </h2>
            <RevealLine className="mt-3 w-20" />
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              We operate out of a fully equipped production studio in
              Southington, Connecticut — complete with professional lighting,
              video production capability, product photography setups, and
              everything we need to produce world-class content without
              outsourcing a thing.
            </p>
            <StaggerContainer className="mt-8 grid grid-cols-2 gap-4" staggerDelay={0.1}>
              {["Professional Lighting", "Video Production Suite", "Product Photography", "Green Screen"].map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="h-2 w-2 rounded-full bg-[#65B207]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 500, delay: 0.3 }}
                    />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialSection />

      {/* CTA */}
      <CTASection
        headline="Ready to work with a team that actually cares about your results?"
        subhead="Book a free Growth Blueprint Call. We'll audit your current marketing, show you where the biggest opportunities are, and give you a clear plan — whether you work with us or not."
        primaryLabel="Book a Growth Blueprint Call"
        primaryHref="/contact"
        secondaryLabel="See Our Results"
        secondaryHref="/case-studies"
      />
    </>
  );
}
