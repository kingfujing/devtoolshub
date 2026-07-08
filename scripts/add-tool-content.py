#!/usr/bin/env python3
"""Add About This Tool + FAQ section to all 9 tool pages."""

import os

BASE = "/root/projects/devtoolshub/src/app/tools"

# About content for each tool
ABOUT = {
    "json-formatter": """A JSON formatter is an essential tool for every developer working with APIs, configuration files, and data exchange. This free online JSON formatter lets you beautify, compress, and validate JSON data instantly — all in your browser.

Common use cases include debugging API responses during development, formatting configuration files like <code>package.json</code> or <code>tsconfig.json</code>, validating JSON before importing it into a database, and sharing formatted JSON snippets with your team. Whether you're preparing a bug report that includes API output or just need to read a messy JSON blob, this tool makes it clean and readable.

The JSON formatter supports adjustable indentation (2 spaces, 4 spaces, 1 space, or minified), real-time error detection with descriptive messages, and one-click copy of the output.""",

    "base64": """Base64 encoding is a fundamental technique that converts binary data into ASCII text, making it safe for transmission over text-based protocols like HTTP, email, and JSON. This free online Base64 encoder/decoder handles everything from short strings to complex data with full Unicode support.

Developers use Base64 encoding for embedding images as data URIs in HTML and CSS, encoding binary data in JSON payloads, handling JWT token parts (header and payload are Base64url-encoded), and storing binary content in text-based databases. The decoder mode is equally useful for inspecting encoded data or debugging API responses.

This tool fully supports Chinese characters, emoji, and Unicode — things that many basic Base64 tools get wrong. All processing happens in your browser with zero server uploads.""",

    "regex-tester": """Regular expressions are powerful pattern-matching tools used for text validation, search, and replacement. This free online regex tester provides real-time matching with live highlighting — type your pattern and see results instantly, no button clicking needed.

Use this tool to debug complex regex patterns before deploying them in production code, learn how different regex flags (global, case-insensitive, multiline, dotall) affect matching, test named capture groups, and experiment with Unicode property escapes.

It supports all major regex flags (g, i, m, s, u, y), real-time match highlighting with color-coded captures, and handles everything from simple email validation to complex multiline patterns. The debounced input ensures smooth performance even with large test strings.""",

    "uuid-generator": """Universally Unique Identifiers (UUIDs) are 128-bit identifiers used across software development for database primary keys, session tokens, API resource identifiers, and distributed system coordination. This free online UUID generator creates cryptographically secure random UUIDs (v4) in your browser.

Generate single UUIDs for quick tasks or bulk-generate up to 100 at once for seeding databases or test data. Each UUID is generated using <code>crypto.randomUUID()</code> — the same cryptographic-grade randomness used by browsers for security-critical operations.

UUIDs are essential for any system that needs unique identifiers without a central authority, including microservices architectures, offline-first applications, and distributed databases. This tool is also great for generating test data or demo values.""",

    "timestamp": """Unix timestamps are the universal language of time in computing — the number of seconds since January 1, 1970 (UTC). This free online timestamp converter handles bidirectional conversion between timestamps and human-readable dates with ease.

Key use cases include debugging JWT token expiration times, converting database timestamps from logs, working with API responses that use epoch time, calculating time differences between events, and generating timestamps for cron jobs or scheduled tasks.

The tool automatically detects whether your input is in seconds or milliseconds (a common source of bugs), provides multiple date format outputs, and includes a "Now" button to quickly insert the current timestamp. All parsing is done client-side with zero latency.""",

    "color-converter": """Color conversion between HEX, RGB, and HSL formats is a daily task for frontend developers and designers. This free online color converter provides instant, bidirectional conversion with a live color preview so you can see exactly what you're working with.

Use this tool to convert Tailwind CSS colors (like <code>#3b82f6</code>) to RGB for use in Canvas API or SVG filters, generate HSL values for CSS color manipulation, ensure color consistency across different CSS color formats, and preview colors before committing to a design.

The converter supports all standard CSS color formats: HEX with 3 or 6 digits (<code>#f60</code> or <code>#ff6600</code>), RGB functional notation (<code>rgb(255,102,0)</code>), and HSL (<code>hsl(24,100%,50%)</code>). The live color preview updates instantly as you type.""",

    "url-encoder": """URL encoding (also known as percent-encoding) converts special characters into a format that can be safely transmitted in URLs. This free online URL encoder/decoder handles both encoder modes — for query parameters and for full URLs — with instant bidirectional conversion.

Essential use cases include encoding user input before appending it as URL query parameters, decoding URLs from web server logs for inspection, handling non-ASCII characters in internationalized URLs, and preparing data for REST API calls that include special characters.

The tool provides two encoding modes: <code>encodeURIComponent</code> for query parameters (encodes everything including ?, &, and /) and <code>encodeURI</code> for full URLs (preserves structural characters). A convenient swap button lets you quickly switch between encoder and decoder modes.""",

    "jwt-decoder": """JSON Web Tokens (JWT) are widely used for authentication and information exchange in modern web applications. This free online JWT decoder lets you inspect the contents of any JWT token — header, payload, and signature — without sending your token to any server.

Use this tool to debug authentication flows during development, verify JWT claims like issuer (iss), subject (sub), and expiration (exp), check if a token has expired, and understand the structure of JWT tokens for learning or troubleshooting.

The decoder automatically parses all three parts of the JWT, detects when the token has expired (with visual indicators), and includes a sample token so you can try the tool immediately. All decoding is done client-side — your tokens never leave your browser.""",

    "ai-id-photo": """Creating professional ID photos usually requires a photo studio or expensive software. This free AI-powered ID photo maker removes backgrounds and generates standard-size photos (1-inch, 2-inch) entirely in your browser — no uploads, no servers, no fees.

Perfect for job applications, exam registrations, visa applications, passport photos, and social media profiles. The AI background removal runs locally using ONNX Runtime Web, meaning your photo never leaves your device for maximum privacy.

Simply upload any photo with a person, choose your desired size (1-inch, 2-inch, or custom), and download the result. The tool handles hair details, edges, and complex backgrounds with impressive accuracy — all for free, all in your browser."""
}

