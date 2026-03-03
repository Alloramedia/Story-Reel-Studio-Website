"use client";

import { motion } from "framer-motion";
import {
  Target, BarChart3, Eye, TrendingUp, DollarSign,
  Zap, CheckCircle, XCircle, Shield, Sparkles,
  Film, Layers, BarChart,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { MetricsStrip } from "@/components/MetricsStrip";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { FAQSchema } from "@/components/StructuredData";
import { TestimonialSection } from "@/components/TestimonialSection";
import { SlideIn, ScaleIn } from "@/components/animations";
import { HeroBanner } from "@/components/HeroBanner";
import { TiltCard } from "@/components/TiltCard";
import { AngleDivider, EdgeAccentStripe, GradientOverlay, RadialGlow } from "@/components/SectionTextures";

const capabilities = [
  {
    icon: <Film size={24} />,
    title: "Video-First Creative",
    description:
      "Every ad starts with cinematic video content — produced in-house by Story Real Studios. No stock footage. No templated graphics. Real creative that stops the scroll and builds trust.",
  },
  {
    icon: <Target size={24} />,
    title: "Strategic Audience Targeting",
    description:
      "We build layered audience strategies — cold prospecting, warm retargeting, and lookalike audiences — to put your video content in front of the exact people who need to see it.",
  },
  {
    icon: <Eye size={24} />,
    title: "Full-Funnel Distribution",
    description:
      "Your content works across the entire buyer journey — awareness campaigns that introduce your brand, consideration content that builds trust, and conversion campaigns that drive action.",
  },
  {
    icon: <BarChart size={24} />,
    title: "Performance Tracking & Reporting",
    description:
      "Every campaign is fully tracked — impressions, engagement, conversions, and pipeline impact. You always know exactly what your content investment is producing.",
  },
  {
    icon: <Layers size={24} />,
    title: "Creative Testing & Optimization",
    description:
      "We test different video cuts, thumbnails, hooks, and audience segments — continuously refining to find the combinations that drive the best results.",
  },
  {
    icon: <Zap size={24} />,
    title: "Platform Expertise",
    description:
      "We deploy across Facebook, Instagram, YouTube, and LinkedIn — choosing the right platforms based on where your audience actually spends time.",
  },
];

const faqItems = [
  {
    question: "How is Story Real's paid media different from a typical ad agency?",
    answer:
      "Most ad agencies take whatever content you give them and try to make it work as ads. We produce the content AND deploy it — so every piece of creative is strategically designed for paid distribution from day one. The strategy, production, and deployment are all connected.",
  },
  {
    question: "What platforms do you run campaigns on?",
    answer:
      "Primarily Facebook, Instagram, and YouTube — the platforms where video content performs best for brand awareness, trust-building, and lead generation. We also deploy on LinkedIn for B2B campaigns when it fits the strategy.",
  },
  {
    question: "Do I need to have video content before working with you on paid media?",
    answer:
      "No — in fact, most clients engage us for production and paid media together. We produce all the creative you need as part of the engagement, then deploy it through paid channels. That's the whole point of our integrated model.",
  },
  {
    question: "How much should I budget for paid media?",
    answer:
      "Ad spend varies by goals and market. Most clients invest between $2,000 and $10,000 per month in ad spend, plus our management and creative optimization fees. We'll recommend a budget during your Strategy Call based on your specific objectives.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Most campaigns start generating measurable engagement within the first 2 weeks. By month 2–3, you'll have enough data to clearly see what's working and optimize toward your highest-performing content and audiences.",
  },
  {
    question: "What kind of organizations do you work with?",
    answer:
      "We work with purpose-led organizations across manufacturing, nonprofits, health & biotech, professional services, real estate, and product brands. If your audience trusts video and you need a system behind your content, we're a fit.",
  },
];

export function PaidMediaClient() {
  return (
    <>
      <FAQSchema faqs={faqItems} />

      {/* HERO */}
      <HeroBanner
        videoSrc="/videos/hero-social.mp4"
        imageSrc="/images/paid-media-hero.jpg"
        imageAlt="Video-powered paid media campaigns"
        overlayOpacity={65}
        cursorSpotlight
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-bold uppercase tracking-wider text-[#68ccd1]"
          >
            Paid Media
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            Deploy your best content where it drives the most impact.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Great video content doesn&apos;t work if nobody sees it.
            We build and manage paid campaigns that put your cinematic content
            in front of the right audiences — on Meta, YouTube, and LinkedIn.
          </motion.p>
        </div>
      </HeroBanner>

      {/* CREDIBILITY */}
      <MetricsStrip
        metrics={[
          { value: "200+", label: "Videos Deployed" },
          { value: "$2M+", label: "Ad Spend Managed" },
          { value: "50+", label: "Organizations Served" },
          { value: "5.0", label: "Google Rating" },
        ]}
      />

      {/* CAPABILITIES */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to bottom" />
        <SectionHeader
          eyebrow="What We Do"
          title="Video-powered paid media — from production to performance."
          description="Most paid media is built on stock photos and templated graphics. Ours starts with cinematic content produced specifically for distribution."
        />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <SlideIn key={cap.title} from="bottom" delay={i * 0.06}>
              <TiltCard className="h-full rounded-2xl border border-white/5 bg-[#0a2029] p-6 hover-lift">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#68ccd1]/10 text-[#68ccd1]">
                  {cap.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{cap.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{cap.description}</p>
              </TiltCard>
            </SlideIn>
          ))}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#fafcfd" from="#0e2a35" />

      {/* WHY VIDEO-POWERED ADS WIN */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="left" width="5%" />
        <GradientOverlay from="rgba(104,204,209,0.04)" to="transparent" direction="to bottom right" />
        <SectionHeader
          variant="light"
          eyebrow="The Difference"
          title="Why video-powered ads outperform everything else."
          description="Static ads are noise. Video ads build trust, tell stories, and convert at dramatically higher rates."
        />
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <ScaleIn>
              <div className="rounded-2xl border border-red-200/30 bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                  <XCircle size={20} className="text-red-400" />
                  <h3 className="text-lg font-bold text-[#0a1a1f]">The Typical Approach</h3>
                </div>
                <ul className="space-y-3 text-sm text-[#0a1a1f]/60">
                  {[
                    "Stock photos and Canva templates as ad creative",
                    "Generic messaging that sounds like every competitor",
                    "Ad agency manages spend but doesn't produce content",
                    "No creative testing — same ads running for months",
                    "Metrics focus on clicks, not trust or pipeline",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.1}>
              <div className="rounded-2xl border border-[#68ccd1]/30 bg-white p-6 shadow-lg shadow-[#68ccd1]/5">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-[#68ccd1]" />
                  <h3 className="text-lg font-bold text-[#0a1a1f]">The Story Real Approach</h3>
                </div>
                <ul className="space-y-3 text-sm text-[#0a1a1f]/60">
                  {[
                    "Cinematic video produced specifically for ad deployment",
                    "Strategic messaging built on your brand story and audience",
                    "Production and media buying under one roof — fully integrated",
                    "Continuous creative testing with new cuts and angles",
                    "Metrics tied to trust, engagement, and measurable growth",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#68ccd1]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScaleIn>
          </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#0e2a35" from="#fafcfd" flip />

      {/* TESTIMONIALS */}
      <TestimonialSection />

      <AngleDivider variant="notch" fill="#fafcfd" from="#0e2a35" />

      {/* FAQ */}
      <Section variant="light">
        <SectionHeader
          variant="light"
          eyebrow="FAQ"
          title="Common questions about video-powered paid media."
        />
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqItems} variant="light" />
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready to deploy your content where it drives real results?"
        subhead="Book a free Strategy Call. We'll review your current paid media presence, identify the biggest opportunities, and show you how video-powered campaigns can accelerate your growth."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="See Our Work"
        secondaryHref="/case-studies"
      />
    </>
  );
}
