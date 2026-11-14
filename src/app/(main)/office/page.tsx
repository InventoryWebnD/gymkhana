"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import PageHero, { Sheet } from "@/components/design/PageHero";
import { Container } from "@/components/design/blocks";
import { MaskLines, Reveal, SectionLabel } from "@/components/design/primitives";

type Member = { name: string; role: string; image: string; phone?: string; email?: string };
type TeamSection = { title: string; blurb: string; members: Member[]; compact?: boolean };
const A = "/img/office26";

const officeBearers: Member[] = [
    { name: "Dr. Chetan", role: "PRESIDENT", image: `${A}/pres.png`, phone: "06747135746", email: "president.sg@iitbbs.ac.in" },
    { name: "Mr. Santosh", role: "VICE PRESIDENT", image: `${A}/vp.png`, phone: "9353154278", email: "vpresident.sg@iitbbs.ac.in" },
    { name: "Dr. Bankim Chandra Mahanta", role: "TREASURER", image: `${A}/Tres.png`, phone: "6747135764", email: "treasurer.sg@iitbbs.ac.in" },
];
const advisors: Member[] = [
    { name: "Dr. Snigdha Ghosh", role: "Social & Cultural", image: `${A}/faCult.png`, phone: "6747136924", email: "fasnc.sg@iitbbs.ac.in" },
    { name: "Dr. Navjeet Bagga", role: "Science & Technology", image: `${A}/faTech.png`, phone: "6747135774", email: "fasnt.sg@iitbbs.ac.in" },
    { name: "Dr. Divyansh Patel", role: "Sports and Games", image: `${A}/faSP.png`, phone: "6747135760", email: "fasng.sg@iitbbs.ac.in" },
];
const instructors: Member[] = [
    { name: "Mr. Biswajit Pegu", role: "Assistant Sports Officer", image: `${A}/Sports/ASO.png`, phone: "8120115892", email: "aso.sg@iitbbs.ac.in" },
    { name: "Mrs. Smruti Pranami Mohanty", role: "Physical Training Instructor", image: `${A}/Sports/PTI.png`, email: "office.gymkhana@iitbbs.ac.in" },
    { name: "Mrs. Sunita Verma", role: "Basketball Coach", image: `${A}/Sports/ch_BB.png`, email: "sunitav@iitbbs.ac.in" },
    { name: "Mr. Prakash Chandra Muduli", role: "Badminton Coach", image: `${A}/Sports/ch_BM.png`, phone: "9658516435", email: "pcmuduli@iitbbs.ac.in" },
    { name: "Mr. Biswajit Nayak", role: "Gym Trainer", image: `${A}/Sports/ch_gym.png`, email: "office.gymkhana@iitbbs.ac.in" },
    { name: "Mr. Harpal Singh", role: "Cricket Coach", image: `${A}/Sports/ch_cricket.png`, phone: "9827614286", email: "harpalyadav@iitbbs.ac.in" },
    { name: "Mr. Irfan Ahmed", role: "Football Coach", image: `${A}/Sports/ch_football.png`, email: "office.gymkhana@iitbbs.ac.in" },
];
const generalSecretaries: Member[] = [
    { name: "Bhabya Bansal", role: "SPORTS AND GAMES", image: `${A}/gsecSP.png`, phone: "7075054973", email: "gsecsports.sg@iitbbs.ac.in" },
    { name: "Ayush Ranjan", role: "SCIENCE AND TECHNOLOGY", image: `${A}/gsecTech.png`, phone: "8789942970", email: "gsecsnt.sg@iitbbs.ac.in" },
    { name: "Pratham Mighlani", role: "SOCIO-CULTURAL", image: `${A}/gsecCult.png`, phone: "9336075908", email: "gseccul.sg@iitbbs.ac.in" },
];
const executiveCouncil: Member[] = [
    { name: "Sudhanshu Rangrajan", role: "PG Representative", image: `${A}/pg1.png`, phone: "7347740450", email: "pgrep.sg@iitbbs.ac.in" },
    { name: "Milind Singh", role: "PhD Representative", image:  `${A}/phd.jpg`, phone: "9454051541", email: "phdrep.sg@iitbbs.ac.in" },
    { name: "Tanuj Kumar Gupta", role: "UG Representative", image:  `${A}/ug1.jpg`, phone: "9079095706", email: "ugrep.sg@iitbbs.ac.in" },
    { name: "Yashika Agarwal", role: "UG Representative", image:  `${A}/ug2.jpg`, phone: "8302352541", email: "ugrep.sg@iitbbs.ac.in" },
];
const secretaries: Member[] = [
    { name: "Anupindi Kamesh", role: "Basketball Secretary", image: `${A}/Secretaries/BasketBall.jpg`, email: "secybasketball.sg@iitbbs.ac.in" },
    { name: "Kavya Jain", role: "Volleyball Secretary", image: `${A}/Secretaries/VollyBall.png`, email: "secyvolleyball.sg@iitbbs.ac.in" },
    { name: "Apoorv Tiwari", role: "Football Secretary", image: `${A}/Secretaries/Football.png`, email: "secyfootball.sg@iitbbs.ac.in" },
    { name: "R Siddharth", role: "Board Games Secretary", image: `${A}/Secretaries/BoardGames.png`, email: "secyboardgames.sg@iitbbs.ac.in" },
    { name: "Dhruv Vinay Chattani", role: "Table Tennis Secretary", image: `${A}/Secretaries/TT.jpg`, email: "secytt.sg@iitbbs.ac.in" },
    { name: "Sangaraju Akhil Verma", role: "Cricket Secretary", image: `${A}/Secretaries/Cricket.jpeg`, email: "secycricket.sg@iitbbs.ac.in" },
    { name: "Konuri Hemanth Varun", role: "Athletics Secretary", image: `${A}/Secretaries/Athletics.jpg`, email: "secyathletics.sg@iitbbs.ac.in" },
    { name: "Rudra Garg", role: "Badminton Secretary", image: `${A}/Secretaries/Badminton.png`, email: "secybadminton.sg@iitbbs.ac.in" },
    { name: "Aviral Srivastav", role: "Gym Secretary", image: `${A}/Secretaries/gym.jpg`, email: "secygym.sg@iitbbs.ac.in" },
    { name: "Swarnav Haldar", role: "RISC Secretary", image: `${A}/Secretaries/RISC.png`, email: "secyrobotics.sg@iitbbs.ac.in" },
    { name: "Shruti Gupta", role: "WebnD Secretary", image: `${A}/Secretaries/WebnD.jpeg`, email: "secyweb.sg@iitbbs.ac.in" },
    { name: "Sutirth Jha", role: "Neuromancers Secretary", image: `${A}/Secretaries/Neuro.png`, email: "secyprogsoc.sg@iitbbs.ac.in" },
    { name: "Harshita Jat", role: "FEBS Secretary", image: `${A}/Secretaries/FEBS.jpg`, email: "secyfebs.sg@iitbbs.ac.in" },
    { name: "Kanupuru Saran Teja", role: "Nakshatra Secretary", image: `${A}/Secretaries/Nakshatra.png`, email: "secyastronomy.sg@iitbbs.ac.in" },
    { name: "Shlok Agarwal", role: "Cinewave Secretary", image: `${A}/Secretaries/CW.jpeg`, email: "secycinematics.sg@iitbbs.ac.in" },
    { name: "Aditya Gupta", role: "QuizSoc Secretary", image: `${A}/Secretaries/Quiz.jpg`, email: "secyquiz.sg@iitbbs.ac.in" },
    { name: "Prashik Naik", role: "Clix Secretary", image: `${A}/Secretaries/Clix.jpg`, email: "secyphotography.sg@iitbbs.ac.in" },
    { name: "Himani", role: "D-Groovers Secretary", image: `${A}/Secretaries/DG.jpg`, email: "secydance.sg@iitbbs.ac.in" },
    { name: "Sitanshu Tiwari", role: "Abhivyakti Secretary", image: `${A}/Secretaries/Abhivyakti.jpeg`, email: "secyabhivyakti.sg@iitbbs.ac.in" },
    { name: "T Manjula Sri", role: "Kalakriti Secretary", image: `${A}/Secretaries/Kalakriti.jpg`, email: "secyfinearts.sg@iitbbs.ac.in" },
    { name: "Kaustubh", role: "Souls for Solas Secretary", image: `${A}/Secretaries/S4S.jpeg`, email: "secysfs.sg@iitbbs.ac.in" },
    { name: "Mayuk Doshi", role: "Panacea Secretary", image: `${A}/Secretaries/Panaecia.jpg`, email: "secyliterary.sg@iitbbs.ac.in" },
    { name: "Parth Bansal", role: "Aaroh Secretary", image: `${A}/Secretaries/Aaroh.webp`, email: "secymusic.sg@iitbbs.ac.in" },
    { name: "Suryansh Banka", role: "The Fourth Wall Secretary", image: `${A}/Secretaries/4thWall.jpeg`, email: "secydrams.sg@iitbbs.ac.in" },
];
const sections: TeamSection[] = [
    { title: "Office Bearers", blurb: "President, Vice President and Treasurer for 2026–27.", members: officeBearers },
    { title: "Advisory Council", blurb: "Faculty advisors for each of the three councils.", members: advisors },
    { title: "General Secretaries", blurb: "Elected student heads of the three councils.", members: generalSecretaries },
    { title: "Executive Council", blurb: "Elected representatives of UG, PG and PhD students.", members: executiveCouncil },
    { title: "Sports Instructors", blurb: "The coaches and trainers behind every team.", members: instructors },
    { title: "Secretaries", blurb: "One for every sport and society.", members: secretaries, compact: true },
];

