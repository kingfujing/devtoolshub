import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timestamp Converter — Free Online Developer Tool | DevToolsHub",
  description: "Convert between Unix timestamps and human-readable dates. Supports seconds, milliseconds, ISO format, UTC and local time.",
  openGraph: {
    title: "Timestamp Converter — Free Online Developer Tool",
    description: "Convert between Unix timestamps and human-readable dates. Supports seconds, milliseconds, ISO format, UTC and local time.",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
