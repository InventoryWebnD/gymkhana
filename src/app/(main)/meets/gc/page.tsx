"use client";

import type { ReactNode } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Trophy } from "lucide-react";

import CommonCarousel from "@/components/layout/CommonCarousel";
import SectionShowcase from "@/components/ui/SectionShowcase";


const results = [
  { rank: 1, department: "Civil", title: "Overall champion" },
  { rank: 2, department: "Electrical", title: "1st runner-up" },
  { rank: 3, department: "Mechanical", title: "2nd runner-up" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function GcMeetPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="w-full overflow-hidden bg-white">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, scale: 1.015 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease }}
          className="h-dvh w-full"
        >
          <CommonCarousel
            commonName="GENERAL CHAMPIONSHIP"
            heightClassName="h-dvh min-h-screen"
            images={[
              "/img/gc-carousel/gc1.jpg",
              "/img/gc-carousel/gc2.jpg",
              "/img/gc-carousel/gc3.jpg",
              "/img/gc-carousel/gc4.jpg",
              "/img/gc-carousel/gc5.jpg",
              "/img/gc-carousel/gc6.jpg",
              "/img/gc-carousel/gc7.jpg",
            ]}
          />
        </motion.section>

        {/* ABOUT */}
        <Reveal>
          <SectionShowcase
            type="meet"
            name="About General Championship"
            image="/img/gc-carousel/gc7.jpg"
            imageAlt="General Championship"
            orientation="left"
            description={[
              "General Championship is the annual inter-departmental tournament where students strive to uphold their department's pride. It is a platform for students of different years to interact with each other in a healthy, competitive setting.",
              "Tournaments are held under three councils: Technical, Cultural and Sports. Each event has a winner, and points are awarded to winners and runners-up according to the standings. The department with the highest aggregate of points across all events is named the General Champion.",
            ]}
          />
        </Reveal>

        {/* RESULTS */}
        <section
          id="results"
          className="border-t border-slate-200 bg-slate-50 px-5 py-16 sm:px-8 md:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="mb-8 border-b border-slate-200 pb-6 md:mb-10">
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#1662ff]">
                  <Trophy size={16} />
                  General Championship
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Results of GC 2025
                </h2>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full min-w-[420px] text-left">
                  <caption className="sr-only">
                    General Championship 2025 final standings by department
                  </caption>
                  <thead className="bg-slate-50 text-sm text-slate-500">
                    <tr>
                      <th scope="col" className="w-20 px-6 py-4 font-semibold">
                        Rank
                      </th>
                      <th scope="col" className="px-6 py-4 font-semibold">
                        Department
                      </th>
                      <th scope="col" className="px-6 py-4 font-semibold">
                        Title
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {results.map((row) => (
                      <tr key={row.rank}>
                        <th
                          scope="row"
                          className="px-6 py-5 text-base font-semibold text-slate-900"
                        >
                          {row.rank}
                        </th>
                        <td className="px-6 py-5 text-base font-semibold text-slate-900">
                          {row.department}
                        </td>
                        <td className="px-6 py-5 text-base text-slate-600">
                          {row.title}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}