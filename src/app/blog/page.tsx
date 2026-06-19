import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — DevToolsHub",
  description:
    "Developer tutorials, tool comparisons, and productivity guides. Learn about JSON formatting, Base64 encoding, regex, and more.",
  openGraph: {
    title: "Blog — DevToolsHub",
    description:
      "Developer tutorials, tool comparisons, and productivity guides for your daily workflow.",
  },
};

const ARTICLES = [
  {
    title: "10 Free Online Developer Tools to Supercharge Your Workflow in 2026",
    desc: "Discover 10 essential free developer tools for 2026 — all privacy-first and running locally in your browser.",
    href: "/blog/10-free-developer-tools-2026",
    tag: "Productivity",
    date: "Jun 19, 2026",
    readTime: "8 min",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "JSON Formatting 101: How to Debug JSON Data Like a Pro",
    desc: "Master JSON formatting, validation, and debugging with practical tips for cleaner API debugging.",
    href: "/blog/json-formatting-101",
    tag: "Tutorial",
    date: "Jun 19, 2026",
    readTime: "6 min",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Base64 Encoding & Decoding: What Every Developer Needs to Know",
    desc: "Learn how Base64 works, when to use it, and browser pitfalls. Includes practical examples with data URLs and JWT.",
    href: "/blog/base64-encoding-guide",
    tag: "Tutorial",
    date: "Jun 19, 2026",
    readTime: "7 min",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "The Complete Guide to Writing Better Regular Expressions",
    desc: "Practical regex patterns, named capture groups, common traps, and debugging techniques for daily use.",
    href: "/blog/regex-guide",
    tag: "Tutorial",
    date: "Jun 19, 2026",
    readTime: "10 min",
    color: "from-purple-500 to-pink-500",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
        <p className="text-[#94a3b8]">
          Tutorials, guides, and tips for developers. Learn tools, sharpen skills, and level up your
          workflow.
        </p>
      </div>

      <div className="space-y-6">
        {ARTICLES.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="block rounded-xl border border-[#334155] bg-[#1e293b] p-6 hover:border-blue-500/30 transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`text-xs font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r ${article.color} text-white`}
              >
                {article.tag}
              </span>
              <span className="text-xs text-[#64748b]">{article.date}</span>
              <span className="text-xs text-[#64748b]">· {article.readTime}</span>
            </div>
            <h2 className="text-lg font-semibold text-white mb-2">{article.title}</h2>
            <p className="text-sm text-[#94a3b8]">{article.desc}</p>
            <div className="mt-3 flex items-center gap-1 text-sm text-[#3b82f6]">
              Read Article <span className="text-lg leading-none">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
