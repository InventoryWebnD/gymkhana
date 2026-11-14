"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";

const WORDS = ["Play", "Perform", "Build", "Lead", "Belong"];

/** Kinetic band — drifts on its own, then speeds up and leans with your scroll. */
export default function Marquee() {
  return (
    <section aria-label="Play, perform, build, lead, belong" className="relative z-10 overflow-hidden bg-accent py-6 text-ink md:py-10">
      <Row baseVelocity={-2.2} />
      <Row baseVelocity={2.2} serifFirst />
    </section>
  );
}

function Row({ baseVelocity, serifFirst = false }: { baseVelocity: number; serifFirst?: boolean }) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [-1500, 0, 1500], [-4, 0, 4], { clamp: false });
  const skew = useTransform(velocity, [-2000, 0, 2000], [8, 0, -8], { clamp: true });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = direction.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) direction.current = -1;
    else if (f > 0) direction.current = 1;
    move += direction.current * move * Math.abs(f);
    baseX.set(baseX.get() + move);
  });

  const items = [...WORDS, ...WORDS];

  return (
    <div aria-hidden="true" className="flex overflow-hidden whitespace-nowrap">
      <motion.div style={{ x, skewX: skew }} className="flex shrink-0">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((w, i) => {
              const serif = (i % 2 === 0) === serifFirst;
              return (
                <span key={`${copy}-${i}`} className="flex items-center">
                  <span
                    className={
                      serif
                        ? "px-6 font-serif text-[clamp(3rem,9vw,8.5rem)] italic leading-none md:px-10"
                        : "px-6 font-sans text-[clamp(3rem,9vw,8.5rem)] font-semibold uppercase leading-none tracking-[-0.05em] md:px-10"
                    }
                  >
                    {w}
                  </span>
                  <Star />
                </span>
              );
            })}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-[clamp(1.5rem,3vw,3rem)] w-[clamp(1.5rem,3vw,3rem)] shrink-0" fill="currentColor">
      <path d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0Z" />
    </svg>
  );
}
