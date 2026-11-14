"use client";

import PageHero, { Sheet } from "@/components/design/PageHero";
import { Container } from "@/components/design/blocks";
import { MaskLines, PillLink, Reveal, SectionLabel } from "@/components/design/primitives";

const PDF = "/Constitution.pdf";

const PRINCIPLES = [
  {
    title: "The Senate",
    body: "The elected Students' Senate lays down the general guidelines for the executives and their councils.",
  },
  {
    title: "Elections",
    body: "General Elections are held every spring for the offices of the Gymkhana, presided over by an Election Commissioner.",
  },
  {
    title: "Accountability",
    body: "The elections and the healthy functioning of the Gymkhana are carried out in accordance with this Constitution.",
  },
];

export default function Constitution() {
  return (
    <main className="w-full bg-ink">
      <PageHero
        eyebrow="Constitution"
        title={["The", "Constitution"]}
        italic="The rules we elect ourselves by."
        intro="The founding document of the Students' Gymkhana — how its offices are structured, how they are elected and how they answer to students."
        meta={[
          { label: "Format", value: "PDF" },
          {
            label: "Download",
            value: (
              <a href={PDF} download className="underline-offset-4 hover:underline">
                Constitution.pdf ↓
              </a>
            ),
          },
        ]}
      />

      <Sheet>
        <Container className="py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionLabel index="01" className="text-ink/60">
                Why it matters
              </SectionLabel>
              <MaskLines
                as="h2"
                className="mt-7 font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95]"
                lines={["Self-governing,", <em key="b">by design.</em>]}
              />
              <Reveal className="mt-8 flex flex-wrap gap-3">
                <PillLink href={PDF} external>
                  Open the PDF
                </PillLink>
                <a
                  href={PDF}
                  download
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-ink/25 px-5 text-[13px] font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                >
                  Download <span aria-hidden="true">↓</span>
                </a>
              </Reveal>
            </div>
            <ol className="grid gap-px overflow-hidden rounded-2xl bg-ink/15 md:col-span-7">
              {PRINCIPLES.map((p, i) => (
                <li key={p.title} className="bg-paper">
                  <Reveal delay={i * 0.06} className="grid gap-3 p-6 sm:grid-cols-[3rem_1fr] md:p-8">
                    <span className="font-mono text-[11px] tracking-[0.22em] text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-serif text-3xl">{p.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{p.body}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          {/* Reader — inline PDFs work on desktop; phones get the buttons above. */}
          <Reveal className="mt-20 hidden overflow-hidden rounded-[28px] bg-ink p-2 md:block">
            <div className="flex items-center justify-between px-4 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60">
              <span>Constitution.pdf</span>
              <a href={PDF} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                Open full screen ↗
              </a>
            </div>
            <iframe src={PDF} title="Students' Gymkhana Constitution" className="h-[85vh] w-full rounded-[20px] bg-paper" />
          </Reveal>
        </Container>
      </Sheet>
    </main>
  );
}
