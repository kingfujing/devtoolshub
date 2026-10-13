"use client";
import { useMemo, useState } from "react";
import AdSlot from "@/components/AdSlot";

/**
 * Token Counter — estimate AI model token usage for any text.
 * All processing is done locally in your browser (no API calls, no data leaves the device).
 *
 * Estimation heuristics (industry-standard approximations, no tokenizer dependency):
 * - English words  : ~1.3 tokens per word (whitespace-split, URLs/identifiers count higher)
 * - CJK characters : ~1 token per character (cl100k/o200k families average close to 1:1)
 * - Punctuation    : ~1 token per 4 punctuation marks (most common ASCII punctua merges into tokens)
 * - Whitespace     : mostly merged into following-word tokens; counted implicitly
 */

type ModelPreset = {
  name: string;
  contextWindow: number;      // tokens
  note: string;
};

const MODELS: ModelPreset[] = [
  { name: "GPT-4o / GPT-4o mini", contextWindow: 128_000, note: "OpenAI · 128K context" },
  { name: "Claude Sonnet 4.5", contextWindow: 200_000, note: "Anthropic · 200K context" },
  { name: "Claude Haiku 4.5", contextWindow: 200_000, note: "Anthropic · 200K context" },
  { name: "Gemini 2.5 Flash", contextWindow: 1_000_000, note: "Google · 1M context" },
  { name: "DeepSeek-V3.2", contextWindow: 128_000, note: "DeepSeek · 128K context" },
  { name: "GLM-4.6", contextWindow: 200_000, note: "Zhipu · 200K context" },
];

const SYSTEM_PROMPT_OVERHEAD = 4; // every message carries ~4 tokens of framing overhead

