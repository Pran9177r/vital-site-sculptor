"use client";

import Image from "next/image";

/* width/height are the intrinsic pixel size of each file, so next/image can
   resize them to the ~144px they are actually drawn at. SVGs are left as plain
   <img>: they are already a few KB and Next does not optimise vectors. */
const LOGOS: { name: string; src: string; bg?: string; width?: number; height?: number }[] = [
  { name: "Aetna", src: "/insurance/aetna.png", width: 600, height: 118 },
  { name: "Anthem", src: "/insurance/anthem.svg" },
  { name: "Blue Shield of California", src: "/insurance/blueshield.png", width: 600, height: 156 },
  { name: "Carelon", src: "/insurance/carelon.png", width: 600, height: 130 },
  { name: "Cigna Healthcare", src: "/insurance/cigna.jpg", bg: "#0033ff", width: 600, height: 441 },
  { name: "ComPsych", src: "/insurance/compsych.png", width: 600, height: 109 },
  { name: "Health Net", src: "/insurance/healthnet.jpg", width: 600, height: 116 },
  { name: "Humana", src: "/insurance/humana.png", width: 600, height: 122 },
  { name: "Optum", src: "/insurance/optum.png", width: 600, height: 174 },
  { name: "UC SHIP", src: "/insurance/ucship.png", width: 600, height: 430 },
  { name: "UMR", src: "/insurance/umr.png", width: 600, height: 334 },
  { name: "UnitedHealthcare", src: "/insurance/unitedhealthcare.svg" },
];

export function InsuranceMarquee() {
  return (
    <div className="group flex overflow-hidden [--gap:1.75rem] [gap:var(--gap)] [--duration:45s] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:paused]"
            aria-hidden={i > 0}
          >
            {LOGOS.map((logo) => (
              <div
                key={logo.name}
                style={logo.bg ? { backgroundColor: logo.bg } : undefined}
                className={`flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border p-4 shadow-[var(--shadow-card)] ${
                  logo.bg ? "border-transparent" : "border-slate-200 bg-white"
                }`}
              >
                {logo.width && logo.height ? (
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    sizes="160px"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
