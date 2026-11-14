"use client";

import { motion } from "framer-motion";
import PageHero, { Sheet } from "@/components/design/PageHero";
import { Container, Feature, SectionIntro } from "@/components/design/blocks";
import { Reveal, easeOutExpo } from "@/components/design/primitives";
import { photos } from "@/components/design/photos";
import OtherMeets from "@/components/meets/OtherMeets";

const results = [
  { rank: 1, department: "Civil", title: "Overall champion" },
  { rank: 2, department: "Electrical", title: "1st runner-up" },
  { rank: 3, department: "Mechanical", title: "2nd runner-up" },
];

const STEPS = [
  { title: "Compete", body: "Tournaments run under all three councils — Technical, Cultural and Sports." },
  { title: "Score", body: "Winners and runners-up earn points for their department according to the standings." },
  { title: "Crown", body: "The department with the highest aggregate across every event becomes General Champion." },
];

// Podium order on wide screens: 2nd, 1st, 3rd.
const PODIUM = [results[1], results[0], results[2]];
const HEIGHT: Record<number, string> = { 1: "md:h-[360px]", 2: "md:h-[270px]", 3: "md:h-[210px]" };

export default function GcMeetPage() {
  return (
    <main className="w-full bg-ink">
      <PageHero
        eyebrow="Meet"
        crumbs={[{ label: "Meets", href: "/meets/gc" }]}
        title={["General", "Championship"]}
        italic="Department pride, on the line."
        intro="The annual inter-departmental championship — every year group, every council, one trophy."
        photos={[photos.gcCrowd, photos.gcChampions, photos.gcFootball, photos.gcNightHoops, photos.dayHoops, photos.gcAwards]}
        meta={[
          { label: "Format", value: "Inter-departmental" },
          { label: "Councils", value: "Tech · Cult · Sports" },
          { label: "GC 2025", value: "Civil" },
        ]}
      />

      <Sheet>
        <Container className="py-24 md:py-32">
          <Feature
            index={1}
            kicker="About"
            name="About the GC"
            tagline="One trophy, every council."
            body={[
              "General Championship is the annual inter-departmental tournament where students strive to uphold their department's pride. It is a platform for students of different years to interact with each other in a healthy, competitive setting.",
              "Tournaments are held under three councils: Technical, Cultural and Sports. Each event has a winner, and points are awarded to winners and runners-up according to the standings. The department with the highest aggregate of points across all events is named the General Champion.",
            ]}
            photo={photos.gcAwards}
          />

          <ol className="grid gap-px overflow-hidden rounded-2xl bg-ink/15 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title} className="bg-paper">
                <Reveal delay={i * 0.08} className="flex h-full min-h-[200px] flex-col justify-between gap-8 p-6 md:p-8">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-4xl">{s.title}</h3>
                    <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-ink/70">{s.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>

        {/* Results podium */}
        <Container className="pb-24 md:pb-32">
          <SectionIntro
            index="02"
            label="Results"
            title={["GC 2025", <em key="r">standings.</em>]}
            blurb="Final standings by department after every technical, cultural and sports event was scored."
          />
          <ol aria-label="General Championship 2025 final standings" className="mt-14 flex flex-col gap-3 md:mt-20 md:grid md:grid-cols-3 md:items-end md:gap-5">
            {PODIUM.map((r) => (
              <li key={r.rank} className={r.rank === 1 ? "order-first md:order-none" : r.rank === 2 ? "order-2 md:order-none" : "order-3 md:order-none"}>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, ease: easeOutExpo, delay: r.rank === 1 ? 0.25 : r.rank === 2 ? 0.1 : 0.4 }}
                  className={`flex flex-col justify-between gap-6 rounded-[22px] p-6 md:p-8 ${HEIGHT[r.rank]} ${
                    r.rank === 1 ? "bg-accent text-ink" : r.rank === 2 ? "bg-ink text-paper" : "bg-navy text-paper"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-70">{r.title}</span>
                    <span className="font-sans text-6xl font-semibold leading-none tracking-[-0.06em] lg:text-8xl">{r.rank}</span>
                  </div>
                  <p className="font-sans text-4xl font-semibold tracking-[-0.04em] md:text-[clamp(1.6rem,3.6vw,3rem)]">{r.department}</p>
                </motion.div>
              </li>
            ))}
          </ol>
        </Container>
      </Sheet>

      <OtherMeets current="gc" index="03" />
    </main>
  );
}
