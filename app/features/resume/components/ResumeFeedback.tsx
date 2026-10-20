import type { ResumeFeedbackProps } from "../types";
import ATS from "./ATS";
import Details from "./Details";
import Summary from "./Summary";





export default function ResumeFeedback({
  feedback,
}: ResumeFeedbackProps) {
  return (
    <section className="feedback-section">
      <h2 className="text-4xl text-black font-bold">Resume Review</h2>

      {feedback ? (
        <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
          <Summary feedback={feedback} />
          <ATS
            score={feedback.ATS.score || 0}
            suggestions={feedback.ATS.tips || []}
          />
          <Details feedback={feedback} />
        </div>
      ) : (
        <img src="/images/resume-scan-2.gif" className="w-full" />
      )}
    </section>
  );
}
