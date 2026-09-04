"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram } from "lucide-react";
import logoWordmark from "@/assets/logo-teen-harbor.png";
import { PrivacyPolicyModal } from "@/components/PrivacyPolicyModal";
import { TermsOfServiceModal } from "@/components/TermsOfServiceModal";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Treatment and Services", href: "/treatment-and-services" },
  { label: "Admissions", href: "/admissions" },
  { label: "Referrals", href: "/referrals" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const pathname = usePathname();

  // Standalone pages that render without site chrome

  return (
    <>
    <footer className="relative bg-[#E8F3FC] text-slate-600 border-t border-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <img
              src={logoWordmark.src}
              alt="Teen Harbor"
              width={900}
              height={539}
              loading="lazy"
              className="h-20 w-auto"
            />
          </Link>
          <p className="text-sm text-slate-500 leading-relaxed">
            Central Valley’s Residential Treatment Center for Youth. Compassionate care for adolescents and their families.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white border border-slate-200 rounded-full text-primary hover:bg-[#32A5DA] hover:text-white hover:border-[#32A5DA] transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white border border-slate-200 rounded-full text-primary hover:bg-[#32A5DA] hover:text-white hover:border-[#32A5DA] transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 text-navy uppercase tracking-wider">Navigation</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            {NAV.map((n) => (
              <li key={n.label}>
                <Link href={n.href} className="hover:text-[#32A5DA] transition-colors inline-block">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 text-navy uppercase tracking-wider">Legal</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-[#32A5DA] transition-colors inline-block text-left"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setTermsOpen(true)}
                className="hover:text-[#32A5DA] transition-colors inline-block text-left"
              >
                Terms of Service
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 text-navy uppercase tracking-wider">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex flex-col">
              <span className="font-semibold text-navy">Teen Harbor</span>
              <span>895 S. Marks</span>
              <span>Fresno, CA 93706</span>
            </li>
            <li className="pt-2">
              <a href="tel:5592341001" className="hover:text-[#32A5DA] transition-colors">
                559-234-1001
              </a>
            </li>
            <li>
              <a href="mailto:info@teenharbor.com" className="hover:text-[#32A5DA] transition-colors">
                info@teenharbor.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Teen Harbor. All Rights Reserved.
      </div>
    </footer>
    <PrivacyPolicyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    <TermsOfServiceModal open={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  );
}
