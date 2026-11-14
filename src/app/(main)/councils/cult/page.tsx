"use client";

import PageHero, { Sheet } from "@/components/design/PageHero";
import { Container, SectionIntro } from "@/components/design/blocks";
import { PillLink, Reveal } from "@/components/design/primitives";
import { photos, societyPhotos } from "@/components/design/photos";
import SocietyIndex, { type SocietyEntry } from "@/components/councils/SocietyIndex";
import OtherCouncils from "@/components/councils/OtherCouncils";

const societies: SocietyEntry[] = [
  {
    name: "Kalakriti",
    full: "The Fine Arts Society",
    description:
      "The world we live in is a colourful and majestic place, rich in culture and tradition, waiting for mankind to uncover its full beauty. The Fine Arts Society intends to inculcate a sense of appreciation for this beauty in the minds of the students. Members of the society organize workshops to nurture the artist in the students all through the year and also take up the major responsibility of decorating the campus during all special occasions including Diwali.",
    logo: "/icons/kalakriti.png",
    photos: societyPhotos["kalakriti"],
    links: [{ label: "Explore Kalakriti", href: "/councils/cult/kalakriti" }],
  },
  {
    name: "D-Groovers",
    full: "The Dance Society",
    description:
      "Widely regarded as the pinnacle of all performing arts, dance requires the unwavering devotion of the mind, body and soul of an artist. The Dance Society provides a platform for students passionate about dance to channel their emotions into their craft. Members of the society conduct events and workshops for dance enthusiasts and also take an active part in several inter-collegiate events throughout the year. The dance production is one of the most entertaining events held in the institute, and it brilliantly showcases the rich culture and heritage of India and the institute itself.",
    logo: "/icons/dgang.png",
    photos: societyPhotos["d-groovers"],
    links: [{ label: "Explore D-Groovers", href: "/councils/cult/d-groovers" }],
  },
  {
    name: "The Fourth Wall",
    full: "The Dramatics Society",
    description:
      "A family knit together by the love for theatre, the Dramatics Society has tirelessly worked for the last nine years to become one of the best of its kind. The objective of the Dramatics Society is to foster social and intellectual activity among the students and to create an interest in Drama and Theatre. Arguably the most active society of the institute, its members perform at almost every event held in the institute with the aim of creating awareness about various issues plaguing our society. The Fourth Wall has also represented the institute at various inter-collegiate cultural events organised throughout the country.",
    logo: "/icons/dramatics.png",
    photos: societyPhotos["fourth-wall"],
    links: [{ label: "Explore The Fourth Wall", href: "/councils/cult/fourth-wall" }],
  },
  {
    name: "Aaroh",
    full: "The Music Society",
    description:
      "Aaroh, the Music Society of IIT Bhubaneswar aims to bring out the musical talent among the students. What sets us IITians apart from the rest is our all round development, and Aaroh contributes to this by shaping students into talented performers with their own unique identities. Not only does the society conduct various events and workshops on musical instruments for amateurs, it also takes on the responsibility of organizing a production each semester to entertain and enthral the students.",
    logo: "/icons/aaroh.png",
    photos: societyPhotos["aaroh"],
    links: [{ label: "Explore Aaroh", href: "/councils/cult/aaroh" }],
  },
  {
    name: "Literary",
    full: "Panacea, Abhivyakti & the Quiz Society",
    description:
      "The ability to express your thoughts and ideas effectively is of paramount importance to succeed in your career as well as life in general. Panacea and Abhivyakti work for the development of the communication and language skills of the students in English and Hindi, respectively, while the Quiz Society is an open society aimed at encouraging students to expand their knowledge beyond the conventional and establishing a relationship between theory and application of the learnt concepts in a fun manner.",
    logo: "/icons/combined.png",
    photos: societyPhotos["literary"],
    links: [
      { label: "Panacea", href: "/councils/cult/panacea" },
      { label: "Abhivyakti", href: "/councils/cult/abhivyakti" },
      { label: "Quiz Society", href: "/councils/cult/quiz-society" },
    ],
  },
  {
    name: "Cinewave",
    full: "The Cinematics Society",
    description:
      "Good cinema is what results from an artistic combination of all the performing arts, brought together by the right technical expertise. Cinewave, the movie-making society of IIT Bhubaneswar, provides students with an eye for filmmaking an opportunity to enhance their cinematic talent and present their stories to the world through short-films, documentaries and advertisements. The most acclaimed society of the institute, Cinewave has participated in various national level competitions and inter-collegiate events, winning laurels for the institute and setting a benchmark in terms of filmmaking.",
    logo: "/icons/cinewave.png",
    photos: societyPhotos["cinewave"],
    links: [{ label: "Explore Cinewave", href: "/councils/cult/cinewave" }],
  },
  {
    name: "Souls for Solace",
    full: "The Social Welfare Society",
    description:
      "'Souls for Solace' is a platform for those who are not satisfied with merely making a living and want to contribute towards creating a better society to live in. In collaboration with various NGOs, the society believes strongly in the principles of sharing what we have with the less fortunate and has undertaken initiatives like blood donation camps, educating the poor, books and clothes donation drives, and much more. It also provides the platform to discuss and implement innovative ideas that could help create a better future.",
    logo: "/icons/sfs.png",
    photos: societyPhotos["souls-for-solace"],
    links: [{ label: "Explore Souls for Solace", href: "/councils/cult/souls-for-solace" }],
  },
  {
    name: "CLIX",
    full: "The Photography Society",
    description:
      "The Photography Society is the most elite society of IIT Bhubaneswar that takes beginners and amateur photographers under its wings and teaches them different techniques of photography by organizing workshops and competitions on photography and post-processing. CLIX captures major happenings of the institute and provides the outside world glimpses of its work through its Facebook page.",
    logo: "/icons/clix.png",
    photos: societyPhotos["clix"],
    links: [{ label: "Explore CLIX", href: "/councils/cult/clix" }],
  },
];

export default function SocioCulturalCouncil() {
  return (
    <main className="w-full bg-ink">
      <PageHero
        eyebrow="Council"
        crumbs={[{ label: "Councils", href: "/councils/cult" }]}
        title={["Socio-", "Cultural"]}
        italic="The loud, colourful half of campus."
        intro="Music, dance, theatre, film, fine arts, words, quizzing, photography and social service — the societies that fill the stage and the calendar."
        photos={[photos.stageShow, photos.folkDance, photos.guitars, photos.pravaahDance]}
        meta={[
          { label: "Societies", value: "10" },
          { label: "General Secretary", value: "Pratham Mighlani" },
          { label: "Flagship", value: "Inter IIT Cult Meet" },
        ]}
      />

      <Sheet>
        <Container className="py-24 md:py-32">
          <SectionIntro
            index="01"
            label="Societies"
            title={["Ten societies,", <em key="s">one stage.</em>]}
            blurb="From Diwali décor to semester productions, these are the people behind every performance on campus."
          />
          <div className="mt-16 md:mt-24">
            <SocietyIndex societies={societies} council="Socio-Cultural" />
          </div>
        </Container>

        <Container className="pb-24 md:pb-32">
          <Reveal className="flex flex-col gap-6 rounded-[28px] bg-accent p-8 text-ink md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">(02) Up next</p>
              <p className="mt-4 max-w-2xl font-serif text-3xl leading-tight md:text-5xl">
                The <em>Inter IIT Cult Meet</em> page is coming soon.
              </p>
            </div>
            <PillLink href="/fests">See our fests</PillLink>
          </Reveal>
        </Container>
      </Sheet>

      <OtherCouncils current="cult" />
    </main>
  );
}