# FAQ content for each tool
FAQS = {
    "json-formatter": [
        ("Is my JSON data sent to a server?",
         "No. All JSON processing is done entirely in your browser using JavaScript's built-in JSON.parse() and JSON.stringify(). Your data never leaves your device."),
        ("What indentation options are available?",
         "You can choose between 2 spaces, 4 spaces, 1 space, or minified (0 spaces). 2 spaces is the most common convention for readability."),
        ("What happens if my JSON is invalid?",
         "The tool shows a clear error message describing the parsing error, including where the error occurred."),
    ],
    "base64": [
        ("Is my data safe?",
         "Absolutely. All encoding and decoding is done client-side using browser btoa() and atob() functions with Unicode support. Nothing is uploaded."),
        ("Does it support Chinese characters?",
         "Yes. The tool handles Chinese, Japanese, Arabic, emoji, and any Unicode characters correctly — a common pitfall with basic Base64 tools."),
        ("What is Base64 commonly used for?",
         "Common uses: embedding images as data URIs, encoding binary data in JSON APIs, JWT token parts, and storing binary content in databases."),
    ],
    "regex-tester": [
        ("Why is my regex not matching?",
         "Check the flags: 'g' for global, 'i' for case-insensitive, 'm' for multiline. Common mistakes include missing the global flag or forgetting to escape special characters."),
        ("What regex engine does this use?",
         "It uses the JavaScript RegExp engine, which supports most modern regex features including named capture groups, lookahead/lookbehind, and Unicode property escapes."),
        ("Is this safe for sensitive data?",
         "Yes. All regex matching is done locally in your browser. Your patterns and test strings never leave your device."),
    ],
    "uuid-generator": [
        ("Are these truly random UUIDs?",
         "Yes. They are generated using crypto.randomUUID() which uses the browser's cryptographically secure random number generator — the same one used for security tokens."),
        ("What is the difference between UUID v4 and v7?",
         "UUID v4 is fully random (122 bits of randomness). UUID v7 is time-ordered, offering better database index performance. This tool generates v4."),
        ("How many UUIDs can I generate at once?",
         "You can generate 1, 5, 10, 25, 50, or 100 UUIDs in a single batch. Each is independently generated for maximum uniqueness."),
    ],
    "timestamp": [
        ("Is this timestamp in seconds or milliseconds?",
         "The tool auto-detects: if the number is greater than 100 billion (10^11), it treats it as milliseconds. Standard Unix timestamps are in seconds since 1970-01-01 UTC."),
        ("How do I get the current timestamp?",
         "Click the 'Now' button to instantly insert the current Unix timestamp in seconds. It updates in real-time based on your system clock."),
        ("Why do I see different times in different timezones?",
         "Unix timestamps are always UTC-based. The tool converts to your local timezone automatically using JavaScript's Date object."),
    ],
    "color-converter": [
        ("What color formats are supported?",
         "HEX (3 or 6 digits like #f60 or #ff6600), RGB (rgb(255,102,0)), and HSL (hsl(24,100%,50%)). The tool auto-detects which format you paste."),
        ("Can I copy individual color values?",
         "Yes. Each output format has its own copy button, so you can copy just the format you need for your CSS or code."),
        ("How accurate is the color preview?",
         "The preview uses the actual computed color from your input — it is pixel-perfect and updates in real-time as you type."),
    ],
    "url-encoder": [
        ("What's the difference between the two encoder modes?",
         "encodeURIComponent encodes everything including ?, &, /, = for query parameters. encodeURI preserves URL structure characters for encoding full URLs."),
        ("Does it support non-ASCII characters?",
         "Yes, it handles all Unicode characters including Chinese, emoji, accented letters, and special symbols."),
        ("Is my data uploaded anywhere?",
         "No. All encoding and decoding is done client-side using JavaScript's built-in encodeURIComponent() and decodeURIComponent(). Zero server uploads."),
    ],
    "jwt-decoder": [
        ("Can I verify the JWT signature?",
         "This tool decodes and displays the header and payload. Signature verification requires the signing secret, which this tool does not have for security reasons."),
        ("Is it safe to paste my production JWT tokens?",
         "Yes. All decoding is done client-side — your token never leaves your browser. No server requests are made."),
        ("What does 'exp' mean?",
         "exp (expiration time) is a standard JWT claim. The tool automatically checks if the token has expired and shows a visual indicator (green for valid, red for expired)."),
    ],
    "ai-id-photo": [
        ("Is my photo uploaded to a server?",
         "No. The AI background removal runs entirely in your browser using ONNX Runtime Web. Your photo never leaves your device."),
        ("What photo sizes are available?",
         "Standard sizes: 1-inch (25x35mm) for ID cards, 2-inch (35x53mm) for documents, plus a custom size option."),
        ("Does it work on mobile?",
         "Yes. The tool works in any modern browser on desktop, tablet, or phone. All AI processing is done client-side."),
    ],
}


