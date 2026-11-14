"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Photo } from "./photos";

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeInOut = [0.76, 0, 0.24, 1] as const;

/**
 * Each line slides up from behind its own mask. `play` lets a parent control
 * timing (e.g. wait for the intro); otherwise it runs when scrolled into view.
 */
export function MaskLines({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.08,
  play,
  as: Tag = "div",
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  play?: boolean;
  as?: "div" | "h1" | "h2" | "h3" | "p";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const show = play ?? inView;

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ y: "105%" }}
            animate={show ? { y: "0%" } : { y: "105%" }}
            transition={{ duration: 1.1, ease: easeOutExpo, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** "(01) Label" — the running section index used across the page. */
export function SectionLabel({
  index,
  children,
  className = "",
}: {
  index: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] ${className}`}
    >
      <span className="text-accent">({index})</span>
      <span className="h-px w-8 bg-current opacity-30" />
      <span>{children}</span>
    </p>
  );
}

/**
 * Photo that reveals with a curtain wipe as it scrolls into view, while the
 * image inside settles from a slight zoom.
 */
export function CurtainImage({
  photo,
  sizes,
  className = "",
  frameClassName = "aspect-[4/5]",
  imgClassName = "",
  direction = "up",
  delay = 0,
  caption = true,
}: {
  photo: Photo;
  sizes: string;
  className?: string;
  frameClassName?: string;
  imgClassName?: string;
  direction?: "up" | "left";
  delay?: number;
  caption?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const hidden = direction === "up" ? "inset(100% 0% 0% 0%)" : "inset(0% 100% 0% 0%)";

  return (
    <figure ref={ref} className={`group ${className}`}>
      <motion.div
        className={`relative w-full overflow-hidden bg-ink-2 ${frameClassName}`}
        initial={{ clipPath: hidden }}
        animate={{ clipPath: inView ? "inset(0% 0% 0% 0%)" : hidden }}
        transition={{ duration: 1.3, ease: easeInOut, delay }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.35 }}
          animate={{ scale: inView ? 1 : 1.35 }}
          transition={{ duration: 1.8, ease: easeOutExpo, delay }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={sizes}
            placeholder={photo.src.blurDataURL ? "blur" : "empty"}
            className={`object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.04] ${imgClassName}`}
          />
        </motion.div>
      </motion.div>
      {caption && (
        <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
          <span>{photo.caption}</span>
        </figcaption>
      )}
    </figure>
  );
}

/**
 * A single word set as large as it can be while fitting its container exactly.
 * Measures the rendered width and scales the font size, so it stays
 * edge-to-edge at every screen size without clipping any glyphs.
 */
export function FitWord({
  word,
  className = "",
  play,
  delay = 0,
}: {
  word: string;
  className?: string;
  /** Controls the rise-in animation; defaults to "when scrolled into view". */
  play?: boolean;
  delay?: number;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [size, setSize] = useState<number | null>(null);
  const inView = useInView(boxRef, { once: true, amount: 0.3 });
  const show = play ?? inView;

  useEffect(() => {
    const box = boxRef.current;
    const text = textRef.current;
    if (!box || !text) return;
    const fit = () => {
      const current = parseFloat(getComputedStyle(text).fontSize);
      const width = text.getBoundingClientRect().width;
      if (!width) return;
      setSize((current * box.clientWidth) / width);
    };
    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(box);
    return () => ro.disconnect();
  }, []);

  const letters = word.split("");

  return (
    <div ref={boxRef} aria-hidden="true" className="w-full overflow-hidden pt-[0.02em]">
      <span
        ref={textRef}
        className={`inline-block whitespace-nowrap pb-[0.06em] font-sans font-extrabold uppercase leading-[0.8] [font-stretch:150%] ${className}`}
        style={size ? { fontSize: `${size}px` } : undefined}
      >
        {letters.map((ch, i) => (
          <motion.span
            key={i}
            className="inline-block"
            // Tighten with margins (not letter-spacing) so the last glyph is never pushed past the edge.
            style={{ marginRight: i < letters.length - 1 ? "-0.02em" : 0 }}
            initial={{ y: "110%" }}
            animate={{ y: show ? "0%" : "110%" }}
            transition={{ duration: 1.2, ease: easeOutExpo, delay: delay + i * 0.045 }}
          >
            {ch}
          </motion.span>
        ))}
      </span>
    </div>
  );
}

/** Fade-and-rise on first view. */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 30,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: easeOutExpo, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Rounded button-link with the diagonal arrow that slides through on hover. */
export function PillLink({
  href,
  children,
  variant = "solid",
  tone = "ink",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  tone?: "ink" | "paper";
  external?: boolean;
}) {
  const solid =
    tone === "ink"
      ? "bg-ink text-paper hover:bg-accent hover:text-ink"
      : "bg-paper text-ink hover:bg-accent";
  const ghost =
    tone === "ink"
      ? "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper"
      : "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink";
  const className = `group inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13px] font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
    variant === "solid" ? solid : ghost
  }`;
  const arrow = (
    <span aria-hidden="true" className="relative inline-block h-4 w-4 overflow-hidden">
      <span className="absolute inset-0 transition-transform duration-500 ease-out-expo group-hover:-translate-y-full group-hover:translate-x-full">
        ↗
      </span>
      <span className="absolute inset-0 -translate-x-full translate-y-full transition-transform duration-500 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0">
        ↗
      </span>
    </span>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      {arrow}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
      {arrow}
    </Link>
  );
}
