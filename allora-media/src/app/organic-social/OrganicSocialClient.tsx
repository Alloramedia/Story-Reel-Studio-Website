"use client";

import { motion } from "framer-motion";
import { Share2, Users, Eye, BarChart3, MessageCircle, Layers, ArrowRight, RefreshCcw, AlertTriangle, CheckCircle, Smartphone, Utensils, Wrench, Briefcase } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { FAQSchema } from "@/components/StructuredData";
import { TestimonialSection } from "@/components/TestimonialSection";
import { SocialMediaTimeline } from "@/components/SocialMediaTimeline";
import { credibilityStats } from "@/lib/constants";
import { TiltCard } from "@/components/TiltCard";
import { SlideIn } from "@/components/animations";
import { HeroBanner } from "@/components/HeroBanner";
import { AngleDivider, EdgeAccentStripe, GradientOverlay, RadialGlow } from "@/components/SectionTextures";

const whatWeManage = [
  {
    icon: <Layers size={24} />,
    title: "Content Strategy & Planning",
    description:
      "We build a monthly content calendar around themes that actually matter — showcasing your work, sharing client wins, behind-the-scenes, and community content. No random filler posts.",
  },
  {
    icon: <Share2 size={24} />,
    title: "Platform Management",
    description:
      "We manage your Instagram, Facebook, and LinkedIn presence with content tailored for each platform — so your brand shows up consistently where your customers are looking.",
  },
  {
    icon: <Eye size={24} />,
    title: "On-Brand Content",
    description:
      "Every post matches your brand voice, look, and positioning. When a potential customer checks your profile, they see a professional, active business — not a page that hasn't posted in three months.",
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Comment & Message Management",
    description:
      "We can handle responding to comments, managing DMs, and engaging with reviews so your business stays responsive without you checking your phone every 10 minutes.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Monthly Performance Reports",
    description:
      "Each month you'll see how your accounts are growing — reach, engagement, audience demographics, and which types of content are performing best.",
  },
  {
    icon: <Users size={24} />,
    title: "Ad Audience Building",
    description:
      "Every person who visits your profile, watches a video, or engages with a post becomes part of your retargeting audience for paid campaigns. Organic activity directly fuels your ad performance.",
  },
];

const faqs = [
  {
    question: "Can social media management alone grow my business?",
    answer:
      "Organic social builds brand awareness and trust over time, but it's slower and less predictable than paid advertising for generating leads. We recommend it as a supporting system alongside paid campaigns — it reinforces your credibility, builds retargeting audiences, and makes your ads work harder. But on its own, it's not a lead generation strategy.",
  },
  {
    question: "What social media platforms do you manage?",
    answer:
      "We manage Instagram, Facebook, and LinkedIn — the platforms where your customers are most likely spending time. We don't spread thin across every platform just to say we're everywhere. We focus where it counts.",
  },
  {
    question: "How do you measure organic social performance?",
    answer:
      "We track the metrics that actually indicate growth: engagement rate, reach trends, audience growth, profile visits, saves and shares, and which types of content perform best. We focus on real momentum — not just counting likes.",
  },
  {
    question: "Do I need to create content for you to post?",
    answer:
      "No. We create everything or pull from your existing media production library. If you're also working with us on video and photography, your organic content uses the same high-quality assets that run in your paid campaigns.",
  },
  {
    question: "How does organic social help my paid advertising?",
    answer:
      "When someone sees your ad, the first thing they do is check your social media profile. A strong, active organic presence confirms you're a real, professional business and increases conversion rates. Plus, every profile visitor and video viewer becomes part of your retargeting audience for future ads.",
  },
  {
    question: "How is this different from hiring a freelance social media manager?",
    answer:
      "Most freelancers focus on posting consistently and growing follower counts. We build a strategic presence that reinforces your brand positioning, supports your ad campaigns, and builds audiences you can retarget. Everything we post has a purpose beyond just staying active.",
  },
];

