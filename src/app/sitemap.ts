import type { MetadataRoute } from "next";
import { TOOL_SEO, BLOG_SEO } from "@/lib/seo";

// 自动从 src/lib/seo.ts 派生 —— 新页面在 seo.ts 登记后自动进 sitemap，不再手写
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://devtoolshub.cloud";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...BLOG_SEO.map((b) => ({
      url: `${baseUrl}/blog/${b.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...TOOL_SEO.map((t) => ({
      url: `${baseUrl}/tools/${t.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: t.priority,
    })),
  ];
}
