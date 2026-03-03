import type { MetadataRoute } from "next";
import { getAllIndustrySlugs } from "@/lib/industries-data";
import { getAllServiceSlugs } from "@/lib/services-data";
import { caseStudies } from "@/lib/case-studies-data";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.storyreal.co";
  // Use a fixed date for static pages — `new Date()` would produce the
  // build timestamp which is misleading.  Update this when content changes.
  const lastModified = new Date("2026-03-01");

  const staticPages = [
    "",
    "/paid-media",
    "/media-production",
    "/video-production",
    "/organic-social",
    "/case-studies",
    "/about",
    "/process",
    "/contact",
    "/client-portal",
    "/personal",
    "/website-policies",
    "/blog",
    "/industries",
  ];

  const industrySlugs = getAllIndustrySlugs();
  const serviceSlugs = getAllServiceSlugs();

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path === "/paid-media" ? 0.9 : 0.8,
  }));

  const industryEntries: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    ...industryEntries,
    ...serviceEntries,
    ...caseStudyEntries,
    ...blogEntries,
  ];
}
