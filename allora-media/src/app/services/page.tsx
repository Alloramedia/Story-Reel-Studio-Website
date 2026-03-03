import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Services — Strategy, Production & Deployment",
  description:
    "The Story Real Method combines strategy, cinematic production, and multi-channel deployment into one integrated system. Testimonial videos, factory tours, commercials, drone, 3D animation, and more.",
  alternates: {
    canonical: "https://www.storyreal.co/services",
  },
  openGraph: {
    title: "Services — Strategy, Production & Deployment | Story Real Studios",
    description:
      "Strategy. Production. Deployment. Three pillars, one integrated system — built to create cinematic content that compounds trust and drives measurable growth.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <ServicesClient />
    </>
  );
}
