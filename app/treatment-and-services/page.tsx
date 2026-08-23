"use client";

import { Reveal } from "@/lib/motion";
import { TreatmentTabs, Treatment } from "@/components/TreatmentTabs";
import { BookOpen, Sparkles, Home, ShieldCheck } from "lucide-react";
import servicesTherapy from "@/assets/services-therapy.jpg";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const CONDITIONS_TREATED = [
  {
    category: "Mood Disorders",
    conditions: [
      "Major Depressive Disorder",
      "Persistent Depressive Disorder (Dysthymia)",
      "Disruptive Mood Dysregulation Disorder (DMDD)",
      "Bipolar Disorders, when clinically appropriate",
      "Other Specified Depressive Disorders",
    ],
  },
  {
    category: "Anxiety Disorders",
    conditions: [
      "Generalized Anxiety Disorder",
      "Social Anxiety Disorder",
      "Panic Disorder",
      "Separation Anxiety Disorder",
      "Specific Phobias",
      "Other Specified Anxiety Disorders",
    ],
  },
  {
    category: "Trauma & Stressor-Related Disorders",
    conditions: [
      "Post-Traumatic Stress Disorder (PTSD)",
      "Acute Stress Disorder",
      "Adjustment Disorders",
      "Other Trauma- and Stressor-Related Disorders",
      "Complex trauma symptoms",
    ],
  },
  {
    category: "Behavioral & Impulse-Control Disorders",
    conditions: [
      "Oppositional Defiant Disorder (ODD)",
      "Conduct Disorder, when clinically appropriate",
      "Intermittent Explosive Disorder",
      "Impulse-control difficulties",
      "Emotional and behavioral dysregulation",
    ],
  },
  {
    category: "Neurodevelopmental & Related Conditions",
    conditions: [
      "Attention-Deficit/Hyperactivity Disorder (ADHD)",
      "Autism Spectrum Disorder, when the adolescent can safely and appropriately participate in the program",
      "Learning disorders when occurring alongside a primary behavioral health condition",
    ],
  },
  {
    category: "Obsessive-Compulsive & Related Disorders",
    conditions: [
      "Obsessive-Compulsive Disorder (OCD)",
      "Body-Focused Repetitive Behaviors",
      "Other Specified Obsessive-Compulsive and Related Disorders",
    ],
  },
  {
    category: "Eating & Body-Image Concerns",
    conditions: [
      "Disordered eating behaviors when medically stable and not requiring specialized eating-disorder treatment",
      "Body-image concerns",
    ],
  },
  {
    category: "Substance Use & Co-Occurring Disorders",
    description: "When services are permitted under the program's current licensing/certification and scope:",
    conditions: [
      "Alcohol Use Disorder",
      "Cannabis Use Disorder",
      "Stimulant Use Disorder",
      "Opioid Use Disorder",
      "Other Substance Use Disorders",
      "Co-occurring mental health and substance use disorders",
      "Substance-related behavioral and emotional concerns",
    ],
  },
  {
    category: "Other Presenting Concerns",
    description: "Teen Harbor may also provide treatment and stabilization for adolescents experiencing:",
    conditions: [
      "Suicidal ideation without need for acute inpatient hospitalization",
      "Non-suicidal self-injury/self-harming behaviors",
      "School refusal",
      "Family conflict",
      "Anger and aggression",
      "Poor impulse control",
      "Low self-esteem",
      "Grief and loss",
      "Social isolation",
      "Difficulty with emotional regulation",
      "Attachment and relationship difficulties",
      "Academic and social functioning challenges",
      "History of psychiatric hospitalization or repeated treatment placements",
    ],
  },
];

export default function TreatmentAndServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={servicesTherapy} 
            alt="Treatment and Services Background" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="mx-auto max-w-4xl px-5 text-center relative z-10 text-white">
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white">
              Treatment & Services
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
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

      {/* Conditions We Treat */}
      <section id="conditions" className="py-20 md:py-32 bg-[#E5F3FD]">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center mb-16">
            <Reveal>
              <span className="eyebrow mx-auto">Comprehensive Support</span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
                Conditions We Treat
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
                We provide targeted, evidence-based care for a wide spectrum of behavioral health challenges, working closely with families to ensure the best possible outcomes.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="bg-white rounded-2xl border border-slate-100 p-2 sm:p-6 shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {CONDITIONS_TREATED.map((item, index) => (
                  <AccordionItem key={item.category} value={`item-${index}`} className="border-slate-100 last:border-0 px-2 sm:px-4">
                    <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-primary hover:no-underline py-5">
                      {item.category}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 pb-5">
                      {item.description && (
                        <p className="mb-4 text-sm font-medium text-slate-700 italic">
                          {item.description}
                        </p>
                      )}
                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                        {item.conditions.map((condition, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 mt-2" />
                            <span className="leading-relaxed text-[15px]">{condition}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
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
      <section id="mental-health" className="py-20 md:py-32 bg-[#E5F3FD] border-t border-b border-slate-100">
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
                href="tel:5592341001"
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
