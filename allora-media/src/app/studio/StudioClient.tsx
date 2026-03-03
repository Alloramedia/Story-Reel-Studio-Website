"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  Lightbulb,
  Camera,
  Mic,
  Scissors,
  Monitor,
  Sparkles,
  Car,
  Thermometer,
  Plus,
  CheckCircle,
  ArrowRight,
  Square,
} from "lucide-react";
import { HeroBanner } from "@/components/HeroBanner";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { siteConfig } from "@/lib/constants";

/* ─── Packages ─── */
const packages = [
  {
    name: "Studio Rental",
    price: "From $95/hr",
    duration: "Hourly",
    features: [
      "Full access to 1,000 sq ft studio space",
      "120 sq ft cyclorama wall (10ft tall)",
      "Professional LED lighting setup",
      "High-speed fiber WiFi (500mb/s)",
      "Climate control & free on-site parking",
    ],
  },
  {
    name: "Podcast Production",
    price: "From $495",
    duration: "Per session",
    featured: true,
    features: [
      "Dedicated podcast booth (seats up to 4 guests)",
      "Professional condenser microphones",
      "Multi-camera 4K video recording",
      "Audio mixing and monitoring",
      "Comfortable, soundproofed environment",
    ],
  },
];

/* ─── Podcast Editing ─── */
const podcastEditing = [
  { name: "30 Min 4K Edit", price: "$375" },
  { name: "30 Min Edit + 3 Reels", price: "$575" },
  { name: "45 Min Edit + 10 Reels", price: "$1,075" },
];

/* ─── Add-Ons ─── */
const addOns = [
  { name: "Sony FX3 Package", price: "+$85/hr" },
  { name: "On-Site Studio Manager", price: "+$75/hr" },
  { name: "DJI Ronin 4D", price: "+$95/hr" },
];

/* ─── Studio Features ─── */
const studioFeatures = [
  { icon: <Square size={24} />, label: "1,000 Sq Ft Shooting Space" },
  { icon: <Lightbulb size={24} />, label: "Professional LED Lighting" },
  { icon: <Monitor size={24} />, label: "120 Sq Ft Cyclorama Wall (10ft)" },
  { icon: <Camera size={24} />, label: "Multi-Camera Setup" },
  { icon: <Mic size={24} />, label: "Podcast Booth (Up to 4 Guests)" },
  { icon: <Sparkles size={24} />, label: "High-Speed Fiber WiFi (500mb/s)" },
  { icon: <Thermometer size={24} />, label: "Climate Controlled" },
  { icon: <Car size={24} />, label: "Free Parking" },
];

/* ─── FAQ ─── */
const faqs = [
  {
    question: "Is parking available at the studio?",
    answer:
      "Yes. We offer free, dedicated parking directly on-site. There is space for crew vehicles, talent, and client vehicles — no meters, no garages, no stress.",
  },
  {
    question: "What are the studio hours?",
    answer:
      "Standard booking windows run from 8 AM to 10 PM, seven days a week. If you need time outside of that range for a specialized shoot or overnight setup, reach out and we will accommodate wherever possible.",
  },
  {
    question: "What is included in a studio rental?",
    answer:
      "Every studio rental includes access to the full 1,000 sq ft shooting space, 120 sq ft cyclorama wall, high-speed fiber WiFi, climate control, and free on-site parking. Professional LED lighting is included with all rentals. Podcast productions include professional condenser microphones, multi-camera 4K recording, audio monitoring, and comfortable seating for up to 4 guests.",
  },
  {
    question: "What is the turnaround time for editing?",
    answer:
      "For Podcast Production Package clients, expect a 5–7 business day turnaround per episode for fully edited audio, video, and social clips. Standalone editing add-ons are scoped and scheduled during booking — most projects deliver within 3–5 business days.",
  },
  {
    question: "Can I bring my own crew and equipment?",
    answer:
      "Absolutely. Many clients bring their own directors, camera operators, and gear. Our space is designed to integrate with outside teams seamlessly. Just let us know your crew size and equipment list during booking so we can prep the space accordingly.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellations made 72 hours or more before your session receive a full refund. Cancellations within 48–72 hours receive a 50% refund. Cancellations within 48 hours are non-refundable but may be rescheduled once, subject to availability.",
  },
  {
    question: "Is the studio accessible?",
    answer:
      "Yes. The studio is fully ADA-accessible with ground-level entry, wide doorways, accessible restroom facilities, and open floor plans designed for unrestricted movement throughout the space.",
  },
  {
    question: "Is there a kitchen or catering area?",
    answer:
      "The studio includes a small kitchenette with a refrigerator, microwave, coffee maker, and counter space for craft services. For full-day shoots, many clients bring catering — we have ample table space and can recommend local vendors.",
  },
];

