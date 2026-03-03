"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  /** Enable cinematic wipe-reveal entrance animation */
  cinematic?: boolean;
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
  cinematic = false,
}: HeroBannerProps) {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cinematicStage, setCinematicStage] = useState(cinematic ? 0 : 2);

  useEffect(() => {
    if (!cinematic) return;
    const t1 = setTimeout(() => setCinematicStage(1), 400);
    const t2 = setTimeout(() => setCinematicStage(2), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [cinematic]);

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
      className={`relative flex ${cinematic ? "min-h-screen" : minHeight} items-center overflow-hidden noise-texture ${className}`}
    >
      {/* ── Cinematic black cover (wipe reveal) ── */}
      {cinematic && (
        <motion.div
          className="absolute inset-0 z-30 bg-[#080808] origin-top"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: cinematicStage >= 1 ? 0 : 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      {/* ── Video background ── */}
      {videoSrc && (
        <motion.div
          className="absolute inset-0 z-1 hidden motion-safe:block"
          initial={cinematic ? { scale: 1.2 } : undefined}
          animate={cinematic ? { scale: 1 } : undefined}
          transition={cinematic ? { duration: 2.5, ease: [0.22, 1, 0.36, 1] } : undefined}
        >
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
        </motion.div>
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
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(104, 204, 209, 0.06), transparent 40%)`,
          }}
        />
      )}

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8"
        initial={cinematic ? { opacity: 0 } : undefined}
        animate={cinematic ? { opacity: cinematicStage >= 2 ? 1 : 0 } : undefined}
        transition={cinematic ? { duration: 0.8 } : undefined}
      >
        {children}
      </motion.div>

      {/* ── Scroll indicator ── */}
      {cinematic && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: cinematicStage >= 2 ? 0.6 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Scroll</span>
          <motion.div
            className="h-8 w-[1px] bg-white/30"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </section>
  );
}
