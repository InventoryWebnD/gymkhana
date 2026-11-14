"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import type { Society, SocietyType } from "@/lib/society";
import { Container } from "@/components/design/blocks";
import { CurtainImage, MaskLines, Reveal, SectionLabel, easeOutExpo } from "@/components/design/primitives";
import { societyPhotos } from "@/components/design/photos";

const SMALL = new Set(["and", "of", "for", "the", "in", "a"]);
// "WEB AND DESIGN SOCIETY" → "Web and Design Society"; short acronyms (RISC, FEBS, WebnD) stay as written.
const titleCase = (s: string) =>
  s.length <= 5
    ? s
    : s
        .toLowerCase()
        .split(" ")
        .map((w, i) => (i > 0 && SMALL.has(w) ? w : w.replace(/(^|-)\w/g, (m) => m.toUpperCase())))
        .join(" ");

function socialsOf(society: Society) {
  const s = society.socialLinks ?? {};
  return [
    { name: "Instagram", url: s.instagram, Icon: FaInstagram },
    { name: "Facebook", url: s.facebook, Icon: FaFacebookF },
    { name: "LinkedIn", url: s.linkedin, Icon: FaLinkedinIn },
    { name: "YouTube", url: s.youtube, Icon: FaYoutube },
  ].filter((x): x is typeof x & { url: string } => typeof x.url === "string" && x.url.trim().length > 0);
}

export function SocietyHero({ society, type }: { society: Society; type: SocietyType }) {
  const council = type === "cultural" ? "Socio-Cultural" : "Science & Technology";
  const councilHref = type === "cultural" ? "/councils/cult" : "/councils/tech";
  const socials = socialsOf(society);

  return (
    <section className="grain relative overflow-hidden bg-ink text-paper">
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-6 px-5 sm:px-8 md:grid-cols-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={i}
            className={`border-l border-paper/[0.06] ${i >= 6 ? "hidden md:block" : ""}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            style={{ originY: 0 }}
            transition={{ duration: 1.4, ease: easeOutExpo, delay: i * 0.04 }}
          />
        ))}
      </div>

      <Container className="relative z-[2] grid min-h-[78svh] gap-10 pb-20 pt-32 md:grid-cols-12 md:items-end md:pb-24 md:pt-36">
        <div className="md:col-span-7 lg:col-span-8">
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60 sm:text-[11px]"
          >
            <span className="text-accent">(Society)</span>
            <span className="h-px w-6 bg-paper/30" />
            <Link href={councilHref} className="transition-colors hover:text-paper">
              {council} Council
            </Link>
          </motion.nav>
          <MaskLines
            as="h1"
            play
            delay={0.1}
            lines={[titleCase(society.name)]}
            className="break-words font-sans text-[clamp(2.6rem,11vw,11rem)] font-semibold leading-[0.86] tracking-[-0.055em] [font-stretch:100%] sm:[font-stretch:112%]"
          />
          {society.subtitle && (
            <MaskLines
              play
              delay={0.3}
              lines={[titleCase(society.subtitle)]}
              className="mt-3 font-serif text-[clamp(1.7rem,4vw,3.6rem)] italic leading-[1.05] text-paper/70"
            />
          )}
          {socials.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex items-center gap-2"
            >
              {socials.map(({ name, url, Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${society.name} on ${name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-colors hover:border-accent hover:bg-accent hover:text-ink"
                >
                  <Icon size={15} />
                </a>
              ))}
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: easeOutExpo, delay: 0.2 }}
          className="order-first md:order-none md:col-span-5 lg:col-span-4"
        >
          <div className="relative mx-auto aspect-square w-40 rounded-[28px] bg-paper/[0.04] p-6 ring-1 ring-paper/10 sm:w-56 md:w-full md:max-w-[380px] md:p-10">
            <motion.div
              className="relative h-full w-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={society.logo} alt={`${society.name} logo`} fill sizes="(max-width: 768px) 224px, 380px" preload className="object-contain drop-shadow-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function SocietyOverview({ society }: { society: Society }) {
  const photos = societyPhotos[society.slug] ?? [];
  return (
    <Container className="py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel index="01" className="text-ink/60">
            {society.aboutTitle || "About"}
          </SectionLabel>
          {society.aboutCaption && (
            <Reveal delay={0.05}>
              <p className="mt-8 font-serif text-3xl leading-[1.1] md:text-4xl">
                <span className="text-accent">&ldquo;</span>
                {society.aboutCaption}
                <span className="text-accent">&rdquo;</span>
              </p>
            </Reveal>
          )}
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <p className="whitespace-pre-line text-[16px] leading-[1.8] text-ink/80 md:text-[18px]">
              {society.aboutDescription}
            </p>
          </Reveal>
          {society.highlights && society.highlights.length > 0 && (
            <div className="mt-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">What we do</p>
              <ol className="mt-5 border-t border-ink/15">
                {society.highlights.map((item, i) => (
                  <Reveal key={i} delay={i * 0.05} y={16}>
                    <li className="grid grid-cols-[2.5rem_1fr] items-baseline gap-3 border-b border-ink/15 py-4 text-[15px] md:text-base">
                      <span className="font-mono text-[11px] tracking-[0.22em] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          )}
          {photos.length > 0 && (
            <div className="mt-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">From the society</p>
              <div className="mt-5 grid grid-cols-2 gap-3 md:gap-5">
                {photos.map((photo, i) => (
                  <CurtainImage
                    key={photo.src.src}
                    photo={photo}
                    sizes="(max-width: 768px) 50vw, 30vw"
                    frameClassName="aspect-[4/3] rounded-xl"
                    className={photos.length === 1 ? "col-span-2" : ""}
                    delay={i * 0.1}
                    direction={i % 2 ? "left" : "up"}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
