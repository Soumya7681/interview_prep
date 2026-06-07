import { COMPILER_URL } from "@/lib/site";

// "JS Compiler" call-to-action — opens the Programiz online compiler in a new tab.
// Used in the header, on the landing page, and on the playground page.
export default function CompilerButton({
  variant = "header",
  label = "JS Compiler",
  className = "",
}: {
  variant?: "header" | "hero";
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={COMPILER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`compiler-btn compiler-btn-${variant} ${className}`.trim()}
      aria-label="Open the online JavaScript compiler"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="8 9 11 12 8 15" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="13" y1="15" x2="16" y2="15" strokeLinecap="round" />
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
