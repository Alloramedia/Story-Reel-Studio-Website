import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  TrendingUp,
  Briefcase,
  Factory,
  Heart,
  Microscope,
  ShoppingBag,
  Trophy,
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
  title: "Industries We Serve — Video Production for Purpose-Driven Organizations",
  description:
    "Story Real Studios delivers industry-specific video production for manufacturers, nonprofits, biotech companies, lifestyle brands, sports franchises, and professional services. Visual storytelling crafted specifically for your industry.",
  alternates: {
    canonical: "https://www.storyreal.co/industries",
  },
  openGraph: {
    title: "Industries We Serve — Story Real Studios",
    description:
      "Visual storytelling crafted specifically for your industry. Manufacturing, nonprofits, health & biotech, brand lifestyle, sports, and professional services.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  keywords: [
    "manufacturing video production",
    "nonprofit video production",
    "biotech video production",
    "brand lifestyle video production",
    "sports video production",
    "professional services video production",
    "Connecticut video production",
    "Story Real Studios",
  ],
};

/* ── icon mapping per slug ── */
const industryIcons: Record<string, React.ReactNode> = {
  manufacturing: <Factory size={28} />,
  nonprofits: <Heart size={28} />,
  "health-biotech": <Microscope size={28} />,
  "brand-lifestyle": <ShoppingBag size={28} />,
  "sports-entertainment": <Trophy size={28} />,
  "professional-services": <Scale size={28} />,
};

