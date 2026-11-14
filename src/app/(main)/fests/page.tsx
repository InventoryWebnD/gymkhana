"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import PageHero, { Sheet } from "@/components/design/PageHero";
import { Container, Feature, SectionIntro } from "@/components/design/blocks";
import { Reveal } from "@/components/design/primitives";
import { photos, type Photo } from "@/components/design/photos";

type Fest = {
  name: string;
  category: string;
  tagline: string;
  description: string;
  photo: Photo;
  website?: string | null;
  instagram?: string | null;
  facebook?: string | null;
};

const currentFests: Fest[] = [
  {
    name: "Pravaah",
    category: "Sports, technical and cultural fest",
    tagline: "The unstoppable flow of talent.",
    description:
      'True excellence flows when the vigor of sports, the innovation of technology, and the vibrancy of culture converge. Creating a unified platform for diverse talents to thrive is exactly what Pravaah—The Annual Sports, Technical, and Cultural Fest—strives to do. We at Pravaah believe in the "Unstoppable Flow" of potential, and that talent knows no boundaries when provided the right arena; we are hence motivated to create a holistic experience that challenges the body, stimulates the mind, and touches the soul. We conduct high-octane competitions ranging from Inter-collegiate Sports Tournaments and Technical Hackathons to Cultural Showcases, alongside specialized workshops and exhibitions. Attracting participation from colleges across India, Pravaah has been graced by illustrious athletes, industry pioneers, and celebrated artists, with our Star-Nites turning the campus into a melting pot of energy. We also recognize the social commitment we owe to society and are proactive philanthropically, actively conducting awareness campaigns and sustainability drives to ensure the spirit of our fest leaves a lasting impact on the community.',
    photo: photos.starNight,
    website: "https://www.pravaah.org/",
    instagram: "https://www.instagram.com/pravaah_iitbbs/",
    facebook: "https://www.facebook.com/pravaah.iitbbs/",
  },
  {
    name: "Ashvamedha",
    category: "Annual sports fest",
    tagline: "Where champions find their arena.",
    description:
      "Sports unite people beyond differences of age, culture, and language. Ashvamedha, the Sports Fest of IIT Bhubaneswar, promotes a competitive spirit, determination, teamwork, and camaraderie. Its annual inter-college sports tournament brings participants together alongside quizzes, inter-branch competitions, and online events. Driven by a passionate student team, Ashvamedha continues to pursue excellence in sports across Bhubaneswar and Odisha.",
    photo: photos.ashvamedhaWinners,
    website: null,
    instagram: "https://www.instagram.com/ashvamedha_iitbbs/",
    facebook: "https://www.facebook.com/AshvamedhaIITBBS/",
  },
];

const pastFests: Fest[] = [
  {
    name: "Alma Fiesta",
    category: "Socio-cultural fest",
    tagline: "Redefining festivity.",
    description:
      "Alma Fiesta is the annual socio-cultural fest of IIT Bhubaneswar. Since its debut in 2010, it has grown into a celebration of culture, music, dance, dramatics, fine arts, and social awareness. Its competitions, workshops, and Star-Nites bring students together for an immersive celebration of India's cultural diversity.",
    photo: photos.almaFiesta,
    instagram: "https://www.instagram.com/almafiesta.iitbbs/",
    facebook: "https://www.facebook.com/almafiesta/",
  },
  {
    name: "Wissenaire",
    category: "Techno-management fest",
    tagline: "Knowledge runs free.",
    description:
      "Wissenaire celebrates technology, innovation, and management at IIT Bhubaneswar. Its activities span programming, robotics, circuitry, business planning, paper presentations, quizzes, and technical exhibitions. The fest also promotes learning through workshops, expert interactions, and community initiatives.",
    photo: photos.wissenaire,
    website: "https://www.wissenaire.org/",
    instagram: "https://www.instagram.com/wissenaire.iitbbs/",
    facebook: "https://www.facebook.com/wissenaireiitbbs/",
  },
  {
    name: "E-Summit",
    category: "Entrepreneurship summit",
    tagline: "Where investors meet innovators.",
    description:
      "Initiated by the Entrepreneurship Cell of IIT Bhubaneswar, E-Summit brings together entrepreneurs, investors, industry professionals, academics, and students. Its activities include entrepreneurial talks, expert panels, workshops, startup opportunities, and discussions designed to encourage innovation and entrepreneurship.",
    photo: photos.eSummit,
    website: "https://e-summit-iitbbs.com/",
    instagram: "https://www.instagram.com/centrepreneurship/",
    facebook: "https://www.facebook.com/centrepreneurship/",
  },
];

