"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FitWord } from "@/components/design/primitives";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export interface FooterProps {
    className?: string;
}

type FooterLink = { label: string; href: string; external?: boolean };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
    {
        title: "Explore",
        links: [
            { label: "Home", href: "/home" },
            { label: "Facilities", href: "/facilities" },
            { label: "Fests", href: "/fests" },
            { label: "Office", href: "/office" },
            { label: "Constitution", href: "/constitution" },
        ],
    },
    {
        title: "Councils & Meets",
        links: [
            { label: "Science & Technology", href: "/councils/tech" },
            { label: "Socio-Cultural", href: "/councils/cult" },
            { label: "Sports", href: "/councils/sports" },
            { label: "Inter IIT Meets", href: "/meets/tech" },
            { label: "General Championship", href: "/meets/gc" },
        ],
    },
    {
        title: "Useful",
        links: [
            { label: "IIT Bhubaneswar", href: "https://www.iitbbs.ac.in", external: true },
            { label: "Career Development Cell", href: "https://www.iitbbs.ac.in/index.php/home/cdc/", external: true },
            { label: "Gymkhana Constitution (PDF)", href: "/Constitution.pdf", external: true },
        ],
    },
];

const SOCIALS = [
    { label: "Facebook", href: "https://www.facebook.com/SG.IITBhubaneswar/", Icon: FaFacebookF },
    { label: "Instagram", href: "https://www.instagram.com/iitbhubaneswar", Icon: FaInstagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/school/iit-bhubaneswar-official", Icon: FaLinkedinIn },
];


export default function Footer({ className = "" }: FooterProps) {
    return (
        <footer className={`grain relative overflow-hidden bg-[#0a0f16] text-[#f2eee6] ${className}`}>
            <div className="mx-auto max-w-[1600px] px-5 pt-20 sm:px-8 md:pt-32">
                {/* CTA */}
                <div className="grid gap-10 border-b border-white/10 pb-16 md:grid-cols-12 md:items-end md:pb-24">
                    <div className="md:col-span-8">
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
                            <span className="text-[#ff6a2b]">(07)</span> Get involved
                        </p>
                        <h2 className="mt-6 font-serif text-[clamp(2.8rem,7vw,7.5rem)] leading-[0.92]">
                            Got an idea for campus?
                            <br />
                            <em className="text-white/55">Let&apos;s make it happen.</em>
                        </h2>
                    </div>
                    <div className="md:col-span-4 md:justify-self-end">
                        <Link
                            href="/contact"
                            className="group inline-flex h-14 items-center gap-3 rounded-full bg-[#ff6a2b] pl-6 pr-2 text-[15px] font-medium text-[#0a0f16] transition-colors hover:bg-[#f2eee6]"
                        >
                            Contact the Gymkhana
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a0f16] text-[#f2eee6] transition-transform duration-500 group-hover:rotate-45">
                                ↗
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Columns */}
                <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-12 md:py-20">
                    {COLUMNS.map((col) => (
                        <div key={col.title} className="md:col-span-3">
                            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">{col.title}</h3>
                            <ul className="mt-5 space-y-2.5 text-[15px]">
                                {col.links.map((l) => (
                                    <li key={l.label}>
                                        {l.external ? (
                                            <a href={l.href} target="_blank" rel="noopener noreferrer" className="footer-link">
                                                {l.label}
                                                <span aria-hidden="true" className="ml-1 text-white/40">↗</span>
                                            </a>
                                        ) : (
                                            <Link href={l.href} className="footer-link">
                                                {l.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="col-span-2 md:col-span-3">
                        <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">Visit</h3>
                        <address className="mt-5 text-[15px] not-italic leading-relaxed text-white/80">
                            IIT Bhubaneswar
                            <br />
                            Argul, Jatni, Khordha
                            <br />
                            Odisha 752050
                        </address>
                        <LocalTime />
                        <div className="mt-6 flex gap-2">
                            {SOCIALS.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Students' Gymkhana on ${label}`}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-[#ff6a2b] hover:bg-[#ff6a2b] hover:text-[#0a0f16]"
                                >
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Wordmark — sized to fit the full width exactly */}
            <div className="px-4 sm:px-8">
                <FitWord word="Gymkhana" className="text-[17vw] text-[#f2eee6]" />
            </div>

            {/* Sub-footer */}
            <div className="mx-auto flex max-w-[1600px] flex-col gap-4 border-t border-white/10 px-5 py-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <span>Students&apos; Gymkhana, IIT Bhubaneswar</span>
                <span>
                    Designed &amp; built by{" "}
                    <Link href="/councils/tech/webnd" className="text-white/80 underline-offset-4 hover:text-[#ff6a2b] hover:underline">
                        Web and Design Society
                    </Link>
                </span>
                <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="group flex items-center gap-2 self-start uppercase transition-colors hover:text-white sm:self-auto"
                >
                    Back to top
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-[#ff6a2b] group-hover:bg-[#ff6a2b] group-hover:text-[#0a0f16]">
                        ↑
                    </span>
                </button>
            </div>
        </footer>
    );
}

/** Live campus time — rendered after mount so server and client agree. */
function LocalTime() {
    const [time, setTime] = useState<string | null>(null);
    useEffect(() => {
        const fmt = new Intl.DateTimeFormat("en-IN", {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });
        const tick = () => setTime(fmt.format(new Date()));
        tick();
        const id = window.setInterval(tick, 15_000);
        return () => window.clearInterval(id);
    }, []);

    return (
        <p className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
            <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff6a2b] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#ff6a2b]" />
            </span>
            Bhubaneswar <span className="tabular-nums text-white/80">{time ?? "--:--"}</span> IST
        </p>
    );
}
