"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { photos } from "@/components/design/photos";
import { HERO_START_SCALE, useIntroDone } from "./intro";
import { FitWord, easeInOut, easeOutExpo } from "@/components/design/primitives";

const SLIDES = [
  photos.starNight,
  photos.gcCrowd,
  photos.stageShow,
  photos.marchPast,
  photos.roboSoccer,
];
const SLIDE_MS = 6500;

export default function Hero() {
  const done = useIntroDone();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.1 });
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  // Advance slides only while the hero is on screen and the intro has finished.
  useEffect(() => {
    if (!done || !inView) return;
    const id = window.setTimeout(() => {
      setPrev(index);
      setIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [done, inView, index]);

  // As the next section slides over, push the hero back and dim it.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.7]);
  const wordY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  const slide = SLIDES[index];

  return (
    <section
      ref={ref}
      aria-label="Students' Gymkhana, IIT Bhubaneswar"
      className="grain sticky top-0 h-[100svh] min-h-[560px] w-full overflow-hidden bg-ink text-paper"
    >
      {/* Photos */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        {prev !== null && (
          <div key={`prev-${prev}`} className="absolute inset-0">
            <Image src={SLIDES[prev].src} alt="" fill sizes="100vw" className="object-cover" />
          </div>
        )}
        <motion.div
          key={index}
          className="absolute inset-0 overflow-hidden"
          initial={prev === null ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.4, ease: easeInOut }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: HERO_START_SCALE }}
            animate={done ? { scale: 1 } : { scale: HERO_START_SCALE }}
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
      </motion.div>

      {/* Warm the cache for the next slide so its wipe never reveals an empty frame. */}
      {done && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0">
          <Image src={SLIDES[(index + 1) % SLIDES.length].src} alt="" fill sizes="100vw" className="object-cover" />
        </div>
      )}

      {/* Legibility gradients fade in after the intro hands off */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,15,22,0.55)_0%,rgba(10,15,22,0)_28%,rgba(10,15,22,0)_45%,rgba(10,15,22,0.92)_100%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      {/* On narrow screens the copy stacks higher, so darken more of the frame. */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-ink/85 via-ink/50 to-transparent md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div className="pointer-events-none absolute inset-0 bg-ink" style={{ opacity: dim }} />

      {/* Copy */}
      <motion.div style={{ y: wordY }} className="relative z-[2] flex h-full flex-col justify-end px-5 pb-6 sm:px-8 sm:pb-8">
        <div className="mb-2 flex flex-col-reverse gap-8 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={done ? { y: "0%" } : {}}
              transition={{ duration: 1.1, ease: easeOutExpo, delay: 0.15 }}
              className="font-serif text-4xl italic leading-none sm:text-6xl md:text-7xl"
            >
              Students&apos;
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={done ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.9 }}
            className="max-w-sm text-sm leading-relaxed text-paper/85 [text-shadow:0_1px_14px_rgba(0,0,0,0.55)] md:mb-3 md:text-right md:text-[15px]"
          >
            The elected student body of IIT Bhubaneswar — three councils, fifteen
            societies and eleven sports, run by students for every student.
          </motion.p>
        </div>

        <h1 className="sr-only">Students&apos; Gymkhana, IIT Bhubaneswar</h1>
        <FitWord word="Gymkhana" play={done} delay={0.2} className="text-[17vw] text-paper" />

        {/* Meta bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={done ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-5 grid grid-cols-2 items-center gap-4 border-t border-paper/20 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/70 sm:mt-7 md:grid-cols-4"
        >
          <span>IIT Bhubaneswar · Est. 2010</span>
          <span className="hidden md:block">20.15° N · 85.67° E</span>
          <span className="col-span-2 flex items-center gap-3 md:col-span-1">
            <span className="tabular-nums text-paper">
              {String(index + 1).padStart(2, "0")}
              <span className="text-paper/40"> / {String(SLIDES.length).padStart(2, "0")}</span>
            </span>
            <span className="relative h-px flex-1 bg-paper/20">
              <motion.span
                key={`bar-${index}-${done}`}
                className="absolute inset-y-0 left-0 bg-accent"
                initial={{ width: "0%" }}
                animate={done ? { width: "100%" } : {}}
                transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
              />
            </span>
            <span className="truncate">{slide.caption}</span>
          </span>
          <span className="col-start-2 row-start-1 flex items-center justify-end gap-2 md:col-start-auto md:row-start-auto">
            Scroll
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              ↓
            </motion.span>
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
