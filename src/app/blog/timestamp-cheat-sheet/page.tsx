import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unix Timestamp Cheat Sheet: Convert, Read, and Debug Timestamps Like a Pro | DevToolsHub",
  description: "A complete guide to Unix timestamps: convert seconds/milliseconds, handle timezones, common pitfalls, and one-liners for every programming language.",
  openGraph: {
    title: "Unix Timestamp Cheat Sheet: Convert, Read, and Debug Timestamps",
    description: "Master Unix timestamps with this practical guide. Includes conversion tricks, timezone handling, and code snippets for 8 languages.",
    type: "article",
  },
};

export default function TimestampCheatSheet() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <div className="mb-4">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white">
            Cheat Sheet
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Unix Timestamp Cheat Sheet for Developers
        </h1>
        <div className="flex items-center gap-3 text-sm text-[#64748b]">
          <span>June 24, 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span>6 min read</span>
        </div>
      </div>

      <div className="prose-content space-y-6 text-[#cbd5e1] leading-relaxed">
        <p>
          Every developer hits timestamps at some point. JWT expiration (<code className="text-xs">exp</code>), 
          API pagination cursors, database audit fields — Unix timestamps are everywhere. Yet they&apos;re 
          one of the most common sources of confusion (and bugs).
        </p>
        <p>
          This cheat sheet covers everything: conversion tricks, the <strong>seconds vs milliseconds</strong> 
          trap, timezone gotchas, and one-liners for every major language.
        </p>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">⏱ Quick Try</p>
          <p className="text-sm">
            Convert timestamps instantly with our free{" "}
            <a href="/tools/timestamp" className="text-[#3b82f6] hover:text-blue-300">
              Timestamp Converter
            </a>{" "}
            — supports seconds, milliseconds, and multiple timezone formats.
          </p>
        </div>

        <h2>Quick Reference: Common Timestamps</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Date/Time (UTC)</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Unix (seconds)</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Unix (ms)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-[#334155]">Jan 1, 1970 00:00:00</td><td className="p-3 border border-[#334155] font-mono text-xs">0</td><td className="p-3 border border-[#334155] font-mono text-xs">0</td></tr>
              <tr><td className="p-3 border border-[#334155]">Jan 1, 2000 00:00:00</td><td className="p-3 border border-[#334155] font-mono text-xs">946684800</td><td className="p-3 border border-[#334155] font-mono text-xs">946684800000</td></tr>
              <tr><td className="p-3 border border-[#334155]">Jan 1, 2020 00:00:00</td><td className="p-3 border border-[#334155] font-mono text-xs">1577836800</td><td className="p-3 border border-[#334155] font-mono text-xs">1577836800000</td></tr>
              <tr><td className="p-3 border border-[#334155] font-medium text-[#f59e0b]">Now (Jun 2026)</td><td className="p-3 border border-[#334155] font-mono text-xs">~1782000000</td><td className="p-3 border border-[#334155] font-mono text-xs">~1782000000000</td></tr>
              <tr><td className="p-3 border border-[#334155]">Jan 19, 2038 03:14:07</td><td className="p-3 border border-[#334155] font-mono text-xs text-red-400">2147483647</td><td className="p-3 border border-[#334155] font-mono text-xs text-red-400">2147483647000</td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#1e293b] border border-[#f59e0b]/30 rounded-lg p-4">
          <p className="text-xs text-[#f59e0b] mb-1">⚠️ Year 2038 Problem</p>
          <p className="text-sm text-[#cbd5e1]">
            The last row shows <strong>2,147,483,647</strong> — the maximum value for a signed 32-bit 
            integer. After this point, 32-bit systems will overflow. Most modern systems use 64-bit 
            timestamps (safe for 292 billion years), but embedded systems and legacy APIs may still be vulnerable.
          </p>
        </div>

        <h2>The #1 Bug: Seconds vs Milliseconds</h2>
        <p>
          This is the most common timestamp bug in existence:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>JavaScript <code className="text-xs">Date.now()</code> → <strong>milliseconds</strong></li>
          <li>Python <code className="text-xs">time.time()</code> → <strong>seconds</strong> (as float)</li>
          <li>JWT <code className="text-xs">exp</code> claim → <strong>seconds</strong></li>
          <li>PostgreSQL <code className="text-xs">EXTRACT(EPOCH FROM NOW())</code> → <strong>seconds</strong></li>
          <li>MySQL <code className="text-xs">UNIX_TIMESTAMP()</code> → <strong>seconds</strong></li>
        </ul>
        <p>
          <strong>Rule of thumb:</strong> If the value is around 1.7 billion → it&apos;s seconds. 
          If it&apos;s around 1.7 trillion → it&apos;s milliseconds. The current epoch (June 2026) 
          is about <strong>1,782,000,000</strong> in seconds.
        </p>
        <p>
          Our{" "}
          <a href="/tools/timestamp" className="text-[#3b82f6] hover:text-blue-300">Timestamp Converter</a>{" "}
          automatically detects whether your input is seconds or milliseconds — just paste and it works.
        </p>

        <h2>One-Liners for Every Language</h2>

        <h3>JavaScript / TypeScript</h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`// Current time
Date.now()                         // -> 1782000000000 (ms)
Math.floor(Date.now() / 1000)      // -> 1782000000 (s)

// Timestamp to Date
new Date(1782000000000)            // -> 2026-06-24T... (ms)
new Date(1782000000 * 1000)        // -> same, but for seconds input

// Date to timestamp
new Date('2026-06-24').getTime()   // -> 1758585600000 (ms)
+new Date()                        // -> shorthand for Date.now()

// Format timestamp
new Date(1782000000000).toISOString()  // -> "2026-06-24T12:00:00.000Z"`}</code></pre>

        <h3>Python</h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`import time, datetime

# Current time
time.time()                        # -> 1782000000.123 (seconds, float)

# Timestamp to datetime
dt = datetime.datetime.fromtimestamp(1782000000)
print(dt.strftime('%Y-%m-%d %H:%M:%S'))

# Datetime to timestamp
dt = datetime.datetime(2026, 6, 24)
dt.timestamp()                     # -> 1758585600.0

# Timezone-aware (recommended)
from datetime import timezone
dt_utc = datetime.datetime.fromtimestamp(1782000000, tz=timezone.utc)`}</code></pre>

        <h3>SQL (PostgreSQL)</h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- Current Unix timestamp (seconds)
