"use client";

import { Reveal } from "@/lib/motion";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { FacilityGallery } from "@/components/FacilityGallery";
import { Map, MapMarker, MarkerContent, MarkerTooltip } from "@/components/ui/mapcn-marker-tooltip";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";

const TEAM_MEMBERS = [
  {
    name: "Kirandeep Sangha",
    title: "Associate Marriage and Family Therapist (#158272)",
    bio: [
      "Kirandeep Sangha is an Associate Marriage and Family Therapist (#158272) who works with children, teens, adults, and families facing a variety of life challenges.",
      "She has experience supporting clients with anxiety, depression, trauma, PTSD, ADHD, substance use, addiction, anger, panic, OCD, eating disorders, self-esteem concerns, and experiences of abuse.",
      "Kirandeep has a strong passion for working with children and teens. She focuses on helping them build healthy coping skills, understand their emotions, and feel more confident in themselves. She also values the importance of family connection and works closely with parents to offer support and practical tools that improve communication and relationships at home.",
      "Her approach is warm, supportive, and tailored to each individual. She uses evidence-based methods such as CBT, DBT, and Solution-Focused Therapy to help clients manage stress, build skills, and create positive changes in their lives.",
      "Her goal is to create a safe and comfortable space where clients feel heard, supported, and empowered to grow."
    ],
    imageUrl: team1.src,
  },
  {
    name: "Saby Kirpal",
    title: "Dual-Certified FNP & PMHNP",
    bio: [
      "Saby Kirpal, FNP-C, PMHNP-BC, is a dual-certified Family Nurse Practitioner and Psychiatric Mental Health Nurse Practitioner dedicated to delivering comprehensive and patient-centered care across the lifespan.",
      "Her combined background in primary care and mental health allows her to support patients with a wide range of needs while ensuring continuity, safety, and compassionate care.",
      "Before becoming a nurse practitioner, Saby spent three years as a travel nurse in San Francisco, gaining invaluable clinical experience at Kaiser, Stanford Health Care, and UCSF Health.",
      "Her time in these major health systems strengthened her clinical judgment, adaptability, and commitment to high-quality patient care.",
      "Saby has extensive experience providing care in inpatient psychiatry, residential treatment centers (RTC), partial hospitalization programs (PHP), and intensive outpatient programs (IOP)."
    ],
    imageUrl: team2.src,
  }
];

const FACILITY_IMAGES = [
  { src: (require("@/assets/house-cta.jpg") as { default: { src: string } }).default.src, alt: "Teen Harbor exterior view" },
  { src: (require("@/assets/life-at-harbor.jpg") as { default: { src: string } }).default.src, alt: "Outdoor relaxation area" },
  { src: (require("@/assets/education.jpg") as { default: { src: string } }).default.src, alt: "Educational space" },
  { src: (require("@/assets/services-therapy.jpg") as { default: { src: string } }).default.src, alt: "Living room" },
  { src: (require("@/assets/group-circle.jpg") as { default: { src: string } }).default.src, alt: "Group meeting area" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">About Teen Harbor</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              A compassionate, residential environment dedicated to guiding teens toward lasting mental and emotional wellness.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Philosophy / Story */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <span className="eyebrow block text-center">Our Story</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl text-slate-900 text-center font-medium">A Foundation for Growth</h2>
          </Reveal>
          <div className="mt-12 space-y-8 text-lg text-slate-600 leading-relaxed">
            <Reveal delay={200}>
              <p>
                At Teen Harbor, we understand that adolescence is a critical time of development, often accompanied by complex emotional and behavioral challenges. We created Teen Harbor to be more than just a treatment center—we designed it to be a true harbor. A safe place where teens can anchor themselves, find stability, and begin the work of healing.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p>
                Our philosophy is rooted in the belief that true recovery requires addressing the whole person. We don't just treat diagnoses; we treat individuals. By combining clinical excellence with a warm, home-like environment, we foster a culture of respect, empathy, and accountability.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-slate-50 py-20 md:py-32 border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Our Team</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl md:text-4xl text-slate-900">Compassionate Professionals</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-slate-600">
                Our dedicated team of clinical and medical professionals works collaboratively to provide the highest standard of individualized care.
              </p>
            </Reveal>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamMemberCard 
                key={member.name}
                {...member}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Our Facility</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl md:text-4xl text-slate-900">A Healing Environment</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-slate-600">
                Located in Fresno County, our residential home provides a safe, nurturing, and comfortable setting designed to feel like a true home away from home.
              </p>
            </Reveal>
          </div>

          <FacilityGallery images={FACILITY_IMAGES} />

          <div className="mt-20 max-w-4xl mx-auto">
            <Reveal>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Visit Us</h3>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Map center={[-119.7871, 36.7468]} zoom={10}>
                    <MapMarker longitude={-119.7871} latitude={36.7468}>
                      <MarkerContent>
                        <div data-mapcn-marker="Teen Harbor Residential Center" className="size-6 rounded-full border-2 border-white bg-amber-500 shadow-lg transition-transform hover:scale-125 flex items-center justify-center">
                          <div className="size-2 rounded-full bg-white animate-ping" />
                        </div>
                      </MarkerContent>
                      <MarkerTooltip>Teen Harbor Residential Center — Central Valley, CA</MarkerTooltip>
                    </MapMarker>

                    <MapMarker longitude={-119.8100} latitude={36.7550}>
                      <MarkerContent>
                        <div data-mapcn-marker="Admissions Center" className="size-5 rounded-full border-2 border-white bg-blue-600 shadow-lg transition-transform hover:scale-125" />
                      </MarkerContent>
                      <MarkerTooltip>Admissions & Family Welcome Center</MarkerTooltip>
                    </MapMarker>
                  </Map>
                </div>
                <div className="mt-6 text-center text-slate-600">
                  <p className="font-semibold text-slate-900">Teen Harbor</p>
                  <p>895 S. Marks</p>
                  <p>Fresno, CA 93706</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
