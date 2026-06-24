import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUID v4 vs UUID v7: Which One Should You Use? | DevToolsHub",
  description: "Compare UUID v4 and UUID v7: random vs time-ordered, database performance, sortability, and when to choose each. Includes practical code examples.",
  openGraph: {
    title: "UUID v4 vs UUID v7: Which One Should You Use?",
    description: "Compare random vs time-ordered UUIDs, database index performance, and real-world use cases.",
    type: "article",
  },
};

export default function UuidV4VsV7() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <div className="mb-4">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
            Comparison
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          UUID v4 vs UUID v7: Which One Should You Use?
        </h1>
        <div className="flex items-center gap-3 text-sm text-[#64748b]">
          <span>June 24, 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span>7 min read</span>
        </div>
      </div>

      <div className="prose-content space-y-6 text-[#cbd5e1] leading-relaxed">
        <p>
          UUIDs (Universally Unique Identifiers) are everywhere in modern software development. 
          But not all UUIDs are created equal. With the introduction of <strong>UUID v7</strong> in 
          RFC 9562 (May 2024), developers now have a compelling alternative to the ubiquitous UUID v4.
        </p>

        <p>
          In this guide, we&apos;ll compare UUID v4 and UUID v7 across performance, database impact, 
          sortability, and real-world use cases — so you can make the right choice for your next project.
        </p>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">💡 Quick Try</p>
          <p className="text-sm">
            Use our free{" "}
            <a href="/tools/uuid-generator" className="text-[#3b82f6] hover:text-blue-300">
              UUID Generator
            </a>{" "}
            to generate UUID v4 and v7 right in your browser.
          </p>
        </div>

        <h2>What is UUID v4?</h2>
        <p>
          UUID v4 is the most commonly used UUID version. It generates <strong>122 bits of random data</strong>, 
          making it effectively unique for practical purposes. The probability of collision is so low 
          (about 1 in 5.3×10³⁶) that you can generate billions per second without worrying.
        </p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{'550e8400-e29b-41d4-a716-446655440000  (v4 example)\n# The "4" in position 13 indicates UUID v4\n# The version nibble (4) and variant (10xx) are fixed\n# Everything else is random'}</code></pre>
        <p>
          <strong>Pros:</strong> Simple, battle-tested, available everywhere. Doesn&apos;t leak timing information.
        </p>
        <p>
          <strong>Cons:</strong> Completely random — no natural ordering. This wreaks havoc on B-tree 
          database indexes because new rows get inserted at random positions instead of appended.
        </p>

        <h2>What is UUID v7?</h2>
        <p>
          UUID v7 is the new kid on the block. It encodes a <strong>48-bit Unix timestamp (millisecond precision)</strong> 
          as its most significant bits, followed by random data. This makes v7 UUIDs <strong>time-sortable</strong> 
          — you can sort them by creation time without storing a separate timestamp column.
        </p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{'018f0a56-1234-7b00-8a00-123456789abc  (v7 example)\n# "018f0a56-1234" = Unix timestamp in milliseconds\n# The "7" in position 13 indicates UUID v7\n# Remaining bits are random for uniqueness'}</code></pre>
        <p>
          <strong>Pros:</strong> Time-ordered = database-friendly. Monotonically increasing = great for 
          B-tree indexes. Encodes creation time without an extra column.
        </p>
        <p>
          <strong>Cons:</strong> Newer standard — not all languages/libraries support it yet. Leaks 
          approximate creation time (like auto-increment IDs).
        </p>

        <h2>Head-to-Head Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Feature</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-[#3b82f6]">UUID v4</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-[#22d3ee]">UUID v7</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-medium">Timestamp</td>
                <td className="p-3 border border-[#334155]">None (random)</td>
                <td className="p-3 border border-[#334155]">48-bit ms timestamp</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-medium">Sortable</td>
                <td className="p-3 border border-[#334155]">❌ No</td>
                <td className="p-3 border border-[#334155]">✅ Yes (by time)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-medium">DB Index Friendly</td>
                <td className="p-3 border border-[#334155]">❌ Bad (random inserts)</td>
                <td className="p-3 border border-[#334155]">✅ Excellent (sequential)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-medium">Collision Resistance</td>
                <td className="p-3 border border-[#334155]">122 random bits</td>
                <td className="p-3 border border-[#334155]">74 random bits</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-medium">Privacy</td>
                <td className="p-3 border border-[#334155]">✅ No info leakage</td>
                <td className="p-3 border border-[#334155]">⚠️ Leaks creation time</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-medium">Library Support</td>
                <td className="p-3 border border-[#334155]">✅ Universal</td>
                <td className="p-3 border border-[#334155]">⚠️ Growing (2026+)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-medium">Standard</td>
                <td className="p-3 border border-[#334155]">RFC 4122 (2005)</td>
                <td className="p-3 border border-[#334155]">RFC 9562 (2024)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Database Performance: The Real Story</h2>
        <p>
          The biggest pain point with UUID v4 is <strong>database index fragmentation</strong>. 
          PostgreSQL, MySQL, and most relational databases use <strong>B-tree indexes</strong>, which 
          perform best when new rows have sequentially increasing primary keys.
        </p>
        <p>
          With UUID v4, every insert lands at a random leaf position, causing:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Page splits</strong> — 50-100x more index maintenance</li>
          <li><strong>Cache misses</strong> — working set doesn&apos;t fit in memory</li>
          <li><strong>Write amplification</strong> — each insert touches multiple index pages</li>
        </ul>
        <p>
          UUID v7 solves this elegantly. Since the timestamp is the leading bits, new UUIDs are 
          monotonically increasing — new rows append to the rightmost index page. This gives you 
          <strong>near-sequential performance</strong> without the coordination overhead of auto-increment.
        </p>

        <h2>When to Use Each</h2>
        <h3>Use UUID v4 when:</h3>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>You need <strong>unpredictable IDs</strong> (public API tokens, session IDs)</li>
          <li>Privacy matters — v4 doesn&apos;t leak creation time</li>
          <li>Your database is <strong>read-heavy</strong> with few writes (index fragmentation isn&apos;t an issue)</li>
          <li>You&apos;re working in an environment without UUID v7 library support</li>
        </ul>

        <h3>Use UUID v7 when:</h3>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>You&apos;re using UUIDs as <strong>primary keys</strong> in a write-heavy database</li>
          <li>You want <strong>time-sortable identifiers</strong> without an extra column</li>
          <li>You&apos;re designing a new system and can pick the latest libraries</li>
          <li>Database index performance matters at scale (millions+ rows)</li>
        </ul>

        <h2>How to Generate UUID v7 in Different Languages</h2>

        <h3>JavaScript / TypeScript (Browser)</h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`// UUID v7 is not yet in crypto.randomUUID() (still v4)
// Use a small helper:

function uuidv7() {
  const timestamp = Date.now();
  const hex = timestamp.toString(16).padStart(12, '0');
  const rest = Array.from({ length: 16 }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
  return \`\${hex.slice(0,8)}-\${hex.slice(8,12)}-7\${rest.slice(0,3)}-8\${rest.slice(3,7)}-\${rest.slice(7)}\`;
}

console.log(uuidv7()); // "018f0a56-1234-7b00-8a00-123456789abc"`}</code></pre>

        <h3>Python</h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`import uuid
import time

def uuid7():
    timestamp = int(time.time() * 1000)
    # uuid.uuid1() gives MAC-based, uuid4() gives random
    # For v7, we need to construct manually:
    hex_ts = f"{timestamp:012x}"
    rest = uuid.uuid4().hex[12:]
    return uuid.UUID(f"{hex_ts[:8]}-{hex_ts[8:12]}-7{rest[:3]}-8{rest[3:7]}-{rest[7:]}")

print(uuid7())  # UUID('018f0a56-1234-7b00-8a00-123456789abc')`}</code></pre>

        <h3>PostgreSQL</h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- If using pg_uuidv7 extension:
