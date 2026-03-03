import type { Metadata } from "next";
import { PricingClient } from "./PricingClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Pricing — Strategy, Campaign & Content System Packages",
  description:
    "Transparent pricing for cinematic video campaigns. Strategy Blueprints from $5K, Campaign Production from $15K, Ongoing Content Systems from $5K/month. See how scope works.",
  alternates: {
    canonical: "https://www.storyreal.co/pricing",
  },
  openGraph: {
    title: "Pricing — Strategy, Campaigns & Ongoing Content | Story Real Studios",
    description:
      "Three engagement modes built around how organizations actually buy video. Transparent ranges, clear deliverables, and no hidden costs.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ]}
      />
      <PricingClient />
    </>
  );
}
