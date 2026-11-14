"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { photos, type Photo } from "@/components/design/photos";
import { SectionLabel } from "@/components/design/primitives";

/**
 * A cluster of photos. As you scroll, everything zooms until the centre photo
 * fills the screen — then the closing line lands on top of it.
 */
const TILES: { photo: Photo; scale: number; box: string; sizes: string }[] = [
  { photo: photos.gcCrowd, scale: 4, box: "h-[25vh] w-[25vw]", sizes: "100vw" },
  { photo: photos.pravaahDance, scale: 5, box: "-top-[30vh] left-[5vw] h-[30vh] w-[35vw]", sizes: "40vw" },
  { photo: photos.guitars, scale: 6, box: "-top-[10vh] -left-[25vw] h-[45vh] w-[20vw]", sizes: "30vw" },
  { photo: photos.squadCheer, scale: 5, box: "left-[27.5vw] h-[25vh] w-[25vw]", sizes: "30vw" },
  { photo: photos.hackathon, scale: 6, box: "top-[27.5vh] left-[5vw] h-[25vh] w-[20vw]", sizes: "30vw" },
  { photo: photos.contingent, scale: 8, box: "top-[27.5vh] -left-[22.5vw] h-[25vh] w-[30vw]", sizes: "30vw" },
  { photo: photos.gcAwards, scale: 9, box: "top-[22.5vh] left-[25vw] h-[15vh] w-[15vw]", sizes: "20vw" },
];

export default function ZoomGallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const introOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const shade = useTransform(scrollYProgress, [0.6, 0.85], [0, 0.55]);
  const lineOpacity = useTransform(scrollYProgress, [0.7, 0.88], [0, 1]);
  const lineY = useTransform(scrollYProgress, [0.7, 0.9], [60, 0]);

  return (
    <section ref={ref} aria-label="Life at IIT Bhubaneswar" className="relative z-10 h-[320vh] bg-ink text-paper">
      <div className="grain sticky top-0 h-[100svh] overflow-hidden">
        {TILES.map((tile, i) => (
          <Tile key={i} tile={tile} progress={scrollYProgress} />
        ))}

        <motion.div className="pointer-events-none absolute inset-0 bg-ink" style={{ opacity: shade }} />

        <motion.div
          style={{ opacity: introOpacity }}
          className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5 pt-24 sm:p-8 sm:pt-28"
        >
          <SectionLabel index="03" className="text-paper/70">
            Life at IIT Bhubaneswar
          </SectionLabel>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 sm:block">
            Keep scrolling
          </span>
        </motion.div>

        <motion.div
          style={{ opacity: lineOpacity, y: lineY }}
          className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/70">
            Every stage, match and hackathon
          </p>
          <p className="mt-6 font-serif text-[clamp(3rem,10vw,10rem)] leading-[0.9]">
            Every bit of it,
            <br />
            <em className="text-accent">student-run.</em>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Tile({
  tile,
  progress,
}: {
  tile: (typeof TILES)[number];
  progress: MotionValue<number>;
}) {
  const scale = useTransform(progress, [0, 0.85], [1, tile.scale]);
  return (
    <motion.div
      style={{ scale }}
      className="absolute inset-0 flex items-center justify-center will-change-transform"
    >
      <div className={`relative overflow-hidden ${tile.box}`}>
        <Image
          src={tile.photo.src}
          alt={tile.photo.alt}
          fill
          sizes={tile.sizes}
          placeholder="blur"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}
