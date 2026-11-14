"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import type { Photo } from "./photos";
import { CurtainImage, MaskLines, PillLink, Reveal, SectionLabel } from "./primitives";

/** Standard page container. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1600px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** "(02) Label" + big serif title + optional blurb, laid out on the 12-col grid. */
export function SectionIntro({
  index,
  label,
  title,
  blurb,
  tone = "paper",
  className = "",
}: {
  index: string;
  label: string;
  title: ReactNode[];
  blurb?: ReactNode;
  tone?: "paper" | "ink";
  className?: string;
}) {
  const muted = tone === "paper" ? "text-ink/60" : "text-paper/60";
  const body = tone === "paper" ? "text-ink/70" : "text-paper/65";
  return (
    <div className={`grid gap-8 md:grid-cols-12 md:items-end ${className}`}>
      <div className="md:col-span-8">
        <SectionLabel index={index} className={muted}>
          {label}
        </SectionLabel>
        <MaskLines
          as="h2"
          className="mt-7 font-serif text-[clamp(2.7rem,7vw,7.5rem)] leading-[0.92]"
          lines={title}
        />
      </div>
      {blurb && (
        <Reveal className={`max-w-md text-[15px] leading-relaxed md:col-span-4 ${body}`}>{blurb}</Reveal>
      )}
    </div>
  );
}

/**
 * Photo + text, alternating sides. Used for sports, facilities, meets and fests.
 * When there is no photo, a typographic panel with the index takes its place.
 */
export function Feature({
  index,
  kicker,
  name,
  tagline,
  body,
  photo,
  logo,
  reverse = false,
  links = [],
  tone = "paper",
  aside,
}: {
  index: number;
  kicker?: string;
  name: string;
  tagline?: string;
  body: string | string[];
  photo?: Photo;
  /** Square logo rendered on a soft panel instead of a photo. */
  logo?: string;
  reverse?: boolean;
  links?: { label: string; href: string; external?: boolean }[];
  tone?: "paper" | "ink";
  aside?: ReactNode;
}) {
  const paragraphs = Array.isArray(body) ? body : [body];
  const dark = tone === "ink";
  const rule = dark ? "border-paper/15" : "border-ink/15";
  const muted = dark ? "text-paper/70" : "text-ink/70";

  return (
    <article className={`grid gap-8 border-t py-14 md:grid-cols-12 md:gap-12 md:py-24 ${rule}`}>
      <div className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
        {photo ? (
          <CurtainImage
            photo={photo}
            sizes="(max-width: 768px) 100vw, 50vw"
            frameClassName="aspect-[4/3] rounded-2xl"
            direction={reverse ? "left" : "up"}
          />
        ) : logo ? (
          <Reveal>
            <div
              className={`relative flex aspect-[4/3] items-center justify-center rounded-2xl ${
                dark ? "bg-ink-2" : "bg-paper-2"
              }`}
            >
              <div className="relative h-1/2 w-1/2">
                <Image src={logo} alt={`${name} logo`} fill sizes="300px" className="object-contain" />
              </div>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div
              className={`relative flex aspect-[4/3] items-end overflow-hidden rounded-2xl p-6 md:p-8 ${
                dark ? "bg-ink-2" : "bg-ink text-paper"
              }`}
            >
              <span className="pointer-events-none absolute -right-[0.06em] -top-[0.18em] font-sans text-[min(28vw,22rem)] font-semibold leading-none tracking-[-0.06em] text-paper/[0.06]">
                {String(index).padStart(2, "0")}
              </span>
              <span className="relative font-serif text-4xl italic text-paper/80 md:text-5xl">{tagline}</span>
            </div>
          </Reveal>
        )}
      </div>

      <div className={`flex flex-col md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
        <Reveal className="flex items-start justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.22em]">
          <span className="text-accent">{String(index).padStart(2, "0")}</span>
          {kicker && <span className={`text-right ${dark ? "text-paper/55" : "text-ink/55"}`}>{kicker}</span>}
        </Reveal>
        <MaskLines
          as="h3"
          className="mt-5 font-sans text-[clamp(2.3rem,5vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.045em]"
          lines={[name]}
        />
        {tagline && (photo || logo) && (
          <Reveal delay={0.1}>
            <p className="mt-4 font-serif text-2xl italic md:text-3xl">{tagline}</p>
          </Reveal>
        )}
        <Reveal delay={0.15} className={`mt-6 max-w-xl space-y-4 text-[15px] leading-[1.75] md:text-base ${muted}`}>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
        {aside && <Reveal delay={0.2} className="mt-8">{aside}</Reveal>}
        {links.length > 0 && (
          <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
            {links.map((l, i) => (
              <PillLink
                key={l.href}
                href={l.href}
                external={l.external}
                tone={dark ? "paper" : "ink"}
                variant={i === 0 ? "solid" : "ghost"}
              >
                {l.label}
              </PillLink>
            ))}
          </Reveal>
        )}
      </div>
    </article>
  );
}

/** Big numbers row. */
export function StatRow({
  stats,
  tone = "paper",
}: {
  stats: { value: ReactNode; label: string }[];
  tone?: "paper" | "ink";
}) {
  const rule = tone === "paper" ? "border-ink/15" : "border-paper/15";
  const muted = tone === "paper" ? "text-ink/55" : "text-paper/55";
  return (
    <dl className={`grid grid-cols-2 border-t md:grid-cols-4 ${rule}`}>
      {stats.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * 0.06}
          className={`flex flex-col gap-2 border-b py-6 md:border-b-0 md:py-8 ${rule} ${
            i % 2 === 1 ? "border-l pl-5" : ""
          } ${i > 0 ? "md:border-l md:pl-8" : ""}`}
        >
          <dt className={`order-2 font-mono text-[11px] uppercase tracking-[0.22em] ${muted}`}>{s.label}</dt>
          <dd className="order-1 font-sans text-5xl font-semibold tabular-nums tracking-[-0.05em] md:text-7xl">
            {s.value}
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}
