"use client";
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay showing to avoid layout shift
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className="max-w-3xl mx-auto bg-[#1e293b] border border-[#334155] rounded-xl p-4 shadow-2xl flex items-center justify-between gap-4">
        <p className="text-xs text-[#94a3b8] leading-relaxed">
          This site uses cookies from Google AdSense to personalize ads. 
          By continuing to use this site, you accept our{" "}
          <a href="/privacy" className="text-[#3b82f6] hover:underline">Privacy Policy</a>{" "}
          and{" "}
          <a href="/terms" className="text-[#3b82f6] hover:underline">Terms of Service</a>.
        </p>
        <button
          onClick={accept}
          className="shrink-0 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
