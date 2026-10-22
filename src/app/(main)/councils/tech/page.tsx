"use client";

import CulturalWheel from "@/components/councils/CulturalWheel";
import CommonCarousel from "@/components/layout/CommonCarousel";

const societies = [
  {
    name: " RISC, Robotics and Intelligent Systems Club",
    description:
      "RISC provides an interactive forum for students to pursue their passion and zeal for robotics. Students not only learn but also apply their technical skills to build bots of different kinds. Several workshops and events are conducted by RISC regularly. Through collaboration with organizations like IEEE and participation in various competitions held all across the country, students get fair exposure to the world of technology. RISC is also responsible for conducting all the robotic events (Yanthrix) in Wissenaire, the techno-management fest of IIT Bhubaneswar.",
    image: "/icons/risc.png",
    slug: "risc",
    exploreItems: [{
      label: "Explore RISC",
      href: '/councils/tech/risc'
    },
    ],
  },
  {
    name: "WebnD, Web and Design Society ",
    description:
      "The Web and Design Society of IIT Bhubaneswar has the credit of managing and designing all the websites of the institute. We aim to inspire people to select web development as their second hobby and transform them into creative professionals by equipping them with the skill and art of creating websites and club designs. Members of the society actively conduct competitions and workshops for beginners and advanced web developers.",
    image: "/icons/webd.png",
    slug: "webnd",
    exploreItems: [{
      label: "Explore WebnD",
      href: '/councils/tech/webnd'
    },
    ],
  },
  {
    name: "Neuromancers, The Programming Society",
    description:
      "The Programming Society aims at educating students about computers, programming languages and software tools. Comprising of coding enthusiasts from all branches of engineering, this society, in association with organizations like CodeChef and companies like Microsoft and IBM, organizes competitions, workshops and guest lectures relating to Android app development, cloud computing, hacking, and more. These activities equip students with programming skills and help them thrive in the modern world of technology.",
    image: "/icons/neuromancers.png",
    slug: "neuromancers",
    exploreItems: [{
      label: "Explore Neuromancers",
      href: '/councils/tech/neuromancers'
    },
    ],
  },
  {
    name: "Nakshatra, The Astronomy Club",
    description:
      "The recently established society aims at enhancing and sharing humanity's scientific understanding of the universe. Armed with its newly acquired state-of-the-art telescopes, the members of this club study celestial objects and phenomena of the 14-billion-year-old universe independently. The club also publishes a newsletter regularly.",
    image: "/icons/nakshatra_1.webp",
    slug: "nakshatra",
    exploreItems: [{
      label: "Explore Nakshatra",
      href: '/councils/tech/nakshatra'
    },
    ],
  },
  {
    name: "FEBS, Society of Finance Economics and Business ",
    description:
      "FEBS is IIT Bhubaneswar's society of finance, economics, and business. The community is an agglomerate of enthusiastic people brought together by their love for finance, economics, and business and their aspiration to spread the importance of financial literacy in IIT Bhubaneswar. The prime motto of our society is to encourage the development of financial literacy, economic thought, and business ideas.",
    image: "/icons/febs.png",
    slug: "febs",
    exploreItems: [{
      label: "Explore FEBS",
      href: '/councils/tech/febs'
    },
    ],
  }
];

export default function TechCouncil() {
  return (
    <main className="w-full" style={{ "background": "white" }}>
      <section className="h-dvh w-full overflow-hidden">
        <CommonCarousel
          commonName="TECHNICAL COUNCIL"
          heightClassName="h-dvh min-h-screen"
          images={[
            "/img/tech-carousel/1.jpg",
            "/img/tech-carousel/2.jpeg",
            "/img/tech-carousel/3.jpg",
            "/img/tech-carousel/4.jpg",
            "/img/tech-carousel/5.jpg",
          ]}
        />
      </section>
      <CulturalWheel societies={societies} type="tech" />
    </main>
  );
}