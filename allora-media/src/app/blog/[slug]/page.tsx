import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import {
  BreadcrumbSchema,
  ArticleSchema,
} from "@/components/StructuredData";
import {
  blogPosts,
  getBlogBySlug,
  getAllBlogSlugs,
  type ContentBlock,
} from "@/lib/blog-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://www.alloramedia.us/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Rich block renderer                                               */
/* ------------------------------------------------------------------ */
function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-base leading-relaxed text-white/65 md:text-lg md:leading-relaxed">
          {block.text}
        </p>
      );

    case "subheading":
      return (
        <h3 className="mt-6! font-heading text-xl font-bold text-white md:text-2xl">
          {block.text}
        </h3>
      );

    case "bullets":
      return (
        <ul className="space-y-2 pl-5 text-base leading-relaxed text-white/65 md:text-lg md:leading-relaxed">
          {block.items.map((item, i) => (
            <li key={i} className="relative pl-2 before:absolute before:-left-5 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#68ccd1]">
              {item}
            </li>
          ))}
        </ul>
      );

    case "numbered":
      return (
        <ol className="space-y-3 pl-5 text-base leading-relaxed text-white/65 md:text-lg md:leading-relaxed list-none counter-reset-[item]">
          {block.items.map((item, i) => (
            <li key={i} className="relative pl-6">
              <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#68ccd1]/15 text-xs font-bold text-[#68ccd1]">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );

    case "stat":
      return (
        <div className="my-6 flex items-center gap-5 rounded-2xl border border-[#68ccd1]/20 bg-[#68ccd1]/4 p-6">
          <span className="shrink-0 font-heading text-4xl font-black text-[#68ccd1] md:text-5xl">
            {block.value}
          </span>
          <div>
            <span className="text-sm leading-snug text-white/60 md:text-base">
              {block.label}
            </span>
            {block.source && (
              <span className="mt-1 block text-xs text-white/50">
                Source: {block.source}
              </span>
            )}
          </div>
        </div>
      );

    case "quote":
      return (
        <blockquote className="my-6 border-l-4 border-[#68ccd1] pl-5 md:pl-6">
          <p className="text-base italic leading-relaxed text-white/80 md:text-lg md:leading-relaxed">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <cite className="mt-2 block text-sm not-italic text-white/40">
              — {block.attribution}
            </cite>
          )}
        </blockquote>
      );

    case "callout":
      return (
        <div className="my-6 rounded-2xl border border-white/10 bg-white/3 p-5 md:p-6">
          <p className="mb-2 font-heading text-sm font-bold uppercase tracking-wider text-[#68ccd1]">
            {block.title}
          </p>
          <p className="text-sm leading-relaxed text-white/65 md:text-base md:leading-relaxed">
            {block.text}
          </p>
        </div>
      );

    case "cta":
      return (
        <div className="my-8 rounded-2xl border border-[#68ccd1]/30 bg-[#68ccd1]/5 p-6 text-center">
          <Link
            href={block.href}
            className="inline-flex items-center gap-2 rounded-full bg-[#68ccd1] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#7dd6da]"
          >
            {block.text}
            <ArrowRight size={14} />
          </Link>
        </div>
      );

    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  const currentIndex = blogPosts.indexOf(post);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const relatedPosts = post.relatedSlugs
    .map((s) => getBlogBySlug(s))
    .filter(Boolean);

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.description}
        url={`/blog/${slug}`}
        image={post.image}
        publishedAt={post.publishedAt}
        author={post.author}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${slug}` },
        ]}
      />

      {/* HERO */}
      <section className="relative bg-[#151515] pt-32 pb-20 text-white md:pt-40 md:pb-28 overflow-hidden noise-texture">
        <div className="pointer-events-none absolute -right-40 -top-40 h-125 w-125 rounded-full bg-[#68ccd1]/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#68ccd1]/3 blur-3xl" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-[#68ccd1]"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
          <span className="mb-4 inline-block rounded-full bg-[#68ccd1]/10 px-3 py-1 text-xs font-semibold text-[#68ccd1]">
            {post.category}
          </span>
          <h1 className="max-w-4xl text-3xl font-heading font-black leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <User size={14} />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.publishedAt + "T00:00:00").toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <Section>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10">
          <div className="relative aspect-video">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      {/* ARTICLE BODY */}
      <section className="bg-[#0d0d0d] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-12">
            {post.content.map((section, i) => (
              <div key={i}>
                <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.blocks.map((block, j) => (
                    <RenderBlock key={j} block={block} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* AUTHOR BIO */}
          <div className="mt-16 rounded-2xl border border-white/10 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#68ccd1]/20 font-heading text-lg font-bold text-[#68ccd1]">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-white">
                  {post.author}
                </p>
                <p className="mt-1 text-sm text-white/50">
                  Founder & Creative Director at Allora Media. Running
                  paid advertising campaigns and producing professional media
                  content for Connecticut businesses.
                </p>
              </div>
            </div>
          </div>

          {/* RELATED SERVICES / PAGES */}
          {post.relatedPages && post.relatedPages.length > 0 && (
            <div className="mt-10 rounded-2xl border border-white/10 bg-[#151515] p-6">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#68ccd1]">
                Related Services & Resources
              </h3>
              <div className="grid gap-2">
                {post.relatedPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/2 px-4 py-3 transition-colors hover:border-[#68ccd1]/30 hover:bg-[#68ccd1]/5"
                  >
                    <span className="text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                      {page.label}
                    </span>
                    <ArrowRight size={14} className="text-[#68ccd1] transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* RELATED POSTS */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-white/10 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-8 text-center font-heading text-2xl font-bold text-white md:text-3xl">
              Related Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((related) =>
                related ? (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] transition-colors hover:border-[#68ccd1]/30"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <span className="mb-2 inline-block text-xs font-semibold text-[#68ccd1]">
                        {related.category}
                      </span>
                      <h3 className="font-heading text-base font-bold text-white transition-colors group-hover:text-[#68ccd1]">
                        {related.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-white/50">
                        {related.description}
                      </p>
                    </div>
                  </Link>
                ) : null
              )}
            </div>
          </div>
        </section>
      )}

      {/* PREV / NEXT NAV */}
      <section className="border-t border-white/10 bg-[#151515] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
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
                  <p className="max-w-50 truncate text-sm font-semibold">
                    {prevPost.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex items-center gap-3 text-right text-white/60 transition-colors hover:text-[#68ccd1]"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Next
                  </p>
                  <p className="max-w-50 truncate text-sm font-semibold">
                    {nextPost.title}
                  </p>
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

      {/* CTA */}
      <CTASection
        headline="Ready to apply these strategies to your business?"
        subhead="Book a free Growth Blueprint Call. We'll audit your current marketing, show you the biggest opportunities, and give you a clear plan — whether you work with us or not."
        primaryLabel="Book a Growth Blueprint Call"
        primaryHref="/contact"
        secondaryLabel="See Our Results"
        secondaryHref="/case-studies"
      />
    </>
  );
}
