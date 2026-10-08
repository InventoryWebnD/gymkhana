"use client";
import Link from "next/link";
import Dropdown from "@/components/ui/dropdown";

export default function TopBar() {

    const CouncilOptions = [
        {
            href: "/tech",
            label: "Science and Tech",
        },
        {
            href: "/socio-cult",
            label: "Socio Cult",
        },
        {
            href: "/sports",
            label: "Sports",
        },
    ]
    const MeetOptions = [
        { href: "/tech-meet", label: "Inter IIT Tech Meet" },
        { href: "/cult-meet", label: "Inter IIT Cult Meet" },
        { href: "/sports-meet", label: "Inter IIT Sports Meet" },
    ]
    return (
        <header className="flex justify-between p-4 w-screen">
            <div className="flex items-center gap-2">
                <img className="w-16 h-auto" src="/img/logo.png" alt="" />
                <h1 className="text-2xl font-semibold font-montserrat">STUDENTS' GYMKHANA</h1>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium hover:text-primary transition-colors">
                <Link href="/home" >HOME</Link>
                <Link href="/facilities" >FACILITIES</Link>

                <Dropdown options={CouncilOptions}>COUNCILS</Dropdown>
                <Link href="/fests" >FESTS</Link>
                <Dropdown options={MeetOptions}>MEETS</Dropdown>
                <Link href="/constitution" className="text-sm font-medium hover:text-primary transition-colors">CONSTITUTION</Link>
                <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">CONTACT US</Link>
            </div>
        </header>
    );
}