/* ================================================================== */
/*  StudioClient                                                       */
/* ================================================================== */
export function StudioClient() {
  return (
    <main>
      {/* ── Hero ── */}
      <HeroBanner
        imageSrc="/images/production/studio-set.jpg"
        imageAlt="Story Real Studios production space"
        minHeight="min-h-[75vh]"
        overlayOpacity={70}
      >
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#68ccd1]"
          >
            Story Real Studios
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl text-shadow-hero"
          >
            A Premium Production Space
            <br className="hidden sm:block" /> in Connecticut
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
          >
            A fully equipped, climate-controlled studio built for video
            production, podcast recording, photography, and content creation.
            Walk in, press record, walk out with something worth publishing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href={siteConfig.studioBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-[#0e2a35] shadow-lg shadow-[#68ccd1]/25 transition-all duration-300 hover:bg-[#7dd6da] hover:scale-[1.03]"
            >
              <Star size={18} className="mr-2" />
              Book the Studio
            </Link>
            <a
              href="#packages"
              className="inline-flex items-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-[#68ccd1] hover:bg-[#68ccd1]/10"
            >
              View Packages
              <ArrowRight size={18} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </HeroBanner>

      {/* ── Studio Overview ── */}
      <Section variant="light">
        {/* Studio photo gallery */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/production/studio-set.jpg"
              alt="Story Real Studios production studio with lighting"
              width={800}
              height={500}
              className="w-full h-72 object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/production/podcast-setup.jpeg"
              alt="Podcast recording studio setup"
              width={800}
              height={500}
              className="w-full h-72 object-cover"
            />
          </div>
        </div>
        <SectionHeader
          eyebrow="The Space"
          title="Built for Creators. Ready When You Are."
          description="Story Real Studios is a professional-grade production environment designed from the ground up for teams that need more than a conference room with a ring light. Whether you're filming a brand campaign, recording a podcast series, or capturing product photography — the space, lighting, and acoustics are already dialed in."
          variant="light"
        />

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {studioFeatures.map((feature) => (
            <StaggerItem key={feature.label}>
              <div className="group rounded-2xl border border-[#e0e0e0] bg-white p-6 text-center shadow-md transition-all duration-300 hover:border-[#52b0b6]/40 hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#52b0b6]/10 text-[#52b0b6] transition-colors group-hover:bg-[#52b0b6]/20">
                  {feature.icon}
                </div>
                <p className="text-sm font-semibold tracking-wide text-[#0a1a1f]">
                  {feature.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ── Packages ── */}
      <Section variant="dark" id="packages">
        <SectionHeader
          eyebrow="Packages"
          eyebrowColor="text-[#68ccd1]"
          title="Straightforward Pricing. No Surprises."
          description="Choose the package that fits your project. Every booking includes access to our professional space, equipment, and support — so you can focus entirely on creating."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {packages.map((pkg) => (
            <FadeIn key={pkg.name}>
              <div
                className={`relative rounded-2xl border p-8 transition-all duration-300 md:p-10 ${
                  pkg.featured
                    ? "border-[#68ccd1]/40 bg-[#68ccd1]/[0.04] shadow-lg shadow-[#68ccd1]/10"
                    : "border-[#1a4a58]/40 bg-[#0e2a35] hover:border-[#68ccd1]/30"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 right-6 rounded-full bg-[#68ccd1] px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#0e2a35]">
                    Most Popular
                  </span>
                )}
                <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white md:text-2xl">
                      {pkg.name}
                    </h3>
                    <p className="mt-1 flex items-center gap-2 text-sm text-white/50">
                      <Clock size={14} />
                      {pkg.duration}
                    </p>
                  </div>
                  <p className="text-3xl font-black text-[#68ccd1]">
                    {pkg.price}
                  </p>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm leading-relaxed text-white/70"
                    >
                      <CheckCircle
                        size={16}
                        className="mt-0.5 shrink-0 text-[#68ccd1]"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={siteConfig.studioBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 ${
                    pkg.featured
                      ? "bg-[#68ccd1] text-[#0e2a35] shadow-lg shadow-[#68ccd1]/25 hover:bg-[#7dd6da]"
                      : "border-2 border-white/20 text-white hover:border-[#68ccd1] hover:bg-[#68ccd1]/10"
                  }`}
                >
                  Book This Package
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── Podcast Editing ── */}
      <Section variant="light">
        <SectionHeader
          eyebrow="Podcast Editing"
          title="Post-Production Packages"
          description="Professional editing and social content packages for your podcast recordings."
          variant="light"
        />

        <FadeIn>
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-[#e0e0e0] bg-white shadow-md divide-y divide-[#e0e0e0] overflow-hidden">
            {podcastEditing.map((tier) => (
              <div
                key={tier.name}
                className="flex items-center justify-between px-6 py-5 transition-colors hover:bg-gray-50 md:px-8"
              >
                <span className="flex items-center gap-3 text-base font-medium text-[#0a1a1f]">
                  <Scissors size={16} className="text-[#52b0b6]" />
                  {tier.name}
                </span>
                <span className="text-base font-bold text-[#52b0b6]">
                  {tier.price}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* ── Add-Ons ── */}
      <Section variant="dark">
        <SectionHeader
          eyebrow="Add-Ons"
          eyebrowColor="text-[#68ccd1]"
          title="Customize Your Session"
          description="Layer in exactly what your project needs. Every add-on can be booked alongside any package."
        />

        <FadeIn>
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-[#1a4a58]/40 bg-[#0e2a35] divide-y divide-[#1a4a58]/30 overflow-hidden">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between px-6 py-5 transition-colors hover:bg-[#123642] md:px-8"
              >
                <span className="flex items-center gap-3 text-base font-medium text-white">
                  <Plus size={16} className="text-[#68ccd1]" />
                  {addon.name}
                </span>
                <span className="text-base font-bold text-[#68ccd1]">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* ── FAQ ── */}
      <Section variant="light">
        <SectionHeader
          eyebrow="FAQ"
          title="Common Questions"
          description="Everything you need to know before booking your session."
          variant="light"
        />

        <FadeIn className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion items={faqs} variant="light" />
        </FadeIn>
      </Section>

      {/* ── CTA ── */}
      <CTASection
        headline="Ready to Create Something Worth Watching?"
        subhead="Book your studio session today. Walk in with a vision, walk out with content that moves people."
        primaryLabel="Book the Studio"
        primaryHref={siteConfig.studioBookingUrl}
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </main>
  );
}
