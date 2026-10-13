
import { notFound } from "next/navigation";
import SocietyBody from "@/components/societies/SocietyBody";
import { getAllSocieties, getSocietyBySlug } from "@/lib/society";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSocieties().map(({ society }) => ({
    slug: society.slug,
  }));
}

export default async function SocietyPage({ params }: Props) {
  const { slug } = await params;
  const result = getSocietyBySlug(slug);

  if (!result) {
    notFound();
  }

  return (
    <SocietyBody
      society={result.society}
      type={result.type}
    />
  );
}
