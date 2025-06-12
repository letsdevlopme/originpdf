import { saveAs } from 'file-saver';

export async function convertPdfToDoc(pdfFile: File): Promise<void> {
  if (typeof window === 'undefined') {
    console.warn('PDF conversion should run in the browser only.');
    return;
  }

  const [{ getDocument, GlobalWorkerOptions }, workerSrc] = await Promise.all([
    import('pdfjs-dist'),
    import('pdfjs-dist/build/pdf.worker.min.js?worker'),
  ]);

  GlobalWorkerOptions.workerSrc = workerSrc.default;

  const arrayBuffer = await pdfFile.arrayBuffer();
  const pdf = await getDocument({ data: arrayBuffer }).promise;

  let fullText = '';

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();

    const pageText = content.items.map((item: any) => item.str || '').join(' ');
    fullText += `Page ${i}:\n${pageText}\n\n`;
  }

  const blob = new Blob([fullText], { type: 'application/msword' });
  saveAs(blob, pdfFile.name.replace('.pdf', '.doc'));
}