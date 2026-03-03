import { Metadata } from "next";
import { AboutClient } from "./AboutClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About Us — Strategy-Led Video Production Studio",
  description:
    "Story Real Studios is a strategy-led video production studio based in Connecticut. Learn how we evolved from a media production company into a complete production partner for purpose-led organizations.",
  alternates: {
    canonical: "https://www.storyreal.co/about",
  },
  openGraph: {
    title: "About Story Real Studios — Strategy-Led Video Production in Connecticut",
    description:
      "From media production roots to a strategy-led video production studio — learn how Story Real Studios helps purpose-led organizations grow with strategy, cinematic production, and content systems.",
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
