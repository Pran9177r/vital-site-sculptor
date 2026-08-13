"use client";

import { CldImage } from "next-cloudinary";
import type { CSSProperties } from "react";
import {
  Award,
  BookOpen,
  Brain,
  CalendarCheck,
  ClipboardList,
  Clock,
  Compass,
  FileText,
  GraduationCap,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Users,
  Wallet,
} from "lucide-react";

import logoWordmark from "@/assets/logo-teen-harbor.png";
import {
  Reveal,
  useActiveSection,
  useParallax,
  useScrolled,
  useSmoothScroll,
} from "@/lib/motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { AccreditationSection } from "@/components/AccreditationSection";
import { CareApproachStory } from "@/components/CareApproachStory";
import heroClinician from "@/assets/hero-clinician.png";
import heroDots from "@/assets/hero-dots.png.asset.json";
import servicesTherapy from "@/assets/services-therapy.jpg";
import groupCircle from "@/assets/group-circle.jpg";
import education from "@/assets/education.jpg";
import lifeAtHarbor from "@/assets/life-at-harbor.jpg";
import houseCta from "@/assets/house-cta.jpg";
import notes from "@/assets/notes.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import { BrandScroller, BrandScrollerReverse } from "@/components/ui/brand-scoller";
import { ContactForm } from "@/components/ContactForm";



const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Treatment", href: "#treatment" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const OFFERINGS = [
  { icon: Brain, label: "Mental Health Care" },
  { icon: HeartHandshake, label: "Dual Diagnosis" },
  { icon: Users, label: "Family Therapy" },
  { icon: BookOpen, label: "Academic Support" },
  { icon: Stethoscope, label: "Psychiatric Support" },
];

const TREATMENTS = [
  {
    icon: HeartHandshake,
    title: "Dual Diagnosis",
    body: "Integrated treatment for adolescents experiencing both mental health challenges and co-occurring substance use concerns, addressing both conditions simultaneously.",
  },
  {
    icon: Brain,
    title: "Mental Health Challenges",
    body: "Compassionate, evidence-based care for anxiety, depression, mood disorders, trauma-related disorders, OCD, ADHD and other emotional health challenges.",
  },
  {
    icon: Users,
    title: "Individual & Family Support",
    body: "Individual therapy, family therapy and ongoing communication help adolescents and their loved ones strengthen relationships and build lasting skills.",
  },
  {
    icon: BookOpen,
    title: "Educational Support",
    body: "An on-site credentialed tutor keeps academic momentum going, working with parents, schools and districts on credits, accommodations and graduation goals.",
  },
  {
    icon: Sparkles,
    title: "Wellness & Experiential",
    body: "Fitness and movement, mindfulness, art and music activities, therapeutic recreation and experiential services such as equine therapy.",
  },
  {
    icon: Smile,
    title: "Life Skills & Aftercare",
    body: "Life-skills development, discharge planning and individualized aftercare recommendations for a confident transition back home and to school.",
  },
];

const DIFFERENT = [
  {
    icon: HeartHandshake,
    title: "Individualized, Whole-Person Care",
    body: "No two adolescents are alike, and neither are their treatment plans. Every resident receives a personalized plan based on their unique strengths, challenges, diagnoses and goals — treating the whole person rather than just the symptoms.",
  },
  {
    icon: Home,
    title: "A Healing Environment That Feels Like Home",
    body: "A comfortable, home-like setting that promotes stability, connection and personal growth, with structured daily routines, outdoor recreation, wellness activities and healthy peer relationships.",
  },
  {
    icon: MessageSquare,
    title: "Preparing for Success Beyond Treatment",
    body: "Through family involvement, educational collaboration, life-skills development, discharge planning and aftercare, we help teens transition back to their homes, schools and communities.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The team treated our daughter like a whole person, not a diagnosis. She came home with real skills and real confidence.",
    name: "Former Teen Harbor Parent",
    role: "Parent",
  },
  {
    quote:
      "Family therapy changed how we talk to each other. We finally felt included in the healing instead of waiting outside it.",
    name: "Former Teen Harbor Parent",
    role: "Parent",
  },
  {
    quote:
      "The on-site tutor kept my son on track for graduation while he focused on getting better. That mattered more than we expected.",
    name: "Former Teen Harbor Parent",
    role: "Parent",
  },
  {
    quote:
      "Structured days, kind staff, and a house that actually felt like a home. That combination made all the difference.",
    name: "Former Teen Harbor Parent",
    role: "Parent",
  },
];

