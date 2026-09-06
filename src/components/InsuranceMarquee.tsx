"use client";

const LOGOS: { name: string; src: string; bg?: string }[] = [
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
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
