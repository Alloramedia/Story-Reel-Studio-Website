"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video, Camera, Clapperboard, Plane, Palette, Users, ArrowRight,
  CheckCircle, XCircle, Shield, Sparkles, Award, Film, Zap, DollarSign,
  Clock, UserCheck, UserX,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { credibilityStats } from "@/lib/constants";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { FAQSchema } from "@/components/StructuredData";
import { TestimonialSection } from "@/components/TestimonialSection";
import { SlideIn } from "@/components/animations";
import { HeroBanner } from "@/components/HeroBanner";
import { TiltCard } from "@/components/TiltCard";
import { AngleDivider, EdgeAccentStripe, GradientOverlay, RadialGlow } from "@/components/SectionTextures";

/* ── Content Multiplier shoot-duration data ── */
const shootTiers = [
  {
    label: "2-Hour Shoot",
    sublabel: "Quick & focused",
    hours: 2,
    deliverables: {
      engaged: [
        { count: "1–2", label: "Full-length brand or testimonial videos" },
        { count: "6–12", label: "Short-form clips for social & ads" },
        { count: "30–60", label: "Retouched, color-graded photographs" },
        { count: "3–5", label: "Ad graphics & carousel cards" },
        { count: "2–3", label: "Hero banners for web & email" },
        { count: "10–20", label: "Social feed posts" },
      ],
      limited: [
        { count: "1", label: "Full-length brand or b-roll video" },
        { count: "4–8", label: "Short-form clips for social & ads" },
        { count: "20–40", label: "Retouched, color-graded photographs" },
        { count: "2–3", label: "Ad graphics & carousel cards" },
        { count: "1–2", label: "Hero banners for web & email" },
        { count: "6–12", label: "Social feed posts" },
      ],
    },
  },
  {
    label: "Half Day",
    sublabel: "Most popular",
    hours: 3.5,
    deliverables: {
      engaged: [
        { count: "2–4", label: "Full-length brand or testimonial videos" },
        { count: "10–20", label: "Short-form clips for social & ads" },
        { count: "50–100+", label: "Retouched, color-graded photographs" },
        { count: "5–8", label: "Ad graphics & carousel cards" },
        { count: "3–5", label: "Hero banners for web & email" },
        { count: "15–30", label: "Social feed posts" },
      ],
      limited: [
        { count: "1–2", label: "Full-length brand or b-roll videos" },
        { count: "6–12", label: "Short-form clips for social & ads" },
        { count: "30–60", label: "Retouched, color-graded photographs" },
        { count: "3–5", label: "Ad graphics & carousel cards" },
        { count: "2–3", label: "Hero banners for web & email" },
        { count: "10–20", label: "Social feed posts" },
      ],
    },
  },
  {
    label: "Full Day",
    sublabel: "Maximum output",
    hours: 6,
    deliverables: {
      engaged: [
        { count: "4–6", label: "Full-length brand or testimonial videos" },
        { count: "15–30", label: "Short-form clips for social & ads" },
        { count: "80–150+", label: "Retouched, color-graded photographs" },
        { count: "8–12", label: "Ad graphics & carousel cards" },
        { count: "4–6", label: "Hero banners for web & email" },
        { count: "20–40", label: "Social feed posts" },
      ],
      limited: [
        { count: "2–4", label: "Full-length brand or b-roll videos" },
        { count: "10–18", label: "Short-form clips for social & ads" },
        { count: "50–100", label: "Retouched, color-graded photographs" },
        { count: "5–8", label: "Ad graphics & carousel cards" },
        { count: "3–5", label: "Hero banners for web & email" },
        { count: "15–30", label: "Social feed posts" },
      ],
    },
  },
];