/* ── cross-industry FAQs for SEO ── */
const industriesFaqs = [
  {
    question: "What industries does Story Real Studios work with?",
    answer:
      "We specialize in video production for purpose-driven organizations across six core sectors: manufacturing, nonprofits, health & biotech, brand lifestyle & DTC, sports & entertainment, and professional services. Each industry receives a custom content strategy built around how your specific audience discovers, evaluates, and connects with organizations like yours.",
  },
  {
    question: "How does industry-specific video production differ from generic production?",
    answer:
      "Generic production companies apply the same approach to every client. We build content strategies around how YOUR audience consumes media and makes decisions. A biotech investor watching a clinical pipeline video behaves completely differently from a manufacturing buyer evaluating a factory tour or a donor watching a nonprofit impact film. Our production approach adapts to those differences.",
  },
  {
    question: "Do you only work with organizations in Connecticut?",
    answer:
      "We're headquartered in Southington, CT, but we produce content nationally. We've filmed in manufacturing facilities, hospital systems, WNBA arenas, and at corporate headquarters across the country. We bring the full crew and equipment wherever your story lives.",
  },
  {
    question: "How long does a typical production engagement take?",
    answer:
      "A standard brand story documentary project takes 4–8 weeks from discovery to final delivery. Interview-based content and event coverage can deliver faster. Multi-phase campaigns with ongoing content may span several months. We provide a clear timeline during the blueprint phase before any production begins.",
  },
  {
    question: "What deliverables do I receive from a video production engagement?",
    answer:
      "Every engagement produces a complete content library — not just one video. You receive hero brand films, interview segments, short-form social cuts, behind-the-scenes content, b-roll packages, and platform-specific edits. Full-resolution master files plus optimized versions for web, social, and paid media.",
  },
  {
    question: "How do you determine the right content strategy for my industry?",
    answer:
      "Every engagement starts with a Brand Story Consultation where we learn your organization's mission, goals, audience, and competitive landscape. From there, we develop a Media Blueprint — a strategic production plan tailored to your industry that defines exactly what content you need, why, and how it will be deployed.",
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
      <section className="relative bg-[#151515] pt-32 pb-20 md:pt-40 md:pb-28 noise-texture overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(104,204,209,0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#68ccd1]">
            Industries We Serve
          </p>
          <h1 className="font-heading text-4xl font-black leading-[1.1] text-white md:text-5xl lg:text-6xl">
            Storytelling crafted
            <br className="hidden sm:block" />
            <span className="text-[#68ccd1]"> specifically for your industry.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            From mission-driven nonprofits to innovative manufacturers, we help
            brands tell stories that move people to action. Every industry has
            different audiences, different challenges, and different opportunities
            — our production approach adapts to each one.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#68ccd1]/20 transition-all hover:scale-[1.03] hover:bg-[#7dd6da]"
            >
              Talk to a Producer
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/5"
            >
              View Our Portfolio
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
            <span>Telly Award-Winning</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>6 Specialized Industries</span>
          </div>
        </div>
      </section>

      {/* ═══════ WHY INDUSTRY-SPECIFIC ═══════ */}
      <AngleDivider variant="notch" fill="#080808" from="#151515" />
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.04)" to="transparent" direction="to bottom" />
        <SectionHeader
          eyebrow="Why It Matters"
          title={<>Every industry has a different story to tell.<br className="hidden md:block" /> We know how to find yours.</>}
          description="A manufacturer needs facility tours and capability videos. A nonprofit needs impact films and donor stories. A biotech company needs investor-grade content. We build production strategies around those differences — not despite them."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Content Built for Your Audience",
              desc: "We produce the factory tours, documentary films, athlete profiles, and brand stories your specific audience needs to see — not generic corporate video.",
              icon: <Briefcase size={20} />,
            },
            {
              title: "Stories That Drive Real Outcomes",
              desc: "Whether it's recruiting talent, raising capital, winning contracts, or inspiring donors — every piece of content is tied to a measurable business objective.",
              icon: <TrendingUp size={20} />,
            },
            {
              title: "Proven Industry Track Record",
              desc: "100+ videos for a biotech startup. 20+ manufacturing sales assets. Telly Award-winning nonprofit films. We bring deep experience to every project.",
              icon: <CheckCircle2 size={20} />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-[#151515] p-7 transition-all hover:border-[#68ccd1]/20 hover-lift gradient-border-card"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#68ccd1]/10 text-[#68ccd1]">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ INDUSTRY CARDS ═══════ */}
      <AngleDivider variant="notch" fill="#f5fafa" from="#080808" />
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="right" width="5%" />
        <GradientOverlay from="rgba(14,42,53,0.03)" to="transparent" direction="to bottom right" />
        <RadialGlow color="#68ccd1" position="90% 20%" size="600px" opacity={0.04} />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            variant="light"
            eyebrow="Our Specialties"
            title="Six industries. Six proven approaches."
            description="Click into any industry to see the full strategy — the services, results, approach, and FAQs specific to your organization."
          />

          <div className="space-y-6">
            {slugs.map((slug) => {
              const industry = industryData[slug];
              return (
                <Link
                  key={slug}
                  href={`/industries/${slug}`}
                  className="group block rounded-2xl border border-white/10 bg-[#151515] p-6 transition-all hover:border-[#68ccd1]/40 hover:shadow-lg hover:shadow-[#68ccd1]/5 md:p-8"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
                    {/* icon + name */}
                    <div className="flex shrink-0 items-start gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#68ccd1]/10 text-[#68ccd1]">
                        {industryIcons[slug] ?? <Briefcase size={28} />}
                      </div>
                      <div className="md:hidden">
                        <h3 className="font-heading text-xl font-bold text-white">
                          {industry.name}
                        </h3>
                        <p className="text-sm text-[#68ccd1]">{industry.headline}</p>
                      </div>
                    </div>

                    {/* content */}
                    <div className="flex-1">
                      <h3 className="hidden font-heading text-2xl font-bold text-white md:block">
                        {industry.name} Video Production
                      </h3>
                      <p className="hidden text-sm font-semibold text-[#68ccd1] md:mt-1 md:block">
                        {industry.headline}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/55 md:max-w-2xl">
                        {industry.description}
                      </p>

                      {/* stats row */}
                      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {industry.stats.map((stat) => (
                          <div key={stat.label}>
                            <p className="font-heading text-xl font-black text-[#68ccd1]">
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
                        className="text-[#68ccd1] transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>

                  {/* mobile CTA */}
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#68ccd1] md:hidden">
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
      <AngleDivider variant="notch" fill="#080808" from="#f5fafa" flip />
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.03)" to="transparent" direction="to top left" />
        <RadialGlow color="#68ccd1" position="10% 50%" size="500px" opacity={0.03} />
        <SectionHeader
          eyebrow="Proven Results"
          title="Results across every industry we serve."
          description="These aren't projections — they're real outcomes from real organizations that partnered with Story Real Studios."
        />

        {/* highlight metrics strip */}
        <div className="mb-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl md:grid-cols-4">
          {[
            { value: "100+", label: "Videos for Cybin (Biotech)" },
            { value: "3x", label: "LinkedIn Growth (POWR2)" },
            { value: "Telly", label: "Award-Winning Content" },
            { value: credibilityStats.projectsDelivered, label: "Projects Delivered" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center px-4 py-8 text-center"
            >
              <span className="font-heading text-3xl font-black text-[#68ccd1] md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ TESTIMONIALS (shared component) ═══════ */}
      <TestimonialSection />

      {/* ═══════ HOW IT WORKS ═══════ */}
      <Section variant="light">
        <EdgeAccentStripe color="#68ccd1" side="left" width="4%" />
        <GradientOverlay from="rgba(14,42,53,0.03)" to="rgba(104,204,209,0.02)" direction="to bottom" />
        <div className="mx-auto max-w-5xl py-6">
          <SectionHeader
            variant="light"
            eyebrow="How It Works"
            title="From consultation to content library — in 4 phases."
          />
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                step: "1",
                title: "Brand Story Consultation",
                desc: "We learn your organization's mission, goals, audience, and competitive landscape. You'll walk away with a clear brand story statement, industry-specific best practices, and at least three actionable video ideas.",
              },
              {
                step: "2",
                title: "Media Blueprint",
                desc: "We develop a strategic production plan defining exactly what content you need, why, and how it will be deployed — tailored to your specific industry and business objectives.",
              },
              {
                step: "3",
                title: "Cinematic Production",
                desc: "On-location production with cinema-grade cameras, professional lighting, and expert direction. We capture months worth of content in focused, efficient production days without disrupting your operations.",
              },
              {
                step: "4",
                title: "Content Library Delivery",
                desc: "We deliver a complete library of strategic content — hero brand films, interview segments, social cuts, b-roll packages — all organized, platform-optimized, and ready for deployment.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-[#151515] p-5 transition-all hover:border-[#68ccd1]/20 hover:bg-[#68ccd1]/4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#68ccd1] text-xs font-bold text-white">
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
      <AngleDivider variant="notch" fill="#080808" from="#f5fafa" flip />
      <Section variant="dark">
        <GradientOverlay from="rgba(104,204,209,0.02)" to="transparent" direction="to top" />
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Questions & Answers"
            title="Common questions about industry video production."
          />
          <FAQAccordion items={industriesFaqs} />
        </div>
      </Section>

      {/* ═══════ BOTTOM CTA ═══════ */}
      <CTASection
        headline="Ready to tell your organization's story?"
        subhead="Schedule a Brand Story Consultation. We'll learn about your mission, your audience, and your goals — and show you exactly how cinematic video content can drive real results for your industry."
        primaryLabel="Talk to a Producer"
        primaryHref="/contact"
        secondaryLabel="View Our Portfolio"
        secondaryHref="/work"
      />
    </>
  );
}
