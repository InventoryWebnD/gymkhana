import { IntroProvider } from "@/components/home/intro";
import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import Councils from "@/components/home/Councils";
import ZoomGallery from "@/components/home/ZoomGallery";
import Moments from "@/components/home/Moments";
import Marquee from "@/components/home/Marquee";
import Fests from "@/components/home/Fests";
import PresidentNote from "@/components/home/PresidentNote";

export default function Home() {
  return (
    <main className="w-full bg-ink">
      {/* Without JS the intro can't play, so never let it cover the page. */}
      <noscript>
        <style>{`.intro-overlay{display:none!important}html{overflow:auto!important}`}</style>
      </noscript>

      <IntroProvider>
        {/* The hero is sticky; the About section slides up over it like a curtain. */}
        <div className="relative">
          <Hero />
          <Manifesto />
        </div>
        <Councils />
        <ZoomGallery />
        <Moments />
        <Marquee />
        <Fests />
        <PresidentNote />
      </IntroProvider>
    </main>
  );
}
