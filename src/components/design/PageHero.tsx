"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import type { Photo } from "./photos";
import { MaskLines, easeInOut, easeOutExpo } from "./primitives";

const SLIDE_MS = 6000;

/**
 * The opening of every inner page. With photos it is a full-bleed, slowly
 * rotating photo hero; without, a typographic one over the ink grid.
 */
export default function PageHero({
  eyebrow,
  crumbs = [],
  title,
  italic,
  intro,
  photos = [],
  meta = [],
  children,
}: {
  /** Short mono label, e.g. "Council". */
  eyebrow: string;
  crumbs?: { label: string; href: string }[];
  /** Big grotesk title; each array item is one line. */
  title: ReactNode[];
  /** Optional serif italic line under the title. */
  italic?: ReactNode;
  intro?: ReactNode;
  photos?: Photo[];
  meta?: { label: string; value: ReactNode }[];
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.1 });
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const hasPhotos = photos.length > 0;

  useEffect(() => {
    if (photos.length < 2 || !inView) return;
    const id = window.setTimeout(() => {
      setPrev(index);
      setIndex((i) => (i + 1) % photos.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [photos.length, inView, index]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  const slide = photos[index];

  return (
    <section
      ref={ref}
      className={`grain relative w-full overflow-hidden bg-ink text-paper ${
        hasPhotos ? "min-h-[600px] h-[92svh]" : "min-h-[520px] h-[72svh]"
      }`}
    >
      {hasPhotos ? (
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          {prev !== null && (
            <div className="absolute inset-0">
              <Image src={photos[prev].src} alt="" fill sizes="100vw" className="object-cover" />
            </div>
          )}
          <motion.div
            key={index}
            className="absolute inset-0 overflow-hidden"
            initial={prev === null ? { opacity: 0 } : { clipPath: "inset(100% 0% 0% 0%)" }}
            animate={prev === null ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: prev === null ? 1 : 1.4, ease: easeInOut }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: SLIDE_MS / 1000 + 1.5, ease: "easeOut" }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                preload={index === 0}
                placeholder="blur"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
          {photos.length > 1 && (
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0">
              <Image src={photos[(index + 1) % photos.length].src} alt="" fill sizes="100vw" />
            </div>
          )}
        </motion.div>
      ) : (
        // Typographic variant: hairline column grid
        <div aria-hidden="true" className="absolute inset-0 grid grid-cols-6 px-5 sm:px-8 md:grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.span
              key={i}
              className={`border-l border-paper/[0.06] ${i >= 6 ? "hidden md:block" : ""}`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              style={{ originY: 0 }}
              transition={{ duration: 1.4, ease: easeOutExpo, delay: i * 0.04 }}
            />
          ))}
        </div>
      )}

      {hasPhotos && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,15,22,0.6)_0%,rgba(10,15,22,0.05)_30%,rgba(10,15,22,0.35)_55%,rgba(10,15,22,0.94)_100%)]" />
          <motion.div className="pointer-events-none absolute inset-0 bg-ink" style={{ opacity: dim }} />
        </>
      )}

      <motion.div
        style={{ y: copyY }}
        className="relative z-[2] mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-12 pt-28 sm:px-8 md:pb-16"
      >
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60 sm:text-[11px]"
        >
          <span className="text-accent">({eyebrow})</span>
          <span className="h-px w-6 bg-paper/30" />
          <Link href="/home" className="transition-colors hover:text-paper">
            Gymkhana
          </Link>
          {crumbs.map((c) => (
            <span key={c.href} className="flex items-center gap-3">
              <span aria-hidden="true">/</span>
              <Link href={c.href} className="transition-colors hover:text-paper">
                {c.label}
              </Link>
            </span>
          ))}
        </motion.nav>

        <MaskLines
          as="h1"
          play
          delay={0.1}
          lines={title}
          className="font-sans text-[clamp(2.4rem,10.5vw,11rem)] font-semibold uppercase leading-[0.86] tracking-[-0.05em] [font-stretch:100%] sm:[font-stretch:112%]"
        />
        {italic && (
          <MaskLines
            play
            delay={0.35}
            lines={[italic]}
            className="mt-3 font-serif text-[clamp(1.9rem,4.6vw,4.6rem)] italic leading-[1] text-paper/75"
          />
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 grid gap-6 border-t border-paper/20 pt-5 md:mt-10 md:grid-cols-12 md:items-start"
        >
          {intro && (
            <div className="text-[15px] leading-relaxed text-paper/80 md:col-span-6 lg:col-span-5">{intro}</div>
          )}
          <dl
            className={`grid grid-cols-2 gap-x-6 gap-y-4 font-mono text-[10px] uppercase tracking-[0.2em] sm:grid-cols-3 ${
              intro ? "md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7" : "md:col-span-12"
            }`}
          >
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-paper/50">{m.label}</dt>
                <dd className="mt-1.5 text-[13px] normal-case tracking-normal text-paper">{m.value}</dd>
              </div>
            ))}
            {hasPhotos && photos.length > 1 && (
              <div>
                <dt className="text-paper/50">
                  Photo {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                </dt>
                <dd className="mt-1.5 truncate text-[13px] normal-case tracking-normal text-paper">
                  {slide.caption}
                </dd>
              </div>
            )}
          </dl>
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}

/** The paper sheet that slides up over a hero. */
export function Sheet({
  children,
  tone = "paper",
  className = "",
}: {
  children: ReactNode;
  tone?: "paper" | "ink";
  className?: string;
}) {
  return (
    <div
      className={`relative z-10 -mt-7 rounded-t-[28px] sm:rounded-t-[40px] ${
        tone === "paper" ? "bg-paper text-ink" : "grain bg-ink text-paper"
      } ${className}`}
    >
      {children}
    </div>
  );
}
