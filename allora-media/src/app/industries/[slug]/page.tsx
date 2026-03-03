import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryBySlug, getAllIndustrySlugs } from "@/lib/industries-data";
import { IndustryClient } from "./IndustryClient";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/StructuredData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return {
    title: `${industry.name} Video Production & Content Systems in CT`,
    description: `${industry.subhead} Story Real Studios helps ${industry.name.toLowerCase()} businesses in Connecticut grow with strategy-led video production and content systems.`,
    alternates: {
      canonical: `https://www.storyreal.co/industries/${slug}`,
    },
    openGraph: {
      title: `${industry.name} Video Production & Content Systems in Connecticut`,
      description: industry.subhead,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <ServiceSchema
        name={`${industry.name} Video Production`}
        description={`Strategy-led video production, cinematic content, and content deployment systems for ${industry.name.toLowerCase()} businesses in Connecticut.`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: industry.name, href: `/industries/${slug}` },
        ]}
      />
      {industry.faqs && industry.faqs.length > 0 && (
        <FAQSchema faqs={industry.faqs} />
      )}
      <IndustryClient industry={industry} />
    </>
  );
}
