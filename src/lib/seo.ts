// DevToolsHub SEO/GEO 单一数据源（2026-11-12 建立）
// sitemap.ts / public/llms.txt / 各页 JSON-LD 全部从本文件派生。
// ⚠️ 新增页面时必须在此登记一条 —— sitemap 已改为自动扫描本文件，
//    手写 sitemap 条目的时代结束了（曾因硬编码漏掉 7 篇博客）。
// 注意：各工具页 layout.tsx 的 meta description 与此处 description 应保持一致。

export const SITE_URL = "https://devtoolshub.cloud";

export type ToolSeo = {
  slug: string;
  name: string; // 页面 H1 展示名
  description: string;
  priority: number; // sitemap weight
};

export type BlogSeo = {
  slug: string;
  title: string;
  description: string;
  datePublished: string; // ISO YYYY-MM-DD
};

export const TOOL_SEO: ToolSeo[] = [
  { slug: "ai-id-photo", name: "AI ID Photo Maker", description: "Free online ID photo maker. Crop any photo to 1-inch (25×35mm), 2-inch (35×49mm) or passport (33×48mm) sizes with a clean background color — everything runs locally in your browser, no upload.", priority: 0.8 },
  { slug: "base64", name: "Base64 Encode / Decode", description: "Encode and decode Base64 strings online. Supports Chinese, Unicode and special characters. Free online Base64 converter.", priority: 0.9 },
  { slug: "color-converter", name: "Color Converter", description: "Convert colors between HEX, RGB and HSL formats online with live color preview. Supports hex, rgb(), hsl() and shorthand hex.", priority: 0.8 },
  { slug: "json-formatter", name: "JSON Formatter", description: "Format, compress and validate JSON data online with syntax highlighting and error detection. Free developer tool.", priority: 0.9 },
  { slug: "jwt-decoder", name: "JWT Decoder", description: "Decode and inspect JWT tokens online. View header, payload and signature. Client-side decoding - your tokens never leave your browser.", priority: 0.8 },
  { slug: "regex-tester", name: "Regex Tester", description: "Test and debug regular expressions in real-time with live match highlighting, named group support and flag toggling. Free online regex tester.", priority: 0.9 },
  { slug: "timestamp", name: "Timestamp Converter", description: "Convert between Unix timestamps and human-readable dates. Supports seconds, milliseconds, ISO format, UTC and local time.", priority: 0.8 },
  { slug: "token-counter", name: "Token Counter", description: "Free online token counter for AI models. Estimate GPT-4o, Claude, Gemini token usage and context window consumption for any text — counts words, CJK characters, and cost. Runs 100% in your browser.", priority: 0.8 },
  { slug: "url-encoder", name: "URL Encoder / Decoder", description: "Encode and decode URL components online. Supports encodeURIComponent and encodeURI with special character encoding.", priority: 0.8 },
  { slug: "uuid-generator", name: "UUID Generator", description: "Generate random UUIDs v4 online. Bulk generation with one-click copy. Uses crypto.randomUUID() for cryptographically secure UUIDs.", priority: 0.8 },
];

