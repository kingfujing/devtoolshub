import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cron Expression Guide — DevToolsHub",
  description:
    "Complete cron expression reference. Master cron syntax with examples, special strings, common schedules, and troubleshooting tips.",
  openGraph: {
    title: "Cron Expression Guide: Complete Reference with Examples",
    description:
      "Master cron job scheduling with this comprehensive guide. Covers syntax, special strings, common schedules, troubleshooting, timezone considerations, and real-world examples.",
    type: "article",
  },
};

export default function CronExpressionGuide() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <Link
          href="/"
          className="text-sm text-[#3b82f6] hover:text-blue-300 transition-colors mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <div className="mb-4">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            Guide
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          Cron Expression Guide
        </h1>
        <div className="flex items-center gap-3 text-sm text-[#64748b]">
          <span>July 15, 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span>10 min read</span>
        </div>
      </div>

      <div className="prose-content space-y-6 text-[#cbd5e1] leading-relaxed">
        <p>
          Cron is the time-based job scheduler built into Unix-like operating systems. It
          lets you schedule commands or scripts to run at specific times — every minute, every
          Tuesday at 3 AM, or the first day of every quarter. Despite its power, the syntax
          can be cryptic for beginners and even experienced developers find themselves checking
          references regularly.
        </p>
        <p>
          This guide covers everything you need to know about cron expressions: the five
          standard fields, special strings, real-world schedule examples, troubleshooting tips,
          and timezone considerations. Whether you&apos;re writing a crontab file or configuring
          a cloud scheduler, this reference has you covered.
        </p>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">⚡ Quick Tip</p>
          <p className="text-sm">
            Use our{" "}
            <a href="/tools/timestamp" className="text-[#3b82f6] hover:text-blue-300">
              Unix Timestamp Converter
            </a>{" "}
            to convert cron timestamps to human-readable dates during debugging, and our{" "}
            <a href="/tools/json-formatter" className="text-[#3b82f6] hover:text-blue-300">
              JSON Formatter
            </a>{" "}
            to read cron job output logs.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          1. Cron Syntax Fundamentals
        </h2>
        <p>
          A standard cron expression has five fields, separated by spaces:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Position</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Field</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Range</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Allowed Special Chars</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#60a5fa]">1</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Minute</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">0 - 59</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">* , - /</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#60a5fa]">2</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Hour</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">0 - 23</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">* , - /</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#60a5fa]">3</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Day of Month</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">1 - 31</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">* , - / ? L W</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#60a5fa]">4</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Month</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">1 - 12 (or JAN - DEC)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">* , - /</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#60a5fa]">5</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Day of Week</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">0 - 7 (or SUN - SAT)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">* , - / ? L #</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong className="text-white">Important note on Day of Week:</strong> Both 0 and 7
          represent Sunday. Most systems use 0 for Sunday, 1 for Monday, through 6 for Saturday.
          Some systems (like Quartz) use 1 for Sunday and 2-7 for Monday-Saturday — always check
          your implementation.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Special Characters</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Char</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-sm text-[#22c55e]">*</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Wildcard</td>
                <td className="p-3 border border-[#334155]">Every value in the field</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`* * * * *`} = every minute</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-sm text-[#22c55e]">,</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">List</td>
                <td className="p-3 border border-[#334155]">Multiple values</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0,30 * * * *`} = at :00 and :30</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-sm text-[#22c55e]">-</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Range</td>
                <td className="p-3 border border-[#334155]">All values in a range</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 9-17 * * *`} = 9 AM to 5 PM</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-sm text-[#22c55e]">/</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Step</td>
                <td className="p-3 border border-[#334155]">Every N units</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`*/15 * * * *`} = every 15 min</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-sm text-[#22c55e]">?</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">No specific value</td>
                <td className="p-3 border border-[#334155]">Used in day-of-month/day-of-week (alternative to *)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 ? * MON`} = every Monday</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-sm text-[#22c55e]">L</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Last</td>
                <td className="p-3 border border-[#334155]">Last day of month or week</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 L * *`} = last day of month</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-sm text-[#22c55e]">W</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Weekday</td>
                <td className="p-3 border border-[#334155]">Nearest weekday to given day</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 15W * *`} = nearest weekday to 15th</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-sm text-[#22c55e]">#</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Nth occurrence</td>
                <td className="p-3 border border-[#334155]">Nth weekday of the month</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 ? * 2#1`} = first Monday</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#1e293b] border border-[#f59e0b]/30 rounded-lg p-4">
          <p className="text-xs text-[#f59e0b] mb-1">⚠️ ? vs * in Cron</p>
          <p className="text-sm text-[#cbd5e1]">
            In standard Unix cron, <code className="text-xs">*</code> is used everywhere.
            The <code className="text-xs">?</code> character is specific to Quartz-style cron
            expressions (used by Java-based schedulers like Spring). In Quartz, only one of
            day-of-month or day-of-week can be specified — the other must be{" "}
            <code className="text-xs">?</code>.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          2. Special Strings
        </h2>
        <p>
          Many cron implementations support shorthand strings for common schedules. These are
          especially useful in cloud schedulers (AWS EventBridge, Google Cloud Scheduler) and
          systemd timers.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">String</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Equivalent Expression</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#0ea5e9]">@yearly</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 1 1 *`}</td>
                <td className="p-3 border border-[#334155]">Run once a year at midnight on January 1</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#0ea5e9]">@annually</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 1 1 *`}</td>
                <td className="p-3 border border-[#334155]">Same as @yearly</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#0ea5e9]">@monthly</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 1 * *`}</td>
                <td className="p-3 border border-[#334155]">Run once a month at midnight on the first day</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#0ea5e9]">@weekly</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 * * 0`}</td>
                <td className="p-3 border border-[#334155]">Run once a week at midnight on Sunday</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#0ea5e9]">@daily</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 * * *`}</td>
                <td className="p-3 border border-[#334155]">Run once a day at midnight</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#0ea5e9]">@midnight</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 * * *`}</td>
                <td className="p-3 border border-[#334155]">Same as @daily</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#0ea5e9]">@hourly</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 * * * *`}</td>
                <td className="p-3 border border-[#334155]">Run once an hour at minute 0</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#0ea5e9]">@reboot</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">N/A</td>
                <td className="p-3 border border-[#334155]">Run once at system startup (not a true time expression)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          3. Common Schedule Examples
        </h2>
        <p>
          Here are real-world cron expressions organized by use case. Copy-paste these into
          your crontab and adjust as needed.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Every Minute / High Frequency</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Expression</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`* * * * *`}</td>
                <td className="p-3 border border-[#334155]">Every minute</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">{`*/5 * * * *`}</td>
                <td className="p-3 border border-[#334155]">Every 5 minutes</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`*/10 * * * *`}</td>
                <td className="p-3 border border-[#334155]">Every 10 minutes</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">{`*/15 * * * *`}</td>
                <td className="p-3 border border-[#334155]">Every 15 minutes</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`*/30 * * * *`}</td>
                <td className="p-3 border border-[#334155]">Every 30 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Hourly / Every N Hours</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Expression</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 * * * *`}</td>
                <td className="p-3 border border-[#334155]">Every hour at minute 0</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 */2 * * *`}</td>
                <td className="p-3 border border-[#334155]">Every 2 hours</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 */3 * * *`}</td>
                <td className="p-3 border border-[#334155]">Every 3 hours</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 */6 * * *`}</td>
                <td className="p-3 border border-[#334155]">Every 6 hours</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 */12 * * *`}</td>
                <td className="p-3 border border-[#334155]">Every 12 hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Daily Schedules</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Expression</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 * * *`}</td>
                <td className="p-3 border border-[#334155]">Daily at midnight</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">{`30 5 * * *`}</td>
                <td className="p-3 border border-[#334155]">Daily at 5:30 AM</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 2 * * *`}</td>
                <td className="p-3 border border-[#334155]">Daily at 2:00 AM (common for maintenance)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 22 * * *`}</td>
                <td className="p-3 border border-[#334155]">Daily at 10:00 PM</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 8,12,17 * * *`}</td>
                <td className="p-3 border border-[#334155]">Daily at 8 AM, 12 PM, and 5 PM</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 9-17 * * *`}</td>
                <td className="p-3 border border-[#334155]">Every hour from 9 AM to 5 PM (business hours)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Weekly / Weekday Schedules</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Expression</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 * * 0`}</td>
                <td className="p-3 border border-[#334155]">Every Sunday at midnight</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 9 * * 1`}</td>
                <td className="p-3 border border-[#334155]">Every Monday at 9 AM</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 * * 1-5`}</td>
                <td className="p-3 border border-[#334155]">Every weekday at midnight</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 9 * * 1-5`}</td>
                <td className="p-3 border border-[#334155]">Weekdays at 9 AM</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 18 * * 5`}</td>
                <td className="p-3 border border-[#334155]">Every Friday at 6 PM</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 * * 6,0`}</td>
                <td className="p-3 border border-[#334155]">Weekends at midnight</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Monthly / Advanced Schedules</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Expression</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 1 * *`}</td>
                <td className="p-3 border border-[#334155]">First day of every month at midnight</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 15 * *`}</td>
                <td className="p-3 border border-[#334155]">15th of every month at midnight</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 L * *`}</td>
                <td className="p-3 border border-[#334155]">Last day of every month (Quartz), or at midnight on the 31st (Unix)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 1 1 *`}</td>
                <td className="p-3 border border-[#334155]">January 1st (yearly)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 1 */3 *`}</td>
                <td className="p-3 border border-[#334155]">First day of every quarter</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 ? * MON#1`}</td>
                <td className="p-3 border border-[#334155]">First Monday of every month (Quartz)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 ? * FRI#3`}</td>
                <td className="p-3 border border-[#334155]">Third Friday of every month (Quartz)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">{`0 0 15W * *`}</td>
                <td className="p-3 border border-[#334155]">Nearest weekday to the 15th (Quartz)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          4. Crontab Quick Reference
        </h2>
        <p>
          The <code className="text-xs">crontab</code> command manages your cron jobs. Each
          user has their own crontab file.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Command</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">crontab -e</td>
                <td className="p-3 border border-[#334155]">Edit your crontab file (opens in default editor)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">crontab -l</td>
                <td className="p-3 border border-[#334155]">List your current cron jobs</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">crontab -r</td>
                <td className="p-3 border border-[#334155]">Remove your crontab file (deletes all jobs!)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">crontab -u user -l</td>
                <td className="p-3 border border-[#334155]">List another user&apos;s crontab (root only)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">crontab /path/to/file</td>
                <td className="p-3 border border-[#334155]">Install a crontab from a file</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A crontab entry has this format:
        </p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`# ┌───────────── minute (0-59)
# │ ┌───────────── hour (0-23)
# │ │ ┌───────────── day of month (1-31)
# │ │ │ ┌───────────── month (1-12)
# │ │ │ │ ┌───────────── day of week (0-7, 0 or 7 = Sunday)
# │ │ │ │ │
# * * * * *  command_to_run

# Example: backup database every day at 2:30 AM
30 2 * * * /usr/local/bin/backup.sh

# Example: send a report every Monday at 9 AM
0 9 * * 1 /usr/local/bin/send-report.sh`}</code></pre>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          5. Timezone Considerations
        </h2>
        <p>
          Standard Unix cron uses the <strong className="text-white">system timezone</strong>.
          This is one of the most common sources of confusion — especially when your server
          is in UTC and you expect a local time.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">Unix cron</strong> reads the system&apos;s timezone
            (set via <code className="text-xs">/etc/timezone</code> or the TZ environment variable).
            You can set <code className="text-xs">TZ=America/New_York</code> at the top of your
            crontab to run jobs in a specific timezone.
          </li>
          <li>
            <strong className="text-white">Systemd timers</strong> use the system timezone.
            Check with <code className="text-xs">timedatectl</code>.
          </li>
          <li>
            <strong className="text-white">AWS EventBridge</strong> supports setting a timezone
            per rule. The default is UTC.
          </li>
          <li>
            <strong className="text-white">Google Cloud Scheduler</strong> requires you to specify
            the timezone explicitly (e.g., <code className="text-xs">America/New_York</code>).
          </li>
          <li>
            <strong className="text-white">Kubernetes CronJobs</strong> run in the timezone of the
            kube-controller-manager. As of Kubernetes 1.27+, you can set{" "}
            <code className="text-xs">spec.timeZone</code> in the CronJob spec.
          </li>
        </ul>

        <div className="bg-[#1e293b] border border-[#f59e0b]/30 rounded-lg p-4">
          <p className="text-xs text-[#f59e0b] mb-1">⚠️ Daylight Saving Time</p>
          <p className="text-sm text-[#cbd5e1]">
            Cron jobs running during DST transitions can behave unexpectedly:
            <strong className="text-white">Spring forward</strong> — if you schedule a job at
            2:30 AM, it won&apos;t run because that time doesn&apos;t exist.{" "}
            <strong className="text-white">Fall back</strong> — a job at 1:30 AM may run twice.
            To avoid this, schedule critical jobs in UTC or choose times outside the DST window
            (e.g., 3 AM for daily tasks).
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          6. Troubleshooting
        </h2>
        <p>
          Cron jobs can fail silently. Here are the most common issues and how to fix them.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Problem</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">Job never runs</td>
                <td className="p-3 border border-[#334155]">Check the system timezone. Run <code className="text-xs">date</code> to verify. Test with <code className="text-xs">*/1 * * * * echo "test" &gt;&gt; /tmp/cron-test.log</code></td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">Job runs but does nothing</td>
                <td className="p-3 border border-[#334155]">Cron runs with a limited PATH (~/usr/bin:/bin). Always use <strong>absolute paths</strong> to commands and scripts. Or set <code className="text-xs">PATH=/usr/local/bin:/usr/bin:/bin</code> at the top of your crontab.</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">No log output</td>
                <td className="p-3 border border-[#334155]">Redirect output: <code className="text-xs">* * * * * /script.sh &gt;&gt; /var/log/cron.log 2&gt;&amp;1</code>. Cron emails output by default (check <code className="text-xs">MAILTO</code>).</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">Job runs at wrong time</td>
                <td className="p-3 border border-[#334155]">Check timezone: <code className="text-xs">timedatectl | grep "Time zone"</code>. Remember cron doesn&apos;t use the user&apos;s locale — it uses the system timezone.</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">Permission denied</td>
                <td className="p-3 border border-[#334155]">Make the script executable: <code className="text-xs">chmod +x /path/to/script.sh</code>. Check that the cron user has execution rights.</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">&quot;bad minute&quot; syntax error</td>
                <td className="p-3 border border-[#334155]">Check for invisible characters, trailing spaces, or tab issues. Validate with <code className="text-xs">crontab -e</code> which does basic syntax checking.</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">Environment variables not set</td>
                <td className="p-3 border border-[#334155]">Cron runs in a minimal environment. Source your profile: <code className="text-xs">* * * * * . $HOME/.profile; /script.sh</code>. Or set variables directly in crontab.</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">Job runs multiple times</td>
                <td className="p-3 border border-[#334155]">Check for duplicate crontab entries. Use <code className="text-xs">crontab -l</code> to verify. Also check system cron directories like <code className="text-xs">/etc/cron.d/</code>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Debugging Checklist</h3>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Verify the cron daemon is running: <code className="text-xs">systemctl status cron</code> or <code className="text-xs">ps aux | grep cron</code></li>
          <li>Check system timezone: <code className="text-xs">timedatectl</code> or <code className="text-xs">date +%Z</code></li>
          <li>List your crontab: <code className="text-xs">crontab -l</code></li>
          <li>Add a simple test job that writes to a file every minute</li>
          <li>Check cron logs: <code className="text-xs">grep cron /var/log/syslog</code> or <code className="text-xs">/var/log/cron</code></li>
          <li>Ensure the script is executable and uses absolute paths</li>
          <li>Redirect stdout and stderr to a log file for debugging</li>
        </ol>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          7. Cron in the Cloud
        </h2>
        <p>
          Cloud-native schedulers use cron-like syntax with some differences. Here&apos;s how
          each platform handles it:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Platform</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Format</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">AWS EventBridge</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">cron(0 12 * * ? *)</td>
                <td className="p-3 border border-[#334155]">Uses 6-field Quartz format (adds year). Must have <code className="text-xs">?</code> for either day-of-month or day-of-week</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">Google Cloud Scheduler</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">0 12 * * *</td>
                <td className="p-3 border border-[#334155]">Standard 5-field Unix format. Timezone must be specified separately</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">Azure Scheduler</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">{ }</td>
                <td className="p-3 border border-[#334155]">Uses JSON with <code className="text-xs">schedule</code> property. Supports cron expressions with 6 fields including seconds</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">Kubernetes CronJob</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">0 12 * * *</td>
                <td className="p-3 border border-[#334155]">Standard 5-field Unix format. <code className="text-xs">spec.timeZone</code> available in k8s 1.27+</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">GitHub Actions</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">cron: &apos;0 12 * * *&apos;</td>
                <td className="p-3 border border-[#334155]">Standard 5-field format. Uses UTC. Add <code className="text-xs">timezone: America/New_York</code> for other zones</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          8. Alternative Notations
        </h2>
        <p>
          Some systems extend cron syntax with additional fields or alternative formats:
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">6-Field (Quartz) Format</h3>
        <p>
          Quartz schedulers (common in Java / Spring Boot) add a seconds field at the beginning
          and an optional year field at the end:
        </p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`# ┌───────────── second (0-59)
# │ ┌───────────── minute (0-59)
# │ │ ┌───────────── hour (0-23)
# │ │ │ ┌───────────── day of month (1-31)
# │ │ │ │ ┌───────────── month (1-12)
# │ │ │ │ │ ┌───────────── day of week (1-7, 1 = Sunday)
# │ │ │ │ │ │
# * * * * * *  command

# Example: run at 10:15 AM every day
0 15 10 * * ?`}</code></pre>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">🔍 Related Resources</p>
          <p className="text-sm">
            Check out our{" "}
            <a href="/tools/timestamp" className="text-[#3b82f6] hover:text-blue-300">
              Unix Timestamp Converter
            </a>{" "}
            for converting cron execution times, and our{" "}
            <a href="/blog/timestamp-cheat-sheet" className="text-[#3b82f6] hover:text-blue-300">
              Unix Timestamp Cheat Sheet
            </a>{" "}
            for working with dates and times across programming languages.
          </p>
        </div>
      </div>
    </article>
  );
}
