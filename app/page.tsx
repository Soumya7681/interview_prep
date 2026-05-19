import { loadReadme, pagerFor } from "@/lib/content";
import { FLAT } from "@/lib/manifest";
import Pager from "@/components/Pager";

export default async function HomePage() {
  const html = await loadReadme();
  const readmeEntry = FLAT[0]; // README is registered first in the manifest
  const { prev, next } = pagerFor(readmeEntry);

  return (
    <>
      <div className="breadcrumb">
        Getting Started <span className="breadcrumb-current">· Home</span>
      </div>
      <article className="md" dangerouslySetInnerHTML={{ __html: html }} />
      <Pager prev={prev} next={next} />
    </>
  );
}
