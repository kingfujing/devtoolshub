"use client";
import { useState } from "react";
import AdSlot from "@/components/AdSlot";

const QUANTITIES = [1, 5, 10, 25, 50, 100];

export default function UuidGeneratorPage() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(5);

  const generate = () => {
    const generated: string[] = [];
    for (let i = 0; i < count; i++) {
      generated.push(crypto.randomUUID());
    }
    setUuids(generated);
  };

  const copyAll = () => {
    const text = uuids.join("\n");
    if (text) {
      navigator.clipboard.writeText(text);
    }
  };

  const clearAll = () => {
    setUuids([]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">UUID Generator</h1>
        <p className="text-[#94a3b8] text-sm">
          Generate random UUIDs (v4) — bulk generation with one-click copy
        </p>
      </div>

      <AdSlot className="mb-6" />

      {/* Quantity selector */}
      <div className="mb-4">
        <label className="text-xs text-[#64748b] mb-2 block">Quantity</label>
        <div className="flex flex-wrap gap-2">
          {QUANTITIES.map((q) => (
            <button
              key={q}
              onClick={() => setCount(q)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                count === q
                  ? "bg-[#3b82f6] text-white"
                  : "bg-[#1e293b] text-[#94a3b8] border border-[#334155] hover:text-white hover:border-[#64748b]"
              }`}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={generate} className="btn-primary">
          Generate
        </button>
        {uuids.length > 0 && (
          <button
            onClick={copyAll}
            className="px-4 py-2 rounded-lg border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-sm font-medium cursor-pointer"
          >
            Copy All
          </button>
        )}
        <button
          onClick={clearAll}
          className="px-4 py-2 rounded-lg border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-sm font-medium cursor-pointer"
        >
          Clear
        </button>
      </div>

      {/* Stats */}
      {uuids.length > 0 && (
        <div className="mb-2 text-xs text-[#64748b]">
          Generated {uuids.length} UUID{uuids.length !== 1 ? "s" : ""}
        </div>
      )}

      {/* Output */}
      <div className="relative">
        <textarea
          value={uuids.join("\n")}
          readOnly
          className="tool-textarea"
          rows={10}
          placeholder="Click &quot;Generate&quot; to create UUIDs..."
          spellCheck={false}
        />
        {uuids.length > 0 && (
          <button
            onClick={copyAll}
            className="absolute top-3 right-3 p-1.5 rounded-md bg-[#1e293b] border border-[#334155] text-[#64748b] hover:text-white cursor-pointer"
            title="Copy All"
          >
            📋
          </button>
        )}
      </div>

      {/* Tip */}
      <div className="mt-4 p-3 rounded-lg bg-[#1e293b] border border-[#334155]">
        <p className="text-xs text-[#64748b]">
          💡 UUIDs are generated using <code className="text-[#e2e8f0]">crypto.randomUUID()</code> — cryptographically secure &middot; All processing is done locally in your browser
        </p>
      </div>

      
      {/* About This Tool */}
      <section className="mt-12 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">About This Tool</h2>
        <div className="space-y-3 text-[#94a3b8] text-sm leading-relaxed">
          <p>Universally Unique Identifiers (UUIDs) are 128-bit identifiers used across software development for database primary keys, session tokens, API resource identifiers, and distributed system coordination. This free online UUID generator creates cryptographically secure random UUIDs (v4) in your browser.</p>
          <p>Generate single UUIDs for quick tasks or bulk-generate up to 100 at once for seeding databases or test data. Each UUID is generated using <code>crypto.randomUUID()</code> — the same cryptographic-grade randomness used by browsers for security-critical operations.</p>
          <p>UUIDs are essential for any system that needs unique identifiers without a central authority, including microservices architectures, offline-first applications, and distributed databases. This tool is also great for generating test data or demo values.</p>
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">How to Use</h2>
        <ol className="space-y-2 text-[#94a3b8] text-sm leading-relaxed list-decimal list-inside">
          <li>Choose how many UUIDs you need, from one up to a hundred.</li>
          <li>Click Generate to produce random version-4 UUIDs.</li>
          <li>Click Copy to grab the whole list, one identifier per line.</li>
        </ol>
        <p className="mt-3 text-xs text-[#64748b]">Tip: Generate a few spares — one discarded UUID costs nothing, a recycled one can cost a database migration.</p>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">Common Mistakes</h2>
        <div className="space-y-3">
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">1. Using UUIDs as secrets</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">A random UUID is hard to guess but it is not a security token. Session identifiers and API keys need a cryptographically managed secret store, not a public ID format.</p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">2. Storing as plain text</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">Most databases store UUIDs in a wide character column, which bloats indexes. A binary sixteen-byte column type halves the size and speeds up lookups.</p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">3. Random UUIDs as primary keys</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">Version-4 identifiers land at random positions, fragmenting database indexes under heavy insert load. Time-ordered identifiers such as UUIDv7 keep the index pages warm.</p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">4. Assuming absolute uniqueness</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">Collision probability is astronomically small but not zero. Systems that demand hard guarantees still need a database constraint as the final backstop.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>Are these truly random UUIDs?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              Yes. They are generated using crypto.randomUUID() which uses the browser's cryptographically secure random number generator — the same one used for security tokens.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>What is the difference between UUID v4 and v7?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              UUID v4 is fully random (122 bits of randomness). UUID v7 is time-ordered, offering better database index performance. This tool generates v4.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>How many UUIDs can I generate at once?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              You can generate 1, 5, 10, 25, 50, or 100 UUIDs in a single batch. Each is independently generated for maximum uniqueness.
            </div>
          </details>
        </div>
      </section>


      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">You Might Also Need</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="/tools/jwt-decoder"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">JWT Decoder</span>
            <span className="block text-xs text-[#3b82f6] mt-1">Use Now →</span>
          </a>
          <a
            href="/tools/timestamp"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">Timestamp Converter</span>
            <span className="block text-xs text-[#3b82f6] mt-1">Use Now →</span>
          </a>
          <a
            href="/tools/base64"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">Base64 Encode / Decode</span>
            <span className="block text-xs text-[#3b82f6] mt-1">Use Now →</span>
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Are these truly random UUIDs?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Generated using crypto.randomUUID() - cryptographically secure."}}, {"@type": "Question", "name": "What is the difference between UUID v4 and v7?", "acceptedAnswer": {"@type": "Answer", "text": "UUID v4 is fully random. UUID v7 is time-ordered for better database index performance."}}, {"@type": "Question", "name": "How many UUIDs can I generate at once?", "acceptedAnswer": {"@type": "Answer", "text": "You can generate 1, 5, 10, 25, 50, or 100 UUIDs in a single batch."}}]}'}} />

      <AdSlot className="mt-8" />
    </div>
  );
}
