import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Engineer — Building interfaces that make a difference.",
  description:
    "A frontend engineering portfolio focused on React, Next.js, TypeScript, and thoughtful digital products.",
  openGraph: {
    title: "Frontend Engineer — Building interfaces that make a difference.",
    description:
      "Product-minded frontend engineering. Thoughtful interfaces. Code built to last.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Engineer — Building interfaces that make a difference.",
    description:
      "Product-minded frontend engineering. Thoughtful interfaces. Code built to last.",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
