"use client";

import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string[]; // Array of paragraphs
  imageUrl: string;
  delay?: number;
  objectPosition?: string;
}

export function TeamMemberCard({ name, title, bio, imageUrl, delay = 0, objectPosition = "object-top" }: TeamMemberProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay, ease: "easeOut" }}
          className="relative h-[520px] w-full group cursor-pointer outline-none"
        >
          <div className="relative h-full w-full rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow duration-500 overflow-hidden bg-navy">
            {/* Image */}
            <Image
              src={imageUrl}
              alt={`Photograph of ${name}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={cn("object-cover transition-transform duration-1000 group-hover:scale-105", objectPosition)}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 flex flex-col items-center text-center transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-md">{name}</h3>
              <p className="text-sm font-bold text-sun uppercase tracking-widest mb-8 drop-shadow-sm">
                {title}
              </p>
              
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 shadow-lg">
                Read About Me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-6xl p-0 overflow-hidden bg-white sm:rounded-[2rem] border-0 gap-0 [&>button.absolute]:hidden">
        <DialogTitle className="sr-only">About {name}</DialogTitle>
        <div className="grid grid-cols-1 md:grid-cols-5 h-auto max-h-[90vh] md:h-[700px] relative">
          
          {/* Custom Close Button */}
          <DialogClose className="absolute top-4 right-4 md:top-6 md:right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white shadow-xl transition-all hover:bg-white hover:text-slate-900 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sun">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {/* Left Side: Bio */}
          <div className="md:col-span-3 p-8 md:p-14 flex flex-col h-full overflow-hidden">
            <div className="shrink-0 mb-8">
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3">{name}</h3>
              <p className="text-base md:text-lg font-bold text-primary uppercase tracking-widest">{title}</p>
            </div>
            
            <div className="overflow-y-auto pr-6 space-y-6 text-[16px] md:text-[17px] leading-relaxed text-slate-600 font-medium pb-4 custom-scrollbar">
              {bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="md:col-span-2 relative h-[400px] md:h-full w-full bg-slate-100 order-first md:order-last border-b md:border-b-0 md:border-l border-slate-200 shadow-[inset_1px_0_10px_rgba(0,0,0,0.05)]">
            <Image
              src={imageUrl}
              alt={`Photograph of ${name}`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className={cn("object-cover", objectPosition)}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
