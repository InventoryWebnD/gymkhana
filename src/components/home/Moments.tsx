"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { photos, type Photo } from "@/components/design/photos";
import { CurtainImage, MaskLines, SectionLabel } from "@/components/design/primitives";

type Item = { photo: Photo; aspect: string };

const COLUMNS: { items: Item[]; speed: number }[] = [
  {
    speed: -60,
    items: [
      { photo: photos.trophyStage, aspect: "aspect-[4/5]" },
      { photo: photos.pravaahBand, aspect: "aspect-[4/3]" },
      { photo: photos.silhouettes, aspect: "aspect-[16/10]" },
      { photo: photos.ashvamedhaTrophy, aspect: "aspect-[4/5]" },
    ],
  },
  {
    speed: 90,
    items: [
      { photo: photos.folkDance, aspect: "aspect-[3/4]" },
      { photo: photos.gcNightHoops, aspect: "aspect-[4/5]" },
      { photo: photos.campusGreen, aspect: "aspect-[4/3]" },
    ],
  },
  {
    speed: -140,
    items: [
      { photo: photos.footballField, aspect: "aspect-[4/3]" },
      { photo: photos.gcTalk, aspect: "aspect-[4/5]" },
      { photo: photos.nightCourt, aspect: "aspect-[3/4]" },
      { photo: photos.sac, aspect: "aspect-[16/10]" },
    ],
  },
];

export default function Moments() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section className="relative z-10 overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-5 pb-24 pt-24 sm:px-8 md:pb-40 md:pt-36">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel index="04" className="text-paper/60">
              Moments
            </SectionLabel>
            <MaskLines
              as="h2"
              className="mt-8 font-serif text-[clamp(3rem,8vw,8.5rem)] leading-[0.9]"
              lines={["Snapshots from", <em key="c" className="text-paper/60">campus.</em>]}
            />
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-paper/65 md:col-span-4 md:col-start-9">
            Star nights and folk dances, floodlit finals and trophy lifts — a few
            frames from the years the Gymkhana has kept campus moving.
          </p>
        </div>

        <div ref={ref} className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:mt-24 md:grid-cols-3 md:gap-8">
          {COLUMNS.map((col, i) => (
            <Column
              key={i}
              items={col.items}
              speed={col.speed}
              progress={scrollYProgress}
              className={i === 2 ? "hidden md:flex" : ""}
              extra={i === 1 ? COLUMNS[2].items : []}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Column({
  items,
  extra,
  speed,
  progress,
  className = "",
}: {
  items: Item[];
  /** On two-column layouts the hidden third column's photos fold into this one. */
  extra: Item[];
  speed: number;
  progress: MotionValue<number>;
  className?: string;
}) {
  const y = useTransform(progress, [0, 1], [0, speed]);
  return (
    <motion.div style={{ y }} className={`flex flex-col gap-4 sm:gap-6 md:gap-8 ${className}`}>
      {items.map((item, i) => (
        <CurtainImage
          key={item.photo.src.src}
          photo={item.photo}
          frameClassName={`${item.aspect} rounded-lg`}
          sizes="(max-width: 768px) 50vw, 33vw"
          delay={i * 0.05}
          direction={i % 2 ? "left" : "up"}
        />
      ))}
      {extra.map((item, i) => (
        <CurtainImage
          key={item.photo.src.src}
          photo={item.photo}
          className="md:hidden"
          frameClassName={`${item.aspect} rounded-lg`}
          sizes="50vw"
          direction={i % 2 ? "left" : "up"}
        />
      ))}
    </motion.div>
  );
}
