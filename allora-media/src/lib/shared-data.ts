/**
 * Shared data used across multiple components and pages.
 * Centralised here to avoid duplication and ensure consistency.
 */

/* ------------------------------------------------------------------ */
/*  Trusted client logos (marquee strip)                               */
/* ------------------------------------------------------------------ */
export interface TrustedLogo {
  file: string;
  name: string;
}

export const trustedLogos: TrustedLogo[] = [
  { file: "trusted-logo-telly.png", name: "Telly Awards" },
  { file: "trusted-logo-rmhc.png", name: "Ronald McDonald House Charities" },
  { file: "trusted-logo-movember.png", name: "Movember Foundation" },
  { file: "trusted-logo-adweek.png", name: "Adweek" },
  { file: "clients/telly-awards.png", name: "Telly Gold Winner" },
  { file: "awards/telly-gold-winner.png", name: "44th Telly Awards" },
];

/* ------------------------------------------------------------------ */
/*  Google reviews displayed across the site                           */
/* ------------------------------------------------------------------ */
export interface GoogleReviewItem {
  name: string;
  date: string;
  text: string;
}

export const googleReviews: GoogleReviewItem[] = [
  {
    name: "Alexa Orban",
    date: "2024",
    text: "Over the past 6 months Luke & his team have transformed our brand with the corporate videos they\u2019ve created. His team has a keen eye for video production, even taking the time to research and create briefs, storyboards, and questions that align perfectly with the goal of the project!",
  },
  {
    name: "Andrea Pace",
    date: "2024",
    text: "We were absolutely blown away after seeing Luke\u2019s short film for the first time. The radical extreme of the challenge involved and the epic visual storytelling helped to bring much awareness and attention to such an important cause: Men\u2019s Mental Health. The response from the entire Movember community has been incredible.",
  },
  {
    name: "Anne Nelson",
    date: "2024",
    text: "Collaborating with Story Real on our video projects was a game-changer. Their full-service dedication, prompt responsiveness, and a constant flow of creative ideas resulted in videos that not only told our brand story effectively and boosted product sales but also played a pivotal role in aligning our content with our company\u2019s comprehensive rebranding.",
  },
  {
    name: "Derek Tian",
    date: "2024",
    text: "It was great working with Luke and the Story Real Studios team on the production of the Traveler Suit Commercial Campaign. They worked hard to accommodate our brand messaging & content needs and executed a complex project on time and within budget. The end result was a polished video ad campaign that resulted in a sustained decrease in our Cost Per Acquisition.",
  },
  {
    name: "Cathy Bignolas",
    date: "2024",
    text: "This past year, The Story Real Studios team partnered with our houses to create heartwarming fundraising films, focusing on the real authentic stories of the families who stay with us. Their empathetic approach to storytelling allowed our families to feel comfortable sharing their struggles, story & triumphs on camera.",
  },
];

/* ------------------------------------------------------------------ */
/*  Featured case studies used on home & testimonial pages             */
/* ------------------------------------------------------------------ */
export interface FeaturedCaseStudy {
  title: string;
  industry: string;
  result: string;
  metric: string;
  metricLabel: string;
  image: string;
  href: string;
}

export const featuredCaseStudies: FeaturedCaseStudy[] = [
  {
    title: "Cybin Inc.",
    industry: "Health & Biotech",
    result:
      "100+ videos helped a biotech startup achieve a $124M NYSE valuation and 250% team growth",
    metric: "100+",
    metricLabel: "Videos Created",
    image: "/images/cybin-biotech.jpg",
    href: "/case-studies/cybin-biotech-video-production",
  },
  {
    title: "POWR2",
    industry: "Manufacturing",
    result:
      "20+ strategic videos tripled LinkedIn audience and fueled tens of thousands of units sold",
    metric: "20+",
    metricLabel: "Videos Produced",
    image: "/images/powr2-manufacturing.jpg",
    href: "/case-studies/powr2-industrial-video-production",
  },
  {
    title: "Ronald McDonald House Charities",
    industry: "Nonprofit",
    result:
      "30+ documentary-style fundraising films capturing authentic family stories for RMHC of CT & Western MA",
    metric: "30+",
    metricLabel: "Videos Produced",
    image: "/images/rmhc-nonprofit.jpg",
    href: "/case-studies/ronald-mcdonald-house-charities",
  },
];

/* ------------------------------------------------------------------ */
/*  Testimonial carousel data                                          */
/* ------------------------------------------------------------------ */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Over the past 6 months Luke & his team have transformed our brand with the corporate videos they\u2019ve created. His team has a keen eye for video production, even taking the time to research and create briefs, storyboards, and questions that align perfectly with the goal of the project!",
    author: "Alexa Orban",
    role: "Senior Communications Manager, Cybin Inc.",
  },
  {
    quote:
      "We were absolutely blown away after seeing Luke\u2019s short film for the first time. The radical extreme of the challenge involved and the epic visual storytelling helped to bring much awareness and attention to such an important cause: Men\u2019s Mental Health.",
    author: "Andrea Pace",
    role: "The Movember Foundation",
  },
  {
    quote:
      "Collaborating with Story Real on our video projects was a game-changer. Their full-service dedication, prompt responsiveness, and a constant flow of creative ideas resulted in videos that not only told our brand story effectively and boosted product sales but also played a pivotal role in aligning our content with our company\u2019s comprehensive rebranding.",
    author: "Anne Nelson",
    role: "Marketing Director, POWR2",
  },
  {
    quote:
      "It was great working with Luke and the Story Real Studios team on the Traveler Suit Commercial Campaign. They executed a complex project on time and within budget. The end result was a polished video ad campaign that resulted in a sustained decrease in our Cost Per Acquisition.",
    author: "Derek Tian",
    role: "Founder, Black Lapel",
  },
  {
    quote:
      "This past year, The Story Real Studios team partnered with our houses to create heartwarming fundraising films, focusing on the real authentic stories of the families who stay with us. Their empathetic approach to storytelling allowed our families to feel comfortable sharing their struggles, story & triumphs on camera.",
    author: "Cathy Bignolas",
    role: "Global Marketing Director, RMHC",
  },
];
