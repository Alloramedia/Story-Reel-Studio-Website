"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Video,
  Clapperboard,
  Plane,
  Users,
  Play,
  ArrowRight,
  CheckCircle,
  XCircle,
  Clock,
  Target,
  TrendingUp,
  Eye,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { credibilityStats } from "@/lib/constants";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { FAQSchema } from "@/components/StructuredData";
import { TestimonialSection } from "@/components/TestimonialSection";
import { SlideIn, ScaleIn } from "@/components/animations";
import { HeroBanner } from "@/components/HeroBanner";
import { TiltCard } from "@/components/TiltCard";
import { AngleDivider, EdgeAccentStripe, GradientOverlay, RadialGlow } from "@/components/SectionTextures";
import { DollarSign, Shield, Zap, Award, Film, Sparkles } from "lucide-react";

const videoServices = [
  {
    icon: <Video size={24} />,
    title: "Brand & Testimonial Videos",
    description:
      "Your best marketing isn't what you say about yourself — it's what your customers say. We capture authentic testimonials, brand stories, and behind-the-scenes content that builds trust instantly.",
    href: "/services/testimonial-videos",
  },
  {
    icon: <Clapperboard size={24} />,
    title: "TV Commercials",
    description:
      "Broadcast-quality commercials for local and regional TV. Scripted, directed, and produced to make your business the one people remember when they need what you sell.",
    href: "/services/tv-commercials",
  },
  {
    icon: <Plane size={24} />,
    title: "Drone & Aerial Video",
    description:
      "FAA-licensed aerial videography for construction progress, real estate showcases, events, and brand content that shows the full scope of your work from perspectives ground crews can't capture.",
    href: "/services/drone-content",
  },
  {
    icon: <Users size={24} />,
    title: "Project Documentation",
    description:
      "For construction, renovation, and service businesses — we document your projects from start to finish with video, building a professional portfolio that sells your work to future clients.",
  },
  {
    icon: <Play size={24} />,
    title: "Social Media Video",
    description:
      "Short-form and long-form video content designed specifically for Instagram Reels, Facebook, YouTube, and TikTok — engineered to stop the scroll and drive engagement.",
  },
  {
    icon: <Target size={24} />,
    title: "Video Ad Creative",
    description:
      "Video ads built from the ground up for performance — attention-grabbing hooks in the first 3 seconds, multiple variations for testing, and formats optimized for every Meta placement.",
  },
];

const faqs = [
  {
    question: "How much does video production cost?",
    answer:
      "Video production pricing depends on scope — what you need filmed, how many locations, crew size, and deliverables. Most of our projects range from $2,500 to $15,000. TV commercials can be higher depending on talent and complexity. We scope every project individually and give you a clear quote before any work begins.",
  },
  {
    question: "What does the video production process look like?",
    answer:
      "It starts with a planning call where we learn your goals, your brand, and what you need. We build a creative brief, plan the shot list, schedule the shoot, handle all production and editing, and deliver final videos optimized for wherever they'll be used — ads, website, social, or broadcast.",
  },
  {
    question: "How long does it take to get finished videos?",
    answer:
      "A standard video production project (one shoot day with deliverables) takes about 2-4 weeks from planning to delivery. Larger projects like TV commercials or multi-location shoots may take 4-6 weeks. We give you a clear timeline before we start.",
  },
  {
    question: "Do you come to us or do we come to you?",
    answer:
      "Most of our video work is on location — at your business, job site, or event. We bring all cameras, lighting, audio gear, and crew. Studio shoots are available when needed for controlled environments.",
  },
  {
    question: "What video formats and sizes will I receive?",
    answer:
      "Everything is exported in the formats and sizes you need. Horizontal (16:9) for your website, YouTube, and TV. Vertical (9:16) for Reels, Stories, and TikTok. Square (1:1) for feeds. You get full-resolution master files plus optimized versions for every platform.",
  },
  {
    question: "Can you create videos specifically designed for Facebook and Instagram ads?",
    answer:
      "That's our specialty. We produce video ad creative with performance in mind — attention-grabbing hooks in the first 3 seconds, multiple variations for testing, and formats optimized for every Meta placement. It's what sets our video production apart from traditional production companies.",
  },
  {
    question: "Do I need to bundle video production with ad campaigns?",
    answer:
      "Not at all. We offer video production as a standalone service. That said, when production is paired with a paid media strategy, results are strongest because every piece of content is specifically built to perform in your campaigns.",
  },
  {
    question: "What kind of businesses do you produce video for?",
    answer:
      "We produce video for construction companies, home service businesses, restaurants, retailers, professional service firms, and more across Connecticut. If your business needs to build trust, show your work, or stand out in your market — video production is the fastest way to do it.",
  },
];

