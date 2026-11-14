import type { Society, SocietyType } from "@/lib/society";
import { Sheet } from "@/components/design/PageHero";
import SocietyOverview, { SocietyHero } from "./SocietyOverview";
import SocietySecretary from "./SocietySecretary";
import SocietyTimeline from "./SocietyTimeline";
import SocietySuggestions from "./SocietySuggestions";

type Props = {
  society: Society;
  type: SocietyType;
};

export default function SocietyBody({ society, type }: Props) {
  return (
    <main className="w-full bg-ink" data-society-type={type}>
      <SocietyHero society={society} type={type} />
      <Sheet>
        <SocietyOverview society={society} />
        <SocietySecretary society={society} />
        <SocietyTimeline society={society} />
      </Sheet>
      <SocietySuggestions society={society} currentType={type} />
    </main>
  );
}
