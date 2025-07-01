import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | OriginPDF",
  description: "Read the Terms of Use for OriginPDF's online PDF to Word converter. Understand your rights, responsibilities, and limitations when using our tool.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.originpdf.com/terms",
  },
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen w-full bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto text-gray-800 space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          Terms of Use
        </h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using OriginPDF, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you may not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Service Description</h2>
          <p>
            OriginPDF is a free, browser-based tool that allows users to convert PDF files to editable Word documents (.docx). We do not require user registration or account creation to use the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>You agree not to upload any illegal, copyrighted, or harmful content.</li>
            <li>You must ensure you have the right to use and convert any file you upload.</li>
            <li>You agree not to use automated scripts or abuse the service through bulk uploading or scraping.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. File Handling and Deletion</h2>
          <p>
            All uploaded files are processed solely for the purpose of conversion and are automatically deleted within 1 hour. We do not view, share, or retain any uploaded files beyond the conversion process. See our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> for more.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
          <p>
            The OriginPDF platform, including its logo, design, and underlying technology, is owned by us or our licensors. You may not copy, distribute, or modify any part of the service without prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
          <p>
            While we strive to provide accurate conversions, OriginPDF is offered "as-is" without warranties of any kind. We are not liable for any data loss, formatting issues, or damages resulting from the use of our service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Modification or Termination</h2>
          <p>
            We reserve the right to modify, suspend, or terminate OriginPDF or these terms at any time. We may limit access to certain users or features without notice, especially in cases of abuse or violation of these terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Ontario, Canada. Any disputes arising from these terms shall be resolved in the courts of Kitchener, Ontario.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
          <p>
            For questions regarding these terms, please contact us at: <a href="mailto:contact@originpdf.com" className="text-blue-600 hover:underline">contact@originpdf.com</a>
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-12 text-center">
          Last updated: July 1, 2025
        </p>
      </div>
    </main>
  );
}
