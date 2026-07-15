import { stats } from "../data/content";
import CountUp from "./CountUp";
import Starfield from "./Starfield";

export default function TrustBar() {
  return (
    <section className="relative bg-[var(--color-ink)] overflow-hidden">
      <Starfield count={30} />
      <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border)]">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-9 text-center">
            <CountUp
              value={s.value}
              className="font-display text-3xl md:text-4xl text-[var(--color-red)] tabular-nums"
            />
            <p className="mt-1 text-xs md:text-sm text-[var(--color-text-muted)]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
