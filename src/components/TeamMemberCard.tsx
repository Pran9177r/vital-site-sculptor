"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string[]; // Array of paragraphs
  imageUrl: string;
  delay?: number;
  objectPosition?: string;
}

export function TeamMemberCard({ name, title, bio, imageUrl, delay = 0, objectPosition = "object-top" }: TeamMemberProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative h-[520px] w-full [perspective:1000px] group"
    >
      <motion.div
        className="relative h-full w-full rounded-[2.5rem] [transform-style:preserve-3d] shadow-xl hover:shadow-2xl transition-shadow duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 25 }}
      >
        {/* FRONT FACE */}
        <div 
          className="absolute inset-0 h-full w-full [backface-visibility:hidden] rounded-[2.5rem] overflow-hidden bg-navy cursor-pointer"
          onClick={() => setIsFlipped(true)}
        >
          {/* Image */}
          <img
            src={imageUrl}
            alt={`Photograph of ${name}`}
            loading="lazy"
            className={cn("absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105", objectPosition)}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 flex flex-col items-center text-center transform transition-transform duration-500 group-hover:-translate-y-2">
            <h3 className="text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-md">{name}</h3>
            <p className="text-sm font-bold text-sun uppercase tracking-widest mb-8 drop-shadow-sm">
              {title}
            </p>
            
            <button className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 shadow-lg">
              Read About Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* BACK FACE */}
        <div 
          className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2.5rem] bg-white border border-slate-100 flex flex-col overflow-hidden shadow-inner"
        >
          {/* Header */}
          <div className="p-8 pb-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/50 shrink-0">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{name}</h3>
              <p className="text-[11px] font-bold text-primary uppercase tracking-widest mt-1.5">{title}</p>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-primary transition-all shadow-sm shrink-0 -mt-1 -mr-2"
              aria-label="Close bio"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Bio Scroll Area */}
          <div className="p-8 overflow-y-auto flex-1" data-lenis-prevent="true">
            <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 font-medium">
              {bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          {/* Bottom Fade out for smooth scrolling look */}
          <div className="h-8 bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 right-0 pointer-events-none rounded-b-[2.5rem]" />
        </div>
      </motion.div>
    </motion.div>
  );
}
