"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type TocItem = { id: string; text: string; level: 2 | 3 };

/**
 * "On this page" rail for long chapters. The heading list is extracted on the
 * server from the rendered markdown (see tocFromHtml in lib/content.ts); this
 * component only tracks which one is in view. Hidden below 1280px, where the
 * reading column needs the width more.
 */
export default function Toc({ items }: { items: TocItem[] }) {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((h): h is HTMLElement => h !== null);
    if (headings.length === 0) return;

    // Active = the first heading inside the top band of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-64px 0px -70% 0px" },
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items, pathname]);

  if (items.length < 3) return null;

  return (
    <nav className="toc" aria-label="On this page">
      <p className="toc-title">On this page</p>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "toc-sub" : undefined}>
            <a
              href={`#${item.id}`}
              className={active === item.id ? "is-active" : undefined}
              aria-current={active === item.id ? "location" : undefined}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
