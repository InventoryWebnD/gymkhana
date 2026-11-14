import type { StaticImageData } from "next/image";

// Static imports give next/image intrinsic sizes + blur placeholders, and let the
// optimizer serve screen-sized versions of the multi-megabyte originals.
import starNight from "../../../public/img/fest/a4.jpg";
import pravaahBand from "../../../public/img/fest/pravaah/a3.jpg";
import pravaahDance from "../../../public/img/fest/pravaah/a2.jpg";
import ashvamedhaWinners from "../../../public/img/fest/ashvamedha/as.jpg";
import ashvamedhaTrophy from "../../../public/img/fest/ashvamedha/as1.jpg";
import gcCrowd from "../../../public/img/gc-carousel/gc1.jpg";
import gcTalk from "../../../public/img/gc-carousel/gc2.jpg";
import gcFootball from "../../../public/img/gc-carousel/gc3.jpg";
import gcChampions from "../../../public/img/site/gc-champions.jpg";
import gcNightHoops from "../../../public/img/site/gc-night-hoops.jpg";
import gcAwards from "../../../public/img/gc-carousel/gc7.jpg";
import guitars from "../../../public/img/cult-carousel/1.jpg";
import stageShow from "../../../public/img/cult-carousel/3.jpg";
import folkDance from "../../../public/img/cult-carousel/4.jpg";
import squadCheer from "../../../public/img/sports-carousel/2.jpg";
import nightCourt from "../../../public/img/site/night-court.jpg";
import trophyStage from "../../../public/img/site/trophy-stage.jpg";
import footballField from "../../../public/img/sports-carousel/10.jpg";
import marchPast from "../../../public/img/site/march-past.jpg";
import contingent from "../../../public/img/site/contingent.jpg";
import roboSoccer from "../../../public/img/tech-carousel/1.jpg";
import hackathon from "../../../public/img/tech-carousel/2.jpeg";
import silhouettes from "../../../public/img/home-carousel/1.webp";
import sac from "../../../public/img/facilities/sac.png";
import campusGreen from "../../../public/img/facilities/green.png";
import president from "../../../public/img/office26/pres.png";
import badminton from "../../../public/img/site/badminton.jpg";
import volleyball from "../../../public/img/site/volleyball.jpg";
import sportsMeetOpening from "../../../public/img/site/sports-meet-opening.jpg";
import flagHandover from "../../../public/img/site/flag-handover.jpg";
import contingentJackets from "../../../public/img/site/contingent-jackets.jpg";
import nightCeremony from "../../../public/img/site/night-ceremony.jpg";
import sportsMeetAddress from "../../../public/img/site/sports-meet-address.jpg";
import dayHoops from "../../../public/img/gc-carousel/gc6.jpg";
import trackFlag from "../../../public/img/sports-carousel/sports1.jpg";
import teamJackets from "../../../public/img/sports-carousel/1.jpg";
import futsalDay from "../../../public/img/fest/ashvamedha/as2.jpg";
import footballDuel from "../../../public/img/fest/ashvamedha/as5.jpg";
import eSummit from "../../../public/img/fest/es.jpeg";
import wissenaire from "../../../public/img/fest/event-1.jpg";
import almaFiesta from "../../../public/img/fest/event-2.jpg";
import techMeetLogo from "../../../public/img/tech-carousel/techmeet.jpg";
import pool from "../../../public/img/home-carousel/2.webp";
import gate from "../../../public/img/home-carousel/3.webp";
import gymFloor from "../../../public/img/home-carousel/4.webp";
import ttHall from "../../../public/img/home-carousel/6.webp";
import telescope from "../../../public/img/tech-carousel/3.jpg";
import codeScreen from "../../../public/img/tech-carousel/4.jpg";
import marketChart from "../../../public/img/tech-carousel/5.jpg";
import clapboard from "../../../public/img/cult-carousel/2.jpg";
import moonDecor from "../../../public/img/home-carousel/5.webp";
import riscBuild from "../../../public/img/site/old/risc-build.jpg";
import febsEvent from "../../../public/img/site/old/febs-event.jpg";
import webndLab from "../../../public/img/site/old/tech-stage.jpg";
import neuroCrew from "../../../public/img/site/old/tech-crowd.jpg";
import nakshatraScope from "../../../public/img/site/old/tech-workshop.jpg";
import febsTalk from "../../../public/img/site/old/tech-event.jpg";
import aarohRoom from "../../../public/img/site/old/aaroh-live.jpg";
import dgrooversLeap from "../../../public/img/site/old/dgroovers-stage.jpg";
import fourthWallMime from "../../../public/img/site/old/fourthwall-play.jpg";
import kalakritiDiwali from "../../../public/img/site/old/kalakriti-art.jpg";
import abhivyaktiStage from "../../../public/img/site/old/abhivyakti-event.jpg";
import abhivyaktiContest from "../../../public/img/site/old/abhivyakti-stage.jpg";
import s4sTeam from "../../../public/img/site/old/s4s-drive.jpg";
import cinewaveStill from "../../../public/img/site/old/cult-6.jpg";
import clixFrame from "../../../public/img/site/old/cult-8.jpg";
import cricketBat from "../../../public/img/site/old/sp-cricket.jpg";
import cricketBowl from "../../../public/img/site/old/sp-cricket-2.jpg";
import tennisRally from "../../../public/img/site/old/sp-tennis.jpg";
import squashCourt from "../../../public/img/site/old/sp-squash.jpg";
import carrom from "../../../public/img/site/old/sp-boardgames.jpg";
import ttMatch from "../../../public/img/site/old/sp-tt.jpg";
import gymWeights from "../../../public/img/site/old/sp-gym-wl.jpg";
import gymCardio from "../../../public/img/site/old/sp-gym.jpg";
import footballSquad from "../../../public/img/site/old/sp-football.jpg";
import volleyballChamps from "../../../public/img/site/old/sp-volleyball.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  caption: string;
};

