import { formatSize } from "~/lib/utils";
import { useFileUploader } from "../hooks/useFileUploader";
import type { FileUploaderProps } from "../types";

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
  const { getRootProps, getInputProps, file, maxFileSize } = useFileUploader({
    onFileSelect,
  });
  return (
    <div className="w-full gradient-border">
      {" "}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="space-y-4 cursor-pointer ">
          {file ? (
            <div
              className="uploader-selected-file"
              onClick={(e) => e.stopPropagation}
            >
              <img src="/images/pdf.png" alt="pdf" className="size-10" />
              <div className="flex items-center space-x-3">
                <div>
                  <p className="text-sm text-gray700 font-medium truncate max-w-xs">
                    {file.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatSize(file.size)}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="p-4 cursor-pointer"
                onClick={(e) => {
                  
                  onFileSelect?.(null);
                }}
              >
                <img src="/icons/cross.svg" alt="remove" className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div>
              <div className="mx-auto w-16 h-16 flex items-center justify-center mb-2">
                <img src="/icons/info.svg" alt="upload" className="size-20" />
              </div>
              <p className="text-lg text-gray-500">
                <span>Click to upload</span>or drag and drop
              </p>
              <p className="text-lg text-gray-500">
                PDF ({formatSize(maxFileSize)})
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
