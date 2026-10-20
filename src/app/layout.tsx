import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const pageTitle = portfolio.seo.title;
const pageDescription = portfolio.seo.description;
const siteName = portfolio.name.trim()
  ? `${portfolio.name} — Portfolio`
  : "Frontend Engineer Portfolio";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  applicationName: siteName,
  ...(portfolio.name.trim() && {
    authors: [{ name: portfolio.name }],
    creator: portfolio.name,
    publisher: portfolio.name,
  }),
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
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
