"use client";

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import logoWordmark from "@/assets/logo-teen-harbor.png";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Treatment and Services", href: "/treatment-and-services" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-navy text-navy-foreground border-t border-navy-foreground/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <img
              src={logoWordmark.src}
              alt="Teen Harbor"
              width={500}
              height={500}
              loading="lazy"
              className="h-[140px] w-auto brightness-0 invert"
            />
          </Link>
          <p className="text-sm opacity-75 leading-relaxed">
            Central Valley’s Residential Treatment Center for Youth. Compassionate care for adolescents and their families.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors text-white" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors text-white" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">Navigation</h3>
          <ul className="space-y-3 text-sm opacity-80">
            {NAV.map((n) => (
              <li key={n.label}>
                <Link href={n.href} className="hover:text-sun transition-colors inline-block">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">Legal</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li>
              <Link href="/privacy" className="hover:text-sun transition-colors inline-block">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-sun transition-colors inline-block">Terms of Service</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">Contact</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex flex-col">
              <span className="font-medium text-white/90">Teen Harbor</span>
              <span>895 S. Marks</span>
              <span>Fresno, CA 93706</span>
            </li>
            <li className="pt-2">
              <a href="tel:5592341001" className="hover:text-sun transition-colors">
                559-234-1001
              </a>
            </li>
            <li>
              <a href="mailto:info@teenharbor.com" className="hover:text-sun transition-colors">
                info@teenharbor.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Teen Harbor. All Rights Reserved.
      </div>
    </footer>
  );
}
