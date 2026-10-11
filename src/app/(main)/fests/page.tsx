
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Globe,
  Trophy,
  Sparkles,
  History,
  CalendarDays,
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

const currentFests = [
  {
    number: "01",
    name: "Pravaah",
    category: "Sports · Technical · Cultural",
    tagline: "The unstoppable flow of talent.",
    description:
      'True excellence flows when sports, technology, and culture converge. Pravaah, the Annual Sports, Technical, and Cultural Fest of IIT Bhubaneswar, creates a platform for diverse talents to thrive. From inter-collegiate sports tournaments and technical hackathons to cultural showcases, workshops, and exhibitions, the fest brings together participants from across India. Its Star-Nites, social awareness campaigns, and sustainability initiatives make Pravaah a celebration that reaches beyond competition.',
    image: "/img/fest/a4.jpg",
    website: "https://www.pravaah.org/",
    instagram: "https://www.instagram.com/pravaah_iitbbs/",
    facebook: "https://www.facebook.com/pravaah.iitbbs/",
    accent: "from-cyan-500/20 to-blue-500/5",
  },
  {
    number: "02",
    name: "Ashvamedha",
    category: "Annual Sports Fest",
    tagline: "Where champions find their arena.",
    description:
      "Sports unite people beyond differences of age, culture, and language. Ashvamedha, the Sports Fest of IIT Bhubaneswar, promotes a competitive spirit, determination, teamwork, and camaraderie. Its annual inter-college sports tournament brings participants together alongside quizzes, inter-branch competitions, and online events. Driven by a passionate student team, Ashvamedha continues to pursue excellence in sports across Bhubaneswar and Odisha.",
    image: "/img/fest/ashvamedha/as.jpg",
    website: null,
    instagram: "https://www.instagram.com/ashvamedha_iitbbs/",
    facebook: "https://www.facebook.com/AshvamedhaIITBBS/",
    accent: "from-orange-500/20 to-red-500/5",
  },
];

const pastFests = [
  {
    name: "Alma Fiesta",
    category: "Socio-Cultural Fest",
    tagline: "Redefining festivity.",
    description:
      "Alma Fiesta is the annual socio-cultural fest of IIT Bhubaneswar. Since its debut in 2010, it has grown into a celebration of culture, music, dance, dramatics, fine arts, and social awareness. Its competitions, workshops, and Star-Nites bring students together for an immersive celebration of India's cultural diversity.",
    image: "/img/fest/event-2.jpg",
    instagram: "https://www.instagram.com/almafiesta.iitbbs/",
    facebook: "https://www.facebook.com/almafiesta/",
    website: null,
  },
  {
    name: "Wissenaire",
    category: "Techno-Management Fest",
    tagline: "Knowledge runs free.",
    description:
      "Wissenaire celebrates technology, innovation, and management at IIT Bhubaneswar. Its activities span programming, robotics, circuitry, business planning, paper presentations, quizzes, and technical exhibitions. The fest also promotes learning through workshops, expert interactions, and community initiatives.",
    image: "/img/fest/event-1.jpg",
    website: "https://www.wissenaire.org/",
    instagram: "https://www.instagram.com/wissenaire.iitbbs/",
    facebook: "https://www.facebook.com/wissenaireiitbbs/",
  },
  {
    name: "E-Summit",
    category: "Entrepreneurship Summit",
    tagline: "Where investors meet innovators.",
    description:
      "Initiated by the Entrepreneurship Cell of IIT Bhubaneswar, E-Summit brings together entrepreneurs, investors, industry professionals, academics, and students. Its activities include entrepreneurial talks, expert panels, workshops, startup opportunities, and discussions designed to encourage innovation and entrepreneurship.",
    image: "/img/fest/es.jpeg",
    website: "https://e-summit-iitbbs.com/",
    instagram: "https://www.instagram.com/centrepreneurship/",
    facebook: "https://www.facebook.com/centrepreneurship/",
  },
];

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

