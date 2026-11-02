import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Facility: Residential Home for Teens in Fresno",
  description:
    "Tour Teen Harbor's home-like residential facility in Fresno County, a safe, comfortable space where teens focus on healing, school and life skills.",
  path: "/facility",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
