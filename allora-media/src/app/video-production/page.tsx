import { Metadata } from "next";
import { VideoProductionClient } from "./VideoProductionClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Video Production — Cinematic Content for Purpose-Driven Organizations",
  description:
    "Telly Award-winning video production studio. Brand story documentaries, interview production, drone content, and strategic video for biotech, manufacturing, nonprofits, and health systems.",
  alternates: {
    canonical: "https://www.storyreal.co/video-production",
  },
  openGraph: {
    title: "Video Production | Story Real Studios",
    description:
      "Brand story documentaries, interview production, drone content, and strategic video — produced with purpose for organizations that matter.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function VideoProductionPage() {
  return (
    <>
      <ServiceSchema
        name="Video Production Services"
        description="Telly Award-winning video production — brand story documentaries, interview production, drone content, and strategic video for purpose-driven organizations."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Video Production", href: "/video-production" },
        ]}
      />
      <VideoProductionClient />
    </>
  );
}
