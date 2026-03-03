"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Pause, Play } from "lucide-react";
import { testimonials } from "@/lib/shared-data";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), []);
  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  // Auto-play with pause on hover
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, next]);

  return (
    <div
      className="relative mx-auto max-w-3xl"
      role="region"
      aria-label="Client testimonials"
      aria-roledescription="carousel"
      aria-live="polite"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-2xl border border-white/10 bg-[#151515] p-8 text-center md:p-12 quote-decoration overflow-hidden glass-card"
          role="group"
          aria-roledescription="slide"
          aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
        >
          {/* Subtle inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#68ccd1]/4 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex justify-center gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-[#68ccd1] text-[#68ccd1] star-glow" />
              ))}
            </div>
            <blockquote>
              <p className="text-lg leading-relaxed text-white/85 md:text-xl italic">
                &ldquo;{testimonials[index].quote}&rdquo;
              </p>
              <footer className="mt-8">
                <div className="mx-auto mb-4 h-px w-12 bg-linear-to-r from-transparent via-[#68ccd1]/50 to-transparent" />
                <p className="font-heading font-bold text-white text-lg">{testimonials[index].author}</p>
                <p className="text-sm text-[#68ccd1]/70 font-medium uppercase tracking-wider mt-1">{testimonials[index].role}</p>
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-[#68ccd1] hover:text-[#68ccd1] hover:bg-[#68ccd1]/5 hover:scale-110"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2" role="group" aria-label="Testimonial navigation">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === index ? "bg-[#68ccd1] w-8 shadow-sm shadow-[#68ccd1]/30" : "bg-white/20 w-2 hover:bg-white/40"
              }`}
              aria-current={i === index ? "true" : undefined}
              aria-label={`Go to testimonial from ${t.author}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-[#68ccd1] hover:text-[#68ccd1] hover:bg-[#68ccd1]/5 hover:scale-110"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      {/* Pause / Play toggle — WCAG 2.2.2 requires a mechanism to pause auto-updating content */}
      <div className="mt-3 flex justify-center">
        <button
          onClick={() => setIsPaused((p) => !p)}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white/50 transition-colors hover:border-[#68ccd1]/40 hover:text-white/70 focus:outline-none focus:ring-2 focus:ring-[#68ccd1]/30"
          aria-label={isPaused ? "Play carousel" : "Pause carousel"}
        >
          {isPaused ? <Play size={10} /> : <Pause size={10} />}
          {isPaused ? "Paused" : "Auto-playing"}
        </button>
      </div>
    </div>
  );
}
