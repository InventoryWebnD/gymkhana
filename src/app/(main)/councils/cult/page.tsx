"use client";

import CommonCarousel from "@/components/layout/CommonCarousel";
import SectionShowcase from "@/components/ui/SectionShowcase";

const societies = [
  {
    name: "Kalakriti, The Fine Arts Society",
    description:
      "The world we live in is a colourful and majestic place, rich in culture and tradition, waiting for mankind to uncover its full beauty. The Fine Arts Society intends to inculcate a sense of appreciation for this beauty in the minds of the students. Members of the society organize workshops to nurture the artist in the students all through the year and also take up the major responsibility of decorating the campus during all special occasions including Diwali.",
    image: "/img/cult-societies/kalakriti.jpg",
    slug: "kalakriti",
    exploreItems: [
      {
        label: "Explore Kalakriti",
        href: "/councils/cult/kalakriti",
      },
    ],
  },
  {
    name: "D Groovers, The Dance Society",
    description:
      "Widely regarded as the pinnacle of all performing arts, dance requires the unwavering devotion of the mind, body and soul of an artist. The Dance Society provides a platform for students passionate about dance to channel their emotions into their craft. Members of the society conduct events and workshops for dance enthusiasts and also take an active part in several inter-collegiate events throughout the year. The dance production is one of the most entertaining events held in the institute, and it brilliantly showcases the rich culture and heritage of India and the institute itself.",
    image: "/img/cult-societies/d-groovers.jpg",
    slug: "d-groovers",
    exploreItems: [
      {
        label: "Explore D Groovers",
        href: "/councils/cult/d-groovers",
      },
    ],
  },
  {
    name: "The Fourth Wall, The Dramatics Society",
    description:
      "A family knit together by the love for theatre, the Dramatics Society has tirelessly worked for the last nine years to become one of the best of its kind. The objective of the Dramatics Society is to foster social and intellectual activity among the students and to create an interest in Drama and Theatre. Arguably the most active society of the institute, its members perform at almost every event held in the institute with the aim of creating awareness about various issues plaguing our society. The Fourth Wall has also represented the institute at various inter-collegiate cultural events organised throughout the country.",
    image: "/img/cult-societies/fourth-wall.jpg",
    slug: "fourth-wall",
    exploreItems: [
      {
        label: "Explore Fourth Wall",
        href: "/councils/cult/fourth-wall",
      },
    ],
  },
  {
    name: "Aaroh, The Music Society",
    description:
      "Aaroh, the Music Society of IIT Bhubaneswar aims to bring out the musical talent among the students. What sets us IITians apart from the rest is our all round development, and Aaroh contributes to this by shaping students into talented performers with their own unique identities. Not only does the society conduct various events and workshops on musical instruments for amateurs, it also takes on the responsibility of organizing a production each semester to entertain and enthral the students.",
    image: "/img/cult-societies/aaroh.jpg",
    slug: "aaroh",
    exploreItems: [
      {
        label: "Explore Aaroh",
        href: "/councils/cult/aaroh",
      },
    ],
  },
  {
    name: "The Literary Society",
    description:
      "The ability to express your thoughts and ideas effectively is of paramount importance to succeed in your career as well as life in general. Panacea and Abhivyakti work for the development of the communication and language skills of the students in English and Hindi, respectively, while the Quiz Society is an open society aimed at encouraging students to expand their knowledge beyond the conventional and establishing a relationship between theory and application of the learnt concepts in a fun manner.",
    image: "/img/cult-societies/literary.jpg",
    slug: "literary",
    exploreItems: [
      {
        label: "Explore Abhivyakti",
        href: "/councils/cult/abhivyakti",
      },
      {
        label: "Explore Panacea",
        href: "/councils/cult/panacea",
      },
      {
        label: "Explore QuizSoc",
        href: "/councils/cult/quiz-society",
      },
    ],
  },
  {
    name: "Cinewave, The Cinematics Society",
    description:
      "Good cinema is what results from an artistic combination of all the performing arts, brought together by the right technical expertise. Cinewave, the movie-making society of IIT Bhubaneswar, provides students with an eye for filmmaking an opportunity to enhance their cinematic talent and present their stories to the world through short-films, documentaries and advertisements. The most acclaimed society of the institute, Cinewave has participated in various national level competitions and inter-collegiate events, winning laurels for the institute and setting a benchmark in terms of filmmaking.",
    image: "/img/cult-societies/cinewave.jpg",
    slug: "cinewave",
    exploreItems: [
      {
        label: "Explore Cinewave",
        href: "/councils/cult/cinewave",
      },
    ],
  },
  {
    name: "Souls for Solace, The Social Welfare Society",
    description:
      "'Souls for Solace' is a platform for those who are not satisfied with merely making a living and want to contribute towards creating a better society to live in. In collaboration with various NGOs, the society believes strongly in the principles of sharing what we have with the less fortunate and has undertaken initiatives like blood donation camps, educating the poor, books and clothes donation drives, and much more. It also provides the platform to discuss and implement innovative ideas that could help create a better future.",
    image: "/img/cult-societies/souls-for-solace.jpg",
    slug: "souls-for-solace",
    exploreItems: [
      {
        label: "Explore Souls for Solace",
        href: "/councils/cult/souls-for-solace",
      },
    ],
  },
  {
    name: "CLIX, The Photography Society",
    description:
      "The Photography Society is the most elite society of IIT Bhubaneswar that takes beginners and amateur photographers under its wings and teaches them different techniques of photography by organizing workshops and competitions on photography and post-processing. CLIX captures major happenings of the institute and provides the outside world glimpses of its work through its Facebook page.",
    image: "/img/cult-societies/clix.jpg",
    slug: "clix",
    exploreItems: [
      {
        label: "Explore CLIX",
        href: "/councils/cult/clix",
      },
    ],
  },
];

export default function SocioCulturalCouncil() {
  return (
    <main className="w-full">
      {/* Existing socio-cultural carousel */}
      <section className="h-dvh w-full overflow-hidden">
        <CommonCarousel
          commonName="SOCIO-CULTURAL COUNCIL"
          heightClassName="h-dvh min-h-screen"
          images={[
            "/img/cult-carousel/1.jpg",
            "/img/cult-carousel/2.jpg",
            "/img/cult-carousel/3.jpg",
            "/img/cult-carousel/4.jpg",
          ]}
        />
      </section>

      {/* Societies with alternating image orientation */}
      <section className="w-full">
        {societies.map((society, index) => (
          <SectionShowcase
            key={society.slug}
            type="council"
            name={society.name}
            description={society.description}
            image={society.image}
            imageAlt={society.name}
            orientation={index % 2 === 0 ? "left" : "right"}
            exploreItems={society.exploreItems}
          />
        ))}
      </section>
    </main>
  );
}