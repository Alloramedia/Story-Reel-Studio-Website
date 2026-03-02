"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroBannerProps {
  /** MP4 video path (from /public) — used as background if provided */
  videoSrc?: string;
  /** Fallback image (used while video loads and on mobile) */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Hero content (title, subtitle, CTAs) */
  children: React.ReactNode;
  /** Additional className for the outer section */
  className?: string;
  /** Minimum height — defaults to "min-h-[70vh]" */
  minHeight?: string;
  /** Enable the cursor-following spotlight effect (desktop only) */
  cursorSpotlight?: boolean;
  /** Tint overlay opacity — 0-100, default 65 */
  overlayOpacity?: number;
}

export function HeroBanner({
  videoSrc,
  imageSrc,
  imageAlt = "",
  children,
  className = "",
  minHeight = "min-h-[70vh]",
  cursorSpotlight = false,
  overlayOpacity = 65,
}: HeroBannerProps) {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!cursorSpotlight || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    },
    [cursorSpotlight]
  );

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className={`relative flex ${minHeight} items-center overflow-hidden noise-texture ${className}`}
    >
      {/* ── Video background ── */}
      {/* Zero JS control — pure HTML autoplay. Hidden only for reduced-motion preference. */}
      {videoSrc && (
        <div className="absolute inset-0 z-1 hidden motion-safe:block">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="h-full w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* ── Image background (fallback / mobile) ── */}
      {imageSrc && (
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </motion.div>
      )}

      {/* ── Dark overlay ── */}
      <div
        className="absolute inset-0 z-2"
        style={{
          background: `linear-gradient(to bottom, rgba(8,8,8,${overlayOpacity / 100}) 0%, rgba(8,8,8,${(overlayOpacity - 15) / 100}) 50%, rgba(8,8,8,${(overlayOpacity + 10) / 100}) 100%)`,
        }}
      />

      {/* ── Cinematic vignette ── */}
      <div
        className="absolute inset-0 z-2"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* ── Cursor spotlight (desktop) ── */}
      {cursorSpotlight && (
        <div
          className="pointer-events-none absolute inset-0 z-3 opacity-0 transition-opacity duration-500 lg:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(101, 178, 7, 0.06), transparent 40%)`,
          }}
        />
      )}

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        {children}
      </div>
    </section>
  );
}
