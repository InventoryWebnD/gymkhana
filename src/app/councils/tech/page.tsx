"use client";

import CouncilCarousel from "@/components/layout/CouncilCarousel";

export default function TechCouncil() {
  return (
    <main className="h-dvh w-full overflow-hidden">
      <CouncilCarousel
        councilName="TECHNICAL COUNCIL"
        heightClassName="h-dvh min-h-screen"
        images={[
          "/img/tech-carousel/1.jpg",
          "/img/tech-carousel/2.jpeg",
          "/img/tech-carousel/3.jpg",
          "/img/tech-carousel/4.jpg",
          "/img/tech-carousel/5.jpg",
        ]}
      />
    </main>
  );
}