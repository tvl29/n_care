import { reviews } from "../data/content";
import Starfield from "./Starfield";
import Reveal from "./Reveal";

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-[var(--color-charcoal)] py-20 md:py-28 overflow-hidden">
      <Starfield count={55} />

      {/* Ambient red glow so the section reads as a highlight, not another flat grid */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,16,46,0.14) 0%, rgba(200,16,46,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-xl mb-12">
          <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-3">
            In their words
          </p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-[var(--color-text)]">
            Patients who came back to living, not just moving
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 60} className="h-full">
              <div
                className="group relative h-full flex flex-col border border-[var(--color-border)] hover:border-[var(--color-red)]/40 rounded-xl p-7 overflow-hidden bg-[var(--color-surface)] transition-all duration-300 hover:-translate-y-1"
                style={{
                  animation: `card-glow-pulse 5s ease-in-out ${i * 0.4}s infinite`,
                }}
              >
                <span
                  className="absolute -top-3 -left-1 font-display text-[80px] leading-none text-[var(--color-red)]/15 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <div className="relative flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <FilledStar key={s} className="w-4 h-4 text-[var(--color-red)]" />
                    ))}
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <div className="mt-auto pt-5 flex items-center gap-2 border-t border-[var(--color-border)]">
                    <span className="w-6 h-px bg-[var(--color-red)]/60" />
                    <p className="text-xs text-[var(--color-text-dim)]">
                      {r.author} &middot; {r.location}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilledStar({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3l2.6 5.6 6.2.6-4.6 4.2 1.3 6.1L12 16.8 6.5 19.5l1.3-6.1L3.2 9.2l6.2-.6L12 3z" />
    </svg>
  );
}
