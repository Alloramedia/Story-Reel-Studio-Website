import { Metadata } from "next";
import { PersonalClient } from "./PersonalClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title:
    "Cheli Photography | Personal Photographer in CT | Weddings, Events & Family",
  description:
    "Cheli Photography — professional photography & video for weddings, events, family portraits, engagement photos, senior photos, and maternity sessions in Connecticut. Book a free consultation today!",
  alternates: {
    canonical: "https://www.storyreal.co/personal",
  },
  openGraph: {
    title: "Cheli Photography | Personal Photographer in CT",
    description:
      "Capture life's biggest moments with Cheli Photography — weddings, events, family portraits, engagement sessions, senior photos, and maternity shoots throughout Connecticut.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PersonalPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Cheli Photography", href: "/personal" },
        ]}
      />
      <PersonalClient />
    </>
  );
}
