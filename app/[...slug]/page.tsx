import { notFound } from "next/navigation";
import { FLAT, findBySlug, DSA_PATH } from "@/lib/manifest";
import { loadChapterHtml, pagerFor } from "@/lib/content";
import { loadDsaContent } from "@/lib/dsa";
import Pager from "@/components/Pager";
import ReadAloud from "@/components/ReadAloud";
import DsaChecklist from "@/components/DsaChecklist";

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

  const { prev, next } = pagerFor(entry);

  // The DSA chapter renders as an interactive, progress-tracking checklist
  // rather than static markdown.
  if (entry.path === DSA_PATH) {
    const dsa = await loadDsaContent();
    return (
      <>
        <div className="breadcrumb">
          {entry.section} <span className="breadcrumb-current">· {entry.title}</span>
        </div>
        <article className="md">
          <h1>{dsa.title}</h1>
          {dsa.intro && <p className="dsa-intro">{dsa.intro}</p>}
        </article>
        <DsaChecklist categories={dsa.categories} total={dsa.total} />
        <Pager prev={prev} next={next} />
      </>
    );
  }

  const html = await loadChapterHtml(entry);

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
