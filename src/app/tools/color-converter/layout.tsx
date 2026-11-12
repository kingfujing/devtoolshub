import type { Metadata } from "next";
import { TOOL_SEO, webAppJsonLd } from "@/lib/seo";

const tool = TOOL_SEO.find((tl) => tl.slug === "color-converter")!;

export const metadata: Metadata = {
  alternates: { canonical: "/tools/color-converter" },
  title: "Color Converter — Free Online Developer Tool | DevToolsHub",
  description: "Convert colors between HEX, RGB and HSL formats online with live color preview. Supports hex, rgb(), hsl() and shorthand hex.",
  openGraph: {
    url: "/tools/color-converter",
    title: "Color Converter — Free Online Developer Tool",
    description: "Convert colors between HEX, RGB and HSL formats online with live color preview. Supports hex, rgb(), hsl() and shorthand hex.",
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
