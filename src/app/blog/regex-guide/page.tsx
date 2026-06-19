import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Complete Guide to Writing Better Regular Expressions | DevToolsHub",
  description:
    "Master regular expressions with practical patterns and real-world examples. Learn regex flags, named groups, lookaheads, and debugging techniques.",
  openGraph: {
    title: "The Complete Guide to Writing Better Regular Expressions",
    description:
      "Master regex with practical patterns, real-world examples, and debugging techniques.",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <Link
          href="/"
          className="text-sm text-[#3b82f6] hover:text-blue-300 transition-colors mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
          The Complete Guide to Writing Better Regular Expressions
        </h1>
        <div className="flex items-center gap-3 text-sm text-[#64748b]">
          <span>June 19, 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span>10 min read</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span className="text-[#3b82f6]">Tutorial</span>
        </div>
      </div>

      {/* Content */}
      <div className="prose-content space-y-6 text-[#cbd5e1] leading-relaxed">
        <p className="text-lg text-[#94a3b8] leading-relaxed">
          Regular expressions are one of the most powerful — and most intimidating — tools in a
          developer's arsenal. They can validate an email in one line, extract data from messy logs,
          or replace patterns across thousands of files. But they can also produce unexpected
          results, suffer from catastrophic backtracking, or simply fail to match what you intended.
          This guide covers practical patterns, common traps, and expert techniques for writing
          better regex.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Start with a Regex Tester
        </h2>
        <p>
          Never write a complex regex without a tester. Live feedback is essential — it shows you
          exactly what matches, what does not, and why. The{" "}
          <Link href="/tools/regex-tester" className="text-[#3b82f6] hover:underline">
            DevToolsHub Regex Tester
          </Link>{" "}
          provides real-time highlighting, flag toggles, and named group detection. Always test your
          pattern against multiple input strings before deploying it.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Understanding Regex Flags
        </h2>
        <p>
          Flags change how a regex pattern is interpreted. Here are the six most important flags in
          JavaScript:
        </p>

        <div className="bg-[#1e293b] rounded-lg overflow-hidden text-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#334155]">
                <th className="p-3 text-white font-semibold">Flag</th>
                <th className="p-3 text-white font-semibold">Name</th>
                <th className="p-3 text-white font-semibold">Effect</th>
              </tr>
            </thead>
            <tbody className="text-[#cbd5e1]">
              <tr className="border-b border-[#1e293b]">
                <td className="p-3 font-mono text-[#f472b6]">g</td>
                <td className="p-3">Global</td>
                <td className="p-3">Find all matches, not just the first one</td>
              </tr>
              <tr className="border-b border-[#1e293b]">
                <td className="p-3 font-mono text-[#f472b6]">i</td>
                <td className="p-3">Case-insensitive</td>
                <td className="p-3">Match both uppercase and lowercase</td>
              </tr>
              <tr className="border-b border-[#1e293b]">
                <td className="p-3 font-mono text-[#f472b6]">m</td>
                <td className="p-3">Multiline</td>
                <td className="p-3">^ and $ match start/end of each line</td>
              </tr>
              <tr className="border-b border-[#1e293b]">
                <td className="p-3 font-mono text-[#f472b6]">s</td>
                <td className="p-3">Dot All</td>
                <td className="p-3">Make . match newline characters too</td>
              </tr>
              <tr className="border-b border-[#1e293b]">
                <td className="p-3 font-mono text-[#f472b6]">u</td>
                <td className="p-3">Unicode</td>
                <td className="p-3">Enable Unicode property escapes like {'\\p{L}'}</td>
              </tr>
              <tr className="border-b border-[#1e293b]">
                <td className="p-3 font-mono text-[#f472b6]">y</td>
                <td className="p-3">Sticky</td>
                <td className="p-3">Match only from lastIndex position</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Practical Patterns for Everyday Use
        </h2>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Email Validation
        </h3>
        <p>
          A robust email regex is surprisingly complex. The official RFC 5322 regex is hundreds of
          characters long. For practical purposes, this pattern covers 99.9% of real email addresses:
        </p>
        <pre className="bg-[#1e293b] p-4 rounded-lg text-sm overflow-x-auto text-[#e2e8f0]">
{`/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`}
        </pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          URL Extraction
        </h3>
        <pre className="bg-[#1e293b] p-4 rounded-lg text-sm overflow-x-auto text-[#e2e8f0]">
{`/https?:\\/\\/[\\w\\-._~:/?#\\[\\]@!$&'()*+,;=]+/g`}
        </pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Password Strength (at least 8 chars, 1 upper, 1 lower, 1 digit)
        </h3>
        <pre className="bg-[#1e293b] p-4 rounded-lg text-sm overflow-x-auto text-[#e2e8f0]">
{`/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/`}
        </pre>
        <p>
          This uses lookaheads (<code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">(?=...)</code>)
          to check each condition without consuming characters.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Extract All Hex Colors from CSS
        </h3>
        <pre className="bg-[#1e293b] p-4 rounded-lg text-sm overflow-x-auto text-[#e2e8f0]">
{`/#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})\\b/g`}
        </pre>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Named Capture Groups
        </h2>
        <p>
          JavaScript (ES2018+) supports named groups, which make your regex much more readable:
        </p>
        <pre className="bg-[#1e293b] p-4 rounded-lg text-sm overflow-x-auto text-[#e2e8f0]">
{`const logPattern = /(?<ip>\\d+\\.\\d+\\.\\d+\\.\\d+) - - \\[(?<date>[^\\]]+)\\]/;
const match = logPattern.exec('192.168.1.1 - - [19/Jun/2026:12:00:00]');
console.log(match.groups.ip);    // "192.168.1.1"
console.log(match.groups.date);  // "19/Jun/2026:12:00:00"`}
        </pre>
        <p>
          Named groups make complex patterns self-documenting and eliminate fragile index-based
          group references like <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">match[1]</code>.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Common Regex Traps
        </h2>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          1. Catastrophic Backtracking
        </h3>
        <p>
          Nested quantifiers like <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">
            (a+)+b</code> can cause exponential backtracking. On a long string of "a"s without a "b"
          at the end, the engine tries every possible split before giving up. This can freeze your
          application.
        </p>
        <p>
          <strong className="text-white">Fix:</strong> Use atomic groups (if supported) or rewrite
          to avoid nested quantifiers. Use possessive quantifiers like{" "}
          <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">a++</code> where available.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          2. Greedy vs Lazy Matching
        </h3>
        <p>
          By default, quantifiers are greedy — they match as much as possible. To match the minimum,
          add <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">?</code> after the
          quantifier:
        </p>
        <pre className="bg-[#1e293b] p-4 rounded-lg text-sm overflow-x-auto text-[#e2e8f0]">
{`// Greedy: matches "<div>...</div><span>..." as one match
/<.*>/

// Lazy: matches each tag individually
/<.*?>/`}
        </pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          3. Forgetting the Global Flag
        </h3>
        <p>
          Without the <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">g</code> flag,{" "}
          <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">regex.exec()</code> and{" "}
          <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">String.match()</code>{" "}
          return only the first match. Always add <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">g</code>{" "}
          when you need all occurrences.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Testing Your Regex
        </h2>
        <p>
          Even experienced developers write buggy regex on the first try. Always test your patterns
          against:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#cbd5e1]">
          <li><strong className="text-white">Valid input</strong> — does it match what you want?</li>
          <li><strong className="text-white">Invalid input</strong> — does it correctly reject bad data?</li>
          <li><strong className="text-white">Edge cases</strong> — empty strings, very long strings, strings with special characters</li>
          <li><strong className="text-white">Performance</strong> — test with a large input to catch backtracking issues</li>
        </ul>
        <p>
          Use the{" "}
          <Link href="/tools/regex-tester" className="text-[#3b82f6] hover:underline">
            DevToolsHub Regex Tester
          </Link>{" "}
          to iterate quickly with live match highlighting. The 300ms debounce ensures instant feedback
          without performance lag.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Final Advice
        </h2>
        <p>
          Regex is a skill you build over time. Start with simple patterns, use named groups for
          readability, always test with a dedicated tool, and never nest quantifiers. With practice,
          you will go from fearing <code className="text-[#f472b6] bg-[#1e293b] px-1.5 py-0.5 rounded text-sm">
            /^$REGEX$/</code> to wielding it with confidence.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-[#334155]">
        <Link
          href="/tools/regex-tester"
          className="text-[#3b82f6] hover:underline text-sm font-medium"
        >
          Try the DevToolsHub Regex Tester →
        </Link>
      </div>
    </article>
  );
}
