import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";
import { ServiceClient } from "./ServiceClient";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/StructuredData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.name} — Professional Media Production in CT`,
    description: `${service.subhead} Professional ${service.name.toLowerCase()} for businesses in Connecticut by Story Real Studios.`,
    alternates: {
      canonical: `https://www.storyreal.co/services/${slug}`,
    },
    openGraph: {
      title: `${service.name} — Professional ${service.name} in Connecticut`,
      description: service.subhead,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceSchema
        name={service.name}
        description={service.subhead}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Media Production", href: "/media-production" },
          { name: service.name, href: `/services/${slug}` },
        ]}
      />
      {service.faqs && service.faqs.length > 0 && (
        <FAQSchema faqs={service.faqs} />
      )}
      <ServiceClient service={service} />
    </>
  );
}
