"use client";

import type { ReactNode } from "react";
import { motion, MotionConfig } from "framer-motion";

import CommonCarousel from "@/components/layout/CommonCarousel";
import SectionShowcase from "@/components/ui/SectionShowcase";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function SportsMeetPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="w-full overflow-hidden bg-white">
        <motion.section
          initial={{ opacity: 0, scale: 1.015 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease }}
          className="h-dvh w-full"
        >
          <CommonCarousel
            commonName="INTER IIT SPORTS MEET"
            heightClassName="h-dvh min-h-screen"
            images={[
              "/img/sports-carousel/sports (1).jpg",
              "/img/sports-carousel/sports (2).jpg",
              "/img/sports-carousel/sports (3).jpg",
              "/img/sports-carousel/sports (4).jpg",
            ]}
          />
        </motion.section>

        <Reveal>
          <SectionShowcase
            type="meet"
            name="About Inter IIT Sports Meet"
            image="/img/sports-carousel/sports.png"
            imageAlt="Inter IIT Sports Meet"
            orientation="left"
            description={[
              "Every year, students from the IITs gather to compete in sports, culture and technology, showing the talent and the work, blood and sweat they have put in behind the scenes to win the trophy. Over 2000 students in jerseys, banners and flags of their IITs make the event feel no less than the grand Olympics, with contingents of more than 100 students each representing their IITs.",
              "Tournaments are held in 13 sports: Athletics, Badminton, Basketball, Cricket, Football, Hockey, Lawn Tennis, Squash, Swimming, Table Tennis, Volleyball, Water Polo and Weightlifting.",
              "Each sport has a tournament winner, and points are awarded by standing. These add up to an overall points tally, and topping it to win the trophy is every contingent's aim.",
            ]}
          />
        </Reveal>

        <Reveal>
          <SectionShowcase
            type="meet"
            name="Inter IIT at IIT Bhubaneswar"
            image="/img/sports-carousel/sports (3).jpg"
            imageAlt="54th Inter IIT Sports Main Meet at IIT Bhubaneswar"
            orientation="right"
            description={[
              "It was the first time in history that the meet was co-hosted by two IITs, and IIT Bhubaneswar became the first second-generation IIT to co-host it. IIT Kharagpur organised eight sports and IIT Bhubaneswar organised four.",
              "The 54th Inter IIT Sports Main Meet took place from 15 to 21 December 2019 at IIT Bhubaneswar and from 14 to 22 December 2019 at IIT Kharagpur. The four events co-hosted by IIT Bhubaneswar were Badminton, Squash, Table Tennis and Volleyball. The institute renovated its playfields extensively in anticipation of the meet.",
              "About 800 students from 23 IITs took part at IIT Bhubaneswar. Across all events, on and off the field, at both campuses, IIT Kharagpur finished first with 122 points, followed by IIT Delhi with 92 points. IIT Madras took third place with 87.1 points.",
            ]}
          />
        </Reveal>
      </main>
    </MotionConfig>
  );
}