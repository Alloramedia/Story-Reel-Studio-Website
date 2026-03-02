"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  /** Aspect ratio class — defaults to aspect-video (16:9) */
  aspectRatio?: string;
}

/**
 * Lazy-loading YouTube embed with privacy-friendly thumbnail.
 * Only loads the iframe when the user clicks play.
 */
export function YouTubeEmbed({
  videoId,
  title = "Video",
  className = "",
  aspectRatio = "aspect-video",
}: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 ${aspectRatio} ${className}`}
    >
      {isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          onClick={() => setIsPlaying(true)}
          className="group absolute inset-0 flex items-center justify-center"
          aria-label={`Play ${title}`}
        >
          {/* Thumbnail */}
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />
          {/* Play button */}
          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#65B207] shadow-lg shadow-[#65B207]/30 transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
            <Play size={28} className="ml-1 text-white" fill="white" />
          </div>
        </button>
      )}
    </motion.div>
  );
}

interface VideoShowcaseProps {
  videos: {
    videoId: string;
    title: string;
    client?: string;
    description?: string;
  }[];
  eyebrow?: string;
  heading?: string;
  description?: string;
}

/**
 * A grid of YouTube video embeds — used for showcasing testimonials,
 * commercials, or project reels on service pages.
 */
export function VideoShowcase({
  videos,
  eyebrow = "See Our Work",
  heading = "Watch real examples.",
  description,
}: VideoShowcaseProps) {
  return (
    <div>
      {(eyebrow || heading) && (
        <div className="mb-10 text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#65B207]">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">
              {heading}
            </h2>
          )}
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60">
              {description}
            </p>
          )}
        </div>
      )}
      <div
        className={`grid gap-6 ${
          videos.length === 1
            ? "mx-auto max-w-3xl"
            : videos.length === 2
            ? "md:grid-cols-2"
            : "md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {videos.map((video, i) => (
          <motion.div
            key={video.videoId}
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col"
          >
            <YouTubeEmbed videoId={video.videoId} title={video.title} />
            {(video.title || video.client || video.description) && (
              <div className="mt-3 px-1">
                {video.client && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#65B207]">
                    {video.client}
                  </p>
                )}
                <p className="mt-0.5 text-sm font-bold text-white">
                  {video.title}
                </p>
                {video.description && (
                  <p className="mt-1 text-xs text-white/50">
                    {video.description}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
