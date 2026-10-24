"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Society } from "@/lib/society";

type Props = {
  society: Society;
};

export default function SocietyTimeline({ society }: Props) {
  const events = society.happenings ?? [];

  return (
    <section className="flex flex-col items-center">
      <header className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-neutral-900 uppercase font-montserrat">
          HAPPENINGS &amp; TIMELINE
        </h2>
        <div className="mx-auto mt-4 flex w-36 items-center">
          <span className="h-[2px] flex-1 bg-neutral-300" />
          <span className="h-1 w-12 bg-blue-700" />
          <span className="h-[2px] flex-1 bg-neutral-300" />
        </div>
        <p className="mt-2 text-xs sm:text-sm text-neutral-500">
          Key events, initiatives, and workshops organized by {society.name}
        </p>
      </header>

      {events.length === 0 ? (
        <div className="w-full max-w-2xl rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-10 text-center">
          <Calendar size={36} className="mx-auto text-neutral-400 mb-3" />
          <h3 className="text-lg font-semibold text-neutral-800">
            No happenings scheduled at this moment
          </h3>
          <p className="text-sm text-neutral-500 mt-1">
            Stay tuned for upcoming workshops, competitions, and society meetups!
          </p>
        </div>
      ) : (
        <div className="relative w-full max-w-4xl pb-4">
          {/* Vertical timeline spine */}
          <div className="absolute left-4 sm:left-6 top-3 bottom-3 w-[3px] bg-gradient-to-b from-blue-700 via-blue-400 to-neutral-200 rounded-full" />

          <div className="space-y-10 sm:space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={`${event.title}-${index}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline Node Marker */}
                <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-4 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white border-2 border-blue-700 text-blue-700 shadow-md">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-700" />
                </div>

                {/* Timeline Event Card */}
                <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-neutral-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-200">
                      <Clock size={13} />
                      <span>{event.date || "Event Milestone"}</span>
                    </span>

                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 hover:text-blue-900 transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight size={13} />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 font-montserrat">
                    {event.title}
                  </h3>

                  <p className="mt-3 whitespace-pre-line text-sm sm:text-base leading-relaxed text-neutral-600">
                    {event.description}
                  </p>

                  {event.image && (
                    <div className="mt-5 overflow-hidden rounded-xl border border-neutral-200 max-h-72 sm:max-h-80 bg-neutral-100">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>
                  )}
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
