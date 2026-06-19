import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Formatter — Free Online Developer Tool | DevToolsHub",
  description: "Format, compress and validate JSON data online with syntax highlighting and error detection. Free developer tool.",
  openGraph: {
    title: "JSON Formatter — Free Online Developer Tool",
    description: "Format, compress and validate JSON data online with syntax highlighting and error detection. Free developer tool.",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
