"use client";

import CouncilCarousel from "@/components/layout/CouncilCarousel";

export default function TechCouncil() {
  return (
    <main className="h-dvh w-full overflow-hidden">
      <CouncilCarousel
        councilName="SOCIO-CULTURAL COUNCIL"
        heightClassName="h-dvh min-h-screen"
        images={[
          "/img/cult-carousel/1.jpg",
          "/img/cult-carousel/2.jpg",
          "/img/cult-carousel/3.jpg",
          "/img/cult-carousel/4.jpg",
        ]}
      />
    </main>
  );
}