import { Metadata } from "next";
import { PaidMediaClient } from "./PaidMediaClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Facebook & Instagram Advertising Services — Meta Ads Management",
  description:
    "Get more leads from Facebook and Instagram ads. We build, manage, and optimize paid advertising campaigns for Connecticut businesses — with full tracking and monthly reporting.",
  alternates: {
    canonical: "https://www.alloramedia.us/paid-media",
  },
  openGraph: {
    title: "Paid Media — Facebook & Instagram Ads That Bring in Customers",
    description:
      "We build, manage, and optimize Facebook & Instagram ad campaigns for Connecticut businesses. Full tracking, monthly reporting, and a strategy focused on leads and revenue — not just clicks.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PaidMediaPage() {
  return (
    <>
      <ServiceSchema
        name="Facebook & Instagram Advertising"
        description="We build, manage, and optimize paid advertising campaigns on Facebook and Instagram for Connecticut businesses — with full tracking and monthly reporting."
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
