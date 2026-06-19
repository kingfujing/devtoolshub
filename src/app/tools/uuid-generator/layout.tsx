import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUID Generator — Free Online Developer Tool | DevToolsHub",
  description: "Generate random UUIDs v4 online. Bulk generation with one-click copy. Uses crypto.randomUUID() for cryptographically secure UUIDs.",
  openGraph: {
    title: "UUID Generator — Free Online Developer Tool",
    description: "Generate random UUIDs v4 online. Bulk generation with one-click copy. Uses crypto.randomUUID() for cryptographically secure UUIDs.",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
