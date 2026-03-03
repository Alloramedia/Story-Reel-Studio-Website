import { Metadata } from "next";
import { VideoProductionClient } from "./VideoProductionClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Video Production Services in Connecticut — Commercial & Brand Video",
  description:
    "Professional video production for businesses in Connecticut. TV commercials, testimonial videos, brand stories, drone content, and social media video — all produced in-house and built to perform.",
  alternates: {
    canonical: "https://www.storyreal.co/video-production",
  },
  openGraph: {
    title: "Video Production Services in Connecticut | Story Real Studios",
    description:
      "TV commercials, testimonial videos, brand stories, drone content, and social media video — professionally produced for businesses ready to stand out and convert more customers.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function VideoProductionPage() {
  return (
    <>
      <ServiceSchema
        name="Video Production Services"
        description="Professional video production for Connecticut businesses — TV commercials, testimonial videos, brand stories, drone content, and social media video."
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
