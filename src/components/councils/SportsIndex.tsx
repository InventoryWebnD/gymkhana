"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Photo } from "@/components/design/photos";
import { Reveal, easeInOut } from "@/components/design/primitives";

export type Sport = {
  name: string;
  tagline: string;
  description: string;
  photo?: Photo;
};

/** Expandable index of sports — one open at a time. */
export default function SportsIndex({ sports }: { sports: Sport[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ol className="border-t border-ink/15">
      {sports.map((sport, i) => {
        const isOpen = open === i;
        const id = `sport-${i}`;
        return (
          <Reveal key={sport.name} y={20} delay={Math.min(i, 6) * 0.03}>
            <li className="border-b border-ink/15">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-6 text-left md:grid-cols-[4rem_1.2fr_1fr_auto] md:gap-6 md:py-8"
                >
                  <span className="font-mono text-[11px] tracking-[0.22em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-sans text-[clamp(1.7rem,4.6vw,4.2rem)] font-semibold leading-[0.95] tracking-[-0.045em] transition-transform duration-500 ease-out-expo md:group-hover:translate-x-3 ${
                      isOpen ? "md:translate-x-3" : ""
                    }`}
                  >
                    {sport.name}
                  </span>
                  <span className="hidden font-serif text-xl italic text-ink/60 md:block">{sport.tagline}</span>
                  <span
                    aria-hidden="true"
                    className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg transition-all duration-500 md:h-12 md:w-12 ${
                      isOpen ? "rotate-45 border-ink bg-ink text-paper" : "border-ink/25 group-hover:border-ink"
                    }`}
                  >
                    +
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={id}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.7, ease: easeInOut }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-6 pb-10 md:grid-cols-[4rem_1fr_1fr] md:gap-6 md:pb-14">
                      <span className="hidden md:block" />
                      <div>
                        <p className="font-serif text-2xl italic text-ink/70 md:hidden">{sport.tagline}</p>
                        <p className="mt-3 max-w-xl text-[15px] leading-[1.75] text-ink/75 md:mt-0 md:text-base">
                          {sport.description}
                        </p>
                      </div>
                      {sport.photo ? (
                        <motion.div
                          className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink"
                          initial={{ clipPath: "inset(0% 0% 100% 0% round 16px)" }}
                          animate={{ clipPath: "inset(0% 0% 0% 0% round 16px)" }}
                          transition={{ duration: 0.9, ease: easeInOut, delay: 0.1 }}
                        >
                          <Image
                            src={sport.photo.src}
                            alt={sport.photo.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            placeholder="blur"
                            className="object-cover"
                          />
                        </motion.div>
                      ) : (
                        <div className="relative flex aspect-[4/3] items-end overflow-hidden rounded-2xl bg-ink p-6 text-paper">
                          <span className="pointer-events-none absolute -right-[0.05em] -top-[0.2em] font-sans text-[min(40vw,18rem)] font-semibold leading-none tracking-[-0.06em] text-paper/[0.07]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50">
                            Photos coming soon
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </Reveal>
        );
      })}
    </ol>
  );
}
