"use client";

import Head from "next/head";
import PdfToDocConverter from "@/components/PdfToDocConverter";
import Script from "next/script";


export default function PdfToDocPage() {
  return (
    <>
      <Head>
        <title>Convert PDF to DOC - Free Online PDF to Word Converter | PDFToolbox</title>
        <meta name="description" content="Fast, secure, and free PDF to DOC converter. Easily turn your PDFs into editable Word documents with our online tool – no signup required." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/pdf-to-doc" />
        <meta property="og:title" content="Free PDF to DOC Converter - Online & Secure" />
        <meta property="og:description" content="Convert PDFs to editable Word documents in seconds." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/pdf-to-doc" />
      </Head>

      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Free PDF to DOC Converter",
          description:
            "Convert your PDFs to editable DOC files online for free. Fast, secure, and easy to use — no signup required.",
          operatingSystem: "Web",
          applicationCategory: "Utility",
          url: "https://yourdomain.com/pdf-to-doc",
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
  {/* PAGE TITLE */}
  <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-14 leading-tight tracking-tight">
    Free PDF to DOC Converter
  </h1>

  {/* TOOL SECTION */}
  <section className="mb-20 flex justify-center">
    <PdfToDocConverter />
  </section>

  {/* INFO SECTION */}
  <section className="max-w-4xl w-full mx-auto space-y-14 text-gray-800 text-[1.06rem] leading-7">
    {/* WHY CONVERT */}
    <div>
      <h2 className="text-2xl font-semibold mb-3 text-gray-900">Why Convert PDF to DOC?</h2>
      <p>
        PDFs are great for sharing, but editing them is a challenge. Our tool converts PDFs into fully editable DOC files, 
        so you can make changes in Microsoft Word or Google Docs — without losing formatting.
      </p>
    </div>

    {/* HOW TO USE */}
    <div>
      <h2 className="text-2xl font-semibold mb-3 text-gray-900">How to Use the Converter</h2>
      <ol className="list-decimal space-y-2 pl-6 text-gray-900">
        <li className="text-black">Upload your PDF using the drag-and-drop area.</li>
        <li>Click <strong>“Convert to DOC”</strong> and wait a few seconds.</li>
        <li>Download your converted Word file instantly.</li>
      </ol>
    </div>

    {/* FEATURES */}
    <div>
      <h2 className="text-2xl font-semibold mb-3 text-gray-900">Key Features</h2>
      <ul className="list-disc space-y-2 pl-6 text-gray-700">
        <li>100% free — no limits, no watermarks</li>
        <li>No email or account required</li>
        <li>Fast & accurate conversion engine</li>
        <li>Secure — files are never stored or reused</li>
      </ul>
    </div>

    {/* SECURITY */}
    <div>
      <h2 className="text-2xl font-semibold mb-3 text-gray-900">Is My File Safe?</h2>
      <p>
        Absolutely. Your files are either processed directly in your browser or securely on our backend and deleted immediately.
        We never store or access your files after conversion.
      </p>
    </div>

    {/* FORMATS */}
    <div>
      <h2 className="text-2xl font-semibold mb-3 text-gray-900">Supported Formats</h2>
      <p>
        Currently, we support <strong>PDF to DOC</strong> (Microsoft Word). Support for DOCX, TXT, and RTF is coming soon.
      </p>
    </div>
  </section>
</main>

    </>
  );
}