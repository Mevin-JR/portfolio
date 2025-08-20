"use client";

import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { motion, AnimatePresence } from "motion/react";
import {
  LuDownload,
  LuMinus,
  LuPlus,
  LuRotateCcw,
  LuView,
} from "react-icons/lu";
import { useEffect, useState } from "react";
import Tooltip from "./tooltip";
import { fetchLatestResume } from "@/helperFunctions";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function ResumeBtn() {
  const [showResume, setShowResume] = useState(false);
  const [resumeScaleConst, setResumeScaleConst] = useState(1);
  const [resumeScale, setResumeScale] = useState(1);
  const [maxScale, setMaxScale] = useState(1.4);
  const [minScale, setMinScale] = useState(0.8);

  const [resumeURL, setResumeURL] = useState("");

  // Smaller Devices (768px)
  const SCALE_SM = 0.5;
  const MIN_SCALE_SM = 0.3;
  const MAX_SCALE_SM = 0.9;

  // Medium Devices (1024px)
  const SCALE_MD = 0.8;
  const MIN_SCALE_MD = 0.4;
  const MAX_SCALE_MD = 1.2;

  useEffect(() => {
    const unsub = fetchLatestResume(setResumeURL);
    return () => unsub();
  }, []);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      setResumeScaleConst(SCALE_SM);

      setResumeScale(SCALE_SM);
      setMinScale(MIN_SCALE_SM);
      setMaxScale(MAX_SCALE_SM);
    } else if (screenWidth < 1024) {
      setResumeScaleConst(SCALE_MD);

      setResumeScale(SCALE_MD);
      setMinScale(MIN_SCALE_MD);
      setMaxScale(MAX_SCALE_MD);
    }
  }, []);

  useEffect(() => {
    if (showResume) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showResume]);

  const toggleShowResume = () => {
    setShowResume((prev) => !prev);
    resetResumeScale();
  };

  const reduceResumeScale = () => {
    if (resumeScale > minScale) {
      setResumeScale((prev) => prev - 0.2);
    }
  };

  const increaseResumeScale = () => {
    if (resumeScale < maxScale) {
      setResumeScale((prev) => prev + 0.2);
    }
  };

  const resetResumeScale = () => {
    setResumeScale(resumeScaleConst);
  };

  const handleDownload = async () => {
    const response = await fetch(resumeURL);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Mevin_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <div id="resume" className="relative inline-block overflow-hidden group">
        <button
          className="relative z-10 flex gap-3 items-center justify-center rounded px-5 py-3 border border-white text-white font-medium
                     hover:text-black transition-colors duration-300"
          onClick={toggleShowResume}
        >
          <LuView size={20} />
          <p>Resume</p>
        </button>
        <div className="absolute z-0 inset-0 bg-white rounded scale-x-0 origin-left transition-all duration-300 group-hover:scale-x-100"></div>
      </div>
      <AnimatePresence>
        {showResume && (
          <motion.div
            className="fixed z-30 top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/55"
            onClick={() => setShowResume(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              id="resume-preview"
              className="relative rounded max-h-[95vh] max-w-[95vw] overflow-auto"
              style={{ userSelect: "text" }}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <Document file={resumeURL}>
                <Page pageNumber={1} scale={resumeScale} />
              </Document>
              <motion.div
                className="fixed z-10 bottom-[110px] left-1/2 flex gap-1"
                initial={{ y: "15%", opacity: 0, x: "-50%" }}
                animate={{ y: 0, opacity: 1, x: "-50%" }}
                exit={{ y: "15%", opacity: 0, x: "-50%" }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  delay: 0.25,
                }}
              >
                <ul className="flex items-center justify-center bg-gray-900 rounded-2xl">
                  <Tooltip text="Zoom In">
                    <li
                      className="flex items-center justify-center rounded-r-none w-full h-full p-2 cursor-pointer transition-colors duration-300 hover:bg-white/25"
                      onClick={increaseResumeScale}
                    >
                      <LuPlus size={22} />
                    </li>
                  </Tooltip>
                  <Tooltip text="Zoom out">
                    <li
                      className="flex items-center justify-center w-full h-full p-2 cursor-pointer transition-colors duration-300 hover:bg-white/25"
                      onClick={reduceResumeScale}
                    >
                      <LuMinus size={22} />
                    </li>
                  </Tooltip>
                  <Tooltip text="Reset">
                    <li
                      className="flex items-center justify-center rounded-l-none w-full h-full px-3 py-2 cursor-pointer transition-colors duration-300 hover:bg-white/25"
                      onClick={resetResumeScale}
                    >
                      <LuRotateCcw size={20} />
                    </li>
                  </Tooltip>
                </ul>
                <Tooltip text="Download">
                  <div className="z-10 bg-gray-900 rounded-2xl">
                    <button
                      className="flex items-center justify-center w-full h-full p-3 cursor-pointer transition-colors duration-300 hover:bg-white/25"
                      onClick={handleDownload}
                    >
                      <LuDownload size={20} />
                    </button>
                  </div>
                </Tooltip>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
