import { loadReadme, pagerFor } from "@/lib/content";
import { FLAT } from "@/lib/manifest";
import { loadDsaContent } from "@/lib/dsa";
import Pager from "@/components/Pager";
import HomeDashboard from "@/components/HomeDashboard";

export default async function HomePage() {
  const html = await loadReadme();
  const dsa = await loadDsaContent();
  const readmeEntry = FLAT[0]; // README is registered first in the manifest
  const { prev, next } = pagerFor(readmeEntry);

  return (
    <>
      <div className="breadcrumb">
        Getting Started <span className="breadcrumb-current">· Home</span>
      </div>
      <HomeDashboard dsaTotal={dsa.total} />
      <article className="md" dangerouslySetInnerHTML={{ __html: html }} />
      <Pager prev={prev} next={next} />
    </>
  );
}
