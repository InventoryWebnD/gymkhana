"use client";

import PageHero, { Sheet } from "@/components/design/PageHero";
import { Container, SectionIntro, StatRow } from "@/components/design/blocks";
import { PillLink, Reveal } from "@/components/design/primitives";
import { photos } from "@/components/design/photos";
import SportsIndex, { type Sport } from "@/components/councils/SportsIndex";
import OtherCouncils from "@/components/councils/OtherCouncils";

const sports: Sport[] = [
  {
    name: "Football",
    tagline: "Passion, teamwork, and the beautiful game.",
    description:
      "Our campus has a well-equipped football ground. This year, our inventory is also being expanded with slalom poles, hurdles of different heights, training ladders, and other equipment to help players improve their individual skills. With proper guidance being essential to development, we are fortunate to have a coach like Mr. Biswajit Pegu, who helps beginners grow into skilled players. After all, every expert was once a beginner.",
    photo: photos.gcFootball,
  },
  {
    name: "Cricket",
    tagline: "Where passion meets the spirit of the game.",
    description:
      "In India, cricket is a religion that unites the nation. At IIT Bhubaneswar, we provide facilities that help students develop their cricketing skills and pursue their dreams. At our permanent campus in Arugul, the cricket ground beside the boys' hostel includes a practice net. The Gymkhana provides the necessary equipment and gear for practice sessions and matches, along with guidance from an experienced coach.",
    photo: photos.cricketBat,
  },
  {
    name: "Badminton",
    tagline: "Agility, precision, and fitness in every rally.",
    description:
      "Our institute offers three well-equipped indoor badminton courts in the SAC, along with the necessary equipment for the sport. Badminton is not only enjoyable but also helps us stay physically and mentally fit. It develops coordination, quick reflexes, and responsiveness—skills that are valuable beyond the court. Physical fitness is as important as academic excellence, so pick up your racket and get ready to play.",
    photo: photos.badminton,
  },
  {
    name: "Athletics",
    tagline: "Push your limits. Discover your potential.",
    description:
      "Athletics brings together competitive running, jumping, throwing, and walking events, motivating students to develop strength, endurance, and discipline. At IIT Bhubaneswar, athletes have access to equipment such as javelins, starting blocks, balls, and hammers, along with guidance for events like the long jump. The sport offers opportunities to compete individually across a wide range of events, from discus throw to relay races, in intra-college tournaments and the Inter-IIT Sports Meet.",
    photo: photos.trackFlag,
  },
  {
    name: "Volleyball",
    tagline: "United by teamwork. Driven by the will to win.",
    description:
      "Volleyball is one of the most enthusiastically played sports at IIT Bhubaneswar. Our community brings together talented and passionate players and supports them in reaching their potential through training and competition. Society inductions take place at the beginning of the academic year, followed by regular practice and participation in competitions. Our major goals include performing well at the Inter-IIT Sports Meet while building teamwork, composure, perseverance, and a supportive community that lasts beyond campus.",
    photo: photos.volleyball,
  },
  {
    name: "Basketball",
    tagline: "Play with intensity. Grow through teamwork.",
    description:
      "IIT Bhubaneswar provides well-equipped basketball courts, with additional courts expanding opportunities for practice and play. Equipment such as training ladders, hurdles, slalom poles, and basketballs helps players improve their individual skills and fitness. With guidance from coaches and a positive sporting attitude, students can make the most of these facilities, develop their abilities, and enjoy the spirit of the game.",
    photo: photos.gcNightHoops,
  },
  {
    name: "Table Tennis",
    tagline: "Fast reflexes. Sharp focus. Endless possibilities.",
    description:
      "Table tennis is growing increasingly popular on our campus. Students have access to quality equipment, dedicated practice opportunities, and guidance from committed coaches and fellow players. With the development of the SAC and its table tennis facilities, students have even more opportunities to improve their game. Beyond physical fitness and quick reflexes, table tennis builds concentration, discipline, and confidence.",
    photo: photos.ttMatch,
  },
  {
    name: "Tennis",
    tagline: "Every serve begins a new opportunity.",
    description:
      "Tennis is an emerging sport at our campus, with courts being developed to encourage greater participation. As a technically demanding game, tennis requires concentration, agility, and strategic thinking. Students interested in learning the sport can become part of a growing community of enthusiasts who share a passion for practice, improvement, and competition.",
    photo: photos.tennisRally,
  },
  {
    name: "Board Games",
    tagline: "Think strategically. Play intelligently.",
    description:
      "Board games bring together strategy, planning, concentration, and friendly competition. From games that demand careful calculation to those that combine skill with chance, each offers a unique challenge. At IIT Bhubaneswar, students enjoy a variety of board and tabletop games, including chess and carrom, building strategic thinking and creating opportunities for fun and interaction beyond academics.",
    photo: photos.carrom,
  },
  {
    name: "Gym & Weightlifting",
    tagline: "Build strength. Transform yourself.",
    description:
      "“The worst thing I can be is the same as everyone else and I hate it.” — Arnold Schwarzenegger. The gym is a place to challenge yourself, build discipline, and become stronger. IIT Bhubaneswar provides residents with a functional gym combining modern machines and traditional weight training. Beyond building muscle, regular exercise supports overall well-being and helps students channel their energy into a healthier lifestyle.",
    photo: photos.gymWeights,
  },
  {
    name: "Swimming",
    tagline: "Find your rhythm. Make every stroke count.",
    description:
      "Swimming combines physical fitness, technical precision, endurance, and mental discipline. Whether the goal is competitive speed, improved cardiovascular health, or recreational enjoyment, swimming offers something for everyone. With the inauguration of the new swimming pool at IIT Bhubaneswar, enthusiasts have opportunities to practise different styles, including freestyle, breaststroke, and butterfly, while developing their skills and confidence in the water.",
    photo: photos.pool,
  },
];

