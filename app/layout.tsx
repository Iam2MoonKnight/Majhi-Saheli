import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_NAME } from "@/lib/seo";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const monoFont = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.msct.org.in"),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Empowering rural women and communities across Maharashtra through education, health, livelihood and sustainable community leadership.",
  keywords: "NGO, women empowerment, education, health, rural women, skills development, Maharashtra",
  robots: "index, follow",
  openGraph: {
    title: SITE_NAME,
    description:
      "Empowering rural women and communities across Maharashtra through education, health, livelihood and sustainable community leadership.",
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    images: [{ url: "/logo.png", alt: SITE_NAME }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="min-h-screen w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
