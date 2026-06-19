import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JWT Decoder — Free Online Developer Tool | DevToolsHub",
  description: "Decode and inspect JWT tokens online. View header, payload and signature. Client-side decoding - your tokens never leave your browser.",
  openGraph: {
    title: "JWT Decoder — Free Online Developer Tool",
    description: "Decode and inspect JWT tokens online. View header, payload and signature. Client-side decoding - your tokens never leave your browser.",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
