import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Terms of Service — DevToolsHub",
  description: "Terms of Service for DevToolsHub. By using our free online developer tools, you agree to these terms.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-[#64748b] text-sm mb-8">Last updated: June 24, 2026</p>

      <AdSlot className="mb-8" />

      <section className="space-y-8 text-[#cbd5e1] text-sm leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using DevToolsHub (&ldquo;the Website&rdquo;), you agree to be bound by these Terms of Service.
            If you do not agree with any part of these terms, you must not use the Website.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">2. Description of Service</h2>
          <p>
            DevToolsHub provides a collection of free online developer tools including but not limited to JSON formatting,
            Base64 encoding/decoding, regex testing, UUID generation, timestamp conversion, color conversion, URL encoding/decoding,
            and JWT decoding. All tools run entirely in your browser using client-side JavaScript.
          </p>
          <p className="mt-2">
            <strong>No data is transmitted to our servers.</strong> All processing happens locally on your device.
            We do not store, log, or have access to any data you enter into our tools.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">3. User Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>You agree not to use the Website for any unlawful purpose or in violation of any applicable laws.</li>
            <li>You agree not to attempt to disrupt, damage, or impair the Website or its underlying infrastructure.</li>
            <li>You agree not to use automated means (bots, scrapers, etc.) to access or collect data from the Website.</li>
            <li>You are responsible for any data you process using our tools. We recommend not processing sensitive or personal data through any online tool, including this one.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">4. Intellectual Property</h2>
          <p>
            The Website, its original content, features, and functionality are owned by DevToolsHub and are protected by
            international copyright, trademark, and other intellectual property laws. The underlying tool algorithms and
            source code are proprietary.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">5. Third-Party Services</h2>
          <p>
            The Website uses Google AdSense to display advertisements. Google may use cookies and other tracking
            technologies to serve personalized ads. We are not responsible for the content or practices of any
            third-party services, including Google.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">6. Disclaimer of Warranties</h2>
          <p>
            The Website and all tools are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any warranty of any kind,
            either express or implied. We do not guarantee that the tools will be error-free, uninterrupted, or
            meet your specific requirements. Use of the tools is at your own risk.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">7. Limitation of Liability</h2>
          <p>
            In no event shall DevToolsHub be liable for any indirect, incidental, special, consequential, or punitive
            damages, including but not limited to loss of data, profits, or business opportunities, arising out of
            or in connection with your use of the Website.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
            to this page. Your continued use of the Website after any changes constitutes acceptance of the new terms.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">9. Contact</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:contact@devtoolshub.dev" className="text-[#3b82f6] hover:text-blue-300">
              contact@devtoolshub.dev
            </a>.
          </p>
        </div>
      </section>

      <AdSlot className="mt-8" />
    </div>
  );
}
