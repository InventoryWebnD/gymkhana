"use client";

import Link from "next/link";
import { Container, SectionIntro } from "@/components/design/blocks";
import { Reveal } from "@/components/design/primitives";

const MEETS = [
  { key: "tech", name: "Inter IIT Tech Meet", href: "/meets/tech", line: "Problem statements, hackathons, medals." },
  { key: "cult", name: "Inter IIT Cult Meet", href: "/meets/cult", line: "Stage, screen and studio — coming soon." },
  { key: "sports", name: "Inter IIT Sports Meet", href: "/meets/sports", line: "Thirteen sports, every IIT." },
  { key: "gc", name: "General Championship", href: "/meets/gc", line: "Department against department." },
] as const;

export default function OtherMeets({ current, index = "04" }: { current: (typeof MEETS)[number]["key"]; index?: string }) {
  return (
    <section className="grain relative bg-ink text-paper">
      <Container className="py-24 md:py-32">
        <SectionIntro tone="ink" index={index} label="More meets" title={["Other", <em key="a" className="text-paper/60">arenas.</em>]} />
        <ul className="mt-14 border-t border-paper/15 md:mt-20">
          {MEETS.filter((m) => m.key !== current).map((m, i) => (
            <Reveal key={m.key} delay={i * 0.06} y={20}>
              <li className="border-b border-paper/15">
                <Link
                  href={m.href}
                  className="group grid grid-cols-[1fr_auto] items-center gap-4 py-7 md:grid-cols-[1.2fr_1fr_auto] md:py-9"
                >
                  <span className="font-sans text-[clamp(1.8rem,4.4vw,4rem)] font-semibold leading-[0.95] tracking-[-0.045em] transition-transform duration-500 ease-out-expo group-hover:translate-x-3">
                    {m.name}
                  </span>
                  <span className="hidden font-serif text-xl italic text-paper/60 md:block">{m.line}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/25 text-lg transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                    ↗
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
