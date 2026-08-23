"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Reveal } from "@/lib/motion";
import { FacilityGallery } from "@/components/FacilityGallery";
import { Map, MapMarker, MarkerContent, MarkerTooltip } from "@/components/ui/mapcn-marker-tooltip";
import Image from "next/image";
import houseCta from "@/assets/house-cta.jpg";
import lifeAtHarbor from "@/assets/life-at-harbor.jpg";
import servicesTherapy from "@/assets/services-therapy.jpg";

const LOCATIONS = {
  current: {
    name: "Teen Harbor",
    address: "895 S. Marks, Fresno, CA 93706",
    tooltip: "Teen Harbor Residential Center — Central Valley, CA",
    lng: -119.7871,
    lat: 36.7468,
    zoom: 10,
    comingSoon: false,
  },
  next: {
    name: "Teen Harbor — New Location",
    address: "6667 N Van Ness Blvd, Fresno, CA 93711",
    tooltip: "Opening Soon",
    lng: -119.835441,
    lat: 36.834797,
    zoom: 12,
    comingSoon: true,
  },
} as const;

const FACILITY_IMAGES = [
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786613193/5e4543af-c9d8-4375-b8b2-f65e4d7206ad_rf4irm.png", alt: "Teen Harbor Amenities" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786613191/a9ddd34c-3e2d-434e-a1b6-6c6f61180294_q6z8ke.png", alt: "Teen Harbor Facility" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786657058/895_S._Marks_Ave-19_sg3zfm.jpg", alt: "Facility Exterior" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786657057/895_S._Marks_Ave-16_t36cw5.jpg", alt: "Facility Interior and Patio" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786657057/895_S._Marks_Ave-24_hpzmej.jpg", alt: "Facility Amenities" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787470640/ChatGPT_Image_Aug_23_2026_at_03_33_15_AM_ty5v5a.png", alt: "Expansive backyard lawn with walking path and pool area" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787472510/ChatGPT_Image_Aug_23_2026_at_04_07_16_AM_wcrwkq.png", alt: "Spacious bathroom with double vanity" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787470640/ChatGPT_Image_Aug_23_2026_at_03_33_32_AM_waynhw.png", alt: "Front exterior of the Teen Harbor residence" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787470641/ChatGPT_Image_Aug_23_2026_at_03_33_19_AM_is4fzk.png", alt: "Covered patio with outdoor dining area" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787470641/ChatGPT_Image_Aug_23_2026_at_03_33_27_AM_kxiw3p.png", alt: "Gated entrance and driveway of the residence" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787470641/ChatGPT_Image_Aug_23_2026_at_03_33_24_AM_egp0r0.png", alt: "Covered patio seating overlooking the pool and lawn" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787470623/987a11bf-020a-45ac-8487-a8a8962f0f36_pzctqw.png", alt: "Bright, comfortable bedroom with two beds" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787470645/ChatGPT_Image_Aug_23_2026_at_03_33_36_AM_asi9ud.png", alt: "Modern bathroom shower with built-in shelf" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787470640/ChatGPT_Image_Aug_23_2026_at_03_33_10_AM_uc73bl.png", alt: "Outdoor swimming pool with water feature" },
];

export default function FacilityPage() {
  const [activeLocation, setActiveLocation] = useState<keyof typeof LOCATIONS>("current");
  const location = LOCATIONS[activeLocation];

  const toggleLocation = () => {
    setActiveLocation((key) => (key === "current" ? "next" : "current"));
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 lg:py-48 border-b border-slate-100 overflow-hidden">
        {/* Tri-Split Background */}
        <div className="absolute inset-0 z-0 flex w-full">
          <div className="w-1/3 h-full relative">
            <Image
              src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1787470640/ChatGPT_Image_Aug_23_2026_at_03_33_15_AM_ty5v5a.png"
              alt="Facility Exterior"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="w-1/3 h-full relative">
            <Image 
              src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1786657057/895_S._Marks_Ave-16_t36cw5.jpg" 
              alt="Facility Interior/Patio" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover" 
              priority
            />
          </div>
          <div className="w-1/3 h-full relative">
            <Image 
              src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1786657057/895_S._Marks_Ave-24_hpzmej.jpg" 
              alt="Facility Amenities" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover" 
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 z-0 bg-slate-900/60" />

        <div className="mx-auto max-w-4xl px-5 text-center relative z-10 text-white mt-8">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our Facility</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/90 font-medium">
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
                  <Map center={[location.lng, location.lat]} zoom={location.zoom}>
                    <MapMarker longitude={location.lng} latitude={location.lat}>
                      <MarkerContent>
                        <div
                          data-mapcn-marker={location.name}
                          className={`size-6 rounded-full border-2 border-white shadow-lg transition-transform hover:scale-125 flex items-center justify-center ${
                            location.comingSoon ? "bg-blue-500" : "bg-amber-500"
                          }`}
                        >
                          <div className="size-2 rounded-full bg-white animate-ping" />
                        </div>
                      </MarkerContent>
                      <MarkerTooltip>{location.tooltip}</MarkerTooltip>
                    </MapMarker>
                    {!location.comingSoon && (
                      <MapMarker longitude={-119.81} latitude={36.755}>
                        <MarkerContent>
                          <div data-mapcn-marker="Admissions Center" className="size-5 rounded-full border-2 border-white bg-blue-500 shadow-lg transition-transform hover:scale-125" />
                        </MarkerContent>
                        <MarkerTooltip>Admissions & Family Welcome Center</MarkerTooltip>
                      </MapMarker>
                    )}
                  </Map>
                </div>
                <div className="mt-8 mb-4 text-center text-white/90">
                  <div className="mb-2 flex items-center justify-center gap-3">
                    <p className="font-semibold text-xl text-white">{location.name}</p>
                    {location.comingSoon && (
                      <span className="rounded-full bg-sun px-3 py-1 text-xs font-bold uppercase tracking-wide text-sun-foreground">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-lg">{location.address}</p>

                  <button
                    type="button"
                    onClick={toggleLocation}
                    className="btn-motion mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-navy"
                  >
                    {location.comingSoon ? (
                      <>
                        <ArrowLeft className="h-4 w-4" />
                        Back to Current Location
                      </>
                    ) : (
                      <>
                        View Our New Location
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
