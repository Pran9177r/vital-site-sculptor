"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HERO_IMAGES = [
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786613193/5e4543af-c9d8-4375-b8b2-f65e4d7206ad_rf4irm.png", alt: "Teen Harbor exterior 1" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786613192/1041548004-2_cjnicl.jpg", alt: "Teen Harbor facility 2" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786613191/a9ddd34c-3e2d-434e-a1b6-6c6f61180294_q6z8ke.png", alt: "Teen Harbor facility 3" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786613189/2152265341_sppmiw.jpg", alt: "Teen Harbor facility 4" },
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
                <img
                  src={HERO_IMAGES[currentIndex].src}
                  alt={HERO_IMAGES[currentIndex].alt}
                  className="h-full w-full object-cover object-center"
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
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-8 sm:px-8 md:px-12 md:pb-16 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 items-end gap-6 md:gap-10">
            
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.04em] text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[10vw]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="Teen Harbor" />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-6 pb-2 lg:col-span-4 lg:pb-8">
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm text-white/90 sm:text-base md:text-lg drop-shadow-md"
                style={{ lineHeight: 1.5 }}
              >
                Central Valley’s Residential Treatment Center for Youth. A compassionate residential program dedicated to supporting teens through mental health challenges with individualized care, structure, and a safe environment.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 self-start rounded-full bg-sun py-1.5 pl-6 pr-1.5 text-sm font-bold uppercase tracking-widest text-sun-foreground transition-all hover:gap-3 sm:text-base shadow-xl"
                >
                  Get Help Now
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy transition-transform group-hover:scale-110">
                    <ArrowRight className="h-5 w-5 text-white" />
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
