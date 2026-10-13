"use client";

import Image from "next/image";
import Link from "next/link";

export interface ExploreItem {
    label: string;
    href: string;
}

export interface SectionShowcaseProps {
    type: "meet" | "council";
    name: string;
    tagline?: string;
    image: string;
    imageAlt?: string;
    description: string | string[];
    orientation?: "left" | "right";
    exploreItems?: ExploreItem[];
    className?: string;
    imageClassName?: string;
    textClassName?: string;
}

export default function SectionShowcase({
    type,
    name,
    tagline,
    image,
    imageAlt,
    description,
    orientation = "left",
    exploreItems = [],
    className = "",
    imageClassName = "",
    textClassName = "",
}: SectionShowcaseProps) {
    const paragraphs = Array.isArray(description)
        ? description
        : [description];

    const imageFirst = orientation === "left";

    return (
        <section
            className={`flex m-10 flex-col overflow-hidden bg-white text-black md:flex-row ${!imageFirst ? "md:flex-row-reverse" : ""
                } ${className}`}
        >
            {/* IMAGE */}
            <div
                className={`relative min-h-[280px] w-full shrink-0 overflow-hidden bg-neutral-200 md:min-h-[440px] ${type === "meet"
                        ? "md:w-[34%]"
                        : "md:w-1/2 md:min-h-[620px]"
                    } ${imageClassName}`}
            >
                <Image
                    src={image}
                    alt={imageAlt || name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
                />
            </div>

            {/* TEXT CONTENT */}
            <div
                className={`flex min-w-0 flex-1 items-center justify-center bg-white px-6 py-10 text-left text-neutral-700 sm:px-8 md:px-[38px] md:py-14 ${type === "meet"
                        ? "md:w-[66%] md:flex-none md:items-start md:pt-[76px]"
                        : "md:w-1/2"
                    } ${textClassName}`}
            >
                <div className="w-full max-w-[850px]">
                    {/* HEADING */}
                    <h2
                        className={
                            type === "meet"
                                ? "m-0 text-center text-[clamp(27px,2.2vw,40px)] font-bold leading-tight tracking-tight text-black uppercase"
                                : "mb-6 text-[clamp(27px,2.05vw,37px)] font-normal leading-tight tracking-tight text-[#686868]"
                        }
                    >
                        {name}
                    </h2>

                    {/* MEET HEADING ACCENT */}
                    {type === "meet" && (
                        <div className="relative mx-auto my-[17px] mb-[26px] h-[2px] w-[150px] bg-neutral-300">
                            <span className="absolute left-1/3 top-[-1px] h-1 w-[34%] bg-blue-600" />
                        </div>
                    )}

                    {/* TAGLINE */}
                    {tagline && (
                        <p
                            className={`mb-5 text-[17px] leading-relaxed text-neutral-600 md:text-[19px] ${type === "meet" ? "text-center" : ""
                                }`}
                        >
                            {tagline}
                        </p>
                    )}

                    {/* DESCRIPTION */}
                    <div className="text-[16px] font-normal leading-[1.7] tracking-[0.1px] text-[#666] md:text-[17px] lg:text-[18px]">
                        {paragraphs.map((paragraph, index) => (
                            <p
                                key={`${name}-${index}`}
                                className="mb-3 last:mb-0"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* EXPLORE BUTTONS */}
                    {type === "council" && exploreItems.length > 0 && (
                        <div className="mt-5 flex flex-wrap items-center gap-4">
                            {exploreItems.map((item, index) => (
                                <Link
                                    key={`${item.href}-${index}`}
                                    href={item.href}
                                    aria-label={item.label}
                                    className="inline-flex h-[58px] min-w-[170px] items-center justify-center rounded-full bg-black px-7 text-center text-white no-underline transition-colors duration-300 hover:bg-blue-600 focus-visible:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                                >
                                    <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[1.5px]">
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}