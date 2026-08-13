"use client";

import { Reveal } from "@/lib/motion";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

const WHAT_TO_BRING = [
  "Approximately seven days of clothing",
  "Sleepwear",
  "One pair of tennis shoes",
  "One pair of house-style shoes",
  "Comfortable clothing without drawstrings",
  "Swimsuit",
];

const PROVIDED = [
  "Teen Harbor provides basic male and female toiletries.",
];

const DO_NOT_BRING_CATEGORIES = [
  "Makeup, Perfume, Cologne",
  "Electronics, including cell phones and iPods",
  "Curling irons, hair dryers, hair straighteners",
  "DVDs, CDs",
  "Glass or ceramic items, mirrors",
  "Glass toiletry containers",
  "Rope, string, dental floss, shoelaces, drawstrings",
  "Sharp objects, razors, needles, hooks, pins, paperclips, thumbtacks",
  "Clothing/accessories with spikes or studs",
  "Items containing alcohol, nail polish remover, mouthwash, hand sanitizer",
  "Glues, bonding agents, Wite-Out, aerosol containers",
  "Tobacco, alcohol, illegal substances, lighters, electronic cigarettes",
  "Plastic bags, cellophane, scotch tape, duct tape",
  "Medications",
  "Hats, headbands, sunglasses, scarves, jewelry",
  "Steel-toe boots, high-heeled shoes",
  "Bedding, pillows, stuffed animals, heat wraps",
  "Paracord items",
  "Food, drinks, flowers, balloons",
  "Musical instruments",
  "Magnets",
  "Any other items determined by staff as not therapeutic"
];

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 border-b border-slate-100 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1786613189/2152265341_sppmiw.jpg" 
            alt="Admissions Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        
        <div className="mx-auto max-w-4xl px-5 text-center relative z-10 text-white">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold">Admissions</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              Welcoming teens and families to a structured, nurturing environment that promotes safety, stability, and growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <span className="eyebrow block text-center">The Journey Begins</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl text-slate-900 text-center font-medium">What to Expect</h2>
          </Reveal>
          <div className="mt-12 space-y-6 text-lg text-slate-600 leading-relaxed">
            <Reveal delay={200}>
              <p>
                At Teen Harbor, the admission process is designed to be welcoming, supportive, and seamless for both teens and their families. From the moment of arrival, each resident receives a personalized assessment and is introduced to a structured, nurturing environment that promotes safety, stability, and growth.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p>
                Our team takes time to ensure each teen feels comfortable, understands expectations, and begins building trust right away.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p>
                During their stay, residents follow a consistent daily routine that includes therapeutic support, academic guidance, and life-skills development. Teens participate in both individual and group therapy, with clinical oversight from our Nurse Practitioner to ensure quality, continuity, and individualized care.
              </p>
            </Reveal>
            <Reveal delay={350}>
              <p>
                Education is coordinated with each resident's home school district, and an onsite educational tutor provides additional academic support to help students stay on track and build confidence in their learning.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <p>
                Families remain an important part of the process, with phone calls permitted twice daily and in-person visitation offered weekly to maintain strong connections and support progress. Length of stay varies for each resident and is determined by their individualized treatment plan, progress, and active participation in the program.
              </p>
            </Reveal>
            <Reveal delay={450}>
              <p>
                Throughout their time at Teen Harbor, our compassionate team works closely with each teen to build confidence, strengthen emotional resilience, and develop the skills needed for a successful transition forward.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What to Bring & What NOT to Bring */}
      <section className="relative py-20 md:py-32 border-t border-slate-100 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1786657056/1824952462_n7twst.jpg" 
            alt="Preparing for Your Stay Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="mx-auto max-w-6xl px-5 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 text-white">
            <Reveal>
              <span className="inline-block bg-white/20 text-white border border-white/30 backdrop-blur-md px-5 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
                Packing Guide
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 text-3xl md:text-4xl font-bold">Preparing for Your Stay</h2>
            </Reveal>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* What to Bring */}
            <Reveal delay={200}>
              <div className="card-soft h-full p-8 bg-white border border-green-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                  <h3 className="text-2xl font-semibold text-slate-900">What to Bring</h3>
                </div>
                <ul className="space-y-4">
                  {WHAT_TO_BRING.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <span className="rule-line my-6 bg-slate-100" />
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-4">Provided by Teen Harbor</h4>
                <ul className="space-y-4">
                  {PROVIDED.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* What NOT to Bring */}
            <Reveal delay={300}>
              <div className="card-soft h-full p-8 bg-white border border-red-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-400" />
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="h-8 w-8 text-red-400" />
                  <h3 className="text-2xl font-semibold text-slate-900">What NOT to Bring</h3>
                </div>
                <div className="columns-1 sm:columns-2 gap-6">
                  <ul className="space-y-3">
                    {DO_NOT_BRING_CATEGORIES.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-slate-600 break-inside-avoid">
                        <span className="text-red-400 mt-0.5 shrink-0">×</span>
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Important Notice */}
          <Reveal delay={400}>
            <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 flex items-start gap-4 max-w-4xl mx-auto">
              <AlertTriangle className="h-8 w-8 text-amber-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-amber-900">Important Notice</h4>
                <p className="mt-2 text-amber-800 leading-relaxed">
                  All valuables should be left at home as Teen Harbor and its staff will not be responsible for personal items. Items stored in our home will be locked-up and will not be accessible throughout the length of stay.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
