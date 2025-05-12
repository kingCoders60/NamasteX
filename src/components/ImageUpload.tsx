"use client";

// import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: "postImage";
}

function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
  if (value) {
    return (
      <div className="relative size-40">
        <img src={value} alt="Upload" className="rounded-md size-40 object-cover" />
        <button
          onClick={() => onChange("")}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    );
  }
  return (
    // <UploadDropzone
    //   endpoint={endpoint}
    //   onClientUploadComplete={(res) => {
    //     onChange(res?.[0].url);
    //   }}
    //   onUploadError={(error: Error) => {
    //     console.log(error);
    //   }}
    // />
    <div className="flex items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-md">
      <span className="text-gray-500">Upload an image</span>
    </div>
  );
}
export default ImageUpload;