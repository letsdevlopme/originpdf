"use client";

import Head from "next/head";
import Script from "next/script";
import { useState } from "react";

const faqs = [
  {
    question: "Is this PDF to DOC converter free?",
    answer: "Yes! Our tool is 100% free to use — no signup or payment required.",
  },
  {
    question: "Are my files safe during conversion?",
    answer: "Absolutely. Files are processed securely and deleted immediately after conversion.",
  },
  {
    question: "Does this work on mobile devices?",
    answer: "Yes. Our converter works smoothly on all modern smartphones and tablets.",
  },
  {
    question: "Can I convert multiple PDFs at once?",
    answer: "Currently we support one file at a time, but multi-file support is coming soon.",
  },
  {
    question: "Will the formatting of my document be preserved?",
    answer: "We do our best to preserve formatting, but complex layouts may require manual adjustment.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>FAQ - PDF to DOC Converter</title>
        <meta name="description" content="Frequently asked questions about our free PDF to DOC converter tool." />
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

     <main className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg shadow-sm p-5 transition duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex justify-between w-full text-left font-semibold text-lg text-gray-800 focus:outline-none"
              >
                {faq.question}
                <span>{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <div className="mt-3 text-gray-600 text-base">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}