import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Our Locations — Story Real Studios",
  description:
    "Story Real Studios serves Connecticut, New York, and New Jersey with strategy-led video production. Professional studio in CT with on-location crews across the Northeast.",
  alternates: {
    canonical: "https://www.storyreal.co/locations",
  },
  openGraph: {
    title: "Our Locations | Story Real Studios",
    description:
      "Professional video production across Connecticut, New York, and New Jersey. Studio-based and on-location crews available.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const locationCards = [
  {
    slug: "connecticut",
    name: "Connecticut",
    description:
      "Our home base. Professional production studio with on-location crews serving the entire state.",
  },
  {
    slug: "new-york",
    name: "New York",
    description:
      "Serving NYC, Westchester, Long Island, and the Hudson Valley with cinematic video campaigns.",
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    description:
      "Strategy-driven video production for northern and central NJ businesses.",
  },
];

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
        ]}
      />

      <section className="relative bg-[#080808] noise-texture py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-[#68ccd1]">
            Where We Work
          </p>
          <h1 className="mx-auto max-w-3xl text-center font-heading text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Our Locations
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-white/60">
            Story Real Studios operates a professional production studio in Connecticut and sends on-location crews across the Northeast.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locationCards.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group block"
              >
                <div className="h-full rounded-2xl border border-white/10 bg-[#151515] p-8 transition-all duration-300 hover:border-[#68ccd1]/40 hover:shadow-lg hover:shadow-[#68ccd1]/5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#68ccd1]/10 border border-[#68ccd1]/20">
                    <MapPin size={24} className="text-[#68ccd1]" />
                  </div>
                  <h2 className="mb-2 text-xl font-bold text-white group-hover:text-[#68ccd1] transition-colors">
                    {loc.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-white/60">
                    {loc.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#68ccd1]">
                    View details <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
