"use client";

import Head from "next/head";
import Link from "next/link";

const tools = [
  {
    name: "PDF to DOC Converter",
    slug: "/pdf-to-doc",
    description: "Convert PDF files to editable Word documents online, fast and free.",
    comingSoon: false,
  },
  {
    name: "DOC to PDF Converter",
    slug: "#",
    description: "Turn Word documents into PDFs with one click.",
    comingSoon: true,
  },
  {
    name: "Split PDF",
    slug: "#",
    description: "Split large PDF files into smaller ones in seconds.",
    comingSoon: true,
  },
  {
    name: "Unlock PDF",
    slug: "#",
    description: "Remove password protection from PDF files securely.",
    comingSoon: true,
  },
];

export default function ToolsPage() {
  return (
    <>
      <Head>
        <title>All PDF Tools - PDF Toolbox</title>
        <meta
          name="description"
          content="Explore all free PDF tools in one place. Convert, split, unlock, and manage your PDFs online easily."
        />
      </Head>

      <main className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Explore Our Free PDF Tools
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className={`group rounded-xl p-6 transition-all duration-200 border border-gray-200 ${
                tool.comingSoon
                  ? "bg-gray-50 text-gray-400 cursor-not-allowed"
                  : "bg-white hover:shadow-xl hover:border-gray-300"
              }`}
            >
              <Link
                href={tool.comingSoon ? "#" : tool.slug}
                className={tool.comingSoon ? "pointer-events-none" : "block"}
              >
                <h2 className="text-xl font-semibold mb-2 flex items-center justify-between">
                  <span className="text-black">{tool.name}</span>
                  {tool.comingSoon && (
                    <span className="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </h2>
                <p className="text-sm text-gray-600 group-hover:text-gray-800">
                  {tool.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
