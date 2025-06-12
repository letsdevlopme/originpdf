
import { type NextRequest } from "next/server";

export const dynamic = "force-static"; // Generates once at build time
export const revalidate = 86400; // Optional: Regenerate every 24 hrs

export async function GET(req: NextRequest) {
  const baseUrl = "https://originpdf.com"; // ✅ Change this to your live domain

  const routes = [
    "",
    "/pdf-to-doc",
    "/privacy-policy",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <changefreq>monthly</changefreq>
      <priority>${route === "" ? "1.0" : "0.8"}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
