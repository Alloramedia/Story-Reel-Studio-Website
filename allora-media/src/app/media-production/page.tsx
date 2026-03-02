import { Metadata } from "next";
import { MediaProductionClient } from "./MediaProductionClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Video & Photo Production in Connecticut — Commercial Media",
  description:
    "Professional video production, commercial photography, drone content, and graphic design for businesses in Connecticut. Every piece is built to perform in ads, on your website, and across social media.",
  alternates: {
    canonical: "https://www.alloramedia.us/media-production",
  },
  openGraph: {
    title: "Professional Video & Photo Production in Connecticut",
    description:
      "TV commercials, testimonial videos, drone content, corporate photography, product shoots, and graphic design — all produced in-house and built to perform in marketing campaigns.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function MediaProductionPage() {
  return (
    <>
      <ServiceSchema
        name="Video & Photo Production"
        description="Professional video production, commercial photography, drone content, and graphic design for Connecticut businesses."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Media Production", href: "/media-production" },
        ]}
      />
      <MediaProductionClient />
    </>
  );
}
