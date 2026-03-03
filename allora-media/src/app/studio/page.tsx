import type { Metadata } from "next";
import { StudioClient } from "./StudioClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Studio — Premium Production Space & Podcast Studio in Connecticut",
  description:
    "Rent a 1,000 sq ft professional production studio in Connecticut. Equipped for video, photography, podcasts, and content creation. Hourly rentals from $95/hr. Book today.",
  alternates: {
    canonical: "https://www.storyreal.co/studio",
  },
  openGraph: {
    title:
      "Studio Rental & Podcast Production | Story Real Studios — Connecticut",
    description:
      "A premium 1,000 sq ft production space with professional lighting, 120 sq ft cyclorama wall, podcast booth, and multi-camera setup. Hourly rentals from $95/hr.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function StudioPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Studio", href: "/studio" },
        ]}
      />
      <StudioClient />
    </>
  );
}
