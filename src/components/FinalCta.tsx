import MotionLine from "./MotionLine";
import Starfield from "./Starfield";

export default function FinalCta() {
  return (
    <section className="relative bg-[var(--color-ink)] py-20 md:py-28 overflow-hidden">
      <Starfield count={35} />
      <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
        <h2 className="font-display font-medium text-3xl md:text-5xl text-[var(--color-text)] leading-tight">
          The version of you before the pain started is still in there.
        </h2>
        <p className="mt-5 text-[var(--color-text-muted)] text-base md:text-lg max-w-xl mx-auto">
          Twenty-one years of getting people back to it. Let's find out what
          your recovery looks like.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#locations"
            className="inline-flex items-center rounded-md bg-[var(--color-red)] px-7 py-3.5 text-sm font-medium text-white hover:bg-[var(--color-red-deep)] transition-colors focus-ring"
          >
            Book an appointment
          </a>
          <a
            href="tel:+13232616100"
            className="inline-flex items-center rounded-md border border-[var(--color-border-stronger)] px-7 py-3.5 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors focus-ring"
          >
            Call (323) 261-6100
          </a>
        </div>
        <MotionLine variant="divider" color="var(--color-red)" className="mt-14 max-w-xs mx-auto" />
      </div>
    </section>
  );
}
