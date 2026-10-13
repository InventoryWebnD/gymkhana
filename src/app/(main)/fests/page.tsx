"use client";

import type { ReactNode } from "react";
import { motion, MotionConfig } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Globe,
  Trophy,
  History,
} from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

import FestCarousel from "@/components/layout/FestCarousel";

const festSlides = [
  { name: "PRAVAAH '27", src: "/img/fest/pravaah/a1.jpg" },
  { name: "PRAVAAH '27", src: "/img/fest/pravaah/a2.jpg" },
  { name: "ASHVAMEDHA", src: "/img/fest/ashvamedha/as1.jpg" },
  { name: "PRAVAAH '27", src: "/img/fest/pravaah/a4.jpg" },
  { name: "ASHVAMEDHA", src: "/img/fest/ashvamedha/as.jpg" },
  { name: "ASHVAMEDHA", src: "/img/fest/ashvamedha/as2.jpg" },
  { name: "PRAVAAH '27", src: "/img/fest/pravaah/a3.jpg" },
  { name: "ASHVAMEDHA", src: "/img/fest/ashvamedha/as5.jpg" },
];

type Fest = {
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  website?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  accent: string;
};

const currentFests: Fest[] = [
  {
    name: "Pravaah",
    category: "Sports, technical and cultural fest",
    tagline: "The unstoppable flow of talent.",
    description:
      'True excellence flows when the vigor of sports, the innovation of technology, and the vibrancy of culture converge. Creating a unified platform for diverse talents to thrive is exactly what Pravaah—The Annual Sports, Technical, and Cultural Fest—strives to do. We at Pravaah believe in the "Unstoppable Flow" of potential, and that talent knows no boundaries when provided the right arena; we are hence motivated to create a holistic experience that challenges the body, stimulates the mind, and touches the soul. We conduct high-octane competitions ranging from Inter-collegiate Sports Tournaments and Technical Hackathons to Cultural Showcases, alongside specialized workshops and exhibitions. Attracting participation from colleges across India, Pravaah has been graced by illustrious athletes, industry pioneers, and celebrated artists, with our Star-Nites turning the campus into a melting pot of energy. We also recognize the social commitment we owe to society and are proactive philanthropically, actively conducting awareness campaigns and sustainability drives to ensure the spirit of our fest leaves a lasting impact on the community.',
    image: "/img/fest/a4.jpg",
    website: "https://www.pravaah.org/",
    instagram: "https://www.instagram.com/pravaah_iitbbs/",
    facebook: "https://www.facebook.com/pravaah.iitbbs/",
    accent: "#1662ff",
  },
  {
    name: "Ashvamedha",
    category: "Annual sports fest",
    tagline: "Where champions find their arena.",
    description:
      "Sports unite people beyond differences of age, culture, and language. Ashvamedha, the Sports Fest of IIT Bhubaneswar, promotes a competitive spirit, determination, teamwork, and camaraderie. Its annual inter-college sports tournament brings participants together alongside quizzes, inter-branch competitions, and online events. Driven by a passionate student team, Ashvamedha continues to pursue excellence in sports across Bhubaneswar and Odisha.",
    image: "/img/fest/ashvamedha/as.jpg",
    website: null,
    instagram: "https://www.instagram.com/ashvamedha_iitbbs/",
    facebook: "https://www.facebook.com/AshvamedhaIITBBS/",
    accent: "#1662ff",
  },
];

