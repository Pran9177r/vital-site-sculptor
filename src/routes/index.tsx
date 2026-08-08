import { createFileRoute } from "@tanstack/react-router";
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
  MessageSquare,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Users,
  Wallet,
} from "lucide-react";

import logo from "@/assets/logo.png";
import logoWordmark from "@/assets/logo-teen-harbor.png";
import {
  Reveal,
  useActiveSection,
  useParallax,
  useScrolled,
  useSmoothScroll,
} from "@/lib/motion";
import { CareApproachStory } from "@/components/CareApproachStory";
import heroClinician from "@/assets/hero-clinician.png";
import servicesTherapy from "@/assets/services-therapy.jpg";
import groupCircle from "@/assets/group-circle.jpg";
import education from "@/assets/education.jpg";
import lifeAtHarbor from "@/assets/life-at-harbor.jpg";
import houseCta from "@/assets/house-cta.jpg";
import notes from "@/assets/notes.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teen Harbor | Residential Behavioral Health Care for Teens" },
      {
        name: "description",
        content:
          "Teen Harbor provides compassionate residential mental health and dual diagnosis care for adolescents, with therapy, family involvement and education support.",
      },
      { property: "og:title", content: "Teen Harbor | Residential Care for Teens" },
      {
        property: "og:description",
        content:
          "Safe, structured residential behavioral health treatment for adolescents: individualized therapy, psychiatric support, family involvement and academics.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Teen Harbor | Residential Care for Teens" },
      {
        name: "twitter:description",
        content:
          "Safe, structured residential behavioral health treatment for adolescents in California.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Teen Harbor",
          description:
            "Compassionate residential mental health and dual diagnosis care for teens.",
          medicalSpecialty: "Psychiatric",
          areaServed: "California",
        }),
      },
    ],
  }),
  component: Index,
});

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
  { img: team1, name: "Silvia Rios, LMFT", role: "Clinical Director" },
  { img: team2, name: "Kirandeep Sangha, AMFT", role: "Therapist" },
  { img: team3, name: "Saby Kirpal, NP", role: "Nurse Practitioner" },
];

