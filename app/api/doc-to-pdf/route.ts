import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import mammoth from "mammoth";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Get file extension
    const fileExtension = file.name.split(".").pop()?.toLowerCase();

    // Validate file extension
    if (!fileExtension || !["doc", "docx"].includes(fileExtension)) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload a DOC or DOCX file." },
        { status: 400 }
      );
    }

    // Validate file size (10MB max)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File size must be less than 10MB" },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Check if buffer is valid
    if (buffer.length === 0) {
      return NextResponse.json(
        { error: "Uploaded file is empty" },
        { status: 400 }
      );
    }

    // Extract HTML from DOCX using mammoth
    let htmlContent = "";
    
    try {
      // Only DOCX files work with mammoth (they are ZIP-based)
      if (fileExtension !== "docx") {
        return NextResponse.json(
          { 
            error: "Currently, only DOCX files are supported. Please convert your DOC file to DOCX format first, or use a DOCX file.",
            tip: "You can convert DOC to DOCX using Microsoft Word: File → Save As → Choose DOCX format"
          },
          { status: 400 }
        );
      }

      const result = await mammoth.convertToHtml({ buffer });
      htmlContent = result.value;
      
      if (result.messages && result.messages.length > 0) {
        const errors = result.messages.filter(m => m.type === "error");
        if (errors.length > 0) {
          console.error("Mammoth errors:", errors);
        }
      }
    } catch (parseError) {
      console.error("Parse error:", parseError);
      
      // Provide helpful error message
      const errorMessage = parseError instanceof Error ? parseError.message : "Unknown error";
      
      if (errorMessage.includes("zip") || errorMessage.includes("central directory")) {
        return NextResponse.json(
          { 
            error: "This file appears to be corrupted or in an incompatible format.",
            tip: "Please ensure you're uploading a valid DOCX file. If you have a DOC file, convert it to DOCX first."
          },
          { status: 400 }
        );
      }
      
      return NextResponse.json(
        { error: "Could not parse document. The file may be corrupted or password-protected." },
        { status: 400 }
      );
    }

    if (!htmlContent || htmlContent.trim() === "") {
      return NextResponse.json(
        { error: "Document appears to be empty or could not extract text" },
        { status: 400 }
      );
    }

    // Parse HTML and extract structured content
    interface ContentBlock {
      text: string;
      type: "heading" | "paragraph" | "list";
      isBold?: boolean;
    }

    const parseHtmlToBlocks = (html: string): ContentBlock[] => {
      const blocks: ContentBlock[] = [];
      
      // Match headings
      const headingRegex = /<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi;
      let match;
      
      // Replace HTML content with markers to preserve order
      let markedHtml = html;
      let blockIndex = 0;
      const blockMap = new Map<string, ContentBlock>();
      
      // Extract headings
      while ((match = headingRegex.exec(html)) !== null) {
        const marker = `___BLOCK_${blockIndex}___`;
        const text = match[1].replace(/<[^>]*>/g, "").trim();
        if (text) {
          blockMap.set(marker, { text, type: "heading" });
          markedHtml = markedHtml.replace(match[0], marker);
          blockIndex++;
        }
      }
      
      // Extract paragraphs
      const paragraphRegex = /<p[^>]*>(.*?)<\/p>/gi;
      while ((match = paragraphRegex.exec(html)) !== null) {
        const marker = `___BLOCK_${blockIndex}___`;
        let text = match[1].replace(/<[^>]*>/g, "").trim();
        if (text) {
          const isBold = match[1].includes("<strong>") || match[1].includes("<b>");
          blockMap.set(marker, { text, type: "paragraph", isBold });
          markedHtml = markedHtml.replace(match[0], marker);
          blockIndex++;
        }
      }
      
      // Extract list items
      const listRegex = /<li[^>]*>(.*?)<\/li>/gi;
      while ((match = listRegex.exec(html)) !== null) {
        const marker = `___BLOCK_${blockIndex}___`;
        const text = "• " + match[1].replace(/<[^>]*>/g, "").trim();
        if (text !== "• ") {
          blockMap.set(marker, { text, type: "list" });
          markedHtml = markedHtml.replace(match[0], marker);
          blockIndex++;
        }
      }
      
      // Reconstruct in order
      const markerRegex = /___BLOCK_(\d+)___/g;
      let orderMatch;
      const foundBlocks: ContentBlock[] = [];
      while ((orderMatch = markerRegex.exec(markedHtml)) !== null) {
        const marker = orderMatch[0];
        const block = blockMap.get(marker);
        if (block) {
          foundBlocks.push(block);
        }
      }
      
      return foundBlocks;
    };

    const contentBlocks = parseHtmlToBlocks(htmlContent);

    if (contentBlocks.length === 0) {
      return NextResponse.json(
        { error: "Could not extract content from document" },
        { status: 400 }
      );
    }

    // Sanitize text - remove emojis and unsupported characters
    const sanitizeText = (text: string): string => {
      return text
        // Replace common special characters
        .replace(/•/g, "-")
        .replace(/–/g, "-")
        .replace(/—/g, "-")
        .replace(/'/g, "'")
        .replace(/'/g, "'")
        .replace(/"/g, '"')
        .replace(/"/g, '"')
        .replace(/…/g, "...")
        // Remove emojis (Unicode range)
        .replace(/[\u{1F600}-\u{1F64F}]/gu, "") // Emoticons
        .replace(/[\u{1F300}-\u{1F5FF}]/gu, "") // Symbols & Pictographs
        .replace(/[\u{1F680}-\u{1F6FF}]/gu, "") // Transport & Map
        .replace(/[\u{1F1E0}-\u{1F1FF}]/gu, "") // Flags
        .replace(/[\u{2600}-\u{26FF}]/gu, "")   // Misc symbols
        .replace(/[\u{2700}-\u{27BF}]/gu, "")   // Dingbats
        // Remove any remaining non-WinAnsi characters
        .replace(/[^\x00-\xFF]/g, "")
        .replace(/\s+/g, " ")
        .trim();
    };

    // Create PDF with proper formatting
    const pdfDoc = await PDFDocument.create();

    // Add metadata
    pdfDoc.setTitle(file.name.replace(/\.(doc|docx)$/i, ""));
    pdfDoc.setCreator("OriginPDF");
    pdfDoc.setProducer("OriginPDF DOC to PDF Converter");
    pdfDoc.setCreationDate(new Date());

    const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    let page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const margin = 50;
    let yPosition = height - margin;

    // Font sizes
    const headingSize = 16;
    const normalSize = 12;
    const headingLineHeight = headingSize * 1.8;
    const normalLineHeight = normalSize * 1.5;

    for (const block of contentBlocks) {
      const sanitizedText = sanitizeText(block.text);
      
      if (!sanitizedText) continue;

      // Determine font and size based on block type
      let font = regularFont;
      let fontSize = normalSize;
      let lineHeight = normalLineHeight;
      let spaceBefore = 0;
      let spaceAfter = 0;

      if (block.type === "heading") {
        font = boldFont;
        fontSize = headingSize;
        lineHeight = headingLineHeight;
        spaceBefore = normalLineHeight * 1.5;
        spaceAfter = normalLineHeight * 0.5;
      } else if (block.isBold) {
        font = boldFont;
      }

      if (block.type === "paragraph") {
        spaceBefore = normalLineHeight * 0.3;
        spaceAfter = normalLineHeight * 0.3;
      }

      // Add space before
      yPosition -= spaceBefore;

      // Check if we need a new page
      if (yPosition < margin + lineHeight) {
        page = pdfDoc.addPage();
        yPosition = height - margin;
      }

      // Word wrap
      const maxWidth = width - 2 * margin;
      const words = sanitizedText.split(" ");
      let currentLine = "";

      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        
        try {
          const textWidth = font.widthOfTextAtSize(testLine, fontSize);

          if (textWidth > maxWidth && currentLine) {
            // Draw current line
            page.drawText(currentLine, {
              x: margin,
              y: yPosition,
              size: fontSize,
              font: font,
              color: rgb(0, 0, 0),
            });
            yPosition -= lineHeight;
            currentLine = word;

            // Check for new page
            if (yPosition < margin) {
              page = pdfDoc.addPage();
              yPosition = height - margin;
            }
          } else {
            currentLine = testLine;
          }
        } catch (encodingError) {
          console.warn("Encoding error for word:", word);
        }
      }

      // Draw remaining text
      if (currentLine) {
        try {
          page.drawText(currentLine, {
            x: margin,
            y: yPosition,
            size: fontSize,
            font: font,
            color: rgb(0, 0, 0),
          });
          yPosition -= lineHeight;
        } catch (encodingError) {
          console.warn("Could not draw line:", currentLine);
        }
      }

      // Add space after
      yPosition -= spaceAfter;
    }

    // Generate PDF
    const pdfBytes = await pdfDoc.save();

    // Return PDF as response
    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${file.name.replace(
          /\.(doc|docx)$/i,
          ".pdf"
        )}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("DOC to PDF conversion error:", error);
    return NextResponse.json(
      {
        error: "Failed to convert document. Please try again.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";