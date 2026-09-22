"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export function ReferralForm() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full flex justify-center -mt-8 relative min-h-[500px]">
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 space-y-4">
          <Loader2 className="h-10 w-10 animate-spin text-slate-400" />
          <p className="text-slate-500 font-medium animate-pulse">Loading form...</p>
        </div>
      )}
      <iframe
        id="JotFormIFrame-262636133151046"
        title="Adolescent Referral Form"
        src="https://form.jotform.com/262636133151046?transparent=1"
        style={{
          minWidth: "100%",
          height: "1400px",
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
