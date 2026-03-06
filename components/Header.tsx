"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand Logo + Name */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <Image
            src="/images/PDFTODOC.svg"
            alt="OriginPDF Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl sm:text-2xl font-extrabold text-blue-700 tracking-tight font-[Roboto]">
            OriginPDF
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <Link href="/pdf-to-doc" className="hover:text-blue-600 transition-colors duration-200">
            PDF to Word
          </Link>
          <Link href="/doc-to-pdf" className="hover:text-blue-600 transition-colors duration-200">
            Word to PDF
          </Link>
          <Link href="/tools" className="hover:text-blue-600 transition-colors duration-200">
            Tools
          </Link>
          <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-blue-600 transition-colors duration-200">
            Terms
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="sm:hidden focus:outline-none hover:bg-gray-100 p-2 rounded-lg transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-gray-800" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden overflow-hidden bg-white border-t"
          >
            <ul className="space-y-1 py-4 px-4 text-sm font-medium text-gray-700">
              <li>
                <Link 
                  href="/pdf-to-doc" 
                  className="block py-3 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors" 
                  onClick={() => setIsOpen(false)}
                >
                  PDF to Word
                </Link>
              </li>
              <li>
                <Link 
                  href="/doc-to-pdf" 
                  className="block py-3 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors" 
                  onClick={() => setIsOpen(false)}
                >
                  Word to PDF
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools" 
                  className="block py-3 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors" 
                  onClick={() => setIsOpen(false)}
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="block py-3 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors" 
                  onClick={() => setIsOpen(false)}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="block py-3 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors" 
                  onClick={() => setIsOpen(false)}
                >
                  Terms
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}