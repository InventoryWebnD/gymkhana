"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { photos, type Photo } from "@/components/design/photos";

/**
 * The intro plays once per full page load. Client-side navigations back to
 * /home skip it, because this module (and the flag) survive in memory.
 */
let introPlayed = false;

const IntroContext = createContext(true);

/** True once the intro has finished (or was skipped). */
export function useIntroDone() {
  return useContext(IntroContext);
}

/** Frames flicked through while loading. The last one becomes the hero. */
const FLICKER: { photo: Photo; word: string }[] = [
  { photo: photos.folkDance, word: "act" },
  { photo: photos.gcNightHoops, word: "compete" },
  { photo: photos.hackathon, word: "build" },
  { photo: photos.pravaahDance, word: "perform" },
  { photo: photos.squadCheer, word: "celebrate" },
  { photo: photos.roboSoccer, word: "invent" },
  { photo: photos.pravaahBand, word: "jam" },
  { photo: photos.gcFootball, word: "play" },
  { photo: photos.gcChampions, word: "win" },
];

export const HERO_FIRST = photos.starNight;
/** Must match the hero image's starting scale so the handoff is seamless. */
export const HERO_START_SCALE = 1.12;

const easeInOut = [0.76, 0, 0.24, 1] as const;

export function IntroProvider({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(() => introPlayed);

  const finish = useCallback(() => {
    introPlayed = true;
    setDone(true);
  }, []);

  return (
    <IntroContext.Provider value={done}>
      {!done && <Preloader onDone={finish} />}
      {children}
    </IntroContext.Provider>
  );
}

function Preloader({ onDone }: { onDone: () => void }) {
  const [frame, setFrame] = useState(0);
  const [phase, setPhase] = useState<"loading" | "expand">("loading");
  const [heroReady, setHeroReady] = useState(false);
  const [counted, setCounted] = useState(false);

  const count = useMotionValue(0);
  const countText = useTransform(count, (v) => String(Math.round(v)).padStart(3, "0"));
  const reveal = useMotionValue(0); // 0 = small frame, 1 = full screen
  const doneRef = useRef(false);

  // Skip entirely for reduced-motion users, and for pages opened in a
  // background tab (nobody is watching, and browsers pause animation frames).
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.visibilityState === "hidden"
    ) {
      onDone();
      return;
    }
    window.scrollTo(0, 0);
    const controls = animate(count, 100, {
      duration: 2.3,
      ease: [0.6, 0, 0.3, 1],
      onComplete: () => setCounted(true),
    });
    // Never hold the visitor hostage: a slow hero image stops blocking at 5s,
    // and whatever else happens, the page is released at 8s.
    const failSafe = window.setTimeout(() => setHeroReady(true), 5000);
    const hardStop = window.setTimeout(onDone, 8000);
    return () => {
      controls.stop();
      window.clearTimeout(failSafe);
      window.clearTimeout(hardStop);
    };
  }, [count, onDone]);

  // Flick through frames while loading.
  useEffect(() => {
    if (phase !== "loading") return;
    const id = window.setInterval(() => setFrame((f) => (f + 1) % FLICKER.length), 190);
    return () => window.clearInterval(id);
  }, [phase]);

  // Hold at 99 until the hero image has actually arrived.
  useMotionValueEvent(count, "change", (v) => {
    if (v > 99 && !heroReady) count.set(99);
  });

  useEffect(() => {
    if (!counted || !heroReady || doneRef.current) return;
    doneRef.current = true;
    count.set(100);
    setPhase("expand");
    animate(reveal, 1, {
      duration: 1.25,
      delay: 0.15,
      ease: easeInOut,
      onComplete: onDone,
    });
  }, [counted, heroReady, count, reveal, onDone]);

  const progressScale = useTransform(count, [0, 100], [0, 1]);
  const uiOpacity = useTransform(reveal, [0, 0.35], [1, 0]);
  const current = FLICKER[frame];

  return (
    <div
      aria-hidden="true"
      className="intro-overlay fixed inset-0 z-[100] bg-ink text-paper motion-reduce:hidden"
    >
      {/* The frame. Its clip-path opens to the full viewport at the end. */}
      <motion.div
        className="intro-frame absolute inset-0 overflow-hidden"
        style={{ "--p": reveal } as unknown as CSSProperties}
      >
        {FLICKER.map(({ photo }, i) => (
          <Image
            key={photo.src.src}
            src={photo.src}
            alt=""
            fill
            sizes="60vw"
            loading="eager"
            placeholder="blur"
            className="object-cover"
            style={{
              opacity: phase === "loading" && i === frame ? 1 : 0,
              transform: `scale(${HERO_START_SCALE})`,
            }}
          />
        ))}
        <Image
          src={HERO_FIRST.src}
          alt=""
          fill
          sizes="100vw"
          preload
          placeholder="blur"
          onLoad={() => setHeroReady(true)}
          className="object-cover"
          style={{
            opacity: phase === "expand" ? 1 : 0,
            transform: `scale(${HERO_START_SCALE})`,
          }}
        />
      </motion.div>

      <motion.div style={{ opacity: uiOpacity }} className="pointer-events-none absolute inset-0">
        {/* top row */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70 sm:p-8">
          <span>
            Students&apos; Gymkhana
            <br />
            IIT Bhubaneswar
          </span>
          <span className="text-right">
            Est. 2010
            <br />
            20.15° N · 85.67° E
          </span>
        </div>

        {/* bottom row */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 sm:p-8">
          <div className="leading-none">
            <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60">
              Here we
            </span>
            <span className="mt-2 block h-[1.1em] overflow-hidden font-serif text-5xl italic sm:text-7xl md:text-8xl">
              <motion.span
                key={current.word}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {current.word}
                <span className="text-accent">.</span>
              </motion.span>
            </span>
          </div>
          <motion.span className="font-sans text-6xl font-semibold tabular-nums tracking-tighter sm:text-8xl md:text-9xl">
            {countText}
          </motion.span>
        </div>

        {/* progress hairline */}
        <motion.div
          className="absolute left-0 top-0 h-px origin-left bg-accent"
          style={{ width: "100%", scaleX: progressScale }}
        />
      </motion.div>
    </div>
  );
}
