
import type { Society } from "@/lib/society";

type Props = {
  society: Society;
};

export default function SocietyHero({ society }: Props) {
  return (
    <section
      className="relative flex min-h-[540px] w-full items-center justify-center overflow-hidden bg-neutral-800 bg-cover bg-center text-white md:h-[min(800px,85vh)] md:min-h-[650px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url("${society.bannerImage}")`,
      }}
    >
      <div className="relative z-10 flex w-full flex-col items-center px-5 py-16 text-center">
        <img
          src={society.logo}
          alt={`${society.name} logo`}
          className="mb-5 h-20 w-20 object-contain sm:h-24 sm:w-24"
        />

        <h1 className="text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
          {society.name}
        </h1>

        {society.subtitle && (
          <p className="mt-6 text-lg font-normal sm:text-2xl md:text-3xl">
            {society.subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
