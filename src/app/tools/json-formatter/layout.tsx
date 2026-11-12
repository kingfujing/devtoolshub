import type { Metadata } from "next";
import { TOOL_SEO, webAppJsonLd } from "@/lib/seo";

const tool = TOOL_SEO.find((tl) => tl.slug === "json-formatter")!;

export const metadata: Metadata = {
  alternates: { canonical: "/tools/json-formatter" },
  title: "JSON Formatter — Free Online Developer Tool | DevToolsHub",
  description: "Format, compress and validate JSON data online with syntax highlighting and error detection. Free developer tool.",
  openGraph: {
    url: "/tools/json-formatter",
    title: "JSON Formatter — Free Online Developer Tool",
    description: "Format, compress and validate JSON data online with syntax highlighting and error detection. Free developer tool.",
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
