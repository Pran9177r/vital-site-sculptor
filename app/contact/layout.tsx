import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us & Verify Insurance",
  description:
    "Contact Teen Harbor in Fresno, CA at 559-234-1001 to ask about teen residential treatment or verify insurance. We accept most major commercial plans.",
  path: "/contact",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
