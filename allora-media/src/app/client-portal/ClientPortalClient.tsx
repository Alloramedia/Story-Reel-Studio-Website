"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  BarChart3,
  FolderOpen,
  Clock,
  FileText,
  Eye,
  Download,
  Bell,
  XCircle,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { siteConfig } from "@/lib/constants";
import { HeroBanner } from "@/components/HeroBanner";
import { AngleDivider, EdgeAccentStripe, GradientOverlay, RadialGlow } from "@/components/SectionTextures";

const features = [
  {
    icon: <BarChart3 size={24} />,
    title: "Live Campaign Performance",
    description:
      "See how your ads are performing right now — leads generated, cost per lead, total ad spend, and return on investment. No need to wait for a report to know what's happening.",
  },
  {
    icon: <FolderOpen size={24} />,
    title: "All Your Content in One Place",
    description:
      "Access every video, photo, and graphic we've produced for your business. Preview, download, and share content directly from your portal — any time you need it.",
  },
  {
    icon: <Clock size={24} />,
    title: "Project Status & Timelines",
    description:
      "See exactly where every project stands — from content production to campaign launches — with clear milestones, deadlines, and real-time status updates.",
  },
  {
    icon: <FileText size={24} />,
    title: "Monthly Performance Reports",
    description:
      "Every monthly report we've ever delivered is archived here with detailed analysis, key insights, and our recommendations for the next month.",
  },
];

const howItWorks = [
  {
    icon: <Eye size={20} />,
    step: "Log In",
    desc: "Access your personal dashboard with your secure login — works on any device.",
  },
  {
    icon: <Download size={20} />,
    step: "See Everything",
    desc: "View live campaign data, download content, check project timelines, and read reports.",
  },
  {
    icon: <Bell size={20} />,
    step: "Stay Updated",
    desc: "Get notified when new reports are published or project milestones are reached.",
  },
];

export function ClientPortalClient() {
  return (
    <>
      {/* HERO */}
      <HeroBanner
        videoSrc="/videos/hero-general.mp4"
        overlayOpacity={70}
        cursorSpotlight
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-semibold uppercase text-balance text-[#68ccd1]"
          >
            Your Client Portal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            Always know where your money is going.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Most agencies send you a PDF once a month and hope you don&apos;t
            ask too many questions. The Story Real Studios Hub gives you 24/7
            access to your campaign performance, all your creative content,
            project timelines, and monthly reports — all organized in one
            dashboard. No more wondering what your production studio is doing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <a
              href={siteConfig.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-white transition-all hover:scale-[1.03] hover:bg-[#7dd6da]"
            >
              Log In to Client Portal
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </HeroBanner>

      {/* FEATURES */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to bottom" />
        <SectionHeader
          eyebrow="What's Inside"
          title="No more wondering. No more chasing updates."
          description="We built the client portal because we believe you should never have to ask your production studio what's going on. Everything you need to see is right here, updated in real time."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="h-full rounded-2xl border border-white/10 p-8 hover-lift border-glow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#151515] text-white">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-base leading-relaxed text-white/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#080808" />

      {/* HOW IT WORKS */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="right" width="5%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="Simple & Accessible"
          title="How the portal works."
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {howItWorks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="h-full rounded-2xl border border-white/10 bg-[#080808] p-7 text-center hover-lift border-t-4 border-t-[#68ccd1]"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#68ccd1]/10 text-[#68ccd1]">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{item.step}</h3>
              <p className="text-sm leading-relaxed text-white/55">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#f5fafa" flip />

      {/* PORTAL SCREENSHOT */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to top left" />
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">
            <Image
              src="/images/portal-screenshot.jpg"
              alt="Story Real Studios Client Portal Dashboard"
              width={1200}
              height={628}
              className="block w-full h-auto"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#080808" />

      {/* WHAT OTHER AGENCIES GIVE YOU */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="left" width="4%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="rgba(101,178,7,0.02)" direction="to bottom" />
        <RadialGlow color="#68ccd1" position="50% 80%" size="800px" opacity={0.035} />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="The Comparison"
          title="What most agencies give you vs. what we give you."
        />
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
            <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center bg-[#151515] px-6 py-4">
              <span className="text-sm font-bold uppercase tracking-wider text-red-400">Typical Agency</span>
              <span className="text-white/20">vs</span>
              <span className="text-right text-sm font-bold uppercase tracking-wider text-[#68ccd1]">Story Real Studios</span>
            </div>
            <div className="flex md:hidden items-center justify-between bg-[#151515] px-6 py-4">
              <span className="text-sm font-bold uppercase tracking-wider text-red-400">Typical Agency</span>
              <span className="text-sm font-bold uppercase tracking-wider text-[#68ccd1]">Story Real Studios</span>
            </div>
            {[
              ["Monthly PDF emailed 2 weeks late", "Real-time dashboard accessible 24/7"],
              ["No idea where your files are", "Every photo, video, and graphic organized in one library"],
              ["\"The campaigns are doing well\" (no data)", "Exact leads, cost per lead, ROAS, and ad-level data"],
              ["You have to ask for updates", "Notifications when reports are published or milestones hit"],
              ["Reports filled with jargon you don't understand", "Clear monthly reviews in plain language with next steps"],
              ["You never see what they're actually spending", "Full ad spend visibility — you see every dollar"],
            ].map(([bad, good], i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-4 px-6 py-4 ${
                  i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[#080808]"
                }`}
              >
                <div className="flex items-start gap-2 text-sm text-white/40">
                  <XCircle size={16} className="mt-0.5 shrink-0 text-red-400/60" />
                  {bad}
                </div>
                <div className="hidden md:block h-6 w-px bg-white/10" />
                <div className="flex items-start gap-2 text-sm text-white/80">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-[#68ccd1]" />
                  {good}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#f5fafa" flip />

      {/* RED FLAGS */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.02)" to="transparent" direction="to top" />
        <SectionHeader
          eyebrow="Red Flags"
          title="Signs your current agency isn't being transparent."
        />
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "You can't see your ad spend in real time",
              "Reporting is full of vanity metrics (likes, impressions) with no lead data",
              "You have to ask multiple times for your own creative assets",
              "They never explain what they're changing or why",
              "You don't know your cost per lead or return on ad spend",
              "They have you locked in with no flexibility to leave",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex h-full items-start gap-3 rounded-xl border border-red-500/10 bg-red-500/5 p-4 hover-lift"
              >
                <AlertTriangle size={16} className="mt-0.5 shrink-0 text-red-400" />
                <span className="text-sm text-white/60">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-white/55">
            If any of these sound familiar, it&apos;s time for a change. Every Story Real Studios client gets complete transparency from day one.
          </p>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#f5fafa" from="#080808" />

      {/* TRANSPARENCY CALLOUT */}
      <Section variant="light">
        <div className="mx-auto max-w-3xl py-6 text-center">
          <SectionHeader
            variant="light"
            eyebrow="Our Philosophy"
            title="Transparency isn't a feature. It's the standard."
          />
          <p className="text-lg leading-relaxed text-[#1a1a1a]/60">
            Every Story Real Studios client gets portal access from day one — at no
            extra cost. We don&apos;t hide data behind vague reports or unclear
            jargon. You see the same numbers we see. If your current agency
            doesn&apos;t give you this level of visibility, that should tell you
            something.
          </p>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#080808" from="#f5fafa" />

      {/* NOT A CLIENT YET */}
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to bottom" />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-heading font-black tracking-tight md:text-4xl">
            Not a client yet? See what you&apos;re missing.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            The client portal is available to every active Story Real Studios client at
            no extra cost. If you want to see what it&apos;s like working with a
            production studio that gives you this level of transparency, let&apos;s
            talk.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-white transition-all hover:scale-[1.03] hover:bg-[#7dd6da]"
          >
            Book a Growth Blueprint Call
          </Link>
        </div>
      </Section>
    </>
  );
}
