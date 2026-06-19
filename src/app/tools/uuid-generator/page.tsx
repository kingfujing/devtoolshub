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

      <AdSlot className="mt-8" />
    </div>
  );
}
