"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface FacilityGalleryProps {
  images: GalleryImage[];
}

function Tile({
  img,
  index,
  onClick,
}: {
  img: GalleryImage;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
      className="cursor-pointer overflow-hidden rounded-xl bg-slate-100 group relative aspect-square"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </motion.div>
  );
}

export function FacilityGallery({ images }: FacilityGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  if (!images || images.length === 0) return null;

  const hasTrailingBlock = images.length >= 6;
  const heroImage = images[0]!;
  const trailingBig = hasTrailingBlock ? images[images.length - 1] : null;
  const trailingSmall = hasTrailingBlock ? images.slice(images.length - 5, images.length - 1) : [];
  const middleImages = hasTrailingBlock ? images.slice(1, images.length - 5) : images.slice(1);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer overflow-hidden rounded-xl bg-slate-100 group relative aspect-square col-span-2 row-span-2"
          onClick={() => setSelectedImage(heroImage)}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        {middleImages.map((img, i) => (
          <Tile key={i} img={img} index={i} onClick={() => setSelectedImage(img)} />
        ))}
      </div>

      {hasTrailingBlock && trailingBig && (
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <div className="grid grid-cols-2 gap-4 md:w-1/2">
            {trailingSmall.map((img, i) => (
              <Tile key={i} img={img} index={i} onClick={() => setSelectedImage(img)} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer overflow-hidden rounded-xl bg-slate-100 group relative aspect-square md:w-1/2"
            onClick={() => setSelectedImage(trailingBig)}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
            <Image
              src={trailingBig.src}
              alt={trailingBig.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>
      )}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[100vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
