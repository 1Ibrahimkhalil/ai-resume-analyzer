import { useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import { convertPdfToImage } from "~/lib/pdf2img";
import { generateUUID } from "~/lib/utils";
import { prepareInstructions } from "../../../../constans";
import type { UploadResumeParams } from "../types";




export function useResumeUpload() {
  const { fs, kv, ai } = usePuterStore();
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");

  const handleAnalyzed = async ({
    companyName,
    jobTitle,
    jobDescription,
    file,
  }: UploadResumeParams) => {
    setIsProcessing(true);

    try {
      setStatusText("Uploading the file ...");

      const uploadedFile = await fs.upload([file]);

      if (!uploadedFile) {
        setStatusText("Error: Failed to upload file");
        return;
      }

      setStatusText("Converting to image ...");

      const imageFile = await convertPdfToImage(file);

      if (!imageFile.file) {
        setStatusText("Error: Failed to convert pdf to image");
        return;
      }

      setStatusText("Upload the img ...");

      const uploadedImage = await fs.upload([imageFile.file]);

      if (!uploadedImage) {
        setStatusText("Error: Failed to upload image");
        return;
      }

      setStatusText("Preparing data ...");

      const uuid = generateUUID();

      const resumeData = {
        id: uuid,
        resumePath: uploadedFile.path,
        imagePath: uploadedImage.path,
        companyName,
        jobTitle,
        jobDescription,
        feedback: "",
      };

      await kv.set(`resume:${uuid}`, JSON.stringify(resumeData));

      setStatusText("Analyzing ...");

      const feedback = await ai.feedback(
        uploadedFile.path,
        prepareInstructions({ jobTitle, jobDescription }),
      );

      if (!feedback) {
        setStatusText("Error: Failed to analyze resume");
        return;
      }

      const content = feedback.message.content;

      const feedbackText =
        typeof content === "string"
          ? content
          : content.find((item) => item.type === "text")?.text;

      if (!feedbackText) {
        setStatusText("Error: Empty AI feedback");
        return;
      }

      resumeData.feedback = JSON.parse(feedbackText);

      await kv.set(`resume:${uuid}`, JSON.stringify(resumeData));

      setStatusText("Analysis complete, redirecting ...");

      navigate(`/resume/${uuid}`);
    } catch (error) {
      console.error("Resume upload failed:", error);
      setStatusText("Error: Failed to process resume");
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    handleAnalyzed,
    isProcessing,
    statusText,
  };
}