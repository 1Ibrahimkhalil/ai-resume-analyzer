import FileUploader from "~/features/upload/components/FileUploader";
import type { UploadFormProps } from "../types";

export default function UploadForm({
  onFileSelect,
  onSubmit,
}: UploadFormProps) {
  return (
    <form
      id="upload-form"
      onSubmit={onSubmit}
      className="flex flex-col gap-4 mt-8"
    >
      <div className="form-div">
        <label htmlFor="company-name">Company Name</label>
        <input
          type="text"
          name="company-name"
          placeholder="Company Name"
          id="company-name"
        />
      </div>
      <div className="form-div">
        <label htmlFor="job-title">Job Title</label>
        <input
          type="text"
          name="job-title"
          placeholder="Job Title"
          id="job-title"
        />
      </div>
      <div className="form-div">
        <label htmlFor="job-description">Job Description</label>
        <textarea
          rows={5}
          name="job-description"
          placeholder="Job Description"
          id="job-description"
        />
      </div>
      <div className="form-div">
        <label htmlFor="uploader">Upload Resume</label>
        <FileUploader onFileSelect={onFileSelect} />
      </div>
      <button type="submit" className="primary-button">
        Analyze Resume
      </button>
    </form>
  );
}
