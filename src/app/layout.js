import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '../components/Footer';
import { LanguageProvider } from '../components/LanguageContext';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  // --- Basic ---
  title: {
    default: "Utopia VIP Tourism & Real Estate | Georgia Tours | جولات جورجيا | საქართველო",
    template: "%s | Utopia VIP Travel",
  },
  description:
    "Explore Georgia with Utopia VIP Travel. Luxury tours, real estate & exclusive travel packages. جولات سياحية فاخرة في جورجيا — طبيعة، ثقافة وفخامة. Best Georgia tours from 7 to 14 nights.",
  keywords: [
    "Georgia tours",
    "جولات جورجيا",
    "سياحة جورجيا",
    "رحلات إلى جورجيا",
    "تبليسي",
    "أفضل جولات جورجيا",
    "عقارات جورجيا",
    "Georgia tourism",
    "Georgia travel packages",
    "Tbilisi tours",
    "luxury Georgia tours",
    "საქართველო ტურები",
    "Utopia VIP Travel",
    "Georgia real estate",
    "Visit Georgia",
  ],

  // --- Canonical & hreflang ---
  alternates: {
    canonical: "https://www.utopiaviptravel.com",
    languages: {
      "en": "https://www.utopiaviptravel.com",
      "ar": "https://www.utopiaviptravel.com/ar",
    },
  },

  // --- Open Graph (Facebook, WhatsApp, LinkedIn) ---
  openGraph: {
    title: "Utopia VIP Tourism & Real Estate | Georgia Tours | جولات جورجيا",
    description:
      "Luxury tours & real estate in Georgia. جولات فاخرة إلى جورجيا — تبليسي، الطبيعة، الثقافة. Book your dream Georgia trip today.",
    url: "https://www.utopiaviptravel.com",
    siteName: "Utopia VIP Travel",
    locale: "en_US",
    alternateLocale: ["ar_AE", "ar_SA", "ar_EG"],
    type: "website",
    images: [
      {
        url: "https://www.utopiaviptravel.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Utopia VIP Travel - Georgia Tours | جولات جورجيا",
      },
    ],
  },

  // --- Robots ---
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

  // --- Icons ---
  icons: {
    icon: "/favicon.ico",
  },

  // --- Metadata base ---
  metadataBase: new URL("https://www.utopiaviptravel.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LanguageProvider>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}