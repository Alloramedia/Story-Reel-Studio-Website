"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function MeetingClient() {

  return (
    <section className="min-h-screen bg-[#0e2a35] pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#68ccd1]/10 px-4 py-2 text-sm font-semibold text-[#68ccd1]">
            <Calendar size={16} />
            Schedule a Meeting
          </div>
          <h1 className="font-heading text-3xl font-black text-white md:text-4xl lg:text-5xl">
            Pick a time that works for you.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
            Use the calendar below to schedule a discovery call with Story Real
            Studios. We&apos;ll discuss your goals, review your current content strategy,
            and map out the best path forward.
          </p>
        </motion.div>

        {/* GHL Calendar Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 rounded-2xl border border-white/10 bg-[#0a2029] p-4 md:p-8"
        >
          <iframe
            src={siteConfig.ghl.bookingUrl}
            style={{ width: "100%", border: "none", overflow: "hidden" }}
            scrolling="no"
            id="ghl-booking-calendar"
            title="Schedule a meeting with Story Real Studios"
            className="min-h-150"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
          <Script
            src={siteConfig.ghl.formEmbedScript}
            strategy="lazyOnload"
          />
        </motion.div>

        {/* Fallback contact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-white/50">
            If you have an immediate concern, call us directly at{" "}
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-1 font-medium text-[#68ccd1] hover:underline"
            >
              <Phone size={14} />
              {siteConfig.phone}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
