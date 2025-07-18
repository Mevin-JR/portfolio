"use client";
import { File, Image, Info } from "lucide-react";
import LinkComponent from "./linkComponent";

import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function LinksTab() {
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
              >
                <File width={50} height={50} />
                <div className="text-center">
                  <p>Click to upload resume</p>
                  <p>.pdf supported</p>
                </div>
              </div>
              <div
                className="flex border border-cyan-400/50 bg-cyan-400/10 w-full
              text-sm text-cyan-400 rounded"
              >
                <div className="py-2 basis-[50%] flex items-center justify-center cursor-pointer hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Update
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-[1px] h-[50%] bg-cyan-400/60"></div>
                </div>
                <div className="py-2 basis-[50%] flex items-center justify-center cursor-pointer hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Remove
                </div>
              </div>
            </div>
            <Document file="/Mevin_JR_Resume.pdf">
              <Page pageNumber={1} scale={0.7} />
            </Document>
          </div>
        </div>
      </div>
    </>
  );
}
