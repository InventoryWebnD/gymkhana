
import technicalSocieties from "@/data/tech.json";
import culturalSocieties from "@/data/cult.json";

export type SocietyContact = {
  name: string;
  role: string;
  image?: string;
  email?: string;
  phone?: string;
};

export type Society = {
  slug: string;
  name: string;
  subtitle: string;
  logo: string;
  bannerImage: string;
  aboutImage: string;
  aboutCaption: string;
  aboutTitle: string;
  aboutDescription: string;
  highlights?: string[];
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
  happenings?: {
    title: string;
    description: string;
    date?: string;
    image?: string;
    link?: string;
  }[];
  otherSocieties?: {
    name: string;
    logo: string;
    link: string;
  }[];
  contacts?: {
    secretary?: SocietyContact;
    governors?: SocietyContact[];
  };
};

export type SocietyType = "technical" | "cultural";

const technical = technicalSocieties as Society[];
const cultural = culturalSocieties as Society[];

export function getAllSocieties() {
  return [
    ...technical.map((society) => ({
      society,
      type: "technical" as const,
    })),
    ...cultural.map((society) => ({
      society,
      type: "cultural" as const,
    })),
  ];
}

export function getSocietyBySlug(slug: string) {
  return getAllSocieties().find(
    (item) => item.society.slug === slug
  );
}
