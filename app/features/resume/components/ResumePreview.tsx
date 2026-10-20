import type { ResumePreviewProps } from "../types";



export default function ResumePreview({
  imageUrl,
  resumeUrl,
}: ResumePreviewProps) {
  return (
    <section className="feedback-section bg-[url('/images/bg-small.svg')] bg-cover h-[100vh] sticky items-center justify-around">
      {imageUrl && resumeUrl && (
        <div className="animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit w-fit">
          <a href={resumeUrl} target="_blank">
            <img
              src={imageUrl}
              alt="cv"
              className="w-full h-full object-contain rounded-2xl"
              title="resume"
            />
          </a>
        </div>
      )}
    </section>
  );
}
