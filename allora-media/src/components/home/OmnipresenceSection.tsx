"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Shield, Target, ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { Section, SectionHeader } from "@/components/Section";
import { GradientOverlay, RadialGlow } from "@/components/SectionTextures";

const omnipresenceCards = [
  {
    icon: <Eye size={24} />,
    title: "Be Everywhere They Look",
    desc: "Your potential customers are on Facebook, Instagram, Google, YouTube, and more. Omnipresence means when they scroll any platform, your brand is there — building familiarity and trust before they ever need your service.",
  },
  {
    icon: <Shield size={24} />,
    title: "Build Unshakeable Trust",
    desc: "Studies show people need 7–13+ touchpoints before making a buying decision. When prospects see your brand across paid ads, organic social, video content, and your website — they feel like they already know you.",
  },
  {
    icon: <Target size={24} />,
    title: "Dominate Your Market",
    desc: "While competitors fight over one channel, an omnipresent brand captures attention at every stage of the customer journey. The result? You become the obvious choice in your market.",
  },
];

const omnipresenceSteps = [
  {
    step: "01",
    title: "Paid Ads Put You in Front of New Customers",
    desc: "Targeted Facebook and Instagram campaigns introduce your brand to the right people at the right time — generating leads while building awareness across your market.",
  },
  {
    step: "02",
    title: "Professional Content Makes You Memorable",
    desc: "Cinematic video, polished photography, and scroll-stopping graphics ensure your brand looks world-class on every platform — so when people see you, they remember you.",
  },
  {
    step: "03",
    title: "Organic Social Keeps You Top of Mind",
    desc: "Consistent, on-brand posts keep your audience engaged between ad touchpoints. When they're ready to buy, you're the first name that comes to mind.",
  },
  {
    step: "04",
    title: "Retargeting Closes the Loop",
    desc: "People who visit your website, watch your videos, or engage with your posts see follow-up ads that bring them back — turning warm interest into paying customers.",
  },
];

export function OmnipresenceSection() {
  return (
    <Section variant="dark">
      <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to bottom right" />
      <RadialGlow color="#68ccd1" position="20% 40%" size="600px" opacity={0.035} />
      <div className="mx-auto max-w-5xl py-6">
        <SectionHeader
          eyebrow="The Omnipresence Advantage"
          title={<>Show up everywhere.{' '}<span className="text-[#68ccd1]">Get chosen every time.</span></>}
          description="The most successful brands don't rely on a single channel. They show up on every platform their customers use — consistently, professionally, and with a unified message. That's omnipresence marketing, and it's the single biggest competitive edge a business can build."
        />

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {omnipresenceCards.map((item, i) => (
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

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-[#68ccd1]/20 bg-[#080808] p-8 md:p-10"
        >
          <h3 className="mb-6 text-center font-heading text-xl font-bold text-white">
            How we build your omnipresent brand
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {omnipresenceSteps.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="font-heading text-3xl font-black text-[#68ccd1]/20">{item.step}</span>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-[#151515] p-5 text-center">
            <p className="text-sm text-white/60">
              <span className="font-bold text-[#68ccd1]">Omnipresence isn&apos;t about being loud — it&apos;s about being everywhere that matters.</span>{" "}
              When your brand shows up consistently across paid, organic, and content channels, you stop competing on price and start competing on trust.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/blog/omnipresence-marketing-strategy"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#68ccd1] transition-colors hover:text-[#7dd6da]"
          >
            Read: Why Omnipresence Is the Future of Local Marketing
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Section>
  );
}
