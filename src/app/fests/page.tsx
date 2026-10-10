
"use client";

import FestCarousel from "@/components/layout/FestCarousel.tsx";

const festSlides = [
  {
    name: "PRAVAAH '27",
    src: "/img/fest/pravaah/a1.jpg",
  },
  {
    name: "PRAVAAH '27",
    src: "/img/fest/pravaah/a2.jpg",
  },
  {
    name: "PRAVAAH '27",
    src: "/img/fest/pravaah/a3.jpg",
  },
  {
    name: "PRAVAAH '27",
    src: "/img/fest/pravaah/a4.jpg",
  },
  {
    name: "ASHVAMEDHA",
    src: "/img/fest/ashvamedha/as.jpg",
  },
  {
    name: "ASHVAMEDHA",
    src: "/img/fest/ashvamedha/as1.jpg",
  },
  {
    name: "ASHVAMEDHA",
    src: "/img/fest/ashvamedha/as2.jpg",
  },
  {
    name: "ASHVAMEDHA",
    src: "/img/fest/ashvamedha/as5.jpg",
  },
];

export default function FestPage() {
  return (
    <main className="h-dvh w-full overflow-hidden">
      <FestCarousel
        slides={festSlides}
        autoSwipeInterval={5000}
        autoPlay={true}
        pauseOnHover={true}
        heightClassName="h-dvh min-h-screen"
      />
    </main>
  );
}
