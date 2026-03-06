"use client";

import Head from "next/head";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const tools = [
  {
    name: "PDF to Word Converter",
    slug: "/pdf-to-doc",
    description: "Convert PDF files to editable Word documents online, fast and free.",
    color: "blue",
    comingSoon: false,
  },
  {
    name: "Word to PDF Converter",
    slug: "/doc-to-pdf",
    description: "Turn Word documents (DOCX) into PDFs with perfect formatting.",
    color: "green",
    comingSoon: false,
  },
  {
    name: "Split PDF",
    slug: "#",
    description: "Split large PDF files into smaller ones in seconds.",
    color: "purple",
    comingSoon: true,
  },
  {
    name: "Unlock PDF",
    slug: "#",
    description: "Remove password protection from PDF files securely.",
    color: "orange",
    comingSoon: true,
  },
];

const colorClasses = {
  blue: "from-blue-50 to-white border-blue-200 hover:border-blue-400 group-hover:text-blue-600",
  green: "from-green-50 to-white border-green-200 hover:border-green-400 group-hover:text-green-600",
  purple: "from-purple-50 to-white border-purple-200",
  orange: "from-orange-50 to-white border-orange-200",
};

export default function ToolsPage() {
  return (
    <>
      <Head>
        <title>All PDF Tools - OriginPDF Toolbox</title>
        <meta
          name="description"
          content="Explore all free PDF tools in one place. Convert, split, unlock, and manage your PDFs online easily with OriginPDF."
        />
      </Head>

      <main className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-4">
            Explore Our Free PDF Tools
          </h1>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Professional PDF tools at your fingertips. No signup, no watermark, completely free.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tools.map((tool, idx) => (
              <Link
                key={idx}
                href={tool.comingSoon ? "#" : tool.slug}
                className={`group rounded-xl p-6 transition-all duration-300 border ${
                  tool.comingSoon
                    ? "bg-gray-50 border-gray-200 cursor-not-allowed opacity-60"
                    : `bg-linear-to-br ${colorClasses[tool.color as keyof typeof colorClasses]} hover:shadow-lg`
                }`}
                onClick={(e) => tool.comingSoon && e.preventDefault()}
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-xl font-bold text-gray-900 transition">
                    {tool.name}
                  </h2>
                  {tool.comingSoon ? (
                    <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium">
                      Coming Soon
                    </span>
                  ) : (
                    <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:translate-x-1 group-hover:text-current transition-all" />
                  )}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Why Choose OriginPDF */}
          <div className="mt-16 bg-linear-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Why Choose OriginPDF?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="font-semibold text-gray-900 mb-1">100% Secure</h3>
                <p className="text-sm text-gray-600">
                  Files deleted after conversion
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-900 mb-1">Lightning Fast</h3>
                <p className="text-sm text-gray-600">
                  Instant conversions
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-1">No Limits</h3>
                <p className="text-sm text-gray-600">
                  Unlimited free conversions
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}