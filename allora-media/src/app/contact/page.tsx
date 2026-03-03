import { Metadata } from "next";
import { ContactClient } from "./ContactClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Strategy Call",
  description:
    "Tell us about your business. We'll audit your current content strategy, show you where the biggest opportunities are, and give you a clear plan — whether you work with us or not.",
  alternates: {
    canonical: "https://www.storyreal.co/contact",
  },
  openGraph: {
    title: "Contact Story Real Studios — Book a Free Strategy Call",
    description:
      "Tell us about your business and we'll audit your current content strategy for free. Get a clear plan to drive real, measurable results — whether you work with us or not.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <ContactClient />
    </>
  );
}
