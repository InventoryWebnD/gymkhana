"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Dropdown({ options, children }: { options: { href: string, label: string }[], children: React.ReactNode }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isDropdownOpen) return;

        function handleClickOutside(event: MouseEvent | TouchEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <div ref={dropdownRef} className="relative">
            <button
                type="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                aria-expanded={isDropdownOpen}
            >
                {children}
                <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 min-w-44 rounded-md border border-neutral-200 bg-white shadow-lg py-1.5 z-50 flex flex-col">
                    {options.map((option, index) => (
                        <li key={index}>
                            <Link
                                href={option.href}
                                onClick={() => setIsDropdownOpen(false)}
                                className="block px-4 py-2 text-[13px] text-neutral-700 hover:bg-neutral-100 hover:text-blue-700 transition-colors"
                            >
                                {option.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}