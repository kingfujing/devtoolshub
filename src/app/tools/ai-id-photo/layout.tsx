import type { Metadata } from "next";
import { TOOL_SEO, webAppJsonLd } from "@/lib/seo";

const tool = TOOL_SEO.find((tl) => tl.slug === "ai-id-photo")!;

export const metadata: Metadata = {
  alternates: { canonical: "/tools/ai-id-photo" },
  title: "AI ID Photo Maker — Free Passport & Visa Photos Online | DevToolsHub",
  description: tool.description,
  openGraph: {
    url: "/tools/ai-id-photo",
    title: "AI ID Photo Maker — Free Passport & Visa Photos Online",
    description: tool.description,
    type: "website",
  },
};

export default function AiIdPhotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
