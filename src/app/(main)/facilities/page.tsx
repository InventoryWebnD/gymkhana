"use client";

import PageHero, { Sheet } from "@/components/design/PageHero";
import { Container, Feature, SectionIntro } from "@/components/design/blocks";
import { CurtainImage } from "@/components/design/primitives";
import { photos } from "@/components/design/photos";

const SAC_AMENITIES = [
  "Badminton courts",
  "Squash courts",
  "Basketball courts",
  "Volleyball courts",
  "Swimming pool",
  "Gym",
  "Dance room",
  "Society spaces",
];

const SAC_GALLERY = [photos.pool, photos.squashCourt, photos.gymWeights, photos.badminton];

export default function Facilities() {
  return (
    <main className="w-full bg-ink">
      <PageHero
        eyebrow="Facilities"
        title={["Facilities"]}
        italic="Room to play, practise and perform."
        intro="The Student Activity Center and a green-field campus in Argul — the spaces where most of the Gymkhana's work actually happens."
        photos={[photos.sac, photos.pool, photos.campusGreen, photos.gate]}
        meta={[
          { label: "Hub", value: "Student Activity Center" },
          { label: "Campus", value: "Argul, Khordha" },
        ]}
      />

      <Sheet>
        <Container className="py-24 md:py-32">
          <SectionIntro
            index="01"
            label="Spaces"
            title={["Built for", <em key="b">everything else.</em>]}
            blurb="Courts, a pool, a gym and rooms for every society — plus a campus planted to be lived in."
          />

          <div className="mt-14 md:mt-20">
            <Feature
              index={1}
              kicker="Sports & socio-cultural hub"
              name="Student Activity Center"
              tagline="The heart of life outside class."
              body="IITs are well known for their fabulous amalgamation of extracurriculars with academics. At the heart of these activities, you can find the Students Activity Center. The SAC boasts an array of badminton, squash, basketball, and volleyball courts, complete with a swimming pool. It houses a gym, a dance room and plenty of amenities to assist the functioning of socio-cultural societies. The Student Activity Center ought to be a haven for sports and sociocultural activities at IIT Bhubaneswar for years to come."
              photo={photos.sac}
              aside={
                <ul className="flex flex-wrap gap-2">
                  {SAC_AMENITIES.map((a) => (
                    <li key={a} className="rounded-full border border-ink/20 px-3 py-1.5 text-[13px]">
                      {a}
                    </li>
                  ))}
                </ul>
              }
            />
          </div>

          {/* Inside the SAC */}
          <div className="grid grid-cols-2 gap-3 pb-6 md:grid-cols-4 md:gap-5">
            {SAC_GALLERY.map((p, i) => (
              <CurtainImage
                key={p.caption}
                photo={p}
                sizes="(max-width: 768px) 50vw, 25vw"
                frameClassName="aspect-[3/4] rounded-xl"
                delay={i * 0.08}
                direction={i % 2 ? "left" : "up"}
              />
            ))}
          </div>

          <Feature
            index={2}
            kicker="Horticulture since 2015"
            name="Green Field Campus"
            tagline="A campus planted to be lived in."
            body={[
              "The horticulture activity started in the year 2015 as a first step towards ensuring a more vibrant and spirited environment filled with frondescence. The flora includes a variety of exotic and indigenous species (both deciduous and coniferous) like palm, pine, long-life tall trees and some medicinal plants. The board members inaugurated the first phase of the Plantation Project by planting the saplings of Gulmohar and Mahogany around the Sports Ground on 10th July 2015.",
              "The main focus of the Horticulture Department, at least for the next five years lies in creating a natural landscape in newly constructed areas. Lush green gardens adorned with ornamental and medicinal plants help maintain a clean and healthy environment for the students and residents of the campus. Nurturing nature is not just a duty but it's a responsibility and IIT Bhubaneswar believes that this is the best way to promote creativity amongst students and the verdure also creates a positive effect on mental and physical well-being.",
              "The plants and trees shall be chosen in such a way that it creates a habitat for local birds, bees and butterflies. To achieve sustainability, the horticulture center focuses on building rooftop rainwater harvesting, surface rainwater harvesting infrastructure and setting up a waste management system and wastewater recycling plant. Also part of the 2015-2020 plan, an autonomous water irrigation system shall be set up to save expenditure.",
            ]}
            photo={photos.campusGreen}
            reverse
          />
        </Container>
      </Sheet>
    </main>
  );
}
