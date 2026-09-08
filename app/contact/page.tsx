"use client";

import { Reveal } from "@/lib/motion";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import houseCta from "@/assets/house-cta.jpg";
import Image from "next/image";

export default function ContactPage() {
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
      <section className="relative pt-24 pb-6 md:pt-32 md:pb-10 z-10 text-white">
        <div className="mx-auto max-w-5xl px-5 w-full">
          <Reveal>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight [text-shadow:_0_2px_16px_rgba(0,0,0,0.55)]">Contact & Insurance</h1>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto font-medium [text-shadow:_0_1px_10px_rgba(0,0,0,0.5)]">
                We're here to help you navigate the next steps. Fill out the form below to get started.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <section id="contact-tabs" className="pt-8 pb-12 md:pt-10 md:pb-16 lg:pt-12 relative z-10">
        <div className="mx-auto max-w-6xl px-5 relative z-10">
          
          <Reveal delay={100}>
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
                  <h3 className="text-3xl font-bold text-slate-900 mb-2 relative z-10">Contact & Insurance</h3>
                  <p className="text-slate-500 mb-8 relative z-10">Fill out the form below and our admissions team will get back to you shortly.</p>
                  <div className="relative z-10">
                    <ContactForm />
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
