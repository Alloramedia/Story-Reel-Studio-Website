"use client";

import { motion } from "framer-motion";
import {
  Share2, Calendar, MessageSquare, TrendingUp,
  CheckCircle, XCircle, Eye, BarChart3,
  Film, Layers, Zap,
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

const services = [
  {
    icon: <Film size={24} />,
    title: "Video-First Content",
    description:
      "Every post starts with professional video produced by Story Real Studios — not stock photos or templated graphics. Real content that builds trust and differentiates your brand.",
  },
  {
    icon: <Calendar size={24} />,
    title: "Strategic Content Calendar",
    description:
      "We plan and schedule your content around strategic themes, campaigns, and business objectives — not just 'posting to post.' Every piece has a purpose.",
  },
  {
    icon: <Layers size={24} />,
    title: "Multi-Platform Distribution",
    description:
      "Your content is formatted and optimized for each platform — Instagram, Facebook, YouTube, LinkedIn, TikTok — with platform-specific strategy for each.",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Community Management",
    description:
      "We handle comments, messages, and engagement on your behalf — maintaining your brand voice and building relationships with your audience.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Performance Reporting",
    description:
      "Monthly reporting on reach, engagement, follower growth, and content performance — with clear insights on what's working and what to produce next.",
  },
  {
    icon: <Zap size={24} />,
    title: "Content Repurposing",
    description:
      "We break each production down into dozens of social-native clips, stills, stories, and carousels — maximizing the value of every shoot day.",
  },
];

const faqItems = [
  {
    question: "What makes Story Real's organic social different?",
    answer:
      "Most social media managers work with whatever content you give them. We produce the content AND manage your channels — so every post features cinematic video and professional photography produced specifically for your brand. The production and deployment are fully integrated.",
  },
  {
    question: "Which platforms do you manage?",
    answer:
      "We manage Instagram, Facebook, YouTube, LinkedIn, and TikTok. We'll recommend the right mix of platforms based on where your audience actually engages — you don't need to be everywhere, just in the right places.",
  },
  {
    question: "How often will you post?",
    answer:
      "Posting frequency depends on your engagement tier and platform strategy. Most clients see 3–5 posts per week across their primary platforms. We focus on quality and consistency over volume.",
  },
  {
    question: "Do I need to provide content?",
    answer:
      "No — we produce everything. That's the whole point. Our production team creates all the video, photography, and graphics used in your organic social. You just approve the content calendar and we handle the rest.",
  },
  {
    question: "Can you work with our internal team?",
    answer:
      "Absolutely. Many clients have internal marketing teams who handle day-to-day operations. We can serve as your embedded production partner — providing the content library and creative direction while your team manages posting and engagement.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track reach, engagement rate, follower growth, website traffic from social, and content performance by type. Monthly reports give you clear visibility into what's working and guide our production planning for the next cycle.",
  },
];

export function OrganicSocialClient() {
  return (
    <>
      <FAQSchema faqs={faqItems} />

      {/* HERO */}
      <HeroBanner
        videoSrc="/videos/hero-social.mp4"
        imageSrc="/images/organic-social-hero.jpg"
        imageAlt="Organic social content deployment"
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
            Organic Social
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            Your content, deployed everywhere your audience lives.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Great video content shouldn&apos;t sit on a hard drive.
            We manage your organic social presence — deploying cinematic
            content across every platform with strategy, consistency, and purpose.
          </motion.p>
        </div>
      </HeroBanner>

      {/* CREDIBILITY */}
      <MetricsStrip
        metrics={[
          { value: "1,000+", label: "Posts Published" },
          { value: "6+", label: "Platforms Managed" },
          { value: "50+", label: "Organizations Served" },
          { value: "5.0", label: "Google Rating" },
        ]}
      />

      {/* WHAT WE DO */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to bottom" />
        <SectionHeader
          eyebrow="What We Do"
          title="Organic social that starts with professional production."
          description="We don't just manage your accounts — we produce the content that fills them. That's what makes Story Real different."
        />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <SlideIn key={item.title} from="bottom" delay={i * 0.06}>
              <TiltCard className="h-full rounded-2xl border border-white/5 bg-[#151515] p-6 hover-lift">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#68ccd1]/10 text-[#68ccd1]">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
              </TiltCard>
            </SlideIn>
          ))}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#080808" />

      {/* COMPARISON */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="left" width="5%" />
        <SectionHeader
          variant="light"
          eyebrow="The Difference"
          title="What separates managed social from real content deployment."
        />
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <ScaleIn>
              <div className="rounded-2xl border border-red-200/30 bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                  <XCircle size={20} className="text-red-400" />
                  <p className="text-lg font-bold text-[#1a1a1a]">Without Professional Content</p>
                </div>
                <ul className="space-y-3 text-sm text-[#1a1a1a]/60">
                  {[
                    "iPhone photos and quick selfies as your brand presence",
                    "Posting inconsistently with no strategic calendar",
                    "Chasing trends and memes instead of building trust",
                    "Same templated graphics your competitors use",
                    "No connection between social and overall brand strategy",
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
                  <p className="text-lg font-bold text-[#1a1a1a]">With Story Real Managing Social</p>
                </div>
                <ul className="space-y-3 text-sm text-[#1a1a1a]/60">
                  {[
                    "Cinematic video and professional photography on every post",
                    "Strategic content calendar aligned with business objectives",
                    "Brand-building content that differentiates you from competitors",
                    "Platform-specific strategy with consistent publishing",
                    "Organic social fully connected to production and paid deployment",
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

      <AngleDivider variant="notch" fill="#080808" from="#f5fafa" flip />

      {/* TESTIMONIALS */}
      <TestimonialSection />

      <AngleDivider variant="notch" fill="#f5fafa" from="#080808" />

      {/* FAQ */}
      <Section variant="light">
        <SectionHeader
          variant="light"
          eyebrow="FAQ"
          title="Common questions about organic social deployment."
        />
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqItems} variant="light" />
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready to turn your content into a consistent brand presence?"
        subhead="Book a free Strategy Call. We'll audit your current social presence, show you what's possible with professional content, and build a plan to deploy it everywhere your audience lives."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="See Our Work"
        secondaryHref="/case-studies"
      />
    </>
  );
}