const pastFests: Fest[] = [
  {
    name: "Alma Fiesta",
    category: "Socio-cultural fest",
    tagline: "Redefining festivity.",
    description:
      "Alma Fiesta is the annual socio-cultural fest of IIT Bhubaneswar. Since its debut in 2010, it has grown into a celebration of culture, music, dance, dramatics, fine arts, and social awareness. Its competitions, workshops, and Star-Nites bring students together for an immersive celebration of India's cultural diversity.",
    image: "/img/fest/event-2.jpg",
    instagram: "https://www.instagram.com/almafiesta.iitbbs/",
    facebook: "https://www.facebook.com/almafiesta/",
    website: null,
    accent: "#1662ff",
  },
  {
    name: "Wissenaire",
    category: "Techno-management fest",
    tagline: "Knowledge runs free.",
    description:
      "Wissenaire celebrates technology, innovation, and management at IIT Bhubaneswar. Its activities span programming, robotics, circuitry, business planning, paper presentations, quizzes, and technical exhibitions. The fest also promotes learning through workshops, expert interactions, and community initiatives.",
    image: "/img/fest/event-1.jpg",
    website: "https://www.wissenaire.org/",
    instagram: "https://www.instagram.com/wissenaire.iitbbs/",
    facebook: "https://www.facebook.com/wissenaireiitbbs/",
    accent: "#1662ff",
  },
  {
    name: "E-Summit",
    category: "Entrepreneurship summit",
    tagline: "Where investors meet innovators.",
    description:
      "Initiated by the Entrepreneurship Cell of IIT Bhubaneswar, E-Summit brings together entrepreneurs, investors, industry professionals, academics, and students. Its activities include entrepreneurial talks, expert panels, workshops, startup opportunities, and discussions designed to encourage innovation and entrepreneurship.",
    image: "/img/fest/es.jpeg",
    website: "https://e-summit-iitbbs.com/",
    instagram: "https://www.instagram.com/centrepreneurship/",
    facebook: "https://www.facebook.com/centrepreneurship/",
    accent: "#1662ff",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1662ff] focus-visible:ring-offset-2";

function SocialLinks({ fest }: { fest: Fest }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {fest.website && (
        <a
          href={fest.website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${fest.name} official website`}
          className={`inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 transition-colors hover:border-[#1662ff] hover:bg-[#1662ff] hover:text-white ${focusRing}`}
        >
          <Globe size={16} />
          Website
          <ArrowUpRight size={14} />
        </a>
      )}

      {fest.instagram && (
        <a
          href={fest.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${fest.name} on Instagram`}
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-pink-500 hover:bg-pink-500 hover:text-white ${focusRing}`}
        >
          <FaInstagram size={18} />
        </a>
      )}

      {fest.facebook && (
        <a
          href={fest.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${fest.name} on Facebook`}
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-[#1877f2] hover:bg-[#1877f2] hover:text-white ${focusRing}`}
        >
          <FaFacebookF size={16} />
        </a>
      )}
    </div>
  );
}

function SectionHeading({
  icon,
  label,
  title,
  intro,
  accent = "#1662ff",
}: {
  icon: ReactNode;
  label: string;
  title: string;
  intro?: string;
  accent?: string;
}) {
  return (
    <Reveal className="mb-10 border-b border-slate-200 pb-8 md:mb-14">
      <p
        className="mb-3 flex items-center gap-2 text-sm font-semibold"
        style={{ color: accent }}
      >
        {icon}
        {label}
      </p>
      <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
          {intro}
        </p>
      )}
    </Reveal>
  );
}

function FestSection({ fest, index }: { fest: Fest; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <article className="grid items-center gap-8 py-10 md:grid-cols-2 md:gap-14 md:py-16">
        {/* Image */}
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200 ${
            reversed ? "md:order-2" : ""
          }`}
        >
          <img
            src={fest.image}
            alt={`${fest.name} festival`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
          <div className="absolute inset-x-5 bottom-5">
            <p className="text-sm font-medium text-white/80">{fest.category}</p>
            <h3 className="mt-1 text-3xl font-bold text-white sm:text-4xl">
              {fest.name}
            </h3>
          </div>
        </div>

        {/* Text */}
        <div className={`space-y-5 ${reversed ? "md:order-1" : ""}`}>
          <div>
            <span
              className="mb-4 block h-1 w-12 rounded-full"
              style={{ backgroundColor: fest.accent }}
            />
            <h3 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {fest.tagline}
            </h3>
          </div>

          <p className="max-w-prose text-base leading-7 text-slate-600">
            {fest.description}
          </p>

          <SocialLinks fest={fest} />
        </div>
      </article>
    </Reveal>
  );
}

function PastFestCard({ fest }: { fest: Fest }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="relative aspect-[5/4] overflow-hidden bg-slate-100">
        <img
          src={fest.image}
          alt={`${fest.name} festival`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
          {fest.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-slate-900">{fest.name}</h3>
        <p className="mt-1 text-sm font-medium text-[#1662ff]">
          {fest.tagline}
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {fest.description}
        </p>

        <div className="mt-auto border-t border-slate-200 pt-4">
          <div className="pt-0">
            <SocialLinks fest={fest} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FestPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen overflow-hidden bg-white text-slate-900">
        {/* HERO */}
        <section className="relative">
          <FestCarousel
            slides={festSlides}
            autoSwipeInterval={5000}
            autoPlay={true}
            pauseOnHover={true}
            heightClassName="h-dvh min-h-[600px]"
          />

          <button
            type="button"
            onClick={() => {
              document.getElementById("current-fests")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-sm font-medium text-white drop-shadow-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Explore the fests
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={18} />
            </motion.span>
          </button>
        </section>

        {/* CURRENT FESTS */}
        <section
          id="current-fests"
          className="scroll-mt-20 px-5 py-16 sm:px-8 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              icon={<Trophy size={16} />}
              label="The celebrations continue"
              title="Current fests"
            />

            <div className="divide-y divide-slate-200">
              {currentFests.map((fest, index) => (
                <FestSection key={fest.name} fest={fest} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* PAST FESTS */}
        <section
          id="past-fests"
          className="border-t border-slate-200 bg-slate-50 px-5 py-16 sm:px-8 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              icon={<History size={16} />}
              label="Celebrations that shaped us"
              title="Past fests"
              intro="A look back at the festivals, ideas, and experiences that have been part of our campus journey."
            />

            <Reveal>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {pastFests.map((fest) => (
                  <PastFestCard key={fest.name} fest={fest} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}