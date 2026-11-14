"use client";

import PageHero, { Sheet } from "@/components/design/PageHero";
import { Container, Feature, SectionIntro, StatRow } from "@/components/design/blocks";
import { Reveal } from "@/components/design/primitives";
import { photos } from "@/components/design/photos";
import OtherMeets from "@/components/meets/OtherMeets";

const SPORTS = [
  "Athletics", "Badminton", "Basketball", "Cricket", "Football", "Hockey", "Lawn Tennis",
  "Squash", "Swimming", "Table Tennis", "Volleyball", "Water Polo", "Weightlifting",
];

const HOSTED = ["Badminton", "Squash", "Table Tennis", "Volleyball"];

const STANDINGS = [
  { iit: "IIT Kharagpur", points: "122" },
  { iit: "IIT Delhi", points: "92" },
  { iit: "IIT Madras", points: "87.1" },
];

export default function SportsMeetPage() {
  return (
    <main className="w-full bg-ink">
      <PageHero
        eyebrow="Meet"
        crumbs={[{ label: "Meets", href: "/meets/sports" }]}
        title={["Inter IIT", "Sports Meet"]}
        italic="No less than the Olympics."
        intro="Every December the IITs send their contingents — jerseys, banners and flags — to fight for one overall trophy."
        photos={[photos.sportsMeetOpening, photos.contingent, photos.nightCeremony, photos.flagHandover, photos.marchPast]}
        meta={[
          { label: "Sports", value: "13" },
          { label: "Athletes", value: "2,000+" },
          { label: "Co-hosted", value: "54th meet, 2019" },
        ]}
      />

      <Sheet>
        <Container className="py-24 md:py-32">
          <StatRow
            stats={[
              { value: "2,000+", label: "Students compete" },
              { value: "13", label: "Sports" },
              { value: "100+", label: "Per contingent" },
              { value: "01", label: "Overall trophy" },
            ]}
          />

          <div className="mt-10 md:mt-16">
            <Feature
              index={1}
              kicker="About the meet"
              name="The meet"
              tagline="Work, blood and sweat — behind the scenes."
              body={[
                "Every year, students from the IITs gather to compete in sports, culture and technology, showing the talent and the work, blood and sweat they have put in behind the scenes to win the trophy. Over 2000 students in jerseys, banners and flags of their IITs make the event feel no less than the grand Olympics, with contingents of more than 100 students each representing their IITs.",
                "Each sport has a tournament winner, and points are awarded by standing. These add up to an overall points tally, and topping it to win the trophy is every contingent's aim.",
              ]}
              photo={photos.contingent}
              aside={
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">Tournaments in 13 sports</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {SPORTS.map((s) => (
                      <li key={s} className={`rounded-full border px-3 py-1.5 text-[13px] ${HOSTED.includes(s) ? "border-ink bg-ink text-paper" : "border-ink/20"}`}>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-[12px] text-ink/55">Filled: the four sports IIT Bhubaneswar hosted in 2019.</p>
                </div>
              }
            />
          </div>
        </Container>
      </Sheet>

      {/* Hosting in 2019 */}
      <section className="grain relative bg-ink text-paper">
        <Container className="py-24 md:py-32">
          <SectionIntro
            tone="ink"
            index="02"
            label="Hosted at IIT Bhubaneswar"
            title={["The 54th meet,", <em key="h" className="text-paper/60">at home.</em>]}
            blurb="It was the first time in history that the meet was co-hosted by two IITs — and IIT Bhubaneswar became the first second-generation IIT to co-host it."
          />

          <div className="mt-14 md:mt-20">
            <StatRow
              tone="ink"
              stats={[
                { value: "54th", label: "Inter IIT Sports Meet" },
                { value: "~800", label: "Students on campus" },
                { value: "23", label: "IITs" },
                { value: "04", label: "Sports hosted here" },
              ]}
            />
          </div>

          <div className="mt-6">
            <Feature
              tone="ink"
              index={2}
              kicker="15–21 December 2019"
              name="Co-hosts with IIT Kharagpur"
              tagline="A first for a second-generation IIT."
              body={[
                "It was the first time in history that the meet was co-hosted by two IITs, and IIT Bhubaneswar became the first second-generation IIT to co-host it. IIT Kharagpur organised eight sports and IIT Bhubaneswar organised four.",
                "The 54th Inter IIT Sports Main Meet took place from 15 to 21 December 2019 at IIT Bhubaneswar and from 14 to 22 December 2019 at IIT Kharagpur. The four events co-hosted by IIT Bhubaneswar were Badminton, Squash, Table Tennis and Volleyball. The institute renovated its playfields extensively in anticipation of the meet.",
                "About 800 students from 23 IITs took part at IIT Bhubaneswar. Across all events, on and off the field, at both campuses, IIT Kharagpur finished first with 122 points, followed by IIT Delhi with 92 points. IIT Madras took third place with 87.1 points.",
              ]}
              photo={photos.sportsMeetOpening}
              reverse
              aside={
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55">Overall standings, 2019</p>
                  <ol className="mt-4 border-t border-paper/15">
                    {STANDINGS.map((s, i) => (
                      <Reveal key={s.iit} delay={i * 0.06} y={12}>
                        <li className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-3 border-b border-paper/15 py-3">
                          <span className="font-mono text-[11px] tracking-[0.22em] text-accent">{String(i + 1).padStart(2, "0")}</span>
                          <span className="text-[15px]">{s.iit}</span>
                          <span className="font-sans text-xl font-semibold tabular-nums">{s.points}</span>
                        </li>
                      </Reveal>
                    ))}
                  </ol>
                </div>
              }
            />
          </div>
        </Container>
      </section>

      <div className="border-t border-paper/10">
        <OtherMeets current="sports" index="03" />
      </div>
    </main>
  );
}
