---
title: "CSS Units Cheat Sheet: px, em, rem, vh, and When to Use Each"
description: "A complete reference for CSS units: absolute vs relative, px vs rem vs em, viewport units, ch and ex, practical sizing rules, common mistakes, and a decision framework for responsive design."
tags: [webdev, css, tutorial, beginners]
canonical_url: https://devtoolshub.cloud/blog/css-units-cheat-sheet
published: true
cover_image: https://devtoolshub.cloud/og-devto-cover.png
---

> Originally published on [DevToolsHub](https://devtoolshub.cloud/blog/css-units-cheat-sheet) — free, privacy-first online tools for developers.

CSS units can be confusing. Should you use `px` or `rem`? When does `vw` make sense? What about `ch` and `ex`? Picking the right unit makes the difference between a layout that breaks and one that gracefully adapts to every screen size.

This reference breaks CSS units into two categories — **absolute** and **relative** — with clear examples of when to use each. Bookmark this page for your next responsive design project.

> 💡 **Quick Rule of Thumb**
>
> Use `rem` for font sizes, `px` for borders/shadows, `%` for widths, `vw/vh` for full-screen sections, and `em` for spacing relative to the current font size.

## Absolute Units

Absolute units are fixed-length values. They don't scale with the viewport, parent element, or font size. Use them for print stylesheets, borders, and situations where precision matters regardless of screen size.

| Unit | Name | Relative to | Best For |
|------|------|-------------|----------|
| `px` | Pixel | 1px = 1/96th of 1 inch (screen) | Borders, shadows, small precise spacing, images |
| `pt` | Point | 1pt = 1/72nd of 1 inch | Print stylesheets, traditional typography |
| `pc` | Pica | 1pc = 12pt = 1/6th of 1 inch | Print layouts (rarely used on web) |
| `cm` | Centimeter | 1cm = 37.8px (approx) | Print stylesheets, physical measurements |
| `mm` | Millimeter | 1mm = 1/10th of 1cm | Print stylesheets |
| `in` | Inch | 1in = 96px | Print stylesheets |
| `Q` | Quarter-millimeter | 1Q = 1/40th of 1cm | Print, Japanese/CJK layouts |

> ⚠️ **When Not to Use px**
>
> Avoid `px` for font sizes in modern responsive design. Users who change their browser's default font size will see no change in pixel-sized text, which creates accessibility issues. Use `rem` instead — it respects the user's font size preference.

## Relative Units

Relative units scale based on the context — the viewport, parent element, or root font size. They are the foundation of responsive and accessible design.

### Font-Relative Units

| Unit | Name | Relative to | Best For |
|------|------|-------------|----------|
| `em` | Em | Font size of the parent element | Spacing, padding, margins relative to text size |
| `rem` | Root Em | Font size of the root (`<html>`) element | Font sizes, spacing (accessibility-friendly) |
| `ch` | Character | Width of the '0' character in current font | Input widths, line length constraints |
| `ex` | X-height | Height of the 'x' character in current font | Vertical alignment, inline spacing |
| `ic` | Ideograph | Width of CJK ideograph character | Chinese/Japanese/Korean text layouts |
| `lh` | Line height | Computed line-height of the element | Vertical rhythm, consistent spacing |
| `rlh` | Root line height | Computed line-height of the root element | Global vertical rhythm |

### Viewport-Relative Units

| Unit | Name | Relative to | Best For |
|------|------|-------------|----------|
| `vw` | Viewport Width | 1% of viewport width | Full-width elements, hero sections, fluid typography |
| `vh` | Viewport Height | 1% of viewport height | Full-height sections, modal overlays, sticky elements |
| `vmin` | Viewport Minimum | 1% of the smaller viewport dimension (width or height) | Responsive square elements, safe sizing for all orientations |
| `vmax` | Viewport Maximum | 1% of the larger viewport dimension (width or height) | Full-screen backgrounds, decorative elements |
| `svw` / `svh` | Small Viewport | Viewport size excluding dynamic browser chrome | Mobile-safe full-screen layouts |
| `lvw` / `lvh` | Large Viewport | Viewport size including potential browser chrome | When you want the full device screen regardless of UI |
| `dvw` / `dvh` | Dynamic Viewport | Dynamically updates as browser chrome shows/hides | Works like 100vh but handles mobile toolbar changes |

> ⚠️ **Viewport Unit Gotcha on Mobile**
>
> On iOS Safari, `100vh` includes the browser toolbar height, which collapses when scrolling. This causes content to be taller than expected. Use `100dvh` (dynamic viewport height) or `100svh` (small viewport height) for reliable full-height sections on mobile.

### Percentage Unit

| Unit | Name | Relative to | Best For |
|------|------|-------------|----------|
| `%` | Percentage | Depends on property: width → parent width, height → parent height, font-size → parent font-size, padding/margin → **parent width** (even for vertical padding) | Fluid layouts, responsive widths, aspect ratios |

> 💡 **Percentage Padding Quirk**
>
> When using `padding-top: 50%` or `padding-bottom: 50%`, the percentage is calculated from the **parent's width**, not height. This is actually useful for creating fixed-aspect-ratio boxes (like a 16:9 container) without JavaScript.

## When to Use Each Unit

The table below maps common CSS properties to their recommended units.

| Property | Recommended Unit | Why |
|----------|------------------|-----|
| `font-size` | `rem` | Respects user's browser font size setting. Avoids compounding issues of em. |
| `padding / margin` | `rem` | Consistent spacing regardless of nested font sizes. |
| `width / max-width` | `% or rem` | % for fluid layouts, rem for fixed content widths (e.g., article max-width). |
| `height` | `auto (avoid fixed)` | Let content determine height. Use min-height with vh for full-screen sections. |
| `border-width` | `px` | Borders should be crisp and not scale with text size. |
| `border-radius` | `px or rem` | px for small radii, rem for larger rounded corners that should scale. |
| `box-shadow` | `px` | Shadow blur and spread should stay crisp. |
| `line-height` | `unitless (e.g., 1.5)` | Unitless values scale proportionally with font-size changes. |
| `gap` | `rem` | Grid/flexbox gaps should scale with content size. |
| `hero / full-screen` | `dvh` | Dynamic viewport handles mobile browser toolbar correctly. |
| `fluid typography` | `clamp()` | Combine rem + vw with min/max bounds (e.g., clamp(1rem, 2.5vw, 2rem)). |
| `icon sizing` | `em` | Icon scales with surrounding text size automatically. |

## Practical Examples

### Fluid Typography with clamp()

The `clamp()` CSS function lets you set a font size that scales between a minimum and maximum value. This is the modern way to do responsive typography without media queries.

```css
/* Fluid heading: scales from 1.5rem to 3rem between 320px and 1200px viewports */
h1 {
  font-size: clamp(1.5rem, 1rem + 2.5vw, 3rem);
  line-height: 1.1;
}

/* Fluid body text */
p {
  font-size: clamp(0.875rem, 0.75rem + 0.5vw, 1.125rem);
  line-height: 1.6;
}
```

### Full-Height Hero Section (Mobile-Safe)

```css
.hero {
  /* dvh = dynamic viewport height — handles mobile browser toolbar */
  min-height: 100dvh;
  /* Fallback for older browsers */
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Consistent Spacing with rem

```css
:root {
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
}
```

### 16:9 Aspect Ratio Box

```css
.aspect-16-9 {
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
}
```

### Perfectly Centered Modal

```css
.modal-overlay {
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
}
```

## calc() in Practice

The `calc()` function lets you mix units freely. It's extremely useful for fluid layouts where you need arithmetic operations on CSS values.

```css
/* Sidebar + main: 250px sidebar, rest is main */
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
}
```

## Unit Comparison Table

A quick comparison of how different units behave at different scales. Assumes root font size of 16px and a 1200px wide viewport.

| Value | px | rem | em (parent 16px) | vw (1200px) | % |
|-------|----|----|------------------|-------------|---|
| Small | 8px | 0.5rem | 0.5em | 0.67vw | 0.67% |
| Body | 16px | 1rem | 1em | 1.33vw | 1.33% |
| Medium | 24px | 1.5rem | 1.5em | 2vw | 2% |
| Large | 32px | 2rem | 2em | 2.67vw | 2.67% |
| Heading | 48px | 3rem | 3em | 4vw | 4% |

> 🎯 **Summary: Unit Decision Flow**
>
> - **font-size** → `rem` (or `clamp()` for fluid scaling)
> - **spacing (padding, margin, gap)** → `rem` (consistent everywhere)
> - **widths** → `%` (fluid), `rem` (fixed content), `min()` (max bound)
> - **heights** → `auto` (preferred), `dvh` (full-screen)
> - **borders / shadows** → `px` (keep them crisp)
> - **icon sizes** → `em` (scale with text)
> - **line-height** → unitless number (always)
> - **fluid typography** → `clamp()` with `rem` and `vw`
> - **full viewport sections** → `100dvh` (dynamic) or `100svh` (small)
> - **mixed calculations** → `calc()`

## Common Mistakes & How to Avoid Them

CSS units seem simple until a layout breaks. These are the mistakes developers make most often — and the fixes that prevent them.

### 1. Using px for Font Sizes Hurts Accessibility

`px` font sizes ignore the user's browser font-size setting, so users who increase their default font size (often for vision reasons) see no change on your site. Use `rem` for font sizes — it scales with the root font size — and reserve `px` for borders, shadows, and 1px hairline rules that should stay crisp.

### 2. Confusing em with rem

`rem` is always relative to the root element font size (usually 16px), so it is predictable anywhere in the tree. `em` is relative to the *current* element's font size, and because it compounds, nested elements can produce surprising sizes: a `1.5em` padding inside a `1.5em` font becomes `2.25em` of effective spacing. Use `rem` for global spacing and typography; use `em` deliberately when a component should scale with its own font size (icons, button padding).

### 3. Using 100vh for Mobile Full-Height Sections

On mobile browsers, `100vh` refers to the **largest** viewport, which includes the area hidden behind the URL bar — so a `100vh` section gets cut off or causes scroll jumps when the bar collapses. Use `100dvh` (dynamic viewport height) for mobile full-height layouts, with `100svh` as a fallback for older browsers.

### 4. Using vw for Font Sizes Without clamp()

A headline set to `4vw` looks great on desktop but becomes unreadably small on phones and comically huge on ultrawide monitors. Wrap viewport units in `clamp()` with `rem` bounds: `font-size: clamp(1.5rem, 4vw, 3rem)`. This gives you fluid scaling without ever crossing accessibility limits.

### 5. Expecting Percentage Heights to "Just Work"

`height: 50%` only works when the parent has an explicit height (not `auto`). A common trap is setting a child to `100%` inside a parent whose height comes from content — the percentage resolves to `auto` and the layout collapses. If the parent's height is content-driven, use flexbox/grid stretch, `min-height`, or viewport units instead of percentages.

## Frequently Asked Questions

### What is the difference between px and rem?

`px` is an absolute unit — 1px is 1/96th of an inch on screen — so it never changes regardless of browser settings. `rem` is relative to the root element font size (usually 16px, so `1rem` = 16px). Because `rem` scales when users change their browser's default font size, it is the recommended unit for font sizes, padding, and margin. Use `px` for borders and shadows that must stay visually identical at any zoom level.

### What is the difference between em and rem?

`rem` is relative to the **root** element font size, so `1rem` is the same everywhere in the document. `em` is relative to the **current element's** font size, and it compounds through nesting — a `2em` margin inside a `1.5em` font resolves to `3em`. This makes `em` great for components that should scale with their own text (icon sizes, button padding) and `rem` better for site-wide spacing and typography.

### When should I use vw and vh?

`vw` and `vh` are 1% of the viewport width and height. Use them for full-screen hero sections, overlays, and fluid typography inside `clamp()`. Avoid raw `vh` for mobile heights — the URL bar changes the visible viewport, so use `100dvh` (dynamic) or `100svh` (small) instead. For widths, prefer `%` when the size should relate to a container rather than the whole viewport.

### Should I use px or rem for font sizes?

Use `rem`. Because `rem` is relative to the root font size, it respects the user's browser font-size preference — a core accessibility requirement. `px` ignores that setting, which can make your text impossible to resize for users with low vision. A common pattern is setting the root font size in `rem` (or leaving it at the default 16px) and sizing everything else in `rem`, with `clamp()` for fluid type.

### What is the difference between vh, svh, lvh, and dvh?

These are the four viewport-height units. `vh` equals 1% of the **largest** viewport — on mobile that includes the area hidden behind the browser UI. `svh` is the **small** viewport (visible area when the URL bar is shown), `lvh` is the **large** viewport (URL bar hidden), and `dvh` is the **dynamic** viewport, which updates live as the browser UI expands and collapses. For mobile full-height sections, `100dvh` gives the smoothest behavior, with `100svh` as a fallback.

## Try It Yourself

If this cheat sheet helped you clean up your CSS, try the free developer tools on DevToolsHub. The [Color Converter](https://devtoolshub.cloud/tools/color-converter) is handy when you're writing CSS that mixes `hex`, `rgb()`, and `hsl()` values alongside your unit choices, and the [JSON Formatter](https://devtoolshub.cloud/tools/json-formatter) is a quick way to tidy up the design tokens and theme config files where your spacing and typography scales live. Both run entirely in your browser — no sign-up, no tracking.

**Related Tools:** [Color Converter](https://devtoolshub.cloud/tools/color-converter) · [JSON Formatter](https://devtoolshub.cloud/tools/json-formatter) · [Base64 Encoder/Decoder](https://devtoolshub.cloud/tools/base64) · [Regex Tester](https://devtoolshub.cloud/tools/regex-tester)
