"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export function AnalyticsGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // CMIA Compliance: Strictly exclude tracking pixels on pages containing PHI intent (e.g., referral forms).
  const isHIPAAPage = pathname?.startsWith("/referrals") || pathname?.startsWith("/contact");

  return (
    <>
      {/* 
        This is a safeguard placeholder for future Analytics/Meta pixels.
        It explicitly prevents rendering tracking scripts on HIPAA-sensitive pages.
      */}
      {!isHIPAAPage && (
        <>
          {/* Example: Google Analytics */}
          {/* 
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'YOUR_GA_ID');
                `,
              }}
            />
          */}
        </>
      )}
      {children}
    </>
  );
}
