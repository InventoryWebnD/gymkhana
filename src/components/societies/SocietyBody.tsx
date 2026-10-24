import type { Society, SocietyType } from "@/lib/society";
import SocietyOverview from "./SocietyOverview";
import SocietySecretary from "./SocietySecretary";
import SocietyTimeline from "./SocietyTimeline";
import SocietySuggestions from "./SocietySuggestions";

type Props = {
  society: Society;
  type: SocietyType;
};

export default function SocietyBody({ society, type }: Props) {
  return (
    <main
      className="w-full bg-white text-neutral-800 pt-24 sm:pt-28 md:pt-32 pb-24"
      data-society-type={type}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 space-y-20 md:space-y-28">
        {/* 1. Big Logo on Left, Description on Right */}
        <SocietyOverview society={society} type={type} />

        {/* 2. Secretary (Horizontal on desktop, Vertical on mobile) */}
        <SocietySecretary society={society} />

        {/* 3. Happenings Timeline with Scroll-Triggered Flow */}
        <SocietyTimeline society={society} />

        {/* 4. Suggestions to Other Societies */}
        <SocietySuggestions society={society} currentType={type} />
      </div>
    </main>
  );
}
