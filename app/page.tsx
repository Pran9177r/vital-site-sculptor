"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
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
import { ScrollArea } from "@/components/ui/scroll-area";
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
import { ContactForm } from "@/components/ContactForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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
    title: "Individualized Care Plans",
    body: "No two adolescents are alike, and neither are their treatment plans. Every resident receives a personalized plan based on their unique strengths, challenges, diagnoses and goals — addressing each adolescent's needs, not just their symptoms.",
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
      "The team treated our daughter as an individual, not a diagnosis. She came home with real skills and real confidence.",
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

const ACCREDITATIONS = [
  { name: "The Joint Commission", detail: "", logoUrl: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786546374/Logo-JC-Gold-Seal-of-Approval-Accredited_cpxsyp.jpg" },
  { name: "CDSS", detail: "", logoUrl: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786546379/Unknown-3_jiclcm.jpg" },
  { name: "Additional Certification", detail: "", logoUrl: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786546381/Unknown_w7qcjr.jpg" },
  { name: "AAMFT", detail: "", logoUrl: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787450995/AAMFT_xucfkf.jpg" },
  { name: "Better Business Bureau", detail: "", logoUrl: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787450995/BBB-_-Better-Business-Bureau-logo_fz4whr.png" },
  { name: "Psychology Today", detail: "", logoUrl: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787451033/psych_today_nllpzg.jpg" },
];

const TRUST = [
  { value: "24/7", label: "Awake overnight supervision" },
  { value: "12–17", label: "Adolescent-only program" },
  { value: "6 beds", label: "Home like setting" },
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
    modalContent: (
      <ScrollArea className="h-[60vh] pr-4">
        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <p>
            Choosing residential treatment for your child can feel like a significant decision. Understanding what residential care looks like—and what your family can expect—can make the process feel more manageable.
          </p>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">What Is Residential Treatment?</h4>
            <p>Residential treatment provides 24-hour care in a safe, structured, and supportive environment for adolescents who need more support than traditional outpatient services can provide.</p>
            <p>At Teen Harbor, treatment is designed to address each adolescent's individual needs—not simply a diagnosis or a specific behavior. Youth receive individualized clinical support while continuing to build the skills, routines, relationships, and confidence they need for life beyond treatment.</p>
            <p>Depending on each youth’s individualized needs, care may include individual therapy, group therapy, family involvement, psychiatric and medication support, educational support, skill development, structured activities, and opportunities for recreation and connection.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">Residential vs. Outpatient Care</h4>
            <p>Outpatient treatment allows a young person to remain at home while attending scheduled therapy or treatment appointments. For many adolescents, this level of care is appropriate and effective.</p>
            <p>Residential care may be considered when a young person needs greater structure, supervision, therapeutic intensity, or stabilization than can reasonably be provided through outpatient services alone.</p>
            <p>The goal is not to separate a child from their family. Instead, residential treatment creates a dedicated period of support while helping the entire family prepare for a successful transition home.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">The Family Is Part of Treatment</h4>
            <p>Healing rarely happens in isolation. Family participation is an important part of the treatment process at Teen Harbor.</p>
            <p>Families may participate in family therapy, treatment planning, progress discussions, education, and discharge planning. Our team works to help parents and caregivers better understand their child’s needs while strengthening communication, boundaries, coping strategies, and the family’s ability to support continued progress at home.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">Preparing Your Family</h4>
            <p>Before admission, talk openly with your child about why treatment is being considered. Acknowledge that they may feel nervous, angry, uncertain, or even relieved. You do not need to have every answer.</p>
            <p>It can also be helpful to prepare siblings and other important family members for the temporary change at home and to approach treatment as something the family will participate in together.</p>
            <p>Most importantly, remember that residential care is one part of a larger journey. The work that begins during treatment is intended to create a foundation that can continue at home, at school, and within the community.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">What Happens Next?</h4>
            <p>If you are wondering whether residential treatment may be appropriate for your child, you do not have to determine the right level of care on your own.</p>
            <p>The Teen Harbor team can speak with you about your child’s current needs, answer questions about our program and admissions process, and help determine whether Teen Harbor may be an appropriate fit.</p>
            <p>Have questions about residential care? <a href="/contact" className="text-primary hover:underline font-medium">Contact Teen Harbor</a> to speak with our admissions team.</p>
          </div>
        </div>
      </ScrollArea>
    ),
  },
  {
    icon: CalendarCheck,
    title: "What a Day Looks Like",
    body: "A walk through the daily schedule: therapy, school, wellness, recreation and personal responsibility.",
    modalContent: (
      <ScrollArea className="h-[60vh] pr-4">
        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <p>
            Structure can provide stability, but adolescence still needs room for connection, growth, and simply being a kid. At Teen Harbor, each day thoughtfully balances clinical treatment, education, wellness, recreation, and personal responsibility within a supportive residential environment.
          </p>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">Morning | Starting With Intention</h4>
            <p>Days begin with a consistent morning routine designed to build healthy habits and independence. Youth have time for personal care, room responsibilities, breakfast, medication support when applicable, and preparation for the day ahead.</p>
            <p>Simple routines become opportunities to practice accountability, organization, and self-care.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">Clinical Care | Doing the Work</h4>
            <p>Treatment is individualized to each youth’s needs and goals. Throughout the week, residents participate in a combination of individual therapy, group therapy, family therapy, psychiatric services, and other therapeutic programming as clinically appropriate.</p>
            <p>Sessions focus not only on what brought a young person to treatment, but on developing practical skills for emotional regulation, communication, relationships, coping, decision-making, and life beyond residential care.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">Education | Staying Connected to the Future</h4>
            <p>Treatment should support a young person’s future—not put it on hold.</p>
            <p>Dedicated educational time helps residents remain engaged academically while receiving treatment. Our team works to provide structure and support so youth can continue making progress toward their educational goals.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">Wellness | Caring for Mind and Body</h4>
            <p>Mental health and physical well-being are deeply connected. Daily life at Teen Harbor incorporates opportunities for movement, nutritious meals, outdoor time, mindfulness, healthy routines, and restorative downtime.</p>
            <p>Wellness is approached as something sustainable that youth can carry with them long after treatment ends.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">Recreation | There Is Still Room to Be a Kid</h4>
            <p>Residential treatment is meaningful work, but it shouldn't feel clinical every moment of the day.</p>
            <p>Residents have opportunities for recreation, social connection, creative activities, games, outdoor experiences, and planned community outings. These moments provide more than fun—they allow youth to practice communication, build healthy relationships, discover interests, and experience success outside of therapy.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">Personal Responsibility | Building Independence</h4>
            <p>Throughout the day, residents participate in age-appropriate responsibilities such as caring for their personal space, following routines, participating in the community, and practicing everyday life skills.</p>
            <p>Our goal isn't simply to create success within the structure of Teen Harbor. It is to help each young person develop the confidence, skills, and independence to carry that progress home.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">More Than a Schedule</h4>
            <p>No two treatment journeys are exactly alike. Individual schedules may vary based on clinical needs, education, appointments, and treatment goals.</p>
            <p>What remains consistent is the intention behind each day: providing a safe, structured environment where young people can heal, learn, connect, and prepare for what comes next.</p>
          </div>
        </div>
      </ScrollArea>
    ),
  },
  {
    icon: Wallet,
    title: "Insurance & Admissions FAQ",
    body: "Coverage, verification and what to expect during the first 72 hours after admission.",
    modalContent: (
      <ScrollArea className="h-[60vh] pr-4">
        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <p>
            Seeking residential treatment for your child can come with a lot of questions—especially when it comes to insurance, eligibility, and what happens after admission. Our team works to make the process as clear and supportive as possible.
          </p>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">Does Insurance Cover Residential Treatment?</h4>
            <p>Coverage varies by insurance plan, medical necessity, benefits, and authorization requirements. Teen Harbor works with families to verify available benefits and explore coverage options before admission whenever possible.</p>
            <p>Insurance verification is not a guarantee of payment or authorization. Our team will help explain the information available from your insurance provider so you can better understand potential coverage and next steps.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">What Happens During Insurance Verification?</h4>
            <p>With your permission, our team may contact your insurance provider to review benefits related to behavioral health and residential treatment. Depending on the plan, additional clinical information or prior authorization may be required.</p>
            <p>We will communicate with you throughout the process and let you know if additional information is needed.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">What Is the Admissions Process?</h4>
            <p>The process generally begins with a confidential conversation about your child’s current needs, treatment history, safety concerns, and goals for care.</p>
            <p>From there, our clinical team reviews the information provided to determine whether Teen Harbor can safely and appropriately meet your child’s needs. When Teen Harbor is an appropriate fit, our admissions team will guide your family through the remaining paperwork, financial arrangements, arrival planning, and what to bring.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">What Should We Expect During the First 72 Hours?</h4>
            <p>The first few days are intentionally focused on orientation, assessment, stabilization, and connection.</p>
            <p>Your child will become familiar with the home, daily routines, expectations, staff, and other residents. Our team will begin completing appropriate clinical assessments, reviewing medications and health information, identifying immediate needs, and developing an individualized treatment plan.</p>
            <p>We also recognize that entering residential treatment is a major transition. The first 72 hours are about more than completing assessments—they are about helping your child begin to feel safe, supported, and understood.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">When Does Treatment Begin?</h4>
            <p>Treatment begins from the moment your child enters our care. During the initial days, the clinical team gathers information and gets to know your child so that services can be tailored to their individual strengths, needs, risks, and treatment goals.</p>
            <p>As the assessment process progresses, the treatment plan and ongoing schedule become increasingly individualized.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">Will Our Family Be Involved?</h4>
            <p>Yes. Family involvement is an important component of residential treatment whenever clinically appropriate.</p>
            <p>Parents and caregivers may participate in treatment planning, family therapy, progress discussions, education, and discharge planning. Our goal is to help create progress that extends beyond the residential environment and can be supported when your child returns home.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">How Quickly Can Admission Happen?</h4>
            <p>Timing depends on several factors, including clinical appropriateness, bed availability, required documentation, insurance authorization, and financial arrangements.</p>
            <p>Our admissions team will help you understand what is needed and move the process forward as efficiently as possible.</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-base">Still Have Questions?</h4>
            <p>You don't need to understand every part of residential treatment or insurance before reaching out. That is what our admissions team is here to help with.</p>
            <p>Contact Teen Harbor for a confidential admissions conversation, insurance verification, or help determining whether residential treatment may be appropriate for your child.</p>
          </div>
        </div>
      </ScrollArea>
    ),
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
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
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
            <Image
              src={notes}
              alt="Therapist taking notes during a session with a teen"
              width={1000}
              height={1000}
              placeholder="blur"
              className="img-zoom w-2/3 rounded-2xl object-cover"
            />
            </Reveal>
            <Reveal variant="scale" delay={160}>
            <Image
              src={servicesTherapy}
              alt="Teen talking with a therapist in a bright living room"
              width={1200}
              height={900}
              placeholder="blur"
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
                <p className="text-2xl font-semibold text-primary">Individualized</p>
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
      <section id="treatment" className="bg-[#E5F3FD] py-16">
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
            <Image
              src={lifeAtHarbor}
              alt="Teens relaxing on the lawn outside the Teen Harbor residence"
              width={1200}
              height={900}
              placeholder="blur"
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
      <section className="py-20 overflow-hidden bg-[#F5FBFF] border-b border-slate-200/50">
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
          <div className="mx-auto max-w-6xl px-12 relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {TESTIMONIALS.map((t, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2 h-full">
                      <Card className="h-full bg-white shadow-sm border-slate-100 flex flex-col justify-between">
                        <CardContent className="p-8 flex flex-col h-full justify-between gap-6">
                          <p className="text-muted-foreground leading-relaxed text-sm italic relative">
                            "{t.quote}"
                          </p>
                          <div>
                            <p className="font-semibold text-primary">{t.name}</p>
                            <p className="text-xs text-muted-foreground">{t.role}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </Reveal>
      </section>

      {/* Accreditations */}
      <div className="bg-white border-t border-slate-100">
        <AccreditationSection accreditations={ACCREDITATIONS} />
      </div>

      {/* Resources */}
      <section className="bg-[#E5F3FD] py-20 md:py-28">
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
            {RESOURCES.map(({ icon: Icon, title, body, modalContent }, i) => (
              <Reveal key={title} delay={i * 120}>
                <article className="card-soft group/arrow h-full p-6 flex flex-col">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">{body}</p>
                  
                  {modalContent ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="no-blue-hover mt-5 text-left text-sm font-semibold text-primary inline-flex items-center group-hover/arrow:text-primary/80 transition-colors cursor-pointer">
                          Learn More <span className="arrow-nudge ml-1">→</span>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl max-h-[90vh]">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
                        </DialogHeader>
                        {modalContent}
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <a
                      href="/contact"
                      className="mt-5 inline-block text-sm font-semibold text-primary"
                    >
                      Learn More <span className="arrow-nudge">→</span>
                    </a>
                  )}
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
