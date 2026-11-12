import type { Metadata } from "next";
import { TOOL_SEO, webAppJsonLd } from "@/lib/seo";

const tool = TOOL_SEO.find((tl) => tl.slug === "timestamp")!;

export const metadata: Metadata = {
  alternates: { canonical: "/tools/timestamp" },
  title: "Timestamp Converter — Free Online Developer Tool | DevToolsHub",
  description: "Convert between Unix timestamps and human-readable dates. Supports seconds, milliseconds, ISO format, UTC and local time.",
  openGraph: {
    url: "/tools/timestamp",
    title: "Timestamp Converter — Free Online Developer Tool",
    description: "Convert between Unix timestamps and human-readable dates. Supports seconds, milliseconds, ISO format, UTC and local time.",
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
