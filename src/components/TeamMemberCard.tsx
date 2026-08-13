"use client";

import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string[]; // Array of paragraphs
  imageUrl: string;
  delay?: number;
}

export function TeamMemberCard({ name, title, bio, imageUrl, delay = 0 }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="card-soft overflow-hidden group flex flex-col h-full bg-white border border-slate-100"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={imageUrl}
          alt={`Photograph of ${name}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 p-8">
        <h3 className="text-2xl font-semibold text-slate-900">{name}</h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-primary">
          {title}
        </p>
        <span className="rule-line mt-5 bg-slate-200" />
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600">
          {bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
