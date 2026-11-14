"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "framer-motion";
import type { Photo } from "@/components/design/photos";
import { MaskLines, Reveal, easeInOut, easeOutExpo } from "@/components/design/primitives";

export type SocietyEntry = {
  name: string;
  full: string;
  description: string;
  logo: string;
  links: { label: string; href: string }[];
  /** Real photos from the society — float in the background as you read. */
  photos?: Photo[];
};

/**
 * Sticky panel on the left (the active society's photo behind its logo); the
 * society you're reading on the right drives it. Each society's photos drift
 * as thumbnails through the empty space beside its text.
 */
export default function SocietyIndex({ societies, council }: { societies: SocietyEntry[]; council: string }) {
  const [active, setActive] = useState(0);
  const current = societies[active];
  const blocks = useRef<(HTMLElement | null)[]>([]);

  // The active society is the last one whose top has passed 40% of the viewport.
  const { scrollY } = useScroll();
  const sync = useCallback(() => {
    const line = window.innerHeight * 0.4;
    let next = 0;
    blocks.current.forEach((el, i) => {
      if (el && el.getBoundingClientRect().top <= line) next = i;
    });
    setActive(next);
  }, []);
  useMotionValueEvent(scrollY, "change", sync);
  const backdrop = current.photos?.[0];

  return (
    <div className="grid gap-10 md:grid-cols-12 md:gap-12">
      <aside className="hidden md:col-span-5 md:block">
        <div className="sticky top-24">
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[28px] bg-ink">
            {/* society photo as the panel's backdrop */}
            <AnimatePresence>
              {backdrop && (
                <motion.div
                  key={backdrop.src.src}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.12 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: easeOutExpo }}
                >
                  <Image src={backdrop.src} alt="" fill sizes="40vw" placeholder="blur" className="object-cover" />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-ink/70" />

            <span className="absolute left-6 top-6 z-[1] font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">
              {council}
            </span>
            <span className="absolute right-6 top-6 z-[1] font-mono text-[11px] tabular-nums tracking-[0.22em] text-paper/60">
              <span className="text-accent">{String(active + 1).padStart(2, "0")}</span> /{" "}
              {String(societies.length).padStart(2, "0")}
            </span>
            <AnimatePresence>
              <motion.div
                key={current.logo + active}
                className="absolute z-[1] h-[46%] w-[46%]"
                initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.08, rotate: 4 }}
                transition={{ duration: 0.55, ease: easeOutExpo }}
              >
                <Image src={current.logo} alt="" fill sizes="320px" className="object-contain drop-shadow-2xl" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-x-6 bottom-6 z-[1] flex items-end justify-between gap-4">
              <AnimatePresence mode="popLayout">
                <motion.p
                  key={current.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: easeOutExpo }}
                  className="font-serif text-3xl italic text-paper"
                >
                  {current.name}
                </motion.p>
              </AnimatePresence>
              {backdrop && (
                <span className="max-w-[45%] truncate text-right font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55">
                  {backdrop.caption}
                </span>
              )}
            </div>
          </div>

          {/* jump list */}
          <ol className="mt-6 flex flex-wrap gap-1.5">
            {societies.map((s, i) => (
              <li key={s.name}>
                <a
                  href={`#soc-${i}`}
                  className={`inline-block rounded-full border px-3 py-1 text-[12px] transition-colors ${
                    i === active
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/20 text-ink/70 hover:border-ink hover:text-ink"
                  }`}
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </aside>

      <div className="min-w-0 md:col-span-7">
        {societies.map((s, i) => (
          <SocietyBlock key={s.name} society={s} index={i} total={societies.length} register={(el) => (blocks.current[i] = el)} />
        ))}
      </div>
    </div>
  );
}

function SocietyBlock({
  society,
  index,
  total,
  register,
}: {
  society: SocietyEntry;
  index: number;
  total: number;
  register: (el: HTMLElement | null) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const setRef = useCallback(
    (el: HTMLElement | null) => {
      ref.current = el;
      register(el);
    },
    [register],
  );

  // Thumbnails drift at their own speeds as the block scrolls past.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [90, -120]);
  const yB = useTransform(scrollYProgress, [0, 1], [160, -60]);
  const photos = society.photos ?? [];
  const flip = index % 2 === 1;

  return (
    <article
      ref={setRef}
      id={`soc-${index}`}
      className="relative scroll-mt-28 border-t border-ink/15 py-12 first:border-t-0 first:pt-0 md:py-20 md:first:pt-0"
    >
      {/* Floating thumbnails in the empty space beside the copy (large screens). */}
      {photos.length > 0 && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
          <FloatThumb
            photo={photos[0]}
            y={yA}
            className={`top-[22%] w-36 xl:w-48 ${flip ? "-right-5 xl:-right-7" : "-right-6"}`}
            rotate={flip ? -4 : 3}
            aspect="aspect-[4/5]"
          />
          {photos[1] && (
            <FloatThumb
              photo={photos[1]}
              y={yB}
              className={`top-[56%] w-32 xl:w-40 ${flip ? "right-6 xl:right-10" : "right-2 xl:right-8"}`}
              rotate={flip ? 5 : -5}
              aspect="aspect-[4/3]"
              delay={0.15}
            />
          )}
        </div>
      )}

      <div className="relative z-[1]">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 rounded-2xl bg-ink p-2.5 md:hidden">
            <Image src={society.logo} alt="" fill sizes="64px" className="object-contain p-2.5" />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            <span className="text-accent">{String(index + 1).padStart(2, "0")}</span> / {String(total).padStart(2, "0")}
          </span>
        </div>
        <MaskLines
          as="h3"
          className="mt-5 font-sans text-[clamp(2.1rem,4.4vw,4.4rem)] font-semibold leading-[0.9] tracking-[-0.05em] [font-stretch:100%] lg:max-w-[23rem] xl:max-w-[32rem]"
          lines={[society.name]}
        />
        <Reveal delay={0.05}>
          <p className="mt-3 max-w-xl font-serif text-2xl italic text-ink/70 md:text-3xl lg:max-w-[23rem] xl:max-w-[27rem]">{society.full}</p>
        </Reveal>

        {/* Small screens: the photos become a swipeable strip. */}
        {photos.length > 0 && (
          <div className="-mx-5 mt-6 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:hidden [scrollbar-width:none]">
            {photos.map((p, i) => (
              <Reveal key={p.src.src} delay={i * 0.08} y={16} className="shrink-0 snap-start">
                <figure className="w-48 sm:w-56">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-paper-2">
                    <Image src={p.src} alt={p.alt} fill sizes="224px" placeholder="blur" className="object-cover" />
                  </div>
                  <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">{p.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.75] text-ink/75 md:text-base lg:max-w-[23rem] xl:max-w-[27rem]">
            {society.description}
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-7 flex flex-wrap gap-2">
          {society.links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`group inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13px] font-medium transition-colors ${
                i === 0
                  ? "bg-ink text-paper hover:bg-accent hover:text-ink"
                  : "border border-ink/25 bg-paper hover:border-ink hover:bg-ink hover:text-paper"
              }`}
            >
              {l.label}
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </article>
  );
}

function FloatThumb({
  photo,
  y,
  className,
  rotate,
  aspect,
  delay = 0,
}: {
  photo: Photo;
  y: MotionValue<number>;
  className: string;
  rotate: number;
  aspect: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div ref={ref} style={{ y, rotate }} className={`absolute ${className}`}>
      <motion.div
        className={`relative overflow-hidden rounded-xl bg-paper-2 shadow-[0_20px_50px_-20px_rgba(10,15,22,0.45)] ${aspect}`}
        initial={{ clipPath: "inset(100% 0% 0% 0% round 12px)" }}
        animate={{ clipPath: inView ? "inset(0% 0% 0% 0% round 12px)" : "inset(100% 0% 0% 0% round 12px)" }}
        transition={{ duration: 1.1, ease: easeInOut, delay }}
      >
        <Image src={photo.src} alt="" fill sizes="220px" placeholder="blur" className="object-cover" />
      </motion.div>
      <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/45">{photo.caption}</p>
    </motion.div>
  );
}
