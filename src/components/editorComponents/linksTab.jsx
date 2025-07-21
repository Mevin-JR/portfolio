"use client";
import { File as FileIcon, Info } from "lucide-react";
import LinkComponent from "./linkComponent";

import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useEffect, useRef, useState } from "react";
import { storage } from "@/firebaseConfig";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import toast from "react-hot-toast";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function LinksTab() {
  const inputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [resumeFile, setResumeFile] = useState();

  const fetchLatestResume = async () => {
    try {
      const folderRef = ref(storage, "resume/");

      const allFiles = await listAll(folderRef);
      const sortedFiles = allFiles.items.sort((a, b) => {
        const extractTimestamp = (name) => {
          const match = name.match(/Mevin_Resume_(\d+)\.pdf$/);
          if (!match) return 0;
          return parseInt(match[1], 10);
        };

        return extractTimestamp(b.name) - extractTimestamp(a.name);
      });
      const latestResume = sortedFiles[0];
      const url = await getDownloadURL(latestResume);

      setResumeFile(url);
    } catch (error) {
      console.error("Error fetching resume from storage:", error);
    }
  };

  useEffect(() => {
    fetchLatestResume();
  }, [resumeFile]);

  const handleResumeUpload = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const uploadResumeToStorage = async (file) => {
    try {
      const resumeRef = ref(storage, `resume/${file.name}`);
      await uploadBytes(resumeRef, file);

      fetchLatestResume();
    } catch (error) {
      console.error("Error trying to upload resume:", error);
    }
  };

  const updateResume = () => {
    if (!uploadedFile) return;
    if (uploadedFile.type !== "application/pdf") {
      toast.error("Only .pdf files are supported", {
        duration: 5000,
        style: {
          background: "rgba(255, 255, 255, 0.1)",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        },
      });
    }

    const timestamp = Date.now();
    const renamedFile = new File(
      [uploadedFile],
      `Mevin_Resume_${timestamp}.pdf`,
      {
        type: uploadedFile.type,
      }
    );

    uploadResumeToStorage(renamedFile);
    removeResume();
  };

  const removeResume = () => {
    setUploadedFile(null);
    if (inputRef.current) {
      inputRef.current.value = null;
    }
  };

  return (
    <>
      <div className="mt-10 flex justify-between w-full">
        <div className="basis-[45%] flex flex-col gap-10">
          <h2 className="text-2xl text-cyan-400">Links</h2>
          <div className="flex gap-2 text-gray-400">
            <Info width={25} height={20} />
            <p className="text-sm">
              Change links used in various places (socials etc.) in the
              portfolio. The 'copy:' prefix can be used to copy a particular
              string to the user's clipboard.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-10 justify-evenly">
            <LinkComponent linkName="Github" />
            <LinkComponent linkName="LinkedIn" />
            <LinkComponent linkName="Email" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-1 h-[50%] bg-cyan-400 rounded"></div>
        </div>
        <div className="basis-[45%]">
          <h2 className="text-2xl text-cyan-400 mb-10">Resume</h2>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-center gap-4">
              <div
                className="p-4 rounded-lg border border-gray-600 bg-gray-900 
              text-gray-400 text-sm
              flex flex-col gap-5 items-center justify-center
              cursor-pointer"
                onClick={handleResumeUpload}
              >
                <FileIcon width={50} height={50} />
                <div className="text-center">
                  <p>Click to upload resume</p>
                  <p>.pdf supported</p>
                </div>
                {uploadedFile && (
                  <div className="w-[150px] truncate overflow-hidden whitespace-nowrap text-cyan-400">
                    {uploadedFile.name}
                  </div>
                )}
                <input
                  type="file"
                  ref={inputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
              <div
                className="flex border border-cyan-400/50 bg-cyan-400/10 w-full
              text-sm text-cyan-400 rounded"
              >
                <div
                  className="py-2 basis-[50%] flex items-center justify-center cursor-pointer hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  onClick={updateResume}
                >
                  Update
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-[1px] h-[50%] bg-cyan-400/60"></div>
                </div>
                <div
                  className="py-2 basis-[50%] flex items-center justify-center cursor-pointer hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  onClick={removeResume}
                >
                  Remove
                </div>
              </div>
            </div>
            <Document file={resumeFile}>
              <Page pageNumber={1} scale={0.7} />
            </Document>
          </div>
        </div>
      </div>
    </>
  );
}
