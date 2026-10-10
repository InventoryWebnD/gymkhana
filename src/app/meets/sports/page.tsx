"use client";

import MeetCarousel from "@/components/layout/MeetCarousel";

export default function sportsMeet() {
  return (
    <main className="h-dvh w-full overflow-hidden">
      <MeetCarousel
        meetName="INTER IIT SPORTS MEET"
        heightClassName="h-dvh min-h-screen"
        images={[
          "/img/sports-carousel/sports (1).jpg",
          "/img/sports-carousel/sports (2).jpg",
          "/img/sports-carousel/sports (3).jpg",
          "/img/sports-carousel/sports (4).jpg",
        ]}
      />
    </main>
  );
}