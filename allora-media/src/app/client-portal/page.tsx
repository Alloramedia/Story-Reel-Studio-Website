import { Metadata } from "next";
import { ClientPortalClient } from "./ClientPortalClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Client Portal — Real-Time Production Dashboard",
  description:
    "Access your project performance, creative assets, project timelines, and monthly reports 24/7 through the Story Real Studios Hub — your personal production dashboard.",
  alternates: {
    canonical: "https://www.storyreal.co/client-portal",
  },
  openGraph: {
    title: "Client Portal — Your 24/7 Production Dashboard",
    description:
      "Live project performance, creative assets, project timelines, and archived reports — all in one dashboard. No more wondering what your production studio is doing.",
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
