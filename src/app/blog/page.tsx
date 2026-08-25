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
    title: "JWT vs Session: Which Authentication Method Should You Use?",
    desc: "Compare stateless JWT vs stateful sessions: scalability, security, CSRF protection, revocation, and when to choose each for your project.",
    href: "/blog/jwt-vs-session",
    tag: "Comparison",
    date: "Aug 25, 2026",
    readTime: "8 min",
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "JSON vs YAML: Which Data Format Should You Use?",
    desc: "Compare JSON and YAML for config files and APIs: readability, comments, anchors, parse speed, and when to choose each format.",
    href: "/blog/json-vs-yaml",
    tag: "Comparison",
    date: "Aug 25, 2026",
    readTime: "7 min",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "SQL Query Cheat Sheet for Developers",
    desc: "Essential SQL query reference. SELECT, JOIN, GROUP BY, window functions, subqueries, and query optimization tips for daily development.",
    href: "/blog/sql-query-cheat-sheet",
    tag: "Cheat Sheet",
    date: "Jul 15, 2026",
    readTime: "10 min",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "JavaScript Array Methods Cheat Sheet",
    desc: "Complete JavaScript array methods reference with examples. From map() and filter() to flatMap() and toSorted() — every ES6+ method explained.",
    href: "/blog/javascript-array-methods-cheat-sheet",
    tag: "Cheat Sheet",
    date: "Jul 15, 2026",
    readTime: "10 min",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "HTML Entities Reference: Complete List of Escape Codes",
    desc: "Complete HTML entities reference with escape codes. Find common symbols, special characters, currency signs, and mathematical operators.",
    href: "/blog/html-entities-reference",
    tag: "Reference",
    date: "Jul 15, 2026",
    readTime: "8 min",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "HTTP Status Codes Cheat Sheet: Every Developer Should Know",
    desc: "Complete HTTP status code reference. Every response code explained — 1xx informational, 2xx success, 3xx redirect, 4xx client error, 5xx server error.",
    href: "/blog/http-status-codes-cheat-sheet",
    tag: "Cheat Sheet",
    date: "Jul 15, 2026",
    readTime: "8 min",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Git Commands Cheat Sheet: From Beginner to Advanced",
    desc: "Essential Git commands reference for daily development. From git init to interactive rebase — commands, options, and practical examples.",
    href: "/blog/git-commands-cheat-sheet",
    tag: "Cheat Sheet",
    date: "Jul 15, 2026",
    readTime: "7 min",
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "CSS Units Cheat Sheet: px, em, rem, vw, vh and Beyond",
    desc: "Complete CSS units reference — absolute vs relative, viewport units, calc(), and when to use each. Includes responsive design patterns.",
    href: "/blog/css-units-cheat-sheet",
    tag: "Cheat Sheet",
    date: "Jul 15, 2026",
    readTime: "7 min",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Cron Expression Guide: Every Schedule Pattern Explained",
    desc: "Master cron expressions with this complete guide. Syntax, special strings, 25+ common schedule examples, troubleshooting, and cloud-specific formats.",
    href: "/blog/cron-expression-guide",
    tag: "Guide",
    date: "Jul 15, 2026",
    readTime: "6 min",
    color: "from-amber-500 to-red-500",
  },
  {
    title: "5 Developer Tools That Respect Your Privacy",
    desc: "Discover privacy-first developer tools that run entirely in your browser — no server uploads, no data collection, no tracking.",
    href: "/blog/privacy-first-dev-tools",
    tag: "Productivity",
    date: "Jul 8, 2026",
    readTime: "6 min",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "UUID v4 vs UUID v7: Which One Should You Use?",
    desc: "Compare random vs time-ordered UUIDs, database index performance, and when to choose each version for your project.",
    href: "/blog/uuid-v4-vs-v7",
    tag: "Comparison",
    date: "Jun 24, 2026",
    readTime: "7 min",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "How to Decode JWT Tokens Without a Backend",
    desc: "Learn to decode and inspect JWT tokens client-side. Understand headers, claims, signatures, and common security pitfalls.",
    href: "/blog/jwt-decoder-guide",
    tag: "Tutorial",
    date: "Jun 24, 2026",
    readTime: "8 min",
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "Unix Timestamp Cheat Sheet for Developers",
    desc: "Master Unix timestamps: seconds vs milliseconds, timezone gotchas, JWT exp checks, and one-liners for 8 programming languages.",
    href: "/blog/timestamp-cheat-sheet",
    tag: "Cheat Sheet",
    date: "Jun 24, 2026",
    readTime: "6 min",
    color: "from-amber-500 to-red-500",
  },
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
