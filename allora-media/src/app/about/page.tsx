import { Metadata } from "next";
import { AboutClient } from "./AboutClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About Us — Marketing Agency in Southington, CT",
  description:
    "Allora Media is a full-service marketing agency based in Southington, Connecticut. Learn how we evolved from a media production company into a complete marketing partner for local businesses.",
  alternates: {
    canonical: "https://www.alloramedia.us/about",
  },
  openGraph: {
    title: "About Allora Media — Marketing Agency in Southington, CT",
    description:
      "Founded in Southington, CT. From media production roots to a full-service marketing agency — learn how Allora Media helps local businesses grow with paid ads, video, and strategy.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <AboutClient />
    </>
  );
}
