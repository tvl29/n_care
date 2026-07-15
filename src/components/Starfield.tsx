import { useMemo } from "react";

type StarfieldProps = {
  count?: number;
  className?: string;
};

/**
 * Subtle ambient starfield for dark sections. Pure CSS twinkle, no JS
 * animation loop, respects prefers-reduced-motion via the global CSS rule.
 * Kept sparse and low-opacity so it reads as texture, not decoration.
 */
export default function Starfield({ count = 40, className = "" }: StarfieldProps) {
  const stars = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.6 + 0.6,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.25,
    }));
  }, [count]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {stars.map((s) => (
        <span
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: "50%",
            background: "var(--color-star)",
            opacity: s.opacity,
            animation: `star-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
