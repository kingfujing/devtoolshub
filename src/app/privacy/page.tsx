"use client";
import Head from "next/head";
import AdSlot from "@/components/AdSlot";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-[#64748b] text-sm mb-8">Last updated: September 4, 2026</p>

      <AdSlot className="mb-8" />

      <section className="space-y-8 text-[#cbd5e1] text-sm leading-relaxed">
        {/* 1. Introduction */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">1. Introduction</h2>
          <p>
            DevToolsHub (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit
            our website at devtoolshub-seven.vercel.app (the &quot;Site&quot;), and it describes the choices
            available to you regarding our use of that information.
          </p>
          <p className="mt-2">
            <strong>Important:</strong> All developer tools on this website run entirely in your browser.
            No data you input (JSON, text, files, images, URLs, JWT tokens, colors, regular expressions, etc.)
            is ever sent to our servers or to any third party. The tools use client-side JavaScript only, and
            your data stays on your device at all times. You can verify this yourself: disconnect your network
            after loading a tool page, and every tool will continue to work.
          </p>
        </div>

        {/* 2. Data We Collect */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">2. Information We Collect</h2>
          <p>We collect minimal information, limited to the following categories:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1.5">
            <li><strong>Usage Analytics:</strong> We may use privacy-respecting, anonymized page-view data to understand which tools are most popular and how users navigate the Site. This data is aggregated and contains no direct identifiers.</li>
            <li><strong>Advertising Data:</strong> We display ads through Google AdSense. Google and its partners may use cookies or device identifiers to serve and measure ads, including personalized ads based on your visits to this and other websites. See Sections 4 and 5.</li>
            <li><strong>Server Log Data:</strong> Our hosting provider (Vercel, Inc.) automatically records standard request logs — IP address, user-agent string, requested URL, response status, and timestamp — for security, rate-limiting, and performance monitoring. These logs are retained by Vercel under its own data-retention policy.</li>
            <li><strong>Voluntary Contact:</strong> If you email us, we receive your email address and the content of your message, which we use solely to respond to you.</li>
          </ul>
        </div>

        {/* 3. Data We Do NOT Collect */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">3. Information We Do NOT Collect</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>We do <strong>not</strong> collect, store, transmit, or process any data you enter into our tools — that includes JSON payloads, source code, tokens, images, and generated identifiers.</li>
            <li>We do <strong>not</strong> require accounts, registration, or logins. The Site works fully without any identity information.</li>
            <li>We do <strong>not</strong> set our own tracking or advertising cookies (third-party ad cookies are governed by Section 5).</li>
            <li>We do <strong>not</strong> sell, rent, or trade personal information to anyone.</li>
            <li>We do <strong>not</strong> build advertising or marketing profiles ourselves.</li>
          </ul>
        </div>

        {/* 4. Third-Party Services */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">4. Third-Party Services</h2>
          <p>We rely on a small number of reputable processors to operate the Site:</p>

          <h3 className="text-white font-medium mt-3 mb-1">Google AdSense</h3>
          <p>
            We use Google AdSense to display advertisements. Third-party vendors, including Google, use
            cookies to serve ads based on your prior visits to this Site or other websites. Google&apos;s use
            of advertising cookies enables it and its partners to serve ads based on your visits. You may opt
            out of personalized advertising at
            <a href="https://policies.google.com/technologies/ads" className="text-[#3b82f6] hover:text-blue-300 ml-1" target="_blank" rel="noopener noreferrer">
              policies.google.com/technologies/ads
            </a>,
            or manage vendor preferences at
            <a href="https://www.aboutads.info/choices" className="text-[#3b82f6] hover:text-blue-300 ml-1" target="_blank" rel="noopener noreferrer">
              aboutads.info/choices
            </a>.
          </p>

          <h3 className="text-white font-medium mt-3 mb-1">Vercel (Hosting)</h3>
          <p>
            The Site is hosted on Vercel&apos;s global edge network. Vercel processes request logs as a data
            processor for security and performance. Details are in
            <a href="https://vercel.com/legal/privacy-policy" className="text-[#3b82f6] hover:text-blue-300 ml-1" target="_blank" rel="noopener noreferrer">
              Vercel&apos;s Privacy Policy
            </a>.
          </p>
        </div>

        {/* 5. Cookies */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">5. Cookies</h2>
          <p>
            The Site itself does not set or read first-party cookies. Third parties may set cookies when
            serving ads:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1.5">
            <li><strong>Advertising cookies</strong> — set by Google AdSense and its certified partners to deliver, cap the frequency of, and measure ads. Typical lifetime ranges from 30 days to 2 years depending on the cookie.</li>
            <li><strong>Consent and preference storage</strong> — your cookie-banner choice is stored in your browser&apos;s local storage under the key <code>cookie-consent</code>. It is never transmitted to our servers.</li>
            <li><strong>Strictly necessary infrastructure</strong> — Vercel may set short-lived technical cookies to route requests and protect against abuse.</li>
          </ul>
          <p className="mt-2">
            You can block or delete cookies through your browser settings at any time. Blocking ad cookies
            does not break any tool on the Site; you will simply see non-personalized ads.
          </p>
        </div>

        {/* 6. Legal Bases (GDPR) */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">6. Legal Bases for Processing (EEA/UK Visitors)</h2>
          <p>
            If you are located in the European Economic Area or the United Kingdom, our legal bases for the
            processing described in this policy are:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1.5">
            <li><strong>Legitimate interests</strong> — operating and securing the Site (server logs, abuse prevention, aggregated analytics).</li>
            <li><strong>Consent</strong> — personalized advertising via ad cookies. You may withdraw consent at any time using the opt-out links in Sections 4 and 5 or your browser settings.</li>
          </ul>
        </div>

        {/* 7. Your Rights */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">7. Your Rights</h2>
          <p>
            Depending on your jurisdiction (including the EEA, the United Kingdom, and California), you may
            have some or all of the following rights:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1.5">
            <li>Access and obtain a copy of the personal data we process about you;</li>
            <li>Request correction of inaccurate data;</li>
            <li>Request deletion of your personal data;</li>
            <li>Object to or restrict processing, including opting out of personalized advertising;</li>
            <li>Data portability of data you have provided;</li>
            <li>Lodge a complaint with your local supervisory authority.</li>
          </ul>
          <p className="mt-2">
            Because the Site collects almost no personal data by design, the practical scope of these rights
            is limited to server logs handled by our processors and any email you send us. California residents
            have the right to know, delete, and opt out of the &quot;sale or sharing&quot; of personal
            information — we do not sell personal information, and ad personalization can be disabled through
            the Google opt-out linked above.
          </p>
        </div>

        {/* 8. Data Retention */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">8. Data Retention</h2>
          <p>
            Tool inputs are never persisted, so there is nothing to retain. Aggregated analytics, where used,
            are kept in aggregate form only. Server logs are retained by Vercel for a limited period under its
            standard policy. Correspondence sent to us by email is kept for as long as needed to address your
            inquiry and for a short archival period thereafter.
          </p>
        </div>

        {/* 9. International Transfers */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">9. International Data Transfers</h2>
          <p>
            Our hosting and advertising providers operate globally, so information described in this policy
            (such as request logs and ad-serving data) may be processed in countries other than your own,
            including the United States. Where required, these transfers rely on recognized safeguards such as
            the EU Standard Contractual Clauses implemented by our processors.
          </p>
        </div>

        {/* 10. Data Security */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">10. Data Security</h2>
          <p>
            All traffic to the Site is encrypted with HTTPS. Because every tool runs client-side, the most
            sensitive data you handle never crosses the network at all — the strongest privacy control is the
            absence of transmission. No system is perfectly secure, but the Site&apos;s architecture
            minimizes what could be exposed in the event of an incident: by design, there is no user-data
            database to breach.
          </p>
        </div>

        {/* 11. Children's Privacy */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">11. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to children under 13 (or under 16 in the EEA). We do not knowingly
            collect personal information from children. If you believe a child has provided us with personal
            data, please contact us and we will delete it.
          </p>
        </div>

        {/* 12. Changes to This Policy */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in the Site, in
            third-party services, or in applicable law. Material changes will be flagged by updating the
            &quot;Last updated&quot; date at the top of this page. Continued use of the Site after a change
            constitutes acceptance of the updated policy.
          </p>
        </div>

        {/* 13. Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">13. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy or about how the Site handles data, please
            contact us at
            <a href="mailto:privacy@devtoolshub.dev" className="text-[#3b82f6] hover:text-blue-300 ml-1">
              privacy@devtoolshub.dev
            </a>.
            We aim to respond to privacy-related inquiries within 30 days.
          </p>
        </div>
      </section>

      <AdSlot className="mt-8" />
    </div>
  );
}
