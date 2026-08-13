"use client";

import { Reveal } from "@/lib/motion";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import Image from "next/image";

const TEAM_MEMBERS = [
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
    imageUrl: team1.src,
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
    imageUrl: team2.src,
  }
];

export default function AboutPage() {
  return (
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
      <section className="bg-slate-50 py-20 md:py-32 border-y border-slate-100">
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
    </div>
  );
}
