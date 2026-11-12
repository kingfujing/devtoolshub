import type { Metadata } from "next";
import { TOOL_SEO, webAppJsonLd } from "@/lib/seo";

const tool = TOOL_SEO.find((tl) => tl.slug === "url-encoder")!;

export const metadata: Metadata = {
  alternates: { canonical: "/tools/url-encoder" },
  title: "URL Encoder / Decoder — Free Online Developer Tool | DevToolsHub",
  description: "Encode and decode URL components online. Supports encodeURIComponent and encodeURI with special character encoding.",
  openGraph: {
    url: "/tools/url-encoder",
    title: "URL Encoder / Decoder — Free Online Developer Tool",
    description: "Encode and decode URL components online. Supports encodeURIComponent and encodeURI with special character encoding.",
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
