"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Video,
  Share2,
  LineChart,
  CheckCircle,
} from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { Section, SectionHeader } from "@/components/Section";
import {
  AngleDivider,
  EdgeAccentStripe,
  GradientOverlay,
  RadialGlow,
} from "@/components/SectionTextures";

const pillars = [
  {
    icon: <BarChart3 size={22} />,
    title: "Paid Advertising That Brings In Leads",
    desc: "We run and manage your Facebook and Instagram ad campaigns — targeting the right people, testing what works, and tracking every lead back to the ad that brought them in.",
  },
  {
    icon: <Video size={22} />,
    title: "Professional Video & Photo Content",
    desc: "We produce the videos, photos, and graphics your business needs — from testimonials and drone footage to product shots and social content.",
  },
  {
    icon: <Share2 size={22} />,
    title: "Social Media That Backs It Up",
    desc: "Consistent, professional posts across your platforms that build trust and keep your brand top of mind between ad touchpoints.",
  },
  {
    icon: <LineChart size={22} />,
    title: "Monthly Reporting You Can Understand",
    desc: "Every month we sit down and show you what we spent, how many leads came in, what it cost per lead, and what we're changing next. No jargon.",
  },
];

export function ApproachSection() {
  return (
    <>
      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="right" width="5%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <RadialGlow color="#65B207" position="90% 20%" size="600px" opacity={0.04} />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            variant="light"
            eyebrow="How We Solve It"
            title="Everything you need. One team. Zero guesswork."
            description="Instead of hiring separate freelancers for ads, video, photography, and social media — then trying to tie it all together yourself — you get one team that handles everything and shows you exactly what's working every month."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="h-full"
              >
                <TiltCard tiltIntensity={5} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#080808] p-7 hover-lift border-l-4 border-l-[#65B207]">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#65B207]/10 text-[#65B207]">
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
    </>
  );
}

/* ── Content is King section ── */

const contentStats = [
  {
    stat: "2.5 hrs",
    label: "Average daily social media time per person (DataReportal)",
    detail: "Your customers are already scrolling. The only question is whether they see YOU or your competitor.",
  },
  {
    stat: "90%",
    label: "Of businesses use social media for marketing (Statista)",
    detail: "If you're not actively showing up on social, you're invisible in an arena where everyone else is competing.",
  },
  {
    stat: "72%",
    label: "Of consumers prefer video over text for learning about products (HubSpot)",
    detail: "Video builds trust faster than any other medium. People buy from businesses they can see, hear, and connect with.",
  },
  {
    stat: "54%",
    label: "Of social browsers use social media to research products (GWI)",
    detail: "More than half of all social media users are actively researching businesses just like yours. Right now.",
  },
];

const contentAdvantages = [
  {
    icon: <Video size={24} />,
    title: "Video Dominates Everything",
    desc: "Video gets 1200% more shares than text and images combined. Businesses using video grow revenue 49% faster than those that don't.",
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Attention = Revenue",
    desc: "The businesses that capture attention on social media capture market share. Your competitors who post consistently are taking your customers while you wait.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Compound Growth Effect",
    desc: "Every piece of content you create works 24/7. Unlike a billboard that expires, social content compounds — building trust, audiences, and leads over time.",
  },
];

export function ContentIsKingSection() {
  return (
    <>
      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" flip />
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to top left" />
        <RadialGlow color="#65B207" position="10% 50%" size="500px" opacity={0.03} />
        <SectionHeader
          eyebrow="The Shift Has Already Happened"
          title={<>Social media and content are king.{' '}<span className="block text-[#65B207]">And it&apos;s not even close.</span></>}
          description="Your customers don't open the Yellow Pages anymore. They scroll Instagram. They watch videos. They check your socials before they ever pick up the phone. The businesses that own social media and content are the ones winning — and the gap is only getting wider."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contentStats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-[#080808] p-6 text-center h-full flex flex-col hover-lift"
            >
              <p className="font-heading text-4xl font-black text-[#65B207]">
                {item.stat}
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {item.label}
              </p>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-white/40">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 mx-auto max-w-4xl"
        >
          <div className="rounded-2xl border border-[#65B207]/20 bg-[#080808] p-8 md:p-10">
            <h3 className="text-center font-heading text-xl font-bold text-white md:text-2xl mb-6">
              Content isn&apos;t optional anymore. It&apos;s the #1 competitive advantage.
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {contentAdvantages.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#65B207]/10 text-[#65B207]">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-white/55">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm font-bold text-[#65B207]">
                The bottom line: businesses that invest in social media and content aren&apos;t just marketing — they&apos;re building an unfair advantage that competitors can&apos;t replicate overnight.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