const deliverables = [
  {
    icon: <Video size={24} />,
    title: "Brand & Testimonial Videos",
    description:
      "We pair cinematic video with on-brand photography and graphics to tell your full story — from raw testimonials to polished brand narratives ready for ads, website, and social.",
  },
  {
    icon: <Clapperboard size={24} />,
    title: "TV Commercials",
    description:
      "End-to-end commercial production — from concept and script to shoot day and final delivery. We handle talent direction, set design, and post-production so your spot is broadcast-ready.",
  },
  {
    icon: <Plane size={24} />,
    title: "Drone & Aerial Content",
    description:
      "FAA-licensed aerial photography and videography that captures perspectives impossible from the ground — construction milestones, property overviews, large-scale events, and cinematic brand intros.",
  },
  {
    icon: <Camera size={24} />,
    title: "Professional Photography",
    description:
      "Team headshots, facility photos, product shots, and event coverage — all shot with digital use in mind so they look incredible on your website, in ads, and across social media.",
  },
  {
    icon: <Palette size={24} />,
    title: "Graphic Design",
    description:
      "Ad graphics, social media content, presentation decks, print materials, and brand collateral — designed to be clean, consistent, and built for results.",
  },
  {
    icon: <Users size={24} />,
    title: "Project Documentation",
    description:
      "Photo and video documentation from groundbreaking to ribbon-cutting. We compile progress shots, time-lapses, team interviews, and final walkthroughs into a visual portfolio that wins future bids.",
  },
];

const faqs = [
  {
    question: "Do I need to bundle production with ad campaigns?",
    answer:
      "Not at all. Every service — video, photography, and graphic design — is available à la carte. Many clients start with a single shoot day and add on from there. That said, bundling production with paid media amplifies ROI because every asset is purpose-built for the campaigns it runs in.",
  },
  {
    question: "What does the production process look like?",
    answer:
      "Discovery call → creative brief → shot list and storyboard → scheduled shoot day(s) → editing and post-production → final delivery in every format you need. Throughout the process you'll have a dedicated producer keeping you updated and handling all logistics.",
  },
  {
    question: "How long does it take to get my finished content?",
    answer:
      "Most single-day shoots are wrapped and delivered within 2–3 weeks. Multi-day or multi-location projects typically take 4–6 weeks. Rush turnarounds are available when time is tight — just let us know at kickoff.",
  },
  {
    question: "Do you come to us or do we come to you?",
    answer:
      "We come to you. Our crew arrives with cameras, lighting rigs, lav and boom mics, backdrops, and everything else needed. For product photography or headshots that call for a controlled setting, we can arrange studio time.",
  },
  {
    question: "What file formats will I receive?",
    answer:
      "You receive every deliverable in multiple aspect ratios — landscape, portrait, and square — plus full-resolution masters. Photos come color-corrected and retouched. Videos include captions and platform-optimized exports. Design files are delivered in editable and flat formats.",
  },
  {
    question: "Can you create content specifically designed for Facebook and Instagram ads?",
    answer:
      "Absolutely — it's what we're known for. Every photo, video, and graphic we create can be tailored for paid media: thumb-stopping hooks, multiple creative variations for split-testing, and automatic exports sized for every Meta and Google Ads placement.",
  },
];

