import type { Metadata } from "next";
import { COMPILER_URL, COMPILER_NAME } from "@/lib/site";
import CompilerButton from "@/components/CompilerButton";

export const metadata: Metadata = {
  title: "JavaScript Playground — Run Code Online",
  description:
    "Practice and run JavaScript directly in the browser with the Programiz online compiler — test interview code examples without leaving the prep book.",
  alternates: { canonical: "/playground" },
};

export default function PlaygroundPage() {
  return (
    <>
      <div className="breadcrumb">
        Practice <span className="breadcrumb-current">· JS Compiler</span>
      </div>

      <div className="pg-head">
        <div>
          <h1 className="pg-title">JavaScript Playground</h1>
          <p className="pg-sub">
            Run and tweak the code examples from this prep book using the{" "}
            <strong>{COMPILER_NAME}</strong>. If the embed doesn&apos;t load,
            open it in a new tab.
          </p>
        </div>
        <CompilerButton variant="hero" label="Open in new tab ↗" />
      </div>

      <div className="pg-frame-wrap">
        <iframe
          className="pg-frame"
          src={COMPILER_URL}
          title={COMPILER_NAME}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        />
      </div>

      <p className="pg-note">
        Compiler embedded from{" "}
        <a href={COMPILER_URL} target="_blank" rel="noopener noreferrer">
          programiz.com
        </a>
        . All code runs on their servers — nothing you type here is stored by
        this site.
      </p>
    </>
  );
}
