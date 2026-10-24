"use client";

import { Sparkles, CheckCircle2 } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import type { Society, SocietyType } from "@/lib/society";

type Props = {
  society: Society;
  type: SocietyType;
};

export default function SocietyOverview({ society, type }: Props) {
  const socials = society.socialLinks ?? {};
  const socialEntries = [
    { name: "Instagram", url: socials.instagram, Icon: FaInstagram },
    { name: "Facebook", url: socials.facebook, Icon: FaFacebook },
    { name: "LinkedIn", url: socials.linkedin, Icon: FaLinkedin },
    { name: "YouTube", url: socials.youtube, Icon: FaYoutube },
  ].filter(
    (item): item is typeof item & { url: string } =>
      typeof item.url === "string" && item.url.trim().length > 0
  );

  const councilLabel =
    type === "cultural" ? "Socio-Cultural Council" : "Science & Technology Council";

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      {/* Left: Big Logo Card */}
      <div className="lg:col-span-5 flex flex-col items-center">
        <div className="w-full max-w-md rounded-3xl border border-neutral-200 bg-gradient-to-b from-neutral-50/90 to-white p-8 sm:p-12 shadow-sm transition-shadow duration-300 hover:shadow-md flex flex-col items-center justify-center">
          <div className="relative h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 flex items-center justify-center">
            <img
              src={society.logo}
              alt={`${society.name} Logo`}
              className="h-full w-full object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Social links below the logo */}
          {socialEntries.length > 0 && (
            <div className="mt-8 pt-6 border-t border-neutral-200/80 w-full flex flex-col items-center">
              <p className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-3">
                Connect With Us
              </p>
              <div className="flex items-center gap-3">
                {socialEntries.map(({ name, url, Icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${society.name} on ${name}`}
                    title={name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-all hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:scale-105 shadow-sm"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right: Society Details & Description */}
      <div className="lg:col-span-7 flex flex-col items-start text-left">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 border border-blue-200/70">
          <Sparkles size={13} className="text-blue-600" />
          <span>{councilLabel}</span>
        </div>

        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 font-montserrat uppercase">
          {society.name}
        </h1>

        {society.subtitle && (
          <p className="mt-2 text-sm sm:text-base font-bold tracking-widest uppercase text-blue-700">
            {society.subtitle}
          </p>
        )}

        {/* 3-segment divider */}
        <div className="mt-4 mb-6 flex w-36 items-center">
          <span className="h-[2px] flex-1 bg-neutral-300" />
          <span className="h-1 w-12 bg-blue-700" />
          <span className="h-[2px] flex-1 bg-neutral-300" />
        </div>

        {/* About Caption Quote if present */}
        {society.aboutCaption && (
          <blockquote className="mb-6 w-full rounded-r-xl border-l-4 border-blue-700 bg-blue-50/50 p-4 text-sm sm:text-base italic text-neutral-700">
            &ldquo;{society.aboutCaption}&rdquo;
          </blockquote>
        )}

        {/* Description */}
        <div className="text-base sm:text-lg leading-relaxed text-neutral-600 text-justify space-y-4">
          <p className="whitespace-pre-line">{society.aboutDescription}</p>
        </div>

        {/* Highlights */}
        {society.highlights && society.highlights.length > 0 && (
          <div className="mt-6 w-full rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-5 sm:p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 mb-3 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-blue-700" />
              Key Highlights &amp; Activities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {society.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-neutral-700 font-medium"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