SELECT EXTRACT(EPOCH FROM NOW())::bigint;

-- Timestamp to date
SELECT to_timestamp(1782000000);

-- Date to timestamp
SELECT EXTRACT(EPOCH FROM TIMESTAMP '2026-06-24 12:00:00')::bigint;

-- Check if JWT is expired
SELECT 1782000000 > EXTRACT(EPOCH FROM NOW())::bigint; -- false = expired`}</code></pre>

        <h3>Bash / Shell</h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`# Current timestamp
date +%s                    # -> 1782000000 (seconds)

# Timestamp to date
date -d @1782000000         # macOS: date -r 1782000000

# Date to timestamp
date -d "2026-06-24" +%s   # -> 1758585600

# ISO format
date -u -d @1782000000 +"%Y-%m-%dT%H:%M:%SZ"`}</code></pre>

        <h3>Java</h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`// Current time (milliseconds)
System.currentTimeMillis();        // -> 1782000000000L

// Convert to seconds
System.currentTimeMillis() / 1000;

// Timestamp to Instant
Instant.ofEpochSecond(1782000000);
Instant.ofEpochMilli(1782000000000L);

// Format
Instant.now().toString();          // -> "2026-06-24T12:00:00Z"

// JWT exp check
long exp = 1782000000L;
boolean expired = Instant.now().getEpochSecond() > exp;`}</code></pre>

        <h3>Go</h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`// Current time
time.Now().Unix()              // -> 1782000000 (seconds)
time.Now().UnixMilli()         // -> 1782000000000 (ms)

// Timestamp to readable
t := time.Unix(1782000000, 0)
fmt.Println(t.Format(time.RFC3339))

// Parse to timestamp
t, _ := time.Parse(time.RFC3339, "2026-06-24T12:00:00Z")
t.Unix()                       // -> 1782000000`}</code></pre>

        <h3>Rust</h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`use std::time::{SystemTime, UNIX_EPOCH};

// Current timestamp
let now = SystemTime::now()
    .duration_since(UNIX_EPOCH)
    .unwrap();
println!("{}", now.as_secs());       // seconds
println!("{}", now.as_millis());      // ms`}</code></pre>

        <h2>Common JWT Timestamp Patterns</h2>
        <p>
          If you&apos;re decoding JWTs (use our{" "}
          <a href="/tools/jwt-decoder" className="text-[#3b82f6]">JWT Decoder</a>), you&apos;ll frequently 
          need to check these timestamp claims:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>exp</strong> — Token expiration (always in <strong>seconds</strong>)</li>
          <li><strong>iat</strong> — Token issued at (seconds)</li>
          <li><strong>nbf</strong> — Not valid before (seconds)</li>
        </ul>
        <p>
          Copy the <code className="text-xs">exp</code> value into the{" "}
          <a href="/tools/timestamp" className="text-[#3b82f6] hover:text-blue-300">Timestamp Converter</a>{" "}
          to instantly see if a token is expired — it color-codes expired vs valid.
        </p>

        <h2>Time Zones: The Hidden Trap</h2>
        <p>
          <strong>Unix timestamps are always UTC.</strong> They don&apos;t have a timezone. A timestamp 
          of <code className="text-xs">1782000000</code> means the same moment everywhere on Earth — 
          it&apos;s the display that varies by timezone.
        </p>
        <p>
          When converting timestamps to readable dates:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Use <strong>ISO 8601 format</strong> (e.g., <code className="text-xs">2026-06-24T12:00:00Z</code>) for communication between systems — the trailing Z means UTC</li>
          <li>Only convert to local time when <strong>presenting to users</strong></li>
          <li>Never store timestamps in local time — always use Unix timestamps or UTC ISO strings</li>
        </ul>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-5 mt-6">
          <p className="text-white font-semibold mb-2">🎯 Summary</p>
          <ul className="text-sm space-y-1.5 list-disc pl-5">
            <li>Unix timestamps = seconds since <strong>Jan 1, 1970 UTC</strong></li>
            <li>JS uses <strong>milliseconds</strong>, most backends use <strong>seconds</strong></li>
            <li>Timestamps are always UTC — timezone is a display concern</li>
            <li>Use our{" "}<a href="/tools/timestamp" className="text-[#3b82f6]">Timestamp Converter</a>{" "} for quick conversions</li>
            <li>Check JWT expiration with our{" "}<a href="/tools/jwt-decoder" className="text-[#3b82f6]">JWT Decoder</a></li>
          </ul>
        </div>

        <div className="border-t border-[#334155] pt-6 mt-8">
          <p className="text-xs text-[#64748b]">
            <strong>Related Tools:</strong>{" "}
            <a href="/tools/timestamp" className="text-[#3b82f6] hover:text-blue-300">Timestamp Converter</a>
            {" · "}
            <a href="/tools/jwt-decoder" className="text-[#3b82f6] hover:text-blue-300">JWT Decoder</a>
            {" · "}
            <a href="/tools/uuid-generator" className="text-[#3b82f6] hover:text-blue-300">UUID Generator</a>
          </p>
        </div>
      </div>
    </article>
  );
}
