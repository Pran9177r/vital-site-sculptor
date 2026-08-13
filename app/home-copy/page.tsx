"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import {
  Brain,
  HeartHandshake,
  Users,
  BookOpen,
  Stethoscope,
  Smile,
  Sparkles,
  Phone,
  ShieldCheck,
  GraduationCap,
  Home,
  MessageSquare,
  Compass,
  ClipboardList,
  MapPin,
  Mail,
  Star,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import logoWordmark from "@/assets/logo-teen-harbor.png";
import { Reveal, useSmoothScroll } from "@/lib/motion";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { Map, MapMarker, MarkerContent, MarkerTooltip } from "@/components/ui/mapcn-marker-tooltip";
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow";
import { BrandScroller, BrandScrollerReverse } from "@/components/ui/brand-scoller";
import heroClinician from "@/assets/hero-clinician.png";
import servicesTherapy from "@/assets/services-therapy.jpg";
import groupCircle from "@/assets/group-circle.jpg";
import education from "@/assets/education.jpg";
import lifeAtHarbor from "@/assets/life-at-harbor.jpg";
import notes from "@/assets/notes.jpg";
import houseCta from "@/assets/house-cta.jpg";

// Support Cards Data
const SUPPORT_CARDS = [
  {
    icon: HeartHandshake,
    title: "Dual Diagnosis",
    desc: "Integrated care for co-occurring mental health and substance use concerns.",
  },
  {
    icon: Brain,
    title: "Mental Health Care",
    desc: "Targeted therapy for anxiety, depression, mood disorders, OCD & trauma.",
  },
  {
    icon: Users,
    title: "Family Support",
    desc: "Weekly family therapy and ongoing communication to rebuild trust.",
  },
  {
    icon: BookOpen,
    title: "Academic Support",
    desc: "On-site credentialed tutor keeping students on track for graduation.",
  },
];

// What Makes Us Diff Cards Data
const DIFFERENT_CARDS = [
  {
    icon: HeartHandshake,
    title: "Whole-Person Care",
    desc: "Personalized care plans built around each teen's unique strengths, challenges, and goals.",
  },
  {
    icon: Home,
    title: "Home-Like Setting",
    desc: "A warm 6-bed residence promoting stability, connection, and structured daily routines.",
  },
  {
    icon: Sparkles,
    title: "Experiential Therapy",
    desc: "Art, music, equine therapy, mindfulness, and fitness to heal body and mind.",
  },
  {
    icon: Compass,
    title: "Aftercare & Transition",
    desc: "Discharge planning and continuing support for a confident return to home and school.",
  },
];

// Care Approach Steps Data (Matching Screenshot 02/03 & 03/03)
const CARE_APPROACH_STEPS = [
  {
    id: "01",
    eyebrow: "Our Care Approach",
    title: "Stabilization & Assessment",
    description: "Upon admission, our clinical team creates a safe, structured environment and conducts a comprehensive assessment to develop a tailored 1:1 treatment plan.",
    bullets: [
      "24/7 awake overnight supervision",
      "Psychiatric evaluation & medication management",
      "Individualized therapy roadmap",
    ],
    image: education.src,
  },
  {
    id: "02",
    eyebrow: "Our Care Approach",
    title: "Personalized Treatment",
    description: "From that understanding we build an individualized plan: evidence-based individual, group and family therapy, medication support when appropriate, education coordination and meaningful wellness activities.",
    bullets: [
      "Individual, group & family therapy",
      "Psychiatric and medication support",
      "Education, wellness & experiential care",
    ],
    image: servicesTherapy.src,
  },
  {
    id: "03",
    eyebrow: "Our Care Approach",
    title: "Growth & Continued Support",
    description: "As stability grows, focus shifts to life skills, family reconnection, and the transition home — with discharge planning and individualized aftercare recommendations so progress continues beyond treatment.",
    bullets: [
      "Life-skills development",
      "Family reconnection",
      "Discharge planning & aftercare",
    ],
    image: houseCta.src,
  },
];

// Team Members Data
const TEAM_MEMBERS = [
  {
    imageId: "SilviaRios_vv8ulc",
    name: "Silvia Rios, LMFT",
    role: "Clinical Director",
    desc: "Lead Marriage & Family Therapist specializing in adolescent trauma and family restoration.",
  },
  {
    imageId: "SabyKirpal_zlzpkv",
    name: "Saby Kirpal, NP",
    role: "Nurse Practitioner",
    desc: "Psychiatric Nurse Practitioner providing compassionate medical and psychiatric care.",
    featured: true,
  },
  {
    imageId: "KirandeepSangha_wj1fss",
    name: "Kirandeep Sangha, AMFT",
    role: "Therapist",
    desc: "Associate Therapist focusing on CBT, DBT skills, and adolescent emotional regulation.",
  },
];

