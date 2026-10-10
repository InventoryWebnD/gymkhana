"use client";
import TopBar from "@/components/layout/topbar";
import { Carousel, CarouselItem } from "@/components/layout/Carousel";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      {/* <TopBar /> */}
      <Carousel autoSwipeInterval={5000}>
        <CarouselItem src="/img/home-carousel/1.webp" alt="Students' Gymkhana">
        </CarouselItem>
        <CarouselItem src="/img/home-carousel/2.webp" alt="Science and Technology Council">
        </CarouselItem>
        <CarouselItem src="/img/home-carousel/3.webp" alt="Socio-Cultural Council">
        </CarouselItem>
        <CarouselItem src="/img/home-carousel/4.webp" alt="Sports Council">
        </CarouselItem>
        <CarouselItem src="/img/home-carousel/5.webp" alt="Fests and Celebrations">
        </CarouselItem>
        <CarouselItem src="/img/home-carousel/6.webp" alt="Inter-IIT Competitions">
        </CarouselItem>
      </Carousel>
    </main>
  );
}
