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

      <AdSlot className="mt-8" />
    </div>
  );
}
