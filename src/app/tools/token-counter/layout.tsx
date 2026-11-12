import type { Metadata } from "next";
import { TOOL_SEO, webAppJsonLd } from "@/lib/seo";

const tool = TOOL_SEO.find((tl) => tl.slug === "token-counter")!;

export const metadata: Metadata = {
  alternates: { canonical: "/tools/token-counter" },
  title: "Token Counter — Estimate AI Token Usage Online | DevToolsHub",
  description:
    "Free online token counter for AI models. Estimate GPT-4o, Claude, Gemini token usage and context window consumption for any text — counts words, CJK characters, and cost. Runs 100% in your browser.",
  openGraph: {
    url: "/tools/token-counter",
    title: "Token Counter — Estimate AI Token Usage Online",
    description:
      "Estimate how many tokens your prompt costs across GPT-4o, Claude and Gemini. Context window bar, cost estimate, English + CJK support. 100% local.",
  },
};

export default function TokenCounterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
