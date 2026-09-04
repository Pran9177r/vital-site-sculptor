"use client";

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
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787604327/ChatGPT_Image_Aug_24_2026_at_02_38_34_PM_g7bqkd.png", alt: "Teen Harbor Amenities" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787606131/ChatGPT_Image_Aug_23_2026_at_03_33_32_AM_e6r4ur.png", alt: "Teen Harbor Facility" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787607019/ChatGPT_Image_Aug_24_2026_at_05_29_51_PM_woadxp.png", alt: "Facility Exterior" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787607554/ChatGPT_Image_Aug_24_2026_at_05_37_23_PM_j66igq.png", alt: "Facility Interior and Patio" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787605345/ChatGPT_Image_Aug_24_2026_at_05_00_27_PM_aclxcw.png", alt: "Front exterior of the Teen Harbor residence" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787612552/5_ucxaeb.png", alt: "Facility Amenities" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787612562/6_zjbqkt.png", alt: "Large backyard lawn with walking path and pool area" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787612570/7_rfak2v.png", alt: "Spacious bathroom with double vanity" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787614633/office_image_10MB_jvvha1.png", alt: "Administrative office with security monitoring wall" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787613005/ChatGPT_Image_Aug_24_2026_at_07_09_40_PM_dutetb.png", alt: "Gated entrance and driveway of the residence" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787613247/ChatGPT_Image_Aug_24_2026_at_07_13_52_PM_bghraf.png", alt: "Covered patio seating overlooking the pool and lawn" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787470645/ChatGPT_Image_Aug_23_2026_at_03_33_36_AM_asi9ud.png", alt: "Bright, comfortable bedroom with two beds" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1787472510/ChatGPT_Image_Aug_23_2026_at_04_07_16_AM_wcrwkq.png", alt: "Modern bathroom shower with built-in shelf" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1786613191/a9ddd34c-3e2d-434e-a1b6-6c6f61180294_q6z8ke.png", alt: "Outdoor swimming pool with water feature" },
];

const VAN_NESS_IMAGES = [
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1788420458/1_nr2aep.jpg", alt: "Front exterior of the Van Ness residence at dusk with circular driveway" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1788420459/2_p7trzx.jpg", alt: "Living room with vaulted wood ceiling and doors opening to the yard" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1788420459/4_tu86q4.jpg", alt: "Open kitchen with large island, double ovens and quartz counters" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1788420459/3_ctc4vh.jpg", alt: "Great room with fireplace and floor-to-ceiling windows to the garden" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1788420460/5_pgdkjr.jpg", alt: "Bright bedroom with ceiling fan and hardwood floors" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1788420460/6_tgyyd2.jpg", alt: "Bathroom with glass shower, soaking tub and a window overlooking mature trees" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1788420466/8_jlf6fk.jpg", alt: "Covered back patio and landscaped lawn at dusk" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1788420466/7_puwx4l.jpg", alt: "Backyard swimming pool with the residence lit up at dusk" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1788564694/WhatsApp_Image_2026-09-05_at_0.51.54_hc6atl.jpg", alt: "New location photo 1" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1788564695/WhatsApp_Image_2026-09-05_at_03.51.54_emiimu.jpg", alt: "New location photo 2" },
  { src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1788564697/WhatsApp_Image_2026-09-05_at_04.51.54_eroc50.jpg", alt: "New location photo 3" },
];

