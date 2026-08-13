"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Update this array to include real facility photos
const HERO_IMAGES = [
  { src: (require("@/assets/house-cta.jpg") as { default: { src: string } }).default.src, alt: "Teen Harbor exterior" },
  { src: (require("@/assets/life-at-harbor.jpg") as { default: { src: string } }).default.src, alt: "Teens relaxing on the lawn" },
  { src: (require("@/assets/group-circle.jpg") as { default: { src: string } }).default.src, alt: "Group therapy circle" },
];

export function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // 7 second slow transition
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-navy">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
        >
          {HERO_IMAGES[currentIndex] && (
            <img
              src={HERO_IMAGES[currentIndex].src}
              alt={HERO_IMAGES[currentIndex].alt}
              className="h-full w-full object-cover object-center"
            />
          )}
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-navy/60 transition-opacity duration-1000" />
    </div>
  );
}
