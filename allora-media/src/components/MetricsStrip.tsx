"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Metric {
  label: string;
  /** Static display string — used as-is when no `target` is provided */
  value: string;
  /** Numeric target for animated counter (overrides `value`) */
  target?: number;
  prefix?: string;
  suffix?: string;
  /** Industry benchmark comparison text */
  benchmark?: string;
}

interface MetricsStripProps {
  metrics: Metric[];
}

function StripCounter({
  target,
  suffix = "",
  prefix = "",
  label,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
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
      <div className="font-heading text-2xl font-black text-white md:text-3xl lg:text-4xl">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/80 md:text-sm">
        {label}
      </p>
    </div>
  );
}

function StaticMetric({ value, label, benchmark }: { value: string; label: string; benchmark?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="text-center" style={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s" }}>
      <div className="font-heading text-2xl font-black text-white md:text-3xl lg:text-4xl">
        {value}
      </div>
      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/80 md:text-sm">
        {label}
      </p>
      {benchmark && (
        <p className="mt-1 text-[10px] text-white/50">{benchmark}</p>
      )}
    </div>
  );
}

export function MetricsStrip({ metrics }: MetricsStripProps) {
  return (
    <section className="relative bg-[#65B207] py-5 lg:py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {metrics.map((metric) =>
            metric.target != null ? (
              <StripCounter
                key={metric.label}
                target={metric.target}
                prefix={metric.prefix}
                suffix={metric.suffix}
                label={metric.label}
              />
            ) : (
              <StaticMetric key={metric.label} value={metric.value} label={metric.label} benchmark={metric.benchmark} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
