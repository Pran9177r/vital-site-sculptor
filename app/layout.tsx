import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Phone } from "lucide-react";
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
    <html lang="en" suppressHydrationWarning>
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

        {/* Floating Call Button */}
        <a
          href="tel:5592341001"
          className="fixed bottom-6 left-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-sun text-sun-foreground shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-primary/40 md:bottom-8 md:left-8"
          aria-label="Call Admissions"
        >
          <Phone className="h-6 w-6" />
        </a>
      </body>
    </html>
  );
}