export function VideoProductionClient() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* HERO */}
      <HeroBanner
        videoSrc="/videos/hero-general.mp4"
        imageSrc="/images/production-hero.jpg"
        imageAlt="Professional video production for Connecticut businesses"
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
            Video Production in Connecticut
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
            Video production that makes your business impossible to ignore.
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
            TV commercials, testimonial videos, brand stories, drone content,
            and social media video — professionally produced and built to drive
            real business results.
          </motion.p>
        </div>
      </HeroBanner>

      {/* ═══ CREDIBILITY BAR ═══ */}
      <section className="relative py-5 lg:py-6 bg-[#65B207]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: "200+", label: "Videos Produced" },
              { value: credibilityStats.businessesServed, label: "Businesses Served" },
              { value: credibilityStats.googleRating, label: "Google Rating" },
              { value: "4K", label: "Cinematic Quality" },
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

      {/* WHY VIDEO */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to bottom" />
        <SectionHeader
          eyebrow="Why Video Wins"
          title="Video is the most powerful marketing tool that exists."
          description="In 2026, video isn't optional — it's the primary way people discover, research, and choose businesses. Companies investing in professional video production are winning more attention, more trust, and more customers than competitors relying on static content."
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {[
            {
              icon: <Eye size={20} className="text-[#65B207]" />,
              title: "People watch before they buy",
              text: "82% of all internet traffic is video (Cisco). Your customers are watching video to make purchasing decisions right now — the question is whether they're watching yours or your competitor's.",
            },
            {
              icon: <TrendingUp size={20} className="text-[#65B207]" />,
              title: "Video ads outperform everything",
              text: "Video ads generate 1200% more shares than text and images combined (Wordstream). In paid campaigns, video creative consistently delivers the lowest cost per lead.",
            },
            {
              icon: <Clock size={20} className="text-[#65B207]" />,
              title: "It compounds over time",
              text: "A great video works for you 24/7 for years — generating leads, building trust, and appearing in feeds long after you've paid for it once.",
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
              <div className="mb-3 flex justify-center">{item.icon}</div>
              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* THE NUMBERS */}
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="right" width="5%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <RadialGlow color="#65B207" position="90% 20%" size="600px" opacity={0.04} />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="The Numbers Don't Lie"
          title="Why businesses that invest in video production grow faster."
        />
          <div className="mb-10 grid gap-4 md:grid-cols-4">
            {[
              {
                stat: "82%",
                label: "Of all internet traffic is video content (Cisco)",
              },
              {
                stat: "64%",
                label:
                  "Of consumers buy after watching branded video (Forbes)",
              },
              {
                stat: "49%",
                label:
                  "Faster revenue growth for businesses using video (Aberdeen Group)",
              },
              {
                stat: "80%",
                label:
                  "Of marketers say video directly increased sales (Wyzowl)",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-xl border border-[#65B207]/20 bg-[#131E13] p-5 text-center hover-lift"
              >
                <p className="font-heading text-3xl font-black text-[#65B207]">
                  {item.stat}
                </p>
                <p className="mt-1 text-xs text-white/55">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/10 bg-[#131E13] p-8 md:p-10"
          >
            <h3 className="mb-6 text-center font-heading text-xl font-bold text-white">
              What professional video production does for your business
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Builds instant credibility",
                  desc: "When prospects see professional video of your team, your work, and your clients speaking about their experience — they trust you before ever picking up the phone.",
                },
                {
                  title: "Fuels every marketing channel",
                  desc: "Your video content powers your ads, your website, your social media, your email campaigns, and your sales process. One production investment, infinite applications.",
                },
                {
                  title: "Outperforms every other ad format",
                  desc: "In paid campaigns across Facebook and Instagram, video creative consistently delivers lower cost per lead, higher engagement, and more conversions than static images.",
                },
                {
                  title: "Creates a competitive moat",
                  desc: "Your competitors relying on stock photos and text-only posts can't compete with a business that has a library of professional video content across every platform.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#65B207]/10">
                    <ArrowRight size={12} className="text-[#65B207]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-white/55">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" flip />

      {/* WHAT YOU GET */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to top left" />
        <RadialGlow color="#65B207" position="10% 50%" size="500px" opacity={0.03} />
        <SectionHeader
          eyebrow="What You Get"
          title="One shoot day. An entire video library."
          description="A single production day with Allora doesn't get you one video. It gets you an arsenal of content built to fuel your marketing for months."
        />
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[#65B207]/20 bg-[#080808] p-8">
            <div className="mb-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-[#65B207]">
                From a single video production day:
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { count: "2–4", label: "Polished brand or testimonial videos" },
                {
                  count: "15–30",
                  label: "Short-form clips for social media & ads",
                },
                {
                  count: "3–5",
                  label: "Video ad variations for campaign testing",
                },
                {
                  count: "1",
                  label: "Website hero video or sizzle reel",
                },
                {
                  count: "5–10",
                  label: "Thumbnail and cover images from footage",
                },
                {
                  count: "3+",
                  label: "Months of social content from one day",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-4 rounded-xl bg-[#131E13] p-4"
                >
                  <span className="font-heading text-2xl font-black text-[#65B207]">
                    {item.count}
                  </span>
                  <span className="text-sm text-white/60">{item.label}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-white/40">
              That&apos;s $15,000+ worth of video from agencies that charge per
              deliverable.
            </p>
          </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* HIRING A PRO VS DIY */}
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="left" width="4%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="rgba(101,178,7,0.02)" direction="to bottom" />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="The Difference Is Obvious"
          title="Professional video vs. doing it yourself."
        />
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            <SlideIn from="left">
              <div className="rounded-2xl border border-white/10 bg-[#1a2a1a] p-6">
                <h3 className="mb-4 text-lg font-bold text-white/60">
                  DIY Video
                </h3>
                <ul className="space-y-3 text-sm text-white/55">
                  {[
                    "Shaky handheld footage that looks amateur",
                    "Bad lighting and audio nobody wants to watch",
                    "Videos too long with no strategic structure",
                    "Content that gets scrolled past in 0.5 seconds",
                    "Inconsistent quality across platforms",
                    "Makes your business look less established",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
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
              <div className="rounded-2xl border border-[#65B207]/20 bg-[#1a2a1a] p-6">
                <h3 className="mb-4 text-lg font-bold text-white">
                  Allora Media Video Production
                </h3>
                <ul className="space-y-3 text-sm text-white/80">
                  {[
                    "Cinematic video that stops the scroll and builds trust",
                    "Professional lighting, audio, and color grading",
                    "Strategic hooks and structure built for conversions",
                    "Content engineered for ad performance",
                    "Consistent quality across every platform and format",
                    "Makes your business look like the #1 choice in your market",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="mt-0.5 shrink-0 text-[#65B207]"
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

      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" flip />

      {/* VIDEO SERVICES */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.02)" to="transparent" direction="to top" />
        <SectionHeader
          eyebrow="Video Production Services"
          title="Every type of video your business needs."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videoServices.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group h-full rounded-2xl bg-[#1a2a1a] p-6 shadow-sm hover-lift border-glow"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#131E13] text-white">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
              {item.href && (
                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#65B207] transition-colors hover:text-[#7dd30a]"
                >
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />

      {/* ALSO NEED PHOTOGRAPHY? */}
      <Section variant="light">
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <div className="mx-auto max-w-3xl py-6 text-center">
          <ScaleIn>
            <div className="rounded-2xl border border-white/10 bg-[#131E13] p-8 md:p-10">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#65B207]">
                Need More Than Video?
              </p>
              <h2 className="font-heading text-2xl font-black md:text-3xl">
                We produce photography and design too.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60">
                Video is just one piece of the puzzle. We also produce
                professional photography, drone content, and graphic design —
                all under one roof. See everything we offer on our full media
                production page.
              </p>
              <Link
                href="/media-production"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20"
              >
                View All Production Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScaleIn>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" />

      {/* ═══ WHY PROFESSIONAL VIDEO ═══ */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to top left" />
        <RadialGlow color="#65B207" position="10% 50%" size="500px" opacity={0.03} />
        <SectionHeader
          eyebrow="Why It Matters"
          title="Video isn't optional anymore."
          description="Businesses using professional video see measurably better results across every channel — from social media to paid ads to their website."
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              stat: "91%",
              label: "of businesses use video as a marketing tool in 2026 (Wyzowl)",
            },
            {
              stat: "2x",
              label: "higher engagement on social posts with professional video (HubSpot)",
            },
            {
              stat: "80%",
              label: "of consumers say video helps them make purchasing decisions (Wyzowl)",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/2 p-8 text-center"
            >
              <p className="font-heading text-4xl font-black text-[#65B207]">{item.stat}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{item.label}</p>
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
            title="Video production for businesses like yours."
            description="We produce video for companies across multiple industries throughout Connecticut and beyond."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Shield size={24} />,
                title: "Home Services & Construction",
                desc: "Project documentation, testimonials, and brand videos that showcase the quality of your work and build trust with homeowners.",
              },
              {
                icon: <Sparkles size={24} />,
                title: "Food & Beverage",
                desc: "Menu showcases, atmosphere videos, and social content that makes people crave your food and visit your restaurant.",
              },
              {
                icon: <Award size={24} />,
                title: "Professional Services",
                desc: "Credibility-building brand videos, testimonials, and case study content that positions you as the go-to expert.",
              },
              {
                icon: <Film size={24} />,
                title: "Real Estate & Property",
                desc: "Property tours, aerial drone footage, and walkthrough videos that sell listings faster and at better prices.",
              },
              {
                icon: <Zap size={24} />,
                title: "Retail & E-Commerce",
                desc: "Product videos, unboxing content, and ad creative that drives online sales and reduces return rates.",
              },
              {
                icon: <DollarSign size={24} />,
                title: "Health & Wellness",
                desc: "Facility tours, provider introductions, and patient testimonials that build comfort and trust before the first visit.",
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

      <AngleDivider variant="notch" fill="#080808" from="#080808" />

      {/* TESTIMONIALS */}
      <TestimonialSection />

      {/* FAQ */}
      <Section variant="light">
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            variant="light"
            eyebrow="FAQ"
            title="Common video production questions."
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} variant="light" />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready for video that actually drives results?"
        subhead="Tell us about your project. We'll plan the production, handle everything on-site, and deliver professional video content built for your marketing."
        primaryLabel="Start a Video Project"
        primaryHref="/contact"
        secondaryLabel="See Our Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
