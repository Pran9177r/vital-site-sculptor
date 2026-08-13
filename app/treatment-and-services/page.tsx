"use client";

import { Reveal } from "@/lib/motion";
import { TreatmentTabs, Treatment } from "@/components/TreatmentTabs";
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
    subheader: "Healing Through Active Engagement",
    description: "Through therapeutic recreation, equine activities, art, and music, experiential therapy allows teens to process emotions, practice teamwork, and build self-esteem through hands-on, meaningful experiences."
  },
  {
    id: "dbt",
    title: "Dialectical Behavior Therapy (DBT)",
    subheader: "Mindfulness and Emotional Regulation",
    description: "DBT provides adolescents with tangible skills for mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness, helping them manage intense emotions without turning to harmful behaviors."
  },
  {
    id: "cbt",
    title: "Cognitive Behavioral Therapy (CBT)",
    subheader: "Reframing Negative Thought Patterns",
    description: "CBT helps teens recognize negative or distorted thought patterns and replace them with constructive, realistic beliefs. This structured approach empowers adolescents to develop healthy problem-solving skills."
  },
  {
    id: "group-therapy",
    title: "Group Therapy",
    subheader: "Building Connection and Mutual Support",
    description: "Group therapy sessions foster peer connection and reduce feelings of isolation. Guided by experienced clinicians, teens share experiences, practice social skills, and learn from one another in a safe, supportive setting."
  }
];

export default function TreatmentAndServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-sun/10 py-20 md:py-28 border-b border-border/60">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <span className="eyebrow mx-auto">Comprehensive Residential Care</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-slate-900">
              Treatment & Services
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Tailored, evidence-based residential care designed to support adolescents through mental health challenges and empower families toward long-term healing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Program */}
      <section className="py-20 md:py-32 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <span className="eyebrow block text-center">Healing & Growth</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl text-slate-900 text-center font-medium">Our Program</h2>
          </Reveal>
          <div className="mt-12 space-y-8 text-lg text-slate-600 leading-relaxed">
            <Reveal delay={200}>
              <p>
                The residential program at Teen Harbor is meticulously structured to provide a balance of intensive therapeutic work, academic continuity, and restorative life-skills development. By treating the whole person rather than just a set of symptoms, we create a stable foundation where adolescents can rebuild their confidence and resilience.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p>
                Each day is thoughtfully designed with a blend of individual therapy, group counseling, and family integration sessions. Our clinical and medical professionals—including our dedicated Nurse Practitioners and Marriage and Family Therapists—collaborate continuously to ensure that every aspect of the teen's physical and emotional health is being supported.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <p>
                Beyond clinical care, we emphasize experiential learning and educational progress. An on-site tutor coordinates directly with each resident's home school district so they can stay on track academically. Simultaneously, structured wellness activities, mindfulness training, and life-skills workshops prepare our teens to successfully reintegrate into their daily lives with newly acquired coping mechanisms and a renewed sense of purpose.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Treatment Programs Tabs */}
      <section id="treatment-programs" className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl mb-12">
            <Reveal>
              <span className="eyebrow">Core Residential Care</span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
                Treatment Programs
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-4 text-base text-slate-600">
                Comprehensive, multi-disciplinary care programs tailored to the unique needs of adolescents.
              </p>
            </Reveal>
          </div>

          <TreatmentTabs treatments={TREATMENT_PROGRAMS} />
        </div>
      </section>

      {/* Mental Health Programs Tabs */}
      <section id="mental-health" className="py-20 md:py-32 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl mb-12">
            <Reveal>
              <span className="eyebrow">Specialized Therapy</span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
                Mental Health Programs & Modalities
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-4 text-base text-slate-600">
                Evidence-based modalities and targeted clinical approaches addressing specific mental health conditions.
              </p>
            </Reveal>
          </div>

          <TreatmentTabs treatments={MENTAL_HEALTH_PROGRAMS} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy text-navy-foreground py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Begin the Journey to Healing?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Our admissions team is available 24/7 to answer your questions and help determine if Teen Harbor is the right fit for your adolescent.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-sun px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-sun-foreground hover:bg-white hover:text-navy transition-all shadow-lg"
              >
                Get Help Now
              </a>
              <a
                href="tel:8005001000"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
              >
                Call Admissions
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
