"use client";

import { motion } from "framer-motion";
import {
  Target, BarChart3, RefreshCcw, Eye, TrendingUp, Phone, DollarSign,
  Zap, CheckCircle, XCircle, Shield, Sparkles,
  Award, Briefcase, Building2,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { MetricsStrip } from "@/components/MetricsStrip";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { FAQSchema } from "@/components/StructuredData";
import { TestimonialSection } from "@/components/TestimonialSection";
import { MetaAdsTimeline } from "@/components/MetaAdsTimeline";
import { SlideIn, ScaleIn } from "@/components/animations";
import { HeroBanner } from "@/components/HeroBanner";
import { TiltCard } from "@/components/TiltCard";
import { AngleDivider, EdgeAccentStripe, GradientOverlay, RadialGlow } from "@/components/SectionTextures";


const capabilities = [
  {
    icon: <Target size={24} />,
    title: "Targeted Campaign Setup",
    description:
      "We don't just throw ads at everyone. We build structured campaigns that reach cold audiences, re-engage people who've visited your site, and convert warm prospects — step by step.",
  },
  {
    icon: <Eye size={24} />,
    title: "Ad Creative That Gets Tested",
    description:
      "Every campaign runs multiple versions of your ads — different headlines, images, videos, and hooks. We track which ones perform best, then scale the winners.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Real Tracking You Can Trust",
    description:
      "We install proper tracking on your website, set up call tracking, and connect everything so you can see exactly which ad brought in each lead. No more guessing.",
  },
  {
    icon: <RefreshCcw size={24} />,
    title: "Retargeting That Follows Up",
    description:
      "When someone visits your website or watches your video but doesn't take action, our retargeting ads keep your business top of mind until they're ready.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Monthly Budget Optimization",
    description:
      "Every month we review what's working and what isn't. We reallocate your budget toward the campaigns generating the best results — so nothing is wasted.",
  },
  {
    icon: <Phone size={24} />,
    title: "Phone Lead Tracking",
    description:
      "If your business gets leads by phone, we track those calls back to the exact ad that generated them — so you see the full picture of your ROI.",
  },
];

const faqs = [
  {
    question: "How much should I budget for Facebook and Instagram ads?",
    answer:
      "Most of our clients start with $1,500 to $5,000 per month in ad spend (that's separate from our management fee). The right budget depends on your area, how competitive your market is, and what you're trying to achieve. During our strategy phase, we'll give you a specific recommendation based on your numbers — not a generic guess.",
  },
  {
    question: "How quickly will I start getting leads?",
    answer:
      "Most campaigns start generating leads in the first 2-3 weeks. But the real magic happens over the first 60-90 days as we gather data, test different ads, refine who we're targeting, and build retargeting audiences. The system gets better and cheaper over time.",
  },
  {
    question: "How is this different from boosting posts on Facebook?",
    answer:
      "Boosting a post is like throwing money at a billboard with no way to track who saw it. Our campaigns are built with specific targeting, defined goals (leads, awareness, traffic), multiple ad variations, and full tracking. Every dollar has a purpose, and you can see exactly what it produced.",
  },
  {
    question: "Do you only run Facebook and Instagram ads?",
    answer:
      "Facebook and Instagram (Meta) are our primary platforms because they consistently deliver the strongest ROI for local service-based businesses. We can add Google Ads when it makes strategic sense, but we focus our expertise where results are most predictable for our clients.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We specialize in construction, home services, food and beverage, beauty and retail, and professional services companies — primarily in Connecticut and the surrounding region. If you sell a service or product to a local market and want more customers, we're a great fit.",
  },
  {
    question: "How will I know if my ads are actually working?",
    answer:
      "We install tracking on your website, set up call tracking for phone leads, and connect everything to your campaigns. In your monthly report and client portal, you'll see exactly how many leads came in, what each one cost, and which ads generated them. No vanity metrics — just real numbers.",
  },
  {
    question: "Do I need to provide photos and videos for the ads?",
    answer:
      "Nope. We produce everything in-house — video, photography, and graphic design. Every piece of creative is built specifically to perform in ads. If you already have content you like, we can use it. But most clients rely on us for everything.",
  },
  {
    question: "What happens each month? Do I get a report?",
    answer:
      "Every month we schedule a review where we walk you through performance: what we spent, how many leads came in, what each lead cost, which ads performed best, and what we're changing next month. You also have 24/7 access to real-time data in your client portal.",
  },
];

export function PaidMediaClient() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      {/* HERO */}
      <HeroBanner
        videoSrc="/videos/hero-drone.mp4"
        imageSrc="/images/growth-hero.jpg"
        imageAlt="Paid media advertising"
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
            Facebook & Instagram Advertising
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            Ads that bring in customers, not just clicks.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            We build and manage Facebook and Instagram ad campaigns designed
            to generate leads, build brand awareness, and drive real revenue
            for your business — with full tracking so you always know what
            your ads are producing.
          </motion.p>
        </div>
      </HeroBanner>

      <MetricsStrip
        metrics={[
          { value: "150+", label: "Campaigns Managed", target: 150, suffix: "+" },
          { value: "$0.32–$0.65", label: "Avg. CPC Across Clients", benchmark: "Industry Avg: $1.95" },
          { value: "90 Days", label: "Best Results Benchmark" },
          { value: "30M+", label: "Impressions Delivered", target: 30, suffix: "M+" },
        ]}
      />

      <AngleDivider variant="notch" fill="#080808" from="#65B207" />

      {/* WHAT SUCCESS LOOKS LIKE */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to bottom" />
        <SectionHeader
          eyebrow="What You Get"
          title="Results you can actually measure."
          description="We don't report on likes or impressions (unless that's the goal). We track leads, calls, cost per customer, and return on your ad spend — the numbers that actually matter to your bottom line."
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {[
            "A steady stream of inbound leads from Facebook and Instagram",
            "Cost per lead that gets cheaper as campaigns mature",
            "Every lead traced back to the exact ad that generated it",
            "Brand awareness campaigns that expand your local reach",
            "Retargeting that follows up with people who already showed interest",
            "Ad creative that's continuously tested and improved",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-xl border border-white/10 p-4 hover-lift"
            >
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-white" />
              <span className="text-base">{item}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* STRATEGY OVER SHORTCUTS */}
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="right" width="5%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <RadialGlow color="#65B207" position="90% 20%" size="600px" opacity={0.04} />
        <div className="mx-auto max-w-3xl py-6 text-center">
          <SectionHeader
            variant="light"
            title="Why most businesses waste money on ads."
            description="You've probably tried running ads before — maybe you boosted a post, maybe you hired someone on Fiverr. The problem isn't the platform. It's the approach. Here's the difference between throwing money away and building a system that works."
          />
          <div className="mt-8 grid gap-6 text-left md:grid-cols-2">
            <SlideIn from="left">
            <div className="rounded-2xl border border-white/10 bg-[#080808] p-6">
              <h3 className="mb-4 text-lg font-bold text-red-400/80">
                The Typical Approach
              </h3>
              <ul className="space-y-3 text-sm text-white/55">
                {[
                  "Boosting posts with no targeting strategy",
                  "Showing ads to everyone and hoping for the best",
                  "No way to tell if ads are actually generating revenue",
                  "Running the same ad for months without testing",
                  "Can't connect a single new customer back to an ad",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <XCircle size={16} className="mt-0.5 shrink-0 text-red-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </SlideIn>
            <SlideIn from="right">
            <div className="rounded-2xl border border-white/10 bg-[#080808] p-6 border-l-4 border-l-[#65B207]">
              <h3 className="mb-4 text-lg font-bold text-white">The Allora Approach</h3>
              <ul className="space-y-3 text-sm text-white/80">
                {[
                  "Campaigns built in layers — cold, warm, and ready-to-buy audiences",
                  "Every campaign has a clear goal: leads, brand awareness, or traffic",
                  "Tracking installed so every lead ties back to a specific ad",
                  "New ad variations tested every month to improve results",
                  "Monthly reviews so you see exactly what's working and what's next",
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

      {/* CAPABILITIES */}
      <Section variant="dark">
        <SectionHeader
          eyebrow="What's Included"
          title="Everything we build into your campaigns."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="h-full rounded-2xl border border-white/10 p-6 hover-lift border-glow"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#131E13] text-white">
                {cap.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold">{cap.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* META ADS vs GOOGLE ADS */}
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="left" width="4%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="rgba(101,178,7,0.02)" direction="to bottom" />
        <RadialGlow color="#65B207" position="50% 80%" size="800px" opacity={0.035} />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="Why We Focus on Meta"
          title="Meta Ads vs. Google Ads — and why we chose Meta."
          description="Most agencies push Google Ads because it's easier to show short-term results. We focus on Meta (Facebook & Instagram) because it builds something Google can't: demand."
        />
          {/* Core difference explanation */}
          <div className="mb-10 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/10 bg-[#131E13] p-8"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/40">Google Ads</p>
              <h3 className="mb-4 font-heading text-2xl font-bold text-white">Captures existing demand</h3>
              <p className="text-sm leading-relaxed text-white/60">
                Google only reaches people who are <span className="text-white">already searching</span> for what you offer. That&apos;s a tiny fraction of your total market. Once you stop paying, the leads stop immediately. There&apos;s no relationship built, no audience created — just a transaction.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/55">
                {[
                  "Only reaches people actively searching right now",
                  "Extremely competitive — cost-per-click rising every year",
                  "No brand building or visual storytelling",
                  "Leads stop the second you turn off the budget",
                  "You're competing on price with every other advertiser",
                  "No retargeting audiences built for future campaigns",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-white/30">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[#65B207]/30 bg-[#131E13] p-8 ring-1 ring-[#65B207]/10"
            >
              <div className="mb-2 flex items-center gap-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#65B207]">Meta Ads (Facebook & Instagram)</p>
                <span className="rounded-full bg-[#65B207]/10 px-2 py-0.5 text-[10px] font-bold text-[#65B207]">Our Focus</span>
              </div>
              <h3 className="mb-4 font-heading text-2xl font-bold text-white">Creates <span className="text-[#65B207]">new</span> demand</h3>
              <p className="text-sm leading-relaxed text-white/60">
                Meta puts your business in front of your <span className="text-white">ideal customer</span> — even before they know they need you. It builds awareness, trust, and desire through visual storytelling. And every person who engages becomes a retargetable audience for future campaigns.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {[
                  "Reaches your ideal customer before they start searching",
                  "Visual-first platform — video, photos, and stories sell",
                  "Builds massive retargeting audiences over time",
                  "Lower cost-per-lead than Google for most service businesses",
                  "Creates brand recognition that compounds month over month",
                  "Audiences you build become long-term business assets",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} className="mt-0.5 shrink-0 text-[#65B207]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* The real insight */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-[#65B207]/20 bg-[#080808] p-8 md:p-10"
          >
            <h3 className="mb-6 text-center font-heading text-xl font-bold text-white">
              The real difference in one sentence:
            </h3>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-white/70">
                Google Ads fights for the <span className="font-bold text-white">5% of your market</span> that&apos;s searching right now.
                Meta Ads puts you in front of the <span className="font-bold text-[#65B207]">other 95%</span> — and turns them into customers before your competitors even know they exist.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: <Target size={20} />,
                  title: "Precision targeting",
                  desc: "Meta lets you target by demographics, interests, behaviors, and lookalike audiences — reaching people who match your best customers exactly.",
                },
                {
                  icon: <Eye size={20} />,
                  title: "Visual storytelling",
                  desc: "You can show your work through video, carousel ads, Reels, and Stories. Google gives you a text link. Which one builds more trust?",
                },
                {
                  icon: <RefreshCcw size={20} />,
                  title: "Compounding audiences",
                  desc: "Every video view, profile visit, and engagement builds a retargeting pool. After 90 days, you have thousands of warm leads to re-engage at pennies per impression.",
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#65B207]/10 text-[#65B207]">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-white/55">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-[#131E13] p-5 text-center">
              <p className="text-sm text-white/60">
                <span className="font-bold text-white">Bottom line:</span> Google is a search engine. Meta is a <span className="font-bold text-[#65B207]">discovery engine</span>. For local service businesses that need to build awareness AND generate leads, Meta delivers better ROI, lower costs, and long-term audience assets that Google simply can&apos;t match.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" flip />

      {/* THE MATH — ROI BREAKDOWN */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to top left" />
        <RadialGlow color="#65B207" position="10% 50%" size="500px" opacity={0.03} />
        <SectionHeader
          eyebrow="The Math"
          title="Here's why paid ads pay for themselves."
          description="Let's break down real numbers. These are actual benchmarks from campaigns we manage for local service businesses."
        />
        <div className="mx-auto max-w-4xl">
          <ScaleIn>
          <div className="rounded-2xl border border-[#65B207]/20 bg-[#080808] p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#65B207]/10">
                  <DollarSign size={24} className="text-[#65B207]" />
                </div>
                <p className="font-heading text-3xl font-black text-[#65B207] md:text-4xl">$3,000</p>
                <p className="mt-1 text-sm text-white/55">Monthly Ad Spend</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#65B207]/10">
                  <Target size={24} className="text-[#65B207]" />
                </div>
                <p className="font-heading text-3xl font-black text-[#65B207] md:text-4xl">30–50</p>
                <p className="mt-1 text-sm text-white/55">Leads Per Month</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#65B207]/10">
                  <TrendingUp size={24} className="text-[#65B207]" />
                </div>
                <p className="font-heading text-3xl font-black text-[#65B207] md:text-4xl">3–5x</p>
                <p className="mt-1 text-sm text-white/55">Return on Ad Spend</p>
              </div>
            </div>
            <div className="mt-8 rounded-xl bg-[#131E13] p-6">
              <p className="text-center text-base leading-relaxed text-white/70">
                <span className="font-bold text-white">Example:</span> A contractor spending $3,000/month on ads generates 40 leads. If 10 of those close at an average project value of $5,000 — that&apos;s <span className="font-black text-[#65B207]">$50,000 in revenue</span> from a $3,000 investment. That&apos;s a <span className="font-black text-[#65B207]">16x return</span>. Even if only 5 close, that&apos;s $25,000 — still an 8x return.
              </p>
            </div>
          </div>
          </ScaleIn>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* 90-DAY TIMELINE */}
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="right" width="3%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="rgba(101,178,7,0.02)" direction="to bottom left" />
        <RadialGlow color="#65B207" position="80% 30%" size="500px" opacity={0.04} />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="What to Expect"
          title="Your first 90 days with Allora Media."
          description="Results don't happen overnight, but they happen fast. Here's the typical trajectory for new paid media clients."
        />
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#65B207]/20 md:left-8" />
            {[
              {
                period: "Week 1–2",
                icon: <Zap size={20} />,
                title: "Setup & Launch",
                detail: "We install tracking, build your campaigns, produce ad creative, and go live. You’ll see your first impressions within days.",
                color: "bg-[#65B207]/20 text-[#65B207]",
              },
              {
                period: "Week 3–4",
                icon: <Eye size={20} />,
                title: "First Leads Roll In",
                detail: "Campaigns start generating leads. We’re monitoring daily, learning what’s working, and beginning to optimize targeting and creative.",
                color: "bg-[#65B207]/30 text-[#65B207]",
              },
              {
                period: "Month 2",
                icon: <BarChart3 size={20} />,
                title: "Optimization Kicks In",
                detail: "With real data, we kill underperforming ads, double down on winners, refine audiences, and your cost per lead starts dropping.",
                color: "bg-[#65B207]/40 text-[#65B207]",
              },
              {
                period: "Month 3",
                icon: <TrendingUp size={20} />,
                title: "System Maturity",
                detail: "Retargeting audiences are built, ad costs are optimized, and you have a predictable lead flow. This is when ROI compounds.",
                color: "bg-[#65B207] text-white",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative mb-8 ml-14 md:ml-20"
              >
                <div className={`absolute -left-[2.35rem] top-1 flex h-10 w-10 items-center justify-center rounded-full ${item.color} md:-left-[3.1rem]`}>
                  {item.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#65B207]">
                  {item.period}
                </span>
                <h3 className="mt-1 font-heading text-lg font-bold text-[#0f3d15]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#0f3d15]/60">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" />

      {/* META ADS TIMELINE */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.02)" to="transparent" direction="to top" />
        <SectionHeader
          eyebrow="The Evolution of Meta Ads"
          title="How Meta advertising evolved from 2018 to today."
          description="Meta's ad platform has gone through massive changes — from the Cambridge Analytica fallout to iOS 14 to full AI automation. Here's the year-by-year story of how we got here, and why the businesses that adapted at each stage are the ones dominating now."
        />
        <MetaAdsTimeline />
      </Section>

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* ═══ INDUSTRIES WE SERVE ═══ */}
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="left" width="4%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="rgba(101,178,7,0.02)" direction="to bottom" />
        <RadialGlow color="#65B207" position="50% 80%" size="800px" opacity={0.035} />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            variant="light"
            eyebrow="Industries We Serve"
            title="Paid advertising for businesses like yours."
            description="We run Facebook and Instagram ad campaigns for companies across multiple industries throughout Connecticut and beyond."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Shield size={24} />,
                title: "Home Services & Construction",
                desc: "Lead generation campaigns that put your business in front of homeowners actively looking for contractors, roofers, electricians, and more.",
              },
              {
                icon: <Sparkles size={24} />,
                title: "Food & Beverage",
                desc: "Brand awareness and promotional campaigns that fill seats, drive takeout orders, and make your restaurant the first choice in town.",
              },
              {
                icon: <Award size={24} />,
                title: "Professional Services",
                desc: "Lead generation for law firms, financial advisors, consultants, and agencies — positioning you as the trusted local expert.",
              },
              {
                icon: <Building2 size={24} />,
                title: "Real Estate & Property",
                desc: "Listing ads, buyer lead generation, and brand awareness campaigns that keep agents and brokers top-of-mind in their market.",
              },
              {
                icon: <Briefcase size={24} />,
                title: "Retail & E-Commerce",
                desc: "Product-focused campaigns with dynamic retargeting that drive online and in-store sales with measurable ROAS.",
              },
              {
                icon: <DollarSign size={24} />,
                title: "Health & Wellness",
                desc: "Patient acquisition campaigns for dentists, chiropractors, med spas, and wellness providers that fill appointment books.",
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
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#080808] p-7 hover-lift border-glow">
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

      {/* TESTIMONIALS */}
      <TestimonialSection />

      {/* FAQ */}
      <Section variant="light">
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            variant="light"
            eyebrow="FAQ"
            title="Questions business owners ask about paid advertising."
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} variant="light" />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready to get more leads from your advertising?"
        subhead="Book a free Growth Blueprint Call. We'll review your current ads (or help you start from scratch), show you where the biggest opportunities are, and give you a clear plan."
        primaryLabel="Book a Growth Blueprint Call"
        primaryHref="/contact"
        secondaryLabel="See Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
