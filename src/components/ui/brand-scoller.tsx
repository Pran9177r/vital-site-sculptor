"use client";

import React from "react";
import { Star } from "lucide-react";

export interface ReviewItem {
  quote: string;
  name: string;
  stars?: number;
}

export const DEFAULT_REVIEWS: ReviewItem[] = [
  { quote: "The team treated our daughter like a whole person. She came home with real skills.", name: "Former Parent", stars: 5 },
  { quote: "Family therapy changed how we talk to each other. We felt included in the healing.", name: "Teen Harbor Parent", stars: 5 },
  { quote: "The tutor kept my son on track for graduation while he focused on getting better.", name: "Parent of Resident", stars: 5 },
  { quote: "Structured days, kind staff, and a house that actually felt like a home.", name: "California Parent", stars: 5 },
  { quote: "Immense gratitude for the 24/7 care and personal attention given to our teen.", name: "Grateful Family", stars: 5 },
  { quote: "Compassionate clinical team that truly understands adolescent mental health.", name: "Mother of Graduate", stars: 5 },
  { quote: "Small 6-bed setting made all the difference for individualized care.", name: "Adolescent Parent", stars: 5 },
];

export const REVERSE_REVIEWS: ReviewItem[] = [
  { quote: "Equine and art therapy helped our child process emotions without pressure.", name: "Family Member", stars: 5 },
  { quote: "Discharge planning was thorough and gave us a clear roadmap for home.", name: "Father of Teen", stars: 5 },
  { quote: "Awake overnight staff gave us complete peace of mind.", name: "Parent", stars: 5 },
  { quote: "Highest quality residential care in Central Valley for youth.", name: "Local Family", stars: 5 },
  { quote: "We saw real transformation in confidence, communication, and coping skills.", name: "Teen Parent", stars: 5 },
  { quote: "Professional, caring, and deeply committed to long-term recovery.", name: "Parent Review", stars: 5 },
  { quote: "Rebuilt our family bond when we needed it most.", name: "California Family", stars: 5 },
];

export const BrandScroller = ({ items = DEFAULT_REVIEWS }: { items?: ReviewItem[] }) => {
  return (
    <div className="group flex overflow-hidden py-3 [--gap:1.5rem] [gap:var(--gap)] flex-row max-w-full [--duration:45s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <div
            className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
            key={i}
          >
            {items.map((rev, idx) => (
              <div
                key={idx}
                className="w-80 rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="flex gap-1 text-amber-400 mb-2">
                  {Array.from({ length: rev.stars || 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic mb-3">
                  "{rev.quote}"
                </p>
                <p className="text-[11px] font-bold text-slate-900 border-t border-slate-100 pt-2">
                  {rev.name}
                </p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export const BrandScrollerReverse = ({ items = REVERSE_REVIEWS }: { items?: ReviewItem[] }) => {
  return (
    <div className="group flex overflow-hidden py-3 [--gap:1.5rem] [gap:var(--gap)] flex-row max-w-full [--duration:45s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <div
            className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row"
            key={i}
          >
            {items.map((rev, idx) => (
              <div
                key={idx}
                className="w-80 rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="flex gap-1 text-amber-400 mb-2">
                  {Array.from({ length: rev.stars || 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic mb-3">
                  "{rev.quote}"
                </p>
                <p className="text-[11px] font-bold text-slate-900 border-t border-slate-100 pt-2">
                  {rev.name}
                </p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};
