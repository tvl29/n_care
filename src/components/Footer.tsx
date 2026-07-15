import { contact, locations } from "../data/content";
import { useTheme } from "../ThemeContext";
import FacebookGlyph from "./FacebookGlyph";
import Icon from "./Icon";
import Starfield from "./Starfield";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About Tomas", href: "#founder" },
  { label: "Our team", href: "#team" },
  { label: "Locations", href: "#locations" },
  { label: "Reviews", href: "#reviews" },
];

export default function Footer() {
  const { theme } = useTheme();
  const logoSrc = theme === "light"
    ? `${import.meta.env.BASE_URL}logo_light.png`
    : `${import.meta.env.BASE_URL}logo_dark.png`;

  const iconButtonClass =
    "inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-border-strong)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-red)] hover:bg-[var(--color-red)]/10 transition-colors focus-ring";

  return (
    <footer className="relative bg-[var(--color-ink)] pt-7 pb-10 border-t border-[var(--color-border)] overflow-hidden">
      {/* Ambient dots + top accent gradient, matching the rest of the site
          instead of a flat, plain panel. */}
      <Starfield count={25} />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-red), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/*
          Mobile-only compact footer: logo + FB/phone icon row on the left,
          just the email on the right. Kept deliberately small (no quick
          links / hours sections like tablet+desktop) — just wrapped in a
          subtle card for a more premium feel instead of floating loosely.
        */}
        <div className="sm:hidden rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-5">
          <div className="flex items-center justify-between gap-6">
            <div>
              <img
                src={logoSrc}
                alt="N-Care Physical Therapy, Inc."
                className="h-11 w-auto"
              />
              <div className="mt-3 flex items-center gap-2.5">
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="N-Care on Facebook"
                  className={iconButtonClass}
                >
                  <FacebookGlyph className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${contact.phoneHref}`}
                  aria-label="Call N-Care"
                  className={iconButtonClass}
                >
                  <Icon name="phone" className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1.5 text-sm">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors focus-ring rounded break-all"
              >
                <Icon name="mail" className="w-3.5 h-3.5 shrink-0 text-[var(--color-red)]" />
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        {/*
          Tablet-only layout (sm up to just below lg). Separate block from
          desktop below — exists because the desktop grid was overlapping
          at iPad/tablet widths. Same richer content as desktop (quick
          links, hours, contact), just condensed to fit tablet width and
          kept centered.
        */}
        <div className="hidden sm:block lg:hidden text-center">
          <img
            src={logoSrc}
            alt="N-Care Physical Therapy, Inc."
            className="h-11 w-auto mx-auto"
          />

          <div className="mt-8 grid grid-cols-3 gap-8 text-left max-w-xl mx-auto">
            <div>
              <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-3">
                Quick links
              </p>
              <ul className="space-y-2 text-sm">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors focus-ring rounded"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-3">
                Hours
              </p>
              <ul className="space-y-1.5 text-sm text-[var(--color-text-muted)]">
                {locations[0].hours.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="text-sm">
              <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-3">
                Contact
              </p>
              <div className="space-y-2">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors focus-ring rounded break-all"
                >
                  <Icon name="mail" className="w-3.5 h-3.5 shrink-0 text-[var(--color-red)]" />
                  {contact.email}
                </a>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors focus-ring rounded"
                >
                  <Icon name="phone" className="w-3.5 h-3.5 shrink-0 text-[var(--color-red)]" />
                  {contact.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="N-Care on Facebook"
              className={iconButtonClass}
            >
              <FacebookGlyph className="w-4 h-4" />
            </a>
            <a
              href="#locations"
              className="inline-flex items-center rounded-md bg-[var(--color-red)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-red-deep)] transition-colors focus-ring"
            >
              Book a visit
            </a>
          </div>
        </div>

        {/* Desktop layout (lg and up) — expanded to four columns so the
            wide empty space is put to use with real, useful content
            instead of just logo/description on one side and contact on
            the other. */}
        <div className="hidden lg:grid lg:grid-cols-[1.1fr_0.7fr_0.9fr_1fr] gap-10">
          <div>
            {/* Same two files/rule as the nav logo: public/logo-dark.png + public/logo-light.png */}
            <img
              src={logoSrc}
              alt="N-Care Physical Therapy, Inc."
              className="h-11 w-auto"
            />
            <p className="mt-3 text-[var(--color-text-faint)] text-sm max-w-xs leading-relaxed">
              Boyle Heights, Los Angeles. Twenty-one years of hands-on,
              one-on-one care.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="N-Care on Facebook"
                className={iconButtonClass}
              >
                <FacebookGlyph className="w-4 h-4" />
              </a>
              <a
                href="#locations"
                className="inline-flex items-center rounded-md bg-[var(--color-red)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-red-deep)] transition-colors focus-ring"
              >
                Book a visit
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-4">
              Quick links
            </p>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors focus-ring rounded"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-4">
              Hours
            </p>
            <ul className="space-y-1.5 text-sm text-[var(--color-text-muted)]">
              {locations[0].hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="text-sm">
            <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-4">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors focus-ring rounded"
              >
                <Icon name="mail" className="w-4 h-4 shrink-0 text-[var(--color-red)]" />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phoneHref}`}
                className="flex items-center gap-2.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors focus-ring rounded"
              >
                <Icon name="phone" className="w-4 h-4 shrink-0 text-[var(--color-red)]" />
                {contact.phone}
              </a>
            </div>
          </div>
        </div>

        <p className="hidden sm:block mt-10 pt-8 border-t border-[var(--color-border)] text-[var(--color-text-dim)] text-xs text-center">
          &copy; {new Date().getFullYear()} N-Care Physical Therapy, Inc. Boyle Heights, Los Angeles.
        </p>
      </div>
    </footer>
  );
}
