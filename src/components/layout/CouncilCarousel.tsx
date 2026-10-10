"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

export interface CarouselProps {
  images: string[];
  councilName: string;
  autoSwipeInterval?: number;
  autoPlay?: boolean;
  pauseOnHover?: boolean;
  heightClassName?: string;
  className?: string;
}

export default function CouncilCarousel({
  images,
  councilName,
  autoSwipeInterval = 5000,
  autoPlay = true,
  pauseOnHover = true,
  heightClassName = "h-dvh min-h-screen",
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const totalSlides = images.length;

  const goToNext = useCallback(() => {
    if (totalSlides <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    if (totalSlides <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (!autoPlay || totalSlides <= 1 || isPaused) return;

    const timer = setInterval(goToNext, autoSwipeInterval);
    return () => clearInterval(timer);
  }, [autoPlay, totalSlides, isPaused, autoSwipeInterval, goToNext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    const start = touchStartXRef.current;
    const end = touchEndXRef.current;

    if (start !== null && end !== null) {
      const distance = start - end;

      if (distance > 50) goToNext();
      else if (distance < -50) goToPrev();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  if (totalSlides === 0) return null;

  return (
    <div
      className={`relative w-full overflow-hidden select-none bg-neutral-950 ${heightClassName} ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label={`${councilName} background carousel`}
    >
      {/* Background slides */}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-out will-change-transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative h-full w-full flex-shrink-0 overflow-hidden"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${totalSlides}`}
          >
            <img
              src={src}
              alt=""
              draggable={false}
              loading={index === 0 ? "eager" : "lazy"}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/25" />
          </div>
        ))}
      </div>

      {/* Fixed council name */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6">
        <h1 className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)] sm:text-4xl md:text-6xl lg:text-7xl">
          {councilName}
        </h1>
      </div>

      {/* Previous button */}
      {totalSlides > 1 && (
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white/50 sm:left-5 sm:h-12 sm:w-12"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Next button */}
      {totalSlides > 1 && (
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-5 sm:h-12 sm:w-12"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Navigation dots */}
      {totalSlides > 1 && (
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
              className={`cursor-pointer rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                currentIndex === index
                  ? "h-2.5 w-8 bg-white shadow-md"
                  : "h-2.5 w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export { CouncilCarousel };