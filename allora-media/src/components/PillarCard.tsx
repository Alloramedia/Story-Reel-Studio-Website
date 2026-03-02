"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

interface PillarCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  index?: number;
}

export function PillarCard({ title, description, href, icon, index = 0 }: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard tiltIntensity={6}>
        <Link
          href={href}
          className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#131E13] p-8 transition-all duration-500 hover:border-[#65B207]/50 hover:shadow-2xl hover:shadow-[#65B207]/12 md:p-10 gradient-border-card"
        >
          <motion.div
            className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#65B207]/10 text-[#65B207]"
            whileHover={{ scale: 1.15, rotate: 8 }}
            transition={{ type: "spring", stiffness: 260, damping: 12 }}
          >
            {icon}
          </motion.div>
          <h3 className="font-heading text-xl font-bold text-white md:text-2xl">{title}</h3>
          <p className="mt-3 flex-1 text-base leading-relaxed text-white/60">
            {description}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#65B207] transition-colors">
            Learn more
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  );
}
