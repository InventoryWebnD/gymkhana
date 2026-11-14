"use client";

import PageHero, { Sheet } from "@/components/design/PageHero";
import { Container } from "@/components/design/blocks";
import { MaskLines, PillLink, Reveal, SectionLabel } from "@/components/design/primitives";
import { photos } from "@/components/design/photos";
import OtherMeets from "@/components/meets/OtherMeets";

export default function CultMeet() {
  return (
    <main className="w-full bg-ink">
      <PageHero
        eyebrow="Meet"
        crumbs={[{ label: "Meets", href: "/meets/cult" }]}
        title={["Inter IIT", "Cult Meet"]}
        italic="Coming soon."
        intro="The page for IIT Bhubaneswar's Inter IIT Cultural Meet contingent is being put together."
        photos={[photos.stageShow, photos.pravaahDance, photos.guitars]}
        meta={[{ label: "Status", value: "In the works" }]}
      />

      <Sheet>
        <Container className="grid gap-10 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <SectionLabel index="01" className="text-ink/60">
              Meanwhile
            </SectionLabel>
            <MaskLines
              as="h2"
              className="mt-7 font-serif text-[clamp(2.6rem,6vw,6rem)] leading-[0.95]"
              lines={["The performers are", <em key="r">already rehearsing.</em>]}
            />
          </div>
          <Reveal className="flex flex-col gap-6 md:col-span-4 md:col-start-9 md:self-end">
            <p className="text-[15px] leading-relaxed text-ink/70">
              Results, the contingent and highlights will appear here. Until then, meet the ten
              societies of the Socio-Cultural Council who make up the team.
            </p>
            <div className="flex flex-wrap gap-3">
              <PillLink href="/councils/cult">Socio-Cultural Council</PillLink>
              <PillLink href="/fests" variant="ghost">
                Our fests
              </PillLink>
            </div>
          </Reveal>
        </Container>
      </Sheet>

      <OtherMeets current="cult" index="02" />
    </main>
  );
}
