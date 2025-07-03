import { Metadata } from "next";
import Script from "next/script";
import PdfToDocConverter from "@/components/PdfToDocConverter";
import Image from "next/image";
import FadeInSection from "@/components/Animations/FadeInSection";

export const metadata: Metadata = {
  title: "Free PDF to Word Converter – No Sign-Up, No Watermark | OriginPDF",
  description: "...",
  robots: "index, follow",
  metadataBase: new URL("https://www.originpdf.com"),
  alternates: {
    canonical: "/pdf-to-doc",
  },
  openGraph: {
    title: "Free PDF to DOC Converter - Online & Secure | OriginPDF",
    description:
      "Convert PDFs to editable Word documents in seconds with OriginPDF.",
    url: "https://www.originpdf.com/pdf-to-doc",
    type: "website",
    images: [
      {
        url: "https://www.originpdf.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Convert PDF to DOCX with OriginPDF",
      },
    ],
  },
};

export default function PdfToDocPage() {
  return (
    <>
      {/* SEO Structured Data */}
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Free PDF to DOC Converter",
          description:
            "Convert your PDFs to editable DOC files online for free. Fast, secure, and easy to use — no signup required.",
          operatingSystem: "Web",
          applicationCategory: "Utility",
          url: "https://www.originpdf.com/pdf-to-doc",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1200",
          },
        })}
      </Script>

      <main className="min-h-screen w-full bg-white px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Title */}
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Free PDF to Word Converter (DOCX)
            </h1>
            <p className="text-gray-500 mt-2 text-lg sm:text-xl font-normal">
              Online, Fast & No Watermark
            </p>
          </div>
        </FadeInSection>

        {/* Tool Box */}
        <section className="mt-14 mb-20 flex justify-center">
          <PdfToDocConverter />
        </section>

        {/* Why Convert */}
        <FadeInSection>
          <section className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-0 py-10 text-gray-800 text-[1.06rem] leading-7">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-[Roboto]">
                Why Convert PDF to Word (DOCX)?
              </h2>
              <p className="font-[Roboto] text-gray-700 text-[1.05rem] leading-relaxed">
                PDFs are great for sharing — but editing them can be a hassle. Our converter turns static PDFs into fully editable Word documents (DOCX), so you can make changes in Microsoft Word or Google Docs{" "}
                <strong>without breaking layout or formatting</strong>. Whether you need to update a contract, revise a report, or reuse text, converting to DOC makes it easy.
              </p>
              <div className="mt-6">
                <Image
                  src="/images/whyoriginpdf.jpg"
                  width={800}
                  height={400}
                  alt="How PDF to Word conversion works"
                  className="rounded-md w-full shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* How to Use */}
        <FadeInSection>
          <div className="max-w-4xl w-full mx-auto px-4 mt-16">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 font-[Roboto]">How to Convert PDF to Word</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-800">
              <li>Upload your PDF using the drag-and-drop area.</li>
              <li>Click <strong>“Convert to Word”</strong> and wait a few seconds.</li>
              <li>Download your converted Word document instantly.</li>
            </ol>
          </div>
        </FadeInSection>

        {/* Key Features */}
        <FadeInSection>
          <div className="max-w-4xl w-full mx-auto px-4 mt-14">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 font-[Roboto]">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>No watermark, ever</li>
              <li>No sign-up or email needed</li>
              <li>Accurate formatting (fonts, images, layout preserved)</li>
              <li>Works on desktop & mobile</li>
              <li>Free forever – no hidden limits</li>
            </ul>
          </div>
        </FadeInSection>

        {/* File Security */}
        <FadeInSection>
          <div className="max-w-4xl w-full mx-auto px-4 mt-14">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 font-[Roboto]">Your Files Stay Private</h2>
            <p className="text-gray-700">
              We use encrypted connections and delete your file after conversion. No data is ever stored or shared. You're safe with OriginPDF.
            </p>
          </div>
        </FadeInSection>

        {/* Supported Formats */}
        <FadeInSection>
          <div className="max-w-4xl w-full mx-auto px-4 mt-14 mb-16">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 font-[Roboto]">Supported Formats</h2>
            <p className="text-gray-700">
              We currently support <strong>PDF to DOC (Microsoft Word)</strong>. Support for DOCX, TXT, and RTF is coming soon.
            </p>
          </div>
        </FadeInSection>
      </main>
    </>
  );
}