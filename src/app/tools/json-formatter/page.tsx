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

      <AdSlot className="mt-8" />
    </div>
  );
}
