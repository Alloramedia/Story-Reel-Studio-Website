"use client";

import { motion, useInView, useTransform, useScroll, type Variants } from "framer-motion";
import { useRef, useEffect, useState, type ReactNode } from "react";

/* ─── shared easing curves ─── */
const smoothOut = [0.22, 1, 0.36, 1] as const;   // fast start, cushioned end

/* ─────────────────────────────────────────────
   FADE-IN  — fade in once on scroll, stays visible
   ───────────────────────────────────────────── */
export function FadeIn({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const offsets = { up: [0, 40], down: [0, -40], left: [-60, 0], right: [60, 0], none: [0, 0] };
  const [xOff, yOff] = [offsets[direction][0], offsets[direction][1]];

  return (
    <motion.div
      initial={{ opacity: 0, y: yOff, x: xOff }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: smoothOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE-IN  — slide in once from edges, stays visible
   ───────────────────────────────────────────── */
export function SlideIn({
  children,
  className = "",
  from = "left",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "left" | "right" | "top" | "bottom";
}) {
  const offsets = {
    left:   { x: -80, y: 0 },
    right:  { x: 80, y: 0 },
    top:    { x: 0, y: -60 },
    bottom: { x: 0, y: 60 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: offsets[from].x, y: offsets[from].y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: smoothOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SCALE-IN  — scale in once on scroll, stays visible
   ───────────────────────────────────────────── */
export function ScaleIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: smoothOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   STAGGER CONTAINER + ITEM  — children cascade in
   (keeps whileInView for stagger sequencing, but not once-only)
   ───────────────────────────────────────────── */
const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: smoothOut,
    },
  },
};

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: 0.1 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   TEXT REVEAL  — words animate in one by one
   ───────────────────────────────────────────── */
export function TextReveal({
  text,
  className = "",
  delay = 0,
  tag: Tag = "h2",
}: {
  text: string;
  className?: string;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.45,
            delay: delay + i * 0.05,
            ease: smoothOut,
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}

/* ─────────────────────────────────────────────
   COUNTER  — animated number counting
   ───────────────────────────────────────────── */
export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  className = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={className}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
}

/* ─────────────────────────────────────────────
   PARALLAX WRAPPER  — moves at different scroll speed
   ───────────────────────────────────────────── */
export function Parallax({
  children,
  className = "",
  speed = 0.3,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FLOATING ELEMENT  — gentle continuous float
   ───────────────────────────────────────────── */
export function FloatingElement({
  children,
  className = "",
  amplitude = 10,
  duration = 5,
}: {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude * 0.6, -amplitude * 0.8, amplitude, -amplitude],
        x: [0, amplitude * 0.3, -amplitude * 0.2, amplitude * 0.15, 0],
        rotate: [0, 1.5, -1, 0.5, 0],
      }}
      transition={{
        duration: duration * 1.2,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   GLOW CARD  — card with animated glow on hover
   ───────────────────────────────────────────── */
export function GlowCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.025, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.7 }}
      className={`relative group ${className}`}
    >
      <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-[#68ccd1]/0 via-[#68ccd1]/0 to-[#68ccd1]/0 group-hover:from-[#68ccd1]/25 group-hover:via-[#68ccd1]/15 group-hover:to-[#68ccd1]/0 transition-all duration-600 blur-md opacity-0 group-hover:opacity-100" />
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   REVEAL LINE  — decorative animated line
   ───────────────────────────────────────────── */
export function RevealLine({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: smoothOut }}
      className={`h-px origin-left bg-linear-to-r from-[#68ccd1] to-[#68ccd1]/0 ${className}`}
    />
  );
}

/* ─────────────────────────────────────────────
   MAGNETIC BUTTON  — slight follow-cursor effect
   ───────────────────────────────────────────── */
export function MagneticHover({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   ANIMATED SECTION  — fade in once on scroll
   ───────────────────────────────────────────── */
export function AnimatedSection({
  children,
  className = "",
  id,
  variant = "fade",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "fade" | "slide-up" | "scale";
}) {
  const variants = {
    fade:     { hidden: { opacity: 0 },               visible: { opacity: 1 } },
    "slide-up": { hidden: { opacity: 0, y: 40 },        visible: { opacity: 1, y: 0 } },
    scale:    { hidden: { opacity: 0, scale: 0.92 },   visible: { opacity: 1, scale: 1 } },
  };
  const v = variants[variant];

  return (
    <motion.section
      id={id}
      initial={v.hidden}
      whileInView={v.visible}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: smoothOut }}
      className={`py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}

/* ─────────────────────────────────────────────
   BLUR-IN  — blur to clear once on scroll
   ───────────────────────────────────────────── */
export function BlurIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: smoothOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   DRAW LINE  — SVG line drawing animation
   ───────────────────────────────────────────── */
export function DrawLine({
  className = "",
  width = "100%",
}: {
  className?: string;
  width?: string;
}) {
  return (
    <motion.svg
      viewBox="0 0 100 2"
      className={className}
      style={{ width }}
      preserveAspectRatio="none"
    >
      <motion.line
        x1="0"
        y1="1"
        x2="100"
        y2="1"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

/* ─────────────────────────────────────────────
   MARQUEE  — infinite horizontal scroll
   ───────────────────────────────────────────── */
export function Marquee({
  children,
  className = "",
  speed = 25,
  direction = "left",
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROGRESS BAR  — animated width on scroll
   ───────────────────────────────────────────── */
export function AnimatedProgressBar({
  value,
  label,
  className = "",
  delay = 0,
}: {
  value: number;
  label?: string;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={className}>
      {label && <p className="mb-2 text-sm text-white/60">{label}</p>}
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: smoothOut }}
          className="h-full rounded-full bg-linear-to-r from-[#68ccd1] to-[#7dd6da]"
        />
      </div>
    </div>
  );
}
