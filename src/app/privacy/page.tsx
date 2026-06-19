"use client";
import Head from "next/head";
import AdSlot from "@/components/AdSlot";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-[#64748b] text-sm mb-8">Last updated: June 19, 2026</p>

      <AdSlot className="mb-8" />

      <section className="space-y-8 text-[#cbd5e1] text-sm leading-relaxed">
        {/* 1. Introduction */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">1. Introduction</h2>
          <p>
            DevToolsHub (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>
          <p className="mt-2">
            <strong>Important:</strong> All developer tools on this website run entirely in your browser. 
            No data you input (JSON, text, images, URLs, JWT tokens, etc.) is ever sent to our servers 
            or any third party. Your data stays on your device.
          </p>
        </div>

        {/* 2. Data We Collect */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">2. Data We Collect</h2>
          <p>We collect minimal information to operate and improve our service:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1.5">
            <li><strong>Analytics:</strong> We may use basic analytics to understand which tools are most popular and how users navigate the site. This includes anonymized page view data.</li>
            <li><strong>Advertising:</strong> We use Google AdSense to display ads. Google may use cookies to serve personalized ads based on your browsing history. See Section 4 for details.</li>
            <li><strong>Log Data:</strong> Our hosting provider (Vercel) automatically collects standard server logs including IP address, browser type, and access times.</li>
          </ul>
        </div>

        {/* 3. Data We Do NOT Collect */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">3. Data We Do NOT Collect</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>We do <strong>not</strong> collect, store, or transmit any data you enter into our tools.</li>
            <li>We do <strong>not</strong> require user accounts or registration.</li>
            <li>We do <strong>not</strong> use cookies for tracking purposes (except as required by AdSense — see Section 4).</li>
            <li>We do <strong>not</strong> sell your personal information.</li>
          </ul>
        </div>

        {/* 4. Third-Party Services */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">4. Third-Party Services</h2>

          <h3 className="text-white font-medium mt-3 mb-1">Google AdSense</h3>
          <p>
            We use Google AdSense to display advertisements. Google AdSense uses cookies and web beacons 
            to serve ads based on your previous visits to our website and other sites across the internet. 
            You can learn more about Google&apos;s advertising practices and opt out at 
            <a href="https://policies.google.com/technologies/ads" className="text-[#3b82f6] hover:text-blue-300 ml-1" target="_blank" rel="noopener noreferrer">
              policies.google.com/technologies/ads
            </a>.
          </p>

          <h3 className="text-white font-medium mt-3 mb-1">Vercel</h3>
          <p>
            Our website is hosted on Vercel. Vercel collects standard server logs for security and performance 
            monitoring. See 
            <a href="https://vercel.com/legal/privacy-policy" className="text-[#3b82f6] hover:text-blue-300 ml-1" target="_blank" rel="noopener noreferrer">
              Vercel&apos;s Privacy Policy
            </a>.
          </p>
        </div>

        {/* 5. Cookies */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">5. Cookies</h2>
          <p>
            Our website itself does not use cookies. However, Google AdSense may use cookies 
            to personalize advertisements. You can manage your cookie preferences through 
            your browser settings or visit 
            <a href="https://www.aboutads.info/choices" className="text-[#3b82f6] hover:text-blue-300 ml-1" target="_blank" rel="noopener noreferrer">
              aboutads.info/choices
            </a> to opt out of personalized advertising.
          </p>
        </div>

        {/* 6. Data Security */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">6. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your information. Our website uses 
            HTTPS encryption for all communications. Since all tool processing happens locally in your 
            browser, there is minimal risk of data exposure through our systems.
          </p>
        </div>

        {/* 7. Children's Privacy */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">7. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect personal 
            information from children under 13. If you believe a child has provided us with personal 
            data, please contact us.
          </p>
        </div>

        {/* 8. Changes to This Policy */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new policy on this page with an updated date.
          </p>
        </div>

        {/* 9. Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">9. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at 
            <a href="mailto:privacy@devtoolshub.dev" className="text-[#3b82f6] hover:text-blue-300 ml-1">
              privacy@devtoolshub.dev
            </a>.
          </p>
        </div>
      </section>

      <AdSlot className="mt-8" />
    </div>
  );
}
