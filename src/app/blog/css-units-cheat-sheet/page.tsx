import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CSS Units Cheat Sheet — DevToolsHub",
  description:
    "Complete CSS units reference — absolute vs relative units, viewport units, calc(), and when to use each. Includes practical examples for responsive design.",
  openGraph: {
    title: "CSS Units Cheat Sheet: Complete Reference for Responsive Design",
    description:
      "Every CSS unit explained with examples. Absolute units (px, pt, cm), relative units (%, em, rem), viewport units (vw, vh, vmin, vmax), and more.",
    type: "article",
  },
};

export default function CssUnitsCheatSheet() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
            Cheat Sheet
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          CSS Units Cheat Sheet
        </h1>
        <div className="flex items-center gap-3 text-sm text-[#64748b]">
          <span>June 24, 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span>8 min read</span>
        </div>
      </div>

      <div className="prose-content space-y-6 text-[#cbd5e1] leading-relaxed">
        <p>
          CSS units can be confusing. Should you use <code className="text-xs">px</code> or{" "}
          <code className="text-xs">rem</code>? When does <code className="text-xs">vw</code> make
          sense? What about <code className="text-xs">ch</code> and <code className="text-xs">ex</code>?
          Picking the right unit makes the difference between a layout that breaks and one that
          gracefully adapts to every screen size.
        </p>
        <p>
          This reference breaks CSS units into two categories — <strong>absolute</strong> and{" "}
          <strong>relative</strong> — with clear examples of when to use each. Bookmark this
          page for your next responsive design project.
        </p>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">💡 Quick Rule of Thumb</p>
          <p className="text-sm">
            Use <code className="text-xs">rem</code> for font sizes, <code className="text-xs">px</code> for
            borders/shadows, <code className="text-xs">%</code> for widths,{" "}
            <code className="text-xs">vw/vh</code> for full-screen sections, and{" "}
            <code className="text-xs">em</code> for spacing relative to the current font size.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Absolute Units
        </h2>
        <p>
          Absolute units are fixed-length values. They don&apos;t scale with the viewport,
          parent element, or font size. Use them for print stylesheets, borders, and
          situations where precision matters regardless of screen size.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Unit</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Relative to</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#f472b6]">px</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Pixel</td>
                <td className="p-3 border border-[#334155]">1px = 1/96th of 1 inch (screen)</td>
                <td className="p-3 border border-[#334155]">Borders, shadows, small precise spacing, images</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#f472b6]">pt</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Point</td>
                <td className="p-3 border border-[#334155]">1pt = 1/72nd of 1 inch</td>
                <td className="p-3 border border-[#334155]">Print stylesheets, traditional typography</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#f472b6]">pc</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Pica</td>
                <td className="p-3 border border-[#334155]">1pc = 12pt = 1/6th of 1 inch</td>
                <td className="p-3 border border-[#334155]">Print layouts (rarely used on web)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#f472b6]">cm</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Centimeter</td>
                <td className="p-3 border border-[#334155]">1cm = 37.8px (approx)</td>
                <td className="p-3 border border-[#334155]">Print stylesheets, physical measurements</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#f472b6]">mm</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Millimeter</td>
                <td className="p-3 border border-[#334155]">1mm = 1/10th of 1cm</td>
                <td className="p-3 border border-[#334155]">Print stylesheets</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#f472b6]">in</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Inch</td>
                <td className="p-3 border border-[#334155]">1in = 96px</td>
                <td className="p-3 border border-[#334155]">Print stylesheets</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#f472b6]">Q</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Quarter-millimeter</td>
                <td className="p-3 border border-[#334155]">1Q = 1/40th of 1cm</td>
                <td className="p-3 border border-[#334155]">Print, Japanese/CJK layouts</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#1e293b] border border-[#f59e0b]/30 rounded-lg p-4">
          <p className="text-xs text-[#f59e0b] mb-1">⚠️ When Not to Use px</p>
          <p className="text-sm text-[#cbd5e1]">
            Avoid <code className="text-xs">px</code> for font sizes in modern responsive design.
            Users who change their browser&apos;s default font size will see no change in
            pixel-sized text, which creates accessibility issues. Use <code className="text-xs">rem</code>{" "}
            instead — it respects the user&apos;s font size preference.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Relative Units
        </h2>
        <p>
          Relative units scale based on the context — the viewport, parent element, or root
          font size. They are the foundation of responsive and accessible design.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Font-Relative Units
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Unit</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Relative to</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">em</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Em</td>
                <td className="p-3 border border-[#334155]">Font size of the parent element</td>
                <td className="p-3 border border-[#334155]">Spacing, padding, margins relative to text size</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">rem</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Root Em</td>
                <td className="p-3 border border-[#334155]">Font size of the root (&lt;html&gt;) element</td>
                <td className="p-3 border border-[#334155]">Font sizes, spacing (accessibility-friendly)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">ch</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Character</td>
                <td className="p-3 border border-[#334155]">Width of the &apos;0&apos; character in current font</td>
                <td className="p-3 border border-[#334155]">Input widths, line length constraints</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">ex</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">X-height</td>
                <td className="p-3 border border-[#334155]">Height of the &apos;x&apos; character in current font</td>
                <td className="p-3 border border-[#334155]">Vertical alignment, inline spacing</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">ic</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Ideograph</td>
                <td className="p-3 border border-[#334155]">Width of CJK ideograph character</td>
                <td className="p-3 border border-[#334155]">Chinese/Japanese/Korean text layouts</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">lh</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Line height</td>
                <td className="p-3 border border-[#334155]">Computed line-height of the element</td>
                <td className="p-3 border border-[#334155]">Vertical rhythm, consistent spacing</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">rlh</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Root line height</td>
                <td className="p-3 border border-[#334155]">Computed line-height of the root element</td>
                <td className="p-3 border border-[#334155]">Global vertical rhythm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Viewport-Relative Units
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Unit</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Relative to</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#60a5fa]">vw</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Viewport Width</td>
                <td className="p-3 border border-[#334155]">1% of viewport width</td>
                <td className="p-3 border border-[#334155]">Full-width elements, hero sections, fluid typography</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#60a5fa]">vh</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Viewport Height</td>
                <td className="p-3 border border-[#334155]">1% of viewport height</td>
                <td className="p-3 border border-[#334155]">Full-height sections, modal overlays, sticky elements</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#60a5fa]">vmin</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Viewport Minimum</td>
                <td className="p-3 border border-[#334155]">1% of the smaller viewport dimension (width or height)</td>
                <td className="p-3 border border-[#334155]">Responsive square elements, safe sizing for all orientations</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#60a5fa]">vmax</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Viewport Maximum</td>
                <td className="p-3 border border-[#334155]">1% of the larger viewport dimension (width or height)</td>
                <td className="p-3 border border-[#334155]">Full-screen backgrounds, decorative elements</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#60a5fa]">svw / svh</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Small Viewport</td>
                <td className="p-3 border border-[#334155]">Viewport size excluding dynamic browser chrome</td>
                <td className="p-3 border border-[#334155]">Mobile-safe full-screen layouts</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#60a5fa]">lvw / lvh</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Large Viewport</td>
                <td className="p-3 border border-[#334155]">Viewport size including potential browser chrome</td>
                <td className="p-3 border border-[#334155]">When you want the full device screen regardless of UI</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#60a5fa]">dvw / dvh</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Dynamic Viewport</td>
                <td className="p-3 border border-[#334155]">Dynamically updates as browser chrome shows/hides</td>
                <td className="p-3 border border-[#334155]">Works like 100vh but handles mobile toolbar changes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#1e293b] border border-[#f59e0b]/30 rounded-lg p-4">
          <p className="text-xs text-[#f59e0b] mb-1">⚠️ Viewport Unit Gotcha on Mobile</p>
          <p className="text-sm text-[#cbd5e1]">
            On iOS Safari, <code className="text-xs">100vh</code> includes the browser toolbar
            height, which collapses when scrolling. This causes content to be taller than
            expected. Use <code className="text-xs">100dvh</code> (dynamic viewport height) or{" "}
            <code className="text-xs">100svh</code> (small viewport height) for reliable
            full-height sections on mobile.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Percentage Unit
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Unit</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Relative to</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#a855f7]">%</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Percentage</td>
                <td className="p-3 border border-[#334155]">Depends on property: width → parent width, height → parent height, font-size → parent font-size, padding/margin → <strong>parent width</strong> (even for vertical padding)</td>
                <td className="p-3 border border-[#334155]">Fluid layouts, responsive widths, aspect ratios</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#1e293b] border border-[#f59e0b]/30 rounded-lg p-4">
          <p className="text-xs text-[#f59e0b] mb-1">💡 Percentage Padding Quirk</p>
          <p className="text-sm text-[#cbd5e1]">
            When using <code className="text-xs">padding-top: 50%</code> or{" "}
            <code className="text-xs">padding-bottom: 50%</code>, the percentage is calculated
            from the <strong>parent&apos;s width</strong>, not height. This is actually useful for
            creating fixed-aspect-ratio boxes (like a 16:9 container) without JavaScript.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          When to Use Each Unit
        </h2>
        <p>
          The table below maps common CSS properties to their recommended units.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Property</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Recommended Unit</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">font-size</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">rem</td>
                <td className="p-3 border border-[#334155]">Respects user&apos;s browser font size setting. Avoids compounding issues of em.</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">padding / margin</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">rem</td>
                <td className="p-3 border border-[#334155]">Consistent spacing regardless of nested font sizes.</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">width / max-width</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">% or rem</td>
                <td className="p-3 border border-[#334155]">% for fluid layouts, rem for fixed content widths (e.g., article max-width).</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">height</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">auto (avoid fixed)</td>
                <td className="p-3 border border-[#334155]">Let content determine height. Use min-height with vh for full-screen sections.</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">border-width</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">px</td>
                <td className="p-3 border border-[#334155]">Borders should be crisp and not scale with text size.</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">border-radius</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">px or rem</td>
                <td className="p-3 border border-[#334155]">px for small radii, rem for larger rounded corners that should scale.</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">box-shadow</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">px</td>
                <td className="p-3 border border-[#334155]">Shadow blur and spread should stay crisp.</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">line-height</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">unitless (e.g., 1.5)</td>
                <td className="p-3 border border-[#334155]">Unitless values scale proportionally with font-size changes.</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">gap</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">rem</td>
                <td className="p-3 border border-[#334155]">Grid/flexbox gaps should scale with content size.</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">hero / full-screen</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">dvh</td>
                <td className="p-3 border border-[#334155]">Dynamic viewport handles mobile browser toolbar correctly.</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">fluid typography</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">clamp()</td>
                <td className="p-3 border border-[#334155]">Combine rem + vw with min/max bounds (e.g., clamp(1rem, 2.5vw, 2rem)).</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">icon sizing</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">em</td>
                <td className="p-3 border border-[#334155]">Icon scales with surrounding text size automatically.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Practical Examples
        </h2>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Fluid Typography with clamp()
        </h3>
        <p>
          The <code className="text-xs">clamp()</code> CSS function lets you set a font size that
          scales between a minimum and maximum value. This is the modern way to do responsive
          typography without media queries.
        </p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`/* Fluid heading: scales from 1.5rem to 3rem between 320px and 1200px viewports */
h1 {
  font-size: clamp(1.5rem, 1rem + 2.5vw, 3rem);
  line-height: 1.1;
}

/* Fluid body text */
p {
  font-size: clamp(0.875rem, 0.75rem + 0.5vw, 1.125rem);
  line-height: 1.6;
}`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Full-Height Hero Section (Mobile-Safe)
        </h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`.hero {
  /* dvh = dynamic viewport height — handles mobile browser toolbar */
  min-height: 100dvh;
  /* Fallback for older browsers */
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
}`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Consistent Spacing with rem
        </h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`:root {
  /* Set root font size. Browser default is 16px = 1rem */
  font-size: 100%; /* Respects user preferences */
}

.card {
  padding: 1.5rem;    /* = 24px at default font size */
  margin-bottom: 1rem; /* = 16px */
  border-radius: 0.5rem; /* = 8px */
  gap: 0.75rem;       /* = 12px grid gap */
}

h2 {
  font-size: 1.25rem; /* = 20px */
  margin-bottom: 0.5em; /* relative to h2 font size */
}`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          16:9 Aspect Ratio Box
        </h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`.aspect-16-9 {
  /* Padding % is calculated from parent width */
  /* 9/16 = 56.25% */
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
  overflow: hidden;
}

.aspect-16-9 > * {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Perfectly Centered Modal
        </h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`.modal-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
}

