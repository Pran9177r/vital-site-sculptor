"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.png";

const HERO_IMAGES = [
  { src: hero1, alt: "Teen Harbor exterior 1" },
  { src: hero2, alt: "Teen Harbor grounds and residence" },
  { src: hero3, alt: "Teen Harbor facility 3" },
  { src: hero4, alt: "Teen Harbor swimming pool and backyard" },
];

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- PrismaHero Adapted for Teen Harbor ---------------- */

export const PrismaHero = () => {
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
    <section className="h-screen w-full">
      <div className="relative h-full w-full overflow-hidden">
        
        {/* Background Image Slider */}
        <div className="absolute inset-0 h-full w-full">
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
                <Image
                  src={HERO_IMAGES[currentIndex].src}
                  alt={HERO_IMAGES[currentIndex].alt}
                  fill
                  priority
                  className="object-cover object-center"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay" />

        {/* Gradient overlay to make text readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-2 sm:px-8 md:px-12 md:pb-2 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 items-end gap-6 md:gap-10">

            <div className="col-span-12 lg:col-span-7">
              <h1
                className="font-medium leading-[1.1] tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 -ml-2 sm:-ml-3 md:-ml-5"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="Central Valley's Residential Treatment Center for Youth with Mental Health and Dual Diagnosis Conditions" />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-6 pb-2 lg:col-span-5 lg:pb-2">
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm text-white/90 sm:text-base md:text-lg drop-shadow-md"
                style={{ lineHeight: 1.5 }}
              >
                Teen Harbor is a compassionate residential program dedicated to supporting teens through mental health and co-occurring substance use challenges with individualized care, structure, and a safe, nurturing environment. We empower adolescents to build resilience, develop healthy coping skills, and rediscover their path toward stability, confidence, and long-term success.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 self-start rounded-full bg-sun py-2 pl-8 pr-2 text-base md:text-lg font-bold uppercase tracking-widest text-sun-foreground transition-all duration-300 hover:gap-4 hover:bg-[#32A5DA] hover:text-white shadow-[0_0_30px_rgba(254,196,45,0.4)] hover:shadow-[0_0_50px_rgba(50,165,218,0.6)]"
                >
                  Get Help Now
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#32A5DA] transition-transform duration-300 group-hover:scale-110 group-hover:bg-white">
                    <ArrowRight className="h-6 w-6 text-white group-hover:text-[#32A5DA]" />
                  </span>
                </Link>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
