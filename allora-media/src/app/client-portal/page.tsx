import { Metadata } from "next";
import { ClientPortalClient } from "./ClientPortalClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Client Portal — Real-Time Marketing Dashboard",
  description:
    "Access your campaign performance, creative assets, project timelines, and monthly reports 24/7 through the Allora Media Hub — your personal marketing dashboard.",
  alternates: {
    canonical: "https://www.alloramedia.us/client-portal",
  },
  openGraph: {
    title: "Client Portal — Your 24/7 Marketing Dashboard",
    description:
      "Live campaign performance, creative assets, project timelines, and archived reports — all in one dashboard. No more wondering what your marketing agency is doing.",
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
