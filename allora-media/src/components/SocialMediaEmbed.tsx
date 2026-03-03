"use client";

import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Instagram Embed                                                    */
/* ------------------------------------------------------------------ */
interface InstagramEmbedProps {
  /** The Instagram post URL, e.g. https://www.instagram.com/p/ABC123/ */
  postUrl: string;
  /** Height of the embed in pixels */
  height?: number;
  className?: string;
}

export function InstagramEmbed({
  postUrl,
  height = 520,
  className = "",
}: InstagramEmbedProps) {
  // Instagram's oEmbed requires their embed.js script.
  // Using their iframe embed endpoint for a simpler approach.
  const embedUrl = postUrl.endsWith("/")
    ? `${postUrl}embed`
    : `${postUrl}/embed`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#151515] ${className}`}
    >
      <iframe
        src={embedUrl}
        title="Instagram post"
        className="w-full border-0"
        style={{ height, minHeight: 400 }}
        loading="lazy"
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  TikTok Embed                                                       */
/* ------------------------------------------------------------------ */
interface TikTokEmbedProps {
  /** The TikTok video URL */
  videoUrl: string;
  /** Height of the embed — TikTok embeds are tall */
  height?: number;
  className?: string;
}

export function TikTokEmbed({
  videoUrl,
  height = 740,
  className = "",
}: TikTokEmbedProps) {
  // Extract video ID from URL
  const videoId = videoUrl.split("/video/")[1]?.split("?")[0] ?? "";
  const embedUrl = `https://www.tiktok.com/embed/v2/${videoId}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#151515] ${className}`}
    >
      <iframe
        src={embedUrl}
        title="TikTok video"
        className="w-full border-0"
        style={{ height, minHeight: 600 }}
        loading="lazy"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin"
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Facebook Post Embed                                                */
/* ------------------------------------------------------------------ */
interface FacebookEmbedProps {
  /** The Facebook post URL */
  postUrl: string;
  /** Width of the embed */
  width?: number;
  height?: number;
  className?: string;
}

export function FacebookEmbed({
  postUrl,
  width = 500,
  height = 600,
  className = "",
}: FacebookEmbedProps) {
  const encodedUrl = encodeURIComponent(postUrl);
  const embedUrl = `https://www.facebook.com/plugins/post.php?href=${encodedUrl}&show_text=true&width=${width}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#151515] ${className}`}
    >
      <iframe
        src={embedUrl}
        title="Facebook post"
        className="w-full border-0"
        style={{ height, maxWidth: width }}
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Social Media Showcase Grid                                         */
/* ------------------------------------------------------------------ */
interface SocialPost {
  platform: "instagram" | "tiktok" | "facebook";
  url: string;
  caption?: string;
  height?: number;
}

interface SocialMediaShowcaseProps {
  posts: SocialPost[];
  eyebrow?: string;
  heading?: string;
  description?: string;
  variant?: "dark" | "light";
}

/**
 * A responsive grid of embedded social media posts —
 * supports Instagram, TikTok, and Facebook.
 */
export function SocialMediaShowcase({
  posts,
  eyebrow = "Real Content. Real Results.",
  heading = "See what we create for our clients.",
  description,
  variant = "dark",
}: SocialMediaShowcaseProps) {
  const textColor = variant === "light" ? "text-[#1a1a1a]" : "text-white";
  const mutedColor =
    variant === "light" ? "text-[#1a1a1a]/60" : "text-white/60";

  return (
    <div>
      {(eyebrow || heading) && (
        <div className="mb-10 text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68ccd1]">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2
              className={`font-heading text-3xl font-black ${textColor} md:text-4xl`}
            >
              {heading}
            </h2>
          )}
          {description && (
            <p
              className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${mutedColor}`}
            >
              {description}
            </p>
          )}
        </div>
      )}
      <div
        className={`grid gap-6 ${
          posts.length === 1
            ? "mx-auto max-w-md"
            : posts.length === 2
            ? "mx-auto max-w-3xl md:grid-cols-2"
            : "md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {posts.map((post, i) => (
          <motion.div
            key={post.url}
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col"
          >
            {post.platform === "instagram" && (
              <InstagramEmbed
                postUrl={post.url}
                height={post.height}
              />
            )}
            {post.platform === "tiktok" && (
              <TikTokEmbed
                videoUrl={post.url}
                height={post.height}
              />
            )}
            {post.platform === "facebook" && (
              <FacebookEmbed
                postUrl={post.url}
                height={post.height}
              />
            )}
            {post.caption && (
              <p
                className={`mt-2 px-1 text-xs ${
                  variant === "light" ? "text-[#1a1a1a]/50" : "text-white/40"
                }`}
              >
                {post.caption}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
