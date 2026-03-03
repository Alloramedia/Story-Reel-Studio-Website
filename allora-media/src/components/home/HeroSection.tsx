"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { FloatingElement } from "@/components/animations";

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden noise-texture"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0 hidden motion-safe:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero-home.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-2 opacity-0 transition-opacity duration-500 lg:opacity-100"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(101, 178, 7, 0.06), transparent 40%)`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-1 bg-linear-to-b from-black/70 via-black/50 to-black/75" />
      {/* Cinematic vignette */}
      <div className="absolute inset-0 z-1" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(0,0,0,0.5) 100%)' }} />

      {/* Floating decorative elements */}
      <FloatingElement amplitude={15} duration={7} className="absolute right-[15%] top-[20%] hidden lg:block">
        <div className="h-24 w-24 rounded-full bg-[#68ccd1]/5 blur-xl" />
      </FloatingElement>
      <FloatingElement amplitude={10} duration={9} className="absolute left-[10%] bottom-[25%] hidden lg:block">
        <div className="h-16 w-16 rounded-full bg-[#68ccd1]/8 blur-lg" />
      </FloatingElement>

      {/* Aurora gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
        <div className="absolute -top-1/4 -right-1/4 w-150 h-150 rounded-full bg-[#68ccd1]/4 blur-[120px] animate-aurora-1" />
        <div className="absolute -bottom-1/4 -left-1/4 w-125 h-125 rounded-full bg-[#68ccd1]/3 blur-[100px] animate-aurora-2" />
        <div className="absolute top-1/3 left-1/3 w-100 h-100 rounded-full bg-[#68ccd1]/2 blur-[80px] animate-aurora-3" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm font-bold uppercase text-[#68ccd1] text-balance md:text-base"
          >
            Strategy-Led Video Production Studio in Connecticut
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-heading text-4xl font-black leading-[1.05] text-pretty text-white md:text-6xl lg:text-7xl text-shadow-hero"
          >
            Your content should{' '}
            <span className="block animate-text-gradient">pay for itself.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl text-shadow-sm"
          >
            We build the paid advertising campaigns, produce the professional
            video and photography, and manage the strategy — so you can focus
            on running your business while we bring in the customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#68ccd1]/25 transition-all duration-300 hover:bg-[#7dd6da] hover:scale-[1.03]"
            >
              Book a Growth Blueprint Call
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/paid-media"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-[#68ccd1] hover:bg-[#68ccd1]/10"
            >
              How It Works
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
