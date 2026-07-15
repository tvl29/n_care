import { useEffect, useRef, useState } from "react";

type MotionLineProps = {
  variant?: "hero" | "divider";
  color?: string;
  className?: string;
};

/**
 * The signature element: a single continuous stroke that echoes the
 * runner mark in the N-Care logo. It draws itself in once, the first
 * time it enters the viewport, representing a patient's path from
 * injury back to stride. Used sparingly — hero + section dividers only.
 */
export default function MotionLine({
  variant = "divider",
  color = "var(--color-red)",
  className = "",
}: MotionLineProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const d =
    variant === "hero"
      ? "M5,55 Q60,10 130,45 T260,25 T400,15"
      : "M5,20 Q100,2 200,22 T400,10";

  const viewBox = variant === "hero" ? "0 0 400 65" : "0 0 400 30";

  return (
    <div ref={wrapperRef} className={className} aria-hidden="true">
      <svg viewBox={viewBox} className="w-full h-auto overflow-visible">
        <path
          ref={pathRef}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={variant === "hero" ? 3 : 2}
          strokeLinecap="round"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: drawn ? 0 : 1,
            transition: "stroke-dashoffset 1.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </svg>
    </div>
  );
}
