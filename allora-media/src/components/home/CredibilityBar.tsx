"use client";

import { Counter } from "@/components/Counter";
import { credibilityStats } from "@/lib/constants";

export function CredibilityBar() {
  return (
    <section className="relative py-5 lg:py-6 bg-[#68ccd1]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <Counter target={parseInt(credibilityStats.businessesServed)} suffix="+" label="Businesses Served" numberColor="text-white" labelColor="text-white/80" />
          <Counter target={7} suffix="+" label="Years of Experience" numberColor="text-white" labelColor="text-white/80" />
          <Counter target={parseFloat(credibilityStats.googleRating)} suffix=".0" label="Google Rating" numberColor="text-white" labelColor="text-white/80" />
          <Counter target={30} suffix="M+" label="Ad Impressions Delivered" numberColor="text-white" labelColor="text-white/80" />
        </div>
      </div>
    </section>
  );
}
