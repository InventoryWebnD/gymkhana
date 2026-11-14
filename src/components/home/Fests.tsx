"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { photos, type Photo } from "@/components/design/photos";
import { MaskLines, SectionLabel } from "@/components/design/primitives";

type Card = {
  name: string;
  kind: string;
  tagline: string;
  body: string;
  photo: Photo;
  theme: "ink" | "navy" | "accent" | "paper";
  links: { label: string; href: string; external?: boolean }[];
};

const CARDS: Card[] = [
  {
    name: "Pravaah",
    kind: "Annual sports, technical & cultural fest",
    tagline: "The unstoppable flow of talent.",
    body:
      "Hackathons, inter-college tournaments, cultural showcases and star nights — the fest where all three councils converge and campus opens its gates to colleges across India.",
    photo: photos.starNight,
    theme: "ink",
    links: [
      { label: "pravaah.org", href: "https://www.pravaah.org/", external: true },
      { label: "All fests", href: "/fests" },
    ],
  },
  {
    name: "Ashvamedha",
    kind: "Annual sports fest",
    tagline: "Where champions find their arena.",
    body:
      "An inter-college sports tournament built on competitive spirit, teamwork and camaraderie, alongside quizzes, inter-branch contests and online events.",
    photo: photos.ashvamedhaWinners,
    theme: "navy",
    links: [{ label: "About Ashvamedha", href: "/fests" }],
  },
  {
    name: "General Championship",
    kind: "Inter-departmental · Tech, Cult & Sports",
    tagline: "Department pride, on the line.",
    body:
      "Tournaments across all three councils, with points for every winner and runner-up. The department with the highest aggregate is crowned General Champion.",
    photo: photos.gcChampions,
    theme: "accent",
    links: [{ label: "Standings & events", href: "/meets/gc" }],
  },
  {
    name: "Inter IIT Meets",
    kind: "Tech · Cult · Sports",
    tagline: "Our colours, on the national stage.",
    body:
      "Every year IIT Bhubaneswar sends contingents to compete with every other IIT — in problem statements, performances and podium finishes.",
    photo: photos.contingent,
    theme: "paper",
    links: [
      { label: "Tech Meet", href: "/meets/tech" },
      { label: "Cult Meet", href: "/meets/cult" },
      { label: "Sports Meet", href: "/meets/sports" },
    ],
  },
];

const THEMES: Record<Card["theme"], string> = {
  ink: "bg-ink text-paper",
  navy: "bg-navy text-paper",
  accent: "bg-accent text-ink",
  paper: "bg-paper-2 text-ink",
};

export default function Fests() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section className="relative z-10 bg-paper text-ink">
      <div className="mx-auto max-w-[1600px] px-5 pt-24 sm:px-8 md:pt-36">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel index="05" className="text-ink/60">
              Fests & Meets
            </SectionLabel>
            <MaskLines
              as="h2"
              className="mt-8 font-serif text-[clamp(3rem,8vw,8.5rem)] leading-[0.9]"
              lines={["The calendar", <span key="e"><em>everyone</em> plans</span>, "around."]}
            />
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-ink/65 md:col-span-4">
            Two flagship fests, a championship that runs all year, and three
            Inter IIT meets — the dates every society builds towards.
          </p>
        </div>
      </div>

      <div ref={ref} className="mx-auto max-w-[1600px] px-3 pb-24 pt-16 sm:px-8 md:pb-36 md:pt-24">
        {CARDS.map((card, i) => (
          <StackCard key={card.name} card={card} index={i} total={CARDS.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}

function StackCard({
  card,
  index,
  total,
  progress,
}: {
  card: Card;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  const shade = useTransform(progress, [start, 1], [0, index === total - 1 ? 0 : 0.35]);
  const imgScale = useTransform(progress, [start - 1 / total, start + 1 / total], [1.25, 1]);
  const dark = card.theme === "ink" || card.theme === "navy";

  return (
    <div className="sticky h-[88svh] min-h-[560px]" style={{ top: `calc(9svh + ${index * 22}px)` }}>
      <motion.article
        style={{ scale }}
        className={`relative grid h-[78svh] min-h-[520px] origin-top grid-rows-[auto_1fr] overflow-hidden rounded-[22px] md:grid-cols-12 md:grid-rows-1 md:rounded-[32px] ${THEMES[card.theme]}`}
      >
        <div className="flex flex-col justify-between gap-6 p-6 md:col-span-6 md:p-12">
          <div className="flex items-start justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.22em] opacity-70">
            <span className="max-w-[26ch]">{card.kind}</span>
            <span className="shrink-0 tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          <div>
            <h3 className="font-sans text-[clamp(2.2rem,4.6vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.05em]">
              {card.name}
            </h3>
            <p className="mt-4 font-serif text-2xl italic md:text-4xl">{card.tagline}</p>
            <p className="mt-5 hidden max-w-md text-[15px] leading-relaxed opacity-75 sm:block">{card.body}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {card.links.map((l) => {
              const cls = `inline-flex h-10 items-center gap-2 rounded-full border px-4 text-[13px] font-medium transition-colors ${
                dark
                  ? "border-paper/25 hover:border-accent hover:bg-accent hover:text-ink"
                  : "border-ink/25 hover:border-ink hover:bg-ink hover:text-paper"
              }`;
              return l.external ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {l.label} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <Link key={l.label} href={l.href} className={cls}>
                  {l.label} <span aria-hidden="true">→</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="relative m-3 overflow-hidden rounded-[16px] md:col-span-6 md:m-4 md:rounded-[22px]">
          <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
            <Image
              src={card.photo.src}
              alt={card.photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div className="pointer-events-none absolute inset-0 bg-ink" style={{ opacity: shade }} />
      </motion.article>
    </div>
  );
}
