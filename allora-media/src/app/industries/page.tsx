import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  TrendingUp,
  Briefcase,
  Building2,
  Wrench,
  UtensilsCrossed,
  Sparkles,
  Scale,
} from "lucide-react";
import { industryData, getAllIndustrySlugs } from "@/lib/industries-data";
import { BreadcrumbSchema, FAQSchema } from "@/components/StructuredData";
import { CTASection } from "@/components/CTASection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { Section, SectionHeader } from "@/components/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  AngleDivider,
  EdgeAccentStripe,
  GradientOverlay,
  RadialGlow,
} from "@/components/SectionTextures";
import { GoogleLogo } from "@/components/GoogleLogo";
import { googleReview, credibilityStats } from "@/lib/constants";

/* ── SEO-rich metadata ── */
export const metadata: Metadata = {
  title: "Industry-Specific Marketing in Connecticut — Allora Media",
  description:
    "Allora Media delivers industry-specific paid advertising and media production for construction, home services, restaurants, beauty & retail, and professional services in Connecticut. Explore strategies built for how your customers actually buy.",
  alternates: {
    canonical: "https://www.alloramedia.us/industries",
  },
  openGraph: {
    title: "Industry-Specific Marketing in Connecticut — Allora Media",
    description:
      "Paid social advertising & professional media production tailored to construction, home services, restaurants, beauty, and professional services across Connecticut.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  keywords: [
    "Connecticut marketing agency",
    "industry marketing CT",
    "construction marketing Connecticut",
    "home services advertising CT",
    "restaurant marketing agency",
    "beauty salon marketing",
    "professional services marketing",
    "paid social ads Connecticut",
  ],
};

/* ── icon mapping per slug ── */
const industryIcons: Record<string, React.ReactNode> = {
  construction: <Building2 size={28} />,
  "home-services": <Wrench size={28} />,
  "food-beverage": <UtensilsCrossed size={28} />,
  "beauty-retail": <Sparkles size={28} />,
  "professional-services": <Scale size={28} />,
};

/* ── cross-industry FAQs for SEO ── */
const industriesFaqs = [
  {
    question: "What industries does Allora Media work with?",
    answer:
      "We specialize in five core industries: construction & general contracting, home services (HVAC, plumbing, electrical, landscaping), food & beverage (restaurants, cafes, bars), beauty & retail (salons, med spas, boutiques), and professional services (law firms, accounting, financial advisors). Each industry gets a custom strategy — not a recycled template.",
  },
  {
    question: "How does industry-specific marketing differ from generic marketing?",
    answer:
      "Generic agencies apply the same playbook to every client. We build campaigns around how YOUR customers actually search, evaluate, and buy. A homeowner choosing an HVAC company behaves completely differently from someone picking a restaurant or hiring a lawyer. Our targeting, creative, and conversion strategy change for each.",
  },
  {
    question: "Do you only work with businesses in Connecticut?",
    answer:
      "Our headquarters is in Connecticut and the majority of our clients are CT-based, but we also work with businesses across the Northeast. Our geo-targeting systems work in any market.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients receive their first leads within 2–4 weeks of campaign launch. The quality and volume of leads improve significantly over the first 90 days as we optimize targeting, creative, and audiences based on real data.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "We start with a free Growth Blueprint Call where we audit your current marketing, research your local market, and present a clear plan. From there, we handle everything — media production, ad creation, campaign management, and monthly performance reviews. No long-term contracts required.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Monthly investment varies by industry and market size. Most clients invest between $2,000 and $8,000 per month in ad spend plus management fees. We'll recommend a budget during your free Growth Blueprint Call based on your goals and competitive landscape.",
  },
];

