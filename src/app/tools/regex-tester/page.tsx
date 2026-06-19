"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import AdSlot from "@/components/AdSlot";

export default function RegexTesterPage() {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('gm');
  const [testText, setTestText] = useState('');
  const [matches, setMatches] = useState<{ full: string; groups: Record<string, string>; index: number }[]>([]);
  const [matchCount, setMatchCount] = useState(0);
  const [error, setError] = useState('');
  const [highlighted, setHighlighted] = useState('');
  const outputRef = useRef<HTMLDivElement>(null);

  const testRegex = useCallback(() => {
    setError('');
    if (!pattern.trim()) {
      setMatches([]);
      setMatchCount(0);
      setHighlighted(testText);
      return;
    }

    try {
      const regex = new RegExp(pattern, flags);
      const text = testText;
      const results: { full: string; groups: Record<string, string>; index: number }[] = [];
      let count = 0;

      // For global flag, collect all matches
      if (flags.includes('g')) {
        let match;
        while ((match = regex.exec(text)) !== null) {
          const groups: Record<string, string> = {};
          if (match.groups) {
            for (const [k, v] of Object.entries(match.groups)) {
              if (v !== undefined) groups[k] = v;
            }
          }
          results.push({
            full: match[0],
            groups,
            index: match.index,
          });
          count++;
          if (match.index === regex.lastIndex) regex.lastIndex++;
        }
      } else {
        const match = regex.exec(text);
        if (match) {
          const groups: Record<string, string> = {};
          if (match.groups) {
            for (const [k, v] of Object.entries(match.groups)) {
              if (v !== undefined) groups[k] = v;
            }
          }
          results.push({
            full: match[0],
            groups,
            index: match.index,
          });
          count = 1;
        }
      }

      setMatches(results);
      setMatchCount(count);

      // Build highlighted HTML
      if (count > 0 && text) {
        let html = '';
        let lastIdx = 0;
        for (const m of results) {
          html += escapeHtml(text.slice(lastIdx, m.index));
          html += `<mark class=\"bg-yellow-500/30 text-yellow-200 rounded-sm px-0.5\">${escapeHtml(m.full)}</mark>`;
          lastIdx = m.index + m.full.length;
        }
        html += escapeHtml(text.slice(lastIdx));
        setHighlighted(html);
      } else {
        setHighlighted(escapeHtml(text));
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Invalid regular expression';
      setError(msg);
      setMatches([]);
      setMatchCount(0);
    }
  }, [pattern, flags, testText]);

  useEffect(() => {
    const timer = setTimeout(() => testRegex(), 300);
    return () => clearTimeout(timer);
  }, [testRegex]);

  const toggleFlag = (flag: string) => {
    setFlags((prev) =>
      prev.includes(flag) ? prev.replace(flag, '') : prev + flag
    );
  };

  const clearAll = () => { setPattern(''); setTestText(''); setMatches([]); setMatchCount(0); setHighlighted(''); setError(''); };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Regex Tester</h1>
        <p className="text-[#94a3b8] text-sm">Real-time regular expression testing and debugging with live highlighting</p>
      </div>

      <AdSlot className="mb-6" />

      {/* Pattern input */}
      <div className="mb-4">
        <label className="text-xs text-[#64748b] mb-2 block">Pattern</label>
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748b] text-sm font-mono">/</span>
            <input
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="[a-z]+"
              className="input-field pl-7 pr-4 h-11"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b] text-sm font-mono">/{flags}</span>
          </div>
          <button onClick={clearAll} className="px-4 py-2 rounded-lg border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-sm font-medium cursor-pointer whitespace-nowrap">
            Clear
          </button>
        </div>
      </div>

      {/* Flags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {['g', 'i', 'm', 's', 'u', 'y'].map((flag) => (
          <button
            key={flag}
            onClick={() => toggleFlag(flag)}
            className={`px-3 py-1 rounded-md text-xs font-mono cursor-pointer transition-colors ${
              flags.includes(flag)
                ? 'bg-[#3b82f6] text-white'
                : 'bg-[#1e293b] text-[#64748b] border border-[#334155] hover:text-white'
            }`}
          >
            {flag}
          </button>
        ))}
        <span className="text-xs text-[#64748b] flex items-center ml-2">
          {matchCount > 0 ? `${matchCount} matches found` : 'No matches'}
        </span>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
          ❌ {error}
        </div>
      )}

      {/* Test text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-[#64748b] mb-2 block">Test Text</label>
          <textarea
            value={testText}
            onChange={(e) => setTestText(e.target.value)}
            placeholder="Enter text to test..."
            className="tool-textarea"
            rows={12}
            spellCheck={false}
          />
        </div>
        <div>
          <label className="text-xs text-[#64748b] mb-2 block">Match Preview</label>
          <div
            ref={outputRef}
            className="tool-textarea overflow-auto whitespace-pre-wrap font-mono text-sm leading-relaxed"
            style={{ minHeight: '200px' }}
            dangerouslySetInnerHTML={{ __html: highlighted || escapeHtml(testText) || 'Preview will appear here' }}
          />
        </div>
      </div>

      {/* Match details */}
      {matches.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-white mb-3">Match Details ({matchCount})</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {matches.map((m, i) => (
              <div key={i} className="p-3 rounded-lg bg-[#1e293b] border border-[#334155]">
                <div className="flex items-start gap-3">
                  <span className="text-xs text-[#64748b] font-mono mt-0.5">#{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <code className="text-sm text-yellow-200 break-all">{m.full}</code>
                    <div className="text-xs text-[#64748b] mt-1">
                      Position: {m.index} &middot; Length: {m.full.length}
                    </div>
                    {Object.keys(m.groups).length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-2">
                        {Object.entries(m.groups).map(([k, v]) => (
                          <span key={k} className="text-xs px-2 py-0.5 rounded bg-[#1e3a5f] text-blue-300">
                            ${k}: {v}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 p-3 rounded-lg bg-[#1e293b] border border-[#334155]">
        <p className="text-xs text-[#64748b]">💡 Real-time matching &middot; Supports named groups (?&lt;name&gt;) &middot; Data is processed locally in your browser</p>
      </div>

      <AdSlot className="mt-8" />
    </div>
  );
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;');
}
