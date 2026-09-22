"use client";

import { useState, useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";

export function ReferralForm() {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleIFrameMessage = (e: MessageEvent) => {
      if (typeof e.data === 'string') {
        const args = e.data.split(":");
        // Jotform sends messages like "setHeight:1234"
        if (args[0] === "setHeight" && iframeRef.current) {
          iframeRef.current.style.height = `${args[1]}px`;
        }
      }
    };
    window.addEventListener("message", handleIFrameMessage);
    return () => window.removeEventListener("message", handleIFrameMessage);
  }, []);

  return (
    <div className="w-full relative min-h-[500px] -mt-10">
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 space-y-4">
          <Loader2 className="h-10 w-10 animate-spin text-slate-400" />
          <p className="text-slate-500 font-medium animate-pulse">Loading form...</p>
        </div>
      )}
      <iframe
        ref={iframeRef}
        id="JotFormIFrame-262636133151046"
        title="Adolescent Referral Form"
        src="https://form.jotform.com/262636133151046?transparent=1"
        style={{
          minWidth: "100%",
          height: "1200px", // Initial height, dynamically adjusted
          border: "none",
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out"
        }}
        allow="geolocation; microphone; camera"
        frameBorder="0"
        scrolling="no"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