// Sticky Scroll Care Approach Component
function CareApproachSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScroll = rect.height - windowHeight;
      if (totalScroll <= 0) return;

      const progress = Math.min(1, Math.max(0, -rect.top / totalScroll));
      
      if (progress < 0.35) {
        setActiveStep(0);
      } else if (progress < 0.70) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = CARE_APPROACH_STEPS[activeStep] ?? CARE_APPROACH_STEPS[0]!;

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-[#FAF7F2]">
      <div className="sticky top-20 flex min-h-[80vh] items-center py-8">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 w-full">
          <Reveal>
            <div className="bg-white/90 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-2xl backdrop-blur-md transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left Side: Content matching screenshot */}
                <div className="lg:col-span-6 space-y-5">
                  <div>
                    <span className="inline-block rounded-full bg-[#FDF2F4] px-4 py-1.5 text-xs font-bold text-[#E05275]">
                      {current.eyebrow}
                    </span>
                  </div>

                  <div className="text-sm font-bold tracking-widest text-[#635BFF]">
                    {current.id}
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                    {current.title}
                  </h3>

                  <div className="h-1 w-12 rounded-full bg-[#635BFF]" />

                  <p className="text-sm text-slate-600 leading-relaxed min-h-[72px]">
                    {current.description}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {current.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                        <span className="h-2 w-2 rounded-full bg-[#635BFF] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Progress Bar & Index Counter matching screenshot */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-6">
                    <span className="text-xs font-bold tracking-widest text-[#635BFF]">
                      0{activeStep + 1} / 03
                    </span>
                    
                    <div className="flex-1 h-1.5 rounded-full bg-slate-200 overflow-hidden relative">
                      <div
                        className="absolute inset-y-0 left-0 bg-[#635BFF] transition-all duration-500 rounded-full"
                        style={{ width: `${((activeStep + 1) / 3) * 100}%` }}
                      />
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : CARE_APPROACH_STEPS.length - 1))}
                        className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors text-xs font-bold"
                      >
                        ←
                      </button>
                      <button
                        onClick={() => setActiveStep((prev) => (prev < CARE_APPROACH_STEPS.length - 1 ? prev + 1 : 0))}
                        className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors text-xs font-bold"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Side: Image Card matching screenshot */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    {CARE_APPROACH_STEPS.map((step, idx) => (
                      <img
                        key={step.id}
                        src={step.image}
                        alt={step.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                          activeStep === idx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default function HomeCopyPage() {
  useSmoothScroll();

  return (
    <div className="page-enter min-h-screen bg-[#FAF7F2] font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#FAF7F2]">
        <Reveal>
          <PrismaHero />
        </Reveal>

        {/* Floating Call Button at bottom-left */}
        <a
          href="tel:8005001000"
          className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-amber-600"
          title="Call Admissions"
        >
          <Phone className="h-6 w-6 animate-pulse" />
        </a>
      </section>

      {/* 2 & 3. UNIFIED SERVICES & PATHWAYS SECTION */}
      <section id="services" className="bg-[#FAF7F2] py-20 md:py-28 border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-24">
          
          {/* Part A: Our Services Overview */}
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left Side: Overlapping Dual Images */}
            <div className="lg:col-span-6 relative flex justify-center items-center py-4">
              <Reveal variant="scale">
                <img
                  src={notes.src}
                  alt="Therapist taking notes during a session with a teen"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="img-zoom w-[74%] rounded-3xl object-cover shadow-lg border border-white/60"
                />
              </Reveal>
              <Reveal variant="scale" delay={160}>
                <img
                  src={servicesTherapy.src}
                  alt="Teen talking with a therapist in a bright living room"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="img-zoom absolute -right-2 bottom-2 w-[65%] rounded-3xl border-4 border-white object-cover shadow-2xl"
                />
              </Reveal>
            </div>

            {/* Right Side: Text & Stats Content Column */}
            <div className="lg:col-span-6">
              <Reveal>
                <span className="inline-block rounded-full bg-[#FDF2F4] px-4 py-1.5 text-xs font-bold text-[#E05275]">
                  Our Services
                </span>
              </Reveal>

              <Reveal delay={90}>
                <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl leading-tight">
                  Support For Mental Health And Dual Diagnosis
                </h2>
              </Reveal>

              <Reveal delay={120}>
                <div className="my-4 h-1 w-16 rounded-full bg-[#635BFF]" />
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Teen Harbor provides comprehensive residential behavioral health services for
                  adolescents in a safe, structured and supportive environment. Our individualized
                  approach combines evidence-based therapy, psychiatric support, family involvement,
                  education assistance and meaningful wellness activities designed to promote healing,
                  stability and personal growth.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Services may include individual, group and family therapy; medication support;
                  academic coordination; life-skills development; therapeutic recreation; fitness; art
                  and music activities; mindfulness; and experiential services such as equine therapy.
                  Each treatment plan is tailored to the unique needs, strengths and goals of the
                  adolescent and their family.
                </p>
              </Reveal>

              <Reveal delay={250}>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xl font-bold text-[#635BFF]">Whole-Person</p>
                    <p className="mt-1 text-xs text-slate-500 leading-normal">
                      Care plans built around strengths, diagnoses and goals
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#635BFF]">Family-Involved</p>
                    <p className="mt-1 text-xs text-slate-500 leading-normal">
                      Families are part of the journey from day one
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-8">
                  <Link
                    href="/treatment-and-services"
                    className="inline-flex items-center justify-center rounded-full bg-[#F97316] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#EA580C] hover:shadow-lg"
                  >
                    LEARN MORE →
                  </Link>
                </div>
              </Reveal>
            </div>

          </div>

          {/* Part B: Find The Right Support For U */}
          <div className="pt-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Reveal>
                <span className="inline-block rounded-full bg-[#FDF2F4] px-4 py-1.5 text-xs font-bold text-[#E05275]">
                  Individualized Pathways
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
                  Find the right support for u
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-slate-600 mt-2.5 text-sm md:text-base">
                  Explore tailored treatment options designed for adolescents aged 12–17 and their families.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SUPPORT_CARDS.map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <Reveal key={idx} delay={idx * 100}>
                    <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full text-center items-center group">
                      <div className="h-12 w-12 rounded-2xl bg-[#FDF2F4] text-[#E05275] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                      <p className="text-xs leading-relaxed text-slate-600 flex-1">{card.desc}</p>
                      <Link
                        href="/treatment-and-services"
                        className="mt-6 text-xs font-bold text-[#635BFF] hover:text-[#4B44E0] uppercase tracking-wider inline-flex items-center gap-1.5"
                      >
                        Learn More <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 4. LOCATION SECTION */}
      <section id="location" className="bg-[#FAF7F2] pt-8 pb-6 text-[#23221E] relative overflow-hidden border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-5 mb-5">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#6B6658]">
                  LOCATION & ACCESSIBILITY
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
                  Central Valley, California
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#23221E] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-black transition-all"
                >
                  <MapPin className="h-3.5 w-3.5" /> Admissions Info
                </a>
                <a
                  href="tel:8005001000"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#23221E]/30 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#23221E] hover:bg-[#23221E]/10 transition-all"
                >
                  <Phone className="h-3.5 w-3.5" /> (800) 500-1000
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Full-Width Edge-to-Edge Map */}
        <Reveal delay={120}>
          <div className="w-full h-[320px] md:h-[380px] overflow-hidden border-t border-b border-slate-300/70 shadow-sm">
            <Map center={[-119.7871, 36.7468]} zoom={10}>
              <MapMarker longitude={-119.7871} latitude={36.7468}>
                <MarkerContent>
                  <div data-mapcn-marker="Teen Harbor Residential Center" className="size-6 rounded-full border-2 border-white bg-amber-500 shadow-lg transition-transform hover:scale-125 flex items-center justify-center">
                    <div className="size-2 rounded-full bg-white animate-ping" />
                  </div>
                </MarkerContent>
                <MarkerTooltip>Teen Harbor Residential Center — Central Valley, CA</MarkerTooltip>
              </MapMarker>

              <MapMarker longitude={-119.8100} latitude={36.7550}>
                <MarkerContent>
                  <div data-mapcn-marker="Admissions Center" className="size-5 rounded-full border-2 border-white bg-blue-600 shadow-lg transition-transform hover:scale-125" />
                </MarkerContent>
                <MarkerTooltip>Admissions & Family Welcome Center</MarkerTooltip>
              </MapMarker>
            </Map>
          </div>
        </Reveal>
      </section>

      {/* 5. TREATMENT EDUCATION & LIFE AT TEEN HARBOR */}
      <section className="bg-[#FAF7F2] py-16 md:py-24 border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-5 md:px-12">
          <Reveal>
            <HoverSlider className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
                
                {/* Left Column: Image Viewer with Hover Image Swap */}
                <div className="lg:col-span-6">
                  <div className="relative h-[500px] md:h-[620px] w-full rounded-2xl overflow-hidden shadow-md cursor-pointer group bg-slate-100">
                    <HoverSliderImageWrap className="w-full h-full">
                      <HoverSliderImage
                        index={0}
                        imageUrl={education.src}
                        src={education.src}
                        alt="Educational Support"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                      <HoverSliderImage
                        index={1}
                        imageUrl={notes.src}
                        src={notes.src}
                        alt="Life at Teen Harbor"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </HoverSliderImageWrap>
                  </div>
                </div>

                {/* Right Column: Content Column matching screenshot typography */}
                <div className="lg:col-span-6 flex flex-col justify-between min-h-[500px] md:min-h-[620px] py-2">
                  <div>
                    {/* Two Program Navigation Buttons */}
                    <div className="flex gap-6 mb-8 border-b border-slate-200 pb-3">
                      <TextStaggerHover
                        index={0}
                        text="Educational Support"
                        className="cursor-pointer text-lg font-medium text-[#1A1A1A] hover:text-amber-700 transition-colors"
                      />
                      <span className="text-slate-300">|</span>
                      <TextStaggerHover
                        index={1}
                        text="Life at Teen Harbor"
                        className="cursor-pointer text-lg font-medium text-[#1A1A1A] hover:text-amber-700 transition-colors"
                      />
                    </div>

                    {/* Program 1 Text Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-normal text-[#1A1A1A]">
                        Educational Support
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        At Teen Harbor, we believe that healing and education go hand in hand. A residential treatment stay should not mean putting a student's future on hold.
                      </p>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        Continuing academic progress helps provide structure, builds confidence, and supports a successful transition back to everyday life.
                      </p>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        Our on-site credentialed tutor works with each adolescent to maintain educational momentum throughout treatment. We collaborate closely with parents, schools, and school districts to develop an individualized plan that aligns with the student's academic needs, credits, accommodations, and graduation goals whenever possible. Whether a student is enrolled in public school, private school, or another educational program, our team is committed to minimizing disruptions and ensuring they remain engaged in their education while receiving the care they need.
                      </p>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        By integrating education into treatment, Teen Harbor helps adolescents continue learning, achieve academic success, and return to school with greater confidence and stability.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      href="/treatment-and-services"
                      className="inline-block text-sm font-medium text-[#1A1A1A] underline underline-offset-4 tracking-wide hover:opacity-75 transition-opacity"
                    >
                      Browse
                    </Link>
                  </div>
                </div>

              </div>
            </HoverSlider>
          </Reveal>
        </div>
      </section>

      {/* 6. WHAT MAKES US DIFF */}
      <section className="bg-[#FAF7F2] py-20 border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Reveal>
              <span className="inline-block rounded-full bg-[#FDF2F4] px-4 py-1.5 text-xs font-bold text-[#E05275]">
                Our Distinction
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3">
                what makes us diff
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-slate-600 mt-3 text-sm md:text-base">
                Why families choose Teen Harbor for adolescent care and lasting stability.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENT_CARDS.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full text-center items-center group">
                    <div className="h-14 w-14 rounded-2xl bg-[#FDF2F4] text-[#E05275] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600 flex-1">{card.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. ACCREDITATION BANNER */}
      <section className="bg-[#1C2936] py-16 text-white text-center">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold tracking-widest text-amber-300 uppercase mb-4">
              Licensed & Accredited Care
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest text-white mb-10">
              accreditation
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center max-w-5xl mx-auto">
            <Reveal delay={120}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center flex flex-col items-center justify-center min-h-[120px] hover:bg-white/10 transition-all">
                <CldImage
                  src="Logo-JC-Gold-Seal-of-Approval-Accredited_cpxsyp"
                  alt="Joint Commission"
                  width={140}
                  height={140}
                  className="h-14 w-auto object-contain mb-2 brightness-200"
                />
                <p className="text-xs font-bold text-slate-200">The Joint Commission</p>
                <p className="text-[10px] text-slate-400">Gold Seal Approval</p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center flex flex-col items-center justify-center min-h-[120px] hover:bg-white/10 transition-all">
                <CldImage
                  src="Unknown-3_jiclcm"
                  alt="CDSS"
                  width={140}
                  height={140}
                  className="h-14 w-auto object-contain mb-2 brightness-200"
                />
                <p className="text-xs font-bold text-slate-200">CDSS Licensed</p>
                <p className="text-[10px] text-slate-400">California Dept of Social Services</p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center flex flex-col items-center justify-center min-h-[120px] hover:bg-white/10 transition-all">
                <CldImage
                  src="Unknown-2_wtmy8d"
                  alt="NAMI"
                  width={140}
                  height={140}
                  className="h-14 w-auto object-contain mb-2 brightness-200"
                />
                <p className="text-xs font-bold text-slate-200">NAMI Partner</p>
                <p className="text-[10px] text-slate-400">National Alliance on Mental Illness</p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center flex flex-col items-center justify-center min-h-[120px] hover:bg-white/10 transition-all">
                <ShieldCheck className="h-10 w-10 text-amber-400 mb-2" />
                <p className="text-xs font-bold text-slate-200">Certified Facility</p>
                <p className="text-[10px] text-slate-400">State Certified Standards</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. REVIEWS MARQUEE SCROLLER */}
      <section className="py-20 bg-[#FAF7F2] overflow-hidden border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-5 mb-10 text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-[#FDF2F4] px-4 py-1.5 text-xs font-bold text-[#E05275]">
              Family Testimonials
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3">
              Reviews
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-slate-600 mt-2 text-sm max-w-xl mx-auto">
              Hear real experiences from families who have found healing and transformation at Teen Harbor.
            </p>
          </Reveal>
        </div>

        {/* Dual Marquee Scrollers */}
        <Reveal delay={200}>
          <div className="space-y-4">
            <BrandScroller />
            <BrandScrollerReverse />
          </div>
        </Reveal>
      </section>

      {/* 8.5. CARE APPROACH SECTION (MATCHING SCREENSHOT 03/03) */}
      <CareApproachSection />

      {/* 9. TEAM */}
      <section id="team" className="py-20 bg-[#FAF7F2]">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal>
              <span className="inline-block rounded-full bg-[#FDF2F4] px-4 py-1.5 text-xs font-bold text-[#E05275]">
                Clinical Leadership
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3">
                team
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-slate-600 mt-2 text-sm">
                Dedicated professionals passionate about youth mental health.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member, idx) => (
              <Reveal key={idx} delay={idx * 120}>
                <div
                  className={`bg-white rounded-2xl p-7 text-center border transition-all duration-300 flex flex-col h-full justify-between ${
                    member.featured
                      ? "border-amber-500 shadow-xl md:-translate-y-4 bg-amber-50/20"
                      : "border-slate-200/80 shadow-md hover:shadow-lg"
                  }`}
                >
                  <div>
                    <div className="relative mx-auto h-36 w-36 mb-6">
                      <CldImage
                        src={member.imageId}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="rounded-full object-cover h-full w-full border-4 border-white shadow-md"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-4">
                      {member.role}
                    </p>
                    <p className="text-xs leading-relaxed text-slate-600 mb-6">{member.desc}</p>
                  </div>
                  <Link
                    href="/about#team"
                    className="inline-block text-xs font-bold text-slate-800 hover:text-amber-700 uppercase tracking-wider border-t border-slate-100 pt-4"
                  >
                    View Bio →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER (Clean, Unboxed Full-Width Footer) */}
      <footer className="bg-[#FAF7F2] py-16 border-t border-slate-300/60 text-slate-800">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start border-b border-slate-300/60 pb-12 mb-8">
              <div>
                <img
                  src={logoWordmark.src}
                  alt="Teen Harbor"
                  className="h-auto w-[170px] mb-4"
                />
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                  Central Valley’s Premier Residential Treatment Center for Youth. Providing compassionate behavioral health care for adolescents aged 12–17.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 text-sm text-left">
                <p className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-1">Quick Links</p>
                <Link href="/" className="hover:text-amber-700 transition-colors text-xs text-slate-600">Home</Link>
                <Link href="/about" className="hover:text-amber-700 transition-colors text-xs text-slate-600">About Us</Link>
                <Link href="/treatment-and-services" className="hover:text-amber-700 transition-colors text-xs text-slate-600">Treatment & Services</Link>
                <Link href="/admissions" className="hover:text-amber-700 transition-colors text-xs text-slate-600">Admissions</Link>
              </div>

              <div className="flex flex-col gap-3 text-sm">
                <p className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-1">Admissions Helpline</p>
                <a href="tel:8005001000" className="text-2xl font-bold text-slate-900 hover:text-amber-700 transition-colors">
                  (800) 500-1000
                </a>
                <p className="text-xs text-slate-500">24/7 Confidential Assistance & Consultation</p>
                <Link
                  href="/contact"
                  className="inline-block w-fit rounded-full bg-slate-900 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-amber-600 transition-all shadow-sm"
                >
                  Get Help Now
                </Link>
              </div>
            </div>

            <div className="text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Teen Harbor Residential Treatment. All rights reserved.
            </div>
          </Reveal>
        </div>
      </footer>

    </div>
  );
}
