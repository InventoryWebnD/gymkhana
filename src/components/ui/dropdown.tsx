"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Dropdown({
    options,
    children,
    active = false,
}: {
    options: { href: string; label: string }[];
    children: React.ReactNode;
    active?: boolean;
}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const closeTimer = useRef<number | null>(null);

    useEffect(() => {
        if (!isDropdownOpen) return;

        function handleClickOutside(event: MouseEvent | TouchEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        function handleKey(event: KeyboardEvent) {
            if (event.key === "Escape") setIsDropdownOpen(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        document.addEventListener("keydown", handleKey);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
            document.removeEventListener("keydown", handleKey);
        };
    }, [isDropdownOpen]);

    // Open on hover for mouse users, with a short grace period on leave.
    const open = () => {
        if (closeTimer.current) window.clearTimeout(closeTimer.current);
        setIsDropdownOpen(true);
    };
    const scheduleClose = () => {
        closeTimer.current = window.setTimeout(() => setIsDropdownOpen(false), 160);
    };

    return (
        <div
            ref={dropdownRef}
            className="relative"
            onPointerEnter={(e) => e.pointerType === "mouse" && open()}
            onPointerLeave={(e) => e.pointerType === "mouse" && scheduleClose()}
        >
            <button
                type="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className={`group relative flex cursor-pointer items-center gap-1 py-1 uppercase transition-colors ${
                    active ? "text-white" : "text-white/80 hover:text-white"
                }`}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
            >
                {children}
                <svg
                    className={`h-3 w-3 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span
                    className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-[#ff6a2b] transition-transform duration-500 ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                />
            </button>

            <AnimatePresence>
                {isDropdownOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -6, clipPath: "inset(0% 0% 100% 0% round 14px)" }}
                        animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 14px)" }}
                        exit={{ opacity: 0, y: -6, transition: { duration: 0.15 } }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 top-full z-50 mt-4 flex min-w-56 -translate-x-1/2 flex-col rounded-[14px] border border-white/10 bg-[#0a0f16]/95 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl"
                    >
                        {options.map((option) => (
                            <li key={option.href}>
                                <Link
                                    href={option.href}
                                    onClick={() => setIsDropdownOpen(false)}
                                    className="group/item flex items-center justify-between rounded-[10px] px-3.5 py-2.5 text-[13px] normal-case tracking-normal text-white/75 transition-colors hover:bg-white/[0.07] hover:text-white"
                                >
                                    {option.label}
                                    <span className="-translate-x-1 text-[#ff6a2b] opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100">
                                        →
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
