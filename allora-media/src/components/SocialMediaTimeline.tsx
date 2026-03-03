"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timelineData = [
  {
    year: "2018",
    headline: "The Rise of Stories & IGTV",
    highlights: [
      "Instagram hits 1 billion users — businesses realize they NEED to be on the platform",
      "Instagram launches IGTV for long-form vertical video, pushing brands toward video content",
      "Facebook algorithm change crushes organic reach for business pages — pay-to-play era begins",
      "LinkedIn rolls out native video, opening B2B content marketing wide open",
      "TikTok (formerly Musical.ly) launches globally — most businesses completely ignore it",
    ],
    insight:
      "The businesses that adapted to Stories and started experimenting with video early built massive audiences while their competitors were still posting static images.",
  },
  {
    year: "2019",
    headline: "Engagement Over Vanity Metrics",
    highlights: [
      "Instagram tests hiding public like counts — shifting focus from vanity metrics to real engagement",
      "Facebook Groups become a core strategy for community-driven brands",
      "TikTok explodes with Gen Z — brands that get in early see insane organic reach",
      "LinkedIn becomes a content platform, not just a resume site — thought leadership takes off",
      "Influencer marketing matures — micro-influencers outperform celebrity endorsements",
    ],
    insight:
      "Smart businesses stopped chasing follower counts and started building genuine communities. The ones that didn't? They're still wondering why their 10K followers generate zero leads.",
  },
  {
    year: "2020",
    headline: "The Pandemic Shift — Digital or Die",
    highlights: [
      "COVID-19 forces every business online — social media becomes the primary customer touchpoint",
      "Instagram Reels launches to compete with TikTok — short-form video becomes mandatory",
      "Facebook Shops and Instagram Shopping turn social platforms into storefronts",
      "Live streaming usage surges 70%+ — businesses host virtual events, Q&As, and product launches",
      "Social media ad costs temporarily drop — early movers get unprecedented ROI",
    ],
    insight:
      "2020 separated the businesses that adapted from the ones that didn't. Companies that leaned into social media during the pandemic came out stronger. The rest lost years of ground they're still trying to make up.",
  },
  {
    year: "2021",
    headline: "The Creator Economy Explodes",
    highlights: [
      "TikTok surpasses 1 billion users — even B2B brands start paying attention",
      "Instagram prioritizes Reels in the algorithm — static posts lose reach dramatically",
      "Clubhouse launches and dies, but audio content awareness grows (Twitter Spaces, LinkedIn Audio)",
      "Facebook rebrands to Meta — signals the long-term bet on immersive social experiences",
      "Creator funds launch across platforms — social media becomes a legitimate career path",
    ],
    insight:
      "The algorithm made its preference crystal clear: video > everything else. Businesses that pivoted to Reels and short-form video saw 2-3x the reach of those still posting carousels and photos.",
  },
  {
    year: "2022",
    headline: "Short-Form Video Dominance",
    highlights: [
      "TikTok becomes the most visited website in the world — surpassing Google",
      "YouTube Shorts hits 1.5 billion monthly users — every platform now has short-form video",
      "BeReal launches and fades, but authenticity trend permanently shifts content expectations",
      "LinkedIn algorithm rewards personal stories and authentic content over corporate jargon",
      "Social commerce revenue exceeds $700 billion globally — social media IS a sales channel",
    ],
    insight:
      "If your business wasn't producing short-form video by 2022, you were already behind. The platforms made it non-negotiable — video content gets distributed, everything else gets buried.",
  },
  {
    year: "2023",
    headline: "AI Enters the Chat",
    highlights: [
      "ChatGPT and AI tools transform content creation — businesses produce more content, faster",
      "Instagram Threads launches as a Twitter/X competitor — brands scramble to claim handles",
      "Twitter rebrands to X under Elon Musk — advertisers flee and organic reach becomes unpredictable",
      "AI-generated content floods platforms — authentic, human content becomes the differentiator",
      "TikTok Shop launches in the US — social commerce goes from trend to mainstream",
    ],
    insight:
      "AI leveled the content creation playing field, but it also created a flood of generic content. The businesses that won were the ones using AI as a tool while keeping their content authentic and human.",
  },
  {
    year: "2024",
    headline: "Authenticity & Community Win",
    highlights: [
      "Algorithm updates across all platforms reward genuine engagement over viral tricks",
      "User-generated content (UGC) and employee-generated content outperform polished brand content",
      "Social media surpasses 5 billion users globally — more than half the world's population",
      "DM-based marketing and private communities become the highest-converting channels",
      "Platforms crack down on engagement bait — real value-driven content rises to the top",
    ],
    insight:
      "The era of growth hacking social media died. Algorithms got smarter, users got pickier, and the only businesses growing were the ones creating genuinely valuable content for real communities.",
  },
  {
    year: "2025",
    headline: "Video-First Everything",
    highlights: [
      "AI-powered video editing tools make professional-quality content accessible to every business",
      "Instagram and TikTok push long-form video again — 3-10 minute videos see massive reach",
      "Social search overtakes traditional search for Gen Z and Millennials — people search TikTok and Instagram before Google",
      "LinkedIn becomes the dominant B2B content platform — personal brands drive business growth",
      "Social media advertising costs hit all-time highs — strong organic presence becomes a competitive moat",
    ],
    insight:
      "With ad costs skyrocketing, businesses with strong organic social presences started outperforming competitors who relied solely on paid media. Organic social went from 'nice to have' to 'survival strategy.'",
  },
  {
    year: "2026",
    headline: "Where We Are Now",
    highlights: [
      "Social media is the #1 channel for brand discovery, trust-building, and customer acquisition",
      "AI handles content optimization and scheduling — but human creativity and authenticity drive results",
      "Short-form AND long-form video coexist — platform algorithms reward consistency above all",
      "Social commerce is projected to exceed $1 trillion — your social profile IS your storefront",
      "Businesses without an active social presence are invisible — it's the new 'not having a website'",
    ],
    insight:
      "We're past the point of debating whether social media matters. In 2026, your social media presence IS your brand. The businesses that invest in professional, consistent content aren't just winning — they're the only ones their customers can find.",
  },
];

export function SocialMediaTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5.75 top-0 bottom-0 w-px bg-linear-to-b from-[#68ccd1]/0 via-[#68ccd1]/40 to-[#68ccd1]/0 md:left-8" />

        {timelineData.map((item, i) => {
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
                    aria-controls={`social-panel-${i}`}
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
                        id={`social-panel-${i}`}
                        role="region"
                        aria-labelledby={`social-btn-${i}`}
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