export function OrganicSocialClient() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      {/* HERO */}
      <HeroBanner
        videoSrc="/videos/hero-social.mp4"
        imageSrc="/images/organic-hero.jpg"
        imageAlt="Organic social media management"
        overlayOpacity={65}
        cursorSpotlight
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-semibold uppercase text-balance text-[#65B207]"
          >
            Social Media Management
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            Your social media, handled by professionals.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            We manage your Instagram, Facebook, and LinkedIn so your business
            always looks active, professional, and credible — while building
            audiences that make your paid campaigns work even harder.
          </motion.p>
        </div>
      </HeroBanner>

      {/* ═══ CREDIBILITY BAR ═══ */}
      <section className="relative py-5 lg:py-6 bg-[#65B207]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: credibilityStats.businessesServed, label: "Businesses Served" },
              { value: "5+", label: "Platforms Managed" },
              { value: credibilityStats.googleRating, label: "Google Rating" },
              { value: "1000+", label: "Posts Published" },
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

      <AngleDivider variant="notch" fill="#080808" from="#65B207" />

      {/* CLEAR EXPECTATIONS */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to bottom" />
        <SectionHeader
          eyebrow="Real Talk"
          title="Social media works best when it's part of a bigger plan."
          description="On its own, organic social won't fill your pipeline overnight. We're honest about that. But when paired with paid advertising and great content, it serves a critical role: it builds the trust and visibility that makes your entire marketing system more effective."
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <SlideIn from="left">
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="mb-3 text-lg font-bold">What organic social does well</h3>
            <ul className="space-y-2 text-sm text-white/60">
              {[
                "Builds brand trust and familiarity with your audience over time",
                "Grows retargeting audiences that improve your ad performance",
                "Provides social proof when prospects check your profiles",
                "Keeps your business visible between paid campaign touchpoints",
                "Shows potential customers you're active, real, and professional",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-green-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </SlideIn>
          <SlideIn from="right">
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="mb-3 text-lg font-bold text-white/60">
              What organic won&apos;t do on its own
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              {[
                "Replace paid advertising for generating consistent leads",
                "Produce predictable, measurable revenue by itself",
                "Guarantee your posts will go viral",
                "Work as a standalone growth strategy for most businesses",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </SlideIn>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* WHY SOCIAL MEDIA IS KING */}
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="right" width="5%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <RadialGlow color="#65B207" position="90% 20%" size="600px" opacity={0.04} />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="The New Reality"
          title="Social media is king. Here's why that matters for your business."
          description="Your customers spend more time on social media than any other activity online. The businesses that show up consistently on social aren't just staying relevant — they're dominating their markets."
        />
          {/* Key stats */}
          <div className="mb-10 grid gap-4 md:grid-cols-3">
            {[
              {
                stat: "5+ hours/day",
                label: "Average time spent on social media per person (eMarketer)",
                detail: "That's more than TV, radio, newspapers, and email combined. Your audience is HERE.",
              },
              {
                stat: "76%",
                label: "Of consumers have purchased something they saw on social media (GWI)",
                detail: "Social media isn't just awareness — it directly drives buying decisions every single day.",
              },
              {
                stat: "90%",
                label: "Of Instagram users follow at least one business (Meta)",
                detail: "People WANT to connect with businesses on social. They're actively looking for you.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-[#65B207]/20 bg-[#131E13] p-6 text-center hover-lift"
              >
                <p className="font-heading text-3xl font-black text-[#65B207]">{item.stat}</p>
                <p className="mt-2 text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/40">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Why social wins */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/10 bg-[#080808] p-8 md:p-10"
          >
            <h3 className="mb-6 text-center font-heading text-xl font-bold text-white">
              Social media replaced every marketing channel your parents used
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  old: "Yellow Pages",
                  now: "Instagram & Facebook",
                  desc: "When someone needs a service, they don't flip through a phone book — they search social media, check your profile, and read reviews before ever calling.",
                },
                {
                  old: "Word of mouth",
                  now: "Social proof & shares",
                  desc: "Recommendations still matter — but now they happen publicly through tags, shares, reviews, and testimonials that reach hundreds of people instantly.",
                },
                {
                  old: "TV commercials",
                  now: "Reels & Stories",
                  desc: "Short-form video on social media gets more views per dollar than any TV buy. And unlike TV, you can target exactly who sees it.",
                },
                {
                  old: "Billboard ads",
                  now: "Consistent posting",
                  desc: "A billboard reaches random drivers. Social media reaches your exact target audience, tracks engagement, and costs a fraction of traditional advertising.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl bg-[#131E13] p-4">
                  <div className="shrink-0">
                    <p className="text-xs font-bold text-red-400/60 line-through">{item.old}</p>
                    <ArrowRight size={12} className="my-1 text-[#65B207]" />
                    <p className="text-xs font-bold text-[#65B207]">{item.now}</p>
                  </div>
                  <p className="text-xs leading-relaxed text-white/55">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="rounded-xl bg-[#131E13] p-5 text-sm text-white/60">
                <span className="font-bold text-[#65B207]">The businesses dominating social media today</span> are the same ones dominating their industries. It&apos;s not a coincidence — it&apos;s the single most powerful tool for building brand awareness, trust, and customer loyalty in 2026.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* THE FLYWHEEL EFFECT */}
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="left" width="4%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="rgba(101,178,7,0.02)" direction="to bottom" />
        <RadialGlow color="#65B207" position="50% 80%" size="800px" opacity={0.035} />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="The Growth Flywheel"
          title="Organic + Paid = Unstoppable."
          description="Your organic social presence doesn't just look nice — it directly makes your paid campaigns more effective. Here's how the flywheel works."
        />
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                icon: <Share2 size={20} />,
                title: "Consistent Posting",
                desc: "Professional content goes out regularly, building brand awareness and keeping your business visible.",
              },
              {
                step: "02",
                icon: <Users size={20} />,
                title: "Audience Grows",
                desc: "Profile visitors, video viewers, and engaged users become retargeting audiences for your paid campaigns.",
              },
              {
                step: "03",
                icon: <Eye size={20} />,
                title: "Ads Convert Better",
                desc: "When someone sees your ad and checks your profile, they see an active, credible business. Conversion rates go up.",
              },
              {
                step: "04",
                icon: <RefreshCcw size={20} />,
                title: "Cycle Compounds",
                desc: "More conversions = more customers = more testimonials = more content = even better organic presence. It feeds itself.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative h-full rounded-2xl border border-white/10 bg-[#080808] p-6 text-center hover-lift border-glow"
              >
                <span className="mb-2 block font-heading text-3xl font-black text-[#65B207]/20">{item.step}</span>
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#65B207]/10 text-[#65B207]">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/55">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" flip />

      {/* PROFILE AUDIT REALITY CHECK */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.02)" to="transparent" direction="to top" />
        <SectionHeader
          eyebrow="What Prospects Actually Do"
          title="Someone sees your ad. What happens next?"
          description="Before anyone calls you, they check your social media. Here's the moment of truth that determines whether they become a customer or move on."
        />
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-[#080808] p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#65B207]/10">
                <Smartphone size={24} className="text-[#65B207]" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-white">A potential customer sees your ad&hellip;</p>
                <p className="text-sm text-white/55">They&apos;re interested. So they tap your business name.</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <SlideIn from="left">
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <p className="mb-3 text-sm font-bold text-red-400">Without Allora Managing Social:</p>
                <ul className="space-y-2 text-sm text-white/55">
                  {[
                    "Last post was 3 months ago",
                    "Blurry photos and inconsistent branding",
                    "No reviews, no testimonials, no social proof",
                    "Prospect thinks: \"Are they even still in business?\"",
                    "They close the app and call your competitor instead",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <AlertTriangle size={14} className="mt-0.5 shrink-0 text-red-400/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              </SlideIn>
              <SlideIn from="right">
              <div className="rounded-xl border border-[#65B207]/20 bg-[#65B207]/5 p-5">
                <p className="mb-3 text-sm font-bold text-[#65B207]">With Allora Managing Social:</p>
                <ul className="space-y-2 text-sm text-white/70">
                  {[
                    "Professional, recent posts showing active business",
                    "High-quality photos and videos of real work",
                    "Client testimonials and project showcases",
                    "Prospect thinks: \"These guys are legit.\"",
                    "They tap the call button or fill out your form",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle size={14} className="mt-0.5 shrink-0 text-[#65B207]" />
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

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* WHAT WE MANAGE */}
      <Section variant="light">
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="What's Included"
          title="Everything we handle for your social media."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whatWeManage.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="h-full rounded-2xl bg-[#131E13] p-6 shadow-sm hover-lift border border-white/10"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#080808] text-white">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" flip />

      {/* ═══ INDUSTRIES WE SERVE ═══ */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to bottom" />
        <RadialGlow color="#65B207" position="80% 30%" size="500px" opacity={0.04} />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            eyebrow="Industries We Serve"
            title="Social media management for businesses like yours."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Wrench size={24} />,
                title: "Home Services & Construction",
                desc: "Showcase your projects, build trust with homeowners, and stay top of mind in your local market with consistent, professional social media content.",
              },
              {
                icon: <Utensils size={24} />,
                title: "Food & Beverage",
                desc: "Mouth-watering food photography, event promotions, and community engagement that drives foot traffic and builds a loyal following.",
              },
              {
                icon: <Briefcase size={24} />,
                title: "Professional Services",
                desc: "Position yourself as the go-to expert with thought leadership content, client spotlights, and behind-the-scenes posts that humanize your brand.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="h-full"
              >
                <TiltCard tiltIntensity={5} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#080808] p-7 hover-lift border-l-4 border-l-[#65B207]">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#65B207]/10 text-[#65B207]">
                      {item.icon}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                      {item.desc}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* SOCIAL MEDIA TIMELINE */}
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="left" width="4%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="rgba(101,178,7,0.02)" direction="to bottom" />
        <SectionHeader
          variant="light"
          eyebrow="The Evolution"
          title="How social media evolved from 2018 to today."
          description="Social media changed everything about how businesses reach customers. Here's a year-by-year look at the biggest shifts \u2014 and why the businesses that adapted early are the ones winning now."
        />
        <SocialMediaTimeline />
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialSection />

      <AngleDivider variant="notch" fill="#d4e4c1" from="#0d0d0d" />

      {/* FAQ */}
      <Section variant="light">
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            variant="light"
            eyebrow="FAQ"
            title="Questions about social media management."
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} variant="light" />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Want social media that actually works with your marketing?"
        subhead="Let's talk about how social media management fits into your overall growth plan. Most of our clients pair it with paid advertising for the best results."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="See Our Paid Media Service"
        secondaryHref="/paid-media"
      />
    </>
  );
}
