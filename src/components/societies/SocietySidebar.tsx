
import Link from "next/link";
import {
  ExternalLink,
} from "lucide-react";
import type { Society } from "@/lib/society";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

type Props = {
  society: Society;
};

export default function SocietySidebar({ society }: Props) {
  const socials = society.socialLinks ?? {};
  const otherSocieties = society.otherSocieties ?? [];

  const socialEntries = [
    { name: "Instagram", url: socials.instagram, Icon: FaInstagram },
    { name: "Facebook", url: socials.facebook, Icon: FaFacebook },
    { name: "LinkedIn", url: socials.linkedin, Icon: FaLinkedin },
    { name: "YouTube", url: socials.youtube, Icon: FaYoutube },
  ].filter(
    (item): item is typeof item & { url: string } =>
      typeof item.url === "string" && item.url.length > 0
  );

  return (
    <aside className="flex min-w-0 flex-col gap-8">
      <section className="rounded-lg border border-neutral-200 bg-white p-5 shadow-md sm:p-6">
        <h2 className="mb-6 rounded-sm bg-[#0808f5] px-3 py-1 text-center text-xl font-bold text-white sm:text-2xl">
          FOLLOW US ON
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {socialEntries.map(({ name, url, Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${society.name} on ${name}`}
              title={name}
              className="text-neutral-500 transition-colors hover:text-blue-600"
            >
              <Icon size={23} strokeWidth={2} />
            </a>
          ))}

          {socialEntries.length === 0 && (
            <p className="text-sm text-neutral-500">
              Social links coming soon.
            </p>
          )}
        </div>
      </section>

      <section className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-6">
        <h2 className="mb-5 rounded-sm bg-[#0808f5] px-3 py-1 text-center text-xl font-bold text-white sm:text-2xl">
          OTHER SOCIETIES
        </h2>

        <div className="flex flex-col gap-4">
          {otherSocieties.map((other) => (
            <Link
              href={other.link}
              key={other.name}
              className="group grid grid-cols-[68px_minmax(0,1fr)_16px] items-center gap-4 py-2 text-neutral-900 no-underline"
            >
              <img
                src={other.logo}
                alt=""
                className="h-16 w-[68px] object-contain"
              />

              <span className="text-base font-normal transition-colors group-hover:text-blue-600 sm:text-lg">
                {other.name.toUpperCase()}
              </span>

              <ExternalLink
                size={14}
                className="text-neutral-400 opacity-0 transition-opacity group-hover:opacity-100"
              />
            </Link>
          ))}

          {otherSocieties.length === 0 && (
            <p className="text-center text-sm text-neutral-500">
              No other societies listed.
            </p>
          )}
        </div>
      </section>
    </aside>
  );
}
