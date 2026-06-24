import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "About — DevToolsHub",
  description: "DevToolsHub provides free online developer tools that run entirely in your browser. Privacy-first, no server uploads, fast and secure.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">About DevToolsHub</h1>
      <p className="text-[#64748b] text-sm mb-8">Free online developer tools, built for privacy and speed.</p>

      <AdSlot className="mb-8" />

      <section className="space-y-8 text-[#cbd5e1] text-sm leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Our Mission</h2>
          <p>
            DevToolsHub is a collection of free, fast, and privacy-first online tools for developers. 
            We believe that developer tools should be accessible to everyone — without sign-ups, without 
            data collection, and without unnecessary complexity.
          </p>
          <p className="mt-2">
            Every tool on this site runs entirely in your browser. The JSON you paste, the JWT you decode, 
            the Base64 you convert — <strong>none of it ever leaves your device.</strong>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Why DevToolsHub?</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Privacy First</strong> — All processing is done client-side. Zero server uploads.</li>
            <li><strong>No Sign-ups</strong> — Just open and use. No accounts, no emails, no spam.</li>
            <li><strong>Fast & Lightweight</strong> — Built with Next.js and deployed on Vercel&#39;s global edge network.</li>
            <li><strong>Free Forever</strong> — No paywalls, no premium tiers, no hidden costs.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">What We Offer</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {[
              "JSON Formatter & Validator",
              "Base64 Encode / Decode",
              "Regex Tester",
              "UUID Generator",
              "Timestamp Converter",
              "Color Converter",
              "URL Encoder / Decoder",
              "JWT Decoder",
              "AI ID Photo Maker",
            ].map((tool) => (
              <div key={tool} className="flex items-center gap-2 bg-[#1e293b] rounded-lg px-3 py-2 border border-[#334155]">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span className="text-xs text-[#cbd5e1]">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <p>
            Have feedback, suggestions, or found a bug? We&apos;d love to hear from you.
          </p>
          <ul className="mt-2 space-y-1.5">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@devtoolshub.dev" className="text-[#3b82f6] hover:text-blue-300">
                contact@devtoolshub.dev
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/fujing02" className="text-[#3b82f6] hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                github.com/fujing02
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Tech Stack</h2>
          <p>
            Built with Next.js, Tailwind CSS, and TypeScript. Deployed on Vercel. 
            All tool processing uses standard browser APIs — no external dependencies required.
          </p>
        </div>
      </section>

      <AdSlot className="mt-8" />
    </div>
  );
}
