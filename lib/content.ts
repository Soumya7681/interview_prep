import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import { Marked } from "marked";
import hljs from "highlight.js";
import { FLAT, FlatChapter } from "./manifest";

// Markdown lives at the Next.js project root (same folder as package.json)
const ROOT = process.cwd();

const marked = new Marked({
  gfm: true,
  breaks: false,
});

// Custom renderer to highlight code blocks + rewrite internal .md links
const renderer = {
  code({ text, lang }: { text: string; lang?: string }) {
    const language = lang && hljs.getLanguage(lang) ? lang : "plaintext";
    const highlighted = hljs.highlight(text, { language, ignoreIllegals: true }).value;
    return `<pre><code class="hljs language-${language}">${highlighted}</code></pre>`;
  },
};
marked.use({ renderer });

function rewriteHref(href: string, currentPath: string): string {
  if (!href) return href;
  if (/^https?:/i.test(href)) return href;
  if (href.startsWith("#")) return href;

  // Resolve relative path against current file's folder
  const baseSegments = currentPath.split("/").slice(0, -1);
  const refSegments = href.split("/");
  const out = [...baseSegments];
  for (const seg of refSegments) {
    if (seg === "..") out.pop();
    else if (seg !== ".") out.push(seg);
  }
  const resolved = out.join("/");

  // Only rewrite if it points to a known chapter
  const match = FLAT.find((f) => f.path.toLowerCase() === resolved.toLowerCase());
  if (!match) return href;

  return "/" + match.slug.join("/");
}

function rewriteLinks(html: string, currentPath: string): string {
  return html.replace(
    /<a\s+([^>]*?)href="([^"]+)"([^>]*)>/g,
    (full, before, href, after) => {
      const newHref = rewriteHref(href, currentPath);
      return `<a ${before}href="${newHref}"${after}>`;
    },
  );
}

// Wrap every <table>…</table> so it can scroll horizontally on small screens
function wrapTables(html: string): string {
  return html.replace(
    /<table\b[\s\S]*?<\/table>/g,
    (m) => `<div class="md-table-wrap">${m}</div>`,
  );
}

export async function loadChapterHtml(chapter: FlatChapter): Promise<string> {
  const filePath = path.join(ROOT, chapter.path);
  const md = await fs.readFile(filePath, "utf8");
  const html = await marked.parse(md);
  return wrapTables(rewriteLinks(html as string, chapter.path));
}

export async function loadReadme(): Promise<string> {
  const md = await fs.readFile(path.join(ROOT, "README.md"), "utf8");
  const html = await marked.parse(md);
  return wrapTables(rewriteLinks(html as string, "README.md"));
}

export function pagerFor(chapter: FlatChapter) {
  const idx = FLAT.findIndex((f) => f.slug.join("/") === chapter.slug.join("/"));
  return {
    prev: idx > 0 ? FLAT[idx - 1] : null,
    next: idx >= 0 && idx < FLAT.length - 1 ? FLAT[idx + 1] : null,
  };
}
