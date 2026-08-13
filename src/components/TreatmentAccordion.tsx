"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

export interface Treatment {
  id: string;
  title: string;
  subheader: string;
  description: string;
}

interface TreatmentAccordionProps {
  treatments: Treatment[];
}

export function TreatmentAccordion({ treatments }: TreatmentAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  useEffect(() => {
    // If there's a hash in the URL, open that accordion
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      const index = treatments.findIndex(t => t.id === hash);
      if (index !== -1) {
        setOpenIndex(index);
        // Optional: scroll into view
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [treatments]);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto w-full max-w-4xl space-y-4">
      {treatments.map((treatment, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={treatment.id}
            id={treatment.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
              isOpen ? "border-primary/30 bg-primary/5 shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <button
              onClick={() => toggleOpen(index)}
              className="flex w-full items-center justify-between p-6 text-left focus:outline-none scroll-m-24"
              aria-expanded={isOpen}
            >
              <div className="pr-8">
                <h3 className="text-xl font-semibold text-slate-900">{treatment.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{treatment.subheader}</p>
              </div>
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isOpen ? "bg-primary text-primary-foreground" : "bg-slate-100 text-slate-500"
                }`}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-0">
                    <span className="rule-line mb-4 bg-slate-200" />
                    <p className="text-sm leading-relaxed text-slate-600">
                      {treatment.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
