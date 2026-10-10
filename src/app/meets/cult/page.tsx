"use client";

import CommonCarousel from "@/components/layout/CommonCarousel";

export default function cultCouncil() {
  return (
    <main className="h-dvh w-full overflow-hidden">
      <CommonCarousel
        commonName="INTER IIT TECH MEET COMING SOON"
        heightClassName="h-dvh min-h-screen"
        images={[
          "/img/cult-carousel/3.jpg",
        ]}
      />
    </main>
  );
}