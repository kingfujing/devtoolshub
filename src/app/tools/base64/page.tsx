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

      <AdSlot className="mt-8" />
    </div>
  );
}
