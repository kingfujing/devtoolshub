import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Token Counter — Estimate AI Token Usage Online | DevToolsHub",
  description:
    "Free online token counter for AI models. Estimate GPT-4o, Claude, Gemini token usage and context window consumption for any text — counts words, CJK characters, and cost. Runs 100% in your browser.",
  openGraph: {
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
  return children;
}
