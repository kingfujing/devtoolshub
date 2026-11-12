---
title: "HTML Entities Reference: Every Escape Code You Need"
description: "Complete HTML entities reference with escape codes. Find common symbols, special characters, currency signs, arrows, and mathematical ope..."
tags: [webdev, html, tutorial, beginners]
canonical_url: https://devtoolshub.cloud/blog/html-entities-reference
published: true
cover_image: https://devtoolshub.cloud/og-devto-cover.png
---

> Originally published on [DevToolsHub](https://devtoolshub.cloud/blog/html-entities-reference) — free, privacy-first online tools for developers.

HTML entities (also called character entities or escape codes) let you display
          reserved characters, special symbols, and invisible characters in HTML documents.
          Whether you need to show a literal `<` without
          triggering a tag, display a copyright symbol, or include an arrow in your UI,
          this reference has the code.



          Each table below lists the entity name, numeric code (decimal and hex), and the
          rendered character. Bookmark this page for quick lookup during frontend development.



> **💡 How to Use** Use entity names like & or numeric
 codes like &#38; or
 &#x26; directly in your HTML. Most modern
 editors suggest entity names as you type.


## Common Symbols


          These are the most frequently used HTML entities. Every developer should know
          `&amp;`, `<`,
          `>`, and ` `
          by heart.



| Character | Entity Name | Decimal Code | Hex Code | Description |
| --- | --- | --- | --- | --- |
| & | & | &#38; | &#x26; | Ampersand (must escape in HTML) |
| < | < | &#60; | &#x3C; | Less than (opens HTML tags) |
| > | > | &#62; | &#x3E; | Greater than (closes HTML tags) |
| " | " | &#34; | &#x22; | Double quote (attribute delimiters) |
| ' | ' | &#39; | ' | Apostrophe / single quote |
|  |  | &#160; | &#xA0; | Non-breaking space (prevents line break) |
| © | &copy; | &#169; | &#xA9; | Copyright symbol |
| ® | &reg; | &#174; | &#xAE; | Registered trademark |
| ™ | &trade; | &#8482; | &#x2122; | Trademark symbol |
| § | &sect; | &#167; | &#xA7; | Section symbol |
| ¶ | &para; | &#182; | &#xB6; | Pilcrow / paragraph mark |
| ° | &deg; | &#176; | &#xB0; | Degree symbol |
| † | &dagger; | &#8224; | &#x2020; | Dagger (footnotes) |
| ‡ | &Dagger; | &#8225; | &#x2021; | Double dagger |
| • | &bull; | &#8226; | &#x2022; | Bullet point |
| … | … | &#8230; | &#x2026; | Horizontal ellipsis |
| ‰ | &permil; | &#8240; | &#x2030; | Per mille (per thousand) |
| ℠ | &scaps; | &#8480; | &#x2120; | Service mark |


## Currency Symbols


          Display currency signs from around the world. Note that some symbols (like the
          Bitcoin sign) may not render in older browsers without a numeric code.



| Character | Entity Name | Decimal Code | Hex Code | Description |
| --- | --- | --- | --- | --- |
| $ | (none needed) | &#36; | &#x24; | Dollar (not reserved, no entity needed) |
| ¢ | &cent; | &#162; | &#xA2; | Cent |
| £ | &pound; | &#163; | &#xA3; | Pound sterling |
| ¤ | &curren; | &#164; | &#xA4; | Generic currency |
| ¥ | &yen; | &#165; | &#xA5; | Yen / Yuan |
| € | &euro; | &#8364; | &#x20AC; | Euro |
| ₤ | &lira; | &#8356; | &#x20A4; | Lira sign |
| ₱ | (none) | &#8369; | &#x20B1; | Philippine peso |
| ₹ | (none) | &#8377; | &#x20B9; | Indian rupee |
| ₩ | (none) | &#8361; | &#x20A9; | South Korean won |
| ₪ | (none) | &#8362; | &#x20AA; | Israeli shekel |
| ₫ | (none) | &#8363; | &#x20AB; | Vietnamese dong |
| ₮ | (none) | &#8366; | &#x20AE; | Mongolian tugrik |
| ₽ | (none) | &#8381; | &#x20BD; | Russian ruble |
| ₿ | (none) | &#8383; | &#x20BF; | Bitcoin |
| ₣ | (none) | &#8355; | &#x20A3; | French franc |


## Arrows


          Arrow symbols for navigation, direction indicators, and UI elements. Both simple
          and double-lined variants are available.



| Character | Entity Name | Decimal Code | Hex Code | Description |
| --- | --- | --- | --- | --- |
| ← | ← | &#8592; | &#x2190; | Left arrow |
| ↑ | &uarr; | &#8593; | &#x2191; | Up arrow |
| → | → | &#8594; | &#x2192; | Right arrow |
| ↓ | &darr; | &#8595; | &#x2193; | Down arrow |
| ↔ | &harr; | &#8596; | &#x2194; | Left-right arrow |
| ↕ | &varr; | &#8597; | &#x2195; | Up-down arrow |
| ↖ | &nwarr; | &#8598; | &#x2196; | North-west arrow |
| ↗ | &nearr; | &#8599; | &#x2197; | North-east arrow |
| ↘ | &searr; | &#8600; | &#x2198; | South-east arrow |
| ↙ | &swarr; | &#8601; | &#x2199; | South-west arrow |
| ⇐ | &lArr; | &#8656; | &#x21D0; | Left double arrow |
| ⇒ | &rArr; | &#8658; | &#x21D2; | Right double arrow (implies) |
| ⇔ | &hArr; | &#8660; | &#x21D4; | Left-right double arrow (iff) |
| ► | &rtrif; | &#9656; | &#x25B6; | Right-pointing triangle |
| ◄ | &ltrif; | &#9664; | &#x25C0; | Left-pointing triangle |
| ▲ | &utrif; | &#9652; | &#x25B4; | Up-pointing triangle |
| ▼ | &dtrif; | &#9662; | &#x25BE; | Down-pointing triangle |


## Mathematical Operators & Symbols


          Common math symbols for equations, comparisons, fractions, and logic. Use numeric
          codes for symbols without named entities.



| Character | Entity Name | Decimal Code | Hex Code | Description |
| --- | --- | --- | --- | --- |
| × | × | &#215; | &#xD7; | Multiplication sign |
| ÷ | &divide; | &#247; | &#xF7; | Division sign |
| ± | &plusmn; | &#177; | &#xB1; | Plus-minus |
| − | &minus; | &#8722; | &#x2212; | Minus sign (not hyphen) |
| ∑ | &sum; | &#8721; | &#x2211; | N-ary summation |
| ∏ | &prod; | &#8719; | &#x220F; | N-ary product |
| ∫ | &int; | &#8747; | &#x222B; | Integral |
| √ | &radic; | &#8730; | &#x221A; | Square root |
| ∞ | &infin; | &#8734; | &#x221E; | Infinity |
| ∠ | &ang; | &#8736; | &#x2220; | Angle |
| ⊥ | &perp; | &#8869; | &#x22A5; | Perpendicular / up tack |
| ∴ | &there4; | &#8756; | &#x2234; | Therefore |
| ∵ | &becaus; | &#8757; | &#x2235; | Because |
| ∼ | &sim; | &#8764; | &#x223C; | Tilde operator (similar to) |
| ≅ | &cong; | &#8773; | &#x2245; | Approximately equal to |
| ≈ | &asymp; | &#8776; | &#x2248; | Almost equal to |
| ≠ | &ne; | &#8800; | &#x2260; | Not equal to |
| ≡ | &equiv; | &#8801; | &#x2261; | Identical to |
| ≤ | &le; | &#8804; | &#x2264; | Less-than or equal to |
| ≥ | &ge; | &#8805; | &#x2265; | Greater-than or equal to |
| ½ | &frac12; | &#189; | &#xBD; | Fraction one-half |
| ¼ | &frac14; | &#188; | &#xBC; | Fraction one-quarter |
| ¾ | &frac34; | &#190; | &#xBE; | Fraction three-quarters |
| π | &pi; | &#960; | &#x3C0; | Greek pi |
| μ | &mu; | &#956; | &#x3BC; | Mu (micro symbol) |


## Punctuation & Special Characters


          Dashes, quotes, spaces, and other typographic characters for polished text.



| Character | Entity Name | Decimal Code | Hex Code | Description |
| --- | --- | --- | --- | --- |
| – | &ndash; | &#8211; | &#x2013; | En dash (number ranges) |
| — | — | &#8212; | &#x2014; | Em dash (parenthetical) |
| ‘ | &lsquo; | &#8216; | &#x2018; | Left single quotation mark |
| ’ | &rsquo; | &#8217; | &#x2019; | Right single quotation mark |
| “ | &ldquo; | &#8220; | &#x201C; | Left double quotation mark |
| ” | &rdquo; | &#8221; | &#x201D; | Right double quotation mark |
| « | &laquo; | &#171; | &#xAB; | Left-pointing double angle (guillemet) |
| » | &raquo; | &#187; | &#xBB; | Right-pointing double angle (guillemet) |
| ‹ | &lsaquo; | &#8249; | &#x2039; | Single left-pointing angle quote |
| › | &rsaquo; | &#8250; | &#x203A; | Single right-pointing angle quote |
| ¡ | &iexcl; | &#161; | &#xA1; | Inverted exclamation mark |
| ¿ | &iquest; | &#191; | &#xBF; | Inverted question mark |
| ¦ | &brvbar; | &#166; | &#xA6; | Broken vertical bar |
| ¬ | &not; | &#172; | &#xAC; | Not sign |
| ­ | &shy; | &#173; | &#xAD; | Soft hyphen |
|  | &ensp; | &#8194; | &#x2002; | En space (half an em) |
|  | &emsp; | &#8195; | &#x2003; | Em space (width of capital M) |
|  | &thinsp; | &#8201; | &#x2009; | Thin space |


## Greek Letters (Common)


          Frequently used Greek letters in math, science, and engineering contexts.



| Character | Entity Name | Decimal Code | Hex Code | Description |
| --- | --- | --- | --- | --- |
| α | &alpha; | &#945; | &#x3B1; | Alpha |
| β | &beta; | &#946; | &#x3B2; | Beta |
| γ | &gamma; | &#947; | &#x3B3; | Gamma |
| δ | &delta; | &#948; | &#x3B4; | Delta |
| ε | &epsilon; | &#949; | &#x3B5; | Epsilon |
| θ | &theta; | &#952; | &#x3B8; | Theta |
| λ | &lambda; | &#955; | &#x3BB; | Lambda |
| σ | &sigma; | &#963; | &#x3C3; | Sigma |
| φ | &phi; | &#966; | &#x3C6; | Phi |
| ω | &omega; | &#969; | &#x3C9; | Omega |


> **** 🎯 Quick Reference: Most Common Entities


 &
 &


              <

              `<`


              >

              `>`


              "

              `&quot;`




              ` `


              ©

              `&copy;`


              ®

              `&reg;`


              €

              `&euro;`





## Common Mistakes & How to Avoid Them


          Entities look simple, but a few recurring mistakes cause broken pages, escaped-looking
          text, and subtle layout bugs. Here are the five most common ones.



### 1. Forgetting to escape the ampersand itself


          The `&amp;` entity is special: because
          `&` starts every entity, a literal ampersand in your
          text (like `AT&T` or
          `R&D`) must be written as
          `&amp;`. Otherwise the browser may try to parse
          `&T` or `&D` as an
          entity and render unexpected characters.



```html
<!-- BUG: ambiguous, may render wrong -->
Acme & Sons

<!-- FIX: escape the ampersand -->
Acme & Sons

```


### 2. Dropping the trailing semicolon


          Writing `&copy` without the semicolon works in HTML5 in
          some contexts but is invalid in XHTML and risky inside attribute values. Always include the
          semicolon: `&copy;`. The same applies to numeric
          references — `&#169;` is correct,
          `&#169` is not.



### 3. Double-escaping entities


          If your page shows `&amp;lt;` as literal text instead of
          a `<` character, the content was escaped twice — once by
          your template engine or framework (React, Vue, Handlebars escape by default), then again by
          you. Pick one layer: let the framework escape user input, and never feed already-escaped
          strings into `dangerouslySetInnerHTML` or
          `innerHTML`.



```css
// BUG: React already escapes, so this renders "<" as text

// FIX: write the raw character — React escapes it safely

// BUG: double-escaping user input for innerHTML
el.innerHTML = escapeHtml(userInput).replace(/&/g, '&');
```


### 4. Using   for layout spacing


          Stacking ` ` entities to indent or align text works
          visually but breaks on narrow screens and with different font metrics. A non-breaking space
          also stops text from wrapping, which can push layout unexpectedly. Use CSS
          `margin`, `padding`, or
          `gap` for spacing instead — reserve
          ` ` for keeping two words on the same line (for
          example, "10 kg" or "Chapter 5").



### 5. Confusing decimal and hex numeric references


          `&#38;` (decimal) and
          `&#x26;` (hex) both render
          `&`, but they are not interchangeable digits. Writing
          `&#x38;` renders the character `8`,
          not `&`. Check the prefix:
          `#x` means hexadecimal, plain
          `#` means decimal.




## Frequently Asked Questions



### Why use HTML entities instead of typing the character directly?

Three reasons: reserved characters like
                <, >, and
                & would be interpreted as markup;
                encoding safety — an entity works even if the file encoding drops
                the character (for example, a smart quote in a document declared as ASCII); and
                reliability — invisible characters such as the non-breaking space
                are hard to type and easy to mistake for a regular space.


### What is the difference between   and a regular space?

A non-breaking space ( , U+00A0) prevents
                the browser from wrapping a line at that point, so "10 kg" stays together. It also
                does not collapse: HTML collapses runs of regular spaces into one, but multiple
                  entities each keep their width, which is
                why they are often misused for indentation. Use them for preventing breaks, not for
                layout.


### What is the difference between &, &#38;, and &#x26;?

All three render the same & character.
                & is the named entity — readable but only
                available for characters that have a defined name. &#38;
                is the decimal numeric reference and &#x26; the
                hex one; numeric references work for any Unicode code point, even ones without a
                name. Use named entities for readability and numeric references for obscure symbols.


### Do I need to escape quotes inside HTML attributes?

Only the quote that delimits the attribute needs escaping: in
                <a title="Say "hi""> the
                inner double quotes must be ". Inside text
                content, quotes are harmless and do not need escaping. Escaping them everywhere is
                never wrong, but it makes source harder to read — escape only where required, and
                prefer single quotes as attribute delimiters when the value contains double quotes.


### Why does my page show < as literal text instead of <?

The text was escaped twice. If you write <
                in your source, the browser parses & into
                & and shows the literal text
                <. This usually happens when a template
                engine or framework that already escapes output receives pre-escaped input, or when
                user input is escaped more than once. Escape at exactly one layer.








            **Related Tools:**
            [Base64 Encoder/Decoder](https://devtoolshub.cloud/tools/base64)

            [JSON Formatter](https://devtoolshub.cloud/tools/json-formatter)

            [Regex Tester](https://devtoolshub.cloud/tools/regex-tester)
