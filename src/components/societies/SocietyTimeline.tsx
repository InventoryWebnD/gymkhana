"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import type { Society } from "@/lib/society";
import { Container } from "@/components/design/blocks";
import { MaskLines, Reveal, SectionLabel } from "@/components/design/primitives";

export default function SocietyTimeline({ society }: { society: Society }) {
  const events = society.happenings ?? [];
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.8", "end 0.6"] });

  return (
    <Container className="pb-24 md:pb-32">
      <div className="grid gap-10 border-t border-ink/15 pt-16 md:grid-cols-12 md:gap-12 md:pt-24">
        <div className="md:col-span-4">
          <SectionLabel index="03" className="text-ink/60">
            Happenings
          </SectionLabel>
          <MaskLines
            as="h2"
            className="mt-7 font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95]"
            lines={["On the", <em key="c">calendar.</em>]}
          />
          <Reveal>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ink/65">
              Workshops, competitions and meet-ups organised by {society.name}.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          {events.length === 0 ? (
            <Reveal className="rounded-2xl border border-dashed border-ink/25 p-10 text-center">
              <p className="font-serif text-3xl italic">Nothing scheduled — yet.</p>
              <p className="mt-2 text-[14px] text-ink/60">Follow the society on social media for upcoming events.</p>
            </Reveal>
          ) : (
            <ol ref={listRef} className="relative">
              {/* progress spine */}
              <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-ink/15" />
              <motion.span
                aria-hidden="true"
                style={{ scaleY: scrollYProgress, originY: 0 }}
                className="absolute bottom-2 left-[7px] top-2 w-px bg-accent"
              />
              {events.map((event, i) => (
                <Reveal key={`${event.title}-${i}`} delay={0.05} className="relative pb-12 pl-10 last:pb-0">
                  <li>
                    <span aria-hidden="true" className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-paper" />
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
                      {event.date || "Milestone"}
                    </p>
                    <h3 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{event.title}</h3>
                    <p className="mt-3 whitespace-pre-line text-[15px] leading-[1.75] text-ink/70">{event.description}</p>
                    {event.image && (
                      <div className="relative mt-5 aspect-[16/9] max-w-lg overflow-hidden rounded-2xl bg-paper-2">
                        <Image src={event.image} alt={event.title} fill sizes="(max-width: 768px) 100vw, 512px" className="object-contain p-6" />
                      </div>
                    )}
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium underline-offset-4 hover:underline"
                      >
                        Learn more <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </li>
                </Reveal>
              ))}
            </ol>
          )}
        </div>
      </div>
    </Container>
  );
}
