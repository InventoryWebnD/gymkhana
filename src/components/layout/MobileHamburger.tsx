import Link from "next/link";
import { useState } from "react";

export interface HamburgerButtonProps {
    isOpen: boolean;
    onToggle: () => void;
    className?: string;
}

export function HamburgerButton({
    isOpen,
    onToggle,
    className = "",
}: HamburgerButtonProps) {
    return (
        <button
            type="button"
            onClick={onToggle}
            className={`lg:hidden z-50 p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 cursor-pointer ${className}`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
        >
            {isOpen ? (
                // Close "X" Icon
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                // 3-Bar Hamburger Icon
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            )}
        </button>
    );
}

export interface MobileNavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    borderBottom?: boolean;
    className?: string;
}

export function MobileNavLink({
    href,
    children,
    onClick,
    borderBottom = true,
    className = "",
}: MobileNavLinkProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`py-2.5 ${borderBottom ? "border-b border-zinc-800/70" : ""} hover:text-neutral-300 transition-colors ${className}`}
        >
            {children}
        </Link>
    );
}

export interface MobileAccordionOption {
    href: string;
    label: string;
}

export interface MobileAccordionProps {
    title: string;
    options: MobileAccordionOption[];
    onLinkClick?: () => void;
    borderBottom?: boolean;
    className?: string;
}

export function MobileAccordion({
    title,
    options,
    onLinkClick,
    borderBottom = true,
    className = "",
}: MobileAccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`py-2.5 ${borderBottom ? "border-b border-zinc-800/70" : ""} ${className}`}>
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-full flex items-center justify-between text-left hover:text-neutral-300 transition-colors cursor-pointer"
                aria-expanded={isOpen}
            >
                <span>{title}</span>
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="mt-2 pl-4 flex flex-col space-y-2.5 border-l-2 border-zinc-700">
                    {options.map((option, idx) => (
                        <Link
                            key={idx}
                            href={option.href}
                            onClick={onLinkClick}
                            className="text-sm text-neutral-300 hover:text-white transition-colors py-1"
                        >
                            {option.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}