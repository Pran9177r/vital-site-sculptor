import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Teen Harbor | Residential Care for Teens",
  description: "Compassionate residential behavioral health care for adolescents and their families.",
  authors: [{ name: "Teen Harbor" }],
  openGraph: {
    title: "Teen Harbor | Residential Care for Teens",
    description: "Compassionate residential mental health and dual diagnosis care for teens in California.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${poppins.className} min-h-screen flex flex-col`} suppressHydrationWarning>
        <Providers>
          <SmoothScrolling>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </SmoothScrolling>
        </Providers>
      </body>
    </html>
  );
}
