import { useTheme } from "../ThemeContext";

/**
 * A pill-shaped sun/moon switch rather than a plain on/off toggle — the
 * thumb slides between the two icons and the track itself re-colors with
 * the active theme's tokens, so it reads as a small piece of the site's
 * own design language instead of a stock form control.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className={`theme-toggle-track relative inline-flex items-center w-14 h-8 p-1 rounded-full shrink-0 focus-ring ${className}`}
    >
      <span
        className="theme-toggle-icon absolute left-1.5 top-1/2 -translate-y-1/2 text-[var(--color-red)]"
        style={{ opacity: isLight ? 1 : 0.35 }}
        aria-hidden="true"
      >
        <SunIcon className="w-3.5 h-3.5" />
      </span>
      <span
        className="theme-toggle-icon absolute right-1.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
        style={{ opacity: isLight ? 0.35 : 1 }}
        aria-hidden="true"
      >
        <MoonIcon className="w-3.5 h-3.5" />
      </span>
      <span
        className="theme-toggle-thumb relative w-6 h-6 rounded-full shadow-sm"
        style={{
          transform: isLight ? "translateX(1.5rem)" : "translateX(0)",
        }}
      />
    </button>
  );
}

function SunIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 14.5A8 8 0 119.5 4a6.5 6.5 0 0010.5 10.5z" />
    </svg>
  );
}
