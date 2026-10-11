"use client";

import CommonCarousel from "@/components/layout/CommonCarousel";

export default function SportCouncil() {
  return (
    <main className="h-dvh w-full overflow-hidden">
      <CommonCarousel
        commonName="SPORTS COUNCIL"
        heightClassName="h-dvh min-h-screen"
        images={[
          "/img/sports-carousel/1.jpg",
          "/img/sports-carousel/2.jpg",
          "/img/sports-carousel/3.JPG",
          "/img/sports-carousel/4.JPG",
          "/img/sports-carousel/5.JPG",
          "/img/sports-carousel/6.JPG",
          "/img/sports-carousel/7.JPG",
          "/img/sports-carousel/8.JPG",
          "/img/sports-carousel/9.JPG",
          "/img/sports-carousel/10.JPG",
        ]}
      />
    </main>
  );
}