import { Metadata } from "next";
import { OrganicSocialClient } from "./OrganicSocialClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Social Media Management — Instagram, Facebook & LinkedIn",
  description:
    "Professional social media management for Instagram, Facebook, and LinkedIn. We keep your brand active, build trust with your audience, and grow retargeting audiences that improve your ad performance.",
  alternates: {
    canonical: "https://www.alloramedia.us/organic-social",
  },
  openGraph: {
    title: "Social Media Management — Instagram, Facebook & LinkedIn",
    description:
      "Professional social media management that keeps your brand active and builds trust. We handle content, scheduling, and community management so your business looks polished everywhere.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function OrganicSocialPage() {
  return (
    <>
      <ServiceSchema
        name="Social Media Management"
        description="Professional social media management for Instagram, Facebook, and LinkedIn. Content, scheduling, and community management."
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
