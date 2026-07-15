import { useTheme } from "../ThemeContext";
import MotionLine from "./MotionLine";
import Starfield from "./Starfield";

/**
 * Single source of truth for the organic hero frame shape (fractional
 * 0–1 coordinates, used as objectBoundingBox units). The clip-path and
 * the visible outline stroke both draw from this exact same path, so
 * they align perfectly regardless of the frame's rendered size.
 */
const HERO_BLOB_PATH =
  "M0.060,0.135 C0.137,0.000 0.342,0.000 0.513,0.047 " +
  "C0.684,0.095 0.863,0.162 0.940,0.324 " +
  "C1.000,0.459 0.991,0.676 0.906,0.811 " +
  "C0.821,0.946 0.684,1.000 0.530,0.959 " +
  "C0.393,0.932 0.274,1.000 0.154,0.946 " +
  "C0.034,0.892 0.000,0.703 0.017,0.486 " +
  "C0.026,0.311 0.051,0.203 0.060,0.135 Z";

/**
 * Redesigned hero visual: an organic (non-rectangular) image frame instead
 * of a plain card, a thin arcing line, a few drifting red particles, and a
 * glassmorphic floating stat badge. All copy, CTAs, nav, and logo are
 * untouched — this only changes the right-column presentation.
 */
export default function Hero() {
  const { theme } = useTheme();

  // Drop two PNGs in public/: hero-dark.png (shown in dark mode) and
  // hero-light.png (shown in light mode) — swapped automatically below,
  // same pattern as the nav/footer logo swap.
  const heroImageSrc = theme === "light"
    ? `${import.meta.env.BASE_URL}hero_light.png`
    : `${import.meta.env.BASE_URL}hero_dark.png`;

  return (
    <section id="top" className="relative bg-[var(--color-ink)] overflow-hidden">
      {/* Starfield (light particles) only reads as intentional on the dark
          background — hidden in light mode rather than recolored. */}
      {theme === "dark" && <Starfield count={60} />}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[0.95fr_1.35fr] gap-12 md:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-4">
              Boyle Heights &middot; Los Angeles
            </p>
            <h1 className="font-display font-medium text-[var(--color-text)] text-4xl sm:text-5xl leading-[1.08]">
              Some pain you learn to live with. You shouldn't have to.
            </h1>
            <p className="mt-6 text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed max-w-md">
              Post-surgery. Old injuries. The ache that's quietly shaped how
              you move for years. N-Care has spent 21 years getting people
              their range of motion back, one hands-on session at a time.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#locations"
                className="inline-flex items-center rounded-md bg-[var(--color-red)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_4px_14px_rgba(200,16,46,0.25)] transition-all duration-200 hover:bg-[var(--color-red-deep)] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(200,16,46,0.35)] active:translate-y-0 focus-ring"
              >
                Book an appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-md border border-[var(--color-border-stronger)] px-6 py-3.5 text-sm font-medium text-[var(--color-text)] transition-all duration-200 hover:bg-[var(--color-surface)] hover:-translate-y-0.5 active:translate-y-0 focus-ring"
              >
                See how it works
              </a>
            </div>

            <MotionLine variant="hero" className="mt-10 max-w-[260px]" />
          </div>

          {/* Hero visual, right column. */}
          <div className="relative mx-auto w-full max-w-[800px] py-6">
            {/* Soft ambient glow behind the whole composition — two layers
                for more depth than a single flat radial gradient. */}
            <div
              className="absolute -inset-24 rounded-[3rem] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(200,16,46,0.24) 0%, rgba(200,16,46,0) 68%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -inset-12 rounded-[3rem] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(200,16,46,0.14) 0%, rgba(200,16,46,0) 60%)",
              }}
              aria-hidden="true"
            />

            {/* Halftone red dot-grid texture, sits behind/beside the blob and
                is intentionally NOT clipped to it. */}
            <div
              className="absolute -right-6 top-6 w-40 h-56 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(var(--color-red) 1px, transparent 1.6px)",
                backgroundSize: "9px 9px",
                maskImage:
                  "radial-gradient(circle at 30% 40%, black 0%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(circle at 30% 40%, black 0%, transparent 70%)",
                opacity: 0.5,
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -left-6 bottom-10 w-32 h-40 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(var(--color-red) 1px, transparent 1.6px)",
                backgroundSize: "9px 9px",
                maskImage:
                  "radial-gradient(circle at 70% 60%, black 0%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(circle at 70% 60%, black 0%, transparent 70%)",
                opacity: 0.4,
              }}
              aria-hidden="true"
            />

            {/* Drifting particle dots, positioned along the blob's edge */}
            {[
              { top: "1%", left: "20%", size: 7, delay: "0s" },
              { top: "30%", right: "-2%", size: 6, delay: "0.6s" },
              { bottom: "35%", left: "-3%", size: 5, delay: "1.2s" },
              { bottom: "-1%", left: "45%", size: 7, delay: "0.3s" },
            ].map((p, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-[var(--color-red)] z-10"
                style={{
                  top: p.top,
                  left: p.left,
                  right: p.right,
                  bottom: p.bottom,
                  width: p.size,
                  height: p.size,
                  boxShadow: "0 0 10px 2px rgba(200,16,46,0.75)",
                  animation: `particle-drift 3.5s ease-in-out ${p.delay} infinite`,
                }}
                aria-hidden="true"
              />
            ))}

            {/* Organic media frame — clipped to the exact HERO_BLOB_PATH,
                so the outline stroke and the clip line up pixel-for-pixel
                at every screen size. */}
            <div
              className="relative w-full aspect-[1680/1250]"
              style={{ animation: "hero-float 8s ease-in-out infinite" }}
            >
              <div
                className="absolute inset-0 bg-[var(--color-media-bg)] shadow-[0_30px_80px_-18px_rgba(200,16,46,0.45)]"
                style={{ clipPath: "url(#hero-blob-clip)" }}
              >
                {/*
                  object-cover fills the frame edge-to-edge with no gaps and
                  no spill — swap the two files below for your own art:
                  public/hero-dark.png and public/hero-light.png.
                */}
                <img
                  src={heroImageSrc}
                  alt="N-Care physical therapist treating a patient"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Subtle rim-light + grounding gradient for extra polish */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/40 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />
              </div>

              {/* Reusable clip definition + visible outline, sharing the exact
                  same 0–1 path as the clip so the stroke traces its edge
                  precisely. viewBox must stay "0 0 1 1" to match. */}
              <svg
                viewBox="0 0 1 1"
                preserveAspectRatio="none"
                className="absolute -inset-[1px] w-[calc(100%+2px)] h-[calc(100%+2px)] pointer-events-none"
                aria-hidden="true"
              >
                <defs>
                  <clipPath id="hero-blob-clip" clipPathUnits="objectBoundingBox">
                    <path d={HERO_BLOB_PATH} />
                  </clipPath>
                </defs>
                {/* Main light outline, visible on both themes */}
                <path
                  d={HERO_BLOB_PATH}
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth={0.005}
                  opacity={0.9}
                  style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.22))" }}
                />
                {/* Partial red accent trace along the same edge — animated
                    to continuously travel around the blob's perimeter */}
                <path
                  d={HERO_BLOB_PATH}
                  fill="none"
                  stroke="var(--color-red)"
                  strokeWidth={0.009}
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="0.34 0.66"
                  opacity={0.95}
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(200,16,46,0.5))",
                    animation: "blob-trace-spin 4s linear infinite",
                  }}
                />
              </svg>
            </div>

            {/* Floating stat badge — glassmorphic */}
            <div
              className="absolute -bottom-2 -left-4 md:-left-8 rounded-xl px-5 py-3.5 border border-[var(--color-border-strong)] shadow-[0_10px_30px_-8px_var(--color-card-shadow)] z-10"
              style={{
                background: "var(--color-surface-stronger)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                animation: "badge-float 7s ease-in-out infinite",
              }}
            >
              <p className="font-display text-2xl leading-none text-[var(--color-red)]">
                21+
              </p>
              <p className="mt-1 text-[10px] tracking-wide uppercase text-[var(--color-text-faint)] whitespace-nowrap">
                years of hands-on care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
