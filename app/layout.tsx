import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import { AnalyticsGuard } from "@/components/AnalyticsGuard";
import { SITE_NAME, SITE_URL, organizationJsonLd, pageMetadata } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const HOME_TITLE = "Teen Residential Treatment Center in Fresno, CA | Teen Harbor";
const HOME_DESCRIPTION =
  "Joint Commission-accredited residential treatment in Fresno, CA for teens ages 12-17 with mental health and dual diagnosis needs. Most insurance accepted.";

const homeMeta = pageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

/**
 * Search Console "HTML tag" verification. Set GOOGLE_SITE_VERIFICATION to the
 * token Google shows (the value only, not the whole <meta> tag) and redeploy.
 * Only needed if the domain cannot be verified by DNS; left unset, no tag is
 * emitted. Bing's equivalent is BING_SITE_VERIFICATION.
 */
const googleVerification = process.env["GOOGLE_SITE_VERIFICATION"];
const bingVerification = process.env["BING_SITE_VERIFICATION"];

export const metadata: Metadata = {
  ...homeMeta,
  metadataBase: new URL(SITE_URL),
  title: { default: HOME_TITLE, template: `%s | ${SITE_NAME}` },
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true },
  ...(googleVerification || bingVerification
    ? {
        verification: {
          ...(googleVerification ? { google: googleVerification } : {}),
          ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
        },
      }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${poppins.className} min-h-screen flex flex-col`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>
          <AnalyticsGuard>
            <SmoothScrolling>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </SmoothScrolling>
          </AnalyticsGuard>
        </Providers>
      </body>
    </html>
  );
}
