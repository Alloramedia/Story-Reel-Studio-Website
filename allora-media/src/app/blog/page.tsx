import { Metadata } from "next";
import { BlogClient } from "./BlogClient";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { getBlogPostsMeta, blogCategories } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — Marketing Strategies, Paid Ads & Content Tips for Local Businesses",
  description:
    "Actionable marketing strategies for contractors, restaurants, salons, and local businesses in Connecticut. Real campaign data, step-by-step guides, and proven playbooks from 150+ managed campaigns.",
  alternates: {
    canonical: "https://www.alloramedia.us/blog",
  },
  openGraph: {
    title: "Allora Media Blog — Marketing Strategies That Drive Real Revenue",
    description:
      "No fluff, no theory. Actionable marketing strategies from real campaigns across Connecticut — with practical examples and step-by-step breakdowns.",
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
