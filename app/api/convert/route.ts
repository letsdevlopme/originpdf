import { NextRequest } from "next/server";
import pdfParse from "@cyber2024/pdf-parse-fixed";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      console.error("❌ No file uploaded");
      return new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const parsed = await pdfParse(buffer);

    if (!parsed || !parsed.text) {
      throw new Error("Unable to extract text from this PDF");
    }

    return new Response(JSON.stringify({ text: parsed.text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err: any) {
    console.error("❌ Conversion failed:", err);
    return new Response(
      JSON.stringify({
        error: err?.message || "Unknown error occurred while parsing PDF.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
