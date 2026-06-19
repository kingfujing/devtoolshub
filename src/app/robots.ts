import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/privacy",
    },
    sitemap: "https://devtoolshub-seven.vercel.app/sitemap.xml",
  };
}
