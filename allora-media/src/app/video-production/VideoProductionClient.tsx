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
import { Shield, Zap, Award, Film, Sparkles, Factory } from "lucide-react";

const videoServices = [
  {
    icon: <Video size={24} />,
    title: "Brand Story Documentaries",
    description:
      "Cinematic mini-documentaries that tell the deeper story behind your organization — your mission, your people, and the impact you create. This is the flagship content that defines your brand.",
    href: "/services/brand-story-documentaries",
  },
  {
    icon: <Users size={24} />,
    title: "Interview Video Production",
    description:
      "On-camera interviews with founders, team members, patients, customers, and stakeholders — captured with broadcast-quality lighting, audio, and direction so every story resonates.",
    href: "/services/interview-video-production",
  },
  {
    icon: <Plane size={24} />,
    title: "Drone & Aerial Content",
    description:
      "FAA-licensed aerial videography that captures facilities, campuses, events, and landscapes from perspectives that ground cameras simply cannot match.",
    href: "/services/drone-content",
  },
  {
    icon: <Clapperboard size={24} />,
    title: "Training & Onboarding Videos",
    description:
      "Professional training content that scales your internal communications — onboarding programs, safety procedures, and process documentation produced to a cinematic standard.",
    href: "/services/training-onboarding-videos",
  },
  {
    icon: <Play size={24} />,
    title: "Social Media Content Packages",
    description:
      "Platform-optimized short-form and long-form content for LinkedIn, Instagram, YouTube, and beyond — built to extend your brand story across every digital touchpoint.",
    href: "/services/social-media-content-packages",
  },
  {
    icon: <Target size={24} />,
    title: "Motion Graphics & Animation",
    description:
      "Data visualizations, explainer sequences, and animated brand elements that bring complex ideas to life — ideal for biotech, manufacturing, and technical organizations.",
    href: "/services/motion-graphics-animation",
  },
];

const faqs = [
  {
    question: "What types of organizations does Story Real work with?",
    answer:
      "We work exclusively with purpose-driven organizations — biotech and pharmaceutical companies, manufacturers, nonprofit organizations, health systems, professional service firms, and sports franchises. If your organization has a meaningful story and a mission that matters, we're the right partner.",
  },
  {
    question: "What does the production process look like?",
    answer:
      "Every project begins with a Discovery session where we learn your organization's story, goals, and audience. From there we develop a Media Blueprint — a strategic production plan. Then we execute production on location with our full crew, handle post-production, and deliver a complete content library optimized for every platform and use case.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A standard brand story documentary project takes 4–8 weeks from discovery to final delivery. Interview-based content and event coverage can deliver faster. Multi-phase campaigns with ongoing content may span several months. We give you a clear timeline during the blueprint phase before any production begins.",
  },
  {
    question: "Do you travel for production?",
    answer:
      "Absolutely. While we're based in Southington, CT, we produce content across the Northeast and nationally. We've filmed on manufacturing floors, in hospital systems, at WNBA arenas, and at corporate headquarters coast to coast. We bring the full crew and equipment wherever your story lives.",
  },
  {
    question: "What deliverables do I receive?",
    answer:
      "Every project includes a full content library — hero brand films, interview segments, short-form social cuts, behind-the-scenes content, b-roll packages, and platform-specific edits. You receive full-resolution master files plus optimized versions for web, social, internal communications, and paid media.",
  },
  {
    question: "How is Story Real different from a typical video production company?",
    answer:
      "Most production companies are hired guns — they show up, film what you tell them, and leave. We start with strategy. We uncover the real story your audience needs to see, then we build a production plan around it. The result is content that doesn't just look cinematic — it drives measurable business outcomes.",
  },
  {
    question: "Can you produce content for paid media campaigns?",
    answer:
      "Yes. Many of our clients deploy Story Real content across paid channels — LinkedIn ads, YouTube pre-roll, Meta campaigns, and connected TV. We produce platform-specific cuts optimized for every placement, so your paid media is powered by authentic, high-quality brand content rather than generic ad creative.",
  },
  {
    question: "What industries have you produced video for?",
    answer:
      "We've produced content for biotech firms like Cybin Inc., manufacturers like Laticrete and POWR2, aerospace companies like Pratt & Whitney, health systems like Trinity Health and Middlesex Health, nonprofits like Ronald McDonald House Charities, and sports franchises like the Connecticut Sun (WNBA).",
  },
];

