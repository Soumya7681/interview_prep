"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import StarButton from "./StarButton";
import CompilerButton from "./CompilerButton";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isLanding = pathname === "/";

  const toggleTheme = () => {
    const html = document.documentElement;
    const next = html.dataset.theme === "dark" ? "light" : "dark";
    html.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <>
      {isLanding ? (
        <div className="landing-sticky-nav">
          <Link href="/start" className="np-btn landing-nav-btn">
            Dashboard →
          </Link>
          <button aria-label="Toggle theme" className="np-btn landing-nav-btn icon-only" onClick={toggleTheme}>
            <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinejoin="round" />
            </svg>
            <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
              <circle cx="12" cy="12" r="4" />
              <path
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      ) : (
        <header className="app-header">
          <button
            aria-label="Toggle menu"
            className="icon-btn mobile-only"
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          </button>

          <Link href="/" className="brand">
            <span className="brand-mark">JP</span>
            <span>JobPrep</span>
            <span className="brand-tag desktop-only">full-stack interview</span>
          </Link>

          <div style={{ flex: 1 }} />

          <Link href="/roadmaps" className="rm-header-btn" aria-label="Career roadmaps">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="6" cy="6" r="2.5" />
              <circle cx="18" cy="18" r="2.5" />
              <path d="M6 8.5V13a3 3 0 0 0 3 3h6" strokeLinecap="round" />
            </svg>
            <span>Roadmaps</span>
          </Link>

          <CompilerButton variant="header" />
          <StarButton variant="header" />

          <button aria-label="Toggle theme" className="icon-btn" onClick={toggleTheme}>
            <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinejoin="round" />
            </svg>
            <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>
      )}

      <div className="shell-grid">
        {!isLanding && <Sidebar open={open} onClose={() => setOpen(false)} />}
        <main className={isLanding ? "landing-main" : "content"}>{children}</main>
      </div>
    </>
  );
}
