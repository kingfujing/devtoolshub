"use client";
import { useState } from "react";
import AdSlot from "@/components/AdSlot";

const EXAMPLE_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjk5OTk5OTk5OTl9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

function base64urlDecode(str: string): string {
  const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(
    base64.length + ((4 - (base64.length % 4)) % 4),
    "="
  );
  try {
    return decodeURIComponent(escape(atob(padded)));
  } catch {
    return atob(padded);
  }
}

interface DecodedJwt {
  header: string;
  payload: string;
  signature: string;
  exp: number | null;
}

function decodeJwt(token: string): DecodedJwt {
  const parts = token.trim().split(".");
  if (parts.length !== 3) {
    throw new Error("Invalid JWT: token must have 3 parts separated by dots");
  }
  const [headerB64, payloadB64, sigB64] = parts;
  const headerStr = base64urlDecode(headerB64);
  const payloadStr = base64urlDecode(payloadB64);
  const headerObj = JSON.parse(headerStr);
  const payloadObj = JSON.parse(payloadStr);
  const exp = payloadObj.exp ? Number(payloadObj.exp) : null;
  return {
    header: JSON.stringify(headerObj, null, 2),
    payload: JSON.stringify(payloadObj, null, 2),
    signature: sigB64,
    exp,
  };
}

