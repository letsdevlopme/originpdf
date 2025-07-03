import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "OriginPDF – Free PDF to DOC Converter – Convert PDF to Word Online (No Watermark)",
    template: "%s | OriginPDF",
  },
  description:
    "Convert PDF to Word instantly and free with OriginPDF. No watermark, no signup. Get editable DOCX files from your PDFs with formatting preserved – online and secure.",
  keywords: [
    "OriginPDF",
    "PDF to Word",
    "free PDF converter",
    "convert PDF online",
    "PDF tools",
    "online docx generator",
    "PDF editing tools",
  ],
  alternates: {
    canonical: "https://www.originpdf.com/pdf-to-doc",
  },
  metadataBase: new URL("https://originpdf.com"),
  openGraph: {
    title: "OriginPDF – Free PDF to Word Converter",
    description:
      "Convert PDF to Word in seconds with high accuracy and formatting. No signup, 100% free.",
    url: "https://originpdf.com",
    siteName: "OriginPDF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OriginPDF – Free PDF Tools",
    description:
      "Free and fast PDF conversion tools including PDF to Word, powered by OriginPDF.",
    creator: "@originpdf",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        {/* ✅ Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="XmU6JSvyIIvpU1-vHU3Wckn0w3JpceXuFgkiatEJmyk"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
       {/* ✅ Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YR8VJQNR8P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YR8VJQNR8P');
          `}
        </Script>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
