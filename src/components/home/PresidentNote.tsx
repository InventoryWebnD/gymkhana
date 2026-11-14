"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { photos } from "@/components/design/photos";
import { CurtainImage, MaskLines, SectionLabel, easeInOut } from "@/components/design/primitives";

const MESSAGE = [
  "Indian Institute of Technology, Bhubaneswar, from its humble start in 2008 has come down a long way in its strife to become one of the leading institutes of the country. Achieving this success in this short a journey would have been impossible without the contribution of the students and extensive support of the Students' Gymkhana, the students' representative body.",
  "Established in 2009, the Gymkhana has been efficiently working as an independent, self-governing and democratic organization that has bridged the gap between the students and the administration. From managing various societies catering to different interests and talents of the students, organizing various intra-college co-curricular, technical and sports events and competitions, holding informative workshops, celebrating the festivals at hostels with great fervor and organizing the institute's very own socio-cultural and technical fests, Alma Fiesta and Wissenaire respectively, the Students' Gymkhana has played a commendable role in nurturing the extra-curricular talents of the students, enhancing their personality and cultivating leadership qualities in them to equip them for a successful independent corporate and social life.",
  "It gives me immense pride and pleasure to be heading this organization, I congratulate all its members for their achievements so far and extend my support and good wishes to continue these appreciable efforts.",
];

export default function PresidentNote() {
  const [open, setOpen] = useState(false);

  return (
    <section id="president-word" className="relative z-10 bg-paper text-ink">
      <div className="mx-auto max-w-[1600px] border-t border-ink/15 px-5 py-24 sm:px-8 md:py-36">
        <SectionLabel index="06" className="text-ink/60">
          From the President
        </SectionLabel>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4 lg:col-span-3">
            <CurtainImage
              photo={photos.president}
              sizes="(max-width: 768px) 80vw, 25vw"
              frameClassName="aspect-[4/5] rounded-2xl bg-paper-2"
              imgClassName="object-cover object-top"
              caption={false}
              className="max-w-[340px]"
            />
            <div className="mt-5 max-w-[340px] border-t border-ink/15 pt-4">
              <a
                href="https://sms.iitbbs.ac.in/index.php/chetan/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-3xl underline-offset-4 hover:underline"
              >
                Dr. Chetan
              </a>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
                President, Students&apos; Gymkhana
              </p>
            </div>
          </div>

          <div className="md:col-span-8 md:col-start-5 lg:col-span-8 lg:col-start-5">
            <span aria-hidden="true" className="block font-serif text-[7rem] leading-[0.5] text-accent md:text-[10rem]">
              &ldquo;
            </span>
            <MaskLines
              as="p"
              className="mt-4 font-serif text-[clamp(2rem,4.4vw,4.6rem)] leading-[1.02]"
              stagger={0.06}
              lines={[
                "An independent, self-governing",
                "and democratic organization that",
                <span key="b">
                  has <em>bridged the gap</em> between
                </span>,
                "the students and the administration.",
              ]}
            />

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="president-message"
              className="group mt-10 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/25 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.4, ease: easeInOut }}>
                  +
                </motion.span>
              </span>
              {open ? "Close the message" : "Read the full message"}
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id="president-message"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.7, ease: easeInOut }}
                  className="overflow-hidden"
                >
                  <div className="grid max-w-4xl gap-5 pt-8 text-[16px] leading-[1.75] text-ink/75 md:columns-2 md:block md:gap-10">
                    {MESSAGE.map((p, i) => (
                      <p key={i} className="mb-5 break-inside-avoid">
                        {p}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
