import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JSON Formatting 101: How to Debug JSON Data Like a Pro | DevToolsHub",
  description:
    "Master JSON formatting, validation, and debugging with practical tips. Learn to use a JSON formatter effectively for cleaner API debugging and configuration management.",
  openGraph: {
    title: "JSON Formatting 101: How to Debug JSON Data Like a Pro",
    description:
      "Master JSON formatting and validation. Practical tips for cleaner API debugging.",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <Link
          href="/"
          className="text-sm text-[#3b82f6] hover:text-blue-300 transition-colors mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
          JSON Formatting 101: How to Debug JSON Data Like a Pro
        </h1>
        <div className="flex items-center gap-3 text-sm text-[#64748b]">
          <span>June 19, 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span>6 min read</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span className="text-[#3b82f6]">Tutorial</span>
        </div>
      </div>

      {/* Content */}
      <div className="prose-content space-y-6 text-[#cbd5e1] leading-relaxed">
        <p className="text-lg text-[#94a3b8] leading-relaxed">
          JSON (JavaScript Object Notation) is the lingua franca of modern web APIs. Whether you are
          debugging a REST endpoint, configuring a cloud service, or building a frontend app, you
          encounter JSON every day. Yet reading raw, minified JSON is a painful experience — one
          missing comma can break an entire payload. Here is everything you need to know about JSON
          formatting, validation, and debugging.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          What Is JSON Formatting?
        </h2>
        <p>
          JSON formatting (also called "pretty-printing") transforms compressed, hard-to-read JSON
          into an indented, human-readable structure. A{" "}
          <Link href="/tools/json-formatter" className="text-[#3b82f6] hover:underline">
            JSON formatter
          </Link>{" "}
          takes something like this:
        </p>

        <pre className="bg-[#1e293b] p-4 rounded-lg text-sm overflow-x-auto text-[#e2e8f0]">
{`{"name":"DevToolsHub","tools":[{"name":"JSON Formatter","url":"/json-formatter"},{"name":"Base64","url":"/base64"}],"active":true}`}
        </pre>

        <p>And turns it into this:</p>

        <pre className="bg-[#1e293b] p-4 rounded-lg text-sm overflow-x-auto text-[#e2e8f0]">
{`{
  "name": "DevToolsHub",
  "tools": [
    {
      "name": "JSON Formatter",
      "url": "/json-formatter"
    },
    {
      "name": "Base64",
      "url": "/base64"
    }
  ],
  "active": true
}`}
        </pre>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Why Formatting Matters
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[#cbd5e1]">
          <li><strong className="text-white">Find errors faster</strong> — malformed JSON is immediately obvious when you can see the structure</li>
          <li><strong className="text-white">Compare responses</strong> — formatted JSON makes side-by-side comparison of API outputs easy</li>
          <li><strong className="text-white">Share readable snippets</strong> — formatted JSON is easier to paste into documentation, issues, or PRs</li>
          <li><strong className="text-white">Debug configurations</strong> — many cloud and DevOps tools (Terraform, Kubernetes, AWS) output JSON</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Common JSON Mistakes to Watch For
        </h2>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          1. Trailing Commas
        </h3>
        <p>
          JavaScript allows trailing commas in objects and arrays. JSON does not. This is one of the
          most common sources of parse errors:
        </p>
        <pre className="bg-[#1e293b] p-4 rounded-lg text-sm overflow-x-auto text-[#e2e8f0]">
{`// Invalid JSON (trailing comma)
{
  "name": "DevToolsHub",  ← remove this comma
}`}
        </pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          2. Unquoted Keys
        </h3>
        <p>
          In JavaScript, object keys can be unquoted identifiers. JSON requires all keys to be wrapped
          in double quotes:
        </p>
        <pre className="bg-[#1e293b] p-4 rounded-lg text-sm overflow-x-auto text-[#e2e8f0]">
{`// Invalid JSON (unquoted key)
{ name: "DevToolsHub" }

// Valid JSON
{ "name": "DevToolsHub" }`}
        </pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          3. Single Quotes Instead of Double Quotes
        </h3>
        <p>
          JSON only allows double quotes ("). Single quotes (') are not valid, even though many
          programming languages accept them for string literals.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          4. Undefined or NaN Values
        </h3>
        <p>
          JSON supports <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">null</code>,{" "}
          <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">true</code>, and{" "}
          <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">false</code>, but not{" "}
          <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">undefined</code>{" "}
          or <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">NaN</code>. These
          values cause <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">
            JSON.stringify()</code> to silently drop keys or convert them to <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">null</code>.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          JSON Formatting Best Practices
        </h2>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Use 2-Space Indentation
        </h3>
        <p>
          The standard for JSON formatting is 2-space indentation. It provides enough visual structure
          without wasting horizontal space. Some tools default to 4 spaces — configure them to use 2
          for consistency with most API documentation.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Validate Before You Use
        </h3>
        <p>
          Always validate JSON before feeding it to your application. A good{" "}
          <Link href="/tools/json-formatter" className="text-[#3b82f6] hover:underline">
            JSON formatter with validation
          </Link>{" "}
          catches errors immediately and shows you exactly where the problem is. This saves hours of
          debugging.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Compress for Production
        </h3>
        <p>
          When sending JSON over the wire, use the compression mode to strip all whitespace.{" "}
          <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">JSON.stringify(value)</code>{" "}
          (without spacing arguments) produces compressed output. A typical API response shrinks by
          30-50% when compressed — saving bandwidth and improving load times.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Putting It All Together
        </h2>
        <p>
          Whether you are a seasoned backend engineer or a frontend developer learning the ropes,
          mastering JSON formatting is a foundational skill. The next time you copy a curl response,
          paste it into a{" "}
          <Link href="/tools/json-formatter" className="text-[#3b82f6] hover:underline">
            JSON formatter
          </Link>{" "}
          before trying to read it. Your eyes — and your debugging efficiency — will thank you.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-[#334155]">
        <Link
          href="/tools/json-formatter"
          className="text-[#3b82f6] hover:underline text-sm font-medium"
        >
          Try the DevToolsHub JSON Formatter →
        </Link>
      </div>
    </article>
  );
}
