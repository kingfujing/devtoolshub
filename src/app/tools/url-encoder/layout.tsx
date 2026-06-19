import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URL Encoder / Decoder — Free Online Developer Tool | DevToolsHub",
  description: "Encode and decode URL components online. Supports encodeURIComponent and encodeURI with special character encoding.",
  openGraph: {
    title: "URL Encoder / Decoder — Free Online Developer Tool",
    description: "Encode and decode URL components online. Supports encodeURIComponent and encodeURI with special character encoding.",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
