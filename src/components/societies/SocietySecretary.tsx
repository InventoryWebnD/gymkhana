"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import type { Society } from "@/lib/society";
import { Container } from "@/components/design/blocks";
import { CurtainImage, MaskLines, Reveal, SectionLabel } from "@/components/design/primitives";

export default function SocietySecretary({ society }: { society: Society }) {
  const secretary = society.contacts?.secretary;
  const governors = society.contacts?.governors ?? [];
  if (!secretary && governors.length === 0) return null;

  return (
    <Container className="pb-24 md:pb-32">
      <div className="grid gap-10 border-t border-ink/15 pt-16 md:grid-cols-12 md:gap-12 md:pt-24">
        <div className="md:col-span-4">
          <SectionLabel index="02" className="text-ink/60">
            Who runs it
          </SectionLabel>
          <MaskLines
            as="h2"
            className="mt-7 font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95]"
            lines={["Say hello to", <em key="s">the secretary.</em>]}
          />
        </div>

        {secretary && (
          <div className="grid gap-8 sm:grid-cols-[minmax(0,240px)_1fr] sm:items-end md:col-span-7 md:col-start-6">
            {secretary.image ? (
              <CurtainImage
                photo={{
                  src: { src: secretary.image, width: 600, height: 750 },
                  alt: secretary.name,
                  caption: secretary.role,
                }}
                sizes="240px"
                frameClassName="aspect-[4/5] rounded-2xl bg-paper-2"
                imgClassName="object-top"
                caption={false}
                className="max-w-[240px]"
              />
            ) : (
              <div className="flex aspect-[4/5] max-w-[240px] items-center justify-center rounded-2xl bg-ink font-serif text-7xl text-paper">
                {secretary.name.charAt(0)}
              </div>
            )}
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{secretary.role || "Secretary"}</p>
              <h3 className="mt-3 font-sans text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{secretary.name}</h3>
              <p className="mt-2 text-[14px] text-ink/60">
                {society.name} · Students&apos; Gymkhana, IIT Bhubaneswar
              </p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                {secretary.email && (
                  <a
                    href={`mailto:${secretary.email}`}
                    className="inline-flex min-h-11 items-center gap-2 break-all rounded-full border border-ink/20 px-4 py-2 text-[13px] transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    <Mail size={14} className="shrink-0" />
                    {secretary.email}
                  </a>
                )}
                {secretary.phone && (
                  <a
                    href={`tel:${secretary.phone}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-[13px] transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    <Phone size={14} />
                    {secretary.phone}
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        )}

        {governors.length > 0 && (
          <div className="md:col-span-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">Governors</p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {governors.map((gov, i) => (
                <Reveal key={i} delay={i * 0.05} className="flex items-center gap-4 rounded-2xl bg-paper-2 p-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-ink text-paper">
                    {gov.image ? (
                      <Image src={gov.image} alt="" fill sizes="56px" className="object-cover" />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center font-serif text-2xl">{gov.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-medium">{gov.name}</p>
                    <p className="text-[12px] text-ink/60">{gov.role || "Governor"}</p>
                    {gov.email && (
                      <a href={`mailto:${gov.email}`} className="block truncate text-[12px] underline-offset-2 hover:underline">
                        {gov.email}
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