export const photos = {
  starNight: { src: starNight, alt: "A DJ salutes the crowd under purple stage lights at Pravaah's star night", caption: "Pravaah · Star Night" },
  pravaahBand: { src: pravaahBand, alt: "A student band performing on a lit fest stage", caption: "Socio-Cultural · Live music" },
  pravaahDance: { src: pravaahDance, alt: "Classical dancers mid-performance on stage", caption: "Socio-Cultural · Dance" },
  ashvamedhaWinners: { src: ashvamedhaWinners, alt: "A futsal team celebrating with their trophy", caption: "Ashvamedha · Futsal" },
  ashvamedhaTrophy: { src: ashvamedhaTrophy, alt: "Students receiving a trophy at night outside the hostels", caption: "Ashvamedha" },
  gcCrowd: { src: gcCrowd, alt: "A packed crowd of students in front of a lit stage", caption: "General Championship" },
  gcTalk: { src: gcTalk, alt: "A student speaking into a microphone on stage", caption: "General Championship" },
  gcFootball: { src: gcFootball, alt: "A footballer dribbling past a defender", caption: "General Championship · Football" },
  gcChampions: { src: gcChampions, alt: "A department team posing with their championship trophy", caption: "General Championship" },
  gcNightHoops: { src: gcNightHoops, alt: "A basketball game under floodlights beside the hostels", caption: "General Championship · Basketball" },
  gcAwards: { src: gcAwards, alt: "Winners holding certificates on stage", caption: "General Championship · Awards" },
  guitars: { src: guitars, alt: "Two students playing guitar on stage", caption: "Aaroh" },
  stageShow: { src: stageShow, alt: "Dancers performing under bright stage lights", caption: "D-Groovers" },
  folkDance: { src: folkDance, alt: "The Fourth Wall performing a street play outdoors at dusk", caption: "The Fourth Wall · Street play" },
  squadCheer: { src: squadCheer, alt: "A team in bibs celebrating together", caption: "Sports Council" },
  nightCourt: { src: nightCourt, alt: "A floodlit basketball court at night", caption: "Sports Council" },
  trophyStage: { src: trophyStage, alt: "A large contingent on stage with a trophy", caption: "Sports Council" },
  footballField: { src: footballField, alt: "A football match on a grass field", caption: "Sports Council" },
  marchPast: { src: marchPast, alt: "Athletes marching with flags at an opening ceremony", caption: "Sports Council · March past" },
  contingent: { src: contingent, alt: "The IIT Bhubaneswar contingent marching behind its placard", caption: "Inter IIT Sports Meet" },
  roboSoccer: { src: roboSoccer, alt: "A robot pushing a ball across a robo-soccer arena", caption: "RISC · Robo soccer" },
  hackathon: { src: hackathon, alt: "A hall full of students coding on laptops", caption: "Neuromancers" },
  silhouettes: { src: silhouettes, alt: "Silhouettes of students playing sport against an evening sky", caption: "Student Activity Center" },
  sac: { src: sac, alt: "The Student Activity Center building under a stormy sky", caption: "Student Activity Center" },
  campusGreen: { src: campusGreen, alt: "The green campus with hills in the distance", caption: "Campus · Argul" },
  president: { src: president, alt: "Portrait of the President, Students' Gymkhana", caption: "President" },
  badminton: { src: badminton, alt: "A player leaping for a smash in the indoor badminton hall", caption: "Badminton" },
  volleyball: { src: volleyball, alt: "A player serving on an outdoor court", caption: "Volleyball" },
  sportsMeetOpening: { src: sportsMeetOpening, alt: "Dignitaries on stage at the Inter IIT Sports Meet opening at IIT Bhubaneswar", caption: "Inter IIT Sports Meet" },
  flagHandover: { src: flagHandover, alt: "Officials holding the IIT Bhubaneswar flag at a sports ceremony", caption: "Inter IIT Sports Meet" },
  contingentJackets: { src: contingentJackets, alt: "Athletes in contingent jackets marching at a ceremony", caption: "Sports Council" },
  nightCeremony: { src: nightCeremony, alt: "Contingents lined up under floodlights for a night ceremony", caption: "Inter IIT Sports Meet" },
  sportsMeetAddress: { src: sportsMeetAddress, alt: "A speaker addressing athletes at a sports ceremony", caption: "Inter IIT Sports Meet" },
  dayHoops: { src: dayHoops, alt: "A basketball game on the outdoor courts with hills behind", caption: "Basketball" },
  trackFlag: { src: trackFlag, alt: "Athletes carrying a flag on the running track", caption: "Athletics" },
  teamJackets: { src: teamJackets, alt: "The IIT Bhubaneswar team lined up in red jackets", caption: "Sports Council" },
  futsalDay: { src: futsalDay, alt: "Futsal players chasing the ball on a dirt pitch", caption: "Ashvamedha" },
  footballDuel: { src: footballDuel, alt: "Two footballers contesting the ball", caption: "Ashvamedha" },
  eSummit: { src: eSummit, alt: "The illuminated E-Summit sign", caption: "E-Summit" },
  wissenaire: { src: wissenaire, alt: "Wissenaire fest artwork of an astronaut", caption: "Wissenaire" },
  almaFiesta: { src: almaFiesta, alt: "Alma Fiesta poster: India's Cultural Melange", caption: "Alma Fiesta" },
  techMeetLogo: { src: techMeetLogo, alt: "Inter IIT Tech Meet logo", caption: "Inter IIT Tech Meet" },
  pool: { src: pool, alt: "The swimming pool with lane ropes at dusk", caption: "Swimming pool" },
  gate: { src: gate, alt: "The main gate of IIT Bhubaneswar lined with palms", caption: "Campus · Argul" },
  gymFloor: { src: gymFloor, alt: "The gym with machines behind glass walls", caption: "Gym" },
  ttHall: { src: ttHall, alt: "A table tennis table in the indoor hall", caption: "Table tennis" },
  telescope: { src: telescope, alt: "A telescope pointed at the night sky", caption: "Nakshatra" },
  codeScreen: { src: codeScreen, alt: "Code on a monitor", caption: "WebnD" },
  marketChart: { src: marketChart, alt: "A candlestick market chart", caption: "FEBS" },
  clapboard: { src: clapboard, alt: "A film clapperboard", caption: "Cinewave" },
  moonDecor: { src: moonDecor, alt: "A crescent-moon installation lit with fairy lights", caption: "Kalakriti · Diwali décor" },
  riscBuild: { src: riscBuild, alt: "Laptops running code at a RISC session", caption: "RISC" },
  febsEvent: { src: febsEvent, alt: "Students at laptops during a FEBS event", caption: "FEBS" },
  webndLab: { src: webndLab, alt: "A computer lab full of students at a coding workshop", caption: "WebnD · Workshop" },
  neuroCrew: { src: neuroCrew, alt: "A society team photo in the SAC", caption: "Neuromancers" },
  nakshatraScope: { src: nakshatraScope, alt: "A student adjusting a telescope in front of a class", caption: "Nakshatra · Telescope session" },
  febsTalk: { src: febsTalk, alt: "A speaker presenting to students in a lecture hall", caption: "FEBS · Talk" },
  aarohRoom: { src: aarohRoom, alt: "Drums and guitars set up in the music room", caption: "Aaroh · Music room" },
  dgrooversLeap: { src: dgrooversLeap, alt: "A dancer mid-leap on stage", caption: "D-Groovers" },
  fourthWallMime: { src: fourthWallMime, alt: "Two actors in white-face mime", caption: "The Fourth Wall" },
  kalakritiDiwali: { src: kalakritiDiwali, alt: "A crescent-moon art installation lit for Diwali", caption: "Kalakriti · Diwali" },
  abhivyaktiStage: { src: abhivyaktiStage, alt: "A Hindi poetry event on stage", caption: "Abhivyakti" },
  abhivyaktiContest: { src: abhivyaktiContest, alt: "Students writing at desks during a literary competition", caption: "Literary societies" },
  s4sTeam: { src: s4sTeam, alt: "The Souls for Solace team", caption: "Souls for Solace" },
  cinewaveStill: { src: cinewaveStill, alt: "Faces lit by a single candle in a film still", caption: "Cinewave" },
  clixFrame: { src: clixFrame, alt: "A glowing light bulb reflected on glass", caption: "CLIX" },
  cricketBat: { src: cricketBat, alt: "A batsman facing a delivery on the pitch", caption: "Cricket" },
  cricketBowl: { src: cricketBowl, alt: "A bowler in delivery stride", caption: "Cricket" },
  tennisRally: { src: tennisRally, alt: "Players at the net on a tennis court", caption: "Tennis" },
  squashCourt: { src: squashCourt, alt: "Two players on the glass-backed squash court", caption: "Squash" },
  carrom: { src: carrom, alt: "A hand striking a carrom board", caption: "Board games" },
  ttMatch: { src: ttMatch, alt: "A table tennis match in the indoor hall", caption: "Table tennis" },
  gymWeights: { src: gymWeights, alt: "The weightlifting floor of the gym", caption: "Gym & weightlifting" },
  gymCardio: { src: gymCardio, alt: "Cardio machines in the gym", caption: "Gym" },
  footballSquad: { src: footballSquad, alt: "The football squad lined up on the pitch", caption: "Football" },
  volleyballChamps: { src: volleyballChamps, alt: "The volleyball team with a trophy", caption: "Volleyball" },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/** Photos for each society, keyed by slug — used for the floating thumbnails. */
export const societyPhotos: Record<string, Photo[]> = {
  risc: [photos.roboSoccer, photos.riscBuild],
  webnd: [photos.webndLab, photos.codeScreen],
  neuromancers: [photos.hackathon, photos.neuroCrew],
  nakshatra: [photos.nakshatraScope, photos.telescope],
  febs: [photos.febsTalk, photos.febsEvent],
  kalakriti: [photos.kalakritiDiwali],
  "d-groovers": [photos.dgrooversLeap, photos.stageShow],
  "fourth-wall": [photos.fourthWallMime, photos.folkDance],
  aaroh: [photos.guitars, photos.aarohRoom],
  panacea: [photos.abhivyaktiContest],
  abhivyakti: [photos.abhivyaktiStage, photos.abhivyaktiContest],
  "quiz-society": [photos.abhivyaktiContest],
  literary: [photos.abhivyaktiStage, photos.abhivyaktiContest],
  cinewave: [photos.cinewaveStill, photos.clapboard],
  "souls-for-solace": [photos.s4sTeam],
  clix: [photos.clixFrame],
};
