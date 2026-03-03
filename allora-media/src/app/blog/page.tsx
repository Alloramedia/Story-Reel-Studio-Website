import { Metadata } from "next";
import { BlogClient } from "./BlogClient";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { getBlogPostsMeta, blogCategories } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — Video Production Strategies, Content Systems & Growth Tips",
  description:
    "Actionable video production strategies and content system playbooks for purpose-led organizations. Real project data, step-by-step guides, and proven approaches from 200+ productions.",
  alternates: {
    canonical: "https://www.storyreal.co/blog",
  },
  openGraph: {
    title: "Story Real Studios Blog — Video & Content Strategies That Drive Real Growth",
    description:
      "No fluff, no theory. Actionable video production and content strategies from real projects — with practical examples and step-by-step breakdowns.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  const posts = getBlogPostsMeta();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
      <BlogClient posts={posts} categories={blogCategories} />
    </>
  );
}
