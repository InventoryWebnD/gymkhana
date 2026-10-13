
import type { Society, SocietyType } from "@/lib/society";
import SocietyHero from "./SocietyHero";
import SocietyAbout from "./SocietyAbout";
import SocietyHappenings from "./SocietyHappenings";
import SocietySidebar from "./SocietySidebar";
import SocietyContacts from "./SocietyContacts";

type Props = {
  society: Society;
  type: SocietyType;
};

export default function SocietyBody({ society, type }: Props) {
  return (
    <main
      className="w-full bg-white text-neutral-700"
      data-society-type={type}
    >
      <SocietyHero society={society} />

      <div className="mx-auto w-[94%] max-w-[1600px] py-8 sm:py-12">
        <SocietyAbout society={society} />

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(300px,0.95fr)] lg:gap-12">
          <SocietyHappenings society={society} />
          <SocietySidebar society={society} />
        </div>

        <SocietyContacts society={society} />
      </div>
    </main>
  );
}
