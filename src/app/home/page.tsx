"use client";
import TopBar from "@/components/layout/topbar";
import { Carousel, CarouselItem } from "@/components/layout/Carousel";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-between">
      <TopBar />
      <div className="relative w-full h-[50vh] min-h-[380px] md:h-[65vh] lg:h-[75vh]">
        <Carousel autoSwipeInterval={5000}>
          <CarouselItem src="/img/home-carousel/1.webp" alt="Students' Gymkhana" />
          <CarouselItem src="/img/home-carousel/2.webp" alt="Science and Technology Council" />
          <CarouselItem src="/img/home-carousel/3.webp" alt="Socio-Cultural Council" />
          <CarouselItem src="/img/home-carousel/4.webp" alt="Sports Council" />
          <CarouselItem src="/img/home-carousel/5.webp" alt="Fests and Celebrations" />
          <CarouselItem src="/img/home-carousel/6.webp" alt="Inter-IIT Competitions" />
        </Carousel>
      </div>
      <Footer />
    </main>
  );
}
