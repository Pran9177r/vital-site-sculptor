"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/lib/motion";
import notes from "@/assets/notes.jpg";
import servicesTherapy from "@/assets/services-therapy.jpg";
import lifeAtHarbor from "@/assets/life-at-harbor.jpg";

const STAGES = [
  {
    title: "Assessment & Understanding",
    body: "Every stay begins with listening. Our clinical team completes a thorough psychiatric, emotional and academic assessment to understand each adolescent's strengths, diagnoses, history and goals before any plan is written.",
    points: ["Clinical & psychiatric intake", "Family history and context", "Academic and wellness review"],
    img: notes,
    alt: "Clinician reviewing an assessment with a teen",
  },
  {
    title: "Personalized Treatment",
    body: "From that understanding we build an individualized plan: evidence-based individual, group and family therapy, medication support when appropriate, education coordination and meaningful wellness activities.",
    points: ["Individual, group & family therapy", "Psychiatric and medication support", "Education, wellness & experiential care"],
    img: servicesTherapy,
    alt: "Teen in a therapy session in a bright living room",
  },
  {
    title: "Growth & Continued Support",
    body: "As stability grows, focus shifts to life skills, family reconnection and the transition home — with discharge planning and individualized aftercare recommendations so progress continues beyond treatment.",
    points: ["Life-skills development", "Family reconnection", "Discharge planning & aftercare"],
    img: lifeAtHarbor,
    alt: "Teens relaxing outside the Teen Harbor residence",
  },
];

export function CareApproachStory() {
  const [index, setIndex] = useState(0);
  const stage = STAGES[index]!;

  const goPrev = () => setIndex((i) => (i === 0 ? STAGES.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === STAGES.length - 1 ? 0 : i + 1));

  return (
    <section id="approach" className="bg-[#E5F3FD] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <span className="eyebrow">Our Care Approach</span>
        </Reveal>

        <div className="mt-8 grid items-center gap-10 md:mt-10 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="text-2xl md:text-4xl">{stage.title}</h2>
            <span className="rule-line mt-5" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              {stage.body}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {stage.points.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous stage"
                className="btn-motion flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm transition-colors hover:bg-[#32A5DA] hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next stage"
                className="btn-motion flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm transition-colors hover:bg-[#32A5DA] hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative h-[280px] sm:h-[360px] md:h-[460px]">
            <Image
              src={stage.img}
              alt={stage.alt}
              fill
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-3xl object-cover shadow-[var(--shadow-float)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
