import { Link, useParams } from "react-router";
import ResumeFeedback from "~/features/resume/components/ResumeFeedback";
import ResumePreview from "~/features/resume/components/ResumePreview";

import { useResumeAuth } from "~/features/resume/hooks/useResumeAuth";
import { useResumeData } from "~/features/resume/hooks/useResumeData";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "ResuAI | Review" },
  { name: "describtion", content: "Detailed overview of your resume" },
];

const resume = () => {
  const { id } = useParams();
  const { auth, isLoading, fs, kv } = usePuterStore();
  const { feedback, imageUrl, resumeUrl } = useResumeData({ id, fs, kv });
  useResumeAuth({ id, isLoading, isAuthenticated: auth.isAuthenticated });

  return (
    <main className="!pt-0 ">
      <nav className="resume-nav">
        <Link to="/" className="back-button">
          <img src="/icons/back.svg" alt="logo" className="w-2.5 h-2.5" />
          <span className="text-gray-800 text-sm font-semibold">
            Back to Homepage
          </span>
        </Link>
      </nav>
      <div className="flex flex-row w-full max-lg:flex-col-reverse ">
        <ResumePreview imageUrl={imageUrl} resumeUrl={resumeUrl} />
        <ResumeFeedback feedback={feedback} />
      </div>
    </main>
  );
};

export default resume;
