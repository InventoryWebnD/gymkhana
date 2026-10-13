
import type { Society } from "@/lib/society";

type Props = {
  society: Society;
};

export default function SocietyHappenings({ society }: Props) {
  const events = society.happenings ?? [];

  return (
    <section className="min-w-0 rounded-md border border-neutral-200 p-5 sm:p-7">
      <h2 className="mb-5 text-center text-3xl font-light tracking-wide text-[#686868] sm:text-4xl">
        HAPPENINGS
      </h2>

      {events.length === 0 ? (
        <p className="py-2 text-center text-base text-neutral-600 sm:text-lg">
          No happenings to display right now.
        </p>
      ) : (
        <div className="space-y-5">
          {events.map((event, index) => {
            const content = (
              <div className="flex flex-col gap-4 sm:flex-row">
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-48 w-full shrink-0 rounded object-cover sm:h-28 sm:w-36"
                  />
                )}

                <div className="min-w-0 flex-1">
                  {event.date && (
                    <p className="mb-1 text-sm text-neutral-500">
                      {event.date}
                    </p>
                  )}

                  <h3 className="text-lg font-semibold text-neutral-900">
                    {event.title}
                  </h3>

                  <p className="mt-2 whitespace-pre-line leading-relaxed text-neutral-600">
                    {event.description}
                  </p>
                </div>
              </div>
            );

            return (
              <article
                key={`${event.title}-${index}`}
                className="border-b border-neutral-200 pb-5 last:border-b-0 last:pb-0"
              >
                {event.link ? (
                  <a
                    href={event.link}
                    className="block no-underline transition-opacity hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