export const BLOG_SEO: BlogSeo[] = [
  { slug: "10-free-developer-tools-2026", title: "10 Free Online Developer Tools to Supercharge Your Workflow in 2026 | DevToolsHub", description: "Discover 10 essential free online developer tools for 2026. From JSON formatting to regex testing — all tools run locally in your browser with zero server uploads.", datePublished: "2026-06-19" },
  { slug: "base64-encoding-guide", title: "Base64 Encoding & Decoding: What Every Developer Needs to Know | DevToolsHub", description: "Learn how Base64 encoding works, when to use it, and common pitfalls. Includes practical examples with data URLs, JWT tokens, and browser APIs.", datePublished: "2026-06-19" },
  { slug: "cron-expression-guide", title: "Cron Expression Guide — DevToolsHub", description: "Complete cron expression reference. Master cron syntax with examples, special strings, common schedules, troubleshooting tips, common mistakes, and a developer FAQ.", datePublished: "2026-07-15" },
  { slug: "css-units-cheat-sheet", title: "CSS Units Cheat Sheet — DevToolsHub", description: "Complete CSS units reference — absolute vs relative units, viewport units, calc(), and when to use each. Includes practical examples for responsive design.", datePublished: "2026-06-24" },
  { slug: "git-commands-cheat-sheet", title: "Git Commands Cheat Sheet — DevToolsHub", description: "Essential Git commands reference for daily development. From git init to interactive rebase — commands, options, practical examples, common mistakes, and a developer FAQ.", datePublished: "2026-06-24" },
  { slug: "html-entities-reference", title: "HTML Entities Reference — DevToolsHub", description: "Complete HTML entities reference with escape codes. Find common symbols, special characters, currency signs, arrows, and mathematical operators.", datePublished: "2026-06-24" },
  { slug: "http-status-codes-cheat-sheet", title: "HTTP Status Codes Cheat Sheet — DevToolsHub", description: "Complete HTTP status code reference for developers. Every response code explained — 1xx informational, 2xx success, 3xx redirect, 4xx client error, 5xx server error.", datePublished: "2026-06-24" },
  { slug: "javascript-array-methods-cheat-sheet", title: "JavaScript Array Methods Cheat Sheet — DevToolsHub", description: "Complete JavaScript array methods reference with examples. From map() and filter() to flatMap() and toSorted() — every ES6+ array method explained.", datePublished: "2026-07-15" },
  { slug: "json-formatting-101", title: "JSON Formatting 101: How to Debug JSON Data Like a Pro | DevToolsHub", description: "Master JSON formatting, validation, and debugging with practical tips. Learn to use a JSON formatter effectively for cleaner API debugging and configuration management.", datePublished: "2026-06-19" },
  { slug: "json-vs-yaml", title: "JSON vs YAML: Which Data Format Should You Use? | DevToolsHub", description: "Compare JSON and YAML: readability, nesting, comments, anchors, parse speed, and when to choose each for config files and APIs. Includes conversion examples.", datePublished: "2026-08-25" },
  { slug: "jwt-decoder-guide", title: "JWT Decoder Guide: How to Decode JSON Web Tokens Without a Backend | DevToolsHub", description: "Learn how to decode JWT tokens client-side. Understand header, payload, signature, and how to inspect tokens safely without sending them to any server.", datePublished: "2026-06-24" },
  { slug: "jwt-vs-oauth2", title: "JWT vs OAuth2: What's the Difference and When to Use Each? | DevToolsHub", description: "Compare JWT and OAuth2: token format vs authorization framework, authentication vs authorization, third-party login, scopes, and when to use each. Includes code examples.", datePublished: "2026-08-25" },
  { slug: "jwt-vs-session", title: "JWT vs Session: Which Authentication Method Should You Use? | DevToolsHub", description: "Compare JWT and session-based authentication: stateless vs stateful, scalability, security, CSRF protection, and when to choose each. Includes code examples.", datePublished: "2026-08-25" },
  { slug: "privacy-first-dev-tools", title: "5 Developer Tools That Respect Your Privacy | DevToolsHub", description: "Discover developer tools that run entirely in your browser — no server uploads, no data collection, no tracking. Privacy-first tools for modern developers.", datePublished: "2026-07-08" },
  { slug: "regex-guide", title: "The Complete Guide to Writing Better Regular Expressions | DevToolsHub", description: "Master regular expressions with practical patterns and real-world examples. Learn regex flags, named groups, lookaheads, and debugging techniques.", datePublished: "2026-06-19" },
  { slug: "rest-vs-graphql", title: "REST vs GraphQL: Which API Style Should You Use in 2026? | DevToolsHub", description: "Compare REST and GraphQL: endpoints vs single schema, over-fetching, caching, versioning, N+1 resolvers, and when to choose each. Includes Node.js code examples.", datePublished: "2026-09-04" },
  { slug: "sql-query-cheat-sheet", title: "SQL Query Cheat Sheet — DevToolsHub", description: "Essential SQL query reference for developers. SELECT, JOIN, GROUP BY, subqueries, window functions, query optimization tips, common mistakes, and a developer FAQ.", datePublished: "2026-07-15" },
  { slug: "sql-vs-nosql", title: "SQL vs NoSQL: Which Database Should You Choose in 2026? | DevToolsHub", description: "Compare SQL and NoSQL databases: schema, scalability, transactions, consistency, query capabilities, and when to choose each. Includes code examples and decision guide.", datePublished: "2026-08-25" },
  { slug: "timestamp-cheat-sheet", title: "Unix Timestamp Cheat Sheet: Convert, Read, and Debug Timestamps Like a Pro | DevToolsHub", description: "A complete guide to Unix timestamps: convert seconds/milliseconds, handle timezones, common pitfalls, and one-liners for every programming language.", datePublished: "2026-06-24" },
  { slug: "uuid-v4-vs-v7", title: "UUID v4 vs UUID v7: Which One Should You Use? | DevToolsHub", description: "Compare UUID v4 and UUID v7: random vs time-ordered, database performance, sortability, and when to choose each. Includes practical code examples.", datePublished: "2026-06-24" },
];

// 工具页 WebApplication JSON-LD —— GEO 关键：让 AI 把页面抽取为"可推荐的工具实体"
export function webAppJsonLd(tool: ToolSeo) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${tool.name} — DevToolsHub`,
    url: `${SITE_URL}/tools/${tool.slug}`,
    description: tool.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any (Web browser)",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    isAccessibleForFree: true,
    publisher: { "@type": "Organization", name: "DevToolsHub", url: SITE_URL },
  };
}

// 博客 Article JSON-LD —— GEO 关键：给 AI 提供标题/日期/出版方等可信度信号
export function articleJsonLd(post: BlogSeo) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    inLanguage: "en",
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: "DevToolsHub", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "DevToolsHub",
      url: SITE_URL,
    },
  };
}
