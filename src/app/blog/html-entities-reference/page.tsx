import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HTML Entities Reference — DevToolsHub",
  description:
    "Complete HTML entities reference with escape codes. Find common symbols, special characters, currency signs, arrows, and mathematical operators.",
  openGraph: {
    title: "HTML Entities Reference: Complete Guide to HTML Escape Codes",
    description:
      "Every HTML entity you need — common symbols, currency signs, arrows, math operators, and punctuation. Includes entity names, numeric codes, and examples.",
    type: "article",
  },
};

export default function HtmlEntitiesReference() {
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
            Reference
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          HTML Entities Reference
        </h1>
        <div className="flex items-center gap-3 text-sm text-[#64748b]">
          <span>June 24, 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span>9 min read</span>
        </div>
      </div>

      <div className="prose-content space-y-6 text-[#cbd5e1] leading-relaxed">
        <p>
          HTML entities (also called character entities or escape codes) let you display
          reserved characters, special symbols, and invisible characters in HTML documents.
          Whether you need to show a literal <code className="text-xs">&lt;</code> without
          triggering a tag, display a copyright symbol, or include an arrow in your UI,
          this reference has the code.
        </p>
        <p>
          Each table below lists the entity name, numeric code (decimal and hex), and the
          rendered character. Bookmark this page for quick lookup during frontend development.
        </p>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">💡 How to Use</p>
          <p className="text-sm">
            Use entity names like <code className="text-xs">&amp;amp;</code> or numeric
            codes like <code className="text-xs">&amp;#38;</code> or{" "}
            <code className="text-xs">&amp;#x26;</code> directly in your HTML. Most modern
            editors suggest entity names as you type.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Common Symbols
        </h2>
        <p>
          These are the most frequently used HTML entities. Every developer should know{" "}
          <code className="text-xs">&amp;amp;</code>, <code className="text-xs">&amp;lt;</code>,{" "}
          <code className="text-xs">&amp;gt;</code>, and <code className="text-xs">&amp;nbsp;</code>{" "}
          by heart.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Character</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Entity Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Decimal Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Hex Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">&amp;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;amp;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#38;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x26;</td>
                <td className="p-3 border border-[#334155]">Ampersand (must escape in HTML)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">&lt;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;lt;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#60;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x3C;</td>
                <td className="p-3 border border-[#334155]">Less than (opens HTML tags)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">&gt;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;gt;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#62;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x3E;</td>
                <td className="p-3 border border-[#334155]">Greater than (closes HTML tags)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">&quot;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;quot;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#34;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x22;</td>
                <td className="p-3 border border-[#334155]">Double quote (attribute delimiters)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">&apos;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;apos;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#39;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x27;</td>
                <td className="p-3 border border-[#334155]">Apostrophe / single quote</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">&nbsp;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;nbsp;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#160;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xA0;</td>
                <td className="p-3 border border-[#334155]">Non-breaking space (prevents line break)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">©</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;copy;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#169;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xA9;</td>
                <td className="p-3 border border-[#334155]">Copyright symbol</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">®</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;reg;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#174;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xAE;</td>
                <td className="p-3 border border-[#334155]">Registered trademark</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">™</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;trade;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8482;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2122;</td>
                <td className="p-3 border border-[#334155]">Trademark symbol</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">§</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;sect;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#167;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xA7;</td>
                <td className="p-3 border border-[#334155]">Section symbol</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">¶</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;para;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#182;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xB6;</td>
                <td className="p-3 border border-[#334155]">Pilcrow / paragraph mark</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">°</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;deg;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#176;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xB0;</td>
                <td className="p-3 border border-[#334155]">Degree symbol</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">†</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;dagger;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8224;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2020;</td>
                <td className="p-3 border border-[#334155]">Dagger (footnotes)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">‡</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;Dagger;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8225;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2021;</td>
                <td className="p-3 border border-[#334155]">Double dagger</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">•</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;bull;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8226;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2022;</td>
                <td className="p-3 border border-[#334155]">Bullet point</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">…</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;hellip;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8230;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2026;</td>
                <td className="p-3 border border-[#334155]">Horizontal ellipsis</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">‰</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;permil;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8240;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2030;</td>
                <td className="p-3 border border-[#334155]">Per mille (per thousand)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">℠</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;scaps;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8480;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2120;</td>
                <td className="p-3 border border-[#334155]">Service mark</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Currency Symbols
        </h2>
        <p>
          Display currency signs from around the world. Note that some symbols (like the
          Bitcoin sign) may not render in older browsers without a numeric code.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Character</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Entity Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Decimal Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Hex Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">$</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">(none needed)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#36;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x24;</td>
                <td className="p-3 border border-[#334155]">Dollar (not reserved, no entity needed)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">¢</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;cent;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#162;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xA2;</td>
                <td className="p-3 border border-[#334155]">Cent</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">£</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;pound;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#163;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xA3;</td>
                <td className="p-3 border border-[#334155]">Pound sterling</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">¤</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;curren;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#164;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xA4;</td>
                <td className="p-3 border border-[#334155]">Generic currency</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">¥</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;yen;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#165;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xA5;</td>
                <td className="p-3 border border-[#334155]">Yen / Yuan</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">€</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;euro;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8364;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x20AC;</td>
                <td className="p-3 border border-[#334155]">Euro</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">₤</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;lira;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8356;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x20A4;</td>
                <td className="p-3 border border-[#334155]">Lira sign</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">₱</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">(none)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8369;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x20B1;</td>
                <td className="p-3 border border-[#334155]">Philippine peso</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">₹</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">(none)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8377;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x20B9;</td>
                <td className="p-3 border border-[#334155]">Indian rupee</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">₩</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">(none)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8361;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x20A9;</td>
                <td className="p-3 border border-[#334155]">South Korean won</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">₪</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">(none)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8362;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x20AA;</td>
                <td className="p-3 border border-[#334155]">Israeli shekel</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">₫</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">(none)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8363;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x20AB;</td>
                <td className="p-3 border border-[#334155]">Vietnamese dong</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">₮</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">(none)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8366;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x20AE;</td>
                <td className="p-3 border border-[#334155]">Mongolian tugrik</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">₽</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">(none)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8381;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x20BD;</td>
                <td className="p-3 border border-[#334155]">Russian ruble</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">₿</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">(none)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8383;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x20BF;</td>
                <td className="p-3 border border-[#334155]">Bitcoin</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">₣</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">(none)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8355;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x20A3;</td>
                <td className="p-3 border border-[#334155]">French franc</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Arrows
        </h2>
        <p>
          Arrow symbols for navigation, direction indicators, and UI elements. Both simple
          and double-lined variants are available.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Character</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Entity Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Decimal Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Hex Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">←</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;larr;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8592;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2190;</td>
                <td className="p-3 border border-[#334155]">Left arrow</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">↑</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;uarr;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8593;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2191;</td>
                <td className="p-3 border border-[#334155]">Up arrow</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">→</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;rarr;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8594;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2192;</td>
                <td className="p-3 border border-[#334155]">Right arrow</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">↓</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;darr;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8595;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2193;</td>
                <td className="p-3 border border-[#334155]">Down arrow</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">↔</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;harr;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8596;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2194;</td>
                <td className="p-3 border border-[#334155]">Left-right arrow</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">↕</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;varr;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8597;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2195;</td>
                <td className="p-3 border border-[#334155]">Up-down arrow</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">↖</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;nwarr;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8598;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2196;</td>
                <td className="p-3 border border-[#334155]">North-west arrow</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">↗</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;nearr;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8599;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2197;</td>
                <td className="p-3 border border-[#334155]">North-east arrow</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">↘</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;searr;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8600;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2198;</td>
                <td className="p-3 border border-[#334155]">South-east arrow</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">↙</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;swarr;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8601;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2199;</td>
                <td className="p-3 border border-[#334155]">South-west arrow</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">⇐</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;lArr;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8656;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x21D0;</td>
                <td className="p-3 border border-[#334155]">Left double arrow</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">⇒</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;rArr;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8658;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x21D2;</td>
                <td className="p-3 border border-[#334155]">Right double arrow (implies)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">⇔</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;hArr;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8660;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x21D4;</td>
                <td className="p-3 border border-[#334155]">Left-right double arrow (iff)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">►</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;rtrif;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#9656;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x25B6;</td>
                <td className="p-3 border border-[#334155]">Right-pointing triangle</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">◄</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;ltrif;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#9664;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x25C0;</td>
                <td className="p-3 border border-[#334155]">Left-pointing triangle</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">▲</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;utrif;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#9652;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x25B4;</td>
                <td className="p-3 border border-[#334155]">Up-pointing triangle</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">▼</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;dtrif;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#9662;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x25BE;</td>
                <td className="p-3 border border-[#334155]">Down-pointing triangle</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Mathematical Operators &amp; Symbols
        </h2>
        <p>
          Common math symbols for equations, comparisons, fractions, and logic. Use numeric
          codes for symbols without named entities.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Character</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Entity Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Decimal Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Hex Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">×</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;times;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#215;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xD7;</td>
                <td className="p-3 border border-[#334155]">Multiplication sign</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">÷</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;divide;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#247;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xF7;</td>
                <td className="p-3 border border-[#334155]">Division sign</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">±</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;plusmn;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#177;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xB1;</td>
                <td className="p-3 border border-[#334155]">Plus-minus</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">−</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;minus;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8722;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2212;</td>
                <td className="p-3 border border-[#334155]">Minus sign (not hyphen)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">∑</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;sum;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8721;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2211;</td>
                <td className="p-3 border border-[#334155]">N-ary summation</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">∏</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;prod;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8719;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x220F;</td>
                <td className="p-3 border border-[#334155]">N-ary product</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">∫</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;int;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8747;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x222B;</td>
                <td className="p-3 border border-[#334155]">Integral</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">√</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;radic;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8730;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x221A;</td>
                <td className="p-3 border border-[#334155]">Square root</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">∞</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;infin;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8734;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x221E;</td>
                <td className="p-3 border border-[#334155]">Infinity</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">∠</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;ang;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8736;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2220;</td>
                <td className="p-3 border border-[#334155]">Angle</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">⊥</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;perp;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8869;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x22A5;</td>
                <td className="p-3 border border-[#334155]">Perpendicular / up tack</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">∴</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;there4;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8756;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2234;</td>
                <td className="p-3 border border-[#334155]">Therefore</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">∵</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;becaus;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8757;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2235;</td>
                <td className="p-3 border border-[#334155]">Because</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">∼</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;sim;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8764;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x223C;</td>
                <td className="p-3 border border-[#334155]">Tilde operator (similar to)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">≅</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;cong;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8773;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2245;</td>
                <td className="p-3 border border-[#334155]">Approximately equal to</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">≈</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;asymp;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8776;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2248;</td>
                <td className="p-3 border border-[#334155]">Almost equal to</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">≠</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;ne;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8800;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2260;</td>
                <td className="p-3 border border-[#334155]">Not equal to</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">≡</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;equiv;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8801;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2261;</td>
                <td className="p-3 border border-[#334155]">Identical to</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">≤</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;le;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8804;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2264;</td>
                <td className="p-3 border border-[#334155]">Less-than or equal to</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">≥</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;ge;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8805;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2265;</td>
                <td className="p-3 border border-[#334155]">Greater-than or equal to</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">½</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;frac12;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#189;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xBD;</td>
                <td className="p-3 border border-[#334155]">Fraction one-half</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">¼</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;frac14;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#188;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xBC;</td>
                <td className="p-3 border border-[#334155]">Fraction one-quarter</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">¾</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;frac34;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#190;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xBE;</td>
                <td className="p-3 border border-[#334155]">Fraction three-quarters</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">π</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;pi;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#960;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x3C0;</td>
                <td className="p-3 border border-[#334155]">Greek pi</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">μ</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;mu;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#956;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x3BC;</td>
                <td className="p-3 border border-[#334155]">Mu (micro symbol)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Punctuation &amp; Special Characters
        </h2>
        <p>
          Dashes, quotes, spaces, and other typographic characters for polished text.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Character</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Entity Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Decimal Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Hex Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">–</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;ndash;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8211;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2013;</td>
                <td className="p-3 border border-[#334155]">En dash (number ranges)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">—</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;mdash;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8212;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2014;</td>
                <td className="p-3 border border-[#334155]">Em dash (parenthetical)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">‘</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;lsquo;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8216;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2018;</td>
                <td className="p-3 border border-[#334155]">Left single quotation mark</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">’</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;rsquo;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8217;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2019;</td>
                <td className="p-3 border border-[#334155]">Right single quotation mark</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">“</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;ldquo;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8220;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x201C;</td>
                <td className="p-3 border border-[#334155]">Left double quotation mark</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">”</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;rdquo;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8221;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x201D;</td>
                <td className="p-3 border border-[#334155]">Right double quotation mark</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">«</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;laquo;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#171;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xAB;</td>
                <td className="p-3 border border-[#334155]">Left-pointing double angle (guillemet)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">»</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;raquo;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#187;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xBB;</td>
                <td className="p-3 border border-[#334155]">Right-pointing double angle (guillemet)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">‹</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;lsaquo;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8249;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2039;</td>
                <td className="p-3 border border-[#334155]">Single left-pointing angle quote</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">›</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;rsaquo;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8250;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x203A;</td>
                <td className="p-3 border border-[#334155]">Single right-pointing angle quote</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">¡</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;iexcl;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#161;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xA1;</td>
                <td className="p-3 border border-[#334155]">Inverted exclamation mark</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">¿</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;iquest;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#191;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xBF;</td>
                <td className="p-3 border border-[#334155]">Inverted question mark</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">¦</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;brvbar;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#166;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xA6;</td>
                <td className="p-3 border border-[#334155]">Broken vertical bar</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">¬</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;not;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#172;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xAC;</td>
                <td className="p-3 border border-[#334155]">Not sign</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">­</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;shy;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#173;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#xAD;</td>
                <td className="p-3 border border-[#334155]">Soft hyphen</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg"> </td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;ensp;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8194;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2002;</td>
                <td className="p-3 border border-[#334155]">En space (half an em)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg"> </td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;emsp;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8195;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2003;</td>
                <td className="p-3 border border-[#334155]">Em space (width of capital M)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg"> </td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;thinsp;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#8201;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x2009;</td>
                <td className="p-3 border border-[#334155]">Thin space</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Greek Letters (Common)
        </h2>
        <p>
          Frequently used Greek letters in math, science, and engineering contexts.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Character</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Entity Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Decimal Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Hex Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">α</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;alpha;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#945;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x3B1;</td>
                <td className="p-3 border border-[#334155]">Alpha</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">β</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;beta;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#946;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x3B2;</td>
                <td className="p-3 border border-[#334155]">Beta</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">γ</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;gamma;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#947;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x3B3;</td>
                <td className="p-3 border border-[#334155]">Gamma</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">δ</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;delta;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#948;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x3B4;</td>
                <td className="p-3 border border-[#334155]">Delta</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">ε</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;epsilon;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#949;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x3B5;</td>
                <td className="p-3 border border-[#334155]">Epsilon</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">θ</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;theta;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#952;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x3B8;</td>
                <td className="p-3 border border-[#334155]">Theta</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">λ</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;lambda;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#955;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x3BB;</td>
                <td className="p-3 border border-[#334155]">Lambda</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">σ</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;sigma;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#963;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x3C3;</td>
                <td className="p-3 border border-[#334155]">Sigma</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-center text-lg">φ</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;phi;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#966;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x3C6;</td>
                <td className="p-3 border border-[#334155]">Phi</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-center text-lg">ω</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;omega;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#969;</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">&amp;#x3C9;</td>
                <td className="p-3 border border-[#334155]">Omega</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-5 mt-6">
          <p className="text-white font-semibold mb-2">🎯 Quick Reference: Most Common Entities</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
            <div className="bg-[#0f172a] rounded p-2 text-center">
              <p className="text-lg mb-1">&amp;</p>
              <code className="text-xs text-[#f472b6]">&amp;amp;</code>
            </div>
            <div className="bg-[#0f172a] rounded p-2 text-center">
              <p className="text-lg mb-1">&lt;</p>
              <code className="text-xs text-[#f472b6]">&amp;lt;</code>
            </div>
            <div className="bg-[#0f172a] rounded p-2 text-center">
              <p className="text-lg mb-1">&gt;</p>
              <code className="text-xs text-[#f472b6]">&amp;gt;</code>
            </div>
            <div className="bg-[#0f172a] rounded p-2 text-center">
              <p className="text-lg mb-1">&quot;</p>
              <code className="text-xs text-[#f472b6]">&amp;quot;</code>
            </div>
            <div className="bg-[#0f172a] rounded p-2 text-center">
              <p className="text-lg mb-1">&nbsp;</p>
              <code className="text-xs text-[#f472b6]">&amp;nbsp;</code>
            </div>
            <div className="bg-[#0f172a] rounded p-2 text-center">
              <p className="text-lg mb-1">©</p>
              <code className="text-xs text-[#f472b6]">&amp;copy;</code>
            </div>
            <div className="bg-[#0f172a] rounded p-2 text-center">
              <p className="text-lg mb-1">®</p>
              <code className="text-xs text-[#f472b6]">&amp;reg;</code>
            </div>
            <div className="bg-[#0f172a] rounded p-2 text-center">
              <p className="text-lg mb-1">€</p>
              <code className="text-xs text-[#f472b6]">&amp;euro;</code>
            </div>
          </div>
        </div>

        <div className="border-t border-[#334155] pt-6 mt-8">
          <p className="text-xs text-[#64748b]">
            <strong>Related Tools:</strong>{" "}
            <a href="/tools/base64" className="text-[#3b82f6] hover:text-blue-300">Base64 Encoder/Decoder</a>
            {" · "}
            <a href="/tools/json-formatter" className="text-[#3b82f6] hover:text-blue-300">JSON Formatter</a>
            {" · "}
            <a href="/tools/regex-tester" className="text-[#3b82f6] hover:text-blue-300">Regex Tester</a>
          </p>
        </div>
      </div>
    </article>
  );
}
