import type { CSSProperties } from "react";

import { Reveal, useScrollProgress } from "@/lib/motion";
import notes from "@/assets/notes.jpg";
import servicesTherapy from "@/assets/services-therapy.jpg";
import lifeAtHarbor from "@/assets/life-at-harbor.jpg";

const STAGES = [
  {
    num: "01",
    title: "Assessment & Understanding",
    body: "Every stay begins with listening. Our clinical team completes a thorough psychiatric, emotional and academic assessment to understand each adolescent's strengths, diagnoses, history and goals before any plan is written.",
    points: ["Clinical & psychiatric intake", "Family history and context", "Academic and wellness review"],
    img: notes,
    alt: "Clinician reviewing an assessment with a teen",
  },
  {
    num: "02",
    title: "Personalized Treatment",
    body: "From that understanding we build an individualized plan: evidence-based individual, group and family therapy, medication support when appropriate, education coordination and meaningful wellness activities.",
    points: ["Individual, group & family therapy", "Psychiatric and medication support", "Education, wellness & experiential care"],
    img: servicesTherapy,
    alt: "Teen in a therapy session in a bright living room",
  },
  {
    num: "03",
    title: "Growth & Continued Support",
    body: "As stability grows, focus shifts to life skills, family reconnection and the transition home — with discharge planning and individualized aftercare recommendations so progress continues beyond treatment.",
    points: ["Life-skills development", "Family reconnection", "Discharge planning & aftercare"],
    img: lifeAtHarbor,
    alt: "Teens relaxing outside the Teen Harbor residence",
  },
];

function stageStyle(distance: number): CSSProperties {
  const clamped = Math.min(1, Math.abs(distance));
  const fade = Math.min(1, Math.max(0, 1 - clamped * 1.8));
  return {
    opacity: fade,
    transform: `translate3d(0, ${distance * 40}px, 0) scale(${1 - clamped * 0.03})`,
    pointerEvents: fade < 0.5 ? "none" : "auto",
  };
}

export function CareApproachStory() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const position = progress * (STAGES.length - 1);
  const activeIndex = Math.min(STAGES.length - 1, Math.round(position));

  return (
    <section id="approach" className="bg-mint">
      {/* Desktop: pinned storytelling */}
      <div ref={ref} className="hidden md:block" style={{ height: "300vh" }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
            <div>
              <span className="eyebrow">Our Care Approach</span>
              <div className="relative mt-6 h-[360px]">
                {STAGES.map((stage, i) => (
                  <div
                    key={stage.num}
                    className="absolute inset-0 transition-none"
                    style={stageStyle(i - position)}
                    aria-hidden={i !== activeIndex}
                  >
                    <p className="text-sm font-semibold tracking-widest text-primary">{stage.num}</p>
                    <h2 className="mt-3 text-3xl md:text-4xl">{stage.title}</h2>
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
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-4">
                <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                  {STAGES[activeIndex]?.num ?? "01"} / 03
                </p>
                <span className="h-0.5 flex-1 overflow-hidden rounded-full bg-border">
                  <span
                    className="block h-full rounded-full bg-primary"
                    style={{ width: `${Math.max(8, progress * 100)}%` }}
                  />
                </span>
              </div>
            </div>
            <div className="relative h-[460px]">
              {STAGES.map((stage, i) => (
                <img
                  key={stage.num}
                  src={stage.img.src}
                  alt={stage.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full rounded-3xl object-cover shadow-[var(--shadow-float)]"
                  style={stageStyle(i - position)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stacked stages */}
      <div className="mx-auto max-w-6xl space-y-12 px-5 py-16 md:hidden">
        <Reveal>
          <span className="eyebrow">Our Care Approach</span>
        </Reveal>
        {STAGES.map((stage, i) => (
          <Reveal key={stage.num} delay={i * 90}>
            <div>
              <p className="text-sm font-semibold tracking-widest text-primary">
                {stage.num} / 03
              </p>
              <h2 className="mt-3 text-2xl">{stage.title}</h2>
              <span className="rule-line mt-4" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
              <img
                src={stage.img.src}
                alt={stage.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="mt-5 w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