export default function FacilityPage() {
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
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Located in Fresno County, our spacious 5,000-square-foot residential home offers adolescents a safe, welcoming, and supportive environment where they can focus on healing, build essential life skills, and find a renewed sense of peace and stability.
              </p>
            </Reveal>
          </div>
          <FacilityGallery images={FACILITY_IMAGES} />
        </div>
      </section>

      {/* Van Ness House Section */}
      <section className="py-20 md:py-32 bg-[#E8F3FC]">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Opening Soon</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl md:text-4xl text-slate-900">Our New Home on Van Ness</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Set on a private, tree-lined lot at 6667 N Van Ness Blvd in Fresno, our second residence brings the same warm, home-like care to a bright, fully renovated single-story home with open living spaces, comfortable bedrooms, a chef&apos;s kitchen, and a large backyard with a pool.
              </p>
            </Reveal>
          </div>
          <FacilityGallery images={VAN_NESS_IMAGES} />
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-20 md:py-32 text-slate-900 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 relative z-10">
          <div className="text-center mb-10">
            <Reveal>
              <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">Visit Us</h3>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map 1: Current */}
            <Reveal delay={100}>
              <div className="bg-white p-4 md:p-6 rounded-[2rem] border border-slate-100 shadow-xl h-full flex flex-col">
                <div className="aspect-square md:aspect-video w-full rounded-2xl overflow-hidden shadow-inner border border-slate-200 mb-6 relative">
                  <Map center={[LOCATIONS.current.lng, LOCATIONS.current.lat]} zoom={LOCATIONS.current.zoom}>
                    <MapMarker longitude={LOCATIONS.current.lng} latitude={LOCATIONS.current.lat}>
                      <MarkerContent>
                        <div
                          data-mapcn-marker={LOCATIONS.current.name}
                          className="size-6 rounded-full border-2 border-white shadow-lg transition-transform hover:scale-125 flex items-center justify-center bg-amber-500"
                        >
                          <div className="size-2 rounded-full bg-white animate-ping" />
                        </div>
                      </MarkerContent>
                      <MarkerTooltip>{LOCATIONS.current.tooltip}</MarkerTooltip>
                    </MapMarker>
                    <MapMarker longitude={-119.81} latitude={36.755}>
                      <MarkerContent>
                        <div data-mapcn-marker="Admissions Center" className="size-5 rounded-full border-2 border-white bg-blue-500 shadow-lg transition-transform hover:scale-125" />
                      </MarkerContent>
                      <MarkerTooltip>Admissions & Family Welcome Center</MarkerTooltip>
                    </MapMarker>
                  </Map>
                </div>
                <div className="mt-auto text-center text-slate-600">
                  <div className="mb-2 flex items-center justify-center gap-3">
                    <p className="font-semibold text-xl text-slate-900">{LOCATIONS.current.name}</p>
                  </div>
                  <p className="text-lg">{LOCATIONS.current.address}</p>
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${LOCATIONS.current.lat},${LOCATIONS.current.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-amber-500 hover:text-amber-600 font-semibold transition-colors"
                  >
                    Get Directions <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Map 2: Next (Coming Soon) */}
            <Reveal delay={200}>
              <div className="bg-white p-4 md:p-6 rounded-[2rem] border border-slate-100 shadow-xl h-full flex flex-col relative">
                <div className="aspect-square md:aspect-video w-full rounded-2xl overflow-hidden shadow-inner border border-slate-200 mb-6 relative">
                  {/* Prominent Coming Soon Badge (Bottom Centered) */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-max max-w-[90%]">
                    <div className="bg-amber-500 text-white px-5 md:px-6 py-2.5 rounded-full font-bold text-sm md:text-base tracking-[0.15em] uppercase shadow-[0_8px_30px_rgba(245,158,11,0.5)] border border-white/30 flex items-center gap-3 backdrop-blur-md">
                      <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-white"></span>
                      </span>
                      Coming Soon
                    </div>
                  </div>
                  
                  <Map center={[LOCATIONS.next.lng, LOCATIONS.next.lat]} zoom={LOCATIONS.next.zoom}>
                    <MapMarker longitude={LOCATIONS.next.lng} latitude={LOCATIONS.next.lat}>
                      <MarkerContent>
                        <div
                          data-mapcn-marker={LOCATIONS.next.name}
                          className="size-6 rounded-full border-2 border-white shadow-lg transition-transform hover:scale-125 flex items-center justify-center bg-blue-500"
                        >
                          <div className="size-2 rounded-full bg-white animate-ping" />
                        </div>
                      </MarkerContent>
                      <MarkerTooltip>{LOCATIONS.next.tooltip}</MarkerTooltip>
                    </MapMarker>
                  </Map>
                </div>
                <div className="mt-auto text-center text-slate-600">
                  <div className="mb-2 flex items-center justify-center gap-3">
                    <p className="font-semibold text-xl text-slate-900">{LOCATIONS.next.name}</p>
                  </div>
                  <p className="text-lg">{LOCATIONS.next.address}</p>
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${LOCATIONS.next.lat},${LOCATIONS.next.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-amber-500 hover:text-amber-600 font-semibold transition-colors"
                  >
                    View on Maps <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
