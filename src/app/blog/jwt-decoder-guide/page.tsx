import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JWT Decoder Guide: How to Decode JSON Web Tokens Without a Backend | DevToolsHub",
  description: "Learn how to decode JWT tokens client-side. Understand header, payload, signature, and how to inspect tokens safely without sending them to any server.",
  openGraph: {
    title: "JWT Decoder Guide: Inspect Tokens Without a Backend",
    description: "Decode JWT tokens safely in your browser. Understand headers, claims, signatures, and debugging tips.",
    type: "article",
  },
};

export default function JwtDecoderGuide() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <div className="mb-4">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white">
            Tutorial
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          How to Decode JWT Tokens Without a Backend
        </h1>
        <div className="flex items-center gap-3 text-sm text-[#64748b]">
          <span>June 24, 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span>8 min read</span>
        </div>
      </div>

      <div className="prose-content space-y-6 text-[#cbd5e1] leading-relaxed">
        <p>
          If you&apos;ve worked with authentication (OAuth, OpenID Connect, or any modern API), 
          you&apos;ve almost certainly encountered <strong>JWT</strong> (JSON Web Tokens). They&apos;re everywhere 
          — but they can feel like a black box.
        </p>
        <p>
          The good news: <strong>you don&apos;t need a backend to inspect a JWT</strong>. Since JWTs are 
          base64url-encoded JSON, you can decode them entirely in your browser. In fact, that&apos;s 
          the safest way to do it — your token data never leaves your machine.
        </p>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">🔐 Quick Try</p>
          <p className="text-sm">
            Decode any JWT instantly with our free{" "}
            <a href="/tools/jwt-decoder" className="text-[#3b82f6] hover:text-blue-300">
              JWT Decoder tool
            </a>{" "}
            — all client-side, no server uploads.
          </p>
        </div>

        <h2>What is a JWT?</h2>
        <p>
          A JSON Web Token is a compact, URL-safe way to represent claims between two parties. 
          A JWT looks like this:
        </p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}</code></pre>
        <p>
          It has three parts, separated by dots: <strong>Header</strong>.<strong>Payload</strong>.<strong>Signature</strong>
        </p>

        <h2>Part 1: The Header</h2>
        <p>
          The header tells you <strong>how</strong> the token was created. Decode the first segment 
          from base64url, and you&apos;ll get something like:
        </p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`{
  "alg": "HS256",
  "typ": "JWT"
}`}</code></pre>
        <p>
          Key fields:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>alg</strong> (Algorithm) — The signing algorithm. Common values: HS256 (HMAC+SHA256), RS256 (RSA+SHA256), EdDSA</li>
          <li><strong>typ</strong> (Type) — Usually &quot;JWT&quot;</li>
          <li><strong>kid</strong> (Key ID) — Optional. Identifies which key was used to sign</li>
        </ul>

        <h2>Part 2: The Payload (Claims)</h2>
        <p>
          This is the <strong>data</strong> part — the actual claims the token carries. Standardized 
          claims (registered claim names) include:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Claim</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-[#334155] font-mono text-xs">iss</td><td className="p-3 border border-[#334155]">Issuer</td><td className="p-3 border border-[#334155]">Who created the token</td></tr>
              <tr><td className="p-3 border border-[#334155] font-mono text-xs">sub</td><td className="p-3 border border-[#334155]">Subject</td><td className="p-3 border border-[#334155]">Who/what the token is about (usually a user ID)</td></tr>
              <tr><td className="p-3 border border-[#334155] font-mono text-xs">aud</td><td className="p-3 border border-[#334155]">Audience</td><td className="p-3 border border-[#334155]">Who should accept this token</td></tr>
              <tr><td className="p-3 border border-[#334155] font-mono text-xs">exp</td><td className="p-3 border border-[#334155]">Expiration</td><td className="p-3 border border-[#334155]">Unix timestamp when token expires</td></tr>
              <tr><td className="p-3 border border-[#334155] font-mono text-xs">nbf</td><td className="p-3 border border-[#334155]">Not Before</td><td className="p-3 border border-[#334155]">Token is not valid before this time</td></tr>
              <tr><td className="p-3 border border-[#334155] font-mono text-xs">iat</td><td className="p-3 border border-[#334155]">Issued At</td><td className="p-3 border border-[#334155]">When the token was issued</td></tr>
              <tr><td className="p-3 border border-[#334155] font-mono text-xs">jti</td><td className="p-3 border border-[#334155]">JWT ID</td><td className="p-3 border border-[#334155]">Unique identifier (prevents replay attacks)</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Custom claims (like <code className="text-[#22d3ee]">role</code>, <code className="text-[#22d3ee]">permissions</code>, 
          or <code className="text-[#22d3ee]">email</code>) are also common. Use our{" "}
          <a href="/tools/jwt-decoder" className="text-[#3b82f6]">JWT Decoder</a> to see exactly what your token contains.
        </p>

        <h2>Part 3: The Signature</h2>
        <p>
          The signature <strong>verifies that the token hasn&apos;t been tampered with</strong>. It&apos;s 
          created by taking the header + payload, signing them with a secret key (for HMAC) or 
          private key (for RSA/ECDSA), and base64url-encoding the result.
        </p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`signature = HMACSHA256(
  base64urlEncode(header) + "." + base64urlEncode(payload),
  secretOrPrivateKey
)`}</code></pre>
        <p className="text-sm text-[#f59e0b]">
          ⚠️ <strong>Important:</strong> Decoding a JWT does NOT verify the signature. You can read 
          the payload without the secret key, but you need the server&apos;s secret to confirm the 
          token is authentic. Never trust a decoded JWT without verification.
        </p>

        <h2>How to Decode a JWT Step by Step</h2>
        <p>You only need 3 steps. No server, no libraries:</p>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-5">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">1</span>
              <div>
                <p className="text-white font-medium">Split by dots</p>
                <p className="text-sm text-[#94a3b8]">Take your JWT and split on &quot;.&quot; — you get three parts: <code className="text-xs">[header, payload, signature]</code></p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">2</span>
              <div>
                <p className="text-white font-medium">Base64url decode the payload</p>
                <p className="text-sm text-[#94a3b8]">Convert from base64url (use <code className="text-xs">atob()</code> in JS, but first replace <code className="text-xs">-</code> with <code className="text-xs">+</code> and <code className="text-xs">_</code> with <code className="text-xs">/</code>)</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">3</span>
              <div>
                <p className="text-white font-medium">Parse as JSON</p>
                <p className="text-sm text-[#94a3b8]"><code className="text-xs">JSON.parse()</code> the decoded string — now you can read every claim</p>
              </div>
            </li>
          </ol>
        </div>

        <p>
          Or just use our{" "}
          <a href="/tools/jwt-decoder" className="text-[#3b82f6] hover:text-blue-300">
            JWT Decoder
          </a>{" "}
          and paste your token — it does all three steps instantly, with syntax-highlighted output 
          and expiration status.
        </p>

        <h2>Common JWT Security Pitfalls</h2>

        <h3>1. The "none" Algorithm Attack</h3>
        <p>
          Older JWT libraries had a vulnerability where an attacker could change the algorithm to 
          <code className="text-[#f59e0b]">&quot;none&quot;</code> and bypass signature verification. Always 
          <strong>whitelist expected algorithms</strong> on the server side.
        </p>

        <h3>2. Storing JWTs in localStorage</h3>
        <p>
          While convenient, localStorage is accessible to any JavaScript running on the same origin. 
          If your site has an XSS vulnerability, tokens can be stolen. Consider <strong>HttpOnly cookies</strong> 
          for production applications.
        </p>

        <h3>3. Not Checking the exp Claim</h3>
        <p>
          Always verify the <code className="text-[#22d3ee]">exp</code> (expiration) claim on the server. 
          An expired token should be rejected. Use our{" "}
          <a href="/tools/timestamp" className="text-[#3b82f6]">Timestamp Converter</a> to check if a 
          token&apos;s exp timestamp is still valid.
        </p>

        <h3>4. Decoding Without Verifying</h3>
        <p>
          This bears repeating: <strong>anyone can decode a JWT</strong>. The security comes from 
          <strong>verifying the signature</strong>, which requires the server&apos;s secret key. 
          Client-side tools like our JWT Decoder are great for debugging and inspection, but never 
          trust the decoded data for authorization decisions.
        </p>

        <h2>Debugging JWTs Like a Pro</h2>
        <p>
          When debugging authentication issues, here&apos;s what to check with a JWT decoder:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Is the token expired?</strong> Check the <code className="text-xs">exp</code> claim against the current time</li>
          <li><strong>Is the issuer correct?</strong> Verify the <code className="text-xs">iss</code> claim matches your auth server</li>
          <li><strong>Is the audience correct?</strong> Check <code className="text-xs">aud</code> — your API should verify it</li>
          <li><strong>Are custom claims present?</strong> If your API expects a <code className="text-xs">role</code> or <code className="text-xs">permissions</code> claim, confirm it&apos;s there</li>
        </ul>
        <p>
          Use our free{" "}
          <a href="/tools/jwt-decoder" className="text-[#3b82f6] hover:text-blue-300">JWT Decoder</a>{" "}
          to inspect tokens quickly — it runs entirely in your browser, so your tokens stay private.
        </p>

        <div className="border-t border-[#334155] pt-6 mt-8">
          <p className="text-xs text-[#64748b]">
            <strong>Related Tools:</strong>{" "}
            <a href="/tools/jwt-decoder" className="text-[#3b82f6] hover:text-blue-300">JWT Decoder</a>
            {" · "}
            <a href="/tools/base64" className="text-[#3b82f6] hover:text-blue-300">Base64 Encoder/Decoder</a>
            {" · "}
            <a href="/tools/timestamp" className="text-[#3b82f6] hover:text-blue-300">Timestamp Converter</a>
          </p>
        </div>
      </div>
    </article>
  );
}