def build_section(tool_key):
    """Build the About + FAQ section HTML."""
    tool_name = {
        "json-formatter": "JSON Formatter",
        "base64": "Base64 Encode / Decode",
        "regex-tester": "Regex Tester",
        "uuid-generator": "UUID Generator",
        "timestamp": "Timestamp Converter",
        "color-converter": "Color Converter",
        "url-encoder": "URL Encoder / Decoder",
        "jwt-decoder": "JWT Decoder",
        "ai-id-photo": "AI ID Photo Maker",
    }[tool_key]

    lines = []
    about = ABOUT[tool_key]

    # About section
    lines.append("")
    lines.append('      {/* About This Tool */}')
    lines.append('      <section className="mt-12 pt-8 border-t border-[#334155]">')
    lines.append('        <h2 className="text-xl font-semibold text-white mb-4">About This Tool</h2>')
    lines.append('        <div className="space-y-3 text-[#94a3b8] text-sm leading-relaxed">')

    for para in about.strip().split("\n\n"):
        lines.append(f'          <p>{para.strip()}</p>')

    lines.append('        </div>')
    lines.append('      </section>')

    # FAQ section
    tool_faqs = FAQS.get(tool_key, [])
    if tool_faqs:
        lines.append("")
        lines.append('      <section className="mt-10 pt-8 border-t border-[#334155]">')
        lines.append('        <h2 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h2>')
        lines.append('        <div className="space-y-4">')

        for q, a in tool_faqs:
            lines.append('          <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">')
            lines.append('            <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">')
            lines.append(f'              <span>{q}</span>')
            lines.append(f'              <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>')
            lines.append('            </summary>')
            lines.append(f'            <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">')
            lines.append(f'              {a}')
            lines.append('            </div>')
            lines.append('          </details>')

        lines.append('        </div>')
        lines.append('      </section>')

    return "\n".join(lines)


# Apply to all tools
for tool_dir in sorted(os.listdir(BASE)):
    path = os.path.join(BASE, tool_dir, "page.tsx")
    if not os.path.exists(path):
        print(f"SKIP {tool_dir}: page.tsx not found")
        continue

    content = open(path).read()

    # Find insertion point: before the last AdSlot
    # Pattern: `<AdSlot className="mt-8" />`
    target = '<AdSlot className="mt-8" />'
    idx = content.rfind(target)

    if idx == -1:
        target = '<AdSlot className="mt-8"/>'
        idx = content.rfind(target)

    if idx == -1:
        print(f"FAIL {tool_dir}: Could not find AdSlot insertion point")
        continue

    section = build_section(tool_dir)

    # Insert section BEFORE the bottom AdSlot
    new_content = content[:idx] + section + "\n\n      " + content[idx:]

    open(path, "w").write(new_content)

    new_lines = open(path).read().count("\n")
    old_lines = content.count("\n")
    print(f"OK  {tool_dir}: {old_lines} -> {new_lines} lines (+{new_lines - old_lines})")

print("\nDone! All tool pages updated.")
