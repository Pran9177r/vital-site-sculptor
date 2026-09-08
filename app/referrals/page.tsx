"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/lib/motion";
import { ReferralForm } from "@/components/ReferralForm";
import {
  Clock,
  Users,
  ShieldCheck,
  Phone,
  Printer,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

import logoWordmark from "@/assets/logo-teen-harbor.png";
import referralHero from "@/assets/referral-hero.jpg";

export default function ReferralsPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* ── Logo ─────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-7xl px-5 pt-6 md:pt-8 flex justify-center">
        <Link href="/" className="inline-flex items-center" aria-label="Teen Harbor home">
          <img src={logoWordmark.src} alt="Teen Harbor" className="h-20 w-auto md:h-24" />
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-4 pb-12 md:pt-6 md:pb-16 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <span className="eyebrow">For Professionals</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] text-navy">
                A Responsive Partner in Adolescent Behavioral Health
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl">
                When an adolescent needs residential treatment, time matters. We make the referral
                and admissions process responsive, transparent, and collaborative for both
                professionals and families.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a
                  href="#referral-form"
                  className="btn-motion inline-flex items-center justify-center gap-2 rounded-full bg-sun px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-sun-foreground shadow-lg hover:bg-[#32A5DA] hover:text-white transition-colors"
                >
                  Submit a Referral <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:5592341001"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/25 px-8 py-3.5 text-sm font-semibold text-navy hover:bg-[#32A5DA] hover:border-[#32A5DA] hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" /> Call Admissions
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={120}>
            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-float)]">
                <Image
                  src={referralHero}
                  alt="Adolescents in a group discussion at Teen Harbor"
                  className="img-zoom w-full h-[380px] md:h-[460px] object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl border border-slate-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-2xl font-bold text-navy leading-none">24 hrs</span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Admission response
                  </span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Referral form ────────────────────────────────────── */}
      <section id="referral-form" className="bg-[#E8F3FC] pt-12 pb-16 md:pt-16 md:pb-24 scroll-mt-24">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow">Refer an Adolescent</span>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold text-navy">Start a Referral</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Our team is ready to review your referral and help determine the appropriate next
                step. Complete as much as you can, we will follow up for anything else we need.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 bg-white p-6 sm:p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100">
              <ReferralForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Discuss first ───────────────────────────────────── */}
      <section className="bg-white pt-16 pb-14 md:pt-24 md:pb-20 border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <Reveal>
                <span className="rule-line" />
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 text-3xl md:text-4xl font-bold text-navy">
                  Need to Discuss a Referral First?
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  You don&apos;t have to complete a referral form before speaking with us. If
                  you&apos;re unsure whether an adolescent may be appropriate for Teen Harbor,
                  contact our admissions team to discuss the case.
                </p>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <div className="card-soft p-7 space-y-5">
                <a href="tel:5592341001" className="flex items-start gap-4 link-motion">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-500">Admissions Phone</span>
                    <span className="block text-lg font-semibold text-navy">559-234-1001</span>
                  </span>
                </a>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-primary">
                    <Printer className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-500">Secure Fax</span>
                    <span className="block text-lg font-semibold text-navy">559-777-9929</span>
                  </span>
                </div>
                <a href="mailto:referrals@teenharbor.com" className="flex items-start gap-4 link-motion">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-500">Secure Email</span>
                    <span className="block text-lg font-semibold text-navy break-all">
                      referrals@teenharbor.com
                    </span>
                  </span>
                </a>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-500">Location</span>
                    <span className="block text-lg font-semibold text-navy leading-snug">
                      895 S. Marks Ave.
                      <br />
                      Fresno, CA 93706
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Closing band ────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-16 border-t border-slate-100">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-navy font-semibold">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" /> Quick responses
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" /> Clear communication
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" /> Collaborative care
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 text-slate-500 leading-relaxed">
              Because finding the right placement shouldn&apos;t create another barrier to getting an
              adolescent the help they need.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
