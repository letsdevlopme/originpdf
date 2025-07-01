"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white py-10 px-6 border-t text-sm font-[Roboto]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-8">
        {/* Left Column */}
        <div>
          <h3 className="text-lg font-semibold mb-2">OriginPDF</h3>
          <p className="text-gray-300 max-w-md leading-relaxed">
            Convert PDFs to editable Word documents instantly with no watermark or sign-up. 100% free and secure – trusted by users worldwide.
          </p>
        </div>

        {/* Right Column – Navigation */}
        <div className="flex flex-col gap-2">
          <h4 className="text-base font-semibold mb-1">Tools & Pages</h4>
          <Link href="/pdf-to-doc" className="text-gray-300 hover:text-white transition">
            PDF to Word
          </Link>
          <Link href="/tools" className="text-gray-300 hover:text-white transition">
            Tools
          </Link>
          <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-300 hover:text-white transition">
            Terms
          </Link>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="mt-10 text-center text-gray-400 text-xs">
        © {year} OriginPDF. All rights reserved.
      </div>
    </footer>
  );
}
