"use client";

import { Mail, Phone } from "lucide-react";
import type { Society } from "@/lib/society";

type Props = {
  society: Society;
};

export default function SocietySecretary({ society }: Props) {
  const secretary = society.contacts?.secretary;
  const governors = society.contacts?.governors ?? [];

  return (
    <section className="flex flex-col items-center">
      <header className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-neutral-900 uppercase font-montserrat">
          SECRETARY
        </h2>
        <div className="mx-auto mt-4 flex w-36 items-center">
          <span className="h-[2px] flex-1 bg-neutral-300" />
          <span className="h-1 w-12 bg-blue-700" />
          <span className="h-[2px] flex-1 bg-neutral-300" />
        </div>
        <p className="mt-2 text-xs sm:text-sm text-neutral-500">
          Student leadership representing {society.name}
        </p>
      </header>

      {/* Secretary Card with Horizontal desktop and Vertical mobile flow */}
      <article className="w-full max-w-3xl overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
          {/* Secretary Image */}
          <div className="relative h-36 w-36 sm:h-44 sm:w-44 shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-inner flex items-center justify-center">
            {secretary?.image ? (
              <img
                src={secretary.image}
                alt={secretary.name}
                className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-neutral-100 text-blue-700 font-bold text-4xl">
                {secretary?.name ? secretary.name.charAt(0) : "S"}
              </div>
            )}
          </div>

          {/* Secretary Details */}
          <div className="flex flex-1 flex-col items-center sm:items-start min-w-0">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-blue-700 border border-blue-200">
              {secretary?.role || "Secretary"}
            </span>

            <h3 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900">
              {secretary?.name || "Society Secretary"}
            </h3>

            <p className="mt-1 text-xs sm:text-sm font-medium text-neutral-600">
              {society.name} &bull; Students&apos; Gymkhana
            </p>

            <p className="text-xs text-neutral-500">
              Indian Institute of Technology Bhubaneswar
            </p>

            {/* Contact Links */}
            <div className="mt-5 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              {secretary?.email && (
                <a
                  href={`mailto:${secretary.email}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-xs sm:text-sm font-medium text-neutral-700 hover:border-blue-700 hover:bg-blue-700 hover:text-white transition-all shadow-sm"
                >
                  <Mail size={15} />
                  <span>{secretary.email}</span>
                </a>
              )}

              {secretary?.phone && (
                <a
                  href={`tel:${secretary.phone}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-xs sm:text-sm font-medium text-neutral-700 hover:border-blue-700 hover:bg-blue-700 hover:text-white transition-all shadow-sm"
                >
                  <Phone size={15} />
                  <span>{secretary.phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Optional Governors list if available */}
      {governors.length > 0 && (
        <div className="mt-10 w-full max-w-4xl">
          <h3 className="text-center text-sm font-bold uppercase tracking-wider text-neutral-500 mb-6">
            Governors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {governors.map((gov, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-xl border border-neutral-200 bg-white p-5 text-center shadow-sm"
              >
                <div className="h-16 w-16 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center overflow-hidden mb-3">
                  {gov.image ? (
                    <img
                      src={gov.image}
                      alt={gov.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-lg font-bold text-neutral-600">
                      {gov.name.charAt(0)}
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-neutral-900 text-sm">{gov.name}</h4>
                <p className="text-xs text-neutral-500">{gov.role || "Governor"}</p>
                {gov.email && (
                  <a
                    href={`mailto:${gov.email}`}
                    className="mt-2 text-xs text-blue-700 hover:underline truncate max-w-full"
                  >
                    {gov.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
