"use client";
import { useState } from "react";
import AdSlot from "@/components/AdSlot";

export default function Base64Page() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const process = () => {
    if (!input.trim()) return setOutput('');
    try {
      if (mode === 'encode') {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input))));
      }
    } catch {
      setOutput('❌ Invalid Base64 string');
    }
  };

  const autoDetect = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    try {
      const decoded = atob(trimmed);
      const decodedStr = decodeURIComponent(escape(decoded));
      setOutput(`Detected: looks like Base64 encoded data, decoded result:\n${decodedStr}`);
    } catch {
      const encoded = btoa(unescape(encodeURIComponent(trimmed)));
      setOutput(`Detected: looks like plain text, Base64 encoded result:\n${encoded}`);
    }
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
  };

  const clearAll = () => { setInput(''); setOutput(''); };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Base64 Encode / Decode</h1>
        <p className="text-[#94a3b8] text-sm">Online Base64 encoder and decoder — supports Chinese, Unicode and special characters</p>
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

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={process} className="btn-primary">
          {mode === 'encode' ? 'Encode →' : 'Decode →'}
        </button>
        <button onClick={autoDetect} className="px-4 py-2 rounded-lg border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-sm font-medium cursor-pointer">
          Auto Detect
        </button>
        <button onClick={clearAll} className="px-4 py-2 rounded-lg border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-sm font-medium cursor-pointer">
          Clear
        </button>
      </div>

      {/* Editor */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-[#64748b] mb-2 block">
            {mode === 'encode' ? 'Input Text' : 'Input Base64'}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 string...'}
            className="tool-textarea"
            rows={12}
            spellCheck={false}
          />
        </div>
        <div>
          <label className="text-xs text-[#64748b] mb-2 block">
            {mode === 'encode' ? 'Base64 Output' : 'Decoded Output'}
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
                onClick={copyOutput}
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
          💡 Supports Chinese, Unicode and special characters · Base64 output is ~33% larger than input · All processing is done locally in your browser
        </p>
      </div>

      
      {/* About This Tool */}
      <section className="mt-12 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">About This Tool</h2>
        <div className="space-y-3 text-[#94a3b8] text-sm leading-relaxed">
          <p>Base64 encoding is a fundamental technique that converts binary data into ASCII text, making it safe for transmission over text-based protocols like HTTP, email, and JSON. This free online Base64 encoder/decoder handles everything from short strings to complex data with full Unicode support.</p>
          <p>Developers use Base64 encoding for embedding images as data URIs in HTML and CSS, encoding binary data in JSON payloads, handling JWT token parts (header and payload are Base64url-encoded), and storing binary content in text-based databases. The decoder mode is equally useful for inspecting encoded data or debugging API responses.</p>
          <p>This tool fully supports Chinese characters, emoji, and Unicode — things that many basic Base64 tools get wrong. All processing happens in your browser with zero server uploads.</p>
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">How to Use</h2>
        <ol className="space-y-2 text-[#94a3b8] text-sm leading-relaxed list-decimal list-inside">
          <li>Paste the text or Base64 string into the input box.</li>
          <li>The tool auto-detects whether to encode or decode, or switch modes manually.</li>
          <li>Unicode, Chinese and special characters are supported in both directions.</li>
          <li>Click the output to copy the converted string.</li>
        </ol>
        <p className="mt-3 text-xs text-[#64748b]">Tip: Encoding an encoded string doubles it up — if your output still looks like Base64, you probably encoded twice.</p>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">Common Mistakes</h2>
        <div className="space-y-3">
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">1. Treating Base64 as encryption</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">Base64 is an encoding, not encryption. It provides zero confidentiality — anyone can decode it instantly. Never use it to protect secrets.</p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">2. Broken whitespace</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">Line breaks and spaces inside a Base64 string make strict decoders fail. Real-world PEM files include newlines every 64 characters and must be stripped first.</p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">3. Corrupted Unicode</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">The browser btoa/atob functions only handle Latin1 characters. Naive snippets corrupt Chinese and emoji — this tool routes through UTF-8 properly.</p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">4. Missing padding</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">Strict libraries require the trailing = padding characters, and URL-safe variants swap the plus and slash symbols. Mixing the two alphabets silently breaks decoding.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>Is my data safe?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              Absolutely. All encoding and decoding is done client-side using browser btoa() and atob() functions with Unicode support. Nothing is uploaded.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>Does it support Chinese characters?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              Yes. The tool handles Chinese, Japanese, Arabic, emoji, and any Unicode characters correctly — a common pitfall with basic Base64 tools.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>What is Base64 commonly used for?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              Common uses: embedding images as data URIs, encoding binary data in JSON APIs, JWT token parts, and storing binary content in databases.
            </div>
          </details>
        </div>
      </section>


      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">You Might Also Need</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="/tools/json-formatter"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">JSON Formatter</span>
            <span className="block text-xs text-[#3b82f6] mt-1">Use Now →</span>
          </a>
          <a
            href="/tools/url-encoder"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">URL Encoder / Decoder</span>
            <span className="block text-xs text-[#3b82f6] mt-1">Use Now →</span>
          </a>
          <a
            href="/tools/jwt-decoder"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">JWT Decoder</span>
            <span className="block text-xs text-[#3b82f6] mt-1">Use Now →</span>
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is my data safe?", "acceptedAnswer": {"@type": "Answer", "text": "Absolutely. All encoding and decoding is done client-side. Nothing is uploaded."}}, {"@type": "Question", "name": "Does it support Chinese characters?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The tool handles Chinese, Japanese, Arabic, emoji, and any Unicode characters."}}, {"@type": "Question", "name": "What is Base64 commonly used for?", "acceptedAnswer": {"@type": "Answer", "text": "Common uses: embedding images as data URIs, encoding binary data in JSON APIs, JWT token parts."}}]}'}} />

      <AdSlot className="mt-8" />
    </div>
  );
}
