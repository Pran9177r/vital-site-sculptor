import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Brain,
  Clock,
  HeartHandshake,
  Home,
  Mail,
  MessageSquare,
  Phone,
  Smile,
  Sparkles,
  Stethoscope,
  Users,
  Wallet,
} from "lucide-react";

import logo from "@/assets/logo.png";
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
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Teen Harbor logo" width={36} height={36} className="h-9 w-9" />
            <span className="text-lg font-semibold tracking-tight">Teen Harbor</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
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
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="text-4xl leading-tight md:text-5xl">
              Compassionate Residential Care for Teens
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              Welcoming teens and families to a safe, nurturing environment where healing and growth
              begin together.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="#contact"
                className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-float)] transition-opacity hover:opacity-90"
              >
                Get Started
              </a>
              <a
                href="#about"
                className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                Learn More →
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroClinician}
              alt="Teen Harbor clinician holding a treatment chart"
              width={1008}
              height={1200}
              className="mx-auto max-h-[430px] w-auto object-contain"
            />
            <div className="absolute left-0 top-6 card-soft px-4 py-2 text-sm font-medium">
              Individualized Care
            </div>
            <div className="absolute right-0 top-24 card-soft px-4 py-3">
              <p className="text-lg font-semibold text-primary">24/7</p>
              <p className="text-xs text-muted-foreground">Supervised Support</p>
            </div>
            <div className="absolute bottom-8 left-4 card-soft px-4 py-3">
              <p className="text-lg font-semibold text-primary">Ages 12–17</p>
              <p className="text-xs text-muted-foreground">Adolescent Program</p>
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="mx-auto max-w-6xl px-5 py-16 text-center">
        <span className="eyebrow">What We Offer</span>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl md:text-4xl">
          Comprehensive Care For Every Teen's Needs
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
          Residential behavioral health services for adolescents in a safe, structured and
          supportive environment.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {OFFERINGS.map(({ icon: Icon, label }) => (
            <div key={label} className="card-soft flex flex-col items-center gap-3 px-4 py-7">
              <Icon className="h-7 w-7 text-primary" />
              <p className="text-sm font-semibold leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services / About */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <img
              src={notes}
              alt="Therapist taking notes during a session with a teen"
              width={1000}
              height={1000}
              loading="lazy"
              className="w-2/3 rounded-2xl object-cover"
            />
            <img
              src={servicesTherapy}
              alt="Teen talking with a therapist in a bright living room"
              width={1200}
              height={900}
              loading="lazy"
              className="absolute -right-2 bottom-0 w-3/5 rounded-2xl border-4 border-background object-cover shadow-[var(--shadow-float)]"
            />
          </div>
          <div>
            <span className="eyebrow">Our Services</span>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Support For Mental Health And Dual Diagnosis
            </h2>
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
              className="mt-8 inline-block rounded-full bg-sun px-7 py-3 text-sm font-semibold uppercase tracking-wide text-sun-foreground transition-opacity hover:opacity-90"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section id="treatment" className="bg-mint py-16">
        <div className="mx-auto max-w-6xl px-5">
          <span className="eyebrow">Treatment</span>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
            Find The Right Support For Your Journey
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            Evidence-based programs for adolescents and their families, delivered by a
            multidisciplinary clinical team.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TREATMENTS.map(({ icon: Icon, title, body }) => (
              <article key={title} className="card-soft p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="mt-4 text-3xl md:text-4xl">What Makes Us Different</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              We combine individualized, evidence-based care with a supportive, home-like
              environment to help adolescents heal, grow and build a foundation for lasting success.
            </p>
            <div className="mt-8 divide-y divide-border">
              {DIFFERENT.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 py-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <img
              src={lifeAtHarbor}
              alt="Teens relaxing on the lawn outside the Teen Harbor residence"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-[var(--shadow-float)]"
            />
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
          </div>
        </div>
      </section>

      {/* Educational support */}
      <section className="bg-mint py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl">Educational Support</h2>
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
          <img
            src={education}
            alt="Credentialed tutor working with a student at Teen Harbor"
            width={1000}
            height={750}
            loading="lazy"
            className="w-full rounded-2xl object-cover shadow-[var(--shadow-float)]"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow">Testimonials</span>
            <h2 className="mt-4 text-3xl md:text-4xl">What Families Say About Us</h2>
            <Stars />
            <p className="mt-3 text-sm text-muted-foreground">
              Trusted by families across California.
            </p>
            <img
              src={groupCircle}
              alt="Teens in a group therapy circle"
              width={1000}
              height={750}
              loading="lazy"
              className="mt-6 w-full rounded-2xl object-cover"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="card-soft p-5">
                <Stars />
                <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold">
                  {t.name}
                  <span className="block text-xs font-normal text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-mint py-16">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <span className="eyebrow">Meet Our Team</span>
          <h2 className="mt-4 text-3xl md:text-4xl">Get To Know Our Dedicated Professionals</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {TEAM.map((m) => (
              <div key={m.name} className="card-soft p-6">
                <img
                  src={m.img}
                  alt={m.name}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                />
                <h3 className="mt-4 text-base">{m.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations + contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="eyebrow">Accreditations</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Care You Can Trust</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {ACCREDITATIONS.map((a) => (
                <div key={a.name} className="card-soft p-5 text-center">
                  <Award className="mx-auto h-7 w-7 text-sun" />
                  <p className="mt-3 text-sm font-semibold">{a.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{a.detail}</p>
                </div>
              ))}
            </div>
          </div>
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
          <h2 className="text-3xl md:text-4xl">Take the First Step</h2>
          <p className="mt-3 text-sm opacity-90">
            Start your journey towards a healthier and happier life.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-block rounded-full bg-sun px-8 py-3 text-sm font-semibold uppercase tracking-wide text-sun-foreground transition-opacity hover:opacity-90"
          >
            Get Started
          </a>
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
                  <a href={n.href} className="hover:opacity-100">
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