.modal {
  width: min(90vw, 600px);  /* 90% of viewport width, max 600px */
  max-height: 90dvh;        /* 90% of dynamic viewport height */
  overflow-y: auto;
  padding: 2rem;
  background: #fff;
  border-radius: 0.75rem;
}`}</code></pre>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          calc() in Practice
        </h2>
        <p>
          The <code className="text-xs">calc()</code> function lets you mix units freely. It&apos;s
          extremely useful for fluid layouts where you need arithmetic operations on CSS values.
        </p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`/* Sidebar + main: 250px sidebar, rest is main */
.main-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
}

/* Full-width container with fixed gutters */
.container {
  width: calc(100% - 3rem);
  max-width: 1200px;
  margin-inline: auto;
}

/* Fluid typography alternative */
h1 {
  font-size: calc(1.5rem + 2vw);
}

/* Height minus header */
.content {
  min-height: calc(100dvh - 4rem);
}

/* Background that extends beyond content area */
.hero {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}`}</code></pre>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Unit Comparison Table
        </h2>
        <p>
          A quick comparison of how different units behave at different scales. Assumes
          root font size of 16px and a 1200px wide viewport.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Value</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">px</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">rem</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">em (parent 16px)</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">vw (1200px)</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">%</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">Small</td>
                <td className="p-3 border border-[#334155]">8px</td>
                <td className="p-3 border border-[#334155]">0.5rem</td>
                <td className="p-3 border border-[#334155]">0.5em</td>
                <td className="p-3 border border-[#334155]">0.67vw</td>
                <td className="p-3 border border-[#334155]">0.67%</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">Body</td>
                <td className="p-3 border border-[#334155]">16px</td>
                <td className="p-3 border border-[#334155]">1rem</td>
                <td className="p-3 border border-[#334155]">1em</td>
                <td className="p-3 border border-[#334155]">1.33vw</td>
                <td className="p-3 border border-[#334155]">1.33%</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">Medium</td>
                <td className="p-3 border border-[#334155]">24px</td>
                <td className="p-3 border border-[#334155]">1.5rem</td>
                <td className="p-3 border border-[#334155]">1.5em</td>
                <td className="p-3 border border-[#334155]">2vw</td>
                <td className="p-3 border border-[#334155]">2%</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">Large</td>
                <td className="p-3 border border-[#334155]">32px</td>
                <td className="p-3 border border-[#334155]">2rem</td>
                <td className="p-3 border border-[#334155]">2em</td>
                <td className="p-3 border border-[#334155]">2.67vw</td>
                <td className="p-3 border border-[#334155]">2.67%</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">Heading</td>
                <td className="p-3 border border-[#334155]">48px</td>
                <td className="p-3 border border-[#334155]">3rem</td>
                <td className="p-3 border border-[#334155]">3em</td>
                <td className="p-3 border border-[#334155]">4vw</td>
                <td className="p-3 border border-[#334155]">4%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-5 mt-6">
          <p className="text-white font-semibold mb-2">🎯 Summary: Unit Decision Flow</p>
          <ul className="text-sm space-y-1.5 list-disc pl-5">
            <li><strong>font-size</strong> → <code className="text-xs">rem</code> (or <code className="text-xs">clamp()</code> for fluid scaling)</li>
            <li><strong>spacing (padding, margin, gap)</strong> → <code className="text-xs">rem</code> (consistent everywhere)</li>
            <li><strong>widths</strong> → <code className="text-xs">%</code> (fluid), <code className="text-xs">rem</code> (fixed content), <code className="text-xs">min()</code> (max bound)</li>
            <li><strong>heights</strong> → <code className="text-xs">auto</code> (preferred), <code className="text-xs">dvh</code> (full-screen)</li>
            <li><strong>borders / shadows</strong> → <code className="text-xs">px</code> (keep them crisp)</li>
            <li><strong>icon sizes</strong> → <code className="text-xs">em</code> (scale with text)</li>
            <li><strong>line-height</strong> → unitless number (always)</li>
            <li><strong>fluid typography</strong> → <code className="text-xs">clamp()</code> with <code className="text-xs">rem</code> and <code className="text-xs">vw</code></li>
            <li><strong>full viewport sections</strong> → <code className="text-xs">100dvh</code> (dynamic) or <code className="text-xs">100svh</code> (small)</li>
            <li><strong>mixed calculations</strong> → <code className="text-xs">calc()</code></li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Common Mistakes &amp; How to Avoid Them
        </h2>
        <p>
          CSS units seem simple until a layout breaks. These are the mistakes developers make
          most often — and the fixes that prevent them.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          1. Using px for Font Sizes Hurts Accessibility
        </h3>
        <p>
          <code className="text-xs">px</code> font sizes ignore the user&apos;s browser font-size
          setting, so users who increase their default font size (often for vision reasons) see
          no change on your site. Use <code className="text-xs">rem</code> for font sizes — it
          scales with the root font size — and reserve <code className="text-xs">px</code> for
          borders, shadows, and 1px hairline rules that should stay crisp.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          2. Confusing em with rem
        </h3>
        <p>
          <code className="text-xs">rem</code> is always relative to the root element font size
          (usually 16px), so it is predictable anywhere in the tree.{" "}
          <code className="text-xs">em</code> is relative to the <em>current</em> element&apos;s
          font size, and because it compounds, nested elements can produce surprising sizes: a{" "}
          <code className="text-xs">1.5em</code> padding inside a <code className="text-xs">1.5em</code>{" "}
          font becomes <code className="text-xs">2.25em</code> of effective spacing. Use{" "}
          <code className="text-xs">rem</code> for global spacing and typography; use{" "}
          <code className="text-xs">em</code> deliberately when a component should scale with its
          own font size (icons, button padding).
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          3. Using 100vh for Mobile Full-Height Sections
        </h3>
        <p>
          On mobile browsers, <code className="text-xs">100vh</code> refers to the{" "}
          <strong className="text-white">largest</strong> viewport, which includes the area hidden
          behind the URL bar — so a <code className="text-xs">100vh</code> section gets cut off or
          causes scroll jumps when the bar collapses. Use <code className="text-xs">100dvh</code>{" "}
          (dynamic viewport height) for mobile full-height layouts, with{" "}
          <code className="text-xs">100svh</code> as a fallback for older browsers.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          4. Using vw for Font Sizes Without clamp()
        </h3>
        <p>
          A headline set to <code className="text-xs">4vw</code> looks great on desktop but
          becomes unreadably small on phones and comically huge on ultrawide monitors. Wrap
          viewport units in <code className="text-xs">clamp()</code> with{" "}
          <code className="text-xs">rem</code> bounds:{" "}
          <code className="text-xs">{`font-size: clamp(1.5rem, 4vw, 3rem)`}</code>. This gives you
          fluid scaling without ever crossing accessibility limits.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          5. Expecting Percentage Heights to "Just Work"
        </h3>
        <p>
          <code className="text-xs">height: 50%</code> only works when the parent has an explicit
          height (not <code className="text-xs">auto</code>). A common trap is setting a child to{" "}
          <code className="text-xs">100%</code> inside a parent whose height comes from content —
          the percentage resolves to <code className="text-xs">auto</code> and the layout collapses.
          If the parent&apos;s height is content-driven, use flexbox/grid stretch,{" "}
          <code className="text-xs">min-height</code>, or viewport units instead of percentages.
        </p>

        <section className="mt-10 pt-8 border-t border-[#334155]">
          <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
                <span>What is the difference between px and rem?</span>
                <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
                <code className="text-xs">px</code> is an absolute unit — 1px is 1/96th of an
                inch on screen — so it never changes regardless of browser settings.{" "}
                <code className="text-xs">rem</code> is relative to the root element font size
                (usually 16px, so <code className="text-xs">1rem</code> = 16px). Because{" "}
                <code className="text-xs">rem</code> scales when users change their browser&apos;s
                default font size, it is the recommended unit for font sizes, padding, and margin.
                Use <code className="text-xs">px</code> for borders and shadows that must stay
                visually identical at any zoom level.
              </div>
            </details>

            <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
                <span>What is the difference between em and rem?</span>
                <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
                <code className="text-xs">rem</code> is relative to the <strong className="text-white">root</strong>{" "}
                element font size, so <code className="text-xs">1rem</code> is the same everywhere
                in the document. <code className="text-xs">em</code> is relative to the{" "}
                <strong className="text-white">current element&apos;s</strong> font size, and it
                compounds through nesting — a <code className="text-xs">2em</code> margin inside a{" "}
                <code className="text-xs">1.5em</code> font resolves to{" "}
                <code className="text-xs">3em</code>. This makes <code className="text-xs">em</code>{" "}
                great for components that should scale with their own text (icon sizes, button
                padding) and <code className="text-xs">rem</code> better for site-wide spacing and
                typography.
              </div>
            </details>

            <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
                <span>When should I use vw and vh?</span>
                <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
                <code className="text-xs">vw</code> and <code className="text-xs">vh</code> are 1%
                of the viewport width and height. Use them for full-screen hero sections, overlays,
                and fluid typography inside <code className="text-xs">clamp()</code>. Avoid raw{" "}
                <code className="text-xs">vh</code> for mobile heights — the URL bar changes the
                visible viewport, so use <code className="text-xs">100dvh</code> (dynamic) or{" "}
                <code className="text-xs">100svh</code> (small) instead. For widths, prefer{" "}
                <code className="text-xs">%</code> when the size should relate to a container
                rather than the whole viewport.
              </div>
            </details>

            <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
                <span>Should I use px or rem for font sizes?</span>
                <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
                Use <code className="text-xs">rem</code>. Because <code className="text-xs">rem</code>{" "}
                is relative to the root font size, it respects the user&apos;s browser font-size
                preference — a core accessibility requirement. <code className="text-xs">px</code>{" "}
                ignores that setting, which can make your text impossible to resize for users with
                low vision. A common pattern is setting the root font size in{" "}
                <code className="text-xs">rem</code> (or leaving it at the default 16px) and sizing
                everything else in <code className="text-xs">rem</code>, with{" "}
                <code className="text-xs">clamp()</code> for fluid type.
              </div>
            </details>

            <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
                <span>What is the difference between vh, svh, lvh, and dvh?</span>
                <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
                These are the four viewport-height units. <code className="text-xs">vh</code> equals
                1% of the <strong className="text-white">largest</strong> viewport — on mobile that
                includes the area hidden behind the browser UI. <code className="text-xs">svh</code>{" "}
                is the <strong className="text-white">small</strong> viewport (visible area when the
                URL bar is shown), <code className="text-xs">lvh</code> is the{" "}
                <strong className="text-white">large</strong> viewport (URL bar hidden), and{" "}
                <code className="text-xs">dvh</code> is the{" "}
                <strong className="text-white">dynamic</strong> viewport, which updates live as the
                browser UI expands and collapses. For mobile full-height sections,{" "}
                <code className="text-xs">100dvh</code> gives the smoothest behavior, with{" "}
                <code className="text-xs">100svh</code> as a fallback.
              </div>
            </details>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the difference between px and rem?","acceptedAnswer":{"@type":"Answer","text":"px is an absolute unit equal to 1/96th of an inch on screen and never changes with browser settings. rem is relative to the root element font size, usually 16px, so 1rem equals 16px. rem scales when users change their browser default font size, making it the recommended unit for font sizes, padding, and margin. Use px for borders and shadows."}},{"@type":"Question","name":"What is the difference between em and rem?","acceptedAnswer":{"@type":"Answer","text":"rem is relative to the root element font size, so 1rem is the same everywhere in the document. em is relative to the current element font size and compounds through nesting, so a 2em margin inside a 1.5em font resolves to 3em. Use em for components that scale with their own font size and rem for site-wide spacing and typography."}},{"@type":"Question","name":"When should I use vw and vh?","acceptedAnswer":{"@type":"Answer","text":"vw and vh are 1% of the viewport width and height. Use them for full-screen hero sections, overlays, and fluid typography inside clamp(). Avoid raw vh for mobile heights because the URL bar changes the visible viewport; use 100dvh or 100svh instead. Prefer percent for widths that relate to a container."}},{"@type":"Question","name":"Should I use px or rem for font sizes?","acceptedAnswer":{"@type":"Answer","text":"Use rem. rem is relative to the root font size, so it respects the user browser font-size preference, a core accessibility requirement. px ignores that setting, which can make text impossible to resize for users with low vision. Use clamp() for fluid type."}},{"@type":"Question","name":"What is the difference between vh, svh, lvh, and dvh?","acceptedAnswer":{"@type":"Answer","text":"vh is 1% of the largest viewport, which on mobile includes the area hidden behind the browser UI. svh is the small viewport, lvh is the large viewport, and dvh is the dynamic viewport that updates as the browser UI expands and collapses. Use 100dvh for mobile full-height sections with 100svh as a fallback."}}]}',
          }}
        />

        <div className="border-t border-[#334155] pt-6 mt-8">
          <p className="text-xs text-[#64748b]">
            <strong>Related Tools:</strong>{" "}
            <a href="/tools/json-formatter" className="text-[#3b82f6] hover:text-blue-300">JSON Formatter</a>
            {" · "}
            <a href="/tools/base64" className="text-[#3b82f6] hover:text-blue-300">Base64 Encoder/Decoder</a>
            {" · "}
            <a href="/tools/regex-tester" className="text-[#3b82f6] hover:text-blue-300">Regex Tester</a>
          </p>
        </div>
      </div>
    </article>
  );
}
