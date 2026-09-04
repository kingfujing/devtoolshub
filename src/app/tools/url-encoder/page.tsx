"use client";
import { useState } from "react";
import AdSlot from "@/components/AdSlot";

export default function UrlEncoderPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [method, setMethod] = useState<'component' | 'full'>('component');

  const process = () => {
    if (!input.trim()) return setOutput('');
    try {
      if (mode === 'encode') {
        if (method === 'component') {
          setOutput(encodeURIComponent(input));
        } else {
          setOutput(encodeURI(input));
        }
      } else {
        if (method === 'component') {
          setOutput(decodeURIComponent(input));
        } else {
          setOutput(decodeURI(input));
        }
      }
    } catch {
      setOutput('❌ Invalid input for URL decoding');
    }
  };

  const swap = () => {
    setInput(output);
    setOutput('');
  };

  const clearAll = () => { setInput(''); setOutput(''); };

  const methodLabel = method === 'component' ? 'Component' : 'Full URL';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">URL Encoder / Decoder</h1>
        <p className="text-[#94a3b8] text-sm">Encode and decode URL components — perfect for query string manipulation</p>
      </div>

      <AdSlot className="mb-6" />

      {/* Mode Tabs */}
      <div className="flex gap-1 mb-4 p-1 rounded-lg bg-[#0f172a] border border-[#334155] w-fit">
        <button
          onClick={() => setMode('encode')}
          className={`px-5 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
            mode === 'encode' ? 'bg-[#3b82f6] text-white' : 'text-[#94a3b8] hover:text-white'
          }`}
        >
          Encode
        </button>
        <button
          onClick={() => setMode('decode')}
          className={`px-5 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
            mode === 'decode' ? 'bg-[#3b82f6] text-white' : 'text-[#94a3b8] hover:text-white'
          }`}
        >
          Decode
        </button>
      </div>

      {/* Method Switcher */}
      <div className="flex items-center gap-3 mb-4">
        <label className="text-xs text-[#64748b]">Method</label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value as 'component' | 'full')}
          className="input-field w-40"
        >
          <option value="component">encodeURIComponent / decodeURIComponent</option>
          <option value="full">encodeURI / decodeURI</option>
        </select>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={process} className="btn-primary">
          {mode === 'encode' ? 'Encode →' : 'Decode →'}
        </button>
        <button onClick={swap} className="px-4 py-2 rounded-lg border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-sm font-medium cursor-pointer">
          Swap
        </button>
        <button onClick={clearAll} className="px-4 py-2 rounded-lg border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-sm font-medium cursor-pointer">
          Clear
        </button>
      </div>

      {/* Editor */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-[#64748b] mb-2 block">
            {mode === 'encode' ? 'Input Text' : 'Input URL Encoded'}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === 'encode' ? 'Enter text to URL encode...' : 'Enter URL encoded string...'}
            className="tool-textarea"
            rows={12}
            spellCheck={false}
          />
        </div>
        <div>
          <label className="text-xs text-[#64748b] mb-2 block">
            {mode === 'encode' ? `Encoded (${methodLabel})` : `Decoded (${methodLabel})`}
          </label>
          <div className="relative">
            <textarea
              value={output}
              readOnly
              className="tool-textarea pr-10"
              rows={12}
              placeholder="Result will appear here"
              spellCheck={false}
            />
            {output && (
              <button
                onClick={() => navigator.clipboard.writeText(output)}
                className="absolute top-3 right-3 p-1.5 rounded-md bg-[#1e293b] border border-[#334155] text-[#64748b] hover:text-white cursor-pointer"
                title="Copy"
              >
                📋
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-lg bg-[#1e293b] border border-[#334155]">
        <p className="text-xs text-[#64748b]">
          💡 Encodes special characters including ?, /, &amp;, =, #, spaces and Unicode
        </p>
      </div>

      
      {/* About This Tool */}
      <section className="mt-12 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">About This Tool</h2>
        <div className="space-y-3 text-[#94a3b8] text-sm leading-relaxed">
          <p>URL encoding (also known as percent-encoding) converts special characters into a format that can be safely transmitted in URLs. This free online URL encoder/decoder handles both encoder modes — for query parameters and for full URLs — with instant bidirectional conversion.</p>
          <p>Essential use cases include encoding user input before appending it as URL query parameters, decoding URLs from web server logs for inspection, handling non-ASCII characters in internationalized URLs, and preparing data for REST API calls that include special characters.</p>
          <p>The tool provides two encoding modes: <code>encodeURIComponent</code> for query parameters (encodes everything including ?, &, and /) and <code>encodeURI</code> for full URLs (preserves structural characters). A convenient swap button lets you quickly switch between encoder and decoder modes.</p>
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">How to Use</h2>
        <ol className="space-y-2 text-[#94a3b8] text-sm leading-relaxed list-decimal list-inside">
          <li>Paste the text or URL segment to convert.</li>
          <li>Choose Component mode for query parameter values, or full URI mode to keep structural characters.</li>
          <li>Click Encode or Decode — or use Swap to reverse direction.</li>
          <li>Copy the result into your link, config or code.</li>
        </ol>
        <p className="mt-3 text-xs text-[#64748b]">Tip: Anything that goes inside a query parameter value should use Component mode, always.</p>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">Common Mistakes</h2>
        <div className="space-y-3">
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">1. Wrong mode for query values</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">Full-URI mode preserves the ampersand, equals sign and question mark. Inside a parameter value those characters must be encoded, or they will split your query string apart.</p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">2. Double encoding</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">Encoding an already-encoded string turns spaces into the percent-twenty-five sequence. Decode first, then encode once — the percent sign is itself encoded.</p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">3. Treating plus as space</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">The plus sign means space only inside form-encoded bodies, not in standard percent-encoding. Decoding a URL-encoded path with form rules corrupts plus signs that were meant literally.</p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">4. Encoding the whole URL</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">Encoding an entire URL including its scheme and slashes breaks the link structure. Encode the parts, not the address.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>What's the difference between the two encoder modes?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              encodeURIComponent encodes everything including ?, &, /, = for query parameters. encodeURI preserves URL structure characters for encoding full URLs.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>Does it support non-ASCII characters?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              Yes, it handles all Unicode characters including Chinese, emoji, accented letters, and special symbols.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>Is my data uploaded anywhere?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              No. All encoding and decoding is done client-side using JavaScript's built-in encodeURIComponent() and decodeURIComponent(). Zero server uploads.
            </div>
          </details>
        </div>
      </section>


      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">You Might Also Need</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="/tools/base64"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">Base64 Encode / Decode</span>
            <span className="block text-xs text-[#3b82f6] mt-1">Use Now →</span>
          </a>
          <a
            href="/tools/json-formatter"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">JSON Formatter</span>
            <span className="block text-xs text-[#3b82f6] mt-1">Use Now →</span>
          </a>
          <a
            href="/tools/regex-tester"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">Regex Tester</span>
            <span className="block text-xs text-[#3b82f6] mt-1">Use Now →</span>
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What\u0027s the difference between the two encoder modes?", "acceptedAnswer": {"@type": "Answer", "text": "encodeURIComponent encodes everything including ?, &, / for query parameters. encodeURI preserves URL structure."}}, {"@type": "Question", "name": "Does it support non-ASCII characters?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, it handles all Unicode characters including Chinese, emoji, and special symbols."}}, {"@type": "Question", "name": "Is my data uploaded anywhere?", "acceptedAnswer": {"@type": "Answer", "text": "No. All encoding and decoding is done client-side. Zero server uploads."}}]}'}} />

      <AdSlot className="mt-8" />
    </div>
  );
}
