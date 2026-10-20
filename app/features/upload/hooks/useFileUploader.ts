
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import type { FileUploaderProps } from "../types";



export function useFileUploader({ onFileSelect }: FileUploaderProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0] || null;
      onFileSelect?.(file);
    },
    [onFileSelect],
  );

  const maxFileSize = 20 * 1024 * 1024;

  const { getRootProps, getInputProps,  acceptedFiles } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: { "application/pdf": [".pdf"] },
      maxSize: maxFileSize,
    });

  const file = acceptedFiles[0] || null;

  return {
    getRootProps,
    getInputProps,
    file,
    maxFileSize,
  };
}
