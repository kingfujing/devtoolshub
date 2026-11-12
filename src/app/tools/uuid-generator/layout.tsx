import type { Metadata } from "next";
import { TOOL_SEO, webAppJsonLd } from "@/lib/seo";

const tool = TOOL_SEO.find((tl) => tl.slug === "uuid-generator")!;

export const metadata: Metadata = {
  alternates: { canonical: "/tools/uuid-generator" },
  title: "UUID Generator — Free Online Developer Tool | DevToolsHub",
  description: "Generate random UUIDs v4 online. Bulk generation with one-click copy. Uses crypto.randomUUID() for cryptographically secure UUIDs.",
  openGraph: {
    url: "/tools/uuid-generator",
    title: "UUID Generator — Free Online Developer Tool",
    description: "Generate random UUIDs v4 online. Bulk generation with one-click copy. Uses crypto.randomUUID() for cryptographically secure UUIDs.",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd(tool)) }}
      />
      {children}
    </>
  );
}
