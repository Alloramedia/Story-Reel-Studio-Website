import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationClient } from "./LocationClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

/* ── Location data ── */
const locations: Record<
  string,
  {
    name: string;
    fullName: string;
    metaTitle: string;
    metaDescription: string;
    areas: string[];
    intro: string;
  }
> = {
  connecticut: {
    name: "Connecticut",
    fullName: "Connecticut",
    metaTitle: "Video Production in Connecticut — Story Real Studios",
    metaDescription:
      "Story Real Studios delivers strategy-led video campaigns for Connecticut businesses. Professional production studio in CT. Testimonials, brand films, training videos, and more.",
    areas: [
      "Hartford",
      "New Haven",
      "Stamford",
      "Bridgeport",
      "Waterbury",
      "Danbury",
      "Norwalk",
      "Bristol",
      "Meriden",
      "Middletown",
    ],
    intro:
      "Our home base. Story Real Studios operates a professional production studio in Connecticut, serving businesses across the state from Hartford to Greenwich. Whether you need on-location shooting at your facility or a controlled studio environment, we bring the full production team to you.",
  },
  "new-york": {
    name: "New York",
    fullName: "New York & the Tri-State Area",
    metaTitle: "Video Production in New York — Story Real Studios",
    metaDescription:
      "Story Real Studios creates cinematic video campaigns for New York businesses. Serving NYC, Westchester, Long Island, and the Hudson Valley with strategy-led video production.",
    areas: [
      "New York City",
      "Westchester",
      "Long Island",
      "Hudson Valley",
      "White Plains",
      "Yonkers",
      "Rockland County",
    ],
    intro:
      "We regularly serve clients across New York — from Manhattan boardrooms to Hudson Valley manufacturing floors. Our Connecticut studio is a short drive from the metro area, and our production crews travel to you for on-location shoots anywhere in the state.",
  },
  "new-jersey": {
    name: "New Jersey",
    fullName: "New Jersey",
    metaTitle: "Video Production in New Jersey — Story Real Studios",
    metaDescription:
      "Story Real Studios produces strategy-driven video campaigns for New Jersey businesses. Serving northern and central NJ with professional video production, testimonials, and content systems.",
    areas: [
      "Newark",
      "Jersey City",
      "Princeton",
      "Morristown",
      "Hoboken",
      "Paramus",
      "Edison",
      "Trenton",
    ],
    intro:
      "Story Real Studios serves businesses across New Jersey with the same strategy-led approach we bring to every market. Our production team travels to your location — whether it's a corporate campus in Princeton or a manufacturing facility in Edison — to capture authentic stories that build trust and drive growth.",
  },
};

/* ── Types ── */
interface Props {
  params: Promise<{ slug: string }>;
}

/* ── Static params ── */
export function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({ slug }));
}

/* ── Dynamic metadata ── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations[slug];
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `https://www.storyreal.co/locations/${slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

/* ── Page ── */
export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locations[slug];
  if (!location) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: location.name, href: `/locations/${slug}` },
        ]}
      />
      <LocationClient location={location} />
    </>
  );
}
