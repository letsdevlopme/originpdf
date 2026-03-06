import { Metadata } from "next";
import Script from "next/script";
import DocToPdfConverter from "@/components/DocToPdfConverter";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/Animations/FadeInSection";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Free DOC to PDF Converter - Convert Word to PDF Online | OriginPDF",
  description:
    "Convert DOC and DOCX files to PDF online for free. No signup, no watermark. Fast, secure conversion with formatting preserved. Try OriginPDF now!",
  keywords: [
    "DOC to PDF",
    "Word to PDF converter",
    "convert DOC to PDF online",
    "free Word to PDF",
    "DOCX to PDF",
    "online PDF tools",
    "no watermark converter",
  ],
  openGraph: {
    title: "Free DOC to PDF Converter - No Watermark",
    description:
      "Convert your Word documents to PDF instantly. Free, secure, and easy to use.",
    url: "https://originpdf.com/doc-to-pdf",
    type: "website",
    images: [
      {
        url: "/images/og-doc-to-pdf.jpg",
        width: 1200,
        height: 630,
        alt: "OriginPDF - DOC to PDF Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free DOC to PDF Converter - No Watermark",
    description:
      "Convert Word to PDF online for free. Fast, secure, no signup required.",
    images: ["/images/og-doc-to-pdf.jpg"],
  },
  alternates: {
    canonical: "https://originpdf.com/doc-to-pdf",
  },
};

export default function DocToPdfPage() {
  return (
    <>
      {/* SEO Structured Data */}
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Free DOC to PDF Converter",
          description:
            "Convert your Word documents (DOC/DOCX) to PDF files online for free. Fast, secure, and easy to use — no signup required.",
          operatingSystem: "Web",
          applicationCategory: "Utility",
          url: "https://www.originpdf.com/doc-to-pdf",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "980",
          },
        })}
      </Script>

      <main className="min-h-screen w-full bg-white px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Title */}
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Free Word to PDF Converter
            </h1>
            <p className="text-gray-500 mt-2 text-lg sm:text-xl font-normal">
              Convert DOCX to PDF - Fast & No Watermark
            </p>
          </div>
        </FadeInSection>

        {/* Tool Box */}
        <section className="mt-8 mb-20 flex justify-center">
          <DocToPdfConverter />
        </section>

        {/* Related Tools Section */}
        <FadeInSection>
          <section className="max-w-4xl w-full mx-auto px-4 py-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center font-[Roboto]">
              Related Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* PDF to DOC Card */}
              <Link
                href="/pdf-to-doc"
                className="group bg-linear-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                    PDF to Word
                  </h3>
                  <ArrowRightIcon className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Convert PDF files to editable Word documents (DOCX). Extract text and preserve formatting.
                </p>
              </Link>

              {/* Tools Page Card */}
              <Link
                href="/tools"
                className="group bg-linear-to-br from-green-50 to-white border border-green-200 rounded-xl p-6 hover:shadow-lg hover:border-green-400 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition">
                    All PDF Tools
                  </h3>
                  <ArrowRightIcon className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Explore all our free PDF conversion and editing tools in one place.
                </p>
              </Link>
            </div>
          </section>
        </FadeInSection>

        {/* Why Convert */}
        <FadeInSection>
          <section className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-0 py-10 text-gray-800 text-[1.06rem] leading-7">
            <div className="bg-linear-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-[Roboto]">
                Why Convert Word to PDF?
              </h2>
              <p className="font-[Roboto] text-gray-700 text-[1.05rem] leading-relaxed">
                PDF is the universal format for sharing documents. Converting
                your Word files (DOCX) to PDF ensures{" "}
                <strong>your formatting stays intact</strong> across all
                devices and platforms. Whether you're sending a resume,
                contract, or report, PDFs guarantee professional presentation
                and prevent accidental edits. Our converter preserves fonts,
                images, and layout perfectly.
              </p>
              <div className="mt-6">
                <Image
                  src="/images/doc-to-pdf-preview.jpg"
                  width={800}
                  height={400}
                  alt="Convert Word documents to PDF with preserved formatting"
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
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 font-[Roboto]">
              How to Convert Word to PDF
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-800">
              <li>Upload your DOCX file using drag-and-drop.</li>
              <li>
                Click <strong>"Convert to PDF"</strong> and wait a few seconds.
              </li>
              <li>Download your converted PDF document instantly.</li>
            </ol>
          </div>
        </FadeInSection>

        {/* Key Features */}
        <FadeInSection>
          <div className="max-w-4xl w-full mx-auto px-4 mt-14">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 font-[Roboto]">
              Key Features
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>No watermark, ever</li>
              <li>No sign-up or email needed</li>
              <li>Perfect formatting preservation (fonts, images, tables)</li>
              <li>Supports DOCX format</li>
              <li>Works on desktop & mobile</li>
              <li>Free forever - no hidden limits</li>
            </ul>
          </div>
        </FadeInSection>

        {/* FAQ Section */}
        <FadeInSection>
          <section className="max-w-4xl w-full mx-auto px-4 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-[Roboto]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Why only DOCX files? What about DOC?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  DOCX is the modern Word format and preserves formatting better. Old DOC files use a different structure that's harder to convert accurately. You can save any DOC file as DOCX in Microsoft Word: File → Save As → Choose DOCX format.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is my file safe and private?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Absolutely! Your files are processed securely with encrypted connections. We automatically delete all files immediately after conversion. Nothing is stored on our servers.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's the file size limit?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You can convert files up to 10MB in size. This covers most documents, reports, and resumes. For larger files, consider compressing images in your Word document first.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I convert multiple files at once?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Currently, you can convert one file at a time. We're working on batch conversion features for future updates!
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Will my formatting be preserved?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! Our converter preserves headings, paragraphs, bold text, lists, and spacing. Complex formatting like tables and images are also maintained in the PDF output.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* File Security */}
        <FadeInSection>
          <div className="max-w-4xl w-full mx-auto px-4 mt-14">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 font-[Roboto]">
              Your Files Stay Private
            </h2>
            <p className="text-gray-700">
              We use encrypted connections and automatically delete your files
              after conversion. No data is ever stored or shared. You're safe
              with OriginPDF.
            </p>
          </div>
        </FadeInSection>

        {/* Use Cases */}
        <FadeInSection>
          <div className="max-w-4xl w-full mx-auto px-4 mt-14 mb-16">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 font-[Roboto]">
              Common Use Cases
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Resumes & CVs:</strong> Send professional documents
                that look perfect everywhere
              </li>
              <li>
                <strong>Contracts & Legal Documents:</strong> Prevent
                unauthorized edits
              </li>
              <li>
                <strong>Reports & Presentations:</strong> Share with consistent
                formatting
              </li>
              <li>
                <strong>Invoices & Forms:</strong> Create printable,
                professional documents
              </li>
            </ul>
          </div>
        </FadeInSection>
      </main>
    </>
  );
}