CREATE EXTENSION IF NOT EXISTS pg_uuidv7;
SELECT uuid_generate_v7();

-- Or generate inline:
SELECT gen_random_uuid();  -- v4 (built-in, PostgreSQL 13+)`}</code></pre>

        <h2>Final Verdict</h2>
        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-5 mt-6">
          <p className="text-white font-semibold mb-2">🎯 Recommendation</p>
          <p className="text-sm">
            For <strong>new projects</strong> that use UUIDs as database primary keys, start with 
            <strong>UUID v7</strong>. The time-ordered structure gives you B-tree friendly insertion 
            without sacrificing the global uniqueness that makes UUIDs valuable. Reserve 
            <strong>UUID v4</strong> for cases where unpredictability is a requirement — API keys, 
            session tokens, or any identifier that must not reveal creation time.
          </p>
        </div>

        <p>
          Try generating both UUID versions instantly with our free{" "}
          <a href="/tools/uuid-generator" className="text-[#3b82f6] hover:text-blue-300">
            online UUID Generator tool
          </a>.
          It runs entirely in your browser — no server uploads, no data leaks.
        </p>

        <div className="border-t border-[#334155] pt-6 mt-8">
          <p className="text-xs text-[#64748b]">
            <strong>Related Tools:</strong>{" "}
            <a href="/tools/uuid-generator" className="text-[#3b82f6] hover:text-blue-300">UUID Generator</a>
            {" · "}
            <a href="/tools/timestamp" className="text-[#3b82f6] hover:text-blue-300">Timestamp Converter</a>
            {" · "}
            <a href="/tools/base64" className="text-[#3b82f6] hover:text-blue-300">Base64 Encoder/Decoder</a>
          </p>
        </div>
      </div>
    </article>
  );
}
