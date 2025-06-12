import { type NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET(req: NextRequest) {
  const content = `User-agent: *
Allow: /

Sitemap: https://originpdf.com/sitemap.xml`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
