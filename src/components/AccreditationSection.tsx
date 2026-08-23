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

const PER_ROW = 4;

export function AccreditationSection({ accreditations }: AccreditationSectionProps) {
  const rows: Accreditation[][] = [];
  for (let i = 0; i < accreditations.length; i += PER_ROW) {
    rows.push(accreditations.slice(i, i + PER_ROW));
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Accreditations</span>
        <h2 className="mt-4 text-3xl md:text-4xl">Care You Can Trust</h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-10">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row flex-wrap gap-8 md:gap-12 items-center justify-center">
            {row.map((acc, index) => (
              <motion.div
                key={rowIndex * PER_ROW + index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col shrink-0 items-center justify-center p-2"
              >
                {acc.logoUrl ? (
                  <img
                    src={acc.logoUrl}
                    alt={acc.name || "Accreditation Logo"}
                    className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
                    loading="lazy"
                  />
                ) : (
                  <Award className="h-16 w-16 text-sun" />
                )}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
