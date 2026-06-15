import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import ParallaxScrollProvider from "@/providers/ParallaxScrollProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import { META_DATA } from "@/utils/constant";
import GoogleAnalytics from "@/components/google/GoogleAnalystic";

const APP_TITLE = `${META_DATA.appName} – Sushi & Japansk Mat i Helsingborg`;

export const metadata: Metadata = {
  metadataBase: new URL(META_DATA.baseUrl),
  title: {
    default: APP_TITLE,
    template: `%s | ${META_DATA.appName}`,
  },
  description: `Välkommen till ${META_DATA.appName} – din destination för autentisk sushi, japanska bowls och vietnamesisk mat i Helsingborg. Beställ take away eller boka bord.`,
  keywords: [
    "sushi helsingborg",
    "lunch helsingborg",
    "asiatisk mat helsingborg",
    "sushi takeaway",
    "japansk restaurang helsingborg",
    "sushi restaurant sweden",
  ],
  authors: [{ name: META_DATA.appName, url: META_DATA.baseUrl }],
  creator: META_DATA.appName,
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/images/apple-touch-icon.jpg" },
    other: [
      {
        rel: "icon",
        url: "/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: META_DATA.baseUrl,
    siteName: META_DATA.appName,
    title: APP_TITLE,
    description: `Välkommen till ${META_DATA.appName} – autentisk sushi, japanska bowls och vietnamesisk mat i Helsingborg.`,
    images: [
      {
        url: `${META_DATA.baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: APP_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_TITLE,
    description: `Välkommen till ${META_DATA.appName} – autentisk sushi och japansk mat i Helsingborg.`,
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
      <head>
        <meta
          name="theme-color"
          content="#000000"
        />
      </head>
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only"
        >
          Hoppa till innehåll
        </a>
        <ParallaxScrollProvider>
          <main>
            <Header />
            <Hero />

            {children}
            <Footer />
          </main>
        </ParallaxScrollProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
