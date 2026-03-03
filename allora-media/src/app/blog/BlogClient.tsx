"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { HeroBanner } from "@/components/HeroBanner";
import type { BlogPostMeta } from "@/lib/blog-data";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock, Calendar } from "lucide-react";

interface BlogClientProps {
  posts: BlogPostMeta[];
  categories: readonly string[];
}

export function BlogClient({ posts, categories }: BlogClientProps) {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? posts
      : posts.filter((p) => p.category === filter);

  return (
    <>
      {/* HERO */}
      <HeroBanner
        videoSrc="/videos/hero-general.mp4"
        imageSrc="/images/hero-bg.jpg"
        imageAlt="Story Real Studios blog"
        overlayOpacity={70}
        cursorSpotlight
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-semibold uppercase text-balance text-[#68ccd1]"
          >
            Insights & Strategy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            Video & content playbooks that drive real growth.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            No fluff, no theory. Actionable strategies from real campaigns
            across Connecticut — with practical examples and
            step-by-step breakdowns you can use today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-white transition-all hover:scale-[1.03] hover:bg-[#7dd6da]"
            >
              Get a Custom Strategy
            </Link>
          </motion.div>
        </div>
      </HeroBanner>

      {/* FILTERS + BLOG GRID */}
      <Section variant="dark">
        <SectionHeader
          eyebrow="Filter by Topic"
          title="Find what matters to your business."
          description="Every article is based on real campaign data and strategies we use for clients — not recycled advice from other production blogs."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                filter === category
                  ? "bg-[#68ccd1] text-white"
                  : "bg-[#0d0d0d] text-white/60 hover:bg-white/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured post (first in filtered list) */}
        {filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              href={`/blog/${filtered[0].slug}`}
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] transition-colors hover:border-[#68ccd1]/30"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto md:min-h-80">
                  <Image
                    src={filtered[0].image}
                    alt={filtered[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <span className="mb-3 inline-block w-fit rounded-full bg-[#68ccd1]/10 px-3 py-1 text-xs font-semibold text-[#68ccd1]">
                    {filtered[0].category}
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-white transition-colors group-hover:text-[#68ccd1] md:text-3xl">
                    {filtered[0].title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-base leading-relaxed text-white/55">
                    {filtered[0].description}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-white/40">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {new Date(filtered[0].publishedAt + "T00:00:00Z").toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric", year: "numeric" }
                      )}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {filtered[0].readTime}
                    </span>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#68ccd1]">
                    Read Article
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid of remaining posts */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(1).map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] transition-colors hover:border-[#68ccd1]/30"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 inline-block w-fit rounded-full bg-[#68ccd1]/10 px-3 py-1 text-xs font-semibold text-[#68ccd1]">
                    {post.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white transition-colors group-hover:text-[#68ccd1]">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-white/50">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm text-white/40">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {new Date(post.publishedAt + "T00:00:00Z").toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready to apply these strategies to your business?"
        subhead="Book a free Growth Blueprint Call. We'll audit your current content strategy, show you the biggest opportunities, and give you a clear plan — whether you work with us or not."
        primaryLabel="Book a Growth Blueprint Call"
        primaryHref="/contact"
        secondaryLabel="See Our Results"
        secondaryHref="/case-studies"
      />
    </>
  );
}
