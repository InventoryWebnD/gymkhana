"use client";

import CommonCarousel from "@/components/layout/CommonCarousel";

export default function TechCouncil() {
  return (
    <main className="h-dvh w-full overflow-hidden">
      <CommonCarousel
        commonName="SOCIO-CULTURAL COUNCIL"
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