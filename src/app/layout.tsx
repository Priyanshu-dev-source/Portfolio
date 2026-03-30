import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/ClientShell";
import AsyncCSS from "@/components/AsyncCSS";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Priyanshu Ojha | Full Stack Developer",
  description:
    "Full Stack Developer skilled in React, Next.js and Node.js. Explore my portfolio, projects, and achievements.",
  keywords:
    "Priyanshu Ojha, Priyanshu Kumar, Full Stack Developer, Frontend Developer, Backend Developer, React Developer, Next.js, Node.js, Web Developer, Kanpur",
  authors: [{ name: "Priyanshu Ojha" }],
  openGraph: {
    title: "Priyanshu Ojha | Full Stack Developer",
    description:
      "Full Stack Developer skilled in React, Next.js and Node.js.",
    url: "https://www.priyanshuojha.in",
    siteName: "Priyanshu Ojha Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Ojha | Full Stack Developer",
    description:
      "Full Stack Developer skilled in React, Next.js and Node.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external CDN for faster fetch */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

        {/* Preload the hero image — likely LCP element */}
        <link
          rel="preload"
          href="/Adobe Express - file.webp"
          as="image"
          type="image/webp"
        />

        {/* Preload the devicon CSS so browser fetches early, but don't apply yet */}
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
          as="style"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Analytics />
        <SpeedInsights />
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  );
}
