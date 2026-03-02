"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  clientName: string;
  websiteUrl?: string;
  logo?: string;
  services: string[];
  summary: string;
  challenge: string[];
  buildingFoundation: string[];
  strategy: string[];
  activeManagement: string[];
  results: string[];
  pullQuote: string;
  metrics: { value: string; label: string; benchmark?: string }[];
  image: string;
}

export function CaseStudyCard({
  study,
  index = 0,
}: {
  study: CaseStudy;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-[#131E13] gradient-border-card transition-all duration-500 hover:shadow-2xl hover:shadow-[#65B207]/8"
    >
      <Link href={`/case-studies/${study.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden image-shine">
          <Image
            src={study.image}
            alt={study.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-800 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#131E13] to-transparent" />
          <span className="absolute bottom-3 left-4 inline-flex rounded-full bg-[#65B207]/20 px-3 py-1 text-xs font-semibold text-[#65B207]">
            {study.industry}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-heading text-lg font-bold text-white">{study.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-white/55">{study.summary}</p>
          {study.metrics && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {study.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <p className="font-heading text-lg font-bold text-[#65B207]">{m.value}</p>
                  <p className="text-xs text-white/60">{m.label}</p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#65B207] transition-all group-hover:translate-x-1">
            Read case study <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
