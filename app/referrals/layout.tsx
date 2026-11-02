import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Referrals for Clinicians, Schools & Families",
  description:
    "Refer an adolescent to Teen Harbor. Our admissions team responds quickly and works with clinicians, schools and families to find the right level of care.",
  path: "/referrals",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
