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
    title: `${industry.name} Marketing — Paid Ads & Media Production in CT`,
    description: `${industry.subhead} Allora Media helps ${industry.name.toLowerCase()} businesses in Connecticut grow with paid advertising and professional media production.`,
    alternates: {
      canonical: `https://www.alloramedia.us/industries/${slug}`,
    },
    openGraph: {
      title: `${industry.name} Marketing — Paid Ads & Media Production in Connecticut`,
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
        name={`${industry.name} Marketing`}
        description={`Paid advertising, professional media production, and social media management for ${industry.name.toLowerCase()} businesses in Connecticut.`}
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
