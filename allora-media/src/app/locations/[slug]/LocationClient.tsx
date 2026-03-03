"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Target,
  Building2,
  Truck,
  Rocket,
  Video,
  Film,
  Package,
  GraduationCap,
  Plane,
  Mic,
  ArrowRight,
} from "lucide-react";
import { HeroBanner } from "@/components/HeroBanner";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { siteConfig } from "@/lib/constants";

/* ── Types ── */
interface LocationData {
  name: string;
  fullName: string;
  metaTitle: string;
  metaDescription: string;
  areas: string[];
  intro: string;
}

/* ── Static data ── */
const services = [
  { title: "Testimonial Videos", href: "/services/testimonial-videos", icon: Video, description: "Authentic customer stories that build trust and shorten sales cycles." },
  { title: "Brand Films", href: "/services/brand-films", icon: Film, description: "Cinematic narratives that communicate who you are and why it matters." },
  { title: "Product Demos", href: "/services/product-demos", icon: Package, description: "Clear, compelling demos that show your product in action." },
  { title: "Training Videos", href: "/services/training-videos", icon: GraduationCap, description: "Professional training content that scales onboarding and education." },
  { title: "Drone Videography", href: "/services/drone-videography", icon: Plane, description: "Stunning aerial footage that gives your brand a cinematic edge." },
  { title: "Podcast Production", href: "/services/podcast-production", icon: Mic, description: "Full-service podcast production — from recording to distribution." },
];

const differentiators = [
  { title: "Strategy-First Approach", icon: Target, description: "Every project starts with a strategy session. We align your video campaign with real business goals before a single camera rolls." },
  { title: "Professional Studio Available", icon: Building2, description: "Our Connecticut studio offers a controlled environment with professional lighting, sound, and multi-camera setups ready to go." },
  { title: "On-Location Crews", icon: Truck, description: "Our production teams travel to your facility — factory floor, office, job site, or event venue — fully equipped for any environment." },
  { title: "Full Deployment Support", icon: Rocket, description: "We don't just deliver files. We help you distribute, optimize, and repurpose every piece of content across every channel." },
];

export function LocationClient({ location }: { location: LocationData }) {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <HeroBanner
        videoSrc="/videos/hero-production.mp4"
        imageSrc="/images/portfolio/hero-banner-poster.jpg"
        imageAlt={`Video production in ${location.name} — Story Real Studios`}
        overlayOpacity={70}
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-bold uppercase text-[#68ccd1]"
          >
            <MapPin size={14} className="mr-2 inline-block" />
            {location.fullName}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            Video Production in {location.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            {location.intro}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href={siteConfig.bookingUrl}
              className="inline-flex items-center rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-[#080808] shadow-lg shadow-[#68ccd1]/25 transition-all duration-300 hover:bg-[#7dd6da] hover:scale-[1.03]"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-[#68ccd1] hover:bg-[#68ccd1]/10"
            >
              See Our Work
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </HeroBanner>

      {/* ═══ AREAS WE SERVE ═══ */}
      <Section variant="light">
        <SectionHeader
          eyebrow="Service Areas"
          eyebrowColor="text-[#52b0b6]"
          title={<>Areas We Serve in {location.fullName}</>}
          description={`Our production crews are available throughout ${location.name}. We handle travel and logistics so you can focus on your business.`}
          variant="light"
        />
        <StaggerContainer className="flex flex-wrap justify-center gap-3">
          {location.areas.map((area) => (
            <StaggerItem key={area}>
              <span className="inline-flex items-center rounded-full border border-[#52b0b6]/30 bg-white px-5 py-2.5 text-sm font-medium text-[#1a1a1a] shadow-sm transition-colors hover:border-[#52b0b6] hover:bg-[#52b0b6]/10">
                <MapPin size={14} className="mr-2 text-[#52b0b6]" />
                {area}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ═══ SERVICES AVAILABLE ═══ */}
      <Section variant="dark">
        <SectionHeader
          eyebrow="What We Do"
          eyebrowColor="text-[#68ccd1]"
          title={<>Services Available in {location.name}</>}
          description="From testimonial campaigns to full brand films — we bring the same studio-quality production to your market."
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link href={service.href} className="group block h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-[#111] p-6 transition-all duration-300 hover:border-[#68ccd1]/30 hover:bg-[#151515]">
                  <service.icon size={28} className="mb-4 text-[#68ccd1]" />
                  <h3 className="mb-2 text-lg font-bold text-white group-hover:text-[#68ccd1] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#68ccd1] opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ═══ WHY STORY REAL STUDIOS ═══ */}
      <Section variant="light">
        <SectionHeader
          eyebrow="Why Us"
          eyebrowColor="text-[#52b0b6]"
          title="Why Story Real Studios"
          description="We combine strategic thinking with cinematic craft to deliver video campaigns that actually move the needle."
          variant="light"
        />
        <StaggerContainer className="grid gap-8 sm:grid-cols-2">
          {differentiators.map((item) => (
            <StaggerItem key={item.title}>
              <FadeIn>
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#52b0b6]/10 border border-[#52b0b6]/20">
                    <item.icon size={26} className="text-[#52b0b6]" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[#1a1a1a]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#4a4a4a]">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ═══ CTA ═══ */}
      <CTASection
        headline={`Ready to build your video campaign in ${location.name}?`}
        subhead="Book a free strategy call. We'll review your current content, identify the biggest opportunities, and give you a clear roadmap — whether you work with us or not."
        primaryLabel="Book a Strategy Call"
        primaryHref={siteConfig.bookingUrl}
        secondaryLabel="See Our Work"
        secondaryHref="/work"
      />
    </>
  );
}
