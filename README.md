# Allora Media Website

**Performance-driven marketing through paid growth strategy, authority media production, and disciplined execution.**

This is the source code for [www.alloramedia.us](https://www.alloramedia.us) — a Next.js marketing website rebuilt from the ground up to reposition Allora Media as a performance-driven media and paid growth partner.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Analytics | Google Analytics 4 (via `@next/third-parties`) |
| Fonts | Geist Sans + Geist Mono (via `next/font`) |

## Project Structure

```
allora-media/
├── public/
│   ├── images/              # Placeholder images (replace with real assets)
│   └── og-image.jpg         # Open Graph image
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout (Header, Footer, GA4, structured data)
│   │   ├── page.tsx          # Home page
│   │   ├── HomeClient.tsx    # Home page client component
│   │   ├── sitemap.ts       # Dynamic sitemap
│   │   ├── robots.ts        # Robots.txt
│   │   ├── growth-systems/  # Primary pillar — Paid Growth / Meta Ads
│   │   ├── media-production/# Pillar — Video, Photo, Creative
│   │   ├── organic-social/  # Support pillar — Organic presence
│   │   ├── case-studies/    # Results / case studies with industry filters
│   │   ├── about/           # Operator story + approach
│   │   ├── process/         # Discovery → Strategy → Production → Launch → Optimize → Review
│   │   ├── contact/         # Lead intake form
│   │   ├── client-portal/   # Portal info + login link
│   │   ├── personal/        # Personal content (footer only)
│   │   ├── industries/[slug]/ # SEO landing pages by industry
│   │   ├── services/[slug]/   # SEO landing pages by service type
│   │   └── api/contact/     # Contact form API route
│   ├── components/
│   │   ├── Header.tsx       # Sticky header with mobile nav
│   │   ├── Footer.tsx       # Full footer with all links
│   │   ├── CTASection.tsx   # Reusable CTA block
│   │   ├── PillarCard.tsx   # Service pillar card
│   │   ├── CaseStudyCard.tsx# Case study card (Problem → Approach → Outcome)
│   │   ├── FAQAccordion.tsx # Animated FAQ accordion
│   │   ├── TestimonialCarousel.tsx # Client testimonial carousel
│   │   ├── MetricsStrip.tsx # Credibility metrics bar
│   │   ├── Section.tsx      # Animated section wrapper + header
│   │   └── StructuredData.tsx # LocalBusiness, Service, FAQ schema
│   └── lib/
│       ├── constants.ts     # Site config, nav links, footer links
│       ├── utils.ts         # cn() utility
│       ├── case-studies-data.ts  # Case study content
│       ├── industries-data.ts    # Industry page content
│       └── services-data.ts      # Service page content
├── redirects.json           # Legacy URL → new URL mapping
├── next.config.ts           # Next.js config with redirects
├── .env.example             # Environment variable template
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
cd allora-media
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (e.g., `G-XXXXXXXXXX`) |
| `CONTACT_EMAIL` | Email address for contact form submissions |

## Information Architecture

### Core Pages
| Route | Purpose |
|-------|---------|
| `/` | Home — paid-first hero, problem statement, three pillars, case studies, process, portal, CTA |
| `/growth-systems` | **Primary pillar** — Meta paid campaigns, tracking, optimization, FAQ |
| `/media-production` | Pillar — Video, photo, creative production for conversion |
| `/organic-social` | Support pillar — Organic presence as trust + retargeting layer |
| `/case-studies` | Results with industry filters |
| `/about` | Operator story, values, ideal client profile |
| `/process` | 6-step process: Discovery → Strategy → Production → Launch → Optimization → Review |
| `/contact` | Lead intake form with budget range and help type |
| `/client-portal` | Portal explainer + login link to Allora Media Hub |

### SEO Landing Pages
| Route Pattern | Content |
|---------------|---------|
| `/industries/[slug]` | Industry-specific marketing pages (construction, home-services, food-beverage, beauty-retail, professional-services) |
| `/services/[slug]` | Service-specific pages (tv-commercials, testimonial-videos, drone-content, corporate-photography, product-shoots, graphic-design) |

### De-emphasized
| Route | Purpose |
|-------|---------|
| `/personal` | Personal content (linked from footer only) |

## Redirects

Legacy URLs from the previous Duda site are mapped in `redirects.json` and automatically handled by Next.js. Key redirects:

- `/social-media-marketing` → `/organic-social`
- `/meta-ad-management` → `/growth-systems`
- `/business-solutions/video-production` → `/media-production`
- `/business-solutions` → `/growth-systems`
- `/about-us` → `/about`

## SEO Features

- **Per-page metadata** — Title, description, OpenGraph, Twitter cards
- **Dynamic sitemap** — Auto-generates from all static + dynamic routes
- **robots.txt** — Allows all except `/api/`
- **Structured data** — LocalBusiness schema (global), Service schema, FAQ schema
- **Image optimization** — AVIF/WebP via `next/image`

## Design System

- **Typography**: Geist Sans (body), Geist Mono (accents)
- **Colors**: Dark accent (#1a1a2e) + light background (#fafafa) palette
- **Spacing**: Consistent section padding (py-20/py-28)
- **Components**: Rounded-2xl cards, pill buttons, animated sections
- **Animation**: Subtle fade/slide with Framer Motion on viewport entry
- **Responsive**: Mobile-first, optimized for iPhone and tablet

## Contact Form

The contact form submits to `/api/contact` which currently logs submissions to the console. To integrate with an email service:

1. Choose a provider (SendGrid, Resend, AWS SES, etc.)
2. Install the SDK
3. Update `src/app/api/contact/route.ts` with the email sending logic
4. Set credentials via environment variables

## Deployment

Optimized for deployment on:
- **Vercel** (recommended) — zero-config with Next.js
- **Netlify** — with `@netlify/plugin-nextjs`
- **AWS Amplify** — with Next.js adapter
- **Docker** — use `next start` after `next build`

## Acceptance Criteria

- [x] New information architecture implemented with all specified routes
- [x] No post-count or "X posts per week" language anywhere
- [x] Paid Growth clearly positioned as primary service
- [x] Client portal positioned as transparency differentiator (not SaaS product)
- [x] All copy is complete and consistent in tone
- [x] Mobile-first responsive design
- [x] Lighthouse 90+ target via best practices (SSR, image opt, font opt)
- [x] Redirect map provided (redirects.json)
- [x] Structured data (LocalBusiness + Service + FAQ schemas)
- [x] Sitemap + robots.txt
- [x] Google Analytics 4 support via environment variable
- [x] Contact form with API route

## License

Private — Allora Media. All rights reserved.
