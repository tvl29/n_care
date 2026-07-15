import { useState } from "react";
import { team } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import Starfield from "./Starfield";

export default function Team() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (i: number) => {
    setOpenIndex((current) => (current === i ? null : i));
  };

  return (
    <section id="team" className="relative bg-[var(--color-ink)] py-20 md:py-28 border-t border-[var(--color-border)] overflow-hidden">
      <Starfield count={35} />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-xl mb-14">
          <p className="text-xs tracking-[0.14em] uppercase text-[var(--color-red)] mb-3">
            Meet the team
          </p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-[var(--color-text)]">
            The people who'll actually treat you
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)] text-[15px] leading-relaxed">
            Not a rotating cast, and not a corporate ladder. The same faces,
            session after session, across both locations. Tap a profile to
            learn a bit more about them.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-10 items-start">
          {team.map((member, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={member.name} delay={i * 60} className="text-center">
                <button
                  type="button"
                  onClick={() => handleToggle(i)}
                  aria-expanded={isOpen}
                  className={`w-full text-center focus-ring rounded-lg group transition-transform duration-300 ease-out ${
                    isOpen ? "md:translate-y-4" : ""
                  }`}
                >
                  <div
                    className={`w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border bg-[var(--color-media-bg)] transition-colors ${
                      isOpen
                        ? "border-[var(--color-red)]"
                        : "border-[var(--color-border-strong)] group-hover:border-[var(--color-border-stronger)]"
                    }`}
                  >
                    <img
                      src={member.photo}
                      alt={`${member.name}, ${member.role} at N-Care Physical Therapy`}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: member.facePosition }}
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-4 font-display text-base text-[var(--color-text)]">
                    {member.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-faint)]">{member.role}</p>
                  <Icon
                    name="chevron"
                    className={`w-3.5 h-3.5 mx-auto mt-2 text-[var(--color-text-dim)] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[var(--color-red)]" : ""
                    }`}
                  />
                </button>

                {/*
                  Desktop: the profile above dips down more first (md:translate-y-4,
                  ~16px — well inside the row's gap-y-10 so it never collides with
                  the row below), then this drops open a beat later via the
                  transition-delay below.
                  Mobile: no dip, box just drops open. Box breaks out -mx-6 wider
                  than its column on every breakpoint. max-h-32 + overflow-y-auto
                  (bio-scroll) keeps it future-proofed: short bios today sit fine,
                  longer ones later will scroll with the same red scrollbar
                  instead of breaking the layout.
                */}
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                    transitionDelay: isOpen ? "120ms" : "0ms",
                  }}
                >
                  <div className="overflow-hidden">
                    <div
                      className="mt-3 relative text-left rounded-xl border-2 border-[var(--color-red)]/55 bg-gradient-to-br from-[var(--color-surface-stronger)] via-[var(--color-surface-strong)] to-[var(--color-surface)] shadow-[0_0_0_1px_rgba(200,16,46,0.15),0_12px_36px_-8px_rgba(200,16,46,0.55)] ring-1 ring-inset ring-[var(--color-border)] -mx-3"
                      style={{ maxWidth: "calc(100vw - 3rem)" }}
                    >
                      <span className="absolute left-0 top-0 h-full w-[3px] rounded-l-xl bg-gradient-to-b from-[var(--color-red)] to-[var(--color-red)]/40" />
                      <span
                        className="absolute -top-1.5 left-5 font-display text-3xl leading-none text-[var(--color-red)]/25 select-none"
                        aria-hidden="true"
                      >
                        &ldquo;
                      </span>
                      <p className="bio-scroll relative max-h-32 overflow-y-auto text-xs leading-relaxed text-[var(--color-text-muted)] pl-7 pr-6 pt-4 pb-4">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
