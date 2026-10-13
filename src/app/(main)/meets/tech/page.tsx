"use client";

import { motion } from "framer-motion";
import { Medal } from "lucide-react";

import CommonCarousel from "@/components/layout/CommonCarousel";
import SectionShowcase from "@/components/ui/SectionShowcase";

const participationRecords = [
  {
    edition: "TechMeet 8.0",
    results: [
      {
        competition: "Ashoka’s Tech for Change Challenge (High Prep)",
        position: "Gold Medal — 400/400",
        team: "Team Prajjwala",
        members: ["Rahul Kumar", "Challa Sai", "Vivek"],
      },
      {
        competition: "BOSCH's Route Optimization Algorithm (Mid Prep)",
        position: "Silver Medal — 150/250",
        team: "Team Optimize_prime",
        members: [
          "Hrishab Yadav",
          "Ambarish",
          "Aaroshi Verma",
          "Saurabha Bharadwaj",
          "Yash Raghuvanshi",
        ],
      },
      {
        competition:
          "BARC Outreach Exercise for New Technology Ideas in TV Audience Measurement (Mid Prep)",
        position: "Bronze Medal — 100/400",
        team: "Team PinkX",
        members: [
          "Himanshu Goyal",
          "Sai Prasath S",
          "Abhishek Mishra",
          "Dinesh Mohanty",
        ],
      },
      {
        competition: "Coding Hackathon (Low Prep)",
        position: "Silver Medal — 90/150",
        team: "Team Champions_Sam",
        members: [
          "Aditya Pal",
          "Madhav Tummala",
          "Aman Pratap Singh",
          "Saksham Arneja",
        ],
      },
    ],
  },
  {
    edition: "TechMeet 9.0",
    results: [
      {
        competition: "Saptang Lab's Network Security Hackathon (Low Prep)",
        position: "Bronze Medal",
        team: "Team members",
        members: [
          "Akarsh Rana",
          "Ganesh Ram Kaushik",
          "Ankit Anand",
          "Raushan Kumar",
          "Shravanth Chebrolu",
        ],
      },
    ],
  },
  {
    edition: "TechMeet 10.0",
    results: [
      {
        competition: "Gmetri's Growth Strategy for Metaverse (Low Prep)",
        position: "Bronze Medal",
        team: "Team members",
        members: [
          "Gandem Nitin",
          "Srinath Duvvuri",
          "Subhranshu P. Nayak",
          "Deekshitha Chandra P.",
        ],
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function TechMeetPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#0f172a]">
      {/* Hero */}
      <section aria-label="Inter IIT Tech Meet hero" className="relative">
        <CommonCarousel
          commonName="INTER IIT TECH MEET"
          heightClassName="h-dvh min-h-[560px]"
          images={["/img/tech-carousel/tech.jpg"]}
        />
      </section>

      {/* Overview */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mx-auto max-w-360 py-4 md:py-8"
      >
        <SectionShowcase
          type="meet"
          name="About Inter IIT Tech Meet"
          tagline="Innovation, collaboration, and technology across the IIT community."
          image="/img/tech-carousel/techmeet.jpg"
          imageAlt="Students participating in the Inter IIT Tech Meet"
          orientation="left"
          description={[
            "Inter IIT Tech Meet is an annual technological competition organized by the Indian Institutes of Technology. It is a technical event in which IITs participate, with the host institution changing from year to year.",
            "The meet began in 2012 at IIT Kanpur as a Pan-IIT student initiative and later grew into an annual meet approved by the IIT Council.",
            "The event combines collaborative activities that encourage networking and knowledge sharing with competitive challenges that promote innovative solutions to real-world problems under defined constraints.",
          ]}
          className="my-6 mx-4 rounded-2xl border border-[#e2e8f0] shadow-sm sm:mx-6 lg:mx-10"
          imageClassName="md:min-h-[420px]"
          textClassName="md:pt-12"
        />
      </motion.div>

      {/* Participation results */}
      <section
        id="participation"
        className="scroll-mt-20 border-y border-[#e2e8f0] bg-[#f8fafc] px-4 py-16 sm:px-6 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-10 max-w-3xl"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#1662ff]">
              Our achievements
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Participation & Results
            </h2>

            <p className="mt-4 text-base leading-7 text-[#475569]">
              A record of IIT Bhubaneswar teams and their reported results
              across the Inter IIT Tech Meet editions listed below.
            </p>
          </motion.div>

          <div className="space-y-8">
            {participationRecords.toReversed().map((record, editionIndex) => (
              <motion.section
                key={editionIndex}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.4,
                  delay: editionIndex * 0.05,
                  ease: "easeOut",
                }}
                className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm"
              >
                <div className="flex items-center gap-3 border-b border-[#e2e8f0] px-5 py-5 sm:px-7">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#1662ff]/10 text-[#1662ff]">
                    <Medal size={20} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0f172a] sm:text-xl">
                      Participation in {record.edition}
                    </h3>
                    <p className="mt-1 text-sm text-[#64748b]">
                      {record.results.length} reported{" "}
                      {record.results.length === 1 ? "result" : "results"}
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-190 border-collapse text-left">
                    <thead>
                      <tr className="bg-[#f8fafc] text-xs uppercase tracking-wider text-[#64748b]">
                        <th className="w-16 px-5 py-4 font-semibold sm:px-7">
                          #
                        </th>
                        <th className="w-[34%] px-5 py-4 font-semibold">
                          Competition
                        </th>
                        <th className="w-[24%] px-5 py-4 font-semibold">
                          Position
                        </th>
                        <th className="px-5 py-4 font-semibold sm:px-7">
                          Team & Members
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-[#e2e8f0]">
                      {record.results.map((result, index) => (
                        <tr
                          key={`${record.edition}-${result.competition}`}
                          className="align-top transition-colors hover:bg-[#f8fafc]"
                        >
                          <td className="px-5 py-5 text-sm font-semibold text-[#64748b] sm:px-7">
                            {String(index + 1).padStart(2, "0")}
                          </td>

                          <td className="px-5 py-5 text-sm font-semibold leading-6 text-[#0f172a]">
                            {result.competition}
                          </td>

                          <td className="px-5 py-5">
                            <span className="inline-flex items-center rounded-full bg-[#1662ff]/10 px-3 py-1.5 text-xs font-semibold leading-5 text-[#1662ff]">
                              {result.position}
                            </span>
                          </td>

                          <td className="px-5 py-5 sm:px-7">
                            <p className="mb-2 text-sm font-semibold text-[#0f172a]">
                              {result.team}
                            </p>
                            <ul className="space-y-1 text-sm leading-5 text-[#475569]">
                              {result.members.map((member) => (
                                <li key={member}>{member}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="border-t border-[#e2e8f0] px-5 py-3 text-xs text-[#64748b] sm:px-7">
                  On smaller screens, scroll horizontally to view all columns.
                </p>
              </motion.section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}