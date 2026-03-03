# Story Real Studios — Migration Notes

## Template Origin
- **Original template**: Allora Media (alloramedia.us) — a Southington, CT marketing agency
- **New brand**: Story Real Studios (storyreal.co) — strategy-led video production company

## What Changed

### Brand & Identity
- All references to "Allora Media" → "Story Real Studios"
- Domain: alloramedia.us → storyreal.co
- Email: hello@alloramedia.us → hello@storyreal.co
- Positioning: generic marketing agency → strategy-led video + content campaign partner
- No personal names from original template remain (Jared, Chelsie, etc.)

### Color Scheme
- Primary accent: #65B207 (green) → #c8a97e (warm gold)
- Secondary: #7acc09 → #d4b88e
- Highlight: #9be63a → #e8d5b5
- Dark card backgrounds: #131E13 → #151515
- Dark card alt: #1a2a1a → #1a1a1a

### Typography
- Headings: Red Hat Display → Playfair Display (serif)
- Body: Red Hat Text → Inter (sans-serif)

### Information Architecture
Old routes removed:
- /paid-media
- /media-production
- /video-production
- /organic-social
- /client-portal
- /personal
- /blog
- /case-studies

New routes added:
- /strategy (pillar)
- /production (pillar)
- /deployment (pillar)
- /services (overview + 9 dynamic slugs)
- /work (replaces /case-studies, 6 case studies)
- /industries (6 dynamic slugs)
- /about (rebuilt)
- /process (rebuilt)
- /pricing (new)
- /studio (new — rental + podcast production)
- /contact (rebuilt with qualified lead form)
- /locations (3 slugs: connecticut, new-york, new-jersey)

### Data Files (all rewritten from scratch)
- `src/lib/constants.ts` — siteConfig, navLinks, footerLinks, credibilityStats
- `src/lib/shared-data.ts` — logos, reviews, featured case studies, testimonials
- `src/lib/case-studies-data.ts` — 6 case studies
- `src/lib/services-data.ts` — 9 services
- `src/lib/industries-data.ts` — 6 industries
- `src/lib/blog-data.ts` — empty placeholder

### Components
- `Header.tsx` — rebuilt (text logo, gold accent, new nav structure)
- `Footer.tsx` — rebuilt (6 columns, gold accent, Story Real branding)
- `CTASection.tsx` — updated defaults and colors
- `StructuredData.tsx` — updated logo references, expanded areaServed to CT/NY/NJ

### SEO
- `sitemap.ts` — all routes updated to storyreal.co
- `robots.ts` — domain updated to storyreal.co
- `redirects.json` — maps all old routes to new routes (301 permanent)

### API
- `api/contact/route.ts` — allowed origins updated, form fields expanded for qualified lead intake

## Remaining Template Artifacts to Watch For
- `package.json` name field still says "allora-media"
- Image files in /public/images/ are from original template (need real assets)
- Video files in /public/videos/ are from original template
- GoHighLevel (GHL) webhook URL in env vars — may need new CRM integration
- Google Analytics / consent components reference original tracking codes
- ElfsightWidget component may reference old widget IDs
- `not-found.tsx`, `loading.tsx`, `error.tsx`, `template.tsx` — check for template branding
- `website-policies/page.tsx` — legal copy needs attorney review for new brand

## Environment Variables Needed
- `GHL_WEBHOOK_URL` — CRM webhook endpoint for contact form submissions
- Google Analytics tracking ID in consent component
