"use client";

import { useState, useCallback } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import confetti from "canvas-confetti";

export default function DocToPdfConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      validateAndSetFile(selectedFile);
    }
  };

  // Validate file type and size
  const validateAndSetFile = (selectedFile: File) => {
    // Only accept DOCX files
    const validTypes = [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 10 * 1024 * 1024; // 10MB

    // Check file extension as backup validation
    const fileName = selectedFile.name.toLowerCase();
    const isDocx = fileName.endsWith(".docx");

    if (!validTypes.includes(selectedFile.type) && !isDocx) {
      setError("Please upload a DOCX file only. Old DOC format is not supported yet.");
      setFile(null);
      return;
    }

    if (selectedFile.size > maxSize) {
      setError("File size must be less than 10MB.");
      setFile(null);
      return;
    }

    setFile(selectedFile);
    setError(null);
  };

  // Handle drag and drop
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      validateAndSetFile(droppedFile);
    }
  }, []);

  // Convert DOCX to PDF
  const handleConvert = async () => {
    if (!file) return;

    setIsConverting(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/doc-to-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Conversion failed");
      }

      // Get the PDF blob
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create download link
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name.replace(/\.docx$/i, ".pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Cleanup
      window.URL.revokeObjectURL(url);

      // Success confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Reset
      setFile(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Conversion failed. Please try again.");
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sm:p-12">
        {/* Feature Checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-600" />
            <span className="text-sm sm:text-base text-gray-700 font-medium">No sign-up needed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-600" />
            <span className="text-sm sm:text-base text-gray-700 font-medium">No watermark</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-600" />
            <span className="text-sm sm:text-base text-gray-700 font-medium">100% Free Forever</span>
          </div>
        </div>

        {/* Upload Area */}
        {!file ? (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-xl p-16 sm:p-20 text-center transition-all duration-300 ${
              isDragging
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-blue-400 bg-gray-50 hover:bg-blue-50/30"
            }`}
          >
            <CloudArrowUpIcon className="w-16 h-16 mx-auto text-blue-500 mb-6" />
            
            <p className="text-lg sm:text-xl font-medium text-gray-700 mb-2">
              Drop your Word file here or click to upload
            </p>
            
            <label className="inline-block mt-4 cursor-pointer">
              <input
                type="file"
                accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleFileChange}
                className="hidden"
              />
              <span className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
                Choose File
              </span>
            </label>

            <p className="text-xs text-gray-500 mt-6">
              Supports DOCX format • Max 10MB
            </p>
          </div>
        ) : (
          /* File Selected State */
          <div className="border-2 border-green-200 bg-green-50 rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckIcon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{file.name}</p>
                  <p className="text-sm text-gray-600">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                onClick={() => setFile(null)}
                className="text-sm text-red-600 hover:text-red-700 font-medium px-4 py-2 hover:bg-red-50 rounded-lg transition"
              >
                Remove
              </button>
            </div>

            {/* Convert Button */}
            <button
              onClick={handleConvert}
              disabled={isConverting}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                isConverting
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl"
              }`}
            >
              {isConverting ? (
                <span className="flex items-center justify-center gap-3">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Converting to PDF...
                </span>
              ) : (
                "Convert to PDF"
              )}
            </button>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600 font-medium">{error}</p>
          </div>
        )}

        {/* Privacy Note */}
        <p className="text-xs text-gray-500 text-center mt-6">
          🔒 Your files are automatically deleted after conversion. We don't store anything.
        </p>
      </div>
    </div>
  );
}