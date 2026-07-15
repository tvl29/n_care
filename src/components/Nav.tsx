import { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Services", href: "#services" },
  { label: "About Tomas", href: "#founder" },
  { label: "Our team", href: "#team" },
  { label: "Locations", href: "#locations" },
  { label: "Reviews", href: "#reviews" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const { theme } = useTheme();

  // Track which section is currently in view and underline that nav link.
  // Clicking a link also sets it immediately, so the underline "sticks" to
  // wherever the user is on the page — scrolling elsewhere later updates it
  // again automatically.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveHref(href);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-30 bg-[var(--color-ink)] border-b border-[var(--color-border)]">
      <nav className="relative max-w-6xl mx-auto flex items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          onClick={() => setActiveHref(null)}
          className="focus-ring rounded flex items-center"
        >
          {/*
            Two logo files, swapped by theme so it's always visible:
            - public/logo-dark.png  → shown when theme is dark (needs to read
              well on a near-black background, so usually a white/light mark)
            - public/logo-light.png → shown when theme is light (needs to read
              well on a near-white background, so usually a dark/black mark)
          */}
          <img
            src={
              theme === "light"
                ? `${import.meta.env.BASE_URL}logo_light.png`
                : `${import.meta.env.BASE_URL}logo_dark.png`
            }
            alt="N-Care Physical Therapy, Inc."
            className="h-14 md:h-14 w-auto"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-[var(--color-text-secondary)]">
          {links.map((l) => {
            const isActive = activeHref === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => handleLinkClick(l.href)}
                  className={`relative inline-block py-1 transition-colors focus-ring rounded ${
                    isActive ? "text-[var(--color-text)]" : "hover:text-[var(--color-text)]"
                  }`}
                >
                  {l.label}
                  <span
                    className="absolute left-0 -bottom-0.5 h-[2px] bg-[var(--color-red)] transition-all duration-300 ease-out"
                    style={{ width: isActive ? "100%" : "0%" }}
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#locations"
            onClick={() => handleLinkClick("#locations")}
            className="inline-flex items-center rounded-md bg-[var(--color-red)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-red-deep)] transition-colors focus-ring"
          >
            Book a visit
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[var(--color-text)] p-2 focus-ring rounded"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {/*
          Mobile dropdown: absolutely positioned so it overlays the page
          instead of pushing the Hero section down when it opens. Always
          rendered (never unmounted) and animated via grid-template-rows
          (0fr → 1fr) for a real smooth slide, instead of popping in/out
          instantly.
        */}
        <div
          className="md:hidden absolute top-full left-0 right-0 z-20 grid transition-[grid-template-rows,opacity] duration-300 ease-out"
          style={{
            gridTemplateRows: open ? "1fr" : "0fr",
            opacity: open ? 1 : 0,
          }}
          aria-hidden={!open}
        >
          <div className="overflow-hidden">
            <div className="bg-[var(--color-ink)] border-t border-[var(--color-border)] px-6 pb-6 shadow-[0_16px_30px_-12px_rgba(0,0,0,0.5)]">
              <ul className="flex flex-col gap-4 text-[var(--color-text-secondary)] pt-4">
                {links.map((l) => {
                  const isActive = activeHref === l.href;
                  return (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={() => handleLinkClick(l.href)}
                        tabIndex={open ? 0 : -1}
                        className={`relative inline-block focus-ring rounded ${
                          isActive ? "text-[var(--color-text)]" : ""
                        }`}
                      >
                        {l.label}
                        <span
                          className="absolute left-0 -bottom-0.5 h-[2px] bg-[var(--color-red)] transition-all duration-300 ease-out"
                          style={{ width: isActive ? "100%" : "0%" }}
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  );
                })}
                <li>
                  <a
                    href="#locations"
                    onClick={() => handleLinkClick("#locations")}
                    tabIndex={open ? 0 : -1}
                    className="inline-flex items-center rounded-md bg-[var(--color-red)] px-5 py-2.5 text-sm font-medium text-white focus-ring"
                  >
                    Book a visit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
