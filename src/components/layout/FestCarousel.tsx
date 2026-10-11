
"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

interface CarouselSlide {
  src: string;
  name: string;
}

export interface CarouselProps {
  images?: string[];
  slides?: CarouselSlide[];
  festName?: string;
  autoSwipeInterval?: number;
  autoPlay?: boolean;
  pauseOnHover?: boolean;
  heightClassName?: string;
  className?: string;
}

export default function FestCarousel({
  images = [],
  slides,
  festName = "",
  autoSwipeInterval = 5000,
  autoPlay = true,
  pauseOnHover = true,
  heightClassName = "h-dvh min-h-screen",
  className = "",
}: CarouselProps) {
  const carouselSlides: CarouselSlide[] =
    slides ??
    images.map((src) => ({
      src,
      name: festName,
    }));

  const totalSlides = carouselSlides.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    if (totalSlides <= 1) return;

    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    if (totalSlides <= 1) return;

    setCurrentIndex(
      (prev) => (prev - 1 + totalSlides) % totalSlides
    );
  }, [totalSlides]);

  useEffect(() => {
    if (!autoPlay || totalSlides <= 1 || isPaused) return;

    const timer = setInterval(goToNext, autoSwipeInterval);

    return () => clearInterval(timer);
  }, [
    autoPlay,
    totalSlides,
    isPaused,
    autoSwipeInterval,
    goToNext,
  ]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    const start = touchStartX.current;
    const end = touchEndX.current;

    if (start !== null && end !== null) {
      const distance = start - end;

      if (distance > 50) goToNext();
      else if (distance < -50) goToPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (totalSlides === 0) return null;

  const currentSlide = carouselSlides[currentIndex];

  return (
    <div
      className={`relative w-full overflow-hidden select-none bg-neutral-950 ${heightClassName} ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label={`${currentSlide.name} carousel`}
    >
      {/* Images */}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carouselSlides.map((slide, index) => (
          <div
            key={`${slide.src}-${index}`}
            className="relative h-full w-full flex-shrink-0 overflow-hidden"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${totalSlides}`}
          >
            <img
              src={slide.src}
              alt=""
              draggable={false}
              loading={index === 0 ? "eager" : "lazy"}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/25" />
          </div>
        ))}
      </div>

      {/* Dynamic fest name */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6">
        <h1
          key={currentSlide.name}
          className="text-center text-3xl font-bold tracking-tight text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)] sm:text-4xl md:text-6xl lg:text-7xl"
        >
          {currentSlide.name}
        </h1>
      </div>

      {/* Previous */}
      {totalSlides > 1 && (
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white/50 sm:left-5 sm:h-12 sm:w-12"
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

      {/* Next */}
      {totalSlides > 1 && (
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-5 sm:h-12 sm:w-12"
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

      {/* Dots: one for every slide */}
      {totalSlides > 1 && (
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {carouselSlides.map((slide, index) => (
            <button
              key={`${slide.src}-dot-${index}`}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.name}`}
              aria-current={
                currentIndex === index ? "true" : undefined
              }
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

export { FestCarousel };
