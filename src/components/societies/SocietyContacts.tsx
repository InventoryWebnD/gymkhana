
import type { Society, SocietyContact } from "@/lib/society";

type Props = {
  society: Society;
};

function ContactCard({ contact }: { contact: SocietyContact }) {
  return (
    <article className="flex min-w-0 flex-col items-center rounded-lg border border-neutral-200 bg-white p-6 text-center shadow-sm">
      {contact.image && (
        <img
          src={contact.image}
          alt={contact.name}
          className="mb-4 h-28 w-28 rounded-full object-cover"
        />
      )}

      <h4 className="text-lg font-semibold text-neutral-900">
        {contact.name}
      </h4>

      <p className="text-sm text-neutral-500">{contact.role}</p>

      {contact.email && (
        <a
          href={`mailto:${contact.email}`}
          className="mt-2 break-all text-sm text-blue-700 hover:underline"
        >
          {contact.email}
        </a>
      )}

      {contact.phone && (
        <a
          href={`tel:${contact.phone}`}
          className="mt-1 text-sm text-neutral-600 hover:text-blue-700"
        >
          {contact.phone}
        </a>
      )}
    </article>
  );
}

export default function SocietyContacts({ society }: Props) {
  const secretary = society.contacts?.secretary;
  const governors = society.contacts?.governors ?? [];

  if (!secretary && governors.length === 0) return null;

  return (
    <section className="mt-16 border-t border-neutral-200 pt-10">
      <h2 className="mb-10 text-center text-3xl font-light text-[#686868] sm:text-4xl">
        CONTACTS
      </h2>

      {secretary && (
        <div className="mb-10">
          <h3 className="mb-5 text-center text-xl font-semibold text-neutral-700">
            Secretary
          </h3>

          <div className="mx-auto max-w-sm">
            <ContactCard contact={secretary} />
          </div>
        </div>
      )}

      {governors.length > 0 && (
        <div>
          <h3 className="mb-5 text-center text-xl font-semibold text-neutral-700">
            Governors
          </h3>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {governors.map((governor) => (
              <ContactCard
                key={`${governor.name}-${governor.email ?? ""}`}
                contact={governor}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
