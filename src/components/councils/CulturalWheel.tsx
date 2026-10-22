"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, ArrowRight, Compass, Sparkles } from "lucide-react";

export interface ExploreItem {
  label: string;
  href: string;
}

export interface SocietyItem {
  name: string;
  description: string;
  image: string;
  slug: string;
  exploreItems: ExploreItem[];
}

interface CulturalWheelProps {
  societies: SocietyItem[];
  type:'cult' | 'tech'
}

export default function CulturalWheel({ societies, type} : CulturalWheelProps) {
  // activeIndex can increment / decrement indefinitely for infinite looping
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const wheelCardRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef<number>(0);
  const scrollAcc = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  const total = societies.length;
  // Normalized 0..total-1 index for currently focused society
  const normalizedIndex = ((activeIndex % total) + total) % total;
  const currentSociety = societies[normalizedIndex];

  // Target angle in degrees: every society occupies 360 / total degrees
  const angleStep = 360 / total;
  const rotationAngle = -activeIndex * angleStep;

  // Responsive layout tracking
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation handlers
  const rotateToNext = useCallback(() => {
    setActiveIndex((prev) => prev + 1);
  }, []);

  const rotateToPrev = useCallback(() => {
    setActiveIndex((prev) => prev - 1);
  }, []);

  // Clicking any society icon on the periphery rotates wheel via shortest path
  const handleSocietyClick = (targetIndex: number) => {
    const currentNorm = ((activeIndex % total) + total) % total;
    let diff = targetIndex - currentNorm;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    setActiveIndex((prev) => prev + diff);
  };

  // Mouse wheel scroll listener directly on wheel area for natural, snappy rotation
  useEffect(() => {
    const card = wheelCardRef.current;
    if (!card) return;

    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 8) return;

      e.preventDefault();

      const now = Date.now();
      scrollAcc.current += delta;

      if (now - lastScrollTime.current > 160 && Math.abs(scrollAcc.current) > 18) {
        if (scrollAcc.current > 0) {
          rotateToNext();
        } else {
          rotateToPrev();
        }
        lastScrollTime.current = now;
        scrollAcc.current = 0;
      }
    };

    card.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      card.removeEventListener("wheel", onWheel);
    };
  }, [rotateToNext, rotateToPrev]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(deltaY) > 30) {
      if (deltaY < 0) {
        rotateToNext();
      } else {
        rotateToPrev();
      }
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSocietyClick(index);
    }
  };

  // Split title if formatted like "Kalakriti, The Fine Arts Society"
  const titleParts = currentSociety.name.split(/,(.+)/);
  const mainTitle = titleParts[0].trim();
  const subTitle = titleParts[1] ? titleParts[1].trim() : "";

  // Wheel geometry
  const radius = isMobile ? 165 : 265;
  const centerX = isMobile ? 55 : 85;
  const centerY = isMobile ? 225 : 360;
  const hubSize = isMobile ? 96 : 124;
  const iconSize = isMobile ? 54 : 68;

  return (
    <section className="relative w-full min-h-[750px] lg:min-h-[820px] bg-gradient-to-br from-slate-50 via-white to-blue-50/40 text-neutral-900 py-12 px-4 sm:px-8 lg:px-12 flex flex-col justify-center overflow-hidden select-none border-t border-slate-200/80 shadow-inner">

      {/* Section Header */}
      <div className="max-w-9xl mx-auto w-full mb-6 lg:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-5">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-neutral-900 tracking-tight">
            Societies of {type==='cult'?'Cultural':'Technical'} Council
          </h2>
        </div>
      </div>

      {/* Main Container: Wheel on the Left, Focused Society on the Right */}
      <div className="max-w-9xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT SIDE: Semicircular Wheel Container */}
        <div
          ref={wheelCardRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="lg:col-span-4 relative w-full h-[450px] lg:h-[720px] flex items-center justify-start overflow-hidden rounded-3xl cursor-grab active:cursor-grabbing"
        >
          {/* Wheel Background subtle SVG Grid / concentric arcs */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="arcGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#2563eb" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Inner dashed orbital guide */}
            <path
              d={`M ${centerX} ${centerY - (radius - 50)} A ${radius - 50} ${radius - 50} 0 0 1 ${centerX} ${centerY + (radius - 50)}`}
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              fill="none"
            />

            {/* Outer accent track */}
            <path
              d={`M ${centerX} ${centerY - (radius + 45)} A ${radius + 45} ${radius + 45} 0 0 1 ${centerX} ${centerY + (radius + 45)}`}
              stroke="#e2e8f0"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>

          {/* ROTATING WHEEL CARRIER */}
          <div
            className="absolute"
            style={{
              width: radius * 2,
              height: radius * 2,
              left: centerX - radius,
              top: centerY - radius,
              transform: `rotate(${rotationAngle}deg)`,
              transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {societies.map((soc, i) => {
              // Base angle for this society in the circle
              const fixedAngleDeg = i * angleStep;
              const fixedAngleRad = (fixedAngleDeg * Math.PI) / 180;
              const posX = (radius + radius * Math.cos(fixedAngleRad)).toFixed(4);
              const posY = (radius + radius * Math.sin(fixedAngleRad)).toFixed(4);

              // Angular distance from the focused society
              let diffFromActive = i - normalizedIndex;
              if (diffFromActive > total / 2) diffFromActive -= total;
              if (diffFromActive < -total / 2) diffFromActive += total;
              const isFocused = diffFromActive === 0;

              // Compute global angle relative to world space
              const worldAngle = fixedAngleDeg + rotationAngle;
              const worldAngleRad = (worldAngle * Math.PI) / 180;
              const cosVal = Math.cos(worldAngleRad);

              // Semicircle visibility: front semicircle has cosVal >= -0.25
              const isFrontArc = cosVal >= -0.25;
              const opacity = isFocused
                ? 1
                : isFrontArc
                  ? Math.max(0.45, 0.5 + 0.5 * cosVal)
                  : 0.1;

              return (
                <div
                  key={soc.slug}
                  onClick={() => handleSocietyClick(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${soc.name} - ${isFocused ? "focused" : "click to focus"}`}
                  title={soc.name}
                  className="absolute cursor-pointer transition-all duration-300 focus:outline-none"
                  style={{
                    left: `${posX}px`,
                    top: `${posY}px`,
                    width: iconSize,
                    height: iconSize,
                    opacity: opacity,
                    pointerEvents: isFrontArc ? "auto" : "none",
                    // Counter-rotate the child element so the society icon always stays upright!
                    transform: `translate(-50%, -50%) rotate(${-rotationAngle}deg) scale(${isFocused ? 1.25 : 0.92
                      })`,
                    zIndex: isFocused ? 40 : 20,
                  }}
                >
                  <div
                    className={`relative w-full h-full rounded-full p-2 flex items-center justify-center bg-white transition-all duration-300 ${isFocused
                      ? "shadow-2xl shadow-blue-500/50 ring-4 ring-blue-600 border-2 border-white scale-105"
                      : "shadow-md hover:shadow-lg border-2 border-slate-200 hover:border-blue-400 hover:scale-105"
                      }`}
                  >
                    <Image
                      src={soc.image}
                      alt={soc.name}
                      width={iconSize}
                      height={iconSize}
                      className="w-full h-full object-contain select-none pointer-events-none"
                    />

                    {/* Active pulse ring & indicator pointer */}
                    {isFocused && (
                      <>
                        <span className="absolute -inset-1.5 rounded-full border-2 border-blue-400 pointer-events-none" />
                      </>
                    )}
                  </div>

                  {/* Quick label tooltip under active icon */}
                  {isFocused && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1 bg-neutral-900/90 backdrop-blur-sm text-white text-[11px] font-semibold rounded-md whitespace-nowrap shadow-lg pointer-events-none animate-fade-in">
                      {soc.name.split(",")[0]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CENTER HUB: IIT BHUBANESWAR LOGO (iitbbs.png) */}
          <div
            className="absolute z-30 flex flex-col items-center justify-center rounded-full bg-white shadow-2xl border-4 border-slate-100 ring-4 ring-blue-500/25 transition-transform duration-300 hover:scale-105"
            style={{
              left: `${centerX}px`,
              top: `${centerY}px`,
              width: hubSize,
              height: hubSize,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Subtle inner pulse ring */}
            <div className="absolute inset-1 rounded-full border border-blue-200 pointer-events-none" />
            <div className="relative w-3/5 h-3/5 flex items-center justify-center">
              <Image
                src="/icons/iitbbs.png"
                alt="IIT Bhubaneswar"
                width={80}
                height={80}
                priority
                className="w-full h-full object-contain select-none"
              />
            </div>
            <span className="text-[9px] font-extrabold tracking-widest text-blue-900 uppercase mt-0.5">
              IIT BBS
            </span>
          </div>

          {/* Up & Down Rotation Buttons on Wheel Container */}
          <div className="absolute right-4 bottom-4 z-30 flex flex-col gap-2">
            <button
              onClick={rotateToPrev}
              aria-label="Previous society"
              className="p-2.5 rounded-full bg-white/90 hover:bg-blue-600 text-neutral-700 hover:text-white border border-slate-200 shadow-md transition-all duration-200 active:scale-95"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <button
              onClick={rotateToNext}
              aria-label="Next society"
              className="p-2.5 rounded-full bg-white/90 hover:bg-blue-600 text-neutral-700 hover:text-white border border-slate-200 shadow-md transition-all duration-200 active:scale-95"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: ONLY LOAD THE FOCUSED SOCIETY'S DESCRIPTION */}
        <div className="lg:col-span-8 flex flex-col justify-center min-h-[420px] lg:min-h-[620px] px-2 sm:px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSociety.slug}
              initial={{ opacity: 0, x: 28, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -28, filter: "blur(4px)" }}
              transition={{ duration: 0.38, ease: "easeInOut" }}
              className="p-6 sm:p-9 lg:p-10 relative overflow-hidden font-serif"
            >

              {/* Society Meta Tag / Counter */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                  {type==='cult'?'Cultural':'Technical'} Society
                </span>
                <span className="text-xs font-semibold tracking-wider text-neutral-400 font-mono">
                  {String(normalizedIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>

              {/* Society Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-slate-50 border border-slate-200 p-2.5 shadow-sm">
                  <Image
                    src={currentSociety.image}
                    alt={currentSociety.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
                    <span>{mainTitle}</span>
                    {subTitle && (
                      <span className="block text-sm sm:text-base font-semibold text-blue-600 mt-1">
                        {subTitle}
                      </span>
                    )}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-2xl">
                <p className="whitespace-pre-line">{currentSociety.description}</p>
              </div>

              {/* Explore Items Action Buttons */}
              {currentSociety.exploreItems && currentSociety.exploreItems.length > 0 && (
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                  {currentSociety.exploreItems.map((item, idx) => (
                    <Link
                      key={`${item.href}-${idx}`}
                      href={item.href}
                      className="group inline-flex items-center justify-between gap-3 h-[52px] min-w-[190px] px-6 rounded-full bg-neutral-900 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              )}

              {/* Quick Jump Society Indicator Dots */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {societies.map((soc, idx) => {
                    const isCur = idx === normalizedIndex;
                    return (
                      <button
                        key={soc.slug}
                        onClick={() => handleSocietyClick(idx)}
                        aria-label={`Jump to ${soc.name}`}
                        className={`h-2.5 rounded-full transition-all duration-300 ${isCur
                          ? "w-8 bg-blue-600 shadow-sm"
                          : "w-2.5 bg-slate-300 hover:bg-blue-400"
                          }`}
                      />
                    );
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={rotateToPrev}
                    className="text-xs font-semibold text-neutral-500 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={rotateToNext}
                    className="text-xs font-semibold text-neutral-500 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
