import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Wedding of Chintia & Tommy | Undangan Pernikahan",
  description: "Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri hari bahagia pernikahan kami.",
  keywords: ["undangan pernikahan", "wedding invitation", "chintia & tommy", "undangan digital"],
  openGraph: {
    title: "The Wedding of Chintia & Tommy",
    description: "Sabtu, 28 November 2026 - Undangan Pernikahan Digital",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preload" as="image" href="/images/couple-front.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/couple-flower.jpg" />
        <link rel="preload" as="image" href="/images/couple-batik-1.jpg" />
        <link rel="preload" as="image" href="/images/couple-batik-2.jpg" />
      </head>
      <body className="antialiased min-h-screen selection:bg-wedding-rose/20 selection:text-wedding-rose">
        {children}
      </body>
    </html>
  );
}
