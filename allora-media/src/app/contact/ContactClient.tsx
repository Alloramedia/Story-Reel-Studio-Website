"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, Star, ShieldCheck, Clock, Zap } from "lucide-react";
import { Section } from "@/components/Section";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { HeroBanner } from "@/components/HeroBanner";
import { credibilityStats } from "@/lib/constants";


const helpOptions = [
  "Facebook & Instagram Advertising",
  "Video & Photo Production",
  "Content Systems & Deployment",
  "Full Production System (All Services)",
  "Not sure — I need guidance",
];

const inputClasses =
  "w-full rounded-lg border border-white/10 bg-[#0e1e25] px-4 py-3 text-base text-white placeholder:text-white/30 transition-all duration-300 focus:border-[#68ccd1] focus:ring-2 focus:ring-[#68ccd1]/20 focus:outline-none";

export function ContactClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;

    // Honeypot check — bots fill this hidden field
    const honeypot = (form.elements.namedItem("confirm_url") as HTMLInputElement)
      ?.value;
    if (honeypot) {
      router.push("/contact/thank-you");
      return;
    }

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      help: (form.elements.namedItem("help") as HTMLSelectElement).value,
      companyWebsite: (form.elements.namedItem("companyWebsite") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        router.push("/contact/thank-you");
        return;
      } else {
        const errData = await res.json().catch(() => null);
        setError(
          errData?.error ||
            "Something went wrong. Please try again or call us directly."
        );
      }
    } catch {
      setError(
        "Network error — please check your connection and try again, or call us directly."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <HeroBanner
        videoSrc="/videos/hero-about.mp4"
        overlayOpacity={70}
        cursorSpotlight
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-sm font-bold uppercase text-balance text-[#68ccd1]"
          >
            Book a Strategy Call
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-heading font-black leading-tight tracking-tight text-pretty md:text-5xl lg:text-6xl"
          >
            Let&apos;s see if we&apos;re the right fit.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Tell us a little about your business and what you&apos;re looking
            for. We&apos;ll review your information, do some homework on your
            market, and come back with an honest assessment — not a sales pitch.
            If we&apos;re not the right fit, we&apos;ll tell you.
          </motion.p>
        </div>
      </HeroBanner>

      <Section variant="dark">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* FORM */}
            <FadeIn direction="up" delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot — hidden from real users, traps bots */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="confirm_url">Confirm URL</label>
                  <input
                    type="text"
                    id="confirm_url"
                    name="confirm_url"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {error && (
                  <div
                    className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                    role="alert"
                  >
                    {error}
                  </div>
                )}

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={inputClasses}
                      placeholder="First and last name"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="mb-2 block text-sm font-medium">
                      Business name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      required
                      className={inputClasses}
                      placeholder="Your company or brand"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={inputClasses}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={inputClasses}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="companyWebsite" className="mb-2 block text-sm font-medium">
                    Company website (optional)
                  </label>
                  <input
                    type="url"
                    id="companyWebsite"
                    name="companyWebsite"
                    className={inputClasses}
                    placeholder="https://yourcompany.com"
                  />
                </div>

                <div>
                  <label htmlFor="help" className="mb-2 block text-sm font-medium">
                    What do you need help with?
                  </label>
                  <select id="help" name="help" required className={inputClasses}>
                    <option value="">Select an option</option>
                    {helpOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Tell us more about your situation (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={inputClasses}
                    placeholder="What's your biggest frustration with your content right now? What have you tried? What are you hoping to achieve?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-[#68ccd1] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#68ccd1]/25 transition-all duration-300 hover:bg-[#7dd6da] hover:scale-[1.03] disabled:opacity-50 disabled:hover:scale-100"
                >
                  {loading ? "Sending..." : "Send My Inquiry"}
                </button>

                <p className="text-center text-xs text-white/60">
                  By submitting this form, you agree to our{" "}
                  <a
                    href="/website-policies"
                    className="underline hover:text-white/80"
                  >
                    terms &amp; conditions
                  </a>
                  . We respond within one business day. No spam. No generic pitch
                  decks.
                </p>
              </form>
            </FadeIn>

            {/* SIDEBAR — TRUST SIGNALS */}
            <SlideIn from="right" className="space-y-6">
              {/* What Happens Next */}
              <div className="rounded-2xl border border-white/10 bg-[#151515] p-6 hover-lift">
                <h3 className="mb-4 font-heading text-lg font-bold text-white">
                  What happens next?
                </h3>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "We review your info and research your market" },
                    { step: "2", text: "We reach out within 1 business day with an assessment" },
                    { step: "3", text: "We schedule a Strategy Call (~30 min)" },
                    { step: "4", text: "You get a clear plan — whether you hire us or not" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#68ccd1]/10 text-xs font-bold text-[#68ccd1]">
                        {item.step}
                      </div>
                      <span className="text-sm text-white/60">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Limited Spots */}
              <div className="rounded-2xl border border-[#68ccd1]/20 bg-[#68ccd1]/5 p-6 text-center border-glow">
                <Clock size={24} className="mx-auto mb-3 text-[#68ccd1]" />
                <p className="font-heading text-base font-bold text-white">
                  We take 3–5 new clients per month.
                </p>
                <p className="mt-2 text-sm text-white/55">
                  To keep work quality high, we limit onboarding. If you&apos;re
                  serious about growing, don&apos;t wait.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="rounded-2xl border border-white/10 bg-[#151515] p-6 hover-lift">
                <StaggerContainer className="space-y-4">
                  {[
                    { icon: <Star size={16} />, text: "5.0 Google Rating" },
                    { icon: <ShieldCheck size={16} />, text: "Month-to-month flexibility" },
                    { icon: <CheckCircle size={16} />, text: `${credibilityStats.businessesServed} businesses served` },
                    { icon: <Zap size={16} />, text: "Free Strategy Session included" },
                  ].map((item, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-center gap-3">
                        <span className="text-[#68ccd1]">{item.icon}</span>
                        <span className="text-sm text-white/60">{item.text}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Quick Quote */}
              <div className="rounded-2xl border border-white/10 bg-[#151515] p-6 hover-lift">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#68ccd1] text-[#68ccd1]" />
                  ))}
                </div>
                <p className="text-sm italic leading-relaxed text-white/60">
                  &ldquo;Before Story Real, we were running on referrals and hoping
                  the phone would ring. Now we have a real pipeline. Total game
                  changer.&rdquo;
                </p>
                <p className="mt-3 text-xs font-bold text-white/40">
                  Casey Electrical Services
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </Section>
    </>
  );
}
