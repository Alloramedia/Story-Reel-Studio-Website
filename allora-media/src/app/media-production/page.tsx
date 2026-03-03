import { Metadata } from "next";
import { MediaProductionClient } from "./MediaProductionClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Media Production — Professional Video, Photo & Design",
  description:
    "Full-service media production: cinematic video, professional photography, drone content, and graphic design. Every asset produced in-house by Story Real Studios.",
  alternates: {
    canonical: "https://www.storyreal.co/media-production",
  },
  openGraph: {
    title: "Media Production — Cinematic Content Built to Perform",
    description:
      "Professional video production, commercial photography, drone content, and graphic design — built to perform across every channel.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function MediaProductionPage() {
  return (
    <>
      <ServiceSchema
        name="Media Production"
        description="Full-service media production: cinematic video, professional photography, drone content, and graphic design — produced in-house by Story Real Studios."
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
