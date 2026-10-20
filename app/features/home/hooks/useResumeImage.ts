import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";

export function useResumeImage(imagePath: string) {
  const { fs } = usePuterStore();
  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {
    const loadResume = async () => {
      const blob = await fs.read(imagePath);

      if (!blob) return;

      const url = URL.createObjectURL(blob);
      setResumeUrl(url);
    };

    loadResume();
  }, [imagePath]);

  return resumeUrl;
}