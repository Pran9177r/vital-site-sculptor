"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); // 8 second display time
    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (!testimonials.length) return null;
  const currentItem = testimonials[currentIndex] || testimonials[0];
  if (!currentItem) return null;

  return (
    <div className="relative mx-auto max-w-4xl px-5 py-10 min-h-[300px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center flex flex-col items-center"
        >
          <Quote className="h-10 w-10 text-sun/50 mb-6 rotate-180" />
          <blockquote className="text-xl md:text-3xl font-medium text-slate-800 leading-snug mb-8">
            "{currentItem.quote}"
          </blockquote>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-primary text-lg tracking-wide">
              {currentItem.name}
            </span>
            {currentItem.role && (
              <span className="text-sm text-slate-500 mt-1 uppercase tracking-widest">
                {currentItem.role}
              </span>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-primary w-8" : "bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
