"use client";
import { useState } from "react";
import AdSlot from "@/components/AdSlot";

export default function JsonFormatterPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [indent, setIndent] = useState(2);

  const format = () => {
    setError('');
    if (!input.trim()) return setOutput('');
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indent));
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Invalid JSON';
      setError(msg);
      setOutput('');
    }
  };

  const compress = () => {
    setError('');
    if (!input.trim()) return setOutput('');
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Invalid JSON';
      setError(msg);
      setOutput('');
    }
  };

  const validate = () => {
    setError('');
    if (!input.trim()) return setOutput('');
    try {
      JSON.parse(input);
      setOutput('✅ Valid JSON');
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Invalid JSON';
      setError(msg);
      setOutput('');
    }
  };

  const clearAll = () => { setInput(''); setOutput(''); setError(''); };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">JSON Formatter</h1>
        <p className="text-[#94a3b8] text-sm">Format, compress and validate JSON data online</p>
      </div>

      <AdSlot className="mb-6" />

      {/* Controls */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={format} className="btn-primary">Format</button>
        <button onClick={compress} className="btn-primary">Compress</button>
        <button onClick={validate} className="px-4 py-2 rounded-lg border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-sm font-medium cursor-pointer">Validate</button>
        <button onClick={clearAll} className="px-4 py-2 rounded-lg border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-sm font-medium cursor-pointer">Clear</button>

        <div className="flex items-center gap-2 ml-auto">
          <label className="text-xs text-[#64748b]">Indent</label>
          <select
            value={indent}
            onChange={(e) => setIndent(Number(e.target.value))}
            className="input-field w-20"
          >
            <option value={2}>2 Spaces</option>
            <option value={4}>4 Spaces</option>
            <option value={1}>1 Space</option>
            <option value={0}>Minified</option>
          </select>
        </div>
      </div>

      {/* Editor */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-[#64748b] mb-2 block">Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='{"name": "DevTools", "version": "1.0"}'
            className="tool-textarea"
            rows={14}
            spellCheck={false}
          />
        </div>
        <div>
          <label className="text-xs text-[#64748b] mb-2 block">Output</label>
          <textarea
            value={output}
            readOnly
            className={`tool-textarea ${error ? 'border-red-500/50' : ''}`}
            rows={14}
            onClick={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.select();
              navigator.clipboard.writeText(target.value);
            }}
            placeholder="Result will appear here"
            spellCheck={false}
          />
        </div>
      </div>

      {error && (
        <div className="mt-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
          ❌ {error}
        </div>
      )}

      <div className="mt-4 p-3 rounded-lg bg-[#1e293b] border border-[#334155]">
        <p className="text-xs text-[#64748b]">💡 Click output to auto-copy · All data is processed locally in your browser</p>
      </div>

      
      {/* About This Tool */}
      <section className="mt-12 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">About This Tool</h2>
        <div className="space-y-3 text-[#94a3b8] text-sm leading-relaxed">
          <p>A JSON formatter is an essential tool for every developer working with APIs, configuration files, and data exchange. This free online JSON formatter lets you beautify, compress, and validate JSON data instantly — all in your browser.</p>
          <p>Common use cases include debugging API responses during development, formatting configuration files like <code>package.json</code> or <code>tsconfig.json</code>, validating JSON before importing it into a database, and sharing formatted JSON snippets with your team. Whether you're preparing a bug report that includes API output or just need to read a messy JSON blob, this tool makes it clean and readable.</p>
          <p>The JSON formatter supports adjustable indentation (2 spaces, 4 spaces, 1 space, or minified), real-time error detection with descriptive messages, and one-click copy of the output.</p>
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>Is my JSON data sent to a server?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              No. All JSON processing is done entirely in your browser using JavaScript's built-in JSON.parse() and JSON.stringify(). Your data never leaves your device.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>What indentation options are available?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              You can choose between 2 spaces, 4 spaces, 1 space, or minified (0 spaces). 2 spaces is the most common convention for readability.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>What happens if my JSON is invalid?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              The tool shows a clear error message describing the parsing error, including where the error occurred.
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
            href="/tools/regex-tester"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">Regex Tester</span>
            <span className="block text-xs text-[#3b82f6] mt-1">Use Now →</span>
          </a>
          <a
            href="/tools/url-encoder"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">URL Encoder / Decoder</span>
            <span className="block text-xs text-[#3b82f6] mt-1">Use Now →</span>
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is my JSON data sent to a server?", "acceptedAnswer": {"@type": "Answer", "text": "No. All JSON processing is done entirely in your browser. Your data never leaves your device."}}, {"@type": "Question", "name": "What indentation options are available?", "acceptedAnswer": {"@type": "Answer", "text": "You can choose between 2 spaces, 4 spaces, 1 space, or minified (0 spaces)."}}, {"@type": "Question", "name": "What happens if my JSON is invalid?", "acceptedAnswer": {"@type": "Answer", "text": "The tool shows a clear error message describing the parsing error and where it occurred."}}]}'}} />

      <AdSlot className="mt-8" />
    </div>
  );
}
