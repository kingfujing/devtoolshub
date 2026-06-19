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

      <AdSlot className="mt-8" />
    </div>
  );
}
