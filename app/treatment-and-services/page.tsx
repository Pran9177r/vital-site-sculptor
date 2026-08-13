"use client";

import { Reveal } from "@/lib/motion";
import { TreatmentAccordion } from "@/components/TreatmentAccordion";
import { Brain, Users, BookOpen, Sparkles, Home, ShieldCheck } from "lucide-react";

const TREATMENTS = [
  {
    title: "Dual Diagnosis Treatment",
    subheader: "Integrated Care for Co-occurring Conditions",
    description: "Our dual diagnosis program addresses mental health challenges and substance use simultaneously. We understand that these conditions are deeply intertwined, and treating them together provides the strongest foundation for lasting recovery. Through targeted therapy, education, and continuous support, we help teens develop healthier coping mechanisms without relying on substances."
  },
  {
    title: "Mental Health Support",
    subheader: "Compassionate Care for Emotional Well-being",
    description: "We provide evidence-based care for a variety of mental health challenges including anxiety, depression, mood disorders, trauma, OCD, and ADHD. Our clinical team utilizes approaches like Cognitive Behavioral Therapy (CBT) and Dialectical Behavior Therapy (DBT) to help teens identify underlying issues, manage overwhelming emotions, and build resilience."
  },
  {
    title: "Individual & Group Therapy",
    subheader: "A Safe Space to Process and Grow",
    description: "Therapy is at the core of our program. Through one-on-one sessions, teens receive focused attention to work through personal challenges. Group therapy offers a supportive peer environment where adolescents can share experiences, practice new social skills, and realize they are not alone in their journey."
  },
  {
    title: "Family Involvement",
    subheader: "Healing Together as a Unit",
    description: "We believe that family healing is essential. We facilitate regular family therapy sessions and maintain open lines of communication. Our goal is to equip parents and guardians with the tools they need to support their teen during treatment and long after they transition back home."
  }
];

const PROGRAM_PILLARS = [
  {
    icon: ShieldCheck,
    title: "Safe & Structured Environment",
    body: "Healing requires safety. Our 24/7 awake overnight supervision and structured daily routines provide the stability necessary for teens to focus entirely on their recovery."
  },
  {
    icon: BookOpen,
    title: "Academic Continuity",
    body: "Treatment shouldn't mean falling behind in school. An on-site credentialed tutor works directly with your teen's school district to ensure credits, accommodations, and graduation goals remain on track."
  },
  {
    icon: Sparkles,
    title: "Experiential & Wellness Activities",
    body: "We incorporate fitness, mindfulness, art, music, and recreational activities. These experiential therapies help teens discover new passions and healthy outlets for stress."
  },
  {
    icon: Home,
    title: "Life Skills Development",
    body: "Preparing for the future is vital. We teach essential life skills, including personal responsibility, healthy communication, and emotional regulation, ensuring a confident transition forward."
  }
];

export default function TreatmentAndServicesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Treatment and Services</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Comprehensive, individualized care designed to support the unique needs of every teen and family.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Treatments Accordion */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Our Services</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl md:text-4xl text-slate-900">Personalized Treatment Paths</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-slate-600">
                Every adolescent's journey is different. We tailor our services to address specific diagnoses, strengths, and goals, ensuring a holistic approach to healing.
              </p>
            </Reveal>
          </div>

          <TreatmentAccordion treatments={TREATMENTS} />
        </div>
      </section>

      {/* Our Program */}
      <section className="bg-slate-50 py-20 md:py-32 border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Our Program</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl md:text-4xl text-slate-900">A Holistic Approach to Recovery</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-slate-600">
                Healing happens in the therapy room and in the everyday moments. Our program balances clinical excellence with everyday life skills.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {PROGRAM_PILLARS.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="card-soft flex flex-col p-8 h-full bg-white border border-slate-100">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sun/10 text-primary mb-6">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-4 text-slate-600 leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
