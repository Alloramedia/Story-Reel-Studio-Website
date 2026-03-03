"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const metaTimelineData = [
  {
    year: "2018",
    headline: "The Post-Cambridge Analytica Reset",
    highlights: [
      "Cambridge Analytica scandal forces Facebook to overhaul data privacy and ad targeting — advertisers lose some targeting options but the platform gets more trustworthy",
      "Facebook removes 5,000+ ad targeting options related to sensitive topics — forces advertisers to get creative with audience building",
      "Instagram Stories ads roll out to all advertisers — businesses discover Stories convert better than feed ads for many industries",
      "Facebook Pixel becomes essential — businesses that install proper tracking start seeing 2-3x better results than those guessing",
      "Video ads explode in effectiveness — Facebook's algorithm begins heavily favoring video content in the feed",
    ],
    insight:
      "The businesses that took tracking seriously in 2018 — installing the Pixel, building custom audiences, and running video — set the foundation for everything that followed. Those that didn't are still flying blind today.",
  },
  {
    year: "2019",
    headline: "The Rise of Automated Campaigns",
    highlights: [
      "Facebook launches Campaign Budget Optimization (CBO) — letting the algorithm allocate spend across ad sets automatically",
      "Dynamic creative testing arrives — advertisers can test multiple headlines, images, and CTAs in a single ad, and Facebook serves the best combo",
      "Messenger ads take off — businesses start generating leads directly through Facebook Messenger conversations",
      "Lookalike audiences become the gold standard — upload your customer list and Meta finds thousands of people just like them",
      "Cost per lead for local service businesses averages $15-30 — still affordable enough for small businesses to compete",
    ],
    insight:
      "2019 was the year Facebook's AI started doing the heavy lifting. Advertisers who trusted the algorithm and fed it good data saw costs drop. Those who micromanaged every detail got left behind.",
  },
  {
    year: "2020",
    headline: "Pandemic Boom — Everyone Goes Digital",
    highlights: [
      "COVID-19 sends every business to Facebook and Instagram ads — ad costs temporarily DROP as budgets pause, then surge as everyone pivots online",
      "E-commerce and local service businesses see record-breaking returns — people are home, scrolling, and buying",
      "Facebook Shops launches — turning business pages into full storefronts with checkout built in",
      "Instagram ad placements expand — Reels, Explore, and Shopping placements give advertisers more inventory at lower costs",
      "Retargeting becomes non-negotiable — businesses running retargeting campaigns see 3-5x higher conversion rates than cold traffic alone",
    ],
    insight:
      "The pandemic proved that Facebook and Instagram ads aren't optional for local businesses. Companies that pivoted fast and invested in digital advertising during 2020 built customer bases that are still paying dividends today.",
  },
  {
    year: "2021",
    headline: "iOS 14 Changes Everything",
    highlights: [
      "Apple's iOS 14.5 update introduces App Tracking Transparency — users can opt out of tracking, and 80%+ do",
      "Facebook loses access to massive amounts of conversion data — ad performance drops for unprepared advertisers",
      "Conversions API (CAPI) becomes critical — server-side tracking replaces browser-based tracking as the new standard",
      "Aggregated Event Measurement limits optimization to 8 events per domain — campaign structure matters more than ever",
      "CPMs rise 30-40% across the board — the easy, cheap lead era officially ends",
    ],
    insight:
      "iOS 14 was the biggest shake-up in Meta advertising history. Businesses with proper server-side tracking and first-party data barely flinched. Everyone else saw their campaigns fall apart overnight. This is when having a real media buyer became essential.",
  },
  {
    year: "2022",
    headline: "Meta's AI Rebuild — Advantage+ Era Begins",
    highlights: [
      "Meta launches Advantage+ Shopping Campaigns — fully automated campaigns that outperform manual setups for many advertisers",
      "Broad targeting makes a comeback — Meta's AI gets good enough that detailed interest targeting becomes less important than creative quality",
      "Reels ads launch globally — the cheapest ad placement on Meta with massive reach and engagement",
      "Meta rebuilds its conversion modeling — using AI to fill the tracking gaps left by iOS 14",
      "Creative quality becomes THE differentiator — the algorithm can optimize anything, but only if the ad itself is good",
    ],
    insight:
      "2022 was the year the game shifted from 'who can target the best audience' to 'who can make the best ads.' Meta's AI handles targeting now — your creative is what makes or breaks performance.",
  },
  {
    year: "2023",
    headline: "AI-Powered Everything",
    highlights: [
      "Meta introduces AI-generated ad creative tools — text variations, background generation, and image expansion built into Ads Manager",
      "Advantage+ campaigns expand beyond e-commerce — lead generation and awareness campaigns get the full AI treatment",
      "Cost per lead stabilizes as Meta's conversion modeling matures — advertisers see more consistent results post-iOS 14",
      "Meta verified for businesses launches — blue checkmarks for business pages, improving ad trust and deliverability",
      "Threads launches but lacks an ad platform — smart businesses claim their presence early for future organic and paid opportunities",
    ],
    insight:
      "Meta went all-in on AI in 2023, and advertisers who embraced it saw better results with less manual work. The old-school approach of dozens of ad sets with narrow targeting became officially obsolete.",
  },
  {
    year: "2024",
    headline: "The Creative-First Playbook",
    highlights: [
      "Ad creative volume becomes the #1 lever — top advertisers test 20-50 creative variations per month",
      "UGC-style ads consistently outperform polished brand creative — authenticity beats production value",
      "Meta's attribution modeling improves significantly — advertisers finally trust the platform's reported conversions again",
      "Lead form ads get major upgrades — conditional questions, richer forms, and CRM integrations make in-platform lead gen viable",
      "Average CPMs hit all-time highs — making efficient creative and strong landing pages more important than ever",
    ],
    insight:
      "By 2024, the winning formula was clear: feed Meta's AI with high-volume, authentic creative and let the algorithm do its thing. Businesses still running one ad with one audience were hemorrhaging money.",
  },
  {
    year: "2025",
    headline: "Full-Funnel Automation",
    highlights: [
      "Meta introduces end-to-end Advantage+ lead campaigns — from targeting to creative to follow-up, the AI handles the entire funnel",
      "AI-generated video ads become competitive with human-produced creative — but the best results come from combining both",
      "First-party data becomes king — businesses with strong email lists and customer databases see 40-60% lower acquisition costs",
      "Cross-platform attribution matures — Meta can now accurately show how Instagram and Facebook ads drive calls, store visits, and offline sales",
      "Ad costs continue rising — businesses without professional management waste more budget than ever on poorly optimized campaigns",
    ],
    insight:
      "2025 made it crystal clear: the gap between professionally managed Meta campaigns and DIY efforts is wider than ever. The platform's AI is incredibly powerful, but only if you know how to set it up, feed it the right data, and produce creative that converts.",
  },
  {
    year: "2026",
    headline: "Where Meta Ads Stand Today",
    highlights: [
      "Meta remains the #1 paid advertising platform for local service businesses — no other platform matches its combination of reach, targeting, and cost efficiency",
      "AI handles 80% of optimization — but strategy, creative production, and data infrastructure are what separate winners from losers",
      "Video-first ad creative dominates — Reels placements deliver the lowest CPMs and highest engagement across the platform",
      "Businesses spending $3,000-10,000/month on Meta ads with professional management consistently see 3-8x return on ad spend",
      "The 'DIY era' is over — with rising costs and AI complexity, businesses running their own ads are leaving money on the table",
    ],
    insight:
      "In 2026, Meta advertising is more powerful and more complex than ever. The businesses winning aren't the ones with the biggest budgets — they're the ones with the best creative, the cleanest data, and a professional team managing every dollar. That's exactly what we build for our clients.",
  },
];

