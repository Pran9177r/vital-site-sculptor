"use client";

import { Reveal } from "@/lib/motion";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import houseCta from "@/assets/house-cta.jpg";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={houseCta.src} 
            alt="Contact Us Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="mx-auto max-w-4xl px-5 text-center relative z-10 text-white">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              We are here to help. Reach out to our admissions team to learn more about our program, verify insurance, or begin the admissions process.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-navy pointer-events-none" style={{ height: '60%' }} />
        
        <div className="mx-auto max-w-6xl px-5 relative z-10">
          <div className="grid lg:grid-cols-3 gap-10">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8 text-white">
              <Reveal delay={200}>
                <div>
                  <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
                  <p className="text-white/80 leading-relaxed">
                    Our team is available to answer your questions and provide the support you need. 
                    No pressure—just clear answers.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={300}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-full">
                      <Phone className="h-6 w-6 text-sun" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <a href="tel:5595895825" className="text-white/80 hover:text-sun transition-colors">
                        559-589-5825
                      </a>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={400}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-full">
                      <Mail className="h-6 w-6 text-sun" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <a href="mailto:info@teenharbor.com" className="text-white/80 hover:text-sun transition-colors">
                        info@teenharbor.com
                      </a>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={500}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-full">
                      <MapPin className="h-6 w-6 text-sun" />
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
                </Reveal>

                <Reveal delay={600}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-full">
                      <Globe className="h-6 w-6 text-sun" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Website</p>
                      <a href="https://www.teenharbor.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-sun transition-colors">
                        www.teenharbor.com
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Reveal delay={300}>
                <div id="insurance" className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-8">Send Us a Message / Verify Insurance</h3>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
