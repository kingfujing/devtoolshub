import Link from "next/link";
import AdSlot from "@/components/AdSlot";

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

      {/* Bottom Ad */}
      <AdSlot />
    </div>
  );
}
