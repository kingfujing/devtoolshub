import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Base64 Encoding & Decoding: What Every Developer Needs to Know | DevToolsHub",
  description:
    "Learn how Base64 encoding works, when to use it, and common pitfalls. Includes practical examples with data URLs, JWT tokens, and browser APIs.",
  openGraph: {
    title: "Base64 Encoding & Decoding: What Every Developer Needs to Know",
    description:
      "Learn how Base64 encoding works, when to use it, and common pitfalls. Practical examples included.",
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
          Base64 Encoding & Decoding: What Every Developer Needs to Know
        </h1>
        <div className="flex items-center gap-3 text-sm text-[#64748b]">
          <span>June 19, 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span>7 min read</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span className="text-[#3b82f6]">Tutorial</span>
        </div>
      </div>

      {/* Content */}
      <div className="prose-content space-y-6 text-[#cbd5e1] leading-relaxed">
        <p className="text-lg text-[#94a3b8] leading-relaxed">
          Base64 is one of those technologies that every developer encounters but few deeply
          understand. It shows up in data URLs, JWT tokens, email attachments, authentication
          headers, and countless API specifications. But what exactly is Base64, and why is it
          so widely used? This guide covers everything you need to know.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          What Is Base64?
        </h2>
        <p>
          Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string
          format. It uses 64 printable characters — A-Z, a-z, 0-9, +, and / (plus = for padding) —
          to encode arbitrary binary data. The name "Base64" comes from the 64-character alphabet.
        </p>
        <p>
          Crucially, Base64 is <strong className="text-white">not encryption</strong>. It is an
          encoding, like Morse code or hexadecimal. Anyone can decode Base64 back to the original
          data. Never use Base64 to protect sensitive information — use proper encryption (AES, RSA)
          for that.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          When Do Developers Use Base64?
        </h2>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          1. Data URLs in HTML/CSS
        </h3>
        <p>
          Inline images and fonts can be embedded directly in HTML using data URLs. The image binary
          is Base64-encoded and embedded in the src attribute:
        </p>
        <pre className="bg-[#1e293b] p-4 rounded-lg text-sm overflow-x-auto text-[#e2e8f0]">
{`<img src="data:image/png;base64,iVBORw0KGgo..."/>`}
        </pre>
        <p>
          This eliminates an HTTP request but increases the page size by about 33% (Base64's overhead).
          Use it sparingly — typically only for very small images (under 1 KB).
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          2. JWT Tokens
        </h3>
        <p>
          JSON Web Tokens (JWTs) use Base64url encoding (a URL-safe variant) for their three parts:
          header, payload, and signature. Each part is Base64url-encoded JSON. The{" "}
          <Link href="/tools/jwt-decoder" className="text-[#3b82f6] hover:underline">
            JWT decoder
          </Link>{" "}
          on DevToolsHub actually uses Base64 decoding under the hood to parse tokens.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          3. HTTP Basic Authentication
        </h3>
        <p>
          The <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">
            Authorization: Basic</code> header encodes the username:password pair in Base64:
        </p>
        <pre className="bg-[#1e293b] p-4 rounded-lg text-sm overflow-x-auto text-[#e2e8f0]">
{`// "admin:secret123" → Base64
Authorization: Basic YWRtaW46c2VjcmV0MTIz`}
        </pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          4. Email Attachments (MIME)
        </h3>
        <p>
          Email protocols were designed for text. Binary attachments (images, PDFs, documents) are
          Base64-encoded within MIME parts so they can traverse SMTP servers reliably.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          How Base64 Works (Briefly)
        </h2>
        <p>
          Every 3 bytes (24 bits) of input data are split into four 6-bit chunks. Each 6-bit value
          (0-63) maps to a character in the Base64 alphabet. If the input length is not divisible by
          3, padding <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">=</code>{" "}
          characters are added to make the output length a multiple of 4.
        </p>
        <p>
          This means Base64 encoding increases data size by roughly 33% — every 3 bytes become 4
          ASCII characters.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Common Pitfalls with Browser Base64
        </h2>
        <p>
          The browser APIs <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">
            btoa()</code> (binary to ASCII) and <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">atob()</code>{" "}
          (ASCII to binary) have a notorious limitation — they only work with Latin-1 (single-byte)
          characters. Trying to encode a Unicode string like "你好" directly with <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">btoa()</code>{" "}
          throws a <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">
            DOMException</code>.
        </p>
        <p>
          The fix involves a two-step encode/decode using URI encoding:
        </p>

        <pre className="bg-[#1e293b] p-4 rounded-lg text-sm overflow-x-auto text-[#e2e8f0]">
{`// Encode Unicode string to Base64
btoa(unescape(encodeURIComponent("你好世界")));
// → "5L2g5aW95LiW55WM"

// Decode Base64 back to Unicode string
decodeURIComponent(escape(atob("5L2g5aW95LiW55WM")));
// → "你好世界"`}
        </pre>

        <p>
          A good{" "}
          <Link href="/tools/base64" className="text-[#3b82f6] hover:underline">
            Base64 encoder/decoder
          </Link>{" "}
          handles this automatically — just paste your text and it works, no matter the encoding.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Base64 vs Base64url
        </h2>
        <p>
          Standard Base64 uses <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">+</code> and{" "}
          <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">/</code>, which are
          problematic in URLs and filenames. Base64url replaces them with{" "}
          <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">-</code> and{" "}
          <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">_</code>, and
          strips trailing <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">=</code>{" "}
          padding. JWT tokens and many modern APIs use Base64url.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Key Takeaways
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[#cbd5e1]">
          <li>Base64 is an <strong className="text-white">encoding</strong>, not encryption — do not use it to protect secrets</li>
          <li>It adds ~33% overhead, so avoid it for large data transfers</li>
          <li>Browser <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">btoa()</code> does not support Unicode — use the encodeURIComponent workaround</li>
          <li>Base64url is the URL-safe variant used in JWT and modern web standards</li>
          <li>Use a dedicated{" "}
            <Link href="/tools/base64" className="text-[#3b82f6] hover:underline">online tool</Link>{" "}
            when you need quick encode/decode during development</li>
        </ul>

        <p className="text-lg text-[#94a3b8] mt-8">
          Next time you see a long string of seemingly random characters ending in{" "}
          <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">=</code>, you will
          know exactly what it is — Base64, the universal binary-to-text bridge.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-[#334155]">
        <Link
          href="/tools/base64"
          className="text-[#3b82f6] hover:underline text-sm font-medium"
        >
          Try the DevToolsHub Base64 Encode/Decode →
        </Link>
      </div>
    </article>
  );
}
