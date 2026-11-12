import type { Metadata } from "next";
import { TOOL_SEO, webAppJsonLd } from "@/lib/seo";

const tool = TOOL_SEO.find((tl) => tl.slug === "base64")!;

export const metadata: Metadata = {
  alternates: { canonical: "/tools/base64" },
  title: "Base64 Encode / Decode — Free Online Developer Tool | DevToolsHub",
  description: "Encode and decode Base64 strings online. Supports Chinese, Unicode and special characters. Free online Base64 converter.",
  openGraph: {
    url: "/tools/base64",
    title: "Base64 Encode / Decode — Free Online Developer Tool",
    description: "Encode and decode Base64 strings online. Supports Chinese, Unicode and special characters. Free online Base64 converter.",
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
