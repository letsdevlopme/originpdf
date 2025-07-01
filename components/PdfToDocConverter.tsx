"use client";

import { useState, useRef } from "react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import {
  CloudArrowUpIcon,
  ArrowPathIcon,
  ArrowDownTrayIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";
import confetti from 'canvas-confetti';

export default function PdfToDocConverter() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [extractedText, setExtractedText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const dropRef = useRef<HTMLLabelElement | null>(null);

  const triggerConfetti = () => {
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    }
  };

  const handleConvert = async () => {
    if (!pdfFile) return;
    setLoading(true);
    setExtractedText(null);
    setError(null);

    const formData = new FormData();
    formData.append("file", pdfFile);

    try {
      const res = await fetch("/api/convert", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error((await res.json())?.error || "Server error");

      const data = await res.json();
      const cleaned = data.text?.trim();

      if (cleaned?.length < 30) {
        setError("⚠️ This PDF may not contain extractable text (possibly scanned image).");
      }
      setExtractedText(cleaned || null);
    } catch (err: any) {
      console.error("❌ Conversion failed:", err);
      setError(err.message || "Something went wrong. Try another file.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!extractedText || !pdfFile) return;

    const lines = extractedText.split(/\r?\n/);
    const docParagraphs: Paragraph[] = [];

    const baseTextRun = (text: string) => new TextRun({ text, font: "Calibri", size: 24 });
    const headingTextRun = (text: string) => new TextRun({ text, font: "Calibri", size: 26, bold: true });

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) {
        docParagraphs.push(new Paragraph({ text: "", spacing: { after: 100 } }));
      } else if (/^(Summary|Key Achievements|Experience|Education|Skills|Projects)$/i.test(trimmed)) {
        docParagraphs.push(new Paragraph({ spacing: { before: 200, after: 100 }, children: [headingTextRun(trimmed)] }));
      } else if (/^[-•*]\s+/.test(trimmed)) {
        docParagraphs.push(new Paragraph({ bullet: { level: 0 }, spacing: { after: 80 }, children: [baseTextRun(trimmed.replace(/^[-•*]\s+/, ""))] }));
      } else {
        docParagraphs.push(new Paragraph({ spacing: { after: 120, line: 340 }, alignment: "both", children: [baseTextRun(trimmed)] }));
      }
    }

    const doc = new Document({
      numbering: {
        config: [{
          reference: "num-list",
          levels: [{ level: 0, format: "decimal", text: "%1.", alignment: "left" }],
        }],
      },
      sections: [{ children: docParagraphs }],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, pdfFile.name.replace(/\.pdf$/, ".docx"));
    triggerConfetti();
  };

  // return (
  //   <motion.div
  //     initial={{ opacity: 0, scale: 0.97, y: 20 }}
  //     animate={{ opacity: 1, scale: 1, y: 0 }}
  //     transition={{ duration: 0.5, ease: "easeOut" }}
  //     onDrop={handleDrop}
  //     onDragEnter={handleDrag}
  //     onDragLeave={handleDrag}
  //     onDragOver={handleDrag}
  //     className={`w-full max-w-2xl flex flex-col items-center gap-6 p-6 bg-white/80 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 ease-in-out ${
  //       dragActive ? "ring-2 ring-blue-500" : ""
  //     }`}
  //   >
  //     <label
  //       htmlFor="pdf-upload"
  //       ref={dropRef}
  //       className={`w-full border-2 border-dashed ${
  //         dragActive ? "border-blue-500" : "border-gray-300"
  //       } bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-gray-100 rounded-md px-6 py-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-[1.02]`}
  //     >
  //       <CloudArrowUpIcon className="h-6 w-6 text-blue-600" />
  //       <span className="text-gray-700 font-[Roboto] font-medium text-sm">
  //         Drop your PDF here or click to upload
  //       </span>
  //     </label>
  //     <input
  //       id="pdf-upload"
  //       type="file"
  //       accept="application/pdf"
  //       onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
  //       className="hidden"
  //     />

  //     {pdfFile && (
  //       <>
  //         <p className="text-sm text-gray-700 font-[Roboto] italic">
  //           📄 <strong>{pdfFile.name}</strong>
  //         </p>
  //         <button
  //           onClick={handleConvert}
  //           disabled={loading}
  //           className="flex items-center gap-2 justify-center bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-[Roboto] font-semibold px-6 py-2.5 rounded-md shadow-sm border border-blue-800 transition-all duration-200 active:scale-[0.98]"
  //         >
  //           {loading ? (
  //             <>
  //               <ArrowPathIcon className="h-4 w-4 animate-spin" />
  //               Converting...
  //             </>
  //           ) : (
  //             <>
  //               <DocumentArrowDownIcon className="h-4 w-4" />
  //               Convert to Word
  //             </>
  //           )}
  //         </button>
  //       </>
  //     )}

  //     {extractedText && (
  //       <div className="w-full mt-6">
  //         <h3 className="text-lg font-semibold mb-2 text-gray-800 font-[Roboto]">🔍 Preview Extracted Text:</h3>
  //         <div className="border border-gray-300 rounded-lg p-4 bg-gradient-to-br from-white to-gray-50 whitespace-pre-wrap text-[0.925rem] leading-relaxed text-gray-800 max-h-80 overflow-auto font-[Roboto] shadow-inner transition-all duration-300">
  //           {extractedText}
  //         </div>
  //         <button
  //           onClick={handleDownload}
  //           className="mt-5 bg-black hover:bg-gray-900 text-white flex items-center gap-2 justify-center font-[Roboto] font-semibold px-5 py-2 rounded-md border border-gray-800 transition-all duration-200 hover:scale-105"
  //         >
  //           <ArrowDownTrayIcon className="h-4 w-4" />
  //           Download DOCX
  //         </button>
  //       </div>
  //     )}

  //     {error && (
  //       <p className="text-red-600 mt-4 text-sm text-center font-[Roboto] transition-opacity duration-300">
  //         {error}
  //       </p>
  //     )}
  //   </motion.div>
  // );
return (
  <motion.div
    initial={{ opacity: 0, scale: 0.97, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    onDrop={handleDrop}
    onDragEnter={handleDrag}
    onDragLeave={handleDrag}
    onDragOver={handleDrag}
    className={`w-full max-w-2xl flex flex-col items-center gap-6 p-6 bg-white/80 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 ease-in-out ${
      dragActive ? "ring-2 ring-blue-500" : ""
    }`}
  >
    {/* Subtitle & Trust Badges */}
    <div className="text-center font-[Roboto] mb-1">
      <p className="text-sm text-gray-700 font-medium mb-2">✔ No sign-up needed  ✔ No watermark  ✔ 100% Free Forever</p>
    </div>

    {/* Upload Input Area */}
    <label
      htmlFor="pdf-upload"
      ref={dropRef}
      aria-label="Upload a PDF file"
      className={`w-full border-2 border-dashed ${
        dragActive ? "border-blue-500" : "border-gray-300"
      } bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-gray-100 rounded-md px-6 py-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-[1.02]`}
    >
      <CloudArrowUpIcon className="h-6 w-6 text-blue-600" />
      <span className="text-gray-700 font-[Roboto] font-medium text-sm">
        Drop your PDF here or click to upload
      </span>
    </label>
    <input
      id="pdf-upload"
      type="file"
      accept="application/pdf"
      onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
      className="hidden"
    />

    {/* Filename Preview */}
    {pdfFile && (
      <>
        <p className="text-sm text-gray-700 font-[Roboto] italic">
          📄 <strong>{pdfFile.name}</strong>
        </p>

        {/* Convert Button */}
        <button
          onClick={handleConvert}
          disabled={loading}
          aria-label="Convert PDF to Word"
          className="flex items-center gap-2 justify-center bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-[Roboto] font-semibold px-6 py-2.5 rounded-md shadow-sm border border-blue-800 transition-all duration-200 active:scale-[0.98]"
        >
          {loading ? (
            <>
              <ArrowPathIcon className="h-4 w-4 animate-spin" />
              Converting...
            </>
          ) : (
            <>
              <DocumentArrowDownIcon className="h-4 w-4" />
              Convert to Word
            </>
          )}
        </button>
      </>
    )}

    {/* Extracted Text Preview */}
    {extractedText && (
      <div className="w-full mt-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 font-[Roboto]">🔍 Preview Extracted Text:</h3>
        <div className="border border-gray-300 rounded-lg p-4 bg-gradient-to-br from-white to-gray-50 whitespace-pre-wrap text-[0.925rem] leading-relaxed text-gray-800 max-h-80 overflow-auto font-[Roboto] shadow-inner transition-all duration-300">
          {extractedText}
        </div>
        <button
          onClick={handleDownload}
          aria-label="Download Word document"
          className="mt-5 bg-black hover:bg-gray-900 text-white flex items-center gap-2 justify-center font-[Roboto] font-semibold px-5 py-2 rounded-md border border-gray-800 transition-all duration-200 hover:scale-105"
        >
          <ArrowDownTrayIcon className="h-4 w-4" />
          Download DOCX
        </button>
      </div>
    )}

    {/* Error Display */}
    {error && (
      <p className="text-red-600 mt-4 text-sm text-center font-[Roboto] transition-opacity duration-300">
        {error}
      </p>
    )}
  </motion.div>
);
}