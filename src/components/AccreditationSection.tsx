"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import logoWordmark from "@/assets/logo-teen-harbor.png";

interface Accreditation {
  name: string;
  detail: string;
  logoUrl?: string; // Optional: If missing, fallback to icon
}

interface AccreditationSectionProps {
  accreditations: Accreditation[];
}

export function AccreditationSection({ accreditations }: AccreditationSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <img
            src={logoWordmark.src}
            alt="Teen Harbor Branding"
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain drop-shadow-sm"
          />
        </div>
        <span className="eyebrow">Accreditations</span>
        <h2 className="mt-4 text-3xl md:text-4xl">Care You Can Trust</h2>
      </motion.div>

      <div className="mt-12 flex flex-row flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-16">
        {accreditations.map((acc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex flex-col shrink-0 items-center justify-center p-2"
          >
            {acc.logoUrl ? (
              <img
                src={acc.logoUrl}
                alt={acc.name || "Accreditation Logo"}
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            ) : (
              <Award className="h-16 w-16 text-sun" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
