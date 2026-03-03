import type { Metadata } from "next";
import ProductionClient from "./ProductionClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Production — Cinematic Video Production & Creative Execution",
  description:
    "Brand films, testimonials, factory tours, product demos, recruitment, training, commercials, drone, and post-production — all built for performance, not just aesthetics. Story Real Studios delivers cinematic video that earns trust and drives measurable business results.",
  alternates: {
    canonical: "https://www.storyreal.co/production",
  },
  openGraph: {
    title:
      "Production — Cinematic Video Production & Creative Execution | Story Real Studios",
    description:
      "Full-service cinematic production: brand films, testimonials, factory tours, product demos, recruitment, training, commercials & OTT, drone, post-production, and motion/3D partner workflows — built to perform.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ProductionPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Production", href: "/production" },
        ]}
      />
      <ProductionClient />
    </>
  );
}
