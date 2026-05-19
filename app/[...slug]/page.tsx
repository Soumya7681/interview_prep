import { notFound } from "next/navigation";
import { FLAT, findBySlug } from "@/lib/manifest";
import { loadChapterHtml, pagerFor } from "@/lib/content";
import Pager from "@/components/Pager";
import ReadAloud from "@/components/ReadAloud";

export async function generateStaticParams() {
  return FLAT
    // Home (README) is served at "/", not under /[...slug]
    .filter((f) => f.path !== "README.md")
    .map((f) => ({ slug: f.slug }));
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const entry = findBySlug(slug);
  if (!entry || entry.path === "README.md") notFound();

  const html = await loadChapterHtml(entry);
  const { prev, next } = pagerFor(entry);

  return (
    <>
      <div className="breadcrumb">
        {entry.section} <span className="breadcrumb-current">· {entry.title}</span>
      </div>
      <ReadAloud />
      <article className="md" dangerouslySetInnerHTML={{ __html: html }} />
      <Pager prev={prev} next={next} />
    </>
  );
}