export default function IndustriesPage() {
  const slugs = getAllIndustrySlugs();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
        ]}
      />
      <FAQSchema faqs={industriesFaqs} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative bg-[#131E13] pt-32 pb-20 md:pt-40 md:pb-28 noise-texture overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(101,178,7,0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#65B207]">
            Industry-Specific Marketing
          </p>
          <h1 className="font-heading text-4xl font-black leading-[1.1] text-white md:text-5xl lg:text-6xl">
            Your industry has rules.
            <br className="hidden sm:block" />
            <span className="text-[#65B207]"> We know how to break through.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Every industry has a different buying cycle, different objections, and
            different competition. Generic marketing ignores that — we don&apos;t. Allora
            Media builds paid advertising and media production strategies tailored
            to how <em>your</em> customers actually discover, evaluate, and choose
            businesses like yours in Connecticut.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#65B207] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#65B207]/20 transition-all hover:scale-[1.03] hover:bg-[#7acc09]"
            >
              Book a Free Growth Blueprint Call
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/5"
            >
              See Case Studies
            </Link>
          </div>

          {/* Trust mini-bar */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
            <span className="flex items-center gap-1.5">
              <GoogleLogo className="h-4 w-4" />
              <span className="font-semibold text-white/60">{googleReview.rating}</span>
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </span>
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>Serving {credibilityStats.businessesServed} CT Businesses</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>5 Specialized Industries</span>
          </div>
        </div>
      </section>

      {/* ═══════ WHY INDUSTRY-SPECIFIC ═══════ */}
      <AngleDivider variant="notch" fill="#080808" from="#131E13" />
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.04)" to="transparent" direction="to bottom" />
        <SectionHeader
          eyebrow="Why It Matters"
          title={<>Generic marketing wastes your money.<br className="hidden md:block" /> Industry expertise multiplies it.</>}
          description="A homeowner hiring a roofer, a couple booking a restaurant, and a CEO choosing a law firm all make decisions completely differently. We build campaigns around those differences — not despite them."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Custom Creative for Your Market",
              desc: "We produce the drone footage, food photography, transformation videos, or authority content your industry demands — not stock photos and clip art.",
              icon: <Briefcase size={20} />,
            },
            {
              title: "Targeting That Reaches Buyers",
              desc: "Property developers, local diners, beauty clients, homeowners — we know the demographics, interests, and behaviors that convert in each market.",
              icon: <TrendingUp size={20} />,
            },
            {
              title: "Metrics That Matter to You",
              desc: "We track what your industry cares about — signed contracts, booked appointments, filled tables, or retained clients — not vanity metrics.",
              icon: <CheckCircle2 size={20} />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-[#131E13] p-7 transition-all hover:border-[#65B207]/20 hover-lift gradient-border-card"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#65B207]/10 text-[#65B207]">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ INDUSTRY CARDS ═══════ */}
      <AngleDivider variant="notch" fill="#d4e4c1" from="#080808" />
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="right" width="5%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="transparent" direction="to bottom right" />
        <RadialGlow color="#65B207" position="90% 20%" size="600px" opacity={0.04} />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            variant="light"
            eyebrow="Our Specialties"
            title="Five industries. Five proven playbooks."
            description="Click into any industry to see the full strategy — the services, results, approach, and FAQs specific to your business type."
          />

          <div className="space-y-6">
            {slugs.map((slug) => {
              const industry = industryData[slug];
              return (
                <Link
                  key={slug}
                  href={`/industries/${slug}`}
                  className="group block rounded-2xl border border-white/10 bg-[#131E13] p-6 transition-all hover:border-[#65B207]/40 hover:shadow-lg hover:shadow-[#65B207]/5 md:p-8"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
                    {/* icon + name */}
                    <div className="flex shrink-0 items-start gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#65B207]/10 text-[#65B207]">
                        {industryIcons[slug] ?? <Briefcase size={28} />}
                      </div>
                      <div className="md:hidden">
                        <h3 className="font-heading text-xl font-bold text-white">
                          {industry.name}
                        </h3>
                        <p className="text-sm text-[#65B207]">{industry.headline}</p>
                      </div>
                    </div>

                    {/* content */}
                    <div className="flex-1">
                      <h3 className="hidden font-heading text-2xl font-bold text-white md:block">
                        {industry.name} Marketing
                      </h3>
                      <p className="hidden text-sm font-semibold text-[#65B207] md:mt-1 md:block">
                        {industry.headline}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/55 md:max-w-2xl">
                        {industry.description}
                      </p>

                      {/* stats row */}
                      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {industry.stats.map((stat) => (
                          <div key={stat.label}>
                            <p className="font-heading text-xl font-black text-[#65B207]">
                              {stat.value}
                            </p>
                            <p className="text-xs text-white/40">{stat.label}</p>
                            {stat.benchmark && (
                              <p className="text-[10px] text-white/25">{stat.benchmark}</p>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* key services snippet */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {industry.services.slice(0, 4).map((svc) => (
                          <span
                            key={svc.title}
                            className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50"
                          >
                            {svc.title}
                          </span>
                        ))}
                        {industry.services.length > 4 && (
                          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
                            +{industry.services.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* arrow */}
                    <div className="hidden md:flex md:items-center">
                      <ArrowRight
                        size={24}
                        className="text-[#65B207] transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>

                  {/* mobile CTA */}
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#65B207] md:hidden">
                    View full {industry.name.toLowerCase()} strategy
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ═══════ CROSS-INDUSTRY RESULTS ═══════ */}
      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" flip />
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.03)" to="transparent" direction="to top left" />
        <RadialGlow color="#65B207" position="10% 50%" size="500px" opacity={0.03} />
        <SectionHeader
          eyebrow="Proven Results"
          title="Results across every industry we touch."
          description="These aren't projections — they're real outcomes from real Connecticut businesses that partnered with Allora Media."
        />

        {/* highlight metrics strip */}
        <div className="mb-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl md:grid-cols-4">
          {[
            { value: "3.8x", label: "Avg. Return on Ad Spend", benchmark: "Industry Avg: 1.5–2x" },
            { value: "52%", label: "Avg. Cost Per Lead Reduction" },
            { value: credibilityStats.businessesServed, label: "CT Businesses Served" },
            { value: "30", label: "Days to First Leads" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center px-4 py-8 text-center"
            >
              <span className="font-heading text-3xl font-black text-[#65B207] md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                {stat.label}
              </span>
              {stat.benchmark && (
                <span className="mt-1 text-[10px] text-white/50">{stat.benchmark}</span>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ TESTIMONIALS (shared component) ═══════ */}
      <TestimonialSection />

      {/* ═══════ HOW IT WORKS ═══════ */}
      <Section variant="light">
        <EdgeAccentStripe color="#65B207" side="left" width="4%" />
        <GradientOverlay from="rgba(15,61,21,0.03)" to="rgba(101,178,7,0.02)" direction="to bottom" />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            variant="light"
            eyebrow="How It Works"
            title="From first call to consistent leads — in 4 steps."
          />
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                step: "1",
                title: "Free Growth Blueprint Call",
                desc: "We audit your current marketing, research your local market and competitors, and present a clear, actionable plan — no obligation, no pressure.",
              },
              {
                step: "2",
                title: "Industry-Specific Strategy & Media Production",
                desc: "We produce all the creative your industry needs — drone footage for construction, food photography for restaurants, transformation videos for beauty, authority content for professionals — then build campaigns around it.",
              },
              {
                step: "3",
                title: "Launch Targeted Campaigns",
                desc: "Your ads go live on Facebook and Instagram, reaching the exact demographics and locations where your customers are. Every lead is tracked and attributed.",
              },
              {
                step: "4",
                title: "Optimize, Report, Scale",
                desc: "Monthly performance reviews with real numbers — not vanity metrics. We optimize creative, audiences, and budget to lower costs and increase lead quality over time.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-[#131E13] p-5 transition-all hover:border-[#65B207]/20 hover:bg-[#65B207]/4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#65B207] text-xs font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════ FAQ ═══════ */}
      <AngleDivider variant="notch" fill="#080808" from="#d4e4c1" flip />
      <Section variant="dark">
        <GradientOverlay from="rgba(101,178,7,0.02)" to="transparent" direction="to top" />
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Questions & Answers"
            title="Common questions about industry marketing."
          />
          <FAQAccordion items={industriesFaqs} />
        </div>
      </Section>

      {/* ═══════ BOTTOM CTA ═══════ */}
      <CTASection
        headline="Not sure which strategy fits your business?"
        subhead="Book a free Growth Blueprint Call. We'll research your industry, your competitors, and show you exactly where the biggest opportunities are — no obligation."
        primaryLabel="Book a Growth Blueprint Call"
        primaryHref="/contact"
        secondaryLabel="See Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
