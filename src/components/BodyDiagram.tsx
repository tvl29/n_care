import { useState } from "react";

type Zone = {
  id: string;
  label: string;
  serviceId: string;
  points: { x: number; y: number }[];
};

const zones: Zone[] = [
  {
    id: "neck",
    label: "Neck tension and headaches",
    serviceId: "chronic-pain",
    points: [{ x: 50.3, y: 17.1 }],
  },
  {
    id: "shoulder",
    label: "Shoulder pain and limited reach",
    serviceId: "manual-therapy",
    points: [
      { x: 34.5, y: 21 },
      { x: 65.4, y: 21.5 },
    ],
  },
  {
    id: "elbow",
    label: "Tennis elbow and joint strain",
    serviceId: "manual-therapy",
    points: [
      { x: 23.6, y: 35 },
      { x: 75.9, y: 35.3 },
    ],
  },
  {
    id: "wrist",
    label: "Wrist and grip strain",
    serviceId: "manual-therapy",
    points: [
      { x: 16.6, y: 44.6 },
      { x: 82.6, y: 44.5 },
    ],
  },
  {
    id: "back",
    label: "Lower back pain",
    serviceId: "chronic-pain",
    points: [{ x: 49.6, y: 32.5 }],
  },
  {
    id: "hip",
    label: "Hip and pelvic pain",
    serviceId: "chronic-pain",
    points: [{ x: 51.7, y: 43 }],
  },
  {
    id: "knee",
    label: "Post-op knee recovery",
    serviceId: "post-surgical-rehab",
    points: [
      { x: 38.9, y: 65.4 },
      { x: 60.8, y: 64.8 },
    ],
  },
  {
    id: "ankle",
    label: "Ankle and foot pain",
    serviceId: "sports-recovery",
    points: [
      { x: 39.3, y: 78.2 },
      { x: 62.2, y: 80.3 },
    ],
  },
];

export default function BodyDiagram() {
  const [active, setActive] = useState<Zone | null>(null);

  const handleClick = (serviceId: string) => {
    const el = document.getElementById(serviceId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("ring-2", "ring-[var(--color-red)]");
    window.setTimeout(() => {
      el.classList.remove("ring-2", "ring-[var(--color-red)]");
    }, 1600);
  };

  return (
    <div className="flex flex-col items-center">
      {/*
        This box no longer carries its own image: the hero background video
        (see Hero.tsx) now plays behind the whole section, and this stays a
        transparent hit-target so the pain-point pins line up on top of it.
        Once the real footage is in, nudge each zone's x/y below to match
        where the body actually sits in frame.
      */}
      <div className="relative w-full max-w-[280px] aspect-[863/1822] rounded-xl overflow-hidden">
        {zones.map((z) =>
          z.points.map((p, i) => (
            <button
              key={`${z.id}-${i}`}
              type="button"
              aria-label={z.label}
              onMouseEnter={() => setActive(z)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(z)}
              onBlur={() => setActive(null)}
              onClick={() => handleClick(z.serviceId)}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full focus-ring"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: "13%",
                height: "7%",
                background:
                  active?.id === z.id
                    ? "radial-gradient(circle, rgba(232,68,63,0.45) 0%, rgba(232,68,63,0) 70%)"
                    : "transparent",
                transition: "background 150ms",
              }}
            />
          ))
        )}
      </div>

      <div className="mt-6 w-full max-w-xs min-h-[64px] px-5 py-4 bg-white border border-[var(--color-line)] rounded-lg">
        <p className="font-display text-base text-[var(--color-ink)]">
          {active ? active.label : "Hover the body to see where it hurts"}
        </p>
        {active && (
          <p className="mt-1 text-xs text-[var(--color-steel)]">
            Click to see how we treat it
          </p>
        )}
      </div>
    </div>
  );
}
