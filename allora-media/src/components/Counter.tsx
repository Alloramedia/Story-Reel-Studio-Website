"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function Counter({
  target,
  suffix = "",
  prefix = "",
  label,
  numberColor = "text-[#65B207]",
  labelColor = "text-white/55",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  numberColor?: string;
  labelColor?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
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
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className={`font-heading text-2xl font-black ${numberColor} md:text-3xl lg:text-4xl counter-number`}>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className={`mt-1 text-xs uppercase tracking-[0.15em] ${labelColor} md:text-sm`}>
        {label}
      </p>
    </div>
  );
}
