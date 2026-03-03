import { Metadata } from "next";
import { CaseStudiesClient } from "./CaseStudiesClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Case Studies — Real Campaigns, Real Results",
  description:
    "See how real businesses went from inconsistent content to measurable growth. Case studies from construction, home services, restaurants, beauty, and professional services.",
  alternates: {
    canonical: "https://www.storyreal.co/case-studies",
  },
  openGraph: {
    title: "Case Studies — Real Campaigns, Real Results | Story Real Studios",
    description:
      "See how businesses across construction, home services, food & beverage, beauty, and professional services achieved measurable growth with Story Real Studios's video production and content systems.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Case Studies", href: "/case-studies" },
        ]}
      />
      <CaseStudiesClient />
    </>
  );
}
