import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scrapeox — Web Scraping API That Actually Works",
  description:
    "Proprietary browser engine. 95%+ success rate on protected sites. Simple API, honest pricing. Get web data without the headache.",
  keywords: [
    "web scraping api",
    "scraping api",
    "cloudflare bypass",
    "web data extraction",
    "scrapeox",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
