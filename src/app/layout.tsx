import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const pageTitle = `${portfolio.name} | Martin Jerez Leal — Frontend Engineer (React, Next.js, TypeScript)`;
const pageDescription =
  "Frontend Engineer in Tucumán, Argentina, working with React, Next.js, TypeScript, and Tailwind CSS. Building web experiences since 2020.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  applicationName: `${portfolio.name} — Portfolio`,
  authors: [{ name: portfolio.name }],
  creator: portfolio.name,
  publisher: portfolio.name,
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Frontend Development",
    "Tucumán",
    "Argentina",
    "Full Stack Development",
    "Web Development",
    "Portfolio",
    "Personal Website",
    "Frontend Portfolio",
    "Web Portfolio",
    "Developer Portfolio",
    "Frontend Developer Portfolio",
    "React Portfolio",
    "Next.js Portfolio",
    "TypeScript Portfolio",
    "Tailwind CSS Portfolio"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    siteName: `${portfolio.name} — Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
