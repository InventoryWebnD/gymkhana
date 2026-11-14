import type { Metadata } from "next";
import { Anybody, Brygada_1918, Martian_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

// Display: variable width (condensed → ultra-expanded) for headlines and the wordmark.
const anybody = Anybody({
    variable: "--font-anybody",
    subsets: ["latin"],
    axes: ["wdth"],
});

// Accent: a revived 1918 book face; used mostly in italic.
const brygada = Brygada_1918({
    variable: "--font-brygada",
    subsets: ["latin"],
    style: ["normal", "italic"],
});

// Body: Schibsted's editorial grotesk.
const schibsted = Schibsted_Grotesk({
    variable: "--font-schibsted",
    subsets: ["latin"],
});

// Labels: a wide, technical mono.
const martian = Martian_Mono({
    variable: "--font-martian",
    subsets: ["latin"],
    axes: ["wdth"],
});

export const metadata: Metadata = {
    title: "Students' Gymkhana, IIT Bhubaneswar",
    description:
        "The Students' Gymkhana is the elected student body of IIT Bhubaneswar, home to the Science & Technology, Socio-Cultural and Sports councils.",
    icons: {
        icon: "/icons/iitbbs.png",
        shortcut: "/icons/iitbbs.png",
        apple: "/icons/iitbbs.png",
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${anybody.variable} ${brygada.variable} ${schibsted.variable} ${martian.variable} h-full antialiased`}
        >
            <body>
                {children}
            </body>
        </html>
    );
}
