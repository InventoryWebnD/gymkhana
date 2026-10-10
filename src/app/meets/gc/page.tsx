"use client";

import MeetCarousel from "@/components/layout/MeetCarousel";

export default function gcMeet() {
  return (
    <main className="h-dvh w-full overflow-hidden">
      <MeetCarousel
        meetName="GENERAL CHAMPIONSHIP"
        heightClassName="h-dvh min-h-screen"
        images={[
          "/img/gc-carousel/gc1.jpg",
          "/img/gc-carousel/gc2.jpg",
          "/img/gc-carousel/gc3.jpg",
          "/img/gc-carousel/gc4.jpg",
          "/img/gc-carousel/gc5.jpg",
          "/img/gc-carousel/gc6.jpg",
          "/img/gc-carousel/gc7.jpg",
        ]}
      />
    </main>
  );
}