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
    icon: <FolderOpen size={24} />,
    title: "Your Complete Content Library",
    description:
      "Access every video, photo, b-roll clip, and asset we've ever produced for your organization. Preview, download, and share content directly from your portal — any time you need it.",
  },
  {
    icon: <Clock size={24} />,
    title: "Project Status & Timelines",
    description:
      "See exactly where every production stands — from discovery through final delivery — with clear milestones, deadlines, and real-time status updates on every project.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Content Performance Insights",
    description:
      "Track how your content is performing across channels — views, engagement, and deployment metrics so you can see the impact of your video investment.",
  },
  {
    icon: <FileText size={24} />,
    title: "Project Reports & Strategy Docs",
    description:
      "Every Media Blueprint, creative brief, production plan, and post-project report is archived here — a complete record of our strategic partnership.",
  },
];

const howItWorks = [
  {
    icon: <Eye size={20} />,
    step: "Log In",
    desc: "Access your personal dashboard with your secure login — works on any device, anywhere.",
  },
  {
    icon: <Download size={20} />,
    step: "Access Everything",
    desc: "Browse your content library, check project timelines, download deliverables, and review strategy documents.",
  },
  {
    icon: <Bell size={20} />,
    step: "Stay Updated",
    desc: "Get notified when new content is delivered, project milestones are reached, or new assets are ready for download.",
  },
];

export function ClientPortalClient() {
  return (
    <>
      {/* HERO */}
      <HeroBanner
        videoSrc="/videos/hero-about.mp4"
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
            Your content. Your projects. All in one place.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            The Story Real Studios Hub gives you 24/7 access to your entire
            content library, project timelines, strategy documents, and
            performance insights — all organized in one dashboard. No more
            chasing files or wondering where your project stands.
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
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to bottom" />
        <SectionHeader
          eyebrow="What's Inside"
          title="No more chasing files. No more wondering."
          description="We built the client portal because you should never have to ask your production studio where your assets are or what's happening with your project. Everything you need is right here."
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
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a2029] text-white">
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

      <AngleDivider variant="notch" fill="#fafcfd" from="#0e2a35" />

      {/* HOW IT WORKS */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="right" width="5%" />
        <GradientOverlay from="rgba(14,42,53,0.03)" to="transparent" direction="to bottom right" />
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
              className="h-full rounded-2xl border border-white/10 bg-[#0e2a35] p-7 text-center hover-lift border-t-4 border-t-[#68ccd1]"
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

      <AngleDivider variant="notch" fill="#0e2a35" from="#fafcfd" flip />

      {/* PORTAL SCREENSHOT */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to top left" />
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

      <AngleDivider variant="notch" fill="#fafcfd" from="#0e2a35" />

      {/* WHAT OTHER AGENCIES GIVE YOU */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="left" width="4%" />
        <GradientOverlay from="rgba(14,42,53,0.03)" to="rgba(104,204,209,0.02)" direction="to bottom" />
        <RadialGlow color="#68ccd1" position="50% 80%" size="800px" opacity={0.035} />
        <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          variant="light"
          eyebrow="The Comparison"
          title="What most production companies give you vs. what we give you."
        />
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0e2a35]">
            <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center bg-[#0a2029] px-6 py-4">
              <span className="text-sm font-bold uppercase tracking-wider text-red-400">Typical Production Co.</span>
              <span className="text-white/20">vs</span>
              <span className="text-right text-sm font-bold uppercase tracking-wider text-[#68ccd1]">Story Real Studios</span>
            </div>
            <div className="flex md:hidden items-center justify-between bg-[#0a2029] px-6 py-4">
              <span className="text-sm font-bold uppercase tracking-wider text-red-400">Typical Production Co.</span>
              <span className="text-sm font-bold uppercase tracking-wider text-[#68ccd1]">Story Real Studios</span>
            </div>
            {[
              ["Files emailed with no organization", "Every asset organized in a searchable content library"],
              ["No idea where your project stands", "Real-time project status with milestones and timelines"],
              ["\"We'll get back to you\" with no timeline", "Transparent deadlines and notification updates"],
              ["You have to ask for your own files", "Download any asset, any time — 24/7 access"],
              ["No strategy documentation or creative briefs", "Complete archive of blueprints, briefs, and reports"],
              ["Relationship ends when the invoice is paid", "Ongoing partnership with continuous content insights"],
            ].map(([bad, good], i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-4 px-6 py-4 ${
                  i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[#0e2a35]"
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

      <AngleDivider variant="notch" fill="#0e2a35" from="#fafcfd" flip />

      {/* RED FLAGS */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.02)" to="transparent" direction="to top" />
        <SectionHeader
          eyebrow="Red Flags"
          title="Signs your current production company isn't organized."
        />
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "You can't access your own video files without emailing someone",
              "You have no visibility into project timelines or milestones",
              "Files are scattered across email threads, Dropbox links, and Google Drives",
              "You don't know what content you have or where to find it",
              "There's no creative brief or strategic documentation for your projects",
              "You have to chase your production company for updates",
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
            If any of these sound familiar, it&apos;s time for a production partner that keeps you in the loop. Every Story Real Studios client gets complete visibility from day one.
          </p>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#fafcfd" from="#0e2a35" />

      {/* TRANSPARENCY CALLOUT */}
      <Section variant="light">
        <div className="mx-auto max-w-3xl py-6 text-center">
          <SectionHeader
            variant="light"
            eyebrow="Our Philosophy"
            title="Transparency isn't a feature. It's the standard."
          />
          <p className="text-lg leading-relaxed text-[#0a1a1f]/60">
            Every Story Real Studios client gets portal access from day one — at no
            extra cost. We don&apos;t scatter your files across email threads or
            hide behind vague status updates. You see your content library, your
            project timelines, and your strategy documents — organized and
            accessible whenever you need them.
          </p>
        </div>
      </Section>

      <AngleDivider variant="notch" fill="#0e2a35" from="#fafcfd" />

      {/* NOT A CLIENT YET */}
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to bottom" />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-heading font-black tracking-tight md:text-4xl">
            Not a client yet? See what you&apos;re missing.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            The client portal is available to every active Story Real Studios client at
            no extra cost. If you want to work with a production studio that
            gives you this level of organization and visibility, let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-white transition-all hover:scale-[1.03] hover:bg-[#7dd6da]"
          >
            Book a Strategy Call
          </Link>
        </div>
      </Section>
    </>
  );
}
