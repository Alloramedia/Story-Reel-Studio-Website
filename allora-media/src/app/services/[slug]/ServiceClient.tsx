"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ServiceData } from "@/lib/services-data";
import { credibilityStats } from "@/lib/constants";
import { SlideIn } from "@/components/animations";
import {
  CheckCircle,
  XCircle,
  Camera,
  Shield,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  Target,
  Lightbulb,
  Zap,
} from "lucide-react";
import { HeroBanner } from "@/components/HeroBanner";
import { TiltCard } from "@/components/TiltCard";
import {
  AngleDivider,
  EdgeAccentStripe,
  GradientOverlay,
  RadialGlow,
} from "@/components/SectionTextures";
import { VideoShowcase } from "@/components/YouTubeEmbed";

const whyStoryReal = [
  {
    icon: <Camera size={20} />,
    title: "All production in-house",
    desc: "No outsourcing, no delays. Our team handles every shoot from start to delivery.",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Built for marketing performance",
    desc: "Every deliverable is optimized for ads, websites, and social — not just a portfolio piece.",
  },
  {
    icon: <Shield size={20} />,
    title: "Full usage rights included",
    desc: "You own the content. Use it anywhere — ads, website, proposals, print — forever.",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Results-driven approach",
    desc: "We don't just create pretty content. Every asset is built to drive measurable business results.",
  },
  {
    icon: <Clock size={20} />,
    title: "Fast turnaround times",
    desc: "Most projects deliver in 2-4 weeks. No dragging timelines or endless back-and-forth.",
  },
  {
    icon: <Users size={20} />,
    title: "Experienced team",
    desc: `7+ years of experience producing content for ${credibilityStats.businessesServed} businesses across Connecticut.`,
  },
];

const whyCardIcons = [
  <Lightbulb key="0" size={20} className="text-[#68ccd1]" />,
  <TrendingUp key="1" size={20} className="text-[#68ccd1]" />,
  <Zap key="2" size={20} className="text-[#68ccd1]" />,
];

