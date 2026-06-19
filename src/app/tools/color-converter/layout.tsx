import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Converter — Free Online Developer Tool | DevToolsHub",
  description: "Convert colors between HEX, RGB and HSL formats online with live color preview. Supports hex, rgb(), hsl() and shorthand hex.",
  openGraph: {
    title: "Color Converter — Free Online Developer Tool",
    description: "Convert colors between HEX, RGB and HSL formats online with live color preview. Supports hex, rgb(), hsl() and shorthand hex.",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
