"use client";

import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Is this PDF to DOC converter free?",
    answer: "Yes! Our tool is 100% free to use — no signup or payment required. Convert unlimited files with no watermark.",
  },
  {
    question: "Are my files safe during conversion?",
    answer: "Absolutely. Files are processed securely with encrypted connections and deleted immediately after conversion. We never store your data.",
  },
  {
    question: "Does this work on mobile devices?",
    answer: "Yes. Our converter works smoothly on all modern smartphones, tablets, and desktop computers with any browser.",
  },
  {
    question: "Can I convert multiple PDFs at once?",
    answer: "Currently we support one file at a time to ensure the best quality. Multi-file batch conversion is coming soon!",
  },
  {
    question: "Will the formatting of my document be preserved?",
    answer: "Yes! We preserve fonts, images, tables, headings, and layout structure. Complex PDFs may need minor adjustments, but most convert perfectly.",
  },
  {
    question: "What's the maximum file size I can convert?",
    answer: "You can convert files up to 10MB. This covers most documents. For larger files, try compressing images or splitting the PDF first.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No signup required! Just upload your file and convert instantly. We value your privacy and keep things simple.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>FAQ - OriginPDF Free Converter</title>
        <meta name="description" content="Frequently asked questions about OriginPDF's free PDF to DOC converter tool and other PDF utilities." />
      </Head>

      {/* Structured Data for Google Rich Results */}
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        })}
      </Script>

      <main className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Find answers to common questions about our free PDF conversion tools.
          </p>

          <div className="space-y-4 mb-16">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="flex justify-between items-center w-full text-left p-6 font-semibold text-lg text-gray-900 hover:bg-gray-50 transition focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className="text-2xl text-gray-400 flex-shrink-0">
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-6 text-gray-700 text-base leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-linear-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Convert Your Files?
            </h2>
            <p className="text-gray-600 mb-6">
              Try our free PDF converters with no signup required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pdf-to-doc"
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                PDF to Word
              </Link>
              <Link
                href="/doc-to-pdf"
                className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Word to PDF
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}