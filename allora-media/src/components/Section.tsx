"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type SectionVariant = "dark" | "light" | "green" | "accent";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: SectionVariant;
}

const variantStyles: Record<SectionVariant, string> = {
  dark: "bg-[#080808] noise-texture",
  light: "bg-[#d4e4c1] text-[#0f3d15]",
  green: "bg-[#0f3d15] noise-texture",
  accent: "bg-[#65B207]",
};

export function Section({ children, className = "", id, variant }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  const variantClass = variant ? variantStyles[variant] : "";

  return (
    <section
      ref={ref}
      id={id}
      className={`relative overflow-hidden py-20 md:py-28 ${variantClass} ${className}`}
    >
      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">{children}</motion.div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
  variant,
  eyebrowColor,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
  variant?: SectionVariant;
  eyebrowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isLight = variant === "light";
  const titleColor = isLight ? "text-[#0f3d15]" : "text-white";
  const descColor = isLight ? "text-[#0f3d15]/60" : "text-white/60";

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`mb-12 max-w-3xl md:mb-16 ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className={`mb-3 text-sm font-bold uppercase tracking-[0.2em] ${eyebrowColor ?? "text-[#65B207]"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-heading text-3xl font-black tracking-tight md:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed md:text-xl ${descColor}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