export function VideoProductionClient() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* HERO */}
      <HeroBanner
        videoSrc="/videos/hero-production.mp4"
        imageSrc="/images/production-hero.jpg"
        imageAlt="Cinematic video production for purpose-driven organizations"
        overlayOpacity={60}
        cursorSpotlight
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-semibold uppercase text-balance text-[#68ccd1]"
          >
            Telly Award-Winning Production
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
            Cinematic video production for organizations that matter.
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
            Brand story documentaries, interview production, drone content, and
            strategic video — produced with purpose and built to drive
            measurable outcomes for your organization.
          </motion.p>
        </div>
      </HeroBanner>

      {/* ═══ CREDIBILITY BAR ═══ */}
      <section className="relative py-5 lg:py-6 bg-[#68ccd1]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: "10+", label: "Years of Production" },
              { value: "500+", label: "Projects Delivered" },
              { value: "Telly", label: "Award-Winning" },
              { value: "4K+", label: "Cinematic Quality" },
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

      <AngleDivider variant="notch" fill="#0e2a35" from="#68ccd1" />

      {/* WHY STORY-LED VIDEO */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to bottom" />
        <SectionHeader
          eyebrow="Why Story Wins"
          title="Your organization has a story worth telling. Most production companies miss it."
          description="The difference between video content that fills a website and video content that transforms a brand is strategy. We start with the story your audience needs to see — then we produce it at the highest cinematic level."
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {[
            {
              icon: <Eye size={20} className="text-[#68ccd1]" />,
              title: "Strategy before cameras",
              text: "Every production starts with discovery — understanding your mission, your audience, and the outcomes you need. We never press record until we've mapped the story.",
            },
            {
              icon: <TrendingUp size={20} className="text-[#68ccd1]" />,
              title: "Content that compounds",
              text: "A single production day yields a complete content library — hero films, interview segments, social cuts, b-roll packages — content that works across every channel for months.",
            },
            {
              icon: <Clock size={20} className="text-[#68ccd1]" />,
              title: "Built for business outcomes",
              text: "We don't just make beautiful video. Every piece is engineered to drive recruitment, fundraising, brand awareness, or sales — tied directly to your strategic goals.",
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

      <AngleDivider variant="notch" fill="#fafcfd" from="#0e2a35" />

      {/* THE NUMBERS */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="right" width="5%" />
        <GradientOverlay from="rgba(14,42,53,0.03)" to="transparent" direction="to bottom right" />
        <RadialGlow color="#68ccd1" position="90% 20%" size="600px" opacity={0.04} />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="The Numbers"
          title="Why organizations that invest in video outperform those that don't."
        />
          <div className="mb-10 grid gap-4 md:grid-cols-4">
            {[
              {
                stat: "91%",
                label: "Of businesses use video as a core communication tool (Wyzowl 2024)",
              },
              {
                stat: "64%",
                label:
                  "Of decision-makers take action after watching branded video (Forbes)",
              },
              {
                stat: "49%",
                label:
                  "Faster revenue growth for organizations using strategic video (Aberdeen)",
              },
              {
                stat: "80%",
                label:
                  "Of marketers say video directly increased pipeline and sales (Wyzowl)",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-xl border border-[#68ccd1]/20 bg-[#0a2029] p-5 text-center hover-lift"
              >
                <p className="font-heading text-3xl font-black text-[#68ccd1]">
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
            className="rounded-2xl border border-white/10 bg-[#0a2029] p-8 md:p-10"
          >
            <h3 className="mb-6 text-center font-heading text-xl font-bold text-white">
              What strategy-led video production does for your organization
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Communicates your mission authentically",
                  desc: "When stakeholders, recruits, donors, or customers see cinematic content that captures who you really are — they connect with your organization before ever making contact.",
                },
                {
                  title: "Fuels every channel from one production",
                  desc: "Your video content powers your website, social media, investor presentations, internal communications, recruitment materials, and paid media — all from a single strategic production.",
                },
                {
                  title: "Builds credibility that text cannot",
                  desc: "Seeing real people, real facilities, and real impact on screen creates a level of trust that no amount of written copy or stock photography can achieve.",
                },
                {
                  title: "Creates a lasting content library",
                  desc: "Unlike one-off campaigns, story-driven video builds an evergreen asset library — content that continues working for your organization for years after production wraps.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#68ccd1]/10">
                    <ArrowRight size={12} className="text-[#68ccd1]" />
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

      <AngleDivider variant="notch" fill="#0e2a35" from="#fafcfd" flip />

      {/* WHAT YOU GET */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to top left" />
        <RadialGlow color="#68ccd1" position="10% 50%" size="500px" opacity={0.03} />
        <SectionHeader
          eyebrow="What You Get"
          title="One production. An entire content library."
          description="A single Story Real production doesn't get you one video. It gets you a full library of strategic content built to serve your organization across every channel."
        />
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[#68ccd1]/20 bg-[#0e2a35] p-8">
            <div className="mb-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-[#68ccd1]">
                From a single production engagement:
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { count: "1–2", label: "Brand story documentary films" },
                {
                  count: "4–8",
                  label: "Individual interview segments",
                },
                {
                  count: "15–30",
                  label: "Short-form social cuts & clips",
                },
                {
                  count: "1",
                  label: "Website hero video or sizzle reel",
                },
                {
                  count: "Full",
                  label: "B-roll library for future use",
                },
                {
                  count: "6+",
                  label: "Months of content from one engagement",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-4 rounded-xl bg-[#0a2029] p-4"
                >
                  <span className="font-heading text-2xl font-black text-[#68ccd1]">
                    {item.count}
                  </span>
                  <span className="text-sm text-white/60">{item.label}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-white/40">
              A complete content ecosystem from a single strategic production.
            </p>
          </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#fafcfd" from="#0e2a35" />

      {/* HIRING A PRO VS DIY */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="left" width="4%" />
        <GradientOverlay from="rgba(14,42,53,0.03)" to="rgba(104,204,209,0.02)" direction="to bottom" />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="The Difference Is Clear"
          title="Typical production company vs. Story Real Studios."
        />
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            <SlideIn from="left">
              <div className="rounded-2xl border border-white/10 bg-[#0e1e25] p-6">
                <h3 className="mb-4 text-lg font-bold text-white/60">
                  Typical Production Company
                </h3>
                <ul className="space-y-3 text-sm text-white/55">
                  {[
                    "Shows up and films whatever you tell them to",
                    "No strategy, no story framework, just footage",
                    "Delivers one video and moves on to the next job",
                    "Generic corporate feel with no brand personality",
                    "Content that lives on your website and collects dust",
                    "No understanding of how video drives business goals",
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
              <div className="rounded-2xl border border-[#68ccd1]/20 bg-[#0e1e25] p-6">
                <h3 className="mb-4 text-lg font-bold text-white">
                  Story Real Studios
                </h3>
                <ul className="space-y-3 text-sm text-white/80">
                  {[
                    "Starts with strategy — discovers the story your audience needs",
                    "Comprehensive Media Blueprint before any cameras roll",
                    "Delivers a full content library from every engagement",
                    "Cinematic quality with authentic brand personality",
                    "Content engineered for deployment across every channel",
                    "Every piece tied to measurable business outcomes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
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

      <AngleDivider variant="notch" fill="#0e2a35" from="#fafcfd" flip />

      {/* VIDEO SERVICES */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.02)" to="transparent" direction="to top" />
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
              className="group h-full rounded-2xl bg-[#0e1e25] p-6 shadow-sm hover-lift border-glow"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a2029] text-white">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
              {item.href && (
                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#68ccd1] transition-colors hover:text-[#7dd30a]"
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

      <AngleDivider variant="notch" fill="#fafcfd" from="#0e2a35" />

      {/* ALSO NEED PHOTOGRAPHY? */}
      <Section variant="light">
        <GradientOverlay from="rgba(14,42,53,0.03)" to="transparent" direction="to bottom right" />
        <div className="mx-auto max-w-3xl py-6 text-center">
          <ScaleIn>
            <div className="rounded-2xl border border-white/10 bg-[#0a2029] p-8 md:p-10">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#68ccd1]">
                Beyond Video
              </p>
              <h2 className="font-heading text-2xl font-black md:text-3xl">
                Full media production under one roof.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60">
                Video is the centerpiece, but we also produce professional
                photography, drone content, motion graphics, and design — all
                unified under a single brand strategy. See everything we offer.
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

      <AngleDivider variant="notch" fill="#0e2a35" from="#fafcfd" />

      {/* ═══ WHY STORY-DRIVEN MATTERS ═══ */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to top left" />
        <RadialGlow color="#68ccd1" position="10% 50%" size="500px" opacity={0.03} />
        <SectionHeader
          eyebrow="Why It Matters"
          title="Story-Driven Video Delivers Results"
          description="Organizations using strategic video content see measurably better outcomes across brand awareness, recruitment, fundraising, and revenue."
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              stat: "91%",
              label: "of organizations use video as a core communication tool (Wyzowl)",
            },
            {
              stat: "2x",
              label: "higher engagement on content featuring authentic brand stories (HubSpot)",
            },
            {
              stat: "80%",
              label: "of decision-makers say video directly influenced their purchasing decision (Wyzowl)",
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
              <p className="font-heading text-4xl font-black text-[#68ccd1]">{item.stat}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#fafcfd" from="#0e2a35" />

      {/* ═══ INDUSTRIES WE SERVE ═══ */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="left" width="4%" />
        <GradientOverlay from="rgba(14,42,53,0.03)" to="rgba(104,204,209,0.02)" direction="to bottom" />
        <RadialGlow color="#68ccd1" position="50% 80%" size="800px" opacity={0.035} />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            variant="light"
            eyebrow="Industries We Serve"
            title="Video production for organizations that matter."
            description="We produce content for purpose-driven organizations across the Northeast and nationally."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Factory size={24} />,
                title: "Manufacturing & Industrial",
                desc: "Facility tours, process documentation, and brand stories for manufacturers like Laticrete, POWR2, and Pratt & Whitney.",
              },
              {
                icon: <Shield size={24} />,
                title: "Health Systems & Biotech",
                desc: "Patient stories, provider profiles, and mission-driven content for organizations like Trinity Health, Middlesex Health, and Cybin Inc.",
              },
              {
                icon: <Sparkles size={24} />,
                title: "Nonprofits & Foundations",
                desc: "Impact films, fundraising content, and donor engagement video for organizations like Ronald McDonald House Charities.",
              },
              {
                icon: <Award size={24} />,
                title: "Professional Services",
                desc: "Thought leadership content, brand positioning, and recruitment video for firms that need to communicate expertise and culture.",
              },
              {
                icon: <Film size={24} />,
                title: "Sports & Entertainment",
                desc: "Game-day content, athlete profiles, and brand partnership video for franchises like the Connecticut Sun (WNBA).",
              },
              {
                icon: <Zap size={24} />,
                title: "Product Brands & DTC",
                desc: "Product storytelling, lifestyle content, and launch campaigns for brands like Protein Bar & Kitchen that need to stand out.",
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
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0e2a35] p-7 hover-lift border-glow">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#68ccd1]/10 text-[#68ccd1]">
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

      <AngleDivider variant="notch" fill="#0e2a35" from="#0e2a35" />

      {/* TESTIMONIALS */}
      <TestimonialSection />

      {/* FAQ */}
      <Section variant="light">
        <GradientOverlay from="rgba(14,42,53,0.03)" to="transparent" direction="to bottom right" />
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
        headline="Ready for video that tells your real story?"
        subhead="Tell us about your organization. We'll discover the story your audience needs to see and produce cinematic content that drives real business outcomes."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="See Our Work"
        secondaryHref="/case-studies"
      />
    </>
  );
}