export function ServiceClient({ service }: { service: ServiceData }) {
  return (
    <>

      {/* ═══ HERO ═══ */}
      <HeroBanner
        videoSrc={service.heroVideo || "/videos/hero-production.mp4"}
        imageSrc="/images/production-hero.jpg"
        imageAlt={service.name}
        overlayOpacity={65}
        cursorSpotlight
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-balance text-[#68ccd1]"
          >
            Media Production &mdash; {service.name}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            {service.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            {service.subhead}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#68ccd1]/25 transition-all hover:scale-[1.03] hover:bg-[#7dd6da]"
            >
              Discuss Your Project
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/media-production"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/5"
            >
              All Production Services
            </Link>
          </motion.div>
        </div>
      </HeroBanner>

      {/* ═══ CREDIBILITY BAR ═══ */}
      <section className="relative py-5 lg:py-6 bg-[#68ccd1]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: credibilityStats.businessesServed, label: "Businesses Served" },
              { value: "7+", label: "Years of Experience" },
              { value: credibilityStats.googleRating, label: "Google Rating" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="text-center"
              >
                <div className="font-heading text-2xl font-black text-white md:text-3xl lg:text-4xl">
                  {stat.value}
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/80 md:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AngleDivider variant="notch" fill="#080808" from="#68ccd1" />

      {/* ═══ DESCRIPTION + WHY CARDS ═══ */}
      <Section variant="dark">
        <GradientOverlay
          from="rgba(104,204,209,0.04)"
          to="transparent"
          direction="to bottom"
        />
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Why This Matters"
            title="Why this matters for your business."
          />
          <p className="text-lg leading-relaxed text-white/60">
            {service.description}
          </p>
        </div>

        {/* Why Cards (3 cards beneath description) */}
        {service.whyCards && service.whyCards.length > 0 && (
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
            {service.whyCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="h-full rounded-2xl border border-white/10 p-6 text-center hover-lift"
              >
                <div className="mb-3 flex justify-center">
                  {whyCardIcons[i % whyCardIcons.length]}
                </div>
                <h3 className="mb-2 text-lg font-bold">{card.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#080808" />

      {/* ═══ THE NUMBERS ═══ */}
      {service.stats && service.stats.length > 0 && (
        <>
          <Section variant="light">
            <EdgeAccentStripe color="#68ccd1" side="right" width="5%" />
            <GradientOverlay
              from="rgba(14,42,53,0.03)"
              to="transparent"
              direction="to bottom right"
            />
            <RadialGlow
              color="#68ccd1"
              position="90% 20%"
              size="600px"
              opacity={0.04}
            />
            <div className="mx-auto max-w-5xl py-6">
              <SectionHeader
                variant="light"
                eyebrow="The Numbers Don't Lie"
                title={`Why ${service.name.toLowerCase()} is a smart investment.`}
              />
              <div className="mb-10 grid gap-4 md:grid-cols-4">
                {service.stats.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="rounded-xl border border-[#68ccd1]/20 bg-[#151515] p-5 text-center hover-lift"
                  >
                    <p className="font-heading text-3xl font-black text-[#68ccd1]">
                      {item.stat}
                    </p>
                    <p className="mt-1 text-xs text-white/55">{item.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Line callout within stats section */}
              <motion.div
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/10 bg-[#151515] p-8 md:p-10"
              >
                <h3 className="mb-4 text-center font-heading text-xl font-bold text-white">
                  The bottom line
                </h3>
                <p className="text-center text-sm leading-relaxed text-white/60 md:text-base">
                  {service.whyItMatters}
                </p>
              </motion.div>
            </div>
          </Section>

          <AngleDivider variant="notch" fill="#080808" from="#f5fafa" flip />
        </>
      )}

      {/* ═══ WHAT WE DELIVER ═══ */}
      <Section variant="dark">
        <GradientOverlay
          from="rgba(104,204,209,0.03)"
          to="transparent"
          direction="to top left"
        />
        <RadialGlow
          color="#68ccd1"
          position="10% 50%"
          size="500px"
          opacity={0.03}
        />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            eyebrow="What You Get"
            title="Everything included — nothing hidden."
            description="Every project includes a clear scope, timeline, and deliverable list. No surprise charges. No mystery fees."
          />
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-[#68ccd1]/20 bg-[#080808] p-8 md:p-10">
              <div className="grid gap-4 md:grid-cols-2">
                {service.whatWeDeliver.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-3 rounded-xl bg-[#151515] p-4"
                  >
                    <CheckCircle
                      size={18}
                      className="mt-0.5 shrink-0 text-[#68ccd1]"
                    />
                    <span className="text-sm leading-relaxed text-white/80">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#080808" />

      {/* ═══ OUR PROCESS ═══ */}
      {service.process && service.process.length > 0 && (
        <>
          <Section variant="light">
            <EdgeAccentStripe color="#68ccd1" side="left" width="4%" />
            <GradientOverlay
              from="rgba(14,42,53,0.03)"
              to="rgba(104,204,209,0.02)"
              direction="to bottom"
            />
            <div className="mx-auto max-w-5xl py-6">
              <SectionHeader
                variant="light"
                eyebrow="How It Works"
                title={`Our ${service.name.toLowerCase()} process.`}
                description="A clear, repeatable process that eliminates guesswork and guarantees a professional result."
              />
              <div className="mx-auto max-w-3xl">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-5.75 top-0 bottom-0 w-px bg-[#68ccd1]/20 md:left-6.75" />

                  <div className="space-y-8">
                    {service.process.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="relative flex items-start gap-5"
                      >
                        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#68ccd1] bg-[#151515] md:h-14 md:w-14">
                          <span className="font-heading text-sm font-black text-[#68ccd1]">
                            {step.step}
                          </span>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-[#151515] p-5 flex-1">
                          <h3 className="font-heading text-base font-bold text-white md:text-lg">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-white/55">
                            {step.detail}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <AngleDivider variant="notch" fill="#080808" from="#f5fafa" flip />
        </>
      )}

      {/* ═══ DIY VS PROFESSIONAL ═══ */}
      {service.diyVsPro && (
        <>
          <Section variant="dark">
            <GradientOverlay
              from="rgba(104,204,209,0.03)"
              to="transparent"
              direction="to top left"
            />
            <RadialGlow
              color="#68ccd1"
              position="50% 50%"
              size="600px"
              opacity={0.03}
            />
            <div className="mx-auto max-w-5xl py-6">
              <SectionHeader
                eyebrow="The Difference Is Obvious"
                title={`Professional ${service.name.toLowerCase()} vs. doing it yourself.`}
              />
              <div className="mx-auto max-w-4xl">
                <div className="grid gap-6 md:grid-cols-2">
                  <SlideIn from="left">
                    <div className="h-full rounded-2xl border border-white/10 bg-[#0e1e25] p-6">
                      <h3 className="mb-4 text-lg font-bold text-white/60">
                        DIY Approach
                      </h3>
                      <ul className="space-y-3 text-sm text-white/55">
                        {service.diyVsPro.diy.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <XCircle
                              size={16}
                              className="mt-0.5 shrink-0 text-red-400/60"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SlideIn>
                  <SlideIn from="right">
                    <div className="h-full rounded-2xl border border-[#68ccd1]/20 bg-[#0e1e25] p-6">
                      <h3 className="mb-4 text-lg font-bold text-white">
                        Story Real Studios {service.name}
                      </h3>
                      <ul className="space-y-3 text-sm text-white/80">
                        {service.diyVsPro.pro.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle
                              size={16}
                              className="mt-0.5 shrink-0 text-[#68ccd1]"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SlideIn>
                </div>
              </div>
            </div>
          </Section>

          <AngleDivider variant="notch" fill="#f5fafa" from="#080808" />
        </>
      )}

      {/* ═══ WHO THIS IS FOR ═══ */}
      {service.idealFor && service.idealFor.length > 0 && (
        <>
          <Section variant="light">
            <GradientOverlay
              from="rgba(14,42,53,0.03)"
              to="rgba(104,204,209,0.02)"
              direction="to bottom"
            />
            <RadialGlow
              color="#68ccd1"
              position="50% 80%"
              size="700px"
              opacity={0.04}
            />
            <div className="mx-auto max-w-5xl py-6">
              <SectionHeader
                variant="light"
                eyebrow="Who This Is For"
                title={`Businesses that benefit most from ${service.name.toLowerCase()}.`}
              />
              <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
                {service.idealFor.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="h-full"
                  >
                    <TiltCard tiltIntensity={5} className="h-full">
                      <div className="flex h-full flex-col rounded-2xl border border-[#68ccd1]/15 bg-[#151515] p-7 hover-lift">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#68ccd1]/10 text-[#68ccd1]">
                          <Target size={20} />
                        </div>
                        <h3 className="font-heading text-lg font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/55">
                          {item.desc}
                        </p>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          <AngleDivider variant="notch" fill="#080808" from="#f5fafa" flip />
        </>
      )}

      {/* ═══ WHY STORY REAL STUDIOS ═══ */}
      <Section variant="dark">
        <GradientOverlay
          from="rgba(104,204,209,0.03)"
          to="transparent"
          direction="to top left"
        />
        <RadialGlow
          color="#68ccd1"
          position="10% 50%"
          size="500px"
          opacity={0.03}
        />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            eyebrow="Why Work With Us"
            title="What makes Story Real Studios different."
          />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyStoryReal.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="h-full"
              >
                <TiltCard tiltIntensity={5} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#080808] p-7 hover-lift border-glow">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#68ccd1]/10 text-[#68ccd1]">
                      {item.icon}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {item.desc}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ TESTIMONIALS ═══ */}
      <TestimonialSection />

      {/* ═══ FAQ ═══ */}
      <Section variant="light">
        <GradientOverlay
          from="rgba(14,42,53,0.03)"
          to="transparent"
          direction="to bottom right"
        />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            variant="light"
            eyebrow="Questions & Answers"
            title={`What business owners ask us about ${service.name.toLowerCase()}.`}
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={service.faqs} variant="light" />
          </div>
        </div>
      </Section>

      {/* ═══ CTA ═══ */}

      {/* Testimonial video examples — only on testimonial-videos page */}
      {service.slug === "testimonial-videos" && (
        <Section variant="dark">
          <GradientOverlay from="rgba(104,204,209,0.04)" to="transparent" direction="to bottom right" />
          <RadialGlow color="#68ccd1" position="80% 30%" size="500px" opacity={0.03} />
          <VideoShowcase
            videos={[
              {
                videoId: "8fg8B7arsPI",
                title: "Client Testimonial Video — Business Growth Story",
                client: "Story Real Studios Production",
                description: "A testimonial video we produced capturing a business owner's story — authentic interview style with professional audio, lighting, and editing.",
              },
              {
                videoId: "yXrwTtRcMjo",
                title: "Client Testimonial Video — Marketing Results",
                client: "Story Real Studios Production",
                description: "Real results captured on camera — we use conversational interview techniques that draw out genuine stories prospects connect with.",
              },
              {
                videoId: "DJw4b6dxjlM",
                title: "Client Testimonial Video — Brand Perception",
                client: "Story Real Studios Production",
                description: "A client discusses the difference professional production made for their brand — the kind of testimonial that shortens sales cycles.",
              },
            ]}
            eyebrow="Testimonials We've Produced"
            heading="Real testimonial videos we've captured for clients."
            description="These are examples of the testimonial video style we produce — conversational, authentic, and professionally filmed to build trust and drive results."
          />
        </Section>
      )}

      <CTASection
        headline={`Let\u2019s talk about your ${service.name.toLowerCase()} project.`}
        subhead="Tell us what you need and we\u2019ll scope the work, plan the production timeline, and deliver content that actually drives results for your business."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="See All Production Services"
        secondaryHref="/media-production"
      />
    </>
  );
}
