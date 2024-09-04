import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vanessa Rivera Spa",
  description: "Vanessa Rivera Spa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7447126459140882"
     crossOrigin="anonymous"></script>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
