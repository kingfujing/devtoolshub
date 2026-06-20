import Link from "next/link";
import AdSlot from "@/components/AdSlot";

const ARTICLES = [
  {
    title: "10 Free Online Developer Tools to Supercharge Your Workflow in 2026",
    desc: "Discover essential free developer tools for 2026 — from JSON formatting to regex testing. All are privacy-first and run locally in your browser.",
    href: "/blog/10-free-developer-tools-2026",
    tag: "Productivity",
    date: "Jun 19, 2026",
    readTime: "8 min",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "JSON Formatting 101: How to Debug JSON Data Like a Pro",
    desc: "Master JSON formatting, validation, and debugging. Learn common mistakes, best practices, and how to use a JSON formatter effectively.",
    href: "/blog/json-formatting-101",
    tag: "Tutorial",
    date: "Jun 19, 2026",
    readTime: "6 min",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Base64 Encoding & Decoding: What Every Developer Needs to Know",
    desc: "Learn how Base64 works, when to use it, and browser pitfalls. Includes practical examples with data URLs, JWT tokens, and Unicode handling.",
    href: "/blog/base64-encoding-guide",
    tag: "Tutorial",
    date: "Jun 19, 2026",
    readTime: "7 min",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "The Complete Guide to Writing Better Regular Expressions",
    desc: "Practical regex patterns, named capture groups, common traps like catastrophic backtracking, and debugging techniques for daily use.",
    href: "/blog/regex-guide",
    tag: "Tutorial",
    date: "Jun 19, 2026",
    readTime: "10 min",
    color: "from-purple-500 to-pink-500",
  },
];

const TOOLS = [
  {
    name: "JSON Formatter",
    desc: "Format, compress and validate JSON data with syntax highlighting and error detection",
    href: "/tools/json-formatter",
    icon: "{}",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Base64 Encode / Decode",
    desc: "Encode and decode Base64 strings — supports Chinese, Unicode and special characters",
    href: "/tools/base64",
    icon: "⇄",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Regex Tester",
    desc: "Test and debug regular expressions in real-time with live match highlighting",
    href: "/tools/regex-tester",
    icon: ".*",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "UUID Generator",
    desc: "Generate random UUIDs (v4) in bulk — copy with one click",
    href: "/tools/uuid-generator",
    icon: "🔑",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Timestamp Converter",
    desc: "Convert between Unix timestamps and human-readable dates in multiple formats",
    href: "/tools/timestamp",
    icon: "⏱",
    color: "from-amber-500 to-red-500",
  },
  {
    name: "Color Converter",
    desc: "Convert colors between HEX, RGB, HSL and HSL — with live preview",
    href: "/tools/color-converter",
    icon: "🎨",
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "URL Encoder / Decoder",
    desc: "Encode and decode URL components — perfect for query string manipulation",
    href: "/tools/url-encoder",
    icon: "🔗",
    color: "from-teal-500 to-green-500",
  },
  {
    name: "JWT Decoder",
    desc: "Decode and inspect JWT tokens — view header, payload and signature info",
    href: "/tools/jwt-decoder",
    icon: "🔐",
    color: "from-rose-500 to-pink-500",
  },
  {
    name: "AI ID Photo",
    desc: "Remove background and create standard ID photos (1-inch, 2-inch) — runs locally in your browser",
    href: "/tools/ai-id-photo",
    icon: "📷",
    color: "from-sky-500 to-indigo-500",
  },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Free Online Developer Tools
          </span>
        </h1>
        <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
          Fast, secure, and private — every tool runs entirely in your browser.
          Your data never touches any server.
        </p>
      </section>

      {/* Ad */}
      <AdSlot className="mb-12" />

      {/* Tools Grid */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-500 rounded-full inline-block"></span>
          All Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="tool-card block rounded-xl border border-[#334155] bg-[#1e293b] p-6 hover:border-blue-500/30"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center text-white text-lg font-bold mb-4`}>
                {tool.icon}
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm">{tool.name}</h3>
              <p className="text-[#94a3b8] text-xs leading-relaxed">{tool.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#3b82f6]">
                Use Now <span className="text-lg leading-none">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog Articles */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <span className="w-1 h-5 bg-cyan-500 rounded-full inline-block"></span>
          Latest from the Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ARTICLES.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="blog-card block rounded-xl border border-[#334155] bg-[#1e293b] p-6 hover:border-blue-500/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r ${article.color} text-white`}>
                  {article.tag}
                </span>
                <span className="text-xs text-[#64748b]">{article.date}</span>
                <span className="text-xs text-[#64748b]">· {article.readTime}</span>
              </div>
              <h3 className="text-white font-semibold mb-2 leading-snug">
                {article.title}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                {article.desc}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#3b82f6]">
                Read Article <span className="text-lg leading-none">→</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[#3b82f6] hover:text-blue-300 transition-colors font-medium"
          >
            View All Articles <span className="text-lg leading-none">→</span>
          </Link>
        </div>
      </section>

      {/* Bottom Ad */}
      <AdSlot />
    </div>
  );
}