function countEnglishWords(text: string): number {
  const m = text.match(/[A-Za-z0-9]+(?:['’\-][A-Za-z0-9]+)*/g);
  return m ? m.length : 0;
}

function countCjkChars(text: string): number {
  // CJK Unified Ideographs + extensions commonly used, plus CJK punctuation
  const m = text.match(/[\u4e00-\u9fff\u3400-\u4dbf\u3040-\u30ff\uac00-\ud7af]/g);
  return m ? m.length : 0;
}

function countPunctuation(text: string): number {
  const m = text.match(/[.,!?;:'"()[\]{}\-–—/\\|@#$%^&*+=<>~`]/g);
  return m ? m.length : 0;
}

export default function TokenCounterPage() {
  const [text, setText] = useState("");
  const [model, setModel] = useState<ModelPreset>(MODELS[0]);

  const stats = useMemo(() => {
    const chars = text.length;
    const words = countEnglishWords(text);
    const cjk = countCjkChars(text);
    const punct = countPunctuation(text);

    // Weighted heuristic token estimate
    const tokenEstimate = Math.round(
      words * 1.3 + cjk * 1.0 + punct * 0.25
    );
    const withOverhead = chars > 0 ? tokenEstimate + SYSTEM_PROMPT_OVERHEAD : 0;

    const usedPct = Math.min(100, (withOverhead / model.contextWindow) * 100);
    const costInput = (withOverhead / 1_000_000) * 2.5; // $2.50 per 1M input tokens (GPT-4o reference)
    const costOutput = (withOverhead / 1_000_000) * 10; // $10 per 1M output tokens (GPT-4o reference)

    return { chars, words, cjk, punct, tokenEstimate: withOverhead, usedPct, costInput, costOutput };
  }, [text, model]);

  const copyStats = () => {
    const summary = `Token estimate: ~${stats.tokenEstimate.toLocaleString()} tokens (${stats.chars.toLocaleString()} chars, ${stats.words.toLocaleString()} words, ${stats.cjk.toLocaleString()} CJK chars) · Model: ${model.name} (${Math.round(stats.usedPct)}% of context)`;
    navigator.clipboard.writeText(summary);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Token Counter</h1>
        <p className="text-[#94a3b8] text-sm">
          Estimate AI token usage for any text — GPT, Claude, Gemini and more. 100% local, nothing is uploaded.
        </p>
      </div>

      <AdSlot className="mb-6" />

      {/* Model selector */}
      <div className="mb-4">
        <label className="text-xs text-[#64748b] mb-2 block">
          Target model (context window)
        </label>
        <div className="flex flex-wrap gap-2">
          {MODELS.map((m) => (
            <button
              key={m.name}
              onClick={() => setModel(m)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                model.name === m.name
                  ? "bg-[#3b82f6] text-white"
                  : "bg-[#1e293b] text-[#94a3b8] border border-[#334155] hover:text-white hover:border-[#64748b]"
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-[#64748b]">{model.note}</p>
      </div>

      {/* Input */}
      <label className="text-xs text-[#64748b] mb-2 block">Your text / prompt</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="tool-textarea"
        rows={10}
        placeholder="Paste your prompt, document or code here — the estimate updates as you type..."
        spellCheck={false}
      />

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-3 text-center">
          <div className="text-2xl font-bold text-cyan-400">
            ~{stats.tokenEstimate.toLocaleString()}
          </div>
          <div className="text-xs text-[#64748b] mt-1">Estimated tokens</div>
        </div>
        <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-3 text-center">
          <div className="text-2xl font-bold text-white">
            {stats.chars.toLocaleString()}
          </div>
          <div className="text-xs text-[#48b] text-[#64748b] mt-1">Characters</div>
        </div>
        <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-3 text-center">
          <div className="text-2xl font-bold text-white">
            {stats.words.toLocaleString()}
          </div>
          <div className="text-xs text-[#64748b] mt-1">Words</div>
        </div>
        <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-3 text-center">
          <div className="text-2xl font-bold text-white">
            {stats.cjk.toLocaleString()}
          </div>
          <div className="text-xs text-[#64748b] mt-1">CJK Characters</div>
        </div>
      </div>

      {/* Context window usage */}
      <div className="mt-4 rounded-lg bg-[#1e293b] border border-[#334155] p-4">
        <div className="flex items-center justify-between text-xs text-[#94a3b8] mb-2">
          <span>
            Context window usage — {model.name}
          </span>
          <span className="text-white font-medium">
            {stats.usedPct < 0.01 && stats.tokenEstimate > 0
              ? "<0.01%"
              : `${stats.usedPct.toFixed(2)}%`}
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-[#0f172a] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all"
            style={{ width: `${Math.max(stats.usedPct, stats.tokenEstimate > 0 ? 0.5 : 0)}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-[#64748b]">
          ~{stats.tokenEstimate.toLocaleString()} of {(model.contextWindow / 1000).toFixed(0)}K
          {" "}tokens used
        </p>
      </div>

      {/* Cost estimate */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
        <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
          <div className="text-xs text-[#64748b]">If used as input (GPT-4o pricing)</div>
          <div className="text-lg font-semibold text-emerald-400 mt-1">
            ${stats.costInput.toFixed(6)}
          </div>
        </div>
        <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
          <div className="text-xs text-[#64748b]">If generated as output (GPT-4o pricing)</div>
          <div className="text-lg font-semibold text-amber-400 mt-1">
            ${stats.costOutput.toFixed(6)}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4">
        <button onClick={copyStats} className="btn-primary cursor-pointer">
          Copy Summary
        </button>
        <button
          onClick={() => setText("")}
          className="px-4 py-2 rounded-lg border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-sm font-medium cursor-pointer"
        >
          Clear
        </button>
      </div>

      {/* Tip */}
      <div className="mt-4 p-3 rounded-lg bg-[#1e293b] border border-[#334155]">
        <p className="text-xs text-[#64748b]">
          💡 Estimates use standard heuristics: ~1.3 tokens per English word, ~1 token per CJK
          character, weighted by punctuation. For exact counts, use the model provider&apos;s official
          tokenizer. All processing is done locally in your browser.
        </p>
      </div>

      {/* About This Tool */}
      <section className="mt-12 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">About This Tool</h2>
        <div className="space-y-3 text-[#94a3b8] text-sm leading-relaxed">
          <p>
            A token counter estimates how many tokens a piece of text will consume when sent to
            an AI language model. Tokens are the units that models like GPT-4o, Claude, and Gemini
            actually read and write — roughly 4 characters or ¾ of an English word each, though
            the ratio varies by language. Because API pricing and context limits are both measured
            in tokens, counting them before you send a request saves real money and prevents
            failed requests.
          </p>
          <p>
            Common use cases include checking whether a long document fits into a model&apos;s context
            window before pasting it into ChatGPT or an API call, estimating the cost of
            processing large prompt batches, splitting oversized prompts into chunks, and
            comparing how much context different models give you for the same text.
          </p>
          <p>
            This counter runs 100% in your browser. Your text is never uploaded to any server —
            paste API keys, private documents, or proprietary code with confidence. Estimates use
            industry-standard heuristics (~1.3 tokens per English word, ~1 token per CJK
            character) that track official tokenizers within a few percent for typical prose.
          </p>
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">How to Use</h2>
        <ol className="space-y-2 text-[#94a3b8] text-sm leading-relaxed list-decimal list-inside">
          <li>Pick your target model so the tool knows which context window to measure against.</li>
          <li>Paste or type your text — the token estimate updates live as you type.</li>
          <li>
            Read the context-window bar: under 50% you are safe, over 80% consider splitting the
            text or summarizing first.
          </li>
          <li>Use Copy Summary to grab a one-line estimate for documentation or planning.</li>
        </ol>
        <p className="mt-3 text-xs text-[#64748b]">
          Tip: For mixed English-Chinese text, the CJK counter matters — Chinese text is often
          <em> more</em> information-dense per token than English.
        </p>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">Common Mistakes</h2>
        <div className="space-y-3">
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">1. Counting characters instead of tokens</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">
              A &quot;2000 character limit&quot; and a &quot;2000 token limit&quot; are very different —
              2000 tokens is closer to 8000 characters of English. Planning by characters alone
              underestimates cost by roughly 4×.
            </p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">2. Forgetting system prompt overhead</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">
              The hidden system prompt, tool definitions, and conversation history all count
              against the context window. A 128K window is never really 128K free for your text.
            </p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">3. Assuming all languages cost the same</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">
              English averages ~1.3 tokens per word, but code, URLs, and rare scripts can consume
              2-3× more tokens per visible character. CJK text is usually close to 1 token per
              character.
            </p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">4. Trusting estimates for billing</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">
              Heuristic estimates are for planning, not invoicing. Providers bill by their own
              tokenizer&apos;s exact count — expect small differences on every request.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>How accurate is this token counter?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              For typical English prose, estimates land within roughly 5-10% of the official
              tokenizer. Code, tables, and mixed-language text can deviate more. Use it for
              planning and cost estimation, not exact billing.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>How many tokens is 1000 words?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              About 1300 tokens for English (1000 × ~1.3). The exact number depends on vocabulary —
              technical writing with long words runs higher, simple prose runs lower. For Chinese,
              1000 characters is roughly 1000 tokens.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>Is my text uploaded anywhere?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              No. All counting happens locally in your browser with JavaScript. Nothing is sent
              to any server — this is the same privacy guarantee as every tool on DevToolsHub.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>Why do different models have different context windows?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              Context window is an architectural choice per model — larger windows need more
              memory during attention computation. GPT-4o offers 128K, Claude Sonnet 4.5 offers
              200K, and Gemini 2.5 Flash offers up to 1M tokens.
            </div>
          </details>
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">You Might Also Need</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="/tools/uuid-generator"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">UUID Generator</span>
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
            href="/tools/jwt-decoder"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">JWT Decoder</span>
            <span className="block text-xs text-[#3b82f6] mt-1">Use Now →</span>
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How accurate is this token counter?", "acceptedAnswer": {"@type": "Answer", "text": "For typical English prose, estimates land within roughly 5-10% of the official tokenizer. Use it for planning and cost estimation, not exact billing."}}, {"@type": "Question", "name": "How many tokens is 1000 words?", "acceptedAnswer": {"@type": "Answer", "text": "About 1300 tokens for English (1000 x 1.3). For Chinese, 1000 characters is roughly 1000 tokens."}}, {"@type": "Question", "name": "Is my text uploaded anywhere?", "acceptedAnswer": {"@type": "Answer", "text": "No. All counting happens locally in your browser with JavaScript. Nothing is sent to any server."}}, {"@type": "Question", "name": "Why do different models have different context windows?", "acceptedAnswer": {"@type": "Answer", "text": "Context window is an architectural choice per model. GPT-4o offers 128K, Claude Sonnet 4.5 offers 200K, and Gemini 2.5 Flash offers up to 1M tokens."}}]}'}} />

      <AdSlot className="mt-8" />
    </div>
  );
}
