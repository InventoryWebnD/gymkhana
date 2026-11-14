"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Dropdown from "@/components/ui/dropdown";
import { MobileAccordion, MobileNavLink, MobileAccordionOption, HamburgerButton } from "./MobileHamburger";

const CouncilOptions: MobileAccordionOption[] = [
    { href: "/councils/tech", label: "Science and Tech" },
    { href: "/councils/cult", label: "Socio Cult" },
    { href: "/councils/sports", label: "Sports" },
];

const MeetOptions: MobileAccordionOption[] = [
    { href: "/meets/tech", label: "Inter IIT Tech Meet" },
    { href: "/meets/cult", label: "Inter IIT Cult Meet" },
    { href: "/meets/sports", label: "Inter IIT Sports Meet" },
    { href: "/meets/gc", label: "General Championship" },
];

const ease = [0.16, 1, 0.3, 1] as const;

/** Every public page opens on a dark hero; only the admin area starts on paper. */
const opensOnPhoto = (path: string) => !path.startsWith("/admin");

export default function TopBar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    // Solid once scrolled; tuck away while scrolling down, return on scroll up.
    useMotionValueEvent(scrollY, "change", (y) => {
        const prev = scrollY.getPrevious() ?? 0;
        setScrolled(y > 40);
        setHidden(y > 240 && y > prev + 2);
        if (y < prev - 2) setHidden(false);
    });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsMobileMenuOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        document.documentElement.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => {
            document.documentElement.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

    return (
        <>
            <motion.header
                animate={{ y: hidden && !isMobileMenuOpen ? "-110%" : "0%" }}
                transition={{ duration: 0.5, ease }}
                className={`fixed inset-x-0 top-0 z-50 text-white transition-[background-color,border-color,backdrop-filter] duration-500 ${
                    (scrolled || !opensOnPhoto(pathname)) && !isMobileMenuOpen
                        ? "border-b border-white/10 bg-[#0a0f16]/80 backdrop-blur-xl"
                        : "border-b border-transparent bg-gradient-to-b from-black/55 to-transparent"
                }`}
            >
                <div className="flex items-center justify-between px-4 py-3 md:px-8">
                    {/* Brand */}
                    <Link href="/home" className="z-50 flex items-center gap-3" onClick={closeMobileMenu}>
                        <Image className="h-10 w-10 object-contain md:h-12 md:w-12" src="/icons/iitbbs.png" alt="" width={48} height={48} preload />
                        <span className="select-none whitespace-nowrap leading-tight">
                            <span className="block text-[15px] font-semibold tracking-tight md:text-base">
                                Students&apos; Gymkhana
                            </span>
                            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                                IIT Bhubaneswar
                            </span>
                        </span>
                    </Link>

                    {/* Desktop navigation */}
                    <nav aria-label="Main" className="hidden items-center gap-5 text-[12px] xl:gap-7 font-medium uppercase tracking-[0.14em] lg:flex">
                        <NavLink href="/home" active={isActive("/home")}>Home</NavLink>
                        <NavLink href="/facilities" active={isActive("/facilities")}>Facilities</NavLink>
                        <Dropdown options={CouncilOptions} active={isActive("/councils")}>Councils</Dropdown>
                        <NavLink href="/fests" active={isActive("/fests")}>Fests</NavLink>
                        <Dropdown options={MeetOptions} active={isActive("/meets")}>Meets</Dropdown>
                        <NavLink href="/constitution" active={isActive("/constitution")}>Constitution</NavLink>
                        <NavLink href="/office" active={isActive("/office")}>Office</NavLink>
                        <Link
                            href="/contact"
                            className="rounded-full border border-white/30 px-4 py-2 transition-colors hover:border-[#ff6a2b] hover:bg-[#ff6a2b] hover:text-[#0a0f16]"
                        >
                            Contact
                        </Link>
                    </nav>

                    <HamburgerButton
                        isOpen={isMobileMenuOpen}
                        onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
                    />
                </div>
            </motion.header>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                        exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#0a0f16] px-6 pb-8 pt-24 text-white lg:hidden"
                    >
                        <motion.nav
                            aria-label="Mobile"
                            className="flex flex-col font-serif text-4xl"
                            initial="hidden"
                            animate="show"
                            variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.25 } } }}
                        >
                            {[
                                <MobileNavLink key="h" href="/home" onClick={closeMobileMenu}>Home</MobileNavLink>,
                                <MobileNavLink key="f" href="/facilities" onClick={closeMobileMenu}>Facilities</MobileNavLink>,
                                <MobileAccordion key="c" title="Councils" options={CouncilOptions} onLinkClick={closeMobileMenu} />,
                                <MobileNavLink key="fe" href="/fests" onClick={closeMobileMenu}>Fests</MobileNavLink>,
                                <MobileAccordion key="m" title="Meets" options={MeetOptions} onLinkClick={closeMobileMenu} />,
                                <MobileNavLink key="co" href="/constitution" onClick={closeMobileMenu}>Constitution</MobileNavLink>,
                                <MobileNavLink key="o" href="/office" onClick={closeMobileMenu}>Office</MobileNavLink>,
                                <MobileNavLink key="ct" href="/contact" onClick={closeMobileMenu} borderBottom={false}>Contact</MobileNavLink>,
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                                    }}
                                >
                                    {item}
                                </motion.div>
                            ))}
                        </motion.nav>
                        <p className="mt-auto pt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                            IIT Bhubaneswar · Argul, Khordha, Odisha 752050
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            aria-current={active ? "page" : undefined}
            className="group relative py-1 transition-colors hover:text-white"
        >
            <span className={active ? "text-white" : "text-white/80 group-hover:text-white"}>{children}</span>
            <span
                className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-[#ff6a2b] transition-transform duration-500 ease-out ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
            />
        </Link>
    );
}
