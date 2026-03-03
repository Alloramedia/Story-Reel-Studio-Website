"use client";

import { motion } from "framer-motion";
import { CheckCircle, Calendar, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { siteConfig } from "@/lib/constants";

export function ThankYouClient() {
  return (
    <section className="min-h-screen bg-[#080808] pt-32 pb-20">
      {/* GoHighLevel form embed script */}
      <Script
        src={siteConfig.ghl.formEmbedScript}
        strategy="lazyOnload"
      />
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <CheckCircle size={56} className="mx-auto mb-6 text-[#68ccd1]" />
          </motion.div>
          <h1 className="font-heading text-3xl font-black text-white md:text-4xl lg:text-5xl">
            Thank you for contacting us.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
            We&apos;ve received your information and our team will get back to
            you within one business day. Want to skip the wait? Schedule a
            discovery call right now using the calendar below.
          </p>
        </motion.div>

        {/* What happens next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-6 md:p-8">
            <h2 className="mb-4 text-center text-lg font-bold text-white">
              What happens next?
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  text: "We review your information and research your business and market.",
                },
                {
                  step: "2",
                  text: "We reach out with an honest assessment of where the biggest opportunities are.",
                },
                {
                  step: "3",
                  text: "If it makes sense, we build a custom strategy and proposal for your business.",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#68ccd1]/10 text-sm font-bold text-[#68ccd1]">
                    {item.step}
                  </div>
                  <p className="pt-1 text-sm text-white/60">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Calendar Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#68ccd1]/10 px-4 py-2 text-sm font-semibold text-[#68ccd1]">
            <Calendar size={16} />
            Skip the Wait — Book a Call Now
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="rounded-2xl border border-white/10 bg-[#111111] p-4 md:p-8"
        >
          <iframe
            src={siteConfig.ghl.bookingUrl}
            style={{ width: "100%", border: "none", overflow: "hidden" }}
            scrolling="no"
            id="ghl-booking-calendar-thankyou"
            title="Schedule a meeting with Allora Media"
            className="min-h-150"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </motion.div>

        {/* Bottom links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/5"
          >
            See Our Case Studies
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/5"
          >
            Read Our Blog
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Phone fallback */}
        <div className="mt-8 text-center">
          <p className="text-sm text-white/50">
            Need to talk now? Call us at{" "}
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-1 font-medium text-[#68ccd1] hover:underline"
            >
              <Phone size={14} />
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
