"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white py-12 px-6 border-t text-sm font-[Roboto]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div>
            <h3 className="text-lg font-semibold mb-3">OriginPDF</h3>
            <p className="text-gray-400 leading-relaxed">
              Free online PDF tools with no watermark, no signup. Fast, secure, and trusted by users worldwide.
            </p>
          </div>

          {/* Converters Column */}
          <div>
            <h4 className="text-base font-semibold mb-3">Converters</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/pdf-to-doc" className="text-gray-400 hover:text-white transition-colors duration-200">
                  PDF to Word
                </Link>
              </li>
              <li>
                <Link href="/doc-to-pdf" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Word to PDF
                </Link>
              </li>
              <li>
                <span className="text-gray-600 cursor-not-allowed">
                  Split PDF (Coming Soon)
                </span>
              </li>
              <li>
                <span className="text-gray-600 cursor-not-allowed">
                  Unlock PDF (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-base font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tools" className="text-gray-400 hover:text-white transition-colors duration-200">
                  All Tools
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-base font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {year} OriginPDF. All rights reserved.
          </p>
          
          {/* Optional: Social links or trust badges */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>🔒 SSL Secure</span>
            <span>•</span>
            <span>🌍 Made with ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}