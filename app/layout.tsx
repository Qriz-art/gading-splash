import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const baseUrl = "https://gadingsplash.com";
const ogImage = `${baseUrl}/images/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Gading Splash Water | Water Park & Gading Paradise Kebumen",
    template: "%s | Gading Splash Water",
  },
  description:
    "Nikmati liburan keluarga di Gading Splash Water / Gading Paradise Kebumen. Bermain air, menikmati kolam renang, menjelajahi miniatur dunia, taman bermain, dan berbagai spot foto menarik di Pejagoan.",
  keywords: [
    "Gading Splash Water",
    "Gading Paradise",
    "Water Park Kebumen",
    "Wisata Kebumen",
    "Kolam Renang Pejagoan",
    "Miniatur Dunia Kebumen",
    "Wisata Keluarga",
    "Tempat Berenang Anak",
  ],
  authors: [{ name: "Gading Splash Water" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: baseUrl,
    siteName: "Gading Splash Water",
    title: "Gading Splash Water | Water Park & Gading Paradise Kebumen",
    description:
      "Nikmati liburan keluarga di Gading Splash Water / Gading Paradise Kebumen. Bermain air, menikmati kolam renang, menjelajahi miniatur dunia, taman bermain, dan berbagai spot foto menarik di Pejagoan.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Gading Splash Water - Water Park & Gading Paradise Kebumen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gading Splash Water | Water Park & Gading Paradise Kebumen",
    description:
      "Nikmati liburan keluarga di Gading Splash Water / Gading Paradise Kebumen.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Gading Splash Water / Gading Paradise",
    description:
      "Destinasi wisata keluarga di Pejagoan, Kebumen yang menawarkan pengalaman bermain air, area miniatur, taman bermain, dan berbagai spot menarik.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. R. Bodronolo",
      addressLocality: "Pejagoan",
      addressRegion: "Kebumen",
      addressCountry: "ID",
      postalCode: "54361",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.6,
      longitude: 109.6,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "2183",
      bestRating: "5",
    },
    priceRange: "$$",
    image: ogImage,
    url: baseUrl,
  };

  return (
    <html lang="id" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
