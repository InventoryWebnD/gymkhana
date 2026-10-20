"use client";

import { useState } from "react";

type Member = { name: string; role: string; image: string; phone?: string; email?: string };
type TeamSection = { title: string; members: Member[]; compact?: boolean };
const A = "/img/office26";

const officeBearers: Member[] = [
    { name: "Dr. Chetan", role: "PRESIDENT", image: `${A}/pres.png`, phone: "06747135746", email: "president.sg@iitbbs.ac.in" },
    { name: "Mr. Santosh", role: "VICE PRESIDENT", image: `${A}/vp.png`, phone: "9353154278", email: "vpresident.sg@iitbbs.ac.in" },
    { name: "Dr. Bankim Chandra Mahanta", role: "TREASURER", image: `${A}/tres.png`, phone: "6747135764", email: "treasurer.sg@iitbbs.ac.in" },
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
    { title: "OFFICE BEARERS 2026–2027", members: officeBearers },
    { title: "ADVISORY COUNCIL", members: advisors },
    { title: "SPORTS INSTRUCTORS", members: instructors },
    { title: "GENERAL SECRETARIES", members: generalSecretaries },
    { title: "EXECUTIVE COUNCIL", members: executiveCouncil },
    { title: "SECRETARIES", members: secretaries, compact: true },
];

function MemberCard({ member }: { member: Member }) {
    const [imageError, setImageError] = useState(false);
    return (
        <article className="group flex h-full flex-col overflow-hidden border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative flex h-[300px] items-center justify-center overflow-hidden bg-neutral-100 p-3 sm:h-[330px]">
                {!imageError ? (
                    <img src={member.image} alt={member.name} loading="lazy" onError={() => setImageError(true)} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
                ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-neutral-500">
                        <span className="text-5xl font-bold">{member.name.charAt(0)}</span>
                        <span className="text-xs">Image unavailable</span>
                    </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 pb-5 pt-12 text-white">
                    <h3 className="text-center text-lg font-bold leading-snug">{member.name}</h3>
                    <p className="mt-1 text-center text-xs font-semibold uppercase tracking-wide text-neutral-200">{member.role}</p>
                </div>
            </div>
            <div className="flex flex-1 flex-col items-center px-4 py-5 text-center">
                <p className="text-sm font-semibold text-neutral-800">{member.role}</p>
                <p className="mt-2 text-xs tracking-wide text-neutral-500">STUDENTS&apos; GYMKHANA</p>
                <p className="text-xs tracking-wide text-neutral-500">IIT BHUBANESHWAR</p>
                <div className="mt-auto flex items-center justify-center gap-4 pt-5">
                    {member.phone && <a href={`tel:${member.phone.trim()}`} aria-label={`Call ${member.name}`} title="Call" className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-800 transition hover:bg-blue-700 hover:text-white">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.2 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" /></svg>
                    </a>}
                    {member.email && <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`} title="Email" className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-800 transition hover:bg-blue-700 hover:text-white">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" /></svg>
                    </a>}
                </div>
            </div>
        </article>
    );
}

export default function OfficePage() {
    return (
        <main className="min-h-screen bg-white pb-16 pt-24 text-neutral-900 md:pt-28">
            <div className="mx-auto max-w-[1500px] space-y-20 px-5 sm:px-8 lg:px-12">
                {sections.map((section, index) => (
                    <section key={section.title}>
                        <header className="mb-10 text-center md:mb-12">
                            <h1 className={`font-bold tracking-wide ${index === 0 ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl lg:text-3xl"}`}>{section.title}</h1>
                            <div className="mx-auto mt-4 flex w-36 items-center"><span className="h-[2px] flex-1 bg-neutral-300" /><span className="h-1 w-12 bg-blue-700" /><span className="h-[2px] flex-1 bg-neutral-300" /></div>
                        </header>
                        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${section.compact ? "lg:grid-cols-4 xl:grid-cols-5" : "lg:grid-cols-3 xl:grid-cols-4"}`}>
                            {section.members.map((member) => <MemberCard key={`${section.title}-${member.name}-${member.role}`} member={member} />)}
                        </div>
                    </section>
                ))}
            </div>
            <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-6 w-6" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m6 14 6-6 6 6" /></svg>
            </button>
        </main>)}