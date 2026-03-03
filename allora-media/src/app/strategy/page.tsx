import type { Metadata } from "next";
import StrategyClient from "./StrategyClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Strategy — Brand Story & Campaign Strategy",
  description:
    "Before a single frame is shot, we define your messaging, audience, channel intent, and story architecture. The result: a Media Blueprint that aligns stakeholders and drives every creative decision forward.",
  alternates: {
    canonical: "https://www.storyreal.co/strategy",
  },
  openGraph: {
    title: "Strategy — Brand Story & Campaign Strategy | Story Real Studios",
    description:
      "Messaging frameworks, audience mapping, story architecture, and a tangible Media Blueprint — built before production begins so every dollar you spend has intent behind it.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function StrategyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Strategy", href: "/strategy" },
        ]}
      />
      <StrategyClient />
    </>
  );
}
