"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand Logo + Name */}
        <Link href="/" className="flex items-center gap-2">
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
        <nav className="hidden sm:flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="/pdf-to-doc" className="hover:text-blue-600 transition">
            PDF to Word
          </Link>
          <Link href="/tools" className="hover:text-blue-600 transition">
            Tools
          </Link>
          <Link href="/privacy-policy" className="hover:text-blue-600 transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-blue-600 transition">
            Terms and Conditions
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="sm:hidden focus:outline-none"
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
            transition={{ duration: 0.25 }}
            className="sm:hidden px-6 pb-4 bg-white shadow-inner"
          >
            <ul className="space-y-3 p-6 text-sm font-medium text-gray-700">
              <li>
                <Link href="/pdf-to-doc" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
                  PDF to Word
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-blue-600 transition">
            Tools
          </Link>
              </li>
              <li>
            <Link href="/terms" className="hover:text-blue-600 transition">
            Terms and Conditions
          </Link>
          </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
