import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

const reviews = [
  {
    name: "Parent of Teen",
    username: "@parent1",
    body: "“The team treated our daughter like a whole person, not a diagnosis. She came home with real skills and real confidence.”",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces",
  },
  {
    name: "Family Member",
    username: "@family2",
    body: "“Family therapy changed how we talk to each other. We finally felt included in the healing instead of waiting outside it.”",
    profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=faces",
  },
  {
    name: "Former Resident",
    username: "@resident3",
    body: "“The on-site tutor kept my son on track for graduation while he focused on getting better. That mattered more than we expected.”",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces",
  },
  {
    name: "Mother",
    username: "@mother4",
    body: "“Structured days, kind staff, and a house that actually felt like a home. That combination made all the difference.”",
    profile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=64&h=64&fit=crop&crop=faces",
  },
  {
    name: "Grateful Dad",
    username: "@dad5",
    body: "“The integrated care approach meant my son got psychiatric support AND therapy at the same time. His progress has been incredible.”",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces",
  },
  {
    name: "Alumni Parent",
    username: "@parent6",
    body: "“Adolescent care is so hard to navigate, but Teen Harbor made the admissions process seamless and supportive from day one.”",
    profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  }
];

const firstRow = reviews.slice(0, 3);
const secondRow = reviews.slice(3, 6);

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

const ReviewCard = ({
  profile,
  name,
  username,
  body,
}: {
  profile: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <Card className="relative h-full w-80 cursor-pointer overflow-hidden border border-border bg-card shadow-sm p-5 hover:shadow-md transition-shadow card-soft">
      <CardContent className="p-0 flex flex-col gap-4">
        <div className="flex flex-row items-center gap-3">
          <img
            className="rounded-full object-cover"
            width="40"
            height="40"
            alt=""
            src={profile}
          />
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-foreground">{name}</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
      </CardContent>
    </Card>
  );
};

export default function TestimonialMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
    </div>
  );
}
