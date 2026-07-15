type IconProps = {
  name:
    | "recovery"
    | "pain"
    | "sport"
    | "hands"
    | "phone"
    | "pin"
    | "clock"
    | "star"
    | "mail"
    | "chevron";
  className?: string;
};

const paths: Record<IconProps["name"], string> = {
  recovery: "M4 18c3-6 6-9 8-9s2 4 5 4 5-6 5-6M4 22h16",
  pain: "M12 3v4M12 17v4M5 12H3M21 12h-2M7 7l-1.5-1.5M18.5 18.5 17 17M17 7l1.5-1.5M6.5 18.5 5 17M12 8a4 4 0 100 8 4 4 0 000-8z",
  sport: "M13 5l6 6-9 9-6-6 9-9zM8 13l3 3M13 8l3 3",
  hands: "M6 12c0-1 1-2 2-2s2 1 2 2v3M14 12c0-1 1-2 2-2s2 1 2 2v3M4 15c0 4 3 6 8 6s8-2 8-6M9 9V6c0-1 1-2 2-2s2 1 2 2v3",
  phone: "M5 4h3l2 5-2 2c1 3 3 5 6 6l2-2 5 2v3c0 1-1 2-2 2-8 0-16-8-16-16 0-1 1-2 2-2z",
  pin: "M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 3",
  star: "M12 3l2.6 5.6 6.2.6-4.6 4.2 1.3 6.1L12 16.8 6.5 19.5l1.3-6.1L3.2 9.2l6.2-.6L12 3z",
  mail: "M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1zM3.5 7l8.5 6 8.5-6",
  chevron: "M6 9l6 6 6-6",
};

export default function Icon({ name, className = "w-5 h-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
