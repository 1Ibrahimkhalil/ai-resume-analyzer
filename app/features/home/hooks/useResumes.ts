import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";

export function useResumes() {
  const { kv,auth } = usePuterStore();

  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);

      try {
        const items = (await kv.list("resume:*", true)) as KVItem[];

        const parsedResumes = items?.map(
          (item) => JSON.parse(item.value) as Resume
        );

        setResumes(parsedResumes || []);
      } catch (error) {
        console.error("Failed to load resumes:", error);
        setResumes([]);
      } finally {
        setLoadingResumes(false);
      }
    };

    loadResumes();
  }, [kv,auth.isAuthenticated]);

  return { resumes, loadingResumes };
}