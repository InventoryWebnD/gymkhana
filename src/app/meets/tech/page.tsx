"use client";

import MeetCarousel from "@/components/layout/MeetCarousel";

export default function TechMeet() {
  return (
    <main className="h-dvh w-full overflow-hidden">
      <MeetCarousel
        meetName="INTER IIT TECH MEET"
        heightClassName="h-dvh min-h-screen"
        images={[
          "/img/tech-carousel/tech.jpg",
        ]}
      />
    </main>
  );
}