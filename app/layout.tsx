import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import EzoicAdPlaceholder from "@/components/EzoicAdPlaceholder";
import EzoicAdsLoader from "@/components/EzoicAdsLoader";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://originpdf.com"),
  title: {
    default: "OriginPDF - Free PDF to DOC Converter",
    template: "%s | OriginPDF",
  },
  description:
    "Convert PDF to Word instantly and free with OriginPDF. No watermark, no signup. Get editable DOCX files from your PDFs with formatting preserved - online and secure.",
  keywords: [
    "OriginPDF", "PDF to Word", "free PDF converter",
    "convert PDF online", "PDF tools", "online docx generator",
    "PDF editing tools", "Word to PDF", "DOC to PDF",
  ],
  authors: [{ name: "OriginPDF" }],
  creator: "OriginPDF",
  publisher: "OriginPDF",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://originpdf.com",
    siteName: "OriginPDF",
    title: "OriginPDF - Free PDF to Word Converter",
    description: "Convert PDF to Word instantly and free. No watermark, no signup required.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "OriginPDF - Free PDF Converter" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OriginPDF - Free PDF to Word Converter",
    description: "Convert PDF to Word instantly and free. No watermark, no signup required.",
    images: ["/images/og-image.jpg"],
    creator: "@originpdf",
  },
  alternates: { canonical: "https://originpdf.com" },
  verification: { google: "XmU6JSvyIIvpU1-vHU3Wckn0w3JpceXuFgkiatEJmyk" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Ezoic Privacy Scripts — data-cfasync MUST be before src */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script data-cfasync="false" src="https://cmp.gatekeeperconsent.com/min.js" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script data-cfasync="false" src="https://the.gatekeeperconsent.com/cmp.min.js" />
        {/* ✅ Ezoic Header Script */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src="//www.ezojs.com/ezoic/sa.min.js" />
        {/* ✅ Ezoic Init */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ezstandalone = window.ezstandalone || {}; ezstandalone.cmd = ezstandalone.cmd || [];`,
          }}
        />
        {/* ✅ Ezoic Analytics */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="//ezoicanalytics.com/analytics.js" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}>
        {/* ✅ Google Analytics — BOTH scripts required */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YR8VJQNR8P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YR8VJQNR8P', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Header />

        {/* ✅ Global Top Ad — shows on every page */}
        <EzoicAdPlaceholder id={101} />

        {children}

        {/* ✅ Global Bottom Ad — shows on every page */}
        <EzoicAdPlaceholder id={102} />

        <Footer />

        {/* ✅ Single showAds() call for both global placements */}
        <EzoicAdsLoader placementIds={[101, 102]} />
      </body>
    </html>
  );
}