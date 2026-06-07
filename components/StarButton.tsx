import { GITHUB_STARS_URL } from "@/lib/site";

// "Star on GitHub" call-to-action. Used in the header and on the landing page.
// `variant` controls sizing/emphasis; both link to the repo's stargazers page.
export default function StarButton({
  variant = "header",
  className = "",
}: {
  variant?: "header" | "hero";
  className?: string;
}) {
  return (
    <a
      href={GITHUB_STARS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`star-btn star-btn-${variant} ${className}`.trim()}
      aria-label="Star this project on GitHub"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.5l2.92 5.92 6.54.95-4.73 4.6 1.12 6.51L12 17.93l-5.85 3.08 1.12-6.51-4.73-4.6 6.54-.95L12 2.5z" />
      </svg>
      <span>Star on GitHub</span>
    </a>
  );
}
