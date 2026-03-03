import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { caseStudies } from "@/lib/case-studies-data";

/** Map case-study service labels → site routes */
const serviceUrlMap: Record<string, string> = {
  "Content Production": "/media-production",
  "Video Production": "/video-production",
  "Social Media Management": "/organic-social",
  "Meta Ads": "/paid-media",
  "Brand Development": "/services/graphic-design",
  "Headshots & Team Photos": "/services/corporate-photography",
  "Job & Project Coverage": "/media-production",
  "Drone Photography": "/services/drone-content",
  "Testimonial Videos": "/services/testimonial-videos",
  "TV Commercials": "/services/tv-commercials",
  "Food Photography": "/services/product-shoots",
  "Event Promotion": "/paid-media",
  "Educational Content": "/organic-social",
  "Before & After Content": "/media-production",
  "Logo Design": "/services/graphic-design",
  "Graphic Design": "/services/graphic-design",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: `https://www.storyreal.co/case-studies/${slug}`,
    },
    openGraph: {
      title: `${study.title} | Story Real Studios`,
      description: study.summary,
      type: "article",
      images: [{ url: study.image }],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) notFound();

  const currentIndex = caseStudies.indexOf(study);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Case Studies", href: "/case-studies" },
          { name: study.title, href: `/case-studies/${slug}` },
        ]}
      />

      {/* ═══════ HERO — IMMERSIVE IMAGE ═══════ */}
      <section className="relative min-h-[60vh] bg-[#151515] text-white overflow-hidden noise-texture">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={study.image}
            alt={study.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-[#080808]/80 to-[#080808]/40" />
          <div className="absolute inset-0 bg-linear-to-r from-[#080808]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-end min-h-[60vh] pb-16 pt-36">
          <Link
            href="/case-studies"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-[#68ccd1] w-fit"
          >
            <ArrowLeft size={14} />
            Back to Case Studies
          </Link>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#68ccd1]">
            {study.industry}
          </p>
          <h1 className="max-w-4xl text-3xl font-heading font-black leading-tight tracking-tight md:text-4xl lg:text-5xl xl:text-6xl">
            {study.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
            {study.summary}
          </p>
        </div>
      </section>

      {/* ═══════ METRICS BAR ═══════ */}
      <section className="border-b border-white/10 bg-[#0d0d0d] py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {study.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-heading text-4xl font-black text-[#68ccd1] md:text-5xl">
                  {m.value}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/45">
                  {m.label}
                </p>
                {m.benchmark && (
                  <p className="mt-1.5 text-xs text-white/50">
                    Industry Avg: <span className="text-white/60">{m.benchmark}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CLIENT OVERVIEW SIDEBAR + CHALLENGE ═══════ */}
      <section className="bg-[#080808] py-20 md:py-28 noise-texture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
            {/* Sticky sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-white/10 bg-[#151515] p-6">
                {/* Client Logo */}
                {study.logo && (
                  <div className="mb-5 flex justify-center">
                    <div className="relative h-16 w-full">
                      <Image
                        src={study.logo}
                        alt={`${study.clientName} logo`}
                        fill
                        sizes="240px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
                {study.logo && <div className="h-px bg-white/10 mb-5" />}
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#68ccd1] mb-4">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Client</p>
                    <p className="mt-1 text-sm font-semibold text-white">{study.clientName}</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Industry</p>
                    <p className="mt-1 text-sm font-semibold text-white">{study.industry}</p>
                  </div>
                  {study.websiteUrl && (
                    <>
                      <div className="h-px bg-white/10" />
                      <div>
                        <p className="text-xs text-white/40 uppercase tracking-wider">Website</p>
                        <a
                          href={study.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[#68ccd1] transition-colors hover:text-[#7dd6da]"
                        >
                          {study.websiteUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </>
                  )}
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Services</p>
                    <div className="flex flex-wrap gap-1.5">
                      {study.services.map((s) => {
                        const href = serviceUrlMap[s];
                        return href ? (
                          <Link
                            key={s}
                            href={href}
                            className="inline-flex items-center rounded-full bg-[#68ccd1]/10 px-2.5 py-1 text-xs font-medium text-[#68ccd1] transition-colors hover:bg-[#68ccd1]/20"
                          >
                            {s}
                          </Link>
                        ) : (
                          <span
                            key={s}
                            className="inline-flex items-center rounded-full bg-[#68ccd1]/10 px-2.5 py-1 text-xs font-medium text-[#68ccd1]"
                          >
                            {s}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Challenge content */}
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="font-heading text-3xl font-black text-[#68ccd1]/30">01</span>
                <h2 className="font-heading text-2xl font-black text-white md:text-3xl">
                  The Challenge
                </h2>
              </div>
              <div className="h-px bg-linear-to-r from-[#68ccd1]/40 to-transparent mb-8" />
              <div className="space-y-5">
                {study.challenge.map((p, i) => (
                  <p key={i} className="text-base leading-[1.8] text-white/60 md:text-lg">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ BUILDING THE FOUNDATION ═══════ */}
      <section className="bg-[#0d0d0d] py-20 md:py-28 relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#68ccd1]/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl lg:ml-86">
            <div className="mb-3 flex items-center gap-3">
              <span className="font-heading text-3xl font-black text-[#68ccd1]/30">02</span>
              <h2 className="font-heading text-2xl font-black text-white md:text-3xl">
                Building the Content Foundation
              </h2>
            </div>
            <div className="h-px bg-linear-to-r from-[#68ccd1]/40 to-transparent mb-8" />
            <div className="space-y-5">
              {study.buildingFoundation.map((p, i) => (
                <p key={i} className="text-base leading-[1.8] text-white/60 md:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ THE STRATEGY ═══════ */}
      <section className="bg-[#080808] py-20 md:py-28 noise-texture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl lg:ml-86">
            <div className="mb-3 flex items-center gap-3">
              <span className="font-heading text-3xl font-black text-[#68ccd1]/30">03</span>
              <h2 className="font-heading text-2xl font-black text-white md:text-3xl">
                The Strategy
              </h2>
            </div>
            <div className="h-px bg-linear-to-r from-[#68ccd1]/40 to-transparent mb-8" />
            <div className="space-y-5">
              {study.strategy.map((p, i) => (
                <p key={i} className="text-base leading-[1.8] text-white/60 md:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHAT WE DELIVERED ═══════ */}
      <section className="bg-[#0d0d0d] py-20 md:py-28 relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#68ccd1]/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl lg:ml-86">
            <div className="mb-3 flex items-center gap-3">
              <span className="font-heading text-3xl font-black text-[#68ccd1]/30">04</span>
              <h2 className="font-heading text-2xl font-black text-white md:text-3xl">
                What We Delivered
              </h2>
            </div>
            <div className="h-px bg-linear-to-r from-[#68ccd1]/40 to-transparent mb-8" />

            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {study.services.map((s) => {
                const href = serviceUrlMap[s];
                const inner = (
                  <>
                    <CheckCircle2 size={16} className="shrink-0 text-[#68ccd1]" />
                    <span className="text-sm font-medium text-white/70">{s}</span>
                  </>
                );
                return href ? (
                  <Link
                    key={s}
                    href={href}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/2 px-4 py-3 transition-colors hover:border-[#68ccd1]/30 hover:bg-[#68ccd1]/5"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div
                    key={s}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/2 px-4 py-3"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Detail paragraphs */}
            <div className="space-y-5">
              {study.activeManagement.map((p, i) => (
                <p key={i} className="text-base leading-[1.8] text-white/60 md:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ THE RESULTS ═══════ */}
      <section className="bg-[#151515] py-20 md:py-28 relative overflow-hidden noise-texture">
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#68ccd1]/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl lg:ml-86">
            <div className="mb-3 flex items-center gap-3">
              <span className="font-heading text-3xl font-black text-[#68ccd1]/30">05</span>
              <h2 className="font-heading text-2xl font-black text-white md:text-3xl">
                The Results
              </h2>
            </div>
            <div className="h-px bg-linear-to-r from-[#68ccd1]/40 to-transparent mb-8" />
            <div className="space-y-5">
              {study.results.map((p, i) => (
                <p key={i} className="text-base leading-[1.8] text-white/60 md:text-lg">
                  {p}
                </p>
              ))}
            </div>

            {/* Result metric cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {study.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-[#68ccd1]/20 bg-[#68ccd1]/5 p-6 text-center"
                >
                  <p className="font-heading text-3xl font-black text-[#68ccd1]">
                    {m.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white/50">
                    {m.label}
                  </p>
                  {m.benchmark && (
                    <p className="mt-2 text-xs text-white/50">
                      Industry Avg: <span className="text-white/60">{m.benchmark}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES DELIVERED ═══════ */}
      <section className="border-t border-white/10 bg-[#080808] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl lg:ml-86">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#68ccd1] mb-6">
              What We Delivered
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {study.services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="shrink-0 text-[#68ccd1]" />
                  <span className="text-sm font-medium text-white/70">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PREV / NEXT NAV ═══════ */}
      <section className="border-t border-white/10 bg-[#0d0d0d] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {prevStudy ? (
              <Link
                href={`/case-studies/${prevStudy.slug}`}
                className="group flex items-center gap-3 text-white/60 transition-colors hover:text-[#68ccd1]"
              >
                <ArrowLeft
                  size={18}
                  className="transition-transform group-hover:-translate-x-1"
                />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Previous
                  </p>
                  <p className="text-sm font-semibold">{prevStudy.title.split(":")[0]}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextStudy ? (
              <Link
                href={`/case-studies/${nextStudy.slug}`}
                className="group flex items-center gap-3 text-right text-white/60 transition-colors hover:text-[#68ccd1]"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Next
                  </p>
                  <p className="text-sm font-semibold">{nextStudy.title.split(":")[0]}</p>
                </div>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <CTASection
        headline="Want results like these for your business?"
        subhead="Book a free Growth Blueprint Call. We'll audit your current content strategy, show you the gaps, and give you a clear plan — whether you work with us or not."
        primaryLabel="Book a Growth Blueprint Call"
        primaryHref="/contact"
      />
    </>
  );
}
