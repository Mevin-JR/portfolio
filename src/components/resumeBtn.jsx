"use client";

import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { Download, Minus, Plus, RotateCcw, View } from "lucide-react";
import { useState } from "react";
import Tooltip from "./tooltip";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function ResumeBtn() {
  const [showResume, setShowResume] = useState(false);
  const [resumeScale, setResumeScale] = useState(1);

  const toggleShowResume = () => setShowResume((prev) => !prev);

  const reduceResumeScale = () => {
    if (resumeScale > 0.8) {
      setResumeScale((prev) => prev - 0.1);
    }
  };

  const increaseResumeScale = () => {
    if (resumeScale < 1.5) {
      setResumeScale((prev) => prev + 0.1);
    }
  };

  return (
    <>
      <div id="resume" className="relative inline-block overflow-hidden group">
        <button
          className="relative z-10 flex gap-3 items-center justify-center rounded px-5 py-3 border border-white cursor-pointer text-white font-medium
                     hover:text-black transition-colors duration-300"
          onClick={toggleShowResume}
        >
          <View />
          <p>Resume</p>
        </button>
        <div className="absolute z-0 inset-0 bg-white rounded scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100"></div>
      </div>
      {showResume && (
        <div
          className="absolute z-30 top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/55"
          onClick={() => setShowResume(false)}
        >
          <div
            id="resume-preview"
            className="relative p-10 bg-gray-900/80 rounded max-w-2xl max-h-screen overflow-auto"
            style={{ userSelect: "text" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="fixed z-10 bottom-24 left-1/2 transform -translate-x-1/2 flex gap-1">
              <ul className="flex items-center justify-center bg-gray-900 rounded-2xl">
                <Tooltip text="Zoom In">
                  <li
                    className="flex items-center justify-center rounded-r-none w-full h-full p-2 cursor-pointer transition-colors duration-300 hover:bg-white/25"
                    onClick={increaseResumeScale}
                  >
                    <Plus />
                  </li>
                </Tooltip>
                <Tooltip text="Zoom out">
                  <li
                    className="flex items-center justify-center w-full h-full p-2 cursor-pointer transition-colors duration-300 hover:bg-white/25"
                    onClick={reduceResumeScale}
                  >
                    <Minus />
                  </li>
                </Tooltip>
                <Tooltip text="Reset">
                  <li
                    className="flex items-center justify-center rounded-l-none w-full h-full px-3 py-2 cursor-pointer transition-colors duration-300 hover:bg-white/25"
                    onClick={() => setResumeScale(1)}
                  >
                    <RotateCcw size={20} />
                  </li>
                </Tooltip>
              </ul>
              <Tooltip text="Download">
                <div className="z-10 bg-gray-900 rounded-2xl">
                  <a
                    className="flex items-center justify-center w-full h-full p-3 cursor-pointer transition-colors duration-300 hover:bg-white/25"
                    href="/Mevin_JR_Resume.pdf"
                    download
                  >
                    <Download />
                  </a>
                </div>
              </Tooltip>
            </div>
            <Document file="/Mevin_JR_Resume.pdf">
              <Page pageNumber={1} scale={resumeScale} />
            </Document>
          </div>
        </div>
      )}
    </>
  );
}
