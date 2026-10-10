"use client";

import React from "react";
import Link from "next/link";

export interface FooterLink {
    label: string;
    href: string;
    isExternal?: boolean;
}

export interface FooterProps {
    className?: string;
}

const usefulLinks: FooterLink[] = [
    {
        label: "IIT Bhubaneswar",
        href: "https://www.iitbbs.ac.in",
        isExternal: true,
    },
    {
        label: "Gymkhana Constitution",
        href: "/constitution",
        isExternal: false,
    },
    {
        label: "Career Development Cell",
        href: "https://www.iitbbs.ac.in/index.php/home/cdc/",
        isExternal: true,
    },
];

export default function Footer({ className = "" }: FooterProps) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className={`w-full bg-[#0c0c0e] text-neutral-300 font-sans ${className}`}>
            {/* Top Section with 3 Columns */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
                    {/* Column 1: Useful Links */}
                    <div>
                        <div className="mb-6">
                            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-2">
                                USEFUL LINKS
                            </h3>
                            <div className="w-full h-[2px] bg-neutral-800 relative">
                                <div className="absolute top-0 left-0 w-10 h-[2px] bg-blue-600" />
                            </div>
                        </div>

                        <ul className="space-y-3.5 text-sm">
                            {usefulLinks.map((item, idx) => (
                                <li key={idx}>
                                    {item.isExternal ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                                        >
                                            <span className="text-neutral-500 group-hover:text-blue-500 font-semibold transition-colors">
                                                &gt;
                                            </span>
                                            <span>{item.label}</span>
                                        </a>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="group flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                                        >
                                            <span className="text-neutral-500 group-hover:text-blue-500 font-semibold transition-colors">
                                                &gt;
                                            </span>
                                            <span>{item.label}</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Contact Us */}
                    <div>
                        <div className="mb-6">
                            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-2">
                                CONTACT US
                            </h3>
                            <div className="w-full h-[2px] bg-neutral-800 relative">
                                <div className="absolute top-0 left-0 w-10 h-[2px] bg-blue-600" />
                            </div>
                        </div>

                        <div className="space-y-1.5 text-sm text-neutral-300 leading-relaxed">
                            <p>IIT Bhubaneswar</p>
                            <p>At Arugul, Jatani</p>
                            <p>Khordha, Odisha - 752050</p>
                        </div>
                    </div>

                    {/* Column 3: Connect With Us */}
                    <div>
                        <div className="mb-6">
                            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-2">
                                CONNECT WITH US
                            </h3>
                            <div className="w-full h-[2px] bg-neutral-800 relative">
                                <div className="absolute top-0 left-0 w-10 h-[2px] bg-blue-600" />
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/SG.IITBhubaneswar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Connect on Facebook"
                                className="w-10 h-10 rounded-full bg-neutral-800/80 hover:bg-blue-600 text-neutral-200 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                            >
                                {/* Facebook 'f' icon */}
                                <svg
                                    className="w-4 h-4 fill-current"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Sub-Footer Bar */}
            <div className="bg-black py-4 px-6 sm:px-8 lg:px-12 border-t border-neutral-900/60">
                <div className="max-w-7xl mx-auto flex items-center justify-between relative min-h-[44px]">
                    {/* Centered Attribution Text */}
                    <div className="w-full text-center">
                        <p className="text-xs sm:text-sm text-neutral-400">
                            Developed by Web and Design Society, IIT Bhubaneswar
                        </p>
                    </div>

                    {/* Scroll to Top Chevron Button */}
                    <button
                        type="button"
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
