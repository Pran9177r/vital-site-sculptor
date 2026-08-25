"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Reveal } from "@/lib/motion";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "Paige Williamson",
    title: "Chief Operating Officer",
    bio: [
      "Paige Williamson is an experienced healthcare and behavioral health leader with a background spanning operations, business development, clinical services, and organizational growth. Throughout her career, she has focused on building strong programs, supporting teams, and creating systems that improve both the client and employee experience.",
      "Her experience includes leadership in behavioral healthcare, hospital business development, utilization management, senior care, and hospice services. Most recently, Paige has been involved in the development and operation of adolescent behavioral health services, helping guide programs through licensing, accreditation, compliance, and day-to-day operations.",
      "Paige enjoys taking ideas from concept to implementation and finding practical solutions that help organizations grow while keeping quality of care at the center.",
      "Outside of her professional work, Paige is a mom of three and enjoys pursuing new entrepreneurial projects and creating meaningful experiences with her family."
    ],
    imageUrl: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787468651/ChatGPT_Image_Aug_18_2026_at_08_16_28_PM_oneg2c.png",
  },
  {
    name: "Silvia Rios",
    title: "Administrator and Clinical Director, LMFT",
    bio: [
      "Silvia Rios serves as the Administrator and Clinical Director of Teen Harbor, where she has been an integral part of the program since May 2025. In her leadership role, Silvia oversees clinical programming and operations while supporting Teen Harbor’s mission to provide compassionate, structured, and individualized behavioral health treatment to adolescents and their families.",
      "Silvia is a Licensed Marriage and Family Therapist with more than 16 years of experience across diverse mental health settings. Her clinical background includes crisis intervention, child and adolescent therapy, marriage and family therapy, trauma-informed care, domestic violence, and supporting individuals and families experiencing grief, loss, and other complex behavioral health needs.",
      "Prior to joining Teen Harbor, Silvia held progressive leadership roles with Exodus Recovery, beginning as a Social Services Coordinator in 2018 and later serving as Clinical Director for the Fresno Exodus facilities. Her experience in both direct clinical care and program leadership provides a strong foundation for overseeing Teen Harbor's multidisciplinary treatment environment.",
      "Silvia holds an Associate of Arts degree in Business Administration, a Bachelor's degree in Early Childhood Development, and a Master's degree in Counseling Psychology. At Teen Harbor, she combines her clinical expertise, leadership experience, and commitment to youth mental health to help create a safe and supportive environment where adolescents can develop the skills and stability needed for lasting progress."
    ],
    imageUrl: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787515927/ChatGPT_Image_Aug_17_2026_at_11_11_54_AM_lhe9ne.png",
  },
  {
    name: "Kirandeep Sangha",
    title: "Associate Marriage and Family Therapist (#158272)",
    bio: [
      "Kirandeep Sangha is an Associate Marriage and Family Therapist (#158272) who works with children, teens, adults, and families facing a variety of life challenges.",
      "She has experience supporting clients with anxiety, depression, trauma, PTSD, ADHD, substance use, addiction, anger, panic, OCD, eating disorders, self-esteem concerns, and experiences of abuse.",
      "Kirandeep has a strong passion for working with children and teens. She focuses on helping them build healthy coping skills, understand their emotions, and feel more confident in themselves. She also values the importance of family connection and works closely with parents to offer support and practical tools that improve communication and relationships at home.",
      "Her approach is warm, supportive, and tailored to each individual. She uses evidence-based methods such as CBT, DBT, and Solution-Focused Therapy to help clients manage stress, build skills, and create positive changes in their lives.",
      "Her goal is to create a safe and comfortable space where clients feel heard, supported, and empowered to grow."
    ],
    imageUrl: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787506844/image0_paqpvg.jpg",
  },
  {
    name: "Saby Kirpal",
    title: "Dual-Certified FNP & PMHNP",
    bio: [
      "Saby Kirpal, FNP-C, PMHNP-BC, is a dual-certified Family Nurse Practitioner and Psychiatric Mental Health Nurse Practitioner dedicated to delivering comprehensive and patient-centered care across the lifespan.",
      "Her combined background in primary care and mental health allows her to support patients with a wide range of needs while ensuring continuity, safety, and compassionate care.",
      "Before becoming a nurse practitioner, Saby spent three years as a travel nurse in San Francisco, gaining invaluable clinical experience at Kaiser, Stanford Health Care, and UCSF Health.",
      "Her time in these major health systems strengthened her clinical judgment, adaptability, and commitment to high-quality patient care.",
      "Saby has extensive experience providing care in inpatient psychiatry, residential treatment centers (RTC), partial hospitalization programs (PHP), and intensive outpatient programs (IOP)."
    ],
    imageUrl: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787516397/salvia_lzrcrk.webp",
    objectPosition: "object-center",
  }
];

const ABOUT_IMAGES = [
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787518400/IMG_8281_tskxsl.jpg", alt: "Teen Harbor Campus" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787518379/IMG_8287_llksok.jpg", alt: "Comfortable Environment" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787518301/IMG_6079_uz4hyj.jpg", alt: "Serene Spaces" },
];

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1786546369/genMid.601054_1_1_puvswy.jpg" 
            alt="About Teen Harbor Background" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="mx-auto max-w-4xl px-5 text-center relative z-10 text-white">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold">About Teen Harbor</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              A compassionate, residential environment dedicated to guiding teens toward lasting mental and emotional wellness.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Philosophy / Story */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
        
        <div className="mx-auto max-w-4xl px-5 relative z-10">
          <Reveal>
            <span className="eyebrow block text-center">Our Story</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl md:text-4xl text-slate-900 text-center font-medium">A Foundation for Growth</h2>
          </Reveal>
          <div className="mt-16 space-y-8 text-lg md:text-xl text-slate-700 leading-relaxed font-medium bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/60 relative">
            <div className="absolute -top-6 -left-6 text-9xl text-amber-500/20 font-serif leading-none select-none">"</div>
            <Reveal delay={200}>
              <p className="relative z-10">
                At Teen Harbor, we understand that adolescence is a critical time of development, often accompanied by complex emotional and behavioral challenges. We created Teen Harbor to be more than just a treatment center—we designed it to be a true harbor. A safe place where teens can anchor themselves, find stability, and begin the work of healing.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="relative z-10">
                Our philosophy is rooted in the belief that true recovery requires addressing the whole person. We don't just treat diagnoses; we treat individuals. By combining clinical excellence with a warm, home-like environment, we foster a culture of respect, empathy, and accountability.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="bg-slate-50 py-20 md:py-32 border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Our Team</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl md:text-4xl text-slate-900">Compassionate Professionals</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-slate-600">
                Our dedicated team of clinical and medical professionals works collaboratively to provide the highest standard of individualized care.
              </p>
            </Reveal>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamMemberCard 
                key={member.name}
                {...member}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-20 md:py-32" id="gallery">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Our Environment</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl md:text-4xl text-slate-900 font-medium">Healing & Comfort</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-slate-600 text-lg">
                A glimpse into the Teen Harbor campus, thoughtfully designed to foster healing, connection, and comfort.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {ABOUT_IMAGES.map((img) => (
              <div
                key={img.src}
                className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl shadow-[var(--shadow-card)]"
                onClick={() => setSelectedImage(img)}
              >
                <div className="absolute inset-0 z-10 bg-black/0 transition-colors group-hover:bg-black/10" />
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

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