function SocialLinks({ fest }: any) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {fest.website && (
        <a
          href={fest.website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${fest.name} official website`}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold transition hover:border-cyan-300 hover:bg-cyan-300/10"
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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-pink-400 hover:bg-pink-400/10 hover:text-pink-300"
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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-blue-400 hover:bg-blue-400/10 hover:text-blue-300"
        >
          <FaFacebookF size={16} />
        </a>
      )}
    </div>
  );
}

function FestSection({ fest, index }) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={`group grid items-center gap-8 py-12 md:grid-cols-2 md:gap-14 md:py-20 ${reversed ? "md:[&>div:first-child]:order-2" : ""
        }`}
    >
      <div className="relative">
        <div
          className={`absolute -inset-3 rounded-[2rem] bg-gradient-to-br ${fest.accent} opacity-60 blur-2xl transition duration-500 group-hover:opacity-100`}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
          className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900"
        >
          <motion.img
            src={fest.image}
            alt={`${fest.name} festival`}
            loading="lazy"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full w-full object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/75 via-transparent to-white/10" />

          <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-lg">
            {fest.number}
          </span>

          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
              {fest.category}
            </p>
            <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              {fest.name}
            </h3>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-6"
      >
        <motion.div variants={fadeUp}>
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            <Sparkles size={15} />
            {fest.category}
          </p>

          <h3 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {fest.tagline}
          </h3>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-base leading-8 text-neutral-400 sm:text-lg"
        >
          {fest.description}
        </motion.p>

        <motion.div variants={fadeUp}>
          <SocialLinks fest={fest} />
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

function PastFestCard({ fest }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-cyan-300/40 hover:bg-white/[0.06]"
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-neutral-900">
        <motion.img
          src={fest.image}
          alt={`${fest.name} festival`}
          loading="lazy"
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/40 px-3 py-1.5 text-xs text-white/90 backdrop-blur-md">
          {fest.category}
        </span>

        <motion.div
          className="absolute bottom-5 right-5 text-white/80"
          whileHover={{ x: 3, y: -3 }}
        >
          <ArrowUpRight size={22} />
        </motion.div>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-2xl font-bold text-white">{fest.name}</h3>
          <p className="mt-1 text-sm text-cyan-300">{fest.tagline}</p>
        </div>

        <p className="text-sm leading-7 text-neutral-400">
          {fest.description}
        </p>

        <div className="border-t border-white/10 pt-4">
          <SocialLinks fest={fest} />
        </div>
      </div>
    </motion.article>
  );
}

export default function FestPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090d] text-white">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, scale: 1.015 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease }}
        className="relative"
      >
        <FestCarousel
          slides={festSlides}
          autoSwipeInterval={5000}
          autoPlay={true}
          pauseOnHover={true}
          heightClassName="h-dvh min-h-[600px]"
        />


        <motion.button
          type="button"
          onClick={() => {
            document.getElementById("current-fests")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-24 left-1/2 z-30 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-white/80 transition hover:text-white"
        >
          Explore the fests

          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={18} />
          </motion.span>
        </motion.button>

      </motion.section>

      {/* INTRO */}
      <section className="relative px-5 pb-10 pt-24 sm:px-8 md:pb-16 md:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[100px]" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300"
          >
            <Sparkles size={14} />
            Life beyond the classroom
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-7 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          >
            More than events.
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-white to-blue-300 bg-clip-text text-transparent">
              Moments that matter.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg"
          >
            Discover the festivals that bring the IIT Bhubaneswar
            community together through sports, culture, technology,
            creativity, and entrepreneurship.
          </motion.p>
        </motion.div>
      </section>

      {/* CURRENT FESTS */}
      <section
        id="current-fests"
        className="scroll-mt-20 px-5 py-16 sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 flex items-end justify-between gap-4 border-b border-white/10 pb-7 md:mb-12"
          >
            <div>
              <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                <Trophy size={15} />
                The celebrations continue
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Current Fests<span className="text-cyan-300">.</span>
              </h2>
            </div>
            <span className="hidden text-sm text-neutral-500 sm:block">
              {String(currentFests.length).padStart(2, "0")} festivals
            </span>
          </motion.div>

          {currentFests.map((fest, index) => (
            <FestSection key={fest.name} fest={fest} index={index} />
          ))}
        </div>
      </section>

      {/* PAST FESTS */}
      <section
        id="past-fests"
        className="relative border-t border-white/10 bg-white/[0.015] px-5 py-20 sm:px-8 md:py-28"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/[0.05] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end md:mb-14"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300"
              >
                <History size={15} />
                Celebrations that shaped us
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              >
                Past Fests<span className="text-cyan-300">.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-xl leading-7 text-neutral-400"
              >
                A look back at the festivals, ideas, and experiences
                that have been part of our campus journey.
              </motion.p>
            </div>

            <motion.span
              variants={fadeUp}
              className="flex items-center gap-2 text-sm text-neutral-500"
            >
              <CalendarDays size={16} />
              Our legacy
            </motion.span>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {pastFests.map((fest) => (
              <PastFestCard key={fest.name} fest={fest} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-5 py-20 sm:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-950/60 via-neutral-900 to-blue-950/40 px-6 py-14 text-center sm:px-12 md:py-20"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />

          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles
                size={28}
                className="mx-auto mb-5 text-cyan-300"
              />
            </motion.div>

            <h2 className="text-3xl font-bold sm:text-5xl">
              Every fest has a story.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-neutral-400">
              Be part of the energy, meet new people, discover your
              passion, and create your own campus memories.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-neutral-950 transition hover:bg-cyan-200"
            >
              Explore Gymkhana
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
