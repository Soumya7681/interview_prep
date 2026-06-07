import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Shell from "@/components/Shell";
import { SITE_URL, SITE_NAME, SITE_TAGLINE, SEO_KEYWORDS } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Full-Stack Developer Interview Prep Book — React, Node.js, MongoDB & DSA",
    template: "%s · Prep Book",
  },
  description: SITE_TAGLINE,
  applicationName: SITE_NAME,
  keywords: SEO_KEYWORDS,
  authors: [{ name: "Soumyaranjan" }],
  category: "education",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Full-Stack Developer Interview Prep Book",
    description: SITE_TAGLINE,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Developer Interview Prep Book",
    description: SITE_TAGLINE,
  },
};

// Runs synchronously in <head> before React hydrates → no flash of wrong theme
const themeBootstrap = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = 'light';
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
