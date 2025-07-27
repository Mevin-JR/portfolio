"use client";

import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function EditorResumeDisplay({ resumeFile }) {
  return (
    <Document file={resumeFile}>
      <Page pageNumber={1} scale={0.7} />
    </Document>
  );
}
