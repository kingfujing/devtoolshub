import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevToolsHub — Free Online Developer Tools",
  description: "Free online developer tools: JSON Formatter, Base64 Encoder/Decoder, Regex Tester, UUID Generator, Timestamp Converter and more. All data is processed locally in your browser.",
  keywords: "developer tools, online tools, JSON formatter, Base64, regex tester, UUID generator, timestamp converter, color converter, URL encoder, JWT decoder, dev tools",
};

const TOOLS = [
  { name: "JSON Formatter", href: "/tools/json-formatter", icon: "{}" },
  { name: "Base64", href: "/tools/base64", icon: "⇄" },
  { name: "Regex Tester", href: "/tools/regex-tester", icon: ".*" },
  { name: "UUID Generator", href: "/tools/uuid-generator", icon: "🔑" },
  { name: "Timestamp", href: "/tools/timestamp", icon: "⏱" },
  { name: "Color Converter", href: "/tools/color-converter", icon: "🎨" },
  { name: "URL Encoder", href: "/tools/url-encoder", icon: "🔗" },
  { name: "JWT Decoder", href: "/tools/jwt-decoder", icon: "🔐" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Header */}
        <header className="border-b border-[#334155] bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 group">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                DevToolsHub
              </span>
              <span className="text-xs text-[#64748b] hidden sm:inline">Online Dev Tools</span>
            </a>
            <nav className="hidden md:flex items-center gap-1">
              {TOOLS.map((t) => (
                <a
                  key={t.href}
                  href={t.href}
                  className="px-3 py-1.5 text-sm text-[#94a3b8] hover:text-white rounded-md hover:bg-[#1e293b] transition-colors"
                >
                  {t.name}
                </a>
              ))}
            </nav>
            <div className="md:hidden flex items-center gap-2">
              <a href="/tools" className="text-sm text-[#3b82f6] hover:text-blue-300 transition-colors">
                All Tools
              </a>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-[#334155] bg-[#0f172a]">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">DevToolsHub</h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Free online developer tools. All processing is done locally in your browser — your data never leaves your device.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Popular Tools</h3>
                <ul className="space-y-2">
                  {TOOLS.map((t) => (
                    <li key={t.href}>
                      <a href={t.href} className="text-xs text-[#64748b] hover:text-[#3b82f6] transition-colors">
                        {t.icon} {t.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">About</h3>
                <ul className="space-y-2">
                  <li><a href="/privacy" className="text-xs text-[#64748b] hover:text-[#3b82f6] transition-colors">Privacy Policy</a></li>
                  <li><a href="/contact" className="text-xs text-[#64748b] hover:text-[#3b82f6] transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#334155] text-center text-xs text-[#475569]">
              © 2026 DevToolsHub. Built for developers, by developers.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
