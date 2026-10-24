"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Society, SocietyType } from "@/lib/society";
import societiesData from "@/data/soc.json";

type SocItem = {
  name: string;
  slug: string;
  logo: string;
  link: string;
  council: string;
};

type Props = {
  society: Society;
  currentType?: SocietyType;
};

export default function SocietySuggestions({ society }: Props) {
  const filtered = societiesData.filter(
    (s) => s.slug.toLowerCase() !== society.slug.toLowerCase()
  );

  const [suggestions, setSuggestions] = useState<SocItem[]>(() =>
    filtered.slice(0, 4)
  );

  useEffect(() => {
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    setSuggestions(shuffled.slice(0, 4));
  }, [society.slug]);

  return (
    <section className="flex flex-col items-center">
      <header className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-neutral-900 uppercase font-montserrat">
          OTHER SOCIETIES
        </h2>
        <div className="mx-auto mt-4 flex w-36 items-center">
          <span className="h-[2px] flex-1 bg-neutral-300" />
          <span className="h-1 w-12 bg-blue-700" />
          <span className="h-[2px] flex-1 bg-neutral-300" />
        </div>
        <p className="mt-2 text-xs sm:text-sm text-neutral-500">
          Explore more student societies and active clubs at IIT Bhubaneswar
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {suggestions.map((item) => (
          <Link
            key={item.slug}
            href={item.link}
            className="group flex flex-col items-center justify-between rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-400 no-underline"
          >
            <div className="flex flex-col items-center w-full">
              <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center p-3 mb-4 group-hover:bg-blue-50/60 transition-colors">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 mb-1">
                {item.council}
              </span>

              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-700 transition-colors font-montserrat uppercase">
                {item.name}
              </h3>
            </div>

            <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-neutral-500 group-hover:text-blue-700 transition-colors">
              <span>Explore Society</span>
              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
