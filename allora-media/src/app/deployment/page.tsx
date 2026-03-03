import type { Metadata } from "next";
import DeploymentClient from "./DeploymentClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Deployment — Distribution-Ready Creative & Content Systems",
  description:
    "Your content is only as valuable as the system behind it. Story Real Studios builds distribution-ready asset libraries, platform-native formats, and funnel-integrated content systems that turn production into compounding ROI.",
  alternates: {
    canonical: "https://www.storyreal.co/deployment",
  },
  openGraph: {
    title:
      "Deployment — Distribution-Ready Creative & Content Systems | Story Real Studios",
    description:
      "Modular asset libraries, platform-native formats, funnel integration, and clear handoff frameworks — so your content actually reaches the people it was built for.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function DeploymentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Deployment", href: "/deployment" },
        ]}
      />
      <DeploymentClient />
    </>
  );
}
