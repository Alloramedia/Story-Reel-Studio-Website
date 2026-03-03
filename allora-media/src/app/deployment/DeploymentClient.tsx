"use client";

import { motion } from "framer-motion";
import {
  Package,
  Share2,
  Globe,
  Megaphone,
  Mail,
  Users,
  HandCoins,
  CheckCircle,
  Layers,
  FolderOpen,
  Repeat,
  MonitorSmartphone,
  ArrowRightLeft,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { HeroBanner } from "@/components/HeroBanner";
import {
  AngleDivider,
  GradientOverlay,
  RadialGlow,
  EdgeAccentStripe,
} from "@/components/SectionTextures";
import { siteConfig } from "@/lib/constants";

/* ─── Asset Library Pillars ─── */
const assetLibraryPillars = [
  {
    icon: <Layers size={28} />,
    title: "Modular Edits",
    description:
      "Every hero video is deconstructed into modular components — 60-second narratives, 30-second proof points, 15-second hooks, and 6-second bumpers. Each module stands alone and stacks with others, so your library compounds value instead of collecting dust on a hard drive.",
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Platform-Native Formats",
    description:
      "We deliver every asset in the exact dimensions, durations, and specs each platform demands — 16:9 for YouTube and website, 9:16 for Reels and TikTok, 1:1 for LinkedIn feeds, 4:5 for Meta ads. No cropping accidents. No guesswork. Ready to upload the day you receive them.",
  },
  {
    icon: <FolderOpen size={28} />,
    title: "Organized Asset Architecture",
    description:
      "Your content library ships with a clear naming convention, folder structure, and asset manifest. Every file is labeled by campaign, format, platform, and version — so your marketing team, agency, or media buyer can find the right asset in seconds, not hours.",
  },
  {
    icon: <Repeat size={28} />,
    title: "Built for Reuse",
    description:
      "We design content with a shelf life. Interview soundbites, b-roll selects, and branded lower thirds are delivered as standalone elements your team can remix into future campaigns, presentations, and internal communications — without coming back to us every time.",
  },
];

/* ─── Funnel Integration Channels ─── */
const funnelChannels = [
  {
    icon: <Globe size={28} />,
    title: "Website & Landing Pages",
    description:
      "Hero videos on your homepage. Testimonial clips on service pages. Product demos embedded in pricing flows. We format and optimize every asset for fast-loading, autoplay-ready web deployment — with poster frames, caption files, and hosting-ready exports included.",
  },
  {
    icon: <Megaphone size={28} />,
    title: "Paid Advertising",
    description:
      "Meta, YouTube, LinkedIn, connected TV — each platform has different creative specs, hook requirements, and compliance rules. We deliver ad-ready cuts with platform-specific aspect ratios, safe zones, and duration variants so your media buyer can launch campaigns the day assets land.",
  },
  {
    icon: <Mail size={28} />,
    title: "Email & Nurture Sequences",
    description:
      "Video thumbnails with play buttons, animated GIF previews, and hosted landing page links — designed to drive click-through from email sequences without bloating file sizes. We provide the embed-ready assets and the fallback images your ESP needs.",
  },
  {
    icon: <Users size={28} />,
    title: "Recruiting & Employer Brand",
    description:
      "Culture videos, day-in-the-life clips, and leadership spotlights formatted for LinkedIn job posts, careers pages, Indeed profiles, and Glassdoor. We tailor the narrative angle and format to attract the candidates you actually want — not just anyone scrolling job boards.",
  },
  {
    icon: <HandCoins size={28} />,
    title: "Fundraising & Investor Relations",
    description:
      "Pitch deck sizzle reels, founder story videos, and impact narratives formatted for investor meetings, crowdfunding platforms, and board presentations. We deliver presentation-ready files that embed cleanly into Keynote, PowerPoint, and Google Slides.",
  },
  {
    icon: <Share2 size={28} />,
    title: "Organic Social & Community",
    description:
      "Platform-native organic content — behind-the-scenes clips, quote cards with motion, carousel video snippets, and story-format teasers. Each piece is designed for the algorithm it lives on: hook-first for TikTok, value-first for LinkedIn, visual-first for Instagram.",
  },
];

/* ─── What We Do vs. What You Do ─── */
const storyRealDoes = [
  "Produce all modular edits, cut-downs, and platform-formatted assets",
  "Build and deliver your organized asset library with naming conventions",
  "Provide caption files (SRT/VTT), poster frames, and thumbnail selects",
  "Format ad-ready cuts with platform-specific specs and safe zones",
  "Deliver email-optimized thumbnails, GIF previews, and embed assets",
  "Supply raw interview transcripts for blog, PR, and email repurposing",
  "Create a deployment guide with recommended channels, cadence, and sequencing",
  "Provide two rounds of revisions on all deployment-ready assets",
];

const clientDoes = [
  "Upload assets to your platforms (or direct your agency/team to do so)",
  "Manage ad spend, budgets, and campaign targeting in your ad accounts",
  "Schedule and publish organic social posts using your preferred tools",
  "Embed video on your website or coordinate with your web team/developer",
  "Distribute assets to internal teams — sales, HR, leadership — as needed",
  "Monitor performance and share data so we can optimize future content",
];

/* ─── Deployment Process Steps ─── */
const deploymentSteps = [
  {
    step: "01",
    title: "Asset Architecture",
    description:
      "Before a single export is rendered, we map your deployment landscape — every channel, every format, every use case. We build a content matrix that defines what gets delivered, in what format, for which platform, and at what priority. This becomes the blueprint for your asset library.",
  },
  {
    step: "02",
    title: "Modular Production & Formatting",
    description:
      "We cut, resize, re-time, and reformat your content into every variant your channels demand. This isn't a batch export — each platform edit is reviewed for pacing, safe zones, text placement, and hook structure. A 15-second Instagram Reel is a different piece of content than a 15-second YouTube pre-roll, and we treat them that way.",
  },
  {
    step: "03",
    title: "Library Build & QA",
    description:
      "Every asset is organized into your branded library — folder structure, naming conventions, format specs, and a searchable manifest. We QA every file for technical compliance: codec, bitrate, resolution, color profile, and audio levels. Nothing ships until it passes inspection.",
  },
  {
    step: "04",
    title: "Handoff & Deployment Guide",
    description:
      "You receive your complete asset library alongside a written deployment guide — where each asset goes, in what order, with what copy considerations, and on what timeline. If you have a media buyer or agency, we brief them directly. If your team handles deployment, the guide makes it self-serve.",
  },
];

/* ─── FAQs ─── */
const faqs = [
  {
    question: "What channels do you format content for?",
    answer:
      "We format for every major digital channel: YouTube (Shorts and long-form), Meta (Facebook and Instagram — feed, Stories, Reels), LinkedIn (organic and sponsored), TikTok, connected TV / OTT platforms, Google Ads (Discovery, Display, YouTube pre-roll), your website, email marketing platforms, and presentation software. If your channel isn't on this list, tell us — we've likely formatted for it before and can add it to the deliverable matrix.",
  },
  {
    question: "Are the assets ready to run as paid ads immediately?",
    answer:
      "Yes. Every ad-format deliverable is built to platform spec — correct aspect ratios, safe zones for text overlays, duration variants (6s, 15s, 30s, 60s), and compliant file sizes. We also deliver multiple hook variants for A/B testing. Your media buyer or agency can upload and launch without re-editing. If your campaigns require specific creative compliance (regulated industries, platform-specific policies), flag it during onboarding and we'll build to spec.",
  },
  {
    question: "What file formats do you deliver?",
    answer:
      "Standard deliverables include H.264 MP4 for web and social, ProRes 422 HQ for broadcast and archival, SRT and VTT caption files, PNG poster frames and thumbnail selects, and animated GIF previews for email. If you need specific codecs, bitrates, or container formats for a particular platform or internal system, we accommodate custom specs at no additional cost.",
  },
  {
    question: "How long does the deployment phase take after production wraps?",
    answer:
      "The deployment phase — modular editing, reformatting, library build, QA, and handoff — typically runs two to three weeks after final hero content is approved. The timeline scales with the number of deliverables and platform variants. A focused project with three platforms and twenty assets might wrap in ten business days. A full-scale campaign with eight channels and sixty-plus assets needs the full three-week window. We lock the timeline during pre-production so you can plan your launch.",
  },
  {
    question: "Do you handle the actual posting and ad management?",
    answer:
      "We build the content system — the assets, the formats, the library, and the deployment guide. We do not manage your ad accounts, social scheduling, or website CMS. That remains with your team, your agency, or your media buyer. This is intentional: we believe the team closest to your performance data should control distribution. That said, we brief your team directly and remain available for questions during rollout.",
  },
  {
    question: "What if we need new formats or edits six months from now?",
    answer:
      "Your asset library is designed for longevity, but channels evolve. If a new platform format emerges or you need additional cut-downs for a campaign you didn't anticipate, we offer post-project modular editing at a fraction of the original production cost — because the raw material and project files already exist. Most clients keep us on a quarterly retainer for exactly this reason.",
  },
  {
    question: "How do you handle content for regulated industries?",
    answer:
      "We work with healthcare, financial services, legal, and government organizations regularly. If your content requires compliance review, disclaimer language, or specific approval workflows before deployment, we build those checkpoints into the timeline. We also deliver assets with and without legal disclaimers so your compliance team can review both versions. Nothing launches without your sign-off.",
  },
  {
    question: "Can we get the raw project files and source footage?",
    answer:
      "Raw source footage and interview recordings are available as an add-on. Project files (Premiere, After Effects, DaVinci Resolve) are available for an additional licensing fee, as they contain our proprietary templates, LUTs, and motion graphics. Most clients don't need project files — the modular asset library gives you everything required for deployment and future remixing. If you anticipate needing source files, let us know upfront so we can include it in the scope.",
  },
];

export default function DeploymentClient() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroBanner
        videoSrc="/videos/hero-general.mp4"
        overlayOpacity={70}
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-bold uppercase text-balance text-[#68ccd1]"
          >
            Deployment
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            Content without deployment
            <br className="hidden md:block" />
            <span className="text-[#68ccd1]">is inventory, not investment.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            We build distribution-ready content systems — modular asset
            libraries, platform-native formats, and funnel-integrated
            deliverables — so every piece of video you produce reaches the right
            audience, in the right format, on the right channel.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-[#080808] shadow-lg shadow-[#68ccd1]/25 transition-all duration-300 hover:bg-[#7dd6da] hover:scale-[1.03]"
            >
              Build My Content System
            </Link>
            <Link
              href="/process"
              className="inline-flex items-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-[#68ccd1] hover:bg-[#68ccd1]/10"
            >
              See Our Full Process
            </Link>
          </motion.div>
        </div>
      </HeroBanner>

      {/* ── ASSET LIBRARY ── */}
      <Section variant="light">
        <GradientOverlay
          from="rgba(200,169,126,0.03)"
          to="transparent"
          direction="to bottom"
        />
        {/* Deployment visual */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 mx-auto max-w-5xl items-center">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/portfolio/media-place.jpg"
              alt="Media deployment and distribution"
              width={800}
              height={500}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-64 object-cover"
            >
              <source src="/videos/services/media-place.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <SectionHeader
          eyebrow="The Asset Library"
          title={
            <>
              Your content, built as a{" "}
              <span className="text-[#52b0b6]">system — not a one-off.</span>
            </>
          }
          description="Most production companies hand you a hero video and a Dropbox link. We deliver a modular content library engineered for reuse, reformatting, and long-term deployment across every channel your business touches."
          variant="light"
        />

        <div className="mx-auto max-w-5xl">
          <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerDelay={0.12}>
            {assetLibraryPillars.map((pillar, i) => (
              <StaggerItem key={i}>
                <div className="group h-full rounded-2xl border border-[#e0e0e0] bg-white p-8 shadow-md transition-all duration-300 hover:border-[#52b0b6]/40 hover:shadow-lg">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#52b0b6]/10 text-[#52b0b6] transition-transform duration-300 group-hover:scale-110">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-heading font-black text-[#1a1a1a]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#4a4a4a]">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#151515" from="#f5fafa" />

      {/* ── FUNNEL INTEGRATION ── */}
      <Section className="bg-[#151515] noise-texture">
        <EdgeAccentStripe color="#68ccd1" side="left" width="4%" />
        <RadialGlow
          color="#68ccd1"
          position="10% 30%"
          size="600px"
          opacity={0.04}
        />
        <SectionHeader
          eyebrow="Funnel Integration"
          eyebrowColor="text-[#68ccd1]"
          title={
            <>
              Content that plugs into{" "}
              <span className="text-[#68ccd1]">
                every channel that matters.
              </span>
            </>
          }
          description="Your video doesn't live in a vacuum. It needs to work inside ad campaigns, on landing pages, in email sequences, on careers portals, and in investor decks. We build for all of it."
          center={false}
        />

        <div className="mx-auto max-w-6xl">
          <StaggerContainer
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.08}
          >
            {funnelChannels.map((channel, i) => (
              <StaggerItem key={i}>
                <div className="group h-full rounded-2xl border border-white/10 bg-[#0c0c0c] p-8 transition-all duration-300 hover:border-[#68ccd1]/30 hover:bg-[#111]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#68ccd1]/10 text-[#68ccd1] transition-transform duration-300 group-hover:scale-110">
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-heading font-black text-white">
                    {channel.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/60">
                    {channel.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#151515" flip />

      {/* ── DEPLOYMENT PROCESS ── */}
      <Section variant="light">
        <GradientOverlay
          from="rgba(200,169,126,0.02)"
          to="transparent"
          direction="to bottom right"
        />
        <SectionHeader
          eyebrow="How Deployment Works"
          title="From final cut to launch-ready library in four stages."
          description="Deployment isn't an afterthought — it's an engineered phase with its own timeline, quality controls, and deliverables. Here's the sequence."
          variant="light"
        />

        <div className="mx-auto max-w-4xl space-y-12">
          {deploymentSteps.map((step, i) => (
            <SlideIn
              key={i}
              from={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.08}
            >
              <div className="grid gap-6 md:grid-cols-[100px_1fr]">
                <motion.span
                  className="text-5xl font-bold text-[#52b0b6]/20"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: i * 0.08 + 0.2 }}
                >
                  {step.step}
                </motion.span>
                <div>
                  <h3 className="text-2xl font-heading font-black text-[#1a1a1a] md:text-3xl">
                    {step.title}
                  </h3>
                  <div className="my-3 h-px w-16 bg-[#52b0b6]/30" />
                  <p className="text-lg leading-relaxed text-[#4a4a4a]">
                    {step.description}
                  </p>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#111" from="#f5fafa" />

      {/* ── CLEAR EXPECTATIONS: WHAT WE DO vs. WHAT YOU DO ── */}
      <Section className="bg-[#111] noise-texture">
        <RadialGlow
          color="#68ccd1"
          position="80% 40%"
          size="500px"
          opacity={0.04}
        />
        <SectionHeader
          eyebrow="Clear Expectations"
          eyebrowColor="text-[#68ccd1]"
          title={
            <>
              What we handle.{" "}
              <span className="text-[#68ccd1]">What you handle.</span>
            </>
          }
          description="Deployment works best when everyone knows their lane. Here's exactly where our work ends and yours begins — no ambiguity, no assumptions."
        />

        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Story Real Does */}
              <div className="rounded-2xl border border-[#68ccd1]/20 bg-[#0c0c0c] p-8 md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#68ccd1]/10 text-[#68ccd1]">
                    <Package size={22} />
                  </div>
                  <h3 className="text-xl font-heading font-black text-[#68ccd1]">
                    Story Real Delivers
                  </h3>
                </div>
                <div className="space-y-3">
                  {storyRealDoes.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="flex items-start gap-3 rounded-xl border border-[#1a4a58]/40 bg-[#0e2a35] p-4"
                    >
                      <CheckCircle
                        size={18}
                        className="mt-0.5 shrink-0 text-[#68ccd1]"
                      />
                      <span className="text-sm leading-relaxed text-white/70">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Client / Team Handles */}
              <div className="rounded-2xl border border-white/10 bg-[#0c0c0c] p-8 md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/70">
                    <ArrowRightLeft size={22} />
                  </div>
                  <h3 className="text-xl font-heading font-black text-white">
                    Your Team Handles
                  </h3>
                </div>
                <div className="space-y-3">
                  {clientDoes.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="flex items-start gap-3 rounded-xl border border-[#1a4a58]/40 bg-[#0e2a35] p-4"
                    >
                      <ShieldCheck
                        size={18}
                        className="mt-0.5 shrink-0 text-white/40"
                      />
                      <span className="text-sm leading-relaxed text-white/70">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#111" flip />

      {/* ── FAQs ── */}
      <Section variant="light">
        <GradientOverlay
          from="rgba(200,169,126,0.02)"
          to="transparent"
          direction="to bottom"
        />
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Deployment questions, answered directly."
          description="What our clients ask most about content systems, asset delivery, and the handoff process."
          variant="light"
        />

        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <FAQAccordion items={faqs} variant="light" />
          </FadeIn>
        </div>
      </Section>

      {/* ── CTA ── */}
      <CTASection
        headline="Ready to turn production into a content system?"
        subhead="Build My Content System. We'll map your channels, define your asset library, and show you exactly how deployment works for your organization — no obligation, no generic proposals."
        primaryLabel="Build My Content System"
        primaryHref="/contact"
        secondaryLabel="See Our Full Process"
        secondaryHref="/process"
      />
    </>
  );
}
