"use client";

import PageHero, { Sheet } from "@/components/design/PageHero";
import { Container, SectionIntro } from "@/components/design/blocks";
import { PillLink, Reveal } from "@/components/design/primitives";
import { photos, societyPhotos } from "@/components/design/photos";
import SocietyIndex, { type SocietyEntry } from "@/components/councils/SocietyIndex";
import OtherCouncils from "@/components/councils/OtherCouncils";

const societies: SocietyEntry[] = [
  {
    name: "RISC",
    full: "Robotics and Intelligent Systems Club",
    description:
      "RISC provides an interactive forum for students to pursue their passion and zeal for robotics. Students not only learn but also apply their technical skills to build bots of different kinds. Several workshops and events are conducted by RISC regularly. Through collaboration with organizations like IEEE and participation in various competitions held all across the country, students get fair exposure to the world of technology. RISC is also responsible for conducting all the robotic events (Yanthrix) in Wissenaire, the techno-management fest of IIT Bhubaneswar.",
    logo: "/icons/risc.png",
    photos: societyPhotos["risc"],
    links: [{ label: "Explore RISC", href: "/councils/tech/risc" }],
  },
  {
    name: "WebnD",
    full: "Web and Design Society",
    description:
      "The Web and Design Society of IIT Bhubaneswar has the credit of managing and designing all the websites of the institute. We aim to inspire people to select web development as their second hobby and transform them into creative professionals by equipping them with the skill and art of creating websites and club designs. Members of the society actively conduct competitions and workshops for beginners and advanced web developers.",
    logo: "/icons/webd.png",
    photos: societyPhotos["webnd"],
    links: [{ label: "Explore WebnD", href: "/councils/tech/webnd" }],
  },
  {
    name: "Neuromancers",
    full: "The Programming Society",
    description:
      "The Programming Society aims at educating students about computers, programming languages and software tools. Comprising of coding enthusiasts from all branches of engineering, this society, in association with organizations like CodeChef and companies like Microsoft and IBM, organizes competitions, workshops and guest lectures relating to Android app development, cloud computing, hacking, and more. These activities equip students with programming skills and help them thrive in the modern world of technology.",
    logo: "/icons/neuromancers.png",
    photos: societyPhotos["neuromancers"],
    links: [{ label: "Explore Neuromancers", href: "/councils/tech/neuromancers" }],
  },
  {
    name: "Nakshatra",
    full: "The Astronomy Club",
    description:
      "The recently established society aims at enhancing and sharing humanity's scientific understanding of the universe. Armed with its newly acquired state-of-the-art telescopes, the members of this club study celestial objects and phenomena of the 14-billion-year-old universe independently. The club also publishes a newsletter regularly.",
    logo: "/icons/nakshatra_1.webp",
    photos: societyPhotos["nakshatra"],
    links: [{ label: "Explore Nakshatra", href: "/councils/tech/nakshatra" }],
  },
  {
    name: "FEBS",
    full: "Society of Finance, Economics and Business",
    description:
      "FEBS is IIT Bhubaneswar's society of finance, economics, and business. The community is an agglomerate of enthusiastic people brought together by their love for finance, economics, and business and their aspiration to spread the importance of financial literacy in IIT Bhubaneswar. The prime motto of our society is to encourage the development of financial literacy, economic thought, and business ideas.",
    logo: "/icons/febs.png",
    photos: societyPhotos["febs"],
    links: [{ label: "Explore FEBS", href: "/councils/tech/febs" }],
  },
];

export default function TechCouncil() {
  return (
    <main className="w-full bg-ink">
      <PageHero
        eyebrow="Council"
        crumbs={[{ label: "Councils", href: "/councils/tech" }]}
        title={["Science &", "Technology"]}
        italic="Built after hours."
        intro="Five societies for the people who take things apart to see how they work — robots, code, telescopes, markets and the web."
        photos={[photos.roboSoccer, photos.hackathon]}
        meta={[
          { label: "Societies", value: String(societies.length).padStart(2, "0") },
          { label: "General Secretary", value: "Ayush Ranjan" },
          { label: "Flagship", value: "Inter IIT Tech Meet" },
        ]}
      />

      <Sheet>
        <Container className="py-24 md:py-32">
          <SectionIntro
            index="01"
            label="Societies"
            title={["Five societies,", <em key="w">one workbench.</em>]}
            blurb="Workshops, hackathons and competitions all year round. Pick a society to see who runs it, what they build and when they meet."
          />
          <div className="mt-16 md:mt-24">
            <SocietyIndex societies={societies} council="Science & Technology" />
          </div>
        </Container>

        <Container className="pb-24 md:pb-32">
          <Reveal className="flex flex-col gap-6 rounded-[28px] bg-ink p-8 text-paper md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55">
                <span className="text-accent">(02)</span> On the national stage
              </p>
              <p className="mt-4 max-w-2xl font-serif text-3xl leading-tight md:text-5xl">
                Every build here is practice for the <em>Inter IIT Tech Meet.</em>
              </p>
            </div>
            <PillLink href="/meets/tech" tone="paper">
              Our Tech Meet record
            </PillLink>
          </Reveal>
        </Container>
      </Sheet>

      <OtherCouncils current="tech" />
    </main>
  );
}
