"use client";

import MeetCarousel from "@/components/layout/MeetCarousel";

export default function cultCouncil() {
  return (
    <main className="h-dvh w-full overflow-hidden">
      <MeetCarousel
        meetName="INTER IIT TECH MEET COMING SOON"
        heightClassName="h-dvh min-h-screen"
        images={[
          "/img/cult-carousel/3.jpg",
        ]}
      />
    </main>
  );
}