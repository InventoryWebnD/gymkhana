"use client";

import CommonCarousel from "@/components/layout/CommonCarousel";

export default function TechMeet() {
  return (
    <main className="h-dvh w-full overflow-hidden">
      <CommonCarousel
        commonName="INTER IIT TECH MEET"
        heightClassName="h-dvh min-h-screen"
        images={[
          "/img/tech-carousel/tech.jpg",
        ]}
      />
    </main>
  );
}