import * as pdfjsLib from "pdfjs-dist";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

export interface PdfConversionResult {
  imageUrl: string;
  file: File | null;
  error?: string;
}

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

export async function convertPdfToImage(
  file: File,
): Promise<PdfConversionResult> {
  let imageUrl = "";

  try {
    const arrayBuffer = await file.arrayBuffer();

    const pdf = await pdfjsLib.getDocument({
      data: arrayBuffer,
    }).promise;

    try {
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 4 });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) {
        return {
          imageUrl: "",
          file: null,
          error: "Failed to create canvas context",
        };
      }

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      await page.render({
        canvas,
        canvasContext: context,
        viewport,
      }).promise;
      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((result) => {
          if (result) {
            resolve(result);
          } else {
            reject(new Error("Failed to create image blob"));
          }
        }, "image/png");
      });

      const originalName = file.name.replace(/\.pdf$/i, "");

      const imageFile = new File([blob], `${originalName}.png`, {
        type: "image/png",
      });

      imageUrl = URL.createObjectURL(blob);

      return {
        imageUrl,
        file: imageFile,
      };
    } finally {
    pdf.cleanup();
    }
  } catch (err: unknown) {
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }

    const message = err instanceof Error ? err.message : String(err);

    return {
      imageUrl: "",
      file: null,
      error: `Failed to convert PDF: ${message}`,
    };
  }
}
