"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoWordmark from "@/assets/logo-teen-harbor.png";

type NavItem = {
  label: string;
  href: string;
  subItems?: NavItem[];
};

const NAV: NavItem[] = [
  {
    label: "About",
    href: "/about",
    subItems: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about#team" },
    ],
  },
  {
    label: "Our Facility",
    href: "/facility",
  },
  {
    label: "Treatment and Services",
    href: "/treatment-and-services",
    subItems: [
      { label: "Residential Treatment", href: "/treatment-and-services#residential" },
      { label: "Teen Holistic Education", href: "/treatment-and-services#education" },
      { label: "Parental Support Therapy", href: "/treatment-and-services#parental-support" },
      { label: "Life Skills Therapy", href: "/treatment-and-services#life-skills" },
      { label: "Teen Anxiety Treatment", href: "/treatment-and-services#anxiety" },
      { label: "Teen Depression Treatment", href: "/treatment-and-services#depression" },
      { label: "Teen ADHD Treatment", href: "/treatment-and-services#adhd" },
      { label: "Teen Trauma Treatment", href: "/treatment-and-services#trauma" },
      { label: "Art Therapy", href: "/treatment-and-services#art-therapy" },
      { label: "Experiential Therapy", href: "/treatment-and-services#experiential" },
      { label: "Dialectical Behavior Therapy", href: "/treatment-and-services#dbt" },
      { label: "Cognitive Behavioral Therapy", href: "/treatment-and-services#cbt" },
      { label: "Group Therapy", href: "/treatment-and-services#group-therapy" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
  },
  {
    label: "Contact",
    href: "/contact",
    subItems: [
      { label: "Verify Your Insurance", href: "/contact#insurance" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`${isHome ? "fixed w-full" : "sticky"} top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
          isTransparent
            ? "bg-transparent border-transparent"
            : scrolled
            ? "bg-white/95 border-border shadow-[var(--shadow-card)]"
            : "bg-white border-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 ${
            scrolled ? "py-2" : "py-3.5"
          }`}
        >
          <Link
            href="/"
            className={`flex items-center shrink-0 relative transition-all duration-300 h-[48px] sm:h-[58px] md:h-[68px] ${
              scrolled
                ? "w-[78px] sm:w-[96px] md:w-[108px]"
                : "w-[96px] sm:w-[120px] md:w-[144px]"
            }`}
            aria-label="Home"
          >
            <div className="absolute -top-2 sm:-top-3 md:-top-4 left-0 z-[60] origin-top-left transition-all duration-300">
              <img
                src={logoWordmark.src}
                alt="Teen Harbor"
                width={500}
                height={500}
                className={`w-auto transition-all duration-300 drop-shadow-md ${
                  scrolled
                    ? "h-[78px] sm:h-[96px] md:h-[108px]"
                    : "h-[96px] sm:h-[120px] md:h-[144px]"
                }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 relative">
            {NAV.map((item) => (
              <div 
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-[15px] font-semibold tracking-wide transition-colors py-4 ${
                    pathname === item.href || (item.subItems && item.subItems.some(sub => pathname === sub.href))
                      ? (isTransparent ? "text-white" : "text-primary")
                      : (isTransparent ? "text-white/90 hover:text-white" : "text-slate-700 hover:text-primary")
                  }`}
                >
                  {item.label}
                  {item.subItems && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 group-hover:rotate-180 ${isTransparent ? "text-white opacity-70" : "opacity-50"}`} />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {item.subItems && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full pt-1"
                      >
                        <div className="bg-white border border-slate-100 shadow-xl rounded-xl py-2 min-w-[240px] flex flex-col">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className="px-5 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 rounded-full bg-sun px-7 py-3 text-[15px] font-semibold uppercase tracking-wide text-sun-foreground shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get Help Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`xl:hidden p-2 transition-colors ${isTransparent ? "text-white hover:bg-white/10" : "text-slate-800"}`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm xl:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[70] w-[85%] max-w-sm bg-white shadow-2xl xl:hidden flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-100 shrink-0">
                <img
                  src={logoWordmark.src}
                  alt="Teen Harbor"
                  width={500}
                  height={500}
                  className="h-[90px] w-auto"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6 px-5 flex flex-col gap-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors py-2 ${
                    pathname === "/" ? "text-primary" : "text-slate-800"
                  }`}
                >
                  Home
                </Link>
                
                {NAV.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-lg font-medium transition-colors py-2 flex-1 ${
                          pathname === item.href ? "text-primary" : "text-slate-800"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {item.subItems && (
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className="p-2 text-slate-500"
                        >
                          <ChevronDown className={`h-5 w-5 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Submenu */}
                    {item.subItems && (
                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden border-l-2 border-slate-100 ml-2 pl-4 flex flex-col gap-3 py-2 my-2"
                          >
                            {item.subItems.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-[15px] text-slate-600 hover:text-primary transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="p-5 border-t border-slate-100 shrink-0">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-sun px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-sun-foreground shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  Get Help Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
