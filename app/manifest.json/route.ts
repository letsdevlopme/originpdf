import { type NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET(req: NextRequest) {
  const manifest = {
    name: "OriginPDF - Free PDF Converter",
    short_name: "OriginPDF",
    description: "Free online PDF to Word and Word to PDF converter. No watermark, no signup required.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    categories: ["productivity", "utilities"],
    lang: "en-US"
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=31536000",
    },
  });
}