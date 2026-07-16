import { useRef, type MouseEvent } from "react";
import { services } from "../data/content";
import Icon from "./Icon";
import MotionLine from "./MotionLine";
import Reveal from "./Reveal";
import Starfield from "./Starfield";

/**
 * Per-service "Learn more" destinations. Static placeholders for now —
 * swap each value for the real URL whenever it's ready and the card will
 * link there automatically, on desktop and mobile alike.
 */
const learnMoreLinks: Record<string, string> = {
  "post-surgical-rehab": "#",
  "chronic-pain": "#",
  "sports-recovery": "#",
  "manual-therapy": "#",
};

export default function Services() {
  return (
    <section id="services" className="relative bg-[var(--color-ink)] py-20 md:py-28 overflow-hidden border-t border-[var(--color-border)]">
      <Starfield count={40} />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-3">
            How we treat
          </p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-[var(--color-text)]">
            Care built around your case, not a template
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70} className="h-full">
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>

        <MotionLine variant="divider" color="var(--color-red)" className="mt-16 max-w-xs mx-auto" />
      </div>
    </section>
  );
}

type Service = {
  id: string;
  title: string;
  copy: string;
  icon: string;
};

function ServiceCard({ service: s, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const href = learnMoreLinks[s.id] ?? "#";

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      id={s.id}
      ref={cardRef}
      onMouseMove={handleMove}
      className="relative h-full bg-[var(--color-ink)] p-8 md:p-10 group transition-colors scroll-mt-24 overflow-hidden"
    >
      {/* Cursor-follow spotlight, visible on hover only (desktop) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(240px circle at var(--x, 50%) var(--y, 50%), rgba(200,16,46,0.10), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <span className="absolute top-8 right-8 md:top-10 md:right-10 font-display text-sm text-[var(--color-text-dim)] group-hover:text-[var(--color-text-faint)] transition-colors">
        0{index + 1}
      </span>

      <div className="relative w-11 h-11 rounded-full border border-[var(--color-red)]/40 flex items-center justify-center text-[var(--color-red)] transition-transform duration-300 group-hover:scale-110 group-hover:border-[var(--color-red)]">
        <Icon name={s.icon as any} className="w-5 h-5" />
      </div>
      <h3 className="relative font-display text-xl mt-5 text-[var(--color-text)]">
        {s.title}
      </h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-[var(--color-text-muted)] max-w-sm">
        {s.copy}
      </p>

      {/*
        Always visible + a real <a> tag so tapping works identically on
        mobile (no hover state to fake) as it does on desktop. Hover just
        adds a small color/shift flourish on pointer devices.
      */}
      <a
        href={href}
        className="relative mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-red)] transition-all duration-300 hover:text-[var(--color-text)] hover:gap-2.5 focus-ring rounded"
      >
        Learn more
        <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}
