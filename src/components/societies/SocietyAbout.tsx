
import type { Society } from "@/lib/society";

type Props = {
  society: Society;
};

export default function SocietyAbout({ society }: Props) {
  return (
    <section className="grid grid-cols-1 items-center gap-8 py-10 md:grid-cols-2 md:gap-12 lg:gap-20 lg:py-16">
      <div className="min-w-0 text-center">
        <img
          src={society.aboutImage}
          alt={`${society.name} activities`}
          className="mx-auto block h-auto max-h-[470px] w-full object-contain"
        />

        {society.aboutCaption && (
          <p className="mt-7 text-base font-bold leading-relaxed text-neutral-600 sm:text-lg">
            {society.aboutCaption}
          </p>
        )}
      </div>

      <div className="min-w-0 text-neutral-600">
        <h2 className="mb-6 text-center text-3xl font-normal text-[#686868] sm:text-4xl">
          {society.aboutTitle || "About Us"}
        </h2>

        <p className="whitespace-pre-line text-base leading-relaxed sm:text-lg">
          {society.aboutDescription}
        </p>

        {!!society.highlights?.length && (
          <div className="mt-6">
            <p className="mb-3 text-center text-base sm:text-lg">
              Some of our best works include:
            </p>

            <ul className="list-disc space-y-1 pl-6 text-base text-neutral-900 sm:text-lg">
              {society.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
