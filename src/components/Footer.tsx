import { contact } from "../data/content";
import { useTheme } from "../ThemeContext";
import FacebookGlyph from "./FacebookGlyph";
import Icon from "./Icon";

export default function Footer() {
  const { theme } = useTheme();
  const logoSrc = theme === "light"
    ? `${import.meta.env.BASE_URL}logo_light.png`
    : `${import.meta.env.BASE_URL}logo_dark.png`;

  const iconButtonClass =
    "inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-border-strong)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-red)] hover:bg-[var(--color-red)]/10 transition-colors focus-ring";

  return (
    <footer className="bg-[var(--color-ink)] pt-14 pb-10 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/*
          Mobile-only compact footer: logo + FB/phone icon row on the left,
          just the two emails on the right. Everything else (description,
          phone number text, copyright line) is reserved for sm and up.
        */}
        <div className="flex sm:hidden items-start justify-between gap-6">
          <div>
            <img
              src={logoSrc}
              alt="N-Care Physical Therapy, Inc."
              className="h-12 w-auto"
            />
            <div className="mt-4 flex items-center gap-3">
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

          <div className="flex flex-col gap-3 text-sm pt-1">
              <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-1">
                Email:
              </p>
            <a
              href={`mailto:${contact.email}`}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors focus-ring rounded break-all"
            >
              {contact.email}
            </a>
            <a
              href={`mailto:${contact.yahooEmail}`}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors focus-ring rounded break-all"
            >
              {contact.yahooEmail}
            </a>
          </div>
        </div>

        {/* Full footer: sm and up */}
        <div className="hidden sm:flex sm:flex-row sm:items-start sm:justify-between gap-10">
          <div>
            {/* Same two files/rule as the nav logo: public/logo-dark.png + public/logo-light.png */}
            <img
              src={logoSrc}
              alt="N-Care Physical Therapy, Inc."
              className="h-9 w-auto"
            />
            <p className="mt-3 text-[var(--color-text-faint)] text-sm max-w-xs leading-relaxed">
              Boyle Heights &amp; Valley Glen, Los Angeles. Twenty-one years
              of hands-on, one-on-one care.
            </p>

            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="N-Care on Facebook"
              className={`mt-5 ${iconButtonClass}`}
            >
              <FacebookGlyph className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-sm">
            <div>
              <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-3">
                Email:
              </p>
              <div className="space-y-2">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors focus-ring rounded"
                >
                  <Icon name="mail" className="w-4 h-4 shrink-0 text-[var(--color-red)]" />
                  {contact.email}
                </a>
                <a
                  href={`mailto:${contact.yahooEmail}`}
                  className="flex items-center gap-2.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors focus-ring rounded"
                >
                  <Icon name="mail" className="w-4 h-4 shrink-0 text-[var(--color-red)]" />
                  {contact.yahooEmail}
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-3">
                Phone:
              </p>
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
          &copy; {new Date().getFullYear()} N-Care Physical Therapy, Inc. Boyle Heights &amp; Valley Glen, Los Angeles.
        </p>
      </div>
    </footer>
  );
}
