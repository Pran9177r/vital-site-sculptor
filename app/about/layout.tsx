import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us: Adolescent Mental Health Care in Fresno",
  description:
    "Meet Teen Harbor, a residential treatment home in Fresno, CA where a compassionate clinical team helps teens build lasting mental and emotional wellness.",
  path: "/about",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
