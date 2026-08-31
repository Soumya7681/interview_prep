"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MANIFEST } from "@/lib/manifest";
import { COMPILER_URL } from "@/lib/site";
import { TRACKS } from "@/lib/roadmaps";

function slugHref(folder: string, file: string) {
  const base = file.replace(/\.md$/, "").toLowerCase();
  if (!folder && base === "readme") return "/start";
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

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // Auto-expand the section containing the active path
  useEffect(() => {
    const nextExpanded = { ...expanded };
    MANIFEST.forEach((sec) => {
      const hasActive = sec.chapters.some((ch) => {
        const href = slugHref(sec.folder, ch.file);
        return pathname === href || pathname === href + "/";
      });
      if (hasActive) {
        nextExpanded[sec.title] = true;
      }
    });
    // Also default to expanding the first section if nothing is expanded
    if (Object.keys(nextExpanded).length === 0) {
      nextExpanded[MANIFEST[0].title] = true;
    }
    setExpanded(nextExpanded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const toggleSection = (title: string) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const isSearching = q.length > 0;

  const showPractice =
    !q || ["practice", "playground", "compiler", "javascript", "js"].some((k) => k.includes(q) || q.includes(k));

  // The roadmap area is not part of MANIFEST (it is data-driven, not markdown)
  // and is deliberately one entry, not one per track: the catalogue is meant to
  // grow, and the sidebar is for the book. Track names still match the search so
  // typing "mlops" surfaces the way in.
  const showRoadmaps =
    !q ||
    "roadmaps career tracks".includes(q) ||
    TRACKS.some(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.shortTitle.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q),
    );

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

        {showRoadmaps && (
          <div className="section-group">
            <div className="section-label">Career</div>
            <Link
              href="/roadmaps"
              className={`chap-link ${
                pathname === "/roadmaps" || pathname.startsWith("/roadmaps/") ? "is-active" : ""
              }`}
            >
              <span className="chap-num">◈</span>
              <span>Roadmaps</span>
            </Link>
          </div>
        )}

        {showPractice && (
          <div className="section-group">
            <div className="section-label">Practice</div>
            <Link
              href="/playground"
              className={`chap-link ${
                pathname === "/playground" || pathname === "/playground/" ? "is-active" : ""
              }`}
            >
              <span className="chap-num">▶</span>
              <span>JS Playground</span>
            </Link>
            <a
              href={COMPILER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="chap-link"
            >
              <span className="chap-num">↗</span>
              <span>Online Compiler</span>
            </a>
          </div>
        )}

        {sections.length === 0 && !showPractice && (
          <p style={{ color: "var(--text-muted)", fontSize: 12, padding: "8px 10px" }}>
            No chapters match.
          </p>
        )}

        {sections.map((sec) => {
          const isExpanded = isSearching || expanded[sec.title];
          
          return (
            <div key={sec.title} className="section-group">
              <div
                className="section-label"
                onClick={() => toggleSection(sec.title)}
                style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  {sec.title}
                  <span className="section-badge" style={{ marginLeft: "6px" }}>{sec.matched.length}</span>
                </span>
                {!isSearching && (
                  <span style={{ fontSize: "10px", opacity: 0.6, display: "flex", alignItems: "center" }}>{isExpanded ? "▼" : "▶"}</span>
                )}
              </div>

              {isExpanded && sec.matched.map((ch) => {
                const href = slugHref(sec.folder, ch.file);
                const isActive =
                  pathname === href || pathname === href + "/";

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
          );
        })}
      </aside>
    </>
  );
}
