"use client";

import Image from "next/image";
import Link from "next/link";
import type { Society, SocietyType } from "@/lib/society";
import societiesData from "@/data/soc.json";
import { Container, SectionIntro } from "@/components/design/blocks";
import { Reveal } from "@/components/design/primitives";

type SocItem = (typeof societiesData)[number];

const titleCase = (s: string) =>
  s.length <= 5 ? s : s.toLowerCase().replace(/(^|[\s-])\w/g, (m) => m.toUpperCase());

export default function SocietySuggestions({ society }: { society: Society; currentType?: SocietyType }) {
  // A stable, per-society rotation of the list — varied across pages, identical on server and client.
  const others = societiesData.filter((s) => s.slug.toLowerCase() !== society.slug.toLowerCase());
  const seed = [...society.slug].reduce((n, ch) => n + ch.charCodeAt(0), 0);
  const start = seed % others.length;
  const picks: SocItem[] = [...others.slice(start), ...others.slice(0, start)].filter((_, i) => i % 3 === 0).slice(0, 4);

  return (
    <section className="grain relative bg-ink text-paper">
      <Container className="py-24 md:py-32">
        <SectionIntro
          tone="ink"
          index="04"
          label="Keep exploring"
          title={["More societies", <em key="t" className="text-paper/60">to try.</em>]}
        />
        <div className="mt-14 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-4 md:gap-5">
          {picks.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.06}>
              <Link
                href={item.link}
                className="group flex aspect-[4/5] flex-col justify-between rounded-[22px] bg-ink-2 p-5 ring-1 ring-paper/10 transition-colors duration-500 hover:bg-paper hover:text-ink md:p-7"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50 transition-colors group-hover:text-ink/50">
                  {item.council}
                </span>
                <div className="relative mx-auto h-1/2 w-2/3 transition-transform duration-700 ease-out-expo group-hover:scale-110 group-hover:-rotate-6">
                  <Image src={item.logo} alt="" fill sizes="200px" className="object-contain" />
                </div>
                <span className="flex items-end justify-between gap-2">
                  <span className="font-sans text-lg font-semibold leading-tight tracking-[-0.02em] md:text-2xl">
                    {titleCase(item.name)}
                  </span>
                  <span aria-hidden="true" className="transition-transform duration-500 group-hover:rotate-45">
                    ↗
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
