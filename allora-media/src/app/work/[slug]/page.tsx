import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies-data";
import { CaseStudyClient } from "./CaseStudyClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return {
    title: `${study.client} — Case Study`,
    description: study.heroOutcome,
    alternates: {
      canonical: `https://www.storyreal.co/work/${slug}`,
    },
    openGraph: {
      title: `${study.client} Case Study | Story Real Studios`,
      description: study.heroOutcome,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
          { name: study.client || study.clientName, href: `/work/${slug}` },
        ]}
      />
      <CaseStudyClient study={study} />
    </>
  );
}
