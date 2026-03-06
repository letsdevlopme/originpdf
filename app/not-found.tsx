import Link from "next/link";
import { HomeIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | OriginPDF",
  description: "The page you're looking for doesn't exist. Explore our free PDF conversion tools.",
};

export default function NotFound() {
  const popularTools = [
    {
      name: "PDF to Word",
      href: "/pdf-to-doc",
      description: "Convert PDF to editable Word documents",
      color: "blue",
    },
    {
      name: "Word to PDF",
      href: "/doc-to-pdf",
      description: "Convert Word documents to PDF format",
      color: "green",
    },
    {
      name: "All Tools",
      href: "/tools",
      description: "Explore all our free PDF tools",
      color: "purple",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-white flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl sm:text-[12rem] font-extrabold text-gray-200 leading-none select-none">
            404
          </h1>
          <div className="relative -mt-16 sm:-mt-20">
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">
              Page Not Found
            </p>
            <p className="text-gray-600 mt-3 text-base sm:text-lg">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <HomeIcon className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Popular Tools */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Or try our popular tools:
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {popularTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className={`group bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                  tool.color === "blue"
                    ? "hover:border-blue-400 hover:bg-blue-50"
                    : tool.color === "green"
                    ? "hover:border-green-400 hover:bg-green-50"
                    : "hover:border-purple-400 hover:bg-purple-50"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-900 transition">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {tool.description}
                  </p>
                  <ArrowRightIcon
                    className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                      tool.color === "blue"
                        ? "text-blue-600"
                        : tool.color === "green"
                        ? "text-green-600"
                        : "text-purple-600"
                    }`}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">Need help?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/faq"
              className="text-blue-600 hover:text-blue-700 font-medium transition"
            >
              FAQ
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/tools"
              className="text-blue-600 hover:text-blue-700 font-medium transition"
            >
              All Tools
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/privacy-policy"
              className="text-blue-600 hover:text-blue-700 font-medium transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}