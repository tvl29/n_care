import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: string;
  className?: string;
  duration?: number;
};

/**
 * Animates a stat string like "21+", "4.9", "64+" from 0 up to its target
 * every time it scrolls into view (so every fresh page load/refresh starts
 * at zero). Parses out the numeric portion, preserves any prefix/suffix
 * (e.g. "+") and decimal precision (e.g. "4.9"), and eases the count-up
 * with requestAnimationFrame.
 */
export default function CountUp({ value, className = "", duration = 1600 }: CountUpProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState<string>(zeroed(value));
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          animate(value, duration, setDisplay);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <p ref={ref} className={className}>
      {display}
    </p>
  );
}

function parseValue(value: string) {
  const match = value.match(/-?\d+(\.\d+)?/);
  const numeric = match ? parseFloat(match[0]) : 0;
  const decimals = match && match[1] ? match[1].length - 1 : 0;
  const prefix = match ? value.slice(0, match.index) : "";
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : "";
  return { numeric, decimals, prefix, suffix };
}

function zeroed(value: string) {
  const { decimals, prefix, suffix } = parseValue(value);
  return `${prefix}${(0).toFixed(decimals)}${suffix}`;
}

function animate(
  value: string,
  duration: number,
  setDisplay: (v: string) => void
) {
  const { numeric, decimals, prefix, suffix } = parseValue(value);
  const start = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = numeric * eased;
    setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      setDisplay(value);
    }
  };

  requestAnimationFrame(step);
}