export function MetaAdsTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5.75 top-0 bottom-0 w-px bg-linear-to-b from-[#68ccd1]/0 via-[#68ccd1]/40 to-[#68ccd1]/0 md:left-8" />

        {metaTimelineData.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="relative mb-3 flex items-start"
            >
              {/* Year dot */}
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#68ccd1] bg-[#0a2029] md:h-12 md:w-12">
                <span className="text-[10px] font-black text-[#68ccd1]">{item.year}</span>
              </div>

              {/* Content card */}
              <div className="ml-4 flex-1">
                <div
                  className={`w-full rounded-2xl border bg-[#0e2a35] px-5 py-4 text-left transition-colors ${
                    isOpen
                      ? "border-[#68ccd1]/40"
                      : "border-white/10 hover:border-[#68ccd1]/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-3"
                    aria-expanded={isOpen}
                    aria-controls={`meta-panel-${i}`}
                  >
                    <h3 className="font-heading text-base font-black text-white md:text-lg">
                      {item.headline}
                    </h3>
                    <svg
                      className={`h-4 w-4 shrink-0 text-[#68ccd1] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`meta-panel-${i}`}
                        role="region"
                        aria-labelledby={`meta-btn-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-2">
                          {item.highlights.map((point, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm leading-relaxed text-white/60"
                            >
                              <span className="mt-1 shrink-0 text-[#68ccd1]">&#8226;</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 rounded-xl bg-[#0a2029] p-4">
                          <p className="text-xs font-semibold uppercase tracking-widest text-[#68ccd1]/60">
                            Key Takeaway
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-white/55">
                            {item.insight}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
