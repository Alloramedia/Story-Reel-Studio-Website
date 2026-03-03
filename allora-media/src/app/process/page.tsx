import { Metadata } from "next";
import { ProcessClient } from "./ProcessClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Our Process — How We Build Your Content System",
  description:
    "See exactly how we take you from signed to scaling: Discovery, Strategy, Production, Launch, Optimization, and Monthly Review. A structured six-step process with no surprises.",
  alternates: {
    canonical: "https://www.storyreal.co/process",
  },
  openGraph: {
    title: "Our Process — From Discovery to Results in 6 Steps",
    description:
      "Discovery, Strategy, Content Production, Campaign Launch, Optimization, and Monthly Review. A structured production process with no surprises and complete transparency.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ProcessPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Our Process", href: "/process" },
        ]}
      />
      <ProcessClient />
    </>
  );
}
