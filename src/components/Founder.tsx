import { founder } from "../data/content";
import Starfield from "./Starfield";

export default function Founder() {
  return (
    <section id="founder" className="relative bg-[var(--color-ink)] py-20 md:py-28 border-y border-[var(--color-border)] overflow-hidden">
      <Starfield count={30} />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-start">
        <div>
          <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[var(--color-media-bg)]">
            <img
              src={`${import.meta.env.BASE_URL}team/tomas-abraham.jpg`}
              alt="Tomas Abraham, founder and physical therapist at N-Care"
              className="w-full h-full object-cover"
              style={{ objectPosition: founder.facePosition }}
            />
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-3">
            The founder
          </p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-[var(--color-text)] mb-2">
            {founder.name}
          </h2>
          <p className="text-[var(--color-text-faint)] text-sm mb-8">{founder.role}</p>

          <blockquote className="font-display text-2xl md:text-3xl leading-snug text-[var(--color-text)] border-l-2 border-[var(--color-red)] pl-6 mb-8">
            &ldquo;{founder.quote}&rdquo;
          </blockquote>

          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed text-[15px] max-w-xl">
            {founder.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 space-y-2">
            {founder.credentials.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-red)] shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
