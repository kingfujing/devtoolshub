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

      <AdSlot className="mt-8" />
    </div>
  );
}
