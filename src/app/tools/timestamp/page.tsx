"use client";
import { useState } from "react";
import AdSlot from "@/components/AdSlot";

export default function TimestampPage() {
  const [tab, setTab] = useState<"ts2date" | "date2ts">("ts2date");

  // Timestamp → Date state
  const [timestampInput, setTimestampInput] = useState("");
  const [dateResults, setDateResults] = useState<{
    iso: string;
    local: string;
    utc: string;
    error: string;
  }>({ iso: "", local: "", utc: "", error: "" });

  // Date → Timestamp state
  const [datetimeInput, setDatetimeInput] = useState("");
  const [timestampResults, setTimestampResults] = useState<{
    seconds: string;
    milliseconds: string;
  }>({ seconds: "", milliseconds: "" });

  const convertTsToDate = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      setDateResults({ iso: "", local: "", utc: "", error: "" });
      return;
    }
    const num = Number(trimmed);
    if (!Number.isFinite(num) || isNaN(num)) {
      setDateResults({ iso: "", local: "", utc: "", error: "Invalid timestamp. Please enter a valid number." });
      return;
    }
    // Support both seconds and milliseconds — if number is > 1e11, treat as milliseconds
    const isMs = num > 1e11;
    const date = new Date(isMs ? num : num * 1000);
    if (isNaN(date.getTime())) {
      setDateResults({ iso: "", local: "", utc: "", error: "Invalid timestamp. The value is out of range." });
      return;
    }
    setDateResults({
      iso: date.toISOString(),
      local: date.toLocaleString(),
      utc: date.toUTCString(),
      error: "",
    });
  };

  const convertDateToTs = (value: string) => {
    if (!value) {
      setTimestampResults({ seconds: "", milliseconds: "" });
      return;
    }
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      setTimestampResults({ seconds: "Invalid date", milliseconds: "Invalid date" });
      return;
    }
    setTimestampResults({
      seconds: String(Math.floor(date.getTime() / 1000)),
      milliseconds: String(date.getTime()),
    });
  };

  const handleTimestampChange = (value: string) => {
    setTimestampInput(value);
    convertTsToDate(value);
  };

  const handleDatetimeChange = (value: string) => {
    setDatetimeInput(value);
    convertDateToTs(value);
  };

  const setNow = () => {
    const now = Date.now();
    const seconds = Math.floor(now / 1000);
    setTimestampInput(String(seconds));
    handleTimestampChange(String(seconds));
  };

  const setNowForDate = () => {
    const now = new Date();
    const localStr = now.toISOString().slice(0, 16);
    setDatetimeInput(localStr);
    convertDateToTs(localStr);
  };

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Timestamp Converter</h1>
        <p className="text-[#94a3b8] text-sm">
          Convert between Unix timestamps and human-readable dates in multiple formats
        </p>
      </div>

      <AdSlot className="mb-6" />

      {/* Tab Switcher */}
      <div className="flex gap-1 mb-6 p-1 rounded-lg bg-[#0f172a] border border-[#334155] w-fit">
        <button
          onClick={() => setTab("ts2date")}
          className={`px-5 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
            tab === "ts2date"
              ? "bg-[#3b82f6] text-white"
              : "text-[#94a3b8] hover:text-white"
          }`}
        >
          Timestamp → Date
        </button>
        <button
          onClick={() => setTab("date2ts")}
          className={`px-5 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
            tab === "date2ts"
              ? "bg-[#3b82f6] text-white"
              : "text-[#94a3b8] hover:text-white"
          }`}
        >
          Date → Timestamp
        </button>
      </div>

      {/* Timestamp → Date */}
      {tab === "ts2date" && (
        <div>
          <div className="mb-4">
            <label className="text-xs text-[#64748b] mb-2 block">
              Unix Timestamp (seconds or milliseconds)
            </label>
            <div className="flex gap-2">
              <input
                value={timestampInput}
                onChange={(e) => handleTimestampChange(e.target.value)}
                placeholder="e.g. 1700000000"
                className="input-field flex-1 h-11"
                spellCheck={false}
              />
              <button
                onClick={setNow}
                className="px-4 py-2 rounded-lg border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
              >
                Now
              </button>
            </div>
          </div>

          {dateResults.error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
              ❌ {dateResults.error}
            </div>
          )}

          {dateResults.iso && !dateResults.error && (
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-[#1e293b] border border-[#334155]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#64748b] font-medium uppercase tracking-wider">ISO Format</span>
                  <button
                    onClick={() => copyText(dateResults.iso)}
                    className="px-3 py-1 rounded-md bg-[#0f172a] border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-xs font-medium cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-sm text-white font-mono">{dateResults.iso}</p>
              </div>

              <div className="p-4 rounded-lg bg-[#1e293b] border border-[#334155]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#64748b] font-medium uppercase tracking-wider">Local Format</span>
                  <button
                    onClick={() => copyText(dateResults.local)}
                    className="px-3 py-1 rounded-md bg-[#0f172a] border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-xs font-medium cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-sm text-white font-mono">{dateResults.local}</p>
              </div>

              <div className="p-4 rounded-lg bg-[#1e293b] border border-[#334155]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#64748b] font-medium uppercase tracking-wider">UTC Format</span>
                  <button
                    onClick={() => copyText(dateResults.utc)}
                    className="px-3 py-1 rounded-md bg-[#0f172a] border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-xs font-medium cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-sm text-white font-mono">{dateResults.utc}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Date → Timestamp */}
      {tab === "date2ts" && (
        <div>
          <div className="mb-4">
            <label className="text-xs text-[#64748b] mb-2 block">
              Select Date & Time
            </label>
            <div className="flex gap-2">
              <input
                type="datetime-local"
                value={datetimeInput}
                onChange={(e) => handleDatetimeChange(e.target.value)}
                className="input-field flex-1 h-11"
              />
              <button
                onClick={setNowForDate}
                className="px-4 py-2 rounded-lg border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
              >
                Now
              </button>
            </div>
          </div>

          {timestampResults.seconds && timestampResults.seconds !== "Invalid date" && (
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-[#1e293b] border border-[#334155]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#64748b] font-medium uppercase tracking-wider">Seconds</span>
                  <button
                    onClick={() => copyText(timestampResults.seconds)}
                    className="px-3 py-1 rounded-md bg-[#0f172a] border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-xs font-medium cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-sm text-white font-mono">{timestampResults.seconds}</p>
              </div>

              <div className="p-4 rounded-lg bg-[#1e293b] border border-[#334155]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#64748b] font-medium uppercase tracking-wider">Milliseconds</span>
                  <button
                    onClick={() => copyText(timestampResults.milliseconds)}
                    className="px-3 py-1 rounded-md bg-[#0f172a] border border-[#334155] text-[#94a3b8] hover:text-white hover:border-[#64748b] transition-colors text-xs font-medium cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-sm text-white font-mono">{timestampResults.milliseconds}</p>
              </div>
            </div>
          )}

          {timestampResults.seconds === "Invalid date" && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
              ❌ Invalid date/time selection
            </div>
          )}
        </div>
      )}

      <div className="mt-4 p-3 rounded-lg bg-[#1e293b] border border-[#334155]">
        <p className="text-xs text-[#64748b]">
          💡 Unix timestamp is the number of seconds since January 1, 1970 (UTC) · All processing is done locally in your browser
        </p>
      </div>

      
      {/* About This Tool */}
      <section className="mt-12 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">About This Tool</h2>
        <div className="space-y-3 text-[#94a3b8] text-sm leading-relaxed">
          <p>Unix timestamps are the universal language of time in computing — the number of seconds since January 1, 1970 (UTC). This free online timestamp converter handles bidirectional conversion between timestamps and human-readable dates with ease.</p>
          <p>Key use cases include debugging JWT token expiration times, converting database timestamps from logs, working with API responses that use epoch time, calculating time differences between events, and generating timestamps for cron jobs or scheduled tasks.</p>
          <p>The tool automatically detects whether your input is in seconds or milliseconds (a common source of bugs), provides multiple date format outputs, and includes a "Now" button to quickly insert the current timestamp. All parsing is done client-side with zero latency.</p>
        </div>
      </section>

      <section className="mt-10 pt-8 border-t border-[#334155]">
        <h2 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>Is this timestamp in seconds or milliseconds?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              The tool auto-detects: if the number is greater than 100 billion (10^11), it treats it as milliseconds. Standard Unix timestamps are in seconds since 1970-01-01 UTC.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>How do I get the current timestamp?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              Click the 'Now' button to instantly insert the current Unix timestamp in seconds. It updates in real-time based on your system clock.
            </div>
          </details>
          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
              <span>Why do I see different times in different timezones?</span>
              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
              Unix timestamps are always UTC-based. The tool converts to your local timezone automatically using JavaScript's Date object.
            </div>
          </details>
        </div>
      </section>

      <AdSlot className="mt-8" />
    </div>
  );
}