/* ── Content Multiplier Slider Component ── */
function ContentMultiplierSlider() {
  const [tierIndex, setTierIndex] = useState(1); // default to half-day
  const [involvement, setInvolvement] = useState<"engaged" | "limited">("engaged");
  const tier = shootTiers[tierIndex];
  const items = tier.deliverables[involvement];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-2xl border border-[#65B207]/20 bg-[#080808] p-8 md:p-10">

        {/* Shoot Duration Slider */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-[#65B207]">
            <Clock size={16} />
            Shoot Duration
          </div>

          {/* Tier buttons */}
          <div className="mx-auto mb-4 grid max-w-lg grid-cols-3 gap-2">
            {shootTiers.map((t, i) => (
              <button
                key={i}
                onClick={() => setTierIndex(i)}
                className={`rounded-xl px-4 py-3 text-center transition-all duration-300 ${
                  tierIndex === i
                    ? "bg-[#65B207] text-white shadow-lg shadow-[#65B207]/25 scale-[1.03]"
                    : "bg-[#131E13] text-white/50 hover:bg-[#1a2a1a] hover:text-white/70"
                }`}
              >
                <span className="block text-sm font-bold">{t.label}</span>
                <span className="block text-xs opacity-70">{t.sublabel}</span>
              </button>
            ))}
          </div>

          {/* Slider track */}
          <div className="mx-auto max-w-lg px-4">
            <input
              type="range"
              min={0}
              max={2}
              step={1}
              value={tierIndex}
              onChange={(e) => setTierIndex(Number(e.target.value))}
              className="shoot-slider w-full cursor-pointer"
            />
            <div className="mt-1 flex justify-between text-xs text-white/50">
              <span>2 hrs</span>
              <span>3.5 hrs</span>
              <span>6 hrs</span>
            </div>
          </div>
        </div>

        {/* Client Involvement Toggle */}
        <div className="mb-8">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-white/40">
            Client Involvement
          </div>
          <div className="mx-auto flex max-w-md overflow-hidden rounded-xl border border-white/10">
            <button
              onClick={() => setInvolvement("engaged")}
              className={`flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                involvement === "engaged"
                  ? "bg-[#65B207]/15 text-[#65B207] border-r border-[#65B207]/30"
                  : "bg-transparent text-white/40 hover:text-white/60 border-r border-white/10"
              }`}
            >
              <UserCheck size={16} />
              <span>Engaged &amp; Open</span>
            </button>
            <button
              onClick={() => setInvolvement("limited")}
              className={`flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                involvement === "limited"
                  ? "bg-white/10 text-white/80"
                  : "bg-transparent text-white/40 hover:text-white/60"
              }`}
            >
              <UserX size={16} />
              <span>Limited Involvement</span>
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-white/50">
            {involvement === "engaged"
              ? "Client is on-set, open to direction, available for interviews & personality-driven content."
              : "Client prefers hands-off approach — we focus on b-roll, product/facility shots, and environmental content."}
          </p>
        </div>

        {/* Deliverables Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${tierIndex}-${involvement}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className="flex items-center gap-4 rounded-xl bg-[#131E13] p-4"
              >
                <span className="shrink-0 whitespace-nowrap font-heading text-2xl font-black text-[#65B207]">{item.count}</span>
                <span className="text-sm text-white/60">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Involvement note */}
        <div className="mt-6 rounded-xl bg-[#131E13] p-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#65B207]/10">
              {involvement === "engaged" ? (
                <UserCheck size={12} className="text-[#65B207]" />
              ) : (
                <UserX size={12} className="text-white/40" />
              )}
            </div>
            <p className="text-xs leading-relaxed text-white/50">
              {involvement === "engaged" ? (
                <>
                  <span className="font-bold text-[#65B207]">Maximum output.</span>{" "}
                  When clients are receptive and open to our creative direction — willing to do on-camera interviews, personality-driven clips, and behind-the-scenes moments — we can capture significantly more high-value content like testimonial videos, day-in-the-life stories, and authentic brand moments that connect with audiences.
                </>
              ) : (
                <>
                  <span className="font-bold text-white/70">Solid output, fewer personal assets.</span>{" "}
                  When clients prefer a hands-off approach or aren&apos;t comfortable on camera, we shift focus to b-roll, facility shots, project documentation, product photography, and environmental content. The work is still professional and high-quality — but personality-driven pieces like testimonials and talking-head videos aren&apos;t possible without client participation.
                </>
              )}
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-white/50">
          Deliverable counts are realistic ranges based on our actual production experience. Final output depends on shoot conditions, number of setups, and content complexity.
        </p>
      </div>
    </div>
  );
}

export function MediaProductionClient() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      {/* HERO */}
      <HeroBanner
        videoSrc="/videos/hero-general.mp4"
        imageSrc="/images/production-hero.jpg"
        imageAlt="Professional video and photo production"
        overlayOpacity={60}
        cursorSpotlight
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-semibold uppercase text-balance text-[#65B207]"
          >
            Video & Photo Production in Connecticut
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            Professional content that makes your business look world-class.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            From professional video production and commercial photography to
            drone content and graphic design — we produce everything your
            business needs to stand out, build trust, and convert more
            customers.
          </motion.p>
        </div>
      </HeroBanner>

      {/* ═══ CREDIBILITY BAR ═══ */}
      <section className="relative py-5 lg:py-6 bg-[#65B207]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: "500+", label: "Assets Produced" },
              { value: credibilityStats.businessesServed, label: "Businesses Served" },
              { value: credibilityStats.googleRating, label: "Google Rating" },
              { value: "30M+", label: "Ad Impressions Delivered" },
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

      {/* WHY STRATEGIC CREATIVE MATTERS */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to bottom" />
        <SectionHeader
          eyebrow="Why It Matters"
          title="Great content pays for itself."
          description="People trust what they can see. A customer watching a real testimonial from someone like them, browsing professional photos of your work, or seeing your team in action — that's what makes someone pick up the phone. And when that content runs in your ads, it outperforms stock images every single time."
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {[
            {
              title: "People trust what they see",
              text: "Video testimonials and project photos let potential customers see your real work and hear from real clients — before they ever talk to you.",
            },
            {
              title: "Your ads perform better",
              text: "Authentic, high-quality content built for ads gets more clicks, more leads, and lower costs than stock photos or generic graphics.",
            },
            {
              title: "Your brand gets stronger",
              text: "A library of professional media makes your business look like the established, trustworthy choice across your website, social media, ads, and proposals.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="h-full rounded-2xl border border-white/10 p-6 text-center hover-lift"
            >
              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* CONTENT IS KING */}
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="right" width="5%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <RadialGlow color="#65B207" position="90% 20%" size="600px" opacity={0.04} />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="The Content Era"
          title="Content is king. And it's never been more true."
          description="In 2026, content isn't just part of marketing — it IS marketing. The businesses producing the best content are capturing the most attention, building the most trust, and winning the most customers. Period."
        />
          {/* Stats row */}
          <div className="mb-10 grid gap-4 md:grid-cols-4">
            {[
              { stat: "32%", label: "Higher revenue for brands with consistent visual content (Lucidpress)" },
              { stat: "65%", label: "Of people are visual learners — imagery drives retention (SSPI)" },
              { stat: "7×", label: "More engagement on posts with professional photos (MDG Advertising)" },
              { stat: "80%", label: "Of marketers say custom visuals outperform stock assets (Venngage)" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-xl border border-[#65B207]/20 bg-[#131E13] p-5 text-center hover-lift"
              >
                <p className="font-heading text-3xl font-black text-[#65B207]">{item.stat}</p>
                <p className="mt-1 text-xs text-white/55">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Why content dominates */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/10 bg-[#131E13] p-8 md:p-10"
          >
            <h3 className="mb-6 text-center font-heading text-xl font-bold text-white">
              Why content beats every other marketing channel
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "It works while you sleep",
                  desc: "A billboard costs $5,000/month and reaches people for 30 days. A great video on social media works for you 24/7 for years — generating leads, building trust, and appearing in feeds for free.",
                },
                {
                  title: "It builds compounding trust",
                  desc: "Every video testimonial, project showcase, and behind-the-scenes clip adds to your credibility bank. Over time, prospects feel like they already know your business before ever reaching out.",
                },
                {
                  title: "It feeds every channel at once",
                  desc: "A single production day creates assets for your ads, website hero sections, email headers, proposal decks, and social calendars for months. One investment, dozens of outputs across every platform.",
                },
                {
                  title: "It compounds over time",
                  desc: "Every shoot expands your media library. After a few quarters you'll have a bank of professional assets deep enough to refresh campaigns, launch new offers, and enter new markets without starting from scratch.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#65B207]/10">
                    <ArrowRight size={12} className="text-[#65B207]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-white/55">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-[#080808] p-5 text-center">
              <p className="text-sm text-white/60">
                <span className="font-bold text-[#65B207]">The businesses winning in 2026 and beyond</span> aren&apos;t the ones with the biggest budgets — they&apos;re the ones with the best content. Professional content is no longer a luxury. It&apos;s the cost of entry.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" flip />

      {/* CONTENT MULTIPLIER — Interactive Slider */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to top left" />
        <RadialGlow color="#65B207" position="10% 50%" size="500px" opacity={0.03} />
        <SectionHeader
          eyebrow="The Content Multiplier"
          title="Choose your shoot. See what you get."
          description="Every production day with Allora creates an entire content library — not just one video. Drag the slider to see realistic deliverable ranges based on shoot length and how involved you are on set."
        />
        <ContentMultiplierSlider />
      </Section>

      {/* ═══ OMNIPRESENCE & CONTENT ═══ */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to bottom right" />
        <RadialGlow color="#65B207" position="30% 50%" size="600px" opacity={0.04} />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          eyebrow="Omnipresence Through Content"
          title={<>Your content is the engine behind{' '}<span className="text-[#65B207]">omnipresence marketing.</span></>}
          description="Omnipresence means showing up everywhere your customers look — paid ads, social feeds, Google, YouTube, your website. But you can't be everywhere without a library of professional content to power every channel. That's where production becomes your biggest competitive advantage."
        />

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/10 bg-[#131E13] p-8 md:p-10"
        >
          <h3 className="mb-6 text-center font-heading text-xl font-bold text-white">
            One production day fuels every channel
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Facebook & Instagram Ads",
                desc: "Scroll-stopping brand videos, testimonial clips, and ad graphics built specifically for Meta placements — so your paid campaigns always have fresh, high-converting creative.",
              },
              {
                title: "Organic Social Media",
                desc: "Behind-the-scenes clips, project showcases, and polished carousels that keep your profiles active and professional — building trust with followers every single day.",
              },
              {
                title: "Website & Landing Pages",
                desc: "Hero videos, team photography, and project portfolios that make your website look world-class and convert visitors into leads the moment they land.",
              },
              {
                title: "YouTube & Video Platforms",
                desc: "Long-form testimonials, project walkthroughs, and educational clips that build authority and show up in search results for years.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#65B207]/10">
                  <CheckCircle size={12} className="text-[#65B207]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-[#080808] p-5 text-center">
            <p className="text-sm text-white/60">
              <span className="font-bold text-[#65B207]">Businesses that achieve omnipresence don&apos;t do it by accident.</span>{" "}
              They invest in a content library deep enough to keep every channel running with professional, on-brand material — month after month.
            </p>
          </div>
        </motion.div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* STOCK VS PROFESSIONAL */}
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="left" width="4%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="rgba(101,178,7,0.02)" direction="to bottom" />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="The Difference Is Obvious"
          title="Professional content vs. doing it yourself."
        />
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            <SlideIn from="left">
            <div className="rounded-2xl border border-white/10 bg-[#080808] p-6">
              <h3 className="mb-4 text-lg font-bold text-red-400/80">DIY / Stock Content</h3>
              <ul className="space-y-3 text-sm text-white/55">
                {[
                  "Blurry iPhone photos that look unprofessional",
                  "Generic stock images your competitors also use",
                  "Videos with bad audio that nobody watches",
                  "Inconsistent branding across platforms",
                  "Assets that feel dated the day they go live",
                  "Visuals that make a thriving business look amateur",
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
              <h3 className="mb-4 text-lg font-bold text-white">Allora Media Production</h3>
              <ul className="space-y-3 text-sm text-white/80">
                {[
                  "Cinematic video and magazine-quality photography",
                  "One-of-a-kind visuals only your brand owns",
                  "Broadcast-grade audio captured by professional crew",
                  "A unified visual identity across web, social, and print",
                  "Every asset engineered for ad performance and conversions",
                  "A brand presence that positions you as the market leader",
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
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" flip />

      {/* DELIVERABLE TYPES */}
      <Section variant="dark">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything we produce."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="h-full rounded-2xl bg-[#1a2a1a] p-6 shadow-sm hover-lift border-glow"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#131E13] text-white">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
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
            title="Media production for businesses like yours."
            description="We produce video, photo, and design content for companies across multiple industries throughout Connecticut and beyond."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Shield size={24} />,
                title: "Home Services & Construction",
                desc: "Before-and-after photo sets, progress time-lapses, crew headshots, and branded recap videos that turn completed jobs into your most powerful sales tool.",
              },
              {
                icon: <Sparkles size={24} />,
                title: "Food & Beverage",
                desc: "Magazine-quality food photography, ambiance videos, seasonal menu graphics, and a content calendar that keeps your social feeds as appetizing as your plates.",
              },
              {
                icon: <Award size={24} />,
                title: "Professional Services",
                desc: "Executive headshots, office environment shoots, thought-leadership video clips, and polished case-study graphics that position you as the authority in your field.",
              },
              {
                icon: <Film size={24} />,
                title: "Real Estate & Property",
                desc: "HDR listing photography, aerial property overviews, virtual walkthrough videos, and branded agent content that helps listings sell faster and at higher prices.",
              },
              {
                icon: <Zap size={24} />,
                title: "Retail & E-Commerce",
                desc: "Studio product photography, lifestyle flat-lays, unboxing videos, and scroll-stopping ad graphics that increase click-through rates and reduce return rates.",
              },
              {
                icon: <DollarSign size={24} />,
                title: "Health & Wellness",
                desc: "Welcoming facility tours, provider bio videos, patient-experience photography, and HIPAA-mindful testimonial content that eases anxiety before the first appointment.",
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
          title="Questions about video and photo production."
        />
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqs} variant="light" />
        </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready for content that actually moves the needle?"
        subhead="Share your goals and we'll put together a custom production plan — video, photo, design, or all three — so every deliverable is built to drive real business results."
        primaryLabel="Start a Production Project"
        primaryHref="/contact"
        secondaryLabel="See Our Video Production Service"
        secondaryHref="/video-production"
      />
    </>
  );
}
