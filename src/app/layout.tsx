import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Priyanshu Ojha",
  description: "Portfolio website",
  keywords: "Priyanshu Ojha, Priyanshu Kumar, Full Stack Developer, Frontend Developer, Backend Developer, React Developer, Next.js, Node.js, Web Developer, Kanpur",
  authors: [{ name: "Priyanshu Ojha" }],
  openGraph: {
    title: "Priyanshu Ojha | Full Stack Developer",
    description: "Full Stack Developer skilled in React, Next.js and Node.js.",
    url: "https://www.priyanshuojha.in",
    siteName: "Priyanshu Ojha Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Ojha | Full Stack Developer",
    description: "Full Stack Developer skilled in React, Next.js and Node.js.",
  },
};

import BottomDock from "@/components/BottomDock";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
          
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Analytics/>
        <CursorTrail />
        {children}
        <BottomDock />
      </body>
    </html>
  );
}
