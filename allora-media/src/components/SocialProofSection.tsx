"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { googleReview } from "@/lib/constants";
import { GoogleLogo } from "@/components/GoogleLogo";

const GOOGLE_RATING = googleReview.rating;
const GOOGLE_REVIEW_URL = googleReview.url;

export function SocialProofSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 lg:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#68ccd1]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#68ccd1]/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68ccd1]">
            Real Reviews
          </p>
          <h2 className="font-heading text-3xl font-black text-white md:text-4xl lg:text-5xl">
            Don&apos;t take our word for it — check Google.
          </h2>
        </motion.div>

        {/* Google Reviews Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-2xl"
        >
          {/* Glow backdrop */}
          <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-[#68ccd1]/6 via-transparent to-[#68ccd1]/3 blur-2xl pointer-events-none" />

          <div className="relative rounded-2xl border border-white/8 bg-[#111611]/80 p-8 md:p-12 backdrop-blur-sm overflow-hidden">
            {/* Radial highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#68ccd1]/4 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center">
              {/* Google branding */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6 flex items-center justify-center gap-2"
              >
                <GoogleLogo className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-wider text-white/50">
                  Google Reviews
                </span>
              </motion.div>

              {/* Stars */}
              <div className="mb-4 flex items-center justify-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + i * 0.08,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <Star
                      size={32}
                      className="fill-[#FBBC05] text-[#FBBC05] drop-shadow-[0_0_8px_rgba(251,188,5,0.4)]"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Rating */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="font-heading text-5xl font-black text-white md:text-6xl"
              >
                {GOOGLE_RATING}
              </motion.p>

              {/* Rating label */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-2 text-base text-white/50"
              >
                5-Star Rated on Google
              </motion.p>

              {/* Divider */}
              <div className="mx-auto my-8 h-px w-16 bg-linear-to-r from-transparent via-[#68ccd1]/40 to-transparent" />

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mx-auto max-w-md text-lg leading-relaxed text-white/60"
              >
                Real businesses. Real results. Don&apos;t take our word for it
                — see what our clients have to say on Google.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-8"
              >
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#68ccd1] to-[#4a8a05] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#68ccd1]/20 transition-all duration-300 hover:shadow-[#68ccd1]/30 hover:scale-[1.03]"
                >
                  <GoogleLogo className="h-5 w-5" />
                  Read Our Reviews on Google
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
