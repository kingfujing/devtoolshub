import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/tools/regex-tester" },
  title: "Regex Tester — Free Online Developer Tool | DevToolsHub",
  description: "Test and debug regular expressions in real-time with live match highlighting, named group support and flag toggling. Free online regex tester.",
  openGraph: {
    url: "/tools/regex-tester",
    title: "Regex Tester — Free Online Developer Tool",
    description: "Test and debug regular expressions in real-time with live match highlighting, named group support and flag toggling. Free online regex tester.",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
