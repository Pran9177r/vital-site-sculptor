"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

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
    <section className="mx-auto max-w-4xl px-5 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Accreditations</span>
        <h2 className="mt-4 text-3xl md:text-4xl">Care You Can Trust</h2>
      </motion.div>
      
      <div className="mt-12 grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center justify-center">
        {accreditations.map((acc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center p-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
          >
            {acc.logoUrl ? (
              <img
                src={acc.logoUrl}
                alt={acc.name || "Accreditation Logo"}
                className="h-24 w-auto object-contain"
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
