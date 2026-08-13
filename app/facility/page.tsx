"use client";

import { Reveal } from "@/lib/motion";
import { FacilityGallery } from "@/components/FacilityGallery";
import { Map, MapMarker, MarkerContent, MarkerTooltip } from "@/components/ui/mapcn-marker-tooltip";
import houseCta from "@/assets/house-cta.jpg";
import lifeAtHarbor from "@/assets/life-at-harbor.jpg";
import servicesTherapy from "@/assets/services-therapy.jpg";

const FACILITY_IMAGES = [
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786613193/5e4543af-c9d8-4375-b8b2-f65e4d7206ad_rf4irm.png", alt: "Teen Harbor Amenities" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786613191/a9ddd34c-3e2d-434e-a1b6-6c6f61180294_q6z8ke.png", alt: "Teen Harbor Facility" },
  { src: houseCta.src, alt: "Additional Facility Photo (Placeholder)" },
  { src: lifeAtHarbor.src, alt: "Additional Facility Photo (Placeholder)" },
  { src: servicesTherapy.src, alt: "Additional Facility Photo (Placeholder)" },
];

export default function FacilityPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Our Facility</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              A safe, comfortable, and nurturing environment designed to feel like a true home away from home.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">The Residence</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl md:text-4xl text-slate-900">A Healing Environment</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-slate-600">
                Located in Fresno County, our residential home provides the perfect setting for adolescents to focus on their recovery, build life skills, and find peace.
              </p>
            </Reveal>
          </div>
          <FacilityGallery images={FACILITY_IMAGES} />
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-navy py-20 md:py-32 text-white border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
        
        <div className="mx-auto max-w-5xl px-5 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-10 text-center">Visit Us</h3>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-white/5 p-4 md:p-6 rounded-[2rem] border border-white/10 backdrop-blur-md shadow-2xl">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-inner border border-white/20">
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
                        <div data-mapcn-marker="Admissions Center" className="size-5 rounded-full border-2 border-white bg-blue-500 shadow-lg transition-transform hover:scale-125" />
                      </MarkerContent>
                      <MarkerTooltip>Admissions & Family Welcome Center</MarkerTooltip>
                    </MapMarker>
                  </Map>
                </div>
                <div className="mt-8 mb-4 text-center text-white/90">
                  <p className="font-semibold text-xl text-white mb-2">Teen Harbor</p>
                  <p className="text-lg">895 S. Marks, Fresno, CA 93706</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
