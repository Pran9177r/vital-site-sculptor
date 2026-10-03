"use client";

import { useState, useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const formId = "262636469985073";

  useEffect(() => {
    const handleIFrameMessage = (e: MessageEvent) => {
      if (typeof e.data === 'string') {
        const args = e.data.split(":");
        // Jotform sends messages like "setHeight:1234:formId"
        if (args[0] === "setHeight" && iframeRef.current) {
          const messageFormId = args.length > 2 ? args[args.length - 1] : null;
          // Ensure it's for this specific form or no form ID is provided
          if (!messageFormId || messageFormId === formId) {
            // Add a buffer to prevent scrollbars from showing when error messages appear
            const newHeight = parseInt(args[1]) + 30;
            iframeRef.current.style.height = `${newHeight}px`;
            iframeRef.current.style.minHeight = `${newHeight}px`;
          }
        }
      }
    };
    window.addEventListener("message", handleIFrameMessage);
    return () => window.removeEventListener("message", handleIFrameMessage);
  }, []);

  return (
    <div className="w-full relative min-h-[500px] overflow-hidden rounded-2xl">
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 space-y-4">
          <Loader2 className="h-10 w-10 animate-spin text-slate-400" />
          <p className="text-slate-500 font-medium animate-pulse">Loading form...</p>
        </div>
      )}
      <iframe
        ref={iframeRef}
        id={`JotFormIFrame-${formId}`}
        title="Contact & Insurance"
        src={`https://form.jotform.com/${formId}?transparent=1`}
        style={{
          minWidth: "100%",
          height: "800px", // Initial height, dynamically adjusted
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
