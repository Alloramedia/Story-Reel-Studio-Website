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
  { file: "trusted-logo-1.png", name: "Sauced" },
  { file: "trusted-logo-2.jpg", name: "Hot Taco" },
  { file: "trusted-logo-3.png", name: "Artisan Building & Remodeling" },
  { file: "trusted-logo-4.png", name: "Micro Creamery" },
  { file: "trusted-logo-5.jpg", name: "Beaver Tree Service" },
  { file: "trusted-logo-6.png", name: "Network" },
  { file: "trusted-logo-7.jpeg", name: "Fresh Greens & Proteins" },
  { file: "trusted-logo-8.png", name: "The Sunset Grille" },
  { file: "trusted-logo-9.png", name: "Casey Electrical Services" },
  { file: "trusted-logo-10.webp", name: "California Dreamin Tanning" },
  { file: "trusted-logo-11.png", name: "A1 Home Improvement" },
  { file: "trusted-logo-12.webp", name: "Anthony's Abatement" },
  { file: "trusted-logo-grasso.png", name: "Grasso" },
  { file: "trusted-logo-mra.png", name: "MRA Recycling & Aggregates" },
  { file: "trusted-logo-twinshores.png", name: "Twin Shores" },
  { file: "trusted-logo-jctonnotti.jpg", name: "JC Tonnotti" },
  { file: "trusted-logo-19200.png", name: "19200 Banquets" },
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
    name: "Josh Casey",
    date: "May 2024",
    text: "Jared does all of my social media work for my company Casey Electrical Services. He\u2019s always available and always ready to do whatever, whether it\u2019s a company event, meeting, the beginning of a project and all steps after that. This allows me to spend more time to work on my business and has allowed me to grow tremendously.",
  },
  {
    name: "Morgan Bizeau",
    date: "Jun 2024",
    text: "We Love Allora! I am the Director of Marketing for a local Roofing contractor and Jared and his entire team have been amazing and incredibly attentive and helpful in handling our social media accounts. He has taken phenomenal photos and truly has been a blessing for our company.",
  },
  {
    name: "Kendall Hils",
    date: "Oct 2023",
    text: "Hiring Jared back in March 2023 has been one of the best decisions I\u2019ve ever made! It has been a weight off my shoulders not having to handle any social media platforms for my business. He is professional, laid-back, easy to communicate. He genuinely wants to help your business grow!",
  },
  {
    name: "Stephanie Fontano",
    date: "Sep 2024",
    text: "I shared inspo pictures with Chelsie for a branding shoot, and she brought my vision to life \u2014 and enhanced it tenfold! I\u2019m so happy with how quick and amazing my pictures came out. I would HIGHLY recommend her to anyone looking for professional, high-quality pictures.",
  },
  {
    name: "Meg Riel",
    date: "Jun 2024",
    text: "Highly recommend Allora Media!! I had them for a brew fest and couldn\u2019t be happier with the results. Got so much content from the event. Got great slow motion videos that I can speed up if needed. Sent everything over very soon after the event.",
  },
  {
    name: "Leann Tonnotti",
    date: "2025",
    text: "Our family business has been working with Allora for almost a year now & they have truly elevated our social media presence! They follow thru, their work is impeccable, and truly are such a great group of people to work with. An eye for design and professionalism all the way!",
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
    title: "Casey Electrical Services",
    industry: "Construction",
    result:
      "Went from zero digital presence to a predictable lead pipeline \u2014 with 3x the lead volume in 60 days",
    metric: "3x",
    metricLabel: "Lead Volume",
    image: "/images/casey-electrical-services.jpg",
    href: "/case-studies/casey-electrical-services",
  },
  {
    title: "Artisan Building & Remodeling",
    industry: "Construction",
    result:
      "7.3 million impressions on $24K ad spend in 12 months — $0.60 CPC made Artisan impossible to miss across Connecticut",
    metric: "7.3M+",
    metricLabel: "Impressions",
    image: "/images/artisan-building-remodeling.jpg",
    href: "/case-studies/artisan-building-and-remodeling",
  },
  {
    title: "Hot Taco",
    industry: "Restaurant & Food",
    result:
      "Social media became a revenue channel \u2014 new customer acquisition up 85% in the first quarter",
    metric: "85%",
    metricLabel: "More New Customers",
    image: "/images/hot-taco.jpg",
    href: "/case-studies/hot-taco",
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
      "Before Allora, we were running on referrals and hoping the phone would ring. Now we have a real pipeline \u2014 we can actually see where our leads come from and plan around it. Total game changer for us.",
    author: "Casey Electrical Services",
    role: "Construction",
  },
  {
    quote:
      "The content quality is on another level. Prospects see our project videos and drone footage before we even meet \u2014 they show up already sold on our craftsmanship. That never happened before.",
    author: "Artisan Building & Remodeling",
    role: "Construction",
  },
  {
    quote:
      "Allora took our social media from something we ignored to our single biggest lead source. Professional, no-nonsense, and they actually track the numbers so we know it\u2019s working.",
    author: "A1 Home Improvement",
    role: "Construction",
  },
  {
    quote:
      "They understood our industry \u2014 abatement isn\u2019t easy to market, but Allora built content that communicates trust and professionalism. The leads we get now are higher quality than anything we\u2019ve seen.",
    author: "Anthony\u2019s Abatement",
    role: "Construction",
  },
  {
    quote:
      "Our social media actually drives people through the door now. Allora built a system \u2014 not just pretty posts \u2014 and we can see the results in our numbers every month.",
    author: "Hot Taco",
    role: "Restaurant & Food",
  },
];
