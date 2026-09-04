"use client";
import { useState, useMemo } from "react";
import AdSlot from "@/components/AdSlot";

// ─── Color Conversion Helpers ───

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const clean = hex.replace('#', '').trim();
  if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(clean)) return null;
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16);
    const g = parseInt(clean[1] + clean[1], 16);
    const b = parseInt(clean[2] + clean[2], 16);
    return { r, g, b };
  }
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  h /= 360; s /= 100; l /= 100;
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  if (s === 0) return { r: Math.round(l * 255), g: Math.round(l * 255), b: Math.round(l * 255) };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return {
    r: Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    g: Math.round(hue2rgb(p, q, h) * 255),
    b: Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
  };
}

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => Math.round(n).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toLowerCase();
}

function hslToString(h: number, s: number, l: number): string {
  return `hsl(${h},${s}%,${l}%)`;
}

function rgbToString(r: number, g: number, b: number): string {
  return `rgb(${r},${g},${b})`;
}

// ─── Input Detection ───

type ColorFormat = 'hex' | 'rgb' | 'hsl' | null;

function detectFormat(input: string): ColorFormat {
  const trimmed = input.trim();
  if (!trimmed) return null;
  // HEX: starts with # or is just 3/6 hex chars
  if (/^#[0-9a-fA-F]{3,6}$/.test(trimmed)) return 'hex';
  if (/^[0-9a-fA-F]{6}$/.test(trimmed) || /^[0-9a-fA-F]{3}$/.test(trimmed)) return 'hex';
  // RGB: rgb(...) or rgba(...)
  if (/^rgb(a)?\s*\(/.test(trimmed)) return 'rgb';
  // HSL: hsl(...) or hsla(...)
  if (/^hsl(a)?\s*\(/.test(trimmed)) return 'hsl';
  return null;
}

function parseRgb(input: string): { r: number; g: number; b: number } | null {
  const match = input.match(/rgb(a)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
  if (!match) return null;
  const r = parseInt(match[2]);
  const g = parseInt(match[3]);
  const b = parseInt(match[4]);
  if (r > 255 || g > 255 || b > 255) return null;
  return { r, g, b };
}

function parseHsl(input: string): { h: number; s: number; l: number } | null {
  const match = input.match(/hsl(a)?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%/i);
  if (!match) return null;
  const h = parseInt(match[2]);
  const s = parseInt(match[3]);
  const l = parseInt(match[4]);
  if (h > 360 || s > 100 || l > 100) return null;
  return { h, s, l };
}

// ─── Copy Button Component ───

function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer
        bg-[#1e293b] border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b]"
    >
      {copied ? '✓ Copied' : label || 'Copy'}
    </button>
  );
}

// ─── Result Row Component ───

function ResultRow({ label, value, copyValue }: { label: string; value: string; copyValue?: string }) {
  if (!value) return null;
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-[#1e293b] border border-[#334155]">
      <div>
        <span className="text-xs text-[#64748b] mr-2">{label}</span>
        <code className="text-sm text-white font-mono">{value}</code>
      </div>
      <CopyButton text={copyValue || value} />
    </div>
  );
}

// ─── Main Page Component ───

export default function ColorConverterPage() {
  const [input, setInput] = useState('');

  const format = useMemo(() => detectFormat(input), [input]);

  const { hex, rgb, hsl, error } = useMemo(() => {
    const result = { hex: '', rgb: '', hsl: '', error: '' };
    const trimmed = input.trim();
    if (!trimmed) return result;

    const detected = detectFormat(trimmed);
    if (!detected) {
      result.error = 'Could not detect color format. Try formats like #ff6600, rgb(255,102,0), or hsl(24,100%,50%)';
      return result;
    }

    try {
      if (detected === 'hex') {
        const parsed = hexToRgb(trimmed);
        if (!parsed) {
          result.error = 'Invalid HEX color';
          return result;
        }
        result.hex = trimmed.startsWith('#') ? trimmed.toLowerCase() : `#${trimmed.toLowerCase()}`;
        result.rgb = rgbToString(parsed.r, parsed.g, parsed.b);
        const hslVals = rgbToHsl(parsed.r, parsed.g, parsed.b);
        result.hsl = hslToString(hslVals.h, hslVals.s, hslVals.l);
      } else if (detected === 'rgb') {
        const parsed = parseRgb(trimmed);
        if (!parsed) {
          result.error = 'Invalid RGB format. Use: rgb(R,G,B) or rgba(R,G,B,A)';
          return result;
        }
        result.rgb = rgbToString(parsed.r, parsed.g, parsed.b);
        result.hex = rgbToHex(parsed.r, parsed.g, parsed.b);
        const hslVals = rgbToHsl(parsed.r, parsed.g, parsed.b);
        result.hsl = hslToString(hslVals.h, hslVals.s, hslVals.l);
      } else if (detected === 'hsl') {
        const parsed = parseHsl(trimmed);
        if (!parsed) {
          result.error = 'Invalid HSL format. Use: hsl(H,S%,L%) or hsla(H,S%,L%,A)';
          return result;
        }
        result.hsl = hslToString(parsed.h, parsed.s, parsed.l);
        const rgbVals = hslToRgb(parsed.h, parsed.s, parsed.l);
        result.rgb = rgbToString(rgbVals.r, rgbVals.g, rgbVals.b);
        result.hex = rgbToHex(rgbVals.r, rgbVals.g, rgbVals.b);
      }
    } catch {
      result.error = 'Error processing color';
    }

    return result;
  }, [input]);

  const previewColor = hex || (format === 'rgb' ? rgb : format === 'hsl' ? hsl : '');

  const clearInput = () => setInput('');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Color Converter</h1>
        <p className="text-[#94a3b8] text-sm">
          Convert colors between HEX, RGB, HSL with live preview
        </p>
      </div>

      <AdSlot className="mb-6" />

      {/* Color Preview */}
      <div className="mb-6">
        <div
          className="w-full h-40 rounded-xl border-2 border-[#334155] transition-colors duration-200"
          style={{
            backgroundColor: previewColor || '#1e293b',
          }}
        />
      </div>

      {/* Input */}
      <div className="mb-4">
        <label className="text-xs text-[#64748b] mb-2 block">
          Enter Color Value
          {format && (
            <span className="ml-2 px-2 py-0.5 rounded text-xs font-mono bg-[#3b82f6]/20 text-blue-300">
              {format === 'hex' ? 'HEX' : format === 'rgb' ? 'RGB' : 'HSL'}
            </span>
          )}
        </label>
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="#ff6600  or  rgb(255,102,0)  or  hsl(24,100%,50%)"
            className="input-field flex-1 h-11 font-mono"
            spellCheck={false}
          />
          <button
            onClick={clearInput}
            className="px-4 py-2 rounded-lg border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-sm font-medium cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
          ❌ {error}
        </div>
      )}

      {/* Results */}
      <div className="space-y-3">
        <ResultRow label="HEX" value={hex} />
        <ResultRow label="RGB" value={rgb} />
        <ResultRow label="HSL" value={hsl} />
      </div>

      {/* Info */}
      <div className="mt-4 p-3 rounded-lg bg-[#1e293b] border border-[#334155]">
        <p className="text-xs text-[#64748b]">
          Supports HEX (#ff6600 or #f60), RGB (rgb(255,102,0)), HSL (hsl(24,100%,50%))
        </p>
      </div>

      
      {/* About This Tool */}
      <section className="mt-12 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">About This Tool</h2>
        <div className="space-y-3 text-[#94a3b8] text-sm leading-relaxed">
          <p>Color conversion between HEX, RGB, and HSL formats is a daily task for frontend developers and designers. This free online color converter provides instant, bidirectional conversion with a live color preview so you can see exactly what you're working with.</p>
          <p>Use this tool to convert Tailwind CSS colors (like <code>#3b82f6</code>) to RGB for use in Canvas API or SVG filters, generate HSL values for CSS color manipulation, ensure color consistency across different CSS color formats, and preview colors before committing to a design.</p>
          <p>The converter supports all standard CSS color formats: HEX with 3 or 6 digits (<code>#f60</code> or <code>#ff6600</code>), RGB functional notation (<code>rgb(255,102,0)</code>), and HSL (<code>hsl(24,100%,50%)</code>). The live color preview updates instantly as you type.</p>
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">How to Use</h2>
        <ol className="space-y-2 text-[#94a3b8] text-sm leading-relaxed list-decimal list-inside">
          <li>Paste a color in HEX, RGB or HSL — the format is auto-detected.</li>
          <li>The converted values update live in all three notations.</li>
          <li>Check the preview block to see the color at full size.</li>
          <li>Click any output to copy it in your preferred format.</li>
        </ol>
        <p className="mt-3 text-xs text-[#64748b]">Tip: Design tokens usually live in HEX, while CSS animation prefers HSL because lightness adjusts independently of hue.</p>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">Common Mistakes</h2>
        <div className="space-y-3">
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">1. Short and long HEX confusion</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">Three-digit HEX is a shorthand that doubles each digit. It covers fewer colors than six-digit notation — expand it before comparing values.</p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">2. Dropping the alpha channel</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">Eight-digit HEX and the rgba function carry transparency. Converting through a tool that ignores alpha silently makes colors opaque.</p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">3. Mixing HSL units</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">Hue runs from zero to three sixty degrees, but saturation and lightness are percentages. Feeding raw integers into functions expecting percentages shifts colors unpredictably.</p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">4. Rounding drift</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">Converting back and forth between notations rounds numbers each time, and the color slowly drifts away from the original. Keep one canonical format as your source of truth.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>What color formats are supported?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              HEX (3 or 6 digits like #f60 or #ff6600), RGB (rgb(255,102,0)), and HSL (hsl(24,100%,50%)). The tool auto-detects which format you paste.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>Can I copy individual color values?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              Yes. Each output format has its own copy button, so you can copy just the format you need for your CSS or code.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>How accurate is the color preview?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              The preview uses the actual computed color from your input — it is pixel-perfect and updates in real-time as you type.
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
            href="/tools/timestamp"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">Timestamp Converter</span>
            <span className="block text-xs text-[#3b82f6] mt-1">Use Now →</span>
          </a>
          <a
            href="/tools/ai-id-photo"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">AI ID Photo Maker</span>
            <span className="block text-xs text-[#3b82f6] mt-1">Use Now →</span>
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What color formats are supported?", "acceptedAnswer": {"@type": "Answer", "text": "HEX (3 or 6 digits), RGB (rgb(255,102,0)), and HSL (hsl(24,100%,50%)). Auto-detection."}}, {"@type": "Question", "name": "Can I copy individual color values?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Each output format has its own copy button."}}, {"@type": "Question", "name": "How accurate is the color preview?", "acceptedAnswer": {"@type": "Answer", "text": "Pixel-perfect real-time preview based on your input."}}]}'}} />

      <AdSlot className="mt-8" />
    </div>
  );
}
