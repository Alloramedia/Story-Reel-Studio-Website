import { Metadata } from "next";
import { ClientPortalClient } from "./ClientPortalClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Client Portal — Content Library & Project Dashboard",
  description:
    "Access your content library, project timelines, strategy documents, and performance insights 24/7 through the Story Real Studios Hub — your personal project dashboard.",
  alternates: {
    canonical: "https://www.storyreal.co/client-portal",
  },
  openGraph: {
    title: "Client Portal — Your Content & Project Dashboard",
    description:
      "Your complete content library, project timelines, strategy documents, and performance insights — all in one dashboard. No more chasing files or wondering where your project stands.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ClientPortalPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Client Portal", href: "/client-portal" },
        ]}
      />
      <ClientPortalClient />
    </>
  );
}
