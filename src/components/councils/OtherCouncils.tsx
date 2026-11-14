"use client";

import Image from "next/image";
import Link from "next/link";
import { photos, type Photo } from "@/components/design/photos";
import { Container, SectionIntro } from "@/components/design/blocks";
import { Reveal } from "@/components/design/primitives";

const ALL: { key: "tech" | "cult" | "sports"; name: string; href: string; photo: Photo; line: string }[] = [
  { key: "tech", name: "Science & Technology", href: "/councils/tech", photo: photos.roboSoccer, line: "Robots, code, telescopes and markets." },
  { key: "cult", name: "Socio-Cultural", href: "/councils/cult", photo: photos.stageShow, line: "Stages, studios, screens and pages." },
  { key: "sports", name: "Sports", href: "/councils/sports", photo: photos.gcNightHoops, line: "Eleven sports, floodlit and coached." },
];

export default function OtherCouncils({ current, index = "03" }: { current: "tech" | "cult" | "sports"; index?: string }) {
  const others = ALL.filter((c) => c.key !== current);
  return (
    <section className="grain relative bg-ink text-paper">
      <Container className="py-24 md:py-32">
        <SectionIntro tone="ink" index={index} label="Keep exploring" title={["The other", <em key="c" className="text-paper/60">councils.</em>]} />
        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 md:gap-8">
          {others.map((c, i) => (
            <Reveal key={c.key} delay={i * 0.08}>
              <Link
                href={c.href}
                className="group relative block aspect-[4/3] overflow-hidden rounded-[24px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:aspect-[16/11]"
              >
                <Image
                  src={c.photo.src}
                  alt={c.photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60">Council</p>
                    <h3 className="mt-2 font-sans text-3xl font-semibold tracking-[-0.04em] md:text-5xl">{c.name}</h3>
                    <p className="mt-2 font-serif text-lg italic text-paper/75 md:text-xl">{c.line}</p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-paper/30 text-lg transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-ink md:h-14 md:w-14">
                    ↗
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
