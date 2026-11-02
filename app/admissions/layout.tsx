import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Admissions for Teen Residential Treatment",
  description:
    "What to expect when your teen is admitted to Teen Harbor in Fresno, CA: assessment, insurance verification, what to pack and how families stay involved.",
  path: "/admissions",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
