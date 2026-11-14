"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { photos, type Photo } from "@/components/design/photos";
import { MaskLines, SectionLabel, easeOutExpo } from "@/components/design/primitives";
import techSocieties from "@/data/tech.json";
import cultSocieties from "@/data/cult.json";

type Council = {
  name: string;
  short: string;
  href: string;
  blurb: string;
  photo: Photo;
  members: { label: string; href: string }[];
};

// "NEUROMANCERS" → "Neuromancers"; short acronyms (RISC, FEBS, WebnD) stay as written.
const titleCase = (s: string) =>
  s.length <= 5 ? s : s.toLowerCase().replace(/(^|[\s-])\w/g, (m) => m.toUpperCase());

const SPORTS = [
  "Football", "Cricket", "Badminton", "Athletics", "Volleyball", "Basketball",
  "Table Tennis", "Tennis", "Board Games", "Gym & Weightlifting", "Swimming",
];

const COUNCILS: Council[] = [
  {
    name: "Science & Technology",
    short: "Tech",
    href: "/councils/tech",
    blurb:
      "Robotics, programming, astronomy, finance and the web — ideas get built, broken and rebuilt here long before they reach the Inter IIT Tech Meet.",
    photo: photos.roboSoccer,
    members: techSocieties.map((s) => ({ label: titleCase(s.name), href: `/councils/tech/${s.slug}` })),
  },
  {
    name: "Socio-Cultural",
    short: "Cult",
    href: "/councils/cult",
    blurb:
      "Music, dance, drama, film, fine arts, literature, quizzing, photography and social welfare — the societies that keep campus loud, colourful and curious.",
    photo: photos.folkDance,
    members: cultSocieties.map((s) => ({ label: titleCase(s.name), href: `/councils/cult/${s.slug}` })),
  },
  {
    name: "Sports",
    short: "Sports",
    href: "/councils/sports",
    blurb:
      "Eleven sports, coached practice and floodlit courts — and a contingent that carries IIT Bhubaneswar's colours to the Inter IIT Sports Meet.",
    photo: photos.gcNightHoops,
    members: SPORTS.map((label) => ({ label, href: "/councils/sports" })),
  },
];

export default function Councils() {
  const [active, setActive] = useState<number | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  // Floating preview that trails the cursor and tilts with horizontal speed.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 30, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 30, mass: 0.6 });
  const vx = useVelocity(sx);
  const rotate = useTransform(vx, [-2000, 0, 2000], [-10, 0, 10], { clamp: true });

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const rect = areaRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <section className="grain relative z-10 bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-36">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel index="02" className="text-paper/60">
              Councils
            </SectionLabel>
            <MaskLines
              as="h2"
              className="mt-8 font-serif text-[clamp(3rem,8vw,8.5rem)] leading-[0.9]"
              lines={["Three councils.", <em key="o" className="text-paper/60">One campus.</em>]}
            />
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-paper/65 md:col-span-4 md:col-start-9">
            Every society, team and fest at IIT Bhubaneswar lives under one of
            three student-run councils, each led by an elected General Secretary.
          </p>
        </div>

        <div
          ref={areaRef}
          onPointerMove={onMove}
          onPointerLeave={() => setActive(null)}
          className="relative mt-16 border-t border-paper/15 md:mt-24"
        >
          {/* cursor-following preview (desktop, fine pointers only) */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-0 -ml-[120px] -mt-[150px] hidden h-[300px] w-[240px] pointer-fine:md:block"
            style={{ x: sx, y: sy, rotate }}
          >
            <AnimatePresence>
              {active !== null && (
                <motion.div
                  key={active}
                  className="absolute inset-0 overflow-hidden rounded-xl"
                  initial={{ clipPath: "inset(50% 50% 50% 50% round 12px)", opacity: 1 }}
                  animate={{ clipPath: "inset(0% 0% 0% 0% round 12px)" }}
                  exit={{ opacity: 0, transition: { duration: 0.25 } }}
                  transition={{ duration: 0.6, ease: easeOutExpo }}
                >
                  <Image
                    src={COUNCILS[active].photo.src}
                    alt=""
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {COUNCILS.map((c, i) => (
            <CouncilRow
              key={c.name}
              council={c}
              index={i}
              dimmed={active !== null && active !== i}
              onEnter={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CouncilRow({
  council,
  index,
  dimmed,
  onEnter,
}: {
  council: Council;
  index: number;
  dimmed: boolean;
  onEnter: () => void;
}) {
  return (
    <motion.article
      onPointerEnter={onEnter}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: easeOutExpo, delay: index * 0.08 }}
      className={`group relative z-[1] grid gap-6 border-b border-paper/15 py-10 transition-[filter] duration-500 md:grid-cols-12 md:gap-8 md:py-14 ${
        dimmed ? "md:[filter:opacity(0.35)]" : ""
      }`}
    >
      <span className="font-mono text-[11px] tracking-[0.22em] text-accent md:col-span-1 md:pt-4">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="pr-14 md:col-span-6 md:pr-0">
        <Link
          href={council.href}
          className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <h3 className="font-sans text-[clamp(2.6rem,6.4vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.045em] transition-transform duration-700 ease-out-expo md:group-hover:translate-x-4">
            {council.name}
          </h3>
          <span className="sr-only">Council — view page</span>
        </Link>

        {/* inline photo for touch / small screens */}
        <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl pointer-fine:md:hidden">
          <Image
            src={council.photo.src}
            alt={council.photo.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 md:col-span-4 md:col-start-8 md:pt-3">
        <p className="text-[15px] leading-relaxed text-paper/70">{council.blurb}</p>
        <ul className="flex flex-wrap gap-1.5">
          {council.members.map((m) => (
            <li key={m.label}>
              <Link
                href={m.href}
                className="inline-block rounded-full border border-paper/15 px-3 py-1 text-[12px] text-paper/75 transition-colors hover:border-accent hover:bg-accent hover:text-ink"
              >
                {m.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={council.href}
        aria-label={`Explore the ${council.name} council`}
        className="absolute right-0 top-10 flex h-12 w-12 items-center justify-center rounded-full border border-paper/20 text-lg transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-ink md:static md:col-span-1 md:mt-3 md:justify-self-end md:h-16 md:w-16"
      >
        ↗
      </Link>
    </motion.article>
  );
}