export default function SportCouncil() {
  return (
    <main className="w-full bg-ink">
      <PageHero
        eyebrow="Council"
        crumbs={[{ label: "Councils", href: "/councils/sports" }]}
        title={["Sports"]}
        italic="Floodlit, coached and fiercely competitive."
        intro="Eleven sports with coaches, courts and kit provided by the Gymkhana — from first-years picking up a racket to the contingent that represents IIT Bhubaneswar at the Inter IIT Sports Meet."
        photos={[photos.gcNightHoops, photos.marchPast, photos.squadCheer, photos.badminton, photos.trophyStage]}
        meta={[
          { label: "Sports", value: String(sports.length) },
          { label: "General Secretary", value: "Bhabya Bansal" },
          { label: "Flagship", value: "Inter IIT Sports Meet" },
        ]}
      />

      <Sheet>
        <Container className="py-24 md:py-32">
          <StatRow
            stats={[
              { value: "11", label: "Sports" },
              { value: "07", label: "Coaches & instructors" },
              { value: "03", label: "Indoor badminton courts" },
              { value: "01", label: "New swimming pool" },
            ]}
          />

          <SectionIntro
            className="mt-24 md:mt-32"
            index="01"
            label="Sports"
            title={["Pick your", <em key="g">game.</em>]}
            blurb="Tap a sport to see the facilities, coaching and teams behind it. Inductions happen at the start of each academic year."
          />
          <div className="mt-14 md:mt-20">
            <SportsIndex sports={sports} />
          </div>
        </Container>

        <Container className="pb-24 md:pb-32">
          <Reveal className="flex flex-col gap-6 rounded-[28px] bg-ink p-8 text-paper md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55">
                <span className="text-accent">(02)</span> Meet the coaches
              </p>
              <p className="mt-4 max-w-2xl font-serif text-3xl leading-tight md:text-5xl">
                Coaches, instructors and secretaries — <em>all in the Office.</em>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <PillLink href="/office" tone="paper">
                Meet the team
              </PillLink>
              <PillLink href="/meets/sports" tone="paper" variant="ghost">
                Inter IIT Sports Meet
              </PillLink>
            </div>
          </Reveal>
        </Container>
      </Sheet>

      <OtherCouncils current="sports" />
    </main>
  );
}
