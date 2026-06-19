import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64 Encode / Decode — Free Online Developer Tool | DevToolsHub",
  description: "Encode and decode Base64 strings online. Supports Chinese, Unicode and special characters. Free online Base64 converter.",
  openGraph: {
    title: "Base64 Encode / Decode — Free Online Developer Tool",
    description: "Encode and decode Base64 strings online. Supports Chinese, Unicode and special characters. Free online Base64 converter.",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
