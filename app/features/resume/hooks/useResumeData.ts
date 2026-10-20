import { useEffect, useState } from "react";
import type { UseResumeDataParams } from "../types";

export function useResumeData({ id, fs, kv }: UseResumeDataParams) {
  const [imageUrl, setImageUrl] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  useEffect(() => {
    const loadResume = async () => {
      const resume = await kv.get(`resume:${id}`);
      if (!resume) return;

      const data = JSON.parse(resume);

      const resumeBlob = await fs.read(data.resumePath);
      if (!resumeBlob) return;

      const pdfBlob = new Blob([resumeBlob], {
        type: "application/pdf",
      });

      const ResumeUrl = URL.createObjectURL(pdfBlob);
      setResumeUrl(ResumeUrl);

      const imageBlob = await fs.read(data.imagePath);
      if (!imageBlob) return;

      const iamageUrl = URL.createObjectURL(imageBlob);
      setImageUrl(iamageUrl);
      setFeedback(data.feedback);
    };

    loadResume();
  }, [id]);

  return { imageUrl, resumeUrl, feedback };
}