const titleCase = (s: string) => s.toLowerCase().replace(/(^|[\s&-])\w/g, (m) => m.toUpperCase());

function MemberCard({ member, compact }: { member: Member; compact?: boolean }) {
    const [imageError, setImageError] = useState(false);
    const role = member.role === member.role.toUpperCase() ? titleCase(member.role) : member.role;
    return (
        <article className="group flex h-full flex-col">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-paper-2">
                {!imageError ? (
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes={compact ? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"}
                        onError={() => setImageError(true)}
                        className="object-cover object-top transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.05]"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-ink font-serif text-6xl text-paper">
                        {member.name.charAt(0)}
                    </div>
                )}
                {/* contact actions slide up on hover (always visible on touch) */}
                <div className="absolute inset-x-2 bottom-2 flex gap-1.5 transition-all duration-500 ease-out-expo pointer-fine:translate-y-3 pointer-fine:opacity-0 pointer-fine:group-hover:translate-y-0 pointer-fine:group-hover:opacity-100 pointer-fine:group-focus-within:translate-y-0 pointer-fine:group-focus-within:opacity-100">
                    {member.phone && (
                        <a href={`tel:${member.phone.trim()}`} aria-label={`Call ${member.name}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-ink backdrop-blur transition-colors hover:bg-accent">
                            <Phone size={15} />
                        </a>
                    )}
                    {member.email && (
                        <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-ink backdrop-blur transition-colors hover:bg-accent">
                            <Mail size={15} />
                        </a>
                    )}
                </div>
            </div>
            <h3 className={`mt-4 font-sans font-semibold leading-tight tracking-[-0.03em] ${compact ? "text-base md:text-lg" : "text-lg md:text-2xl"}`}>{member.name}</h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">{role}</p>
        </article>
    );
}

export default function OfficePage() {
    const total = sections.reduce((n, s) => n + s.members.length, 0);
    return (
        <main className="w-full bg-ink">
            <PageHero
                eyebrow="Office"
                title={["The Office"]}
                italic="The people who run the Gymkhana, 2026–27."
                intro="Office bearers, faculty advisors, elected representatives, coaches and the secretaries of every sport and society."
                meta={[
                    { label: "People", value: String(total) },
                    { label: "Email", value: "office.gymkhana@iitbbs.ac.in" },
                ]}
            />
            <Sheet>
                <Container className="py-24 md:py-32">
                    <div className="space-y-20 md:space-y-32">
                        {sections.map((section, index) => (
                            <section key={section.title} className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                                <div className="lg:col-span-3">
                                    <div className="lg:sticky lg:top-28">
                                        <SectionLabel index={String(index + 1).padStart(2, "0")} className="text-ink/60">
                                            {String(section.members.length).padStart(2, "0")} people
                                        </SectionLabel>
                                        <MaskLines as="h2" className="mt-5 font-serif text-4xl leading-[0.95] md:text-5xl" lines={[section.title]} />
                                        <Reveal><p className="mt-3 max-w-xs text-[14px] leading-relaxed text-ink/65">{section.blurb}</p></Reveal>
                                    </div>
                                </div>
                                <div className={`grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:col-span-9 ${section.compact ? "sm:grid-cols-3 lg:grid-cols-5" : "sm:grid-cols-3 lg:grid-cols-4"}`}>
                                    {section.members.map((member, i) => (
                                        <Reveal key={`${section.title}-${member.name}-${member.role}`} delay={Math.min(i, 8) * 0.04} y={24}>
                                            <MemberCard member={member} compact={section.compact} />
                                        </Reveal>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </Container>
            </Sheet>
        </main>
    );
}
