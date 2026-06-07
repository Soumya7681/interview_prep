import Link from "next/link";
import type { FlatChapter } from "@/lib/manifest";

function hrefFor(ch: FlatChapter) {
  return ch.slug.length === 1 && ch.slug[0] === "readme"
    ? "/start"
    : "/" + ch.slug.join("/");
}

export default function Pager({
  prev,
  next,
}: {
  prev: FlatChapter | null;
  next: FlatChapter | null;
}) {
  return (
    <nav className="pager">
      {prev ? (
        <Link href={hrefFor(prev)} className="pager-card prev">
          <span className="pager-label">← Previous</span>
          <span className="pager-title">{prev.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={hrefFor(next)} className="pager-card next">
          <span className="pager-label">Next →</span>
          <span className="pager-title">{next.title}</span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