const ACCREDITATIONS = [
  { name: "The Joint Commission", detail: "Accredited — National Quality Approval" },
  { name: "CDSS", detail: "California Department of Social Services" },
  { name: "NAMI California", detail: "National Alliance on Mental Illness" },
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

function Index() {
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
              src={logoWordmark}
              alt="Teen Harbor"
              width={700}
              height={222}
              className="h-auto w-[130px] sm:w-[150px] md:w-[165px]"
            />
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link text-sm font-medium transition-colors hover:text-primary ${
                  active === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-primary">
              <Phone className="h-4 w-4" />
            </span>
            <div className="hidden leading-tight sm:block">
              <p className="text-sm font-semibold">Admissions</p>
              <p className="text-xs text-muted-foreground">(421) 123 8821</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="bg-mint">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:min-h-[calc(100svh-72px)] md:grid-cols-2 md:gap-16 md:py-0 lg:gap-20">
          <div className="md:py-16">
            <h1 className="text-4xl leading-tight md:text-5xl lg:text-[3.4rem]">
              <span className="hero-line block">Compassionate Residential</span>
              <span
                className="hero-line block"
                style={{ "--enter-delay": "150ms" } as CSSProperties}
              >
                Care for Teens
              </span>
            </h1>
            <p
              className="hero-line mt-5 max-w-md text-base text-muted-foreground"
              style={{ "--enter-delay": "340ms" } as CSSProperties}
            >
              Welcoming teens and families to a safe, nurturing environment where healing and growth
              begin together.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="#contact"
                className="hero-line btn-motion rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-float)] hover:opacity-90"
                style={{ "--enter-delay": "480ms" } as CSSProperties}
              >
                Get Started
              </a>
              <a
                href="#about"
                className="hero-line text-sm font-semibold text-foreground transition-colors hover:text-primary"
                style={{ "--enter-delay": "600ms" } as CSSProperties}
              >
                Learn More <span className="arrow-nudge">→</span>
              </a>
            </div>
          </div>
          <div className="relative flex items-end justify-center md:h-[calc(100svh-72px)]">
            <img
              ref={heroImageRef}
              src={heroClinician}
              alt="Teen Harbor clinician holding a treatment chart"
              width={1008}
              height={1200}
              className="hero-rise parallax-y h-auto w-full max-w-[520px] object-contain object-bottom md:max-h-[86%] md:w-auto lg:max-w-none"
            />
            <div
              className="card-in-left absolute left-0 top-[18%]"
              style={{ "--enter-delay": "300ms" } as CSSProperties}
            >
              <div
                ref={card1Ref}
                className="float-a card-soft px-4 py-2 text-sm font-medium"
              >
                Individualized Care
              </div>
            </div>
            <div
              className="card-in-right absolute right-0 top-[36%]"
              style={{ "--enter-delay": "550ms" } as CSSProperties}
            >
              <div
                ref={card2Ref}
                style={{ "--float-delay": "0.7s" } as CSSProperties}
                className="float-b card-soft px-4 py-3"
              >
                <p className="text-lg font-semibold text-primary">24/7</p>
                <p className="text-xs text-muted-foreground">Supervised Support</p>
              </div>
            </div>
            <div
              className="card-in-left absolute bottom-[16%] left-2"
              style={{ "--enter-delay": "800ms" } as CSSProperties}
            >
              <div
                ref={card3Ref}
                style={{ "--float-delay": "1.6s" } as CSSProperties}
                className="float-c card-soft px-4 py-3"
              >
                <p className="text-lg font-semibold text-primary">Ages 12–17</p>
                <p className="text-xs text-muted-foreground">Adolescent Program</p>
              </div>
            </div>
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
              src={notes}
              alt="Therapist taking notes during a session with a teen"
              width={1000}
              height={1000}
              loading="lazy"
              className="img-zoom w-2/3 rounded-2xl object-cover"
            />
            </Reveal>
            <Reveal variant="scale" delay={160}>
            <img
              src={servicesTherapy}
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
      <section id="treatment" className="bg-mint py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <span className="eyebrow">Treatment</span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
              Find The Right Support For Your Journey
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
              Evidence-based programs for adolescents and their families, delivered by a
              multidisciplinary clinical team.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TREATMENTS.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={(i % 3) * 110 + Math.floor(i / 3) * 60}>
                <article className="card-soft p-6">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
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
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-primary">
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
              src={lifeAtHarbor}
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
      <section className="bg-mint py-16">
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
            src={education}
            alt="Credentialed tutor working with a student at Teen Harbor"
            width={1000}
            height={750}
            loading="lazy"
            className="img-zoom w-full rounded-2xl object-cover shadow-[var(--shadow-float)]"
          />
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <span className="eyebrow">Testimonials</span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-4 text-3xl md:text-4xl">What Families Say About Us</h2>
            </Reveal>
            <Stars />
            <p className="mt-3 text-sm text-muted-foreground">
              Trusted by families across California.
            </p>
            <Reveal variant="scale" delay={140}>
            <img
              src={groupCircle}
              alt="Teens in a group therapy circle"
              width={1000}
              height={750}
              loading="lazy"
              className="img-zoom mt-6 w-full rounded-2xl object-cover"
            />
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 110}>
              <figure className="card-soft p-5">
                <Stars />
                <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold">
                  {t.name}
                  <span className="block text-xs font-normal text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-mint py-16">
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
                <img
                  src={m.img}
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

      {/* Accreditations + contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <span className="eyebrow">Accreditations</span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-4 text-3xl md:text-4xl">Care You Can Trust</h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {ACCREDITATIONS.map((a, i) => (
                <Reveal key={a.name} delay={i * 110}>
                <div className="card-soft p-5 text-center">
                  <Award className="mx-auto h-7 w-7 text-sun" />
                  <p className="mt-3 text-sm font-semibold">{a.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{a.detail}</p>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={140}>
          <div className="card-soft p-6">
            <h3 className="text-xl">Speak With Admissions</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our team is here to answer your questions and help you understand the next step.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Call Us</p>
                  <p className="text-sm font-semibold">(421) 123 8821</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Email Us</p>
                  <p className="text-sm font-semibold">admissions@teenharbor.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-primary">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Hours</p>
                  <p className="text-sm font-semibold">Admissions available 24/7</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-primary">
                  <Wallet className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Insurance</p>
                  <p className="text-sm font-semibold">Most major plans accepted</p>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden">
        <img
          src={houseCta}
          alt="The Teen Harbor residential home at dusk"
          width={1600}
          height={700}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center text-navy-foreground">
          <Reveal>
            <h2 className="text-3xl md:text-4xl">Take the First Step</h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-3 text-sm opacity-90">
              Start your journey towards a healthier and happier life.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <a
              href="#contact"
              className="btn-motion mt-7 inline-block rounded-full bg-sun px-8 py-3 text-sm font-semibold uppercase tracking-wide text-sun-foreground hover:opacity-90"
            >
              Get Started
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="" width={32} height={32} className="h-8 w-8" loading="lazy" />
              <span className="text-lg font-semibold">Teen Harbor</span>
            </div>
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
  );
}
