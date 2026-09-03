"use client";

import { useState } from "react";
import { Reveal } from "@/lib/motion";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin, Globe, ShieldCheck, MessageCircle, CheckCircle2 } from "lucide-react";
import houseCta from "@/assets/house-cta.jpg";
import Image from "next/image";

const INSURANCE_PROVIDERS: { name: string; src: string; bg?: string }[] = [
  { name: "Aetna", src: "/insurance/aetna.png" },
  { name: "Anthem", src: "/insurance/anthem.svg" },
  { name: "Blue Shield of California", src: "/insurance/blueshield.png" },
  { name: "Carelon", src: "/insurance/carelon.png" },
  { name: "Cigna Healthcare", src: "/insurance/cigna.jpg", bg: "#0033ff" },
  { name: "ComPsych", src: "/insurance/compsych.png" },
  { name: "Health Net", src: "/insurance/healthnet.jpg" },
  { name: "Humana", src: "/insurance/humana.png" },
  { name: "Optum", src: "/insurance/optum.png" },
  { name: "UC SHIP", src: "/insurance/ucship.png" },
  { name: "UMR", src: "/insurance/umr.png" },
  { name: "UnitedHealthcare", src: "/insurance/unitedhealthcare.svg" },
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'insurance' | 'get-started'>('insurance');

  return (
    <div className="flex flex-col w-full relative min-h-screen">
      {/* Global Full-Page Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src={houseCta}
          alt="Contact Us Background"
          fill
          className="object-cover blur-[8px] scale-110"
          priority
        />
        {/* Soft readability scrim — keeps the photo visible while text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/40" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 z-10 text-white">
        <div className="mx-auto max-w-5xl px-5 w-full">
          <Reveal>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight [text-shadow:_0_2px_16px_rgba(0,0,0,0.55)]">Contact & Admissions</h1>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto font-medium [text-shadow:_0_1px_10px_rgba(0,0,0,0.5)]">
                We're here to help you navigate the next steps. Choose an option below to get started.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content - Tabs & Forms */}
      <section id="contact-tabs" className="py-12 md:py-16 relative z-10">
        <div className="mx-auto max-w-6xl px-5 relative z-10">
          
          {/* Tab Navigation */}
          <Reveal delay={100}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 max-w-2xl mx-auto">
              <button
                onClick={() => setActiveTab('insurance')}
                className={`flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-full font-bold transition-all duration-300 shadow-xl border ${
                  activeTab === 'insurance'
                    ? 'bg-sun text-white border-sun/50 scale-105 shadow-[0_10px_30px_rgba(247,165,49,0.3)]'
                    : 'bg-black/35 text-white border-white/25 hover:bg-black/45 backdrop-blur-md'
                }`}
              >
                Verify Insurance
              </button>
              <button
                onClick={() => setActiveTab('get-started')}
                className={`flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-full font-bold transition-all duration-300 shadow-xl border ${
                  activeTab === 'get-started'
                    ? 'bg-blue-500 text-white border-blue-500/50 scale-105 shadow-[0_10px_30px_rgba(59,130,246,0.3)]'
                    : 'bg-black/35 text-white border-white/25 hover:bg-black/45 backdrop-blur-md'
                }`}
              >
                Get Started
              </button>
            </div>
          </Reveal>

          {/* Tab Content: Verify Insurance */}
          {activeTab === 'insurance' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
              {/* Logos Section */}
              <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 mb-10 text-center shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">Insurance Covered Mental Health Care</h2>
                <p className="text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
                  Teen Harbor exists to increase access to mental health care that helps people thrive. We accept most commercial insurance plans, including:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                  {INSURANCE_PROVIDERS.map((provider) => (
                    <div
                      key={provider.name}
                      style={provider.bg ? { backgroundColor: provider.bg } : undefined}
                      className={`flex items-center justify-center rounded-2xl border p-5 h-24 md:h-28 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                        provider.bg ? "border-transparent" : "border-slate-200 bg-white"
                      }`}
                    >
                      <img
                        src={provider.src}
                        alt={`${provider.name} logo`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Insurance Form */}
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-4xl mx-auto relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sun/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                <h2 className="text-3xl font-bold text-slate-900 mb-2 relative z-10">Insurance Verification</h2>
                <p className="text-slate-500 mb-8 relative z-10">Provide your details below. Our admissions team will verify your benefits and contact you shortly.</p>
                
                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                      <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sun focus:border-transparent transition-all" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                      <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sun focus:border-transparent transition-all" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                      <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sun focus:border-transparent transition-all" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sun focus:border-transparent transition-all" placeholder="(555) 123-4567" required />
                    </div>
                  </div>

                  <hr className="border-slate-100 my-8" />

                  <div className="space-y-2">
                    <label htmlFor="insuranceProvider" className="text-sm font-medium text-slate-700">Insurance Provider</label>
                    <input type="text" id="insuranceProvider" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sun focus:border-transparent transition-all" placeholder="e.g. Aetna, BlueCross..." required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="memberId" className="text-sm font-medium text-slate-700">Member ID</label>
                      <input type="text" id="memberId" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sun focus:border-transparent transition-all" placeholder="Member ID number" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="groupNumber" className="text-sm font-medium text-slate-700">Group Number</label>
                      <input type="text" id="groupNumber" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sun focus:border-transparent transition-all" placeholder="Group number (optional)" />
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-sun hover:bg-amber-500 text-white font-semibold py-4 rounded-xl shadow-[0_5px_15px_rgba(247,165,49,0.3)] hover:shadow-xl transition-all duration-300 mt-4">
                    Submit for Verification
                  </button>

                  <div className="mt-4 flex items-start gap-3 text-sm text-slate-500">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p>Your information is secure and confidential. Submitting this form does not commit you to treatment.</p>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Tab Content: Get Started */}
          {activeTab === 'get-started' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
              <div className="grid lg:grid-cols-3 gap-10">
                
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-8 text-white bg-black/40 border border-white/15 p-8 rounded-[2.5rem] backdrop-blur-md h-fit shadow-2xl">
                  <div>
                    <h2 className="text-3xl font-semibold mb-6">Get Started</h2>
                    <p className="text-white/80 leading-relaxed">
                      Reaching out for support is a big step, so we're here to make it easier. Submit this form, and our team will walk you through the next steps toward getting your child the care they deserve.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-xl font-semibold mb-4 text-white">Conditions Treated</h3>
                    <ul className="text-white/80 leading-relaxed list-disc list-inside space-y-2">
                      <li>Depression & Mood Disorders</li>
                      <li>Anxiety & Panic Disorders</li>
                      <li>Trauma & PTSD</li>
                      <li>ADHD & Behavioral Challenges</li>
                      <li>Co-occurring Substance Use</li>
                      <li>Self-Harm & Suicidal Ideation</li>
                    </ul>
                  </div>

                  <div className="space-y-6 pt-4 border-t border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-full shrink-0">
                        <Phone className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Phone</p>
                        <a href="tel:5592341001" className="text-white/80 hover:text-blue-400 transition-colors">
                          559-234-1001
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-full shrink-0">
                        <Mail className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Email</p>
                        <a href="mailto:info@teenharbor.com" className="text-white/80 hover:text-blue-400 transition-colors">
                          info@teenharbor.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-full shrink-0">
                        <MapPin className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Location</p>
                        <p className="text-white/80 leading-snug">
                          Teen Harbor<br/>
                          895 S. Marks<br/>
                          Fresno, CA 93706
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                    <h3 className="text-3xl font-bold text-slate-900 mb-2 relative z-10">Referral / Admissions</h3>
                    <p className="text-slate-500 mb-8 relative z-10">Fill out the form below and our admissions team will get back to you shortly.</p>
                    <div className="relative z-10">
                      <ContactForm />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
