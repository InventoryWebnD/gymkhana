"use client";

import PageHero, { Sheet } from "@/components/design/PageHero";
import { Container, Feature, SectionIntro, StatRow } from "@/components/design/blocks";
import { Reveal } from "@/components/design/primitives";
import { photos } from "@/components/design/photos";
import OtherMeets from "@/components/meets/OtherMeets";

type Result = { competition: string; position: string; team: string; members: string[] };

const participationRecords: { edition: string; results: Result[] }[] = [
  {
    edition: "TechMeet 8.0",
    results: [
      {
        competition: "Ashoka’s Tech for Change Challenge (High Prep)",
        position: "Gold Medal — 400/400",
        team: "Team Prajjwala",
        members: ["Rahul Kumar", "Challa Sai", "Vivek"],
      },
      {
        competition: "BOSCH's Route Optimization Algorithm (Mid Prep)",
        position: "Silver Medal — 150/250",
        team: "Team Optimize_prime",
        members: ["Hrishab Yadav", "Ambarish", "Aaroshi Verma", "Saurabha Bharadwaj", "Yash Raghuvanshi"],
      },
      {
        competition: "BARC Outreach Exercise for New Technology Ideas in TV Audience Measurement (Mid Prep)",
        position: "Bronze Medal — 100/400",
        team: "Team PinkX",
        members: ["Himanshu Goyal", "Sai Prasath S", "Abhishek Mishra", "Dinesh Mohanty"],
      },
      {
        competition: "Coding Hackathon (Low Prep)",
        position: "Silver Medal — 90/150",
        team: "Team Champions_Sam",
        members: ["Aditya Pal", "Madhav Tummala", "Aman Pratap Singh", "Saksham Arneja"],
      },
    ],
  },
  {
    edition: "TechMeet 9.0",
    results: [
      {
        competition: "Saptang Lab's Network Security Hackathon (Low Prep)",
        position: "Bronze Medal",
        team: "Team members",
        members: ["Akarsh Rana", "Ganesh Ram Kaushik", "Ankit Anand", "Raushan Kumar", "Shravanth Chebrolu"],
      },
    ],
  },
  {
    edition: "TechMeet 10.0",
    results: [
      {
        competition: "Gmetri's Growth Strategy for Metaverse (Low Prep)",
        position: "Bronze Medal",
        team: "Team members",
        members: ["Gandem Nitin", "Srinath Duvvuri", "Subhranshu P. Nayak", "Deekshitha Chandra P."],
      },
    ],
  },
];

const medalOf = (position: string) =>
  position.startsWith("Gold") ? "gold" : position.startsWith("Silver") ? "silver" : "bronze";

const MEDAL_STYLE = {
  gold: "bg-[#e9b949] text-ink",
  silver: "bg-[#c9ced6] text-ink",
  bronze: "bg-[#c08457] text-ink",
} as const;

const all = participationRecords.flatMap((r) => r.results);
const count = (m: "gold" | "silver" | "bronze") => all.filter((r) => medalOf(r.position) === m).length;

export default function TechMeetPage() {
  return (
    <main className="w-full bg-ink">
      <PageHero
        eyebrow="Meet"
        crumbs={[{ label: "Meets", href: "/meets/tech" }]}
        title={["Inter IIT", "Tech Meet"]}
        italic="Real problems, under real constraints."
        intro="An annual technology competition between the IITs, with the host changing every year. IIT Bhubaneswar's teams have brought home medals across three editions."
        photos={[photos.hackathon, photos.roboSoccer]}
        meta={[
          { label: "Since", value: "2012, IIT Kanpur" },
          { label: "Our medals", value: `${all.length}` },
          { label: "Best finish", value: "Gold, TechMeet 8.0" },
        ]}
      />

      <Sheet>
        <Container className="py-24 md:py-32">
          <Feature
            index={1}
            kicker="About the meet"
            name="About the Tech Meet"
            tagline="Innovation, collaboration, and technology across the IIT community."
            body={[
              "Inter IIT Tech Meet is an annual technological competition organized by the Indian Institutes of Technology. It is a technical event in which IITs participate, with the host institution changing from year to year.",
              "The meet began in 2012 at IIT Kanpur as a Pan-IIT student initiative and later grew into an annual meet approved by the IIT Council.",
              "The event combines collaborative activities that encourage networking and knowledge sharing with competitive challenges that promote innovative solutions to real-world problems under defined constraints.",
            ]}
            photo={photos.hackathon}
          />
        </Container>

        <Container className="pb-24 md:pb-32">
          <SectionIntro
            index="02"
            label="Participation & results"
            title={["Our medal", <em key="m">record.</em>]}
            blurb="IIT Bhubaneswar teams and their reported results across the Inter IIT Tech Meet editions below."
          />

          <div className="mt-14 md:mt-20">
            <StatRow
              stats={[
                { value: String(count("gold")).padStart(2, "0"), label: "Gold" },
                { value: String(count("silver")).padStart(2, "0"), label: "Silver" },
                { value: String(count("bronze")).padStart(2, "0"), label: "Bronze" },
                { value: String(participationRecords.length).padStart(2, "0"), label: "Editions" },
              ]}
            />
          </div>

          <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
            {participationRecords.toReversed().map((record) => (
              <section key={record.edition} className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <Reveal className="lg:sticky lg:top-28">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">Edition</p>
                    <h3 className="mt-2 font-sans text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{record.edition}</h3>
                    <p className="mt-2 text-[14px] text-ink/60">
                      {record.results.length} {record.results.length === 1 ? "result" : "results"}
                    </p>
                  </Reveal>
                </div>
                <ol className="grid gap-4 md:grid-cols-2 lg:col-span-9">
                  {record.results.map((r, i) => {
                    const medal = medalOf(r.position);
                    return (
                      <Reveal key={r.competition} delay={i * 0.06}>
                        <li className="flex h-full flex-col gap-5 rounded-[22px] bg-paper-2 p-6 md:p-7">
                          <div className="flex items-start justify-between gap-4">
                            <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold ${MEDAL_STYLE[medal]}`}>
                              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ink/40" />
                              {r.position}
                            </span>
                          </div>
                          <h4 className="font-serif text-2xl leading-tight md:text-[1.7rem]">{r.competition}</h4>
                          <div className="mt-auto border-t border-ink/15 pt-4">
                            <p className="text-[13px] font-semibold">{r.team}</p>
                            <p className="mt-1 text-[13px] leading-relaxed text-ink/65">{r.members.join(" · ")}</p>
                          </div>
                        </li>
                      </Reveal>
                    );
                  })}
                </ol>
              </section>
            ))}
          </div>
        </Container>
      </Sheet>

      <OtherMeets current="tech" index="03" />
    </main>
  );
}