export default function JwtDecoderPage() {
  const [input, setInput] = useState("");
  const [decoded, setDecoded] = useState<DecodedJwt | null>(null);
  const [error, setError] = useState("");
  const [isExample, setIsExample] = useState(false);

  const parse = (value: string) => {
    setError("");
    if (!value.trim()) {
      // Show example when input is empty
      try {
        const result = decodeJwt(EXAMPLE_JWT);
        setDecoded(result);
        setIsExample(true);
      } catch {
        setDecoded(null);
        setIsExample(false);
      }
      return;
    }
    setIsExample(false);
    try {
      const result = decodeJwt(value.trim());
      setDecoded(result);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Failed to decode JWT";
      setError(msg);
      setDecoded(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
    parse(value);
  };

  const clearAll = () => {
    setInput("");
    setDecoded(null);
    setError("");
    setIsExample(false);
    // Re-trigger example display
    setTimeout(() => parse(""), 0);
  };

  const copyPayload = () => {
    if (decoded) {
      navigator.clipboard.writeText(decoded.payload);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">JWT Decoder</h1>
        <p className="text-[#94a3b8] text-sm">
          Decode and inspect JWT tokens — view header, payload and signature
        </p>
      </div>

      <AdSlot className="mb-6" />

      {/* Input */}
      <div className="mb-4">
        <label className="text-xs text-[#64748b] mb-2 block">JWT Token</label>
        <textarea
          value={input}
          onChange={handleChange}
          placeholder="Paste your JWT token here... (example shown below when empty)"
          className="tool-textarea"
          rows={4}
          spellCheck={false}
        />
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={clearAll}
          className="px-4 py-2 rounded-lg border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-sm font-medium cursor-pointer"
        >
          Clear
        </button>
        <button
          onClick={copyPayload}
          disabled={!decoded}
          className="px-4 py-2 rounded-lg border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-sm font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Copy Payload
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
          ❌ {error}
        </div>
      )}

      {/* Decoded sections */}
      {decoded && (
        <>
          {isExample && (
            <div className="mb-4 p-3 rounded-lg bg-[#1e293b] border border-[#334155]">
              <p className="text-xs text-[#64748b]">
                💡 Showing example JWT. Paste your own token above to decode it.
              </p>
            </div>
          )}

          {/* Header */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-[#94a3b8] mb-2">
              Header
            </h3>
            <pre className="bg-[#0f172a] border border-[#334155] rounded-lg p-3 text-sm text-[#e2e8f0] overflow-x-auto whitespace-pre-wrap font-mono min-h-[60px]">
              {decoded.header}
            </pre>
          </div>

          {/* Payload */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-[#94a3b8] mb-2">
              Payload
            </h3>
            <pre className="bg-[#0f172a] border border-[#334155] rounded-lg p-3 text-sm text-[#e2e8f0] overflow-x-auto whitespace-pre-wrap font-mono min-h-[60px]">
              {decoded.payload}
            </pre>
          </div>

          {/* Expiry status */}
          {decoded.exp !== null && (
            <div className="mb-4">
              {decoded.exp * 1000 < Date.now() ? (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                  ⚠️ Token expired on{" "}
                  {new Date(decoded.exp * 1000).toLocaleString()}
                </div>
              ) : (
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-300 text-sm">
                  ✅ Token valid until{" "}
                  {new Date(decoded.exp * 1000).toLocaleString()}
                </div>
              )}
            </div>
          )}

          {/* Signature */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-[#94a3b8] mb-2">
              Signature
            </h3>
            <pre className="bg-[#0f172a] border border-[#334155] rounded-lg p-3 text-sm text-[#e2e8f0] overflow-x-auto whitespace-pre-wrap font-mono min-h-[40px]">
              {decoded.signature}
            </pre>
            <p className="mt-1 text-xs text-yellow-400/80">
              ⚠️ This tool does NOT verify the signature
            </p>
          </div>
        </>
      )}

      {/* Bottom tip */}
      <div className="mt-4 p-3 rounded-lg bg-[#1e293b] border border-[#334155]">
        <p className="text-xs text-[#64748b]">
          JWT is decoded client-side. No data is sent to any server.
        </p>
      </div>

      
      {/* About This Tool */}
      <section className="mt-12 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">About This Tool</h2>
        <div className="space-y-3 text-[#94a3b8] text-sm leading-relaxed">
          <p>JSON Web Tokens (JWT) are widely used for authentication and information exchange in modern web applications. This free online JWT decoder lets you inspect the contents of any JWT token — header, payload, and signature — without sending your token to any server.</p>
          <p>Use this tool to debug authentication flows during development, verify JWT claims like issuer (iss), subject (sub), and expiration (exp), check if a token has expired, and understand the structure of JWT tokens for learning or troubleshooting.</p>
          <p>The decoder automatically parses all three parts of the JWT, detects when the token has expired (with visual indicators), and includes a sample token so you can try the tool immediately. All decoding is done client-side — your tokens never leave your browser.</p>
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">How to Use</h2>
        <ol className="space-y-2 text-[#94a3b8] text-sm leading-relaxed list-decimal list-inside">
          <li>Paste the JWT token into the input box.</li>
          <li>Inspect the decoded header, payload and signature in separate panels.</li>
          <li>Check the expiry claim — the tool flags expired tokens in red.</li>
          <li>Use the sample token button to see a well-formed example.</li>
        </ol>
        <p className="mt-3 text-xs text-[#64748b]">Tip: Decoding shows what the token claims — it never proves the claims are true. Signature verification happens on your server.</p>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">Common Mistakes</h2>
        <div className="space-y-3">
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">1. Trusting decoded claims</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">Decoding is not verification. Anyone can craft a token with any payload, so every claim must be checked against a verified signature on the backend before access is granted.</p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">2. Storing sensitive data in the payload</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">The payload is plain Base64 — readable by anyone who holds the token. Personal data, secrets and internal identifiers do not belong there.</p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">3. Seconds versus milliseconds</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">The expiry and issued-at claims use seconds since the epoch, while JavaScript timestamps are milliseconds. Compare like with like or every token looks expired or eternally valid.</p>
          </div>
          <div className="rounded-lg bg-[#1e293b] border border-[#334155] p-4">
            <p className="text-white text-sm font-medium">4. Accepting any algorithm</p>
            <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">Servers must pin the expected signing algorithm. Attacks have exploited tokens that switch the header algorithm to none and slip through unverified.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>Can I verify the JWT signature?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              This tool decodes and displays the header and payload. Signature verification requires the signing secret, which this tool does not have for security reasons.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>Is it safe to paste my production JWT tokens?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              Yes. All decoding is done client-side — your token never leaves your browser. No server requests are made.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>What does 'exp' mean?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              exp (expiration time) is a standard JWT claim. The tool automatically checks if the token has expired and shows a visual indicator (green for valid, red for expired).
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
            href="/tools/timestamp"
            className="block p-4 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-blue-500/30 transition-colors"
          >
            <span className="text-sm text-white font-medium">Timestamp Converter</span>
            <span className="block text-xs text-[#3b82f6] mt-1">Use Now →</span>
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I verify the JWT signature?", "acceptedAnswer": {"@type": "Answer", "text": "This tool decodes header and payload only. Signature verification requires the signing secret."}}, {"@type": "Question", "name": "Is it safe to paste my production JWT tokens?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All decoding is done client-side. Your token never leaves your browser."}}, {"@type": "Question", "name": "What does \u0027exp\u0027 mean?", "acceptedAnswer": {"@type": "Answer", "text": "exp (expiration time) is a standard JWT claim. The tool shows a visual indicator for expiration status."}}]}'}} />

      <AdSlot className="mt-8" />
    </div>
  );
}
