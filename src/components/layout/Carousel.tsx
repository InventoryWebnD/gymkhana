"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

export interface CarouselItemProps {
    src?: string;
    alt?: string;
    children?: React.ReactNode;
    className?: string;
}

export function CarouselItem({
    src,
    alt = "",
    children,
    className = "",
}: CarouselItemProps) {
    const content = (
        <div className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}>
            {src && (
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover object-center pointer-events-none"
                />
            )}
            {children}
        </div>
    );


    return content;
}

export interface CarouselProps {
    children?: React.ReactNode;
    autoSwipeInterval?: number; // interval in milliseconds, e.g. 5000
    autoPlay?: boolean;
    pauseOnHover?: boolean;
    heightClassName?: string;
    className?: string;
}

const defaultSlides = [
    { href: "/facilities", src: "/img/home-carousel/1.webp", alt: "Students' Gymkhana" },
    { href: "/tech", src: "/img/home-carousel/2.webp", alt: "Science and Technology" },
    { href: "/socio-cult", src: "/img/home-carousel/3.webp", alt: "Socio-Cultural Council" },
    { href: "/sports", src: "/img/home-carousel/4.webp", alt: "Sports Council" },
    { href: "/fests", src: "/img/home-carousel/5.webp", alt: "Festivals and Meets" },
    { href: "/tech-meet", src: "/img/home-carousel/6.webp", alt: "Inter-IIT Competitions" },
];

export default function Carousel({
    children,
    autoSwipeInterval = 5000,
    autoPlay = true,
    pauseOnHover = true,
    heightClassName = "h-[50vh] min-h-[380px] md:h-[65vh] lg:h-[75vh]",
    className = "",
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartXRef = useRef<number | null>(null);
    const touchEndXRef = useRef<number | null>(null);

    // If children are provided, use them; otherwise fallback to default slides
    const items = React.Children.count(children) > 0
        ? React.Children.toArray(children)
        : defaultSlides.map((slide, idx) => (
            <CarouselItem key={idx} >
                <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center pointer-events-none"
                    loading={idx === 0 ? "eager" : "lazy"}
                />
            </CarouselItem>
        ));

    const totalSlides = items.length;

    const goToNext = useCallback(() => {
        if (totalSlides === 0) return;
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const goToPrev = useCallback(() => {
        if (totalSlides === 0) return;
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Auto-swipe at regular intervals
    useEffect(() => {
        if (!autoPlay || totalSlides <= 1 || isPaused) return;

        const timer = setInterval(() => {
            goToNext();
        }, autoSwipeInterval);

        return () => clearInterval(timer);
    }, [autoPlay, totalSlides, isPaused, autoSwipeInterval, goToNext, currentIndex]);

    // Keyboard navigation (Left / Right arrow keys)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                goToPrev();
            } else if (e.key === "ArrowRight") {
                goToNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [goToPrev, goToNext]);

    // Touch swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartXRef.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndXRef.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartXRef.current || !touchEndXRef.current) return;
        const distance = touchStartXRef.current - touchEndXRef.current;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance) {
            goToNext();
        } else if (distance < -minSwipeDistance) {
            goToPrev();
        }

        touchStartXRef.current = null;
        touchEndXRef.current = null;
    };

    if (totalSlides === 0) {
        return null;
    }

    return (
        <div
            className={`absolute top-0 w-full overflow-hidden select-none bg-neutral-950 ${heightClassName} ${className}`}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            aria-roledescription="carousel"
            aria-label="Image Carousel"
        >
            {/* Slides Track */}
            <div
                className="flex w-full h-full transition-transform duration-700 ease-out will-change-transform"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full h-full flex-shrink-0 flex items-center justify-center overflow-hidden"
                        aria-roledescription="slide"
                        aria-label={`${index + 1} of ${totalSlides}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Left Chevron Button */}
            {totalSlides > 1 && (
                <button
                    type="button"
                    onClick={goToPrev}
                    aria-label="Previous slide"
                    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/15 transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer shadow-lg"
                >
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            {/* Right Chevron Button */}
            {totalSlides > 1 && (
                <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Next slide"
                    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/15 transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer shadow-lg"
                >
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}

            {/* Slide Indicators / Navigation Dots */}
            {totalSlides > 1 && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                    {items.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => goToSlide(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            aria-current={currentIndex === idx ? "true" : "false"}
                            className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 ${currentIndex === idx
                                ? "w-8 h-2.5 bg-white shadow-md"
                                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

Carousel.Item = CarouselItem;
export { Carousel };
