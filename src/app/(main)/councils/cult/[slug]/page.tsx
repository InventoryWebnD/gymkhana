import { Suspense } from "react";
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

// The shell (nav, dark hero block) is shared by every society; the slug-specific
// content streams in behind Suspense so navigation stays instant.
export default function SocietyPage({ params }: Props) {
  return (
    <Suspense fallback={<main className="min-h-[78svh] w-full bg-ink" aria-busy="true" />}>
      <SocietyContent params={params} />
    </Suspense>
  );
}

async function SocietyContent({ params }: Props) {
  const { slug } = await params;
  const result = getSocietyBySlug(slug);

  if (!result) {
    notFound();
  }

  return <SocietyBody society={result.society} type={result.type} />;
}
