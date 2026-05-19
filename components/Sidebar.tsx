"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MANIFEST } from "@/lib/manifest";

function slugHref(folder: string, file: string) {
  const base = file.replace(/\.md$/, "").toLowerCase();
  if (!folder && base === "readme") return "/";
  return folder ? `/${folder}/${base}` : `/${base}`;
}

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  // Close on route change
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock background scroll when the mobile drawer is open
  useEffect(() => {
    document.body.classList.toggle("has-drawer-open", open);
    return () => document.body.classList.remove("has-drawer-open");
  }, [open]);

  const sections = MANIFEST.map((sec) => {
    const matched = sec.chapters.filter(
      (ch) =>
        !q ||
        ch.title.toLowerCase().includes(q) ||
        sec.title.toLowerCase().includes(q),
    );
    return { ...sec, matched };
  }).filter((s) => s.matched.length > 0);

  return (
    <>
      {open && <div className="sidebar-scrim" onClick={onClose} />}

      <aside className={`sidebar ${open ? "is-open" : ""}`}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search chapters…"
          className="search-input"
          spellCheck={false}
          autoComplete="off"
        />

        {sections.length === 0 && (
          <p style={{ color: "var(--text-muted)", fontSize: 12, padding: "8px 10px" }}>
            No chapters match.
          </p>
        )}

        {sections.map((sec) => (
          <div key={sec.title} className="section-group">
            <div className="section-label">
              {sec.title}
              <span className="section-badge">{sec.matched.length}</span>
            </div>

            {sec.matched.map((ch) => {
              const href = slugHref(sec.folder, ch.file);
              const isActive =
                href === "/"
                  ? pathname === "/"
                  : pathname === href || pathname === href + "/";

              return (
                <Link
                  key={href}
                  href={href}
                  className={`chap-link ${isActive ? "is-active" : ""}`}
                >
                  <span className="chap-num">{ch.num}</span>
                  <span>{ch.title}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </aside>
    </>
  );
}
