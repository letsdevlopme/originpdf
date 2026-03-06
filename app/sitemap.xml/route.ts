import { type NextRequest } from "next/server";

export const dynamic = "force-static";
export const revalidate = 86400; // Revalidate daily

export async function GET(req: NextRequest) {
  const baseUrl = "https://originpdf.com";

  const routes = [
    { path: "", priority: "1.0", changefreq: "weekly" },
    { path: "/pdf-to-doc", priority: "1.0", changefreq: "weekly" },
    { path: "/doc-to-pdf", priority: "1.0", changefreq: "weekly" },
    { path: "/tools", priority: "0.9", changefreq: "weekly" },
    { path: "/faq", priority: "0.8", changefreq: "monthly" },
    { path: "/privacy-policy", priority: "0.5", changefreq: "yearly" },
    { path: "/terms", priority: "0.5", changefreq: "yearly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route.path}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}