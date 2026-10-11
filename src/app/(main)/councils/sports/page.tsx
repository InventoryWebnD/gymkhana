"use client";

import CommonCarousel from "@/components/layout/CommonCarousel";
import SectionShowcase from "@/components/ui/SectionShowcase";

const sports = [
  {
    name: "FOOTBALL",
    tagline: "Passion, teamwork, and the beautiful game.",
    description:
      "Our campus has a well-equipped football ground. This year, our inventory is also being expanded with slalom poles, hurdles of different heights, training ladders, and other equipment to help players improve their individual skills. With proper guidance being essential to development, we are fortunate to have a coach like Mr. Biswajit Pegu, who helps beginners grow into skilled players. After all, every expert was once a beginner.",
    image: "/img/sports/football.jpg",
  },
  {
    name: "CRICKET",
    tagline: "Where passion meets the spirit of the game.",
    description:
      "In India, cricket is a religion that unites the nation. At IIT Bhubaneswar, we provide facilities that help students develop their cricketing skills and pursue their dreams. At our permanent campus in Arugul, the cricket ground beside the boys' hostel includes a practice net. The Gymkhana provides the necessary equipment and gear for practice sessions and matches, along with guidance from an experienced coach.",
    image: "/img/sports/cricket.jpg",
  },
  {
    name: "BADMINTON",
    tagline: "Agility, precision, and fitness in every rally.",
    description:
      "Our institute offers three well-equipped indoor badminton courts in the SAC, along with the necessary equipment for the sport. Badminton is not only enjoyable but also helps us stay physically and mentally fit. It develops coordination, quick reflexes, and responsiveness—skills that are valuable beyond the court. Physical fitness is as important as academic excellence, so pick up your racket and get ready to play.",
    image: "/img/sports/badminton.jpg",
  },
  {
    name: "ATHLETICS",
    tagline: "Push your limits. Discover your potential.",
    description:
      "Athletics brings together competitive running, jumping, throwing, and walking events, motivating students to develop strength, endurance, and discipline. At IIT Bhubaneswar, athletes have access to equipment such as javelins, starting blocks, balls, and hammers, along with guidance for events like the long jump. The sport offers opportunities to compete individually across a wide range of events, from discus throw to relay races, in intra-college tournaments and the Inter-IIT Sports Meet.",
    image: "/img/sports/athletics.jpg",
  },
  {
    name: "VOLLEYBALL",
    tagline: "United by teamwork. Driven by the will to win.",
    description:
      "Volleyball is one of the most enthusiastically played sports at IIT Bhubaneswar. Our community brings together talented and passionate players and supports them in reaching their potential through training and competition. Society inductions take place at the beginning of the academic year, followed by regular practice and participation in competitions. Our major goals include performing well at the Inter-IIT Sports Meet while building teamwork, composure, perseverance, and a supportive community that lasts beyond campus.",
    image: "/img/sports/volleyball.jpg",
  },
  {
    name: "BASKETBALL",
    tagline: "Play with intensity. Grow through teamwork.",
    description:
      "IIT Bhubaneswar provides well-equipped basketball courts, with additional courts expanding opportunities for practice and play. Equipment such as training ladders, hurdles, slalom poles, and basketballs helps players improve their individual skills and fitness. With guidance from coaches and a positive sporting attitude, students can make the most of these facilities, develop their abilities, and enjoy the spirit of the game.",
    image: "/img/sports/basketball.jpg",
  },
  {
    name: "TABLE TENNIS",
    tagline: "Fast reflexes. Sharp focus. Endless possibilities.",
    description:
      "Table tennis is growing increasingly popular on our campus. Students have access to quality equipment, dedicated practice opportunities, and guidance from committed coaches and fellow players. With the development of the SAC and its table tennis facilities, students have even more opportunities to improve their game. Beyond physical fitness and quick reflexes, table tennis builds concentration, discipline, and confidence.",
    image: "/img/sports/table-tennis.jpg",
  },
  {
    name: "TENNIS",
    tagline: "Every serve begins a new opportunity.",
    description:
      "Tennis is an emerging sport at our campus, with courts being developed to encourage greater participation. As a technically demanding game, tennis requires concentration, agility, and strategic thinking. Students interested in learning the sport can become part of a growing community of enthusiasts who share a passion for practice, improvement, and competition.",
    image: "/img/sports/tennis.jpg",
  },
  {
    name: "BOARD GAMES",
    tagline: "Think strategically. Play intelligently.",
    description:
      "Board games bring together strategy, planning, concentration, and friendly competition. From games that demand careful calculation to those that combine skill with chance, each offers a unique challenge. At IIT Bhubaneswar, students enjoy a variety of board and tabletop games, including chess and carrom, building strategic thinking and creating opportunities for fun and interaction beyond academics.",
    image: "/img/sports/board-games.jpg",
  },
  {
    name: "GYM AND WEIGHTLIFTING",
    tagline: "Build strength. Transform yourself.",
    description:
      "“The worst thing I can be is the same as everyone else and I hate it.” — Arnold Schwarzenegger. The gym is a place to challenge yourself, build discipline, and become stronger. IIT Bhubaneswar provides residents with a functional gym combining modern machines and traditional weight training. Beyond building muscle, regular exercise supports overall well-being and helps students channel their energy into a healthier lifestyle.",
    image: "/img/sports/gym.jpg",
  },
  {
    name: "SWIMMING",
    tagline: "Find your rhythm. Make every stroke count.",
    description:
      "Swimming combines physical fitness, technical precision, endurance, and mental discipline. Whether the goal is competitive speed, improved cardiovascular health, or recreational enjoyment, swimming offers something for everyone. With the inauguration of the new swimming pool at IIT Bhubaneswar, enthusiasts have opportunities to practise different styles, including freestyle, breaststroke, and butterfly, while developing their skills and confidence in the water.",
    image: "/img/sports/swimming.jpg",
  },
];

export default function SportCouncil() {
  return (
    <main className="w-full">
      {/* Existing Sports Council carousel */}
      <section className="h-dvh w-full overflow-hidden">
        <CommonCarousel
          commonName="SPORTS COUNCIL"
          heightClassName="h-dvh min-h-screen"
          images={[
            "/img/sports-carousel/1.jpg",
            "/img/sports-carousel/2.jpg",
            "/img/sports-carousel/3.JPG",
            "/img/sports-carousel/4.JPG",
            "/img/sports-carousel/5.JPG",
            "/img/sports-carousel/6.JPG",
            "/img/sports-carousel/7.JPG",
            "/img/sports-carousel/8.JPG",
            "/img/sports-carousel/9.JPG",
            "/img/sports-carousel/10.JPG",
          ]}
        />
      </section>

      {/* Sports sections */}
      <section className="w-full">
        {sports.map((sport, index) => (
          <SectionShowcase
            key={sport.name}
            type="meet"
            name={sport.name}
            tagline={sport.tagline}
            description={sport.description}
            image={sport.image}
            imageAlt={`${sport.name} at IIT Bhubaneswar`}
            orientation={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </section>
    </main>
  );
}