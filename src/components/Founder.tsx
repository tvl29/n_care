import { founder } from "../data/content";
import MotionLine from "./MotionLine";
import Starfield from "./Starfield";

export default function Founder() {
  return (
    <section id="founder" className="relative bg-[var(--color-ink)] py-20 md:py-28 border-y border-[var(--color-border)] overflow-hidden">
      <Starfield count={30} />

      {/* Ambient glow, same device as Hero/Team/Reviews so this section
          matches the rest of the site's premium treatment. */}
      <div
        className="absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,16,46,0.14) 0%, rgba(200,16,46,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-start">
        <div className="relative">
          {/* Gradient ring, echoes the Team avatar treatment, scaled up
              for the founder's larger portrait. */}
          <div
            className="relative aspect-square max-w-md mx-auto md:max-w-none rounded-full p-[4px] shadow-[0_0_50px_rgba(200,16,46,0.28)]"
            style={{
              background:
                "linear-gradient(135deg, var(--color-red), rgba(200,16,46,0.15) 60%)",
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[var(--color-media-bg)]">
              <img
                src={`${import.meta.env.BASE_URL}team/tomas-abraham.png`}
                alt="Tomas Abraham, founder and physical therapist at N-Care"
                className="w-full h-full object-cover"
                style={{ objectPosition: founder.facePosition }}
              />
            </div>
          </div>

          {/* Floating "founded" badge — solid background (not glass) since
              it sits directly over the photo; a transparent/blurred badge
              let the photo bleed through and killed contrast, especially
              in light mode. */}
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 rounded-xl px-5 py-3 border border-[var(--color-border-strong)] shadow-[0_10px_30px_-8px_var(--color-card-shadow)] text-center md:text-left"
            style={{ background: "var(--color-ink)" }}
          >
            <p className="font-display text-xl leading-none text-[var(--color-red)]">
              Est. 2004
            </p>
            <p className="mt-1 text-[10px] tracking-wide uppercase text-[var(--color-text-faint)] whitespace-nowrap">
              21+ years on the clinic floor
            </p>
          </div>

          {/* A few drifting accent particles, same motif used around the
              Hero visual, so the founder portrait reads as an equally
              considered composition. */}
          {[
            { top: "4%", left: "8%", size: 6, delay: "0s" },
            { top: "14%", right: "4%", size: 5, delay: "0.6s" },
          ].map((p, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-[var(--color-red)]"
              style={{
                top: p.top,
                left: p.left,
                right: p.right,
                width: p.size,
                height: p.size,
                boxShadow: "0 0 10px 2px rgba(200,16,46,0.7)",
                animation: `particle-drift 3.5s ease-in-out ${p.delay} infinite`,
              }}
              aria-hidden="true"
            />
          ))}
        </div>

        <div>
          <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-3">
            The founder
          </p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-[var(--color-text)] mb-2">
            {founder.name}
          </h2>
          <p className="text-[var(--color-text-faint)] text-sm mb-8">{founder.role}</p>

          <blockquote className="relative font-display text-2xl md:text-3xl leading-snug text-[var(--color-text)] border-l-2 border-[var(--color-red)] pl-6 mb-8">
            <span
              className="absolute -top-4 left-2 font-display text-6xl leading-none text-[var(--color-red)]/15 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <span className="relative">{founder.quote}&rdquo;</span>
          </blockquote>

          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed text-[15px] max-w-xl">
            {founder.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {founder.credentials.map((c) => (
              <li
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-3.5 py-1.5 text-xs text-[var(--color-text-secondary)] hover:border-[var(--color-red)]/40 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-red)] shrink-0" />
                {c}
              </li>
            ))}
          </ul>

          <MotionLine variant="hero" className="mt-8 max-w-[200px]" />
        </div>
      </div>
    </section>
  );
}
