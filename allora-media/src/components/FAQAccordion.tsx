"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items, variant = "dark" }: { items: FAQItem[]; variant?: "dark" | "light" }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isLight = variant === "light";

  return (
    <div className={cn(
      "divide-y rounded-2xl border overflow-hidden",
      isLight
        ? "divide-white/10 border-white/10 bg-[#0e2a35]"
        : "divide-white/10 border-white/10 gradient-border-card"
    )}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;

        return (
          <div key={i} className="transition-colors hover:bg-white/[0.02]">
            <h3>
              <button
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-white transition-colors hover:bg-white/5 md:px-8"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="text-base font-semibold md:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={cn(
                    "shrink-0 text-[#68ccd1] transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-base leading-relaxed text-white/60 md:px-8">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
