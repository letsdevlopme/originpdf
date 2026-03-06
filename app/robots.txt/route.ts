import { type NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET(req: NextRequest) {
  const content = `# OriginPDF - Free PDF Conversion Tools
User-agent: *
Allow: /
Allow: /pdf-to-doc
Allow: /doc-to-pdf
Allow: /tools
Allow: /faq

# Disallow API routes
Disallow: /api/

# Sitemaps
Sitemap: https://originpdf.com/sitemap.xml`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}