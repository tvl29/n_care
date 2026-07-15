import { locations } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import Starfield from "./Starfield";

export default function Locations() {
  return (
    <section id="locations" className="relative bg-[var(--color-ink)] py-20 md:py-28 border-t border-[var(--color-border)] overflow-hidden">
      <Starfield count={30} />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-xl mb-12">
          <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-3">
            Locations
          </p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-[var(--color-text)]">
            Two clinics, one standard of care
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((loc, i) => (
            <Reveal key={loc.name} delay={i * 90}>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden">
              <div className="h-36 md:h-40 w-full border-b border-[var(--color-border)]">
                <iframe
                  title={`Map to N-Care ${loc.name}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`}
                  className="w-full h-full grayscale-[35%] contrast-[1.1] opacity-90"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </div>

              <div className="p-8">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-2xl text-[var(--color-text)]">
                  {loc.name}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-[var(--color-text)]">
                  <Icon name="star" className="w-4 h-4 text-[var(--color-red)]" />
                  {loc.rating}
                  <span className="text-[var(--color-text-faint)]">
                    ({loc.reviewCount})
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-[var(--color-text-muted)]">
                <div className="flex items-start gap-3">
                  <Icon name="pin" className="w-4 h-4 mt-0.5 text-[var(--color-red)] shrink-0" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="phone" className="w-4 h-4 text-[var(--color-red)] shrink-0" />
                  <a
                    href={`tel:${loc.phoneHref}`}
                    className="hover:text-[var(--color-text)] transition-colors focus-ring rounded"
                  >
                    {loc.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="clock" className="w-4 h-4 mt-0.5 text-[var(--color-red)] shrink-0" />
                  <div>
                    {loc.hours.map((h) => (
                      <p key={h}>{h}</p>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-5 text-xs text-[var(--color-text-faint)]">
                Lead therapist: {loc.lead}
              </p>

              <a
                href={`tel:${loc.phoneHref}`}
                className="mt-6 inline-flex items-center rounded-md bg-[var(--color-red)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--color-red-deep)] transition-colors focus-ring"
              >
                Call this location
              </a>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
