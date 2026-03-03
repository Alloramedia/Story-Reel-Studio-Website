import { Metadata } from "next";
import { OrganicSocialClient } from "./OrganicSocialClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Organic Social — Content Deployment Across Every Platform",
  description:
    "Deploy your video content organically across Instagram, Facebook, YouTube, LinkedIn, and TikTok. Strategy-led posting, platform management, and content distribution — powered by Story Real Studios production.",
  alternates: {
    canonical: "https://www.storyreal.co/organic-social",
  },
  openGraph: {
    title: "Organic Social — Video Content Deployment That Builds Your Brand",
    description:
      "Professional video content deployed strategically across every social platform. Content calendars, platform management, and brand-building — powered by Story Real Studios.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function OrganicSocialPage() {
  return (
    <>
      <ServiceSchema
        name="Organic Social Content Deployment"
        description="Strategic deployment of professional video content across Instagram, Facebook, YouTube, LinkedIn, and TikTok — powered by Story Real Studios production."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Organic Social", href: "/organic-social" },
        ]}
      />
      <OrganicSocialClient />
    </>
  );
}
