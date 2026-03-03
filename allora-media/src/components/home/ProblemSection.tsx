"use client";

import { Search, Eye, Target } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { Section, SectionHeader } from "@/components/Section";
import { AngleDivider, GradientOverlay } from "@/components/SectionTextures";

const problems = [
  {
    icon: <Search size={24} />,
    problem: "You can't tell what's working",
    detail:
      "You're spending money on ads or content but have no way to track which efforts are actually bringing in leads and customers.",
  },
  {
    icon: <Eye size={24} />,
    problem: "Your content isn't generating business",
    detail:
      "Likes and followers look nice, but they're not turning into phone calls, form fills, or paying customers.",
  },
  {
    icon: <Target size={24} />,
    problem: "You don't have time to figure it all out",
    detail:
      "Running Facebook Ads, shooting video, managing social media, analyzing data — that's a full-time job you don't have time for.",
  },
];

export function ProblemSection() {
  return (
    <>
      <AngleDivider variant="notch" fill="#080808" from="#68ccd1" />
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.04)" to="transparent" direction="to bottom" />
        <SectionHeader
          eyebrow="Sound Familiar?"
          title="Tired of spending money on content that doesn't work?"
          description="You've tried posting on social media. Maybe you've boosted a few posts or hired a freelancer. But the phone isn't ringing any more than it was before — and you have no idea what's actually bringing in customers. You're not alone. Here's why most businesses struggle:"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, i) => (
            <TiltCard key={i} tiltIntensity={6} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#151515] p-7 hover-lift gradient-border-card border-glow">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-white">
                  {item.problem}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {item.detail}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>
    </>
  );
}
