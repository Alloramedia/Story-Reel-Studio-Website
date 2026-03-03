import { Metadata } from "next";
import { CaseStudiesClient } from "./CaseStudiesClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Case Studies — Real Productions, Real Results",
  description:
    "See how Story Real Studios helped manufacturers, nonprofits, biotech companies, and lifestyle brands tell their stories through cinematic video production — with measurable results.",
  alternates: {
    canonical: "https://www.storyreal.co/case-studies",
  },
  openGraph: {
    title: "Case Studies — Real Productions, Real Results | Story Real Studios",
    description:
      "See how organizations across manufacturing, biotech, nonprofit, and lifestyle industries achieved measurable growth with Story Real Studios's strategic video production.",
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
