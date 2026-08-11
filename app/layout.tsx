import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
