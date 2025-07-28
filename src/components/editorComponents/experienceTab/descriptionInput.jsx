"use client";

import { useState } from "react";

export default function DescriptionInput({
  isOpen,
  setIsOpen,
  addDescriptionPoint,
}) {
  if (!isOpen) return;

  const [descriptionPoint, setDescriptionPoint] = useState("");

  const handleAdd = () => {
    addDescriptionPoint(descriptionPoint);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <textarea
        placeholder="Enter description"
        value={descriptionPoint}
        onChange={(e) => setDescriptionPoint(e.target.value)}
        className="w-full outline-none p-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg scrollbar-hide"
      />
      <div
        className="absolute bottom-4 right-2 px-2 py-1 bg-[#222525] backdrop-blur-sm border border-white/20 rounded-lg cursor-pointer"
        onClick={handleAdd}
      >
        Add
      </div>
    </div>
  );
}
