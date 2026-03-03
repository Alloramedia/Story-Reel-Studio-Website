import { Metadata } from "next";
import { PaidMediaClient } from "./PaidMediaClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Paid Media — Video-Powered Advertising on Meta & YouTube",
  description:
    "Deploy your cinematic video content through targeted paid campaigns on Facebook, Instagram, and YouTube. Strategy-led media buying powered by professional production.",
  alternates: {
    canonical: "https://www.storyreal.co/paid-media",
  },
  openGraph: {
    title: "Paid Media — Video-Powered Advertising That Drives Real Growth",
    description:
      "Deploy cinematic video content through targeted paid campaigns. Full tracking, creative testing, and distribution strategy — powered by Story Real Studios production.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PaidMediaPage() {
  return (
    <>
      <ServiceSchema
        name="Video-Powered Paid Media"
        description="Deploy cinematic video content through targeted paid campaigns on Facebook, Instagram, and YouTube. Strategy-led media buying powered by professional production from Story Real Studios."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Paid Media", href: "/paid-media" },
        ]}
      />
      <PaidMediaClient />
    </>
  );
}
