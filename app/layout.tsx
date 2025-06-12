import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
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
    default: "OriginPDF – Free PDF Tools",
    template: "%s | OriginPDF",
  },
  description:
    "OriginPDF offers fast, accurate, and free PDF tools – starting with PDF to Word conversion. Clean formatting, no signup.",
  keywords: [
    "OriginPDF",
    "PDF to Word",
    "free PDF converter",
    "convert PDF online",
    "PDF tools",
    "online docx generator",
    "PDF editing tools",
  ],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
