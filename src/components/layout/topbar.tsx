"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Dropdown from "@/components/ui/dropdown";
import { MobileAccordion, MobileNavLink, MobileAccordionOption, HamburgerButton } from "./MobileHamburger";

export default function TopBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu on Esc key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const CouncilOptions: MobileAccordionOption[] = [
        {
            href: "/councils/tech",
            label: "Science and Tech",
        },
        {
            href: "/councils/cult",
            label: "Socio Cult",
        },
        {
            href: "/councils/sports",
            label: "Sports",
        },
    ];

    const MeetOptions: MobileAccordionOption[] = [
        { href: "/meets/tech", label: "Inter IIT Tech Meet" },
        { href: "/meets/cult", label: "Inter IIT Cult Meet" },
        { href: "/meets/sports", label: "Inter IIT Sports Meet" },
        { href: "/meets/gc", label: "General Championship" },
    ];

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4 w-full fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-zinc-950/90 via-zinc-950/50 to-transparent text-white">
            {/* Brand / Logo */}
            <Link href="/home" className="flex items-center gap-3 z-50" onClick={closeMobileMenu}>
                <img className="w-12 h-12 md:w-16 md:h-16 object-contain" src="/icons/iitbbs.png" alt="Gymkhana Logo" />
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider font-montserrat select-none">
                    STUDENTS&apos; GYMKHANA
                </h1>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium tracking-wide">
                <Link href="/home" className="hover:text-neutral-300 transition-colors">
                    HOME
                </Link>
                <Link href="/facilities" className="hover:text-neutral-300 transition-colors">
                    FACILITIES
                </Link>
                <Dropdown options={CouncilOptions}>COUNCILS</Dropdown>
                <Link href="/fests" className="hover:text-neutral-300 transition-colors">
                    FESTS
                </Link>

                <Dropdown options={MeetOptions}>MEETS</Dropdown>
                <Link href="/constitution" className="hover:text-neutral-300 transition-colors">
                    CONSTITUTION
                </Link>
                <Link href="/office" className="hover:text-neutral-300 transition-colors">
                    OFFICE
                </Link>
                <Link href="/contact" className="hover:text-neutral-300 transition-colors">
                    CONTACT US
                </Link>
            </nav>

            {/* Modular Hamburger Button */}
            <HamburgerButton
                isOpen={isMobileMenuOpen}
                onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
            />

            {/* Modular Mobile Drawer Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-zinc-950/95 backdrop-blur-xl z-40 flex flex-col pt-24 px-6 pb-8 overflow-y-auto transition-all animate-in fade-in duration-200">
                    <nav className="flex flex-col space-y-4 text-base font-medium tracking-wide">
                        <MobileNavLink href="/home" onClick={closeMobileMenu}>
                            HOME
                        </MobileNavLink>

                        <MobileNavLink href="/facilities" onClick={closeMobileMenu}>
                            FACILITIES
                        </MobileNavLink>

                        {/* Reusable Mobile Accordion for Councils */}
                        <MobileAccordion
                            title="COUNCILS"
                            options={CouncilOptions}
                            onLinkClick={closeMobileMenu}
                        />

                        <MobileNavLink href="/fests" onClick={closeMobileMenu}>
                            FESTS
                        </MobileNavLink>

                        {/* Reusable Mobile Accordion for Meets */}
                        <MobileAccordion
                            title="MEETS"
                            options={MeetOptions}
                            onLinkClick={closeMobileMenu}
                        />

                        <MobileNavLink href="/constitution" onClick={closeMobileMenu}>
                            CONSTITUTION
                        </MobileNavLink>

                        <MobileNavLink href="/contact" onClick={closeMobileMenu} borderBottom={false}>
                            CONTACT US
                        </MobileNavLink>
                    </nav>
                </div>
            )}
        </header>
    );
}