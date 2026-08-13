"use client";

import { Reveal } from "@/lib/motion";
import { TreatmentAccordion, Treatment } from "@/components/TreatmentAccordion";
import { BookOpen, Sparkles, Home, ShieldCheck } from "lucide-react";

const TREATMENT_PROGRAMS: Treatment[] = [
  {
    id: "residential",
    title: "Residential Treatment",
    subheader: "A Safe, Home-like Environment for Healing",
    description: "Our residential program provides a structured, supportive living environment where adolescents can focus entirely on their recovery. With 24/7 awake overnight supervision, evidence-based care, and a compassionate staff, teens build healthy routines and essential life skills while feeling safe and understood."
  },
  {
    id: "education",
    title: "Teen Holistic Education",
    subheader: "Academic Continuity During Treatment",
    description: "Healing shouldn't mean falling behind academically. Our on-site credentialed tutor collaborates with local school districts and parents to ensure each teen stays on track with their credits, accommodations, and graduation goals, keeping academic momentum strong."
  },
  {
    id: "parental-support",
    title: "Parental Support Therapy",
    subheader: "Empowering Families for Lasting Change",
    description: "We believe families heal together. Through dedicated family therapy sessions and regular communication, we provide parents with the tools, understanding, and support they need to foster a healthy environment when their teen transitions back home."
  },
  {
    id: "life-skills",
    title: "Life Skills Therapy",
    subheader: "Preparing for a Confident Future",
    description: "Treatment must extend beyond therapy sessions. We teach practical life skills, including personal responsibility, emotional regulation, healthy communication, and daily routines, ensuring teens are prepared to navigate the challenges of everyday life successfully."
  }
];

const MENTAL_HEALTH_PROGRAMS: Treatment[] = [
  {
    id: "anxiety",
    title: "Teen Anxiety Treatment",
    subheader: "Finding Calm and Regaining Control",
    description: "Anxiety can be overwhelming for adolescents. Our tailored approach helps teens identify triggers, process their feelings, and learn practical coping mechanisms through therapies like CBT, helping them reduce panic and regain control of their daily lives."
  },
  {
    id: "depression",
    title: "Teen Depression Treatment",
    subheader: "Rediscovering Hope and Motivation",
    description: "We provide compassionate support for adolescents struggling with depression and mood disorders. By addressing the root causes and introducing healthy routines, we help teens combat isolation, build self-worth, and rediscover a sense of purpose."
  },
  {
    id: "adhd",
    title: "Teen ADHD Treatment",
    subheader: "Focus, Structure, and Understanding",
    description: "Our program supports teens with ADHD by providing clear structure, behavioral strategies, and individualized attention. We help them harness their energy, improve focus, and develop organizational skills that serve them well academically and personally."
  },
  {
    id: "trauma",
    title: "Teen Trauma Treatment",
    subheader: "Safe Healing from Past Experiences",
    description: "Trauma requires a delicate, specialized approach. Our trauma-informed care environment provides a safe space for adolescents to process difficult past experiences, utilizing evidence-based modalities to foster healing, safety, and emotional resilience."
  },
  {
    id: "art-therapy",
    title: "Art Therapy",
    subheader: "Creative Expression for Emotional Processing",
    description: "Sometimes words aren't enough. Art therapy offers a creative, non-verbal outlet for teens to express complex emotions, process trauma, and explore their identities in a therapeutic and non-judgmental setting."
  },
  {
    id: "experiential",
    title: "Experiential Therapy",
    subheader: "Healing Through Action and Engagement",
    description: "Experiential therapy takes healing outside the traditional session room. Through activities like mindfulness exercises, recreational outings, and interactive challenges, teens learn to overcome obstacles and build confidence in real-world scenarios."
  },
  {
    id: "dbt",
    title: "Dialectical Behavior Therapy",
    subheader: "Mastering Emotional Regulation",
    description: "DBT is a powerful tool for teens struggling with intense emotions or impulsive behaviors. We teach core DBT skills—mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness—to help adolescents make healthier choices."
  },
  {
    id: "cbt",
    title: "Cognitive Behavioral Therapy",
    subheader: "Reframing Negative Thought Patterns",
    description: "CBT helps teens understand the connection between their thoughts, feelings, and actions. By identifying and challenging negative cognitive distortions, we empower them to develop healthier perspectives and more positive behavioral responses."
  },
  {
    id: "group-therapy",
    title: "Group Therapy",
    subheader: "Connection, Empathy, and Shared Growth",
    description: "Group therapy provides a supportive peer environment where teens realize they are not alone. Guided by our clinical team, these sessions foster empathy, improve social skills, and build a strong sense of community and mutual support."
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

      {/* Treatment Programs Accordion */}
      <section id="treatment-programs" className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Our Foundation</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl md:text-4xl text-slate-900">Treatment Programs</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-slate-600">
                Core residential structures designed to foster stability, academic continuity, and familial healing in a supportive setting.
              </p>
            </Reveal>
          </div>

          <TreatmentAccordion treatments={TREATMENT_PROGRAMS} />
        </div>
      </section>

      {/* Mental Health Programs Accordion */}
      <section id="mental-health" className="py-20 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Clinical Excellence</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl md:text-4xl text-slate-900">Mental Health Programs & Therapies</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-slate-600">
                Evidence-based modalities and specialized approaches tailored to address specific diagnoses, emotional challenges, and behavioral needs.
              </p>
            </Reveal>
          </div>

          <TreatmentAccordion treatments={MENTAL_HEALTH_PROGRAMS} />
        </div>
      </section>

      {/* Our Program */}
      <section className="bg-white py-20 md:py-32">
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