function Socials({ fest, tone = "paper" }: { fest: Fest; tone?: "paper" | "ink" }) {
  const cls =
    tone === "paper"
      ? "border-ink/20 hover:border-ink hover:bg-ink hover:text-paper"
      : "border-paper/25 hover:border-accent hover:bg-accent hover:text-ink";
  return (
    <div className="flex flex-wrap items-center gap-2">
      {fest.instagram && (
        <a href={fest.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${fest.name} on Instagram`} className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${cls}`}>
          <FaInstagram size={15} />
        </a>
      )}
      {fest.facebook && (
        <a href={fest.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${fest.name} on Facebook`} className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${cls}`}>
          <FaFacebookF size={14} />
        </a>
      )}
    </div>
  );
}

export default function FestPage() {
  return (
    <main className="w-full bg-ink">
      <PageHero
        eyebrow="Fests"
        title={["Fests"]}
        italic="Where the whole campus shows up."
        intro="Star nights, tournaments, hackathons and summits — the student-run festivals that open IIT Bhubaneswar to colleges across India."
        photos={[photos.starNight, photos.ashvamedhaWinners, photos.pravaahBand, photos.futsalDay]}
        meta={[
          { label: "Running now", value: "Pravaah · Ashvamedha" },
          { label: "From the archive", value: "Alma Fiesta · Wissenaire · E-Summit" },
        ]}
      />

      <Sheet>
        <Container className="py-24 md:py-32">
          <SectionIntro
            index="01"
            label="Current fests"
            title={["The celebrations", <em key="c">continue.</em>]}
            blurb="Two flagship fests run by students every year — one for everything, one for sport."
          />
          <div className="mt-14 md:mt-20">
            {currentFests.map((fest, i) => (
              <Feature
                key={fest.name}
                index={i + 1}
                kicker={fest.category}
                name={fest.name}
                tagline={fest.tagline}
                body={fest.description}
                photo={fest.photo}
                reverse={i % 2 === 1}
                links={fest.website ? [{ label: "Official website", href: fest.website, external: true }] : []}
                aside={<Socials fest={fest} />}
              />
            ))}
          </div>
        </Container>
      </Sheet>

      <section className="grain relative bg-ink text-paper">
        <Container className="py-24 md:py-32">
          <SectionIntro
            tone="ink"
            index="02"
            label="Past fests"
            title={["Celebrations", <em key="s" className="text-paper/60">that shaped us.</em>]}
            blurb="The festivals, ideas and experiences that came before — and that today's fests grew out of."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 md:mt-20 md:gap-6 lg:grid-cols-3">
            {pastFests.map((fest, i) => (
              <Reveal key={fest.name} delay={i * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-ink-2 ring-1 ring-paper/10">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={fest.photo.src}
                      alt={fest.photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      placeholder="blur"
                      className="object-cover grayscale transition-all duration-[1.2s] ease-out-expo group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper backdrop-blur">
                      {fest.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="font-sans text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{fest.name}</h3>
                    <p className="mt-2 font-serif text-xl italic text-paper/70">{fest.tagline}</p>
                    <p className="mb-6 mt-4 text-[14px] leading-[1.75] text-paper/65">{fest.description}</p>
                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-paper/10 pt-5">
                      <Socials fest={fest} tone="ink" />
                      {fest.website && (
                        <a href={fest.website} target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-paper/80 underline-offset-4 hover:text-accent hover:underline">
                          Website ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
