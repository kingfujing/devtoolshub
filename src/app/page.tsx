import Link from "next/link";
import AdSlot from "@/components/AdSlot";

const ARTICLES = [
  {
    title: "REST vs GraphQL: Which API Style Should You Use in 2026?",
    desc: "Compare REST and GraphQL: endpoints vs single schema, over-fetching, caching, versioning, N+1 resolvers, and when to choose each.",
    href: "/blog/rest-vs-graphql",
    tag: "Comparison",
    date: "Sep 4, 2026",
    readTime: "9 min",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "JWT vs OAuth2: What's the Difference and When to Use Each?",
    desc: "Compare JWT (token format) vs OAuth2 (authorization framework): roles, scopes, flows, and how they work together for third-party login.",
    href: "/blog/jwt-vs-oauth2",
    tag: "Comparison",
    date: "Aug 25, 2026",
    readTime: "8 min",
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "SQL vs NoSQL: Which Database Should You Choose in 2026?",
    desc: "Compare relational vs non-relational databases: schema, ACID transactions, horizontal scaling, and when to choose each for your project.",
    href: "/blog/sql-vs-nosql",
    tag: "Comparison",
    date: "Aug 25, 2026",
    readTime: "9 min",
    color: "from-blue-500 to-cyan-500",
  },
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
    desc: "Compare random vs time-ordered UUIDs, database index performance, and when to choose each for your project.",
    href: "/blog/uuid-v4-vs-v7",
    tag: "Comparison",
    date: "Jun 24, 2026",
    readTime: "7 min",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "How to Decode JWT Tokens Without a Backend",
    desc: "Learn to inspect JWT tokens client-side. Understand headers, claims, signatures, and security pitfalls.",
    href: "/blog/jwt-decoder-guide",
    tag: "Tutorial",
    date: "Jun 24, 2026",
    readTime: "8 min",
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "Unix Timestamp Cheat Sheet for Developers",
    desc: "Master timestamps: seconds vs ms, timezone gotchas, JWT exp checks, and one-liners for 8 languages.",
    href: "/blog/timestamp-cheat-sheet",
    tag: "Cheat Sheet",
    date: "Jun 24, 2026",
    readTime: "6 min",
    color: "from-amber-500 to-red-500",
  },
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

      {/* Features */}
      <section className="mb-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#1e293b] border border-[#334155] text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-white font-semibold text-sm mb-2">100% Privacy First</h3>
            <p className="text-[#94a3b8] text-xs leading-relaxed">
              All tools run client-side. Your data never leaves your browser — no servers, no storage, no tracking.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[#1e293b] border border-[#334155] text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-white font-semibold text-sm mb-2">Fast & Lightweight</h3>
            <p className="text-[#94a3b8] text-xs leading-relaxed">
              Built with Next.js and deployed on Vercel&apos;s global edge network. No sign-ups, no bloat, instant loading.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[#1e293b] border border-[#334155] text-center">
            <div className="text-3xl mb-3">🆓</div>
            <h3 className="text-white font-semibold text-sm mb-2">Free Forever</h3>
            <p className="text-[#94a3b8] text-xs leading-relaxed">
              No paywalls, no premium tiers, no hidden costs. Every tool is completely free to use, forever.
            </p>
          </div>
        </div>
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
