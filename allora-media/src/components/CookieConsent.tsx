"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay showing the banner slightly to avoid layout shift
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    window.dispatchEvent(
      new CustomEvent("cookie-consent-change", { detail: "accepted" })
    );
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
    window.dispatchEvent(
      new CustomEvent("cookie-consent-change", { detail: "declined" })
    );
    // Disable GA if it was already loaded
    (window as Record<string, unknown>)[`ga-disable-${process.env.NEXT_PUBLIC_GA_ID}`] = true;
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl px-6 py-4 shadow-2xl"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-white/70">
              We use cookies and analytics to improve your experience. By continuing
              to use this site, you agree to our{" "}
              <Link
                href="/website-policies#privacy-policy"
                className="text-[#68ccd1] underline hover:text-[#7dd6da]"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={decline}
                className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/70 transition-all hover:border-white/40 hover:text-white hover:bg-white/5"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="rounded-full bg-[#68ccd1] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#7dd6da] hover:shadow-lg hover:shadow-[#68ccd1]/20"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
