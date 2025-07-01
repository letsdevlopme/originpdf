import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | OriginPDF",
  description: "Learn how OriginPDF protects your data, respects your privacy, and ensures secure file handling. No sign-up, no tracking, no stored documents.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.originpdf.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen w-full bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto text-gray-800 space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">
          Privacy Policy
        </h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            At <strong>OriginPDF</strong>, your privacy is our top priority. We believe in complete transparency and are committed to protecting your data. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. No Account Required</h2>
          <p>
            You can use OriginPDF’s PDF to Word converter without creating an account. We do not ask for or store your name, email address, or any personal data to use the tool.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. File Upload & Conversion</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Temporary Processing:</strong> Your PDF file is temporarily uploaded to our servers only for the purpose of conversion.</li>
            <li><strong>Automatic Deletion:</strong> All uploaded files and converted outputs are automatically deleted from our servers within <strong>1 hour</strong> of processing.</li>
            <li><strong>No File Storage:</strong> We do not store, view, index, or back up any files you upload.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Analytics</h2>
          <p>
            We use tools like Google Analytics to understand general website usage (e.g., page views, bounce rates). These tools collect anonymous, aggregated data and do not store personal information or document content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
          <p>
            OriginPDF uses minimal, essential cookies to improve performance and user experience. We do not use cookies for advertising or to track individual users across websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Security Measures</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Encrypted Uploads:</strong> All file transfers use HTTPS (TLS 1.2 or higher).</li>
            <li><strong>Secure Servers:</strong> Files are processed using isolated, encrypted cloud infrastructure.</li>
            <li><strong>No Third-Party Access:</strong> We do not share your files or data with any external entities.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. GDPR & Global Compliance</h2>
          <p>
            OriginPDF is compliant with GDPR and similar privacy frameworks globally. You have the right to request data deletion, although we typically retain no personal or file data post-conversion.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Children’s Privacy</h2>
          <p>
            OriginPDF is not intended for children under 13. We do not knowingly collect data from children. If you believe a child has submitted data, contact us and we’ll promptly delete it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
          <p>
            We may update this policy occasionally to reflect improvements or legal updates. We will note the revision date at the bottom of this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle data, please reach out at: <a href="mailto:contact@originpdf.com" className="text-blue-600 hover:underline">contact@originpdf.com</a>
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-12 text-center">
          Last updated: July 1, 2025
        </p>
      </div>
    </main>
  );
}
