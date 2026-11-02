import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Teen Mental Health & Dual Diagnosis Treatment",
  description:
    "Evidence-based residential treatment for teens with anxiety, depression, trauma and co-occurring substance use: therapy, psychiatry, school and family support.",
  path: "/treatment-and-services",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
