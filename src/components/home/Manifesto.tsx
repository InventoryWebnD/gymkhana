"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { photos, type Photo } from "@/components/design/photos";
import { MaskLines, PillLink, SectionLabel, easeOutExpo } from "@/components/design/primitives";
import techSocieties from "@/data/tech.json";
import cultSocieties from "@/data/cult.json";

type Token = { word: string } | { photo: Photo };

const t = (s: string): Token[] => s.split(" ").map((word) => ({ word }));

const MANIFESTO: Token[] = [
  ...t("Since 2010, the Students' Gymkhana has been where IIT Bhubaneswar goes after class — to the stage"),
  { photo: photos.stageShow },
  ...t("the field"),
  { photo: photos.gcFootball },
  ...t("and the workbench at 3 a.m."),
  { photo: photos.roboSoccer },
  ...t("Elected by students, run by students, and open to every one of them."),
];

const SOCIETY_COUNT = techSocieties.length + cultSocieties.length;

const STATS = [
  { value: 2010, label: "Founded", pad: 4 },
  { value: 3, label: "Councils", pad: 2 },
  { value: SOCIETY_COUNT, label: "Societies", pad: 2 },
  { value: 11, label: "Sports", pad: 2 },
];

const STRUCTURE = [
  {
    title: "President",
    body: "A faculty member heads the Gymkhana and guides it alongside the student executives.",
  },
  {
    title: "Students' Senate",
    body: "The elected representative body. It lays down the guidelines every executive and council works within.",
  },
  {
    title: "Executives",
    body: "The Vice President and three General Secretaries — Socio-Cultural, Science & Technology, and Sports.",
  },
  {
    title: "Elections",
    body: "Held every spring and presided over by an Election Commissioner, as set out in the Gymkhana Constitution.",
  },
];

export default function Manifesto() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.85", "end 0.4"],
  });

  return (
    <section
      id="about"
      className="relative z-10 rounded-t-[28px] bg-paper text-ink shadow-[0_-30px_60px_rgba(0,0,0,0.25)] sm:rounded-t-[40px]"
    >
      <div className="mx-auto max-w-[1600px] px-5 pb-24 pt-20 sm:px-8 md:pb-36 md:pt-32">
        <div className="mb-12 flex items-center justify-between md:mb-16">
          <SectionLabel index="01">About the Gymkhana</SectionLabel>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50 sm:block">
            By students · For students
          </span>
        </div>

        <p
          ref={textRef}
          className="max-w-[22ch] font-serif text-[clamp(2.1rem,6.2vw,6.4rem)] leading-[1.02] tracking-[-0.01em] sm:max-w-none"
        >
          {MANIFESTO.map((tok, i) => (
            <ScrubToken key={i} token={tok} index={i} total={MANIFESTO.length} progress={scrollYProgress} />
          ))}
        </p>

        {/* Stats */}
        <dl className="mt-20 grid grid-cols-2 border-t border-ink/15 md:mt-32 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-2 border-b border-ink/15 py-6 md:border-b-0 md:py-8 ${
                i % 2 === 1 ? "border-l pl-5" : ""
              } ${i > 0 ? "md:border-l md:pl-8" : ""}`}
            >
              <dt className="order-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
                {s.label}
              </dt>
              <dd className="order-1 font-sans text-6xl font-semibold tabular-nums tracking-[-0.05em] md:text-8xl">
                <Counter to={s.value} pad={s.pad} from={s.value > 100 ? s.value - 40 : 0} />
              </dd>
            </div>
          ))}
        </dl>

        {/* Structure */}
        <div className="mt-24 grid gap-12 md:mt-36 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <MaskLines
              as="h2"
              className="font-serif text-5xl leading-[0.95] md:text-6xl"
              lines={["How the", <em key="g">Gymkhana</em>, "works."]}
            />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink/70">
              A self-governing, democratic body that bridges students and the
              administration, and the nucleus of every sporting, cultural and
              technical activity on campus.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillLink href="/constitution">Read the Constitution</PillLink>
              <PillLink href="/office" variant="ghost">
                Meet the office
              </PillLink>
            </div>
          </div>

          <ol className="grid gap-px overflow-hidden rounded-2xl bg-ink/15 sm:grid-cols-2 lg:col-span-8">
            {STRUCTURE.map((item, i) => (
              <li
                key={item.title}
                className="group relative min-h-[220px] bg-paper transition-colors duration-500 hover:bg-ink hover:text-paper"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, ease: easeOutExpo, delay: i * 0.08 }}
                  className="flex h-full flex-col justify-between gap-10 p-6 md:p-8"
                >
                  <span className="font-mono text-[11px] tracking-[0.22em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl">{item.title}</h3>
                    <p className="mt-3 max-w-xs text-[14px] leading-relaxed opacity-70">{item.body}</p>
                  </div>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ScrubToken({
  token,
  index,
  total,
  progress,
}: {
  token: Token;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.14, 1]);
  const scale = useTransform(progress, [start, end], [0.4, 1]);

  if ("photo" in token) {
    return (
      <>
        <motion.span
          style={{ scale, opacity }}
          className="relative mx-[0.12em] inline-block h-[0.78em] w-[1.6em] translate-y-[0.06em] overflow-hidden rounded-full align-baseline"
        >
          <Image
            src={token.photo.src}
            alt=""
            fill
            sizes="160px"
            placeholder="blur"
            className="object-cover"
          />
        </motion.span>{" "}
      </>
    );
  }

  return (
    <>
      <motion.span style={{ opacity }}>{token.word}</motion.span>{" "}
    </>
  );
}

function Counter({ to, from = 0, pad }: { to: number; from?: number; pad: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const value = useMotionValue(from);
  const text = useTransform(value, (v) => String(Math.round(v)).padStart(pad, "0"));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 2, ease: easeOutExpo });
    return controls.stop;
  }, [inView, to, value]);

  return (
    <>
      <motion.span ref={ref} aria-hidden="true">
        {text}
      </motion.span>
      <span className="sr-only">{to}</span>
    </>
  );
}
