import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ayush Jain // Portfolio",
  description:
    "Ayush Jain — B.Tech CS from KIIT. Full-stack developer, gamer, fitness enthusiast. Builder who believes in YOLO.",
  keywords: [
    "Ayush Jain",
    "portfolio",
    "full-stack developer",
    "KIIT",
    "React",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    title: "Ayush Jain // Portfolio",
    description:
      "B.Tech CS from KIIT. Full-stack developer, gamer, fitness enthusiast.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Jain // Portfolio",
    description:
      "B.Tech CS from KIIT. Full-stack developer, gamer, fitness enthusiast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
