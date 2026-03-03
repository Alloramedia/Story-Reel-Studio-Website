import type { Metadata } from "next";
import WorkClient from "./WorkClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Our Work — Case Studies & Client Results",
  description:
    "Real campaigns. Measured results. See how Story Real Studios builds cinematic video systems that shorten sales cycles, increase conversions, and compound trust for organizations across industries.",
  alternates: {
    canonical: "https://www.storyreal.co/work",
  },
  openGraph: {
    title: "Our Work — Case Studies & Client Results | Story Real Studios",
    description:
      "Real campaigns. Measured results. Explore case studies from manufacturing, nonprofit, biotech, real estate, and consumer brands — all powered by the Story Real Method.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function WorkPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
        ]}
      />
      <WorkClient />
    </>
  );
}