const TEAM = [
  { imageId: "SilviaRios_vv8ulc", name: "Silvia Rios, LMFT", role: "Clinical Director" },
  { imageId: "KirandeepSangha_wj1fss", name: "Kirandeep Sangha, AMFT", role: "Therapist" },
  { imageId: "SabyKirpal_zlzpkv", name: "Saby Kirpal, NP", role: "Nurse Practitioner" },
];

const ACCREDITATIONS = [
  { name: "The Joint Commission", detail: "", logoUrl: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786546374/Logo-JC-Gold-Seal-of-Approval-Accredited_cpxsyp.jpg" },
  { name: "CDSS", detail: "", logoUrl: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786546379/Unknown-3_jiclcm.jpg" },
  { name: "NAMI California", detail: "", logoUrl: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786546378/Unknown-2_wtmy8d.jpg" },
  { name: "Additional Certification", detail: "", logoUrl: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786546381/Unknown_w7qcjr.jpg" },
];

const TRUST = [
  { value: "24/7", label: "Awake overnight supervision" },
  { value: "12–17", label: "Adolescent-only program" },
  { value: "1:1", label: "Individualized treatment plans" },
  { value: "6 beds", label: "Small, home-like setting" },
];

const JOURNEY = [
  {
    icon: Phone,
    step: "01",
    title: "Confidential Call",
    body: "Speak with admissions about your teen's needs, insurance and timing. No pressure — just clear answers.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Clinical Assessment",
    body: "A comprehensive review of mental health, history, academics and family goals determines whether Teen Harbor is the right fit.",
  },
  {
    icon: Home,
    step: "03",
    title: "Move-In & Stabilization",
    body: "A warm welcome into a structured daily routine, with therapy, psychiatric support and school beginning right away.",
  },
  {
    icon: Compass,
    step: "04",
    title: "Transition & Aftercare",
    body: "Discharge planning, family preparation and individualized aftercare recommendations for the return home and to school.",
  },
];

const OUTCOMES = [
  {
    icon: ShieldCheck,
    title: "Stability First",
    body: "Consistent routines, awake overnight supervision and clinical structure create the safety that healing requires.",
  },
  {
    icon: GraduationCap,
    title: "Academic Momentum",
    body: "Credits, accommodations and graduation goals stay on track with an on-site credentialed tutor.",
  },
  {
    icon: Users,
    title: "Stronger Families",
    body: "Family therapy and ongoing communication rebuild trust so progress holds after treatment ends.",
  },
  {
    icon: Smile,
    title: "Confidence & Skills",
    body: "Life skills, wellness and experiential work help teens leave with tools they can actually use.",
  },
];

const RESOURCES = [
  {
    icon: FileText,
    title: "A Parent's Guide to Residential Care",
    body: "What residential treatment is, how it differs from outpatient care, and how to prepare your family.",
  },
  {
    icon: CalendarCheck,
    title: "What a Day Looks Like",
    body: "A walk through the daily schedule: therapy, school, wellness, recreation and personal responsibility.",
  },
  {
    icon: Wallet,
    title: "Insurance & Admissions FAQ",
    body: "Coverage, verification and what to expect during the first 72 hours after admission.",
  },
];

const FAQS = [
  {
    q: "Who does Teen Harbor serve?",
    a: "Adolescents ages 12–17 who need residential support for mental health challenges, and teens experiencing co-occurring substance use concerns alongside a mental health diagnosis.",
  },
  {
    q: "How involved are families in treatment?",
    a: "Families are part of the journey from day one through family therapy, regular clinical communication and collaborative discharge planning.",
  },
  {
    q: "Will my teen keep up with school?",
    a: "Yes. An on-site credentialed tutor works with parents, schools and districts on credits, accommodations and graduation goals whenever possible.",
  },
  {
    q: "What does daily life look like?",
    a: "Each day follows a thoughtfully planned schedule balancing clinical treatment, education, recreation, personal responsibility and time to recharge.",
  },
  {
    q: "Do you accept insurance?",
    a: "Most major plans are accepted. Our admissions team can verify benefits and explain options during your first call.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-sun" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-sm">
          ★
        </span>
      ))}
    </div>
  );
}

export default function Page() {
  const scrolled = useScrolled(12);
  useSmoothScroll();
  const active = useActiveSection(["home", "about", "services", "treatment", "team", "contact"]);
  const heroImageRef = useParallax<HTMLImageElement>(0.14);
  const card1Ref = useParallax<HTMLDivElement>(0.05);
  const card2Ref = useParallax<HTMLDivElement>(0.09);
  const card3Ref = useParallax<HTMLDivElement>(0.07);

  return (
    <div className="page-enter min-h-screen bg-background">
      

      {/* Prisma Hero */}
      <PrismaHero />

      {/* Trust / credibility */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((t, i) => (
            <Reveal key={t.label} delay={i * 100}>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-semibold text-primary">{t.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

{/* Our Services / About */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <Reveal variant="scale">
            <img
              src={notes.src}
              alt="Therapist taking notes during a session with a teen"
              width={1000}
              height={1000}
              loading="lazy"
              className="img-zoom w-2/3 rounded-2xl object-cover"
            />
            </Reveal>
            <Reveal variant="scale" delay={160}>
            <img
              src={servicesTherapy.src}
              alt="Teen talking with a therapist in a bright living room"
              width={1200}
              height={900}
              loading="lazy"
              className="img-zoom absolute -right-2 bottom-0 w-3/5 rounded-2xl border-4 border-background object-cover shadow-[var(--shadow-float)]"
            />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <span className="eyebrow">Our Services</span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Support For Mental Health And Dual Diagnosis
              </h2>
            </Reveal>
            <span className="rule-line mt-5" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Teen Harbor provides comprehensive residential behavioral health services for
              adolescents in a safe, structured and supportive environment. Our individualized
              approach combines evidence-based therapy, psychiatric support, family involvement,
              education assistance and meaningful wellness activities designed to promote healing,
              stability and personal growth.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Services may include individual, group and family therapy; medication support;
              academic coordination; life-skills development; therapeutic recreation; fitness; art
              and music activities; mindfulness; and experiential services such as equine therapy.
              Each treatment plan is tailored to the unique needs, strengths and goals of the
              adolescent and their family.
            </p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-2xl font-semibold text-primary">Whole-Person</p>
                <p className="text-xs text-muted-foreground">
                  Care plans built around strengths, diagnoses and goals
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-primary">Family-Involved</p>
                <p className="text-xs text-muted-foreground">
                  Families are part of the journey from day one
                </p>
              </div>
            </div>
            <a
              href="/treatment-and-services"
              className="btn-motion mt-8 inline-block rounded-full bg-sun px-7 py-3 text-sm font-semibold uppercase tracking-wide text-sun-foreground hover:opacity-90"
            >
              Learn More <span className="arrow-nudge">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section id="treatment" className="bg-sun/10 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <span className="eyebrow">Treatment</span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
              Find The Right Support For Your Journey
            </h2>
          </Reveal>
          
          <Tabs defaultValue="adolescents" className="mt-10">
            <Reveal delay={170}>
              <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
                <TabsTrigger value="adolescents">Teens & Young Adults</TabsTrigger>
                <TabsTrigger value="families">Parents & Families</TabsTrigger>
              </TabsList>
            </Reveal>
            
            <TabsContent value="adolescents" className="mt-8">
              <div className="grid gap-5 md:grid-cols-3">
                {TREATMENTS.slice(0, 3).map(({ icon: Icon, title, body }, i) => (
                  <Reveal key={title} delay={i * 110}>
                    <article className="card-soft p-6">
                      <Icon className="h-6 w-6 text-navy" />
                      <h3 className="mt-4 text-lg">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="families" className="mt-8">
              <div className="grid gap-5 md:grid-cols-3">
                {TREATMENTS.slice(3, 6).map(({ icon: Icon, title, body }, i) => (
                  <Reveal key={title} delay={i * 110}>
                    <article className="card-soft p-6">
                      <Icon className="h-6 w-6 text-navy" />
                      <h3 className="mt-4 text-lg">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Sticky care-approach storytelling */}
      <CareApproachStory />

      {/* Large centered statement */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
          <Reveal>
            <span className="eyebrow">Our Belief</span>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-6 text-2xl leading-snug md:text-4xl">
              No two adolescents are alike, and neither are their treatment plans. We treat the whole
              person — not just the symptoms.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What makes us different */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow">Why Choose Us</span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-4 text-3xl md:text-4xl">What Makes Us Different</h2>
            </Reveal>
            <p className="mt-4 text-sm text-muted-foreground">
              We combine individualized, evidence-based care with a supportive, home-like
              environment to help adolescents heal, grow and build a foundation for lasting success.
            </p>
            <div className="mt-8 divide-y divide-border">
              {DIFFERENT.map(({ icon: Icon, title, body }, i) => (
                <Reveal key={title} delay={i * 120}>
                <div className="flex gap-4 py-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sun/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <Reveal variant="scale">
            <img
              src={lifeAtHarbor.src}
              alt="Teens relaxing on the lawn outside the Teen Harbor residence"
              width={1200}
              height={900}
              loading="lazy"
              className="img-zoom w-full rounded-2xl object-cover shadow-[var(--shadow-float)]"
            />
            </Reveal>
            <Reveal delay={140}>
            <div className="card-soft p-6">
              <h3 className="text-xl">Life At Teen Harbor</h3>
              <span className="rule-line mt-3" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Healing happens not only in therapy sessions but also in the everyday moments that
                create stability, confidence and connection. Each day follows a thoughtfully planned
                schedule that balances clinical treatment, education, recreation, personal
                responsibility and time to recharge — building consistency, healthy habits and
                independence.
              </p>
            </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 overflow-hidden bg-[#FAF7F2] border-b border-slate-200/50">
        <div className="mx-auto max-w-6xl px-5 text-center mb-10">
          <Reveal>
            <span className="eyebrow">Testimonials</span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-4 text-3xl md:text-4xl">What Families Say About Us</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-3 text-sm text-muted-foreground">
              Trusted by families across California.
            </p>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="space-y-4">
            <BrandScroller />
            <BrandScrollerReverse />
          </div>
        </Reveal>
      </section>

{/* Team */}
      <section id="team" className="bg-sun/10 py-16">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Reveal>
            <span className="eyebrow">Meet Our Team</span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-4 text-3xl md:text-4xl">Get To Know Our Dedicated Professionals</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
              <div className="card-soft p-6">
                <CldImage
                  src={m.imageId}
                  alt={m.name}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="img-zoom mx-auto h-32 w-32 rounded-full object-cover"
                />
                <h3 className="mt-4 text-base">{m.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {m.role}
                </p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <div className="bg-white border-t border-slate-100">
        <AccreditationSection accreditations={ACCREDITATIONS} />
      </div>

      {/* Resources */}
      <section className="bg-sun/10 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">Resources</span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-4 text-3xl md:text-4xl">Helpful Reading For Families</h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {RESOURCES.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 120}>
                <article className="card-soft group/arrow h-full p-6">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  <a
                    href="/contact"
                    className="mt-5 inline-block text-sm font-semibold text-primary"
                  >
                    Learn More <span className="arrow-nudge">→</span>
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
        <div className="text-center">
          <Reveal>
            <span className="eyebrow">FAQ</span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-4 text-3xl md:text-4xl">Questions Families Ask Us</h2>
          </Reveal>
        </div>
        <div className="mt-10 space-y-4">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 90}>
              <details className="card-soft group px-6 py-5">
                <summary className="cursor-pointer list-none text-base font-semibold marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      
    </div>
  );
}
