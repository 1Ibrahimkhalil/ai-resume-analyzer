import type { FormEvent } from "react";

export type UploadFileSelectHandler = (file: File | null) => void;

export type FileUploaderProps = {
  onFileSelect?: UploadFileSelectHandler;
};

export type UploadFormProps = {
  onFileSelect: UploadFileSelectHandler;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};
export type UploadResumeParams = {
  companyName: string;
  jobTitle: string;
  jobDescription: string;
  file: File;
};
