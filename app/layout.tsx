import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import ParallaxScrollProvider from "@/providers/ParallaxScrollProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.myzushi.se"),
  title: {
    default: "Myzushi – Sushi & Japansk Mat i Helsingborg",
    template: "%s | Myzushi",
  },
  description:
    "Välkommen till Myzushi – din destination för autentisk sushi, japanska bowls och vietnamesisk mat i Helsingborg. Beställ take away eller boka bord.",
  keywords: ["sushi", "japansk mat", "helsingborg", "take away", "myzushi", "japanska bowls", "vietnamesisk mat"],
  authors: [{ name: "Myzushi", url: "https://www.myzushi.se" }],
  creator: "Myzushi",
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/images/apple-touch-icon.jpg" },
    other: [
      { rel: "icon", url: "/images/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/images/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://www.myzushi.se",
    siteName: "Myzushi",
    title: "Myzushi – Sushi & Japansk Mat i Helsingborg",
    description:
      "Välkommen till Myzushi – autentisk sushi, japanska bowls och vietnamesisk mat i Helsingborg.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Myzushi – Sushi & Japansk Mat i Helsingborg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Myzushi – Sushi & Japansk Mat i Helsingborg",
    description:
      "Välkommen till Myzushi – autentisk sushi och japansk mat i Helsingborg.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${workSans.variable}  h-full antialiased`}
    >
      <body>
        <ParallaxScrollProvider>
          <main>
            <Header />
            <Hero />

            {children}
            <Footer />
          </main>
        </ParallaxScrollProvider>
      </body>
    </html>
  );
}
