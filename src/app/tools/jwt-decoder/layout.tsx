import type { Metadata } from "next";
import { TOOL_SEO, webAppJsonLd } from "@/lib/seo";

const tool = TOOL_SEO.find((tl) => tl.slug === "jwt-decoder")!;

export const metadata: Metadata = {
  alternates: { canonical: "/tools/jwt-decoder" },
  title: "JWT Decoder — Free Online Developer Tool | DevToolsHub",
  description: "Decode and inspect JWT tokens online. View header, payload and signature. Client-side decoding - your tokens never leave your browser.",
  openGraph: {
    url: "/tools/jwt-decoder",
    title: "JWT Decoder — Free Online Developer Tool",
    description: "Decode and inspect JWT tokens online. View header, payload and signature. Client-side decoding - your tokens never leave your browser.",
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
