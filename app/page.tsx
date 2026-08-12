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
import { ContactCard } from "@/components/ui/contact-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import TestimonialMarquee from "@/components/ui/testimonial-marquee";



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
  { name: "The Joint Commission", detail: "Accredited — National Quality Approval", imageId: "Logo-JC-Gold-Seal-of-Approval-Accredited_cpxsyp" },
  { name: "CDSS", detail: "California Department of Social Services", imageId: "Unknown-3_jiclcm" },
  { name: "NAMI California", detail: "National Alliance on Mental Illness", imageId: "Unknown-2_wtmy8d" },
  { name: "Additional Certification", detail: "Additional Certification", imageId: "Unknown_w7qcjr" },
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
      {/* Nav */}
      <header
        className={`sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/95 shadow-[var(--shadow-card)]"
            : "border-border/60"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 transition-all duration-300 ${
            scrolled ? "py-2" : "py-3.5"
          }`}
        >
          <a href="#home" className="flex items-center link-motion">
            <img
              src={logoWordmark.src}
              alt="Teen Harbor"
              width={700}
              height={222}
              className="h-auto w-[130px] sm:w-[150px] md:w-[165px]"
            />
          </a>
          <div className="hidden items-center gap-7 md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {NAV.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.label === "Services" || item.label === "Treatment" ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent nav-link text-sm font-medium transition-colors hover:text-primary text-muted-foreground px-4 py-2">{item.label}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background border rounded-md">
                            {item.label === "Services" ? (
                              OFFERINGS.map((offer) => (
                                <li key={offer.label}>
                                  <NavigationMenuLink asChild>
                                    <a
                                      href={item.href}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      <div className="text-sm font-medium leading-none flex items-center gap-2">
                                        <offer.icon className="w-4 h-4 text-primary" />
                                        {offer.label}
                                      </div>
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                              ))
                            ) : (
                              TREATMENTS.slice(0,4).map((treat) => (
                                <li key={treat.title}>
                                  <NavigationMenuLink asChild>
                                    <a
                                      href={item.href}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      <div className="text-sm font-medium leading-none">{treat.title}</div>
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                        {treat.body}
                                      </p>
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                              ))
                            )}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className={`nav-link text-sm font-medium transition-colors hover:text-primary px-4 py-2 ${
                            active === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {item.label}
                        </a>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex items-center justify-center gap-3 rounded-full bg-sun px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-sun-foreground shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 hover:shadow-xl">
                  Get Started
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Contact Admissions</DialogTitle>
                  <DialogDescription>
                    We're here 24/7. Call us immediately or leave your contact information and we'll reach out to you.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <p className="text-center font-bold text-2xl py-4 text-primary">(421) 123 8821</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">Or email us at admissions@teenharbor.com</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative isolate overflow-hidden">
        <img
          src={houseCta.src}
          alt="The Teen Harbor residential home"
          width={1600}
          height={700}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center text-navy-foreground md:min-h-[calc(100svh-72px)] flex flex-col items-center justify-center">
          <h1 className="text-4xl leading-tight md:text-5xl lg:text-7xl font-bold">
            <span className="hero-line block">Compassionate Residential</span>
            <span
              className="hero-line block"
              style={{ "--enter-delay": "150ms" } as CSSProperties}
            >
              Care for Teens
            </span>
          </h1>
          <p
            className="hero-line mt-6 max-w-xl mx-auto text-lg opacity-90"
            style={{ "--enter-delay": "340ms" } as CSSProperties}
          >
            Welcoming teens and families to a safe, nurturing environment where healing and growth
            begin together.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-5 justify-center">
            <a
              href="#contact"
              className="hero-line btn-motion rounded-full bg-sun px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-sun-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              style={{ "--enter-delay": "480ms" } as CSSProperties}
            >
              Get Started
            </a>
            <a
              href="#about"
              className="hero-line text-sm font-semibold transition-colors hover:text-sun"
              style={{ "--enter-delay": "600ms" } as CSSProperties}
            >
              Learn More <span className="arrow-nudge">→</span>
            </a>
          </div>
        </div>
      </section>

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

      {/* What we offer */}
      <section className="mx-auto max-w-6xl px-5 py-16 text-center">
        <Reveal>
          <span className="eyebrow">What We Offer</span>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl md:text-4xl">
            Comprehensive Care For Every Teen's Needs
          </h2>
        </Reveal>
        <Reveal delay={170}>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            Residential behavioral health services for adolescents in a safe, structured and
            supportive environment.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {OFFERINGS.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 90}>
              <div className="card-soft flex flex-col items-center gap-3 px-4 py-7">
                <Icon className="h-7 w-7 text-primary" />
                <p className="text-sm font-semibold leading-snug">{label}</p>
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
              href="#treatment"
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

      {/* Educational support */}
      <section className="bg-sun/10 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl">Educational Support</h2>
            </Reveal>
            <span className="rule-line mt-4" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              At Teen Harbor, we believe that healing and education go hand in hand. A residential
              treatment stay should not mean putting a student's future on hold. Continuing academic
              progress helps provide structure, builds confidence and supports a successful
              transition back to everyday life.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our on-site credentialed tutor works with each adolescent to maintain educational
              momentum throughout treatment. We collaborate closely with parents, schools and school
              districts to develop an individualized plan that aligns with the student's academic
              needs, credits, accommodations and graduation goals whenever possible.
            </p>
          </div>
          <Reveal variant="scale" delay={120}>
          <img
            src={education.src}
            alt="Credentialed tutor working with a student at Teen Harbor"
            width={1000}
            height={750}
            loading="lazy"
            className="img-zoom w-full rounded-2xl object-cover shadow-[var(--shadow-float)]"
          />
          </Reveal>
        </div>
      </section>

      {/* Care journey / how it works */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">How It Works</span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-4 text-3xl md:text-4xl">The Care Journey, Step By Step</h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              From the first phone call to life after discharge, families always know what comes
              next.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {JOURNEY.map(({ icon: Icon, step, title, body }, i) => (
            <Reveal key={step} delay={i * 120}>
              <article className="card-soft h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sun/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold tracking-widest text-muted-foreground">
                    {step}
                  </span>
                </div>
                <h3 className="mt-5 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Family support */}
      <section className="bg-sun/10 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <Reveal variant="scale">
            <img
              src={groupCircle.src}
              alt="Family and clinician talking together in a group session"
              width={1200}
              height={900}
              loading="lazy"
              className="img-zoom w-full rounded-3xl object-cover shadow-[var(--shadow-float)]"
            />
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">Family Support</span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-4 text-3xl md:text-4xl">Families Heal Together</h2>
            </Reveal>
            <span className="rule-line mt-5" />
            <Reveal delay={150}>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Individual therapy, family therapy and ongoing communication help adolescents and
                their loved ones strengthen relationships and build lasting skills. Families are part
                of the journey from day one — included in the healing rather than waiting outside it.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <a
                href="#contact"
                className="btn-motion mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-float)] hover:opacity-90"
              >
                Talk With Admissions <span className="arrow-nudge">→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Outcomes / benefits */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Outcomes</span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-4 text-3xl md:text-4xl">What Teens Take Home With Them</h2>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 110}>
              <article className="card-soft h-full p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 overflow-hidden">
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
        <TestimonialMarquee />
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
      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <Reveal>
          <span className="eyebrow">Accreditations</span>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="mt-4 text-3xl md:text-4xl">Care You Can Trust</h2>
        </Reveal>
        <div className="mt-8 grid gap-8 grid-cols-2 sm:grid-cols-4 items-center">
          {ACCREDITATIONS.map((a, i) => (
            <Reveal key={a.name} delay={i * 110}>
            <div className="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
              {a.imageId ? (
                <CldImage
                  src={a.imageId}
                  alt={a.name}
                  width={160}
                  height={160}
                  className="mx-auto h-24 w-auto object-contain"
                />
              ) : (
                <Award className="mx-auto h-7 w-7 text-sun" />
              )}
            </div>
            </Reveal>
          ))}
        </div>
      </section>

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
                    href="#contact"
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

      {/* Bottom Section Wrap (CTA, Form, Footer) */}
      <div className="relative isolate overflow-hidden text-navy-foreground">
        <CldImage
          src="Footer_fzvnij"
          alt="The Teen Harbor residential home at dusk"
          width={1600}
          height={1400}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />

        {/* CTA */}
        <section className="relative mx-auto max-w-3xl px-5 py-20 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl">Take the First Step</h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-3 text-sm opacity-90">
              Start your journey towards a healthier and happier life.
            </p>
          </Reveal>
        </section>

        {/* Contact Form */}
        <section id="contact" className="relative mx-auto max-w-5xl px-5 py-10 md:py-16">
          <ContactCard
            title="Get in touch"
            description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
            contactInfo={[
              {
                icon: Mail,
                label: 'Email',
                value: 'admissions@teenharbor.com',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '(421) 123 8821',
              },
              {
                icon: MapPin,
                label: 'Address',
                value: 'California, United States',
                className: 'col-span-2',
              }
            ]}
          >
            <form action="" className="w-full space-y-4">
              <div className="flex flex-col gap-2">
                <Label className="text-white">Name</Label>
                <Input type="text" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-white">Email</Label>
                <Input type="email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-white">Phone</Label>
                <Input type="tel" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-white">Message</Label>
                <Textarea className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
              <Button className="w-full mt-4 rounded-full bg-sun px-8 py-6 text-sm font-semibold uppercase tracking-wide text-sun-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300" type="button">
                Get Started
              </Button>
            </form>
          </ContactCard>
        </section>

        {/* Footer */}
        <footer className="relative mt-10">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
            <div>
              <img
                src={logoWordmark.src}
                alt="Teen Harbor"
                width={700}
                height={222}
                loading="lazy"
                className="h-auto w-[160px] brightness-0 invert"
              />
              <p className="mt-4 text-sm opacity-75">
                Compassionate residential behavioral health care for adolescents and their families.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Other Pages</h3>
              <ul className="mt-4 space-y-2 text-sm opacity-75">
                {NAV.map((n) => (
                  <li key={n.label}>
                    <a href={n.href} className="link-motion inline-block hover:opacity-100">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Services</h3>
              <ul className="mt-4 space-y-2 text-sm opacity-75">
                {TREATMENTS.slice(0, 5).map((t) => (
                  <li key={t.title}>{t.title}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Find Us</h3>
              <ul className="mt-4 space-y-2 text-sm opacity-75">
                <li>California, United States</li>
                <li>(421) 123 8821</li>
                <li>admissions@teenharbor.com</li>
                <li>Admissions available 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 py-5 text-center text-xs opacity-70">
            © {new Date().getFullYear()} Teen Harbor. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
