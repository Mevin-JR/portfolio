"use client";

import { db } from "@/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

export default function LinkEditPopup({
  linkName,
  currentLink,
  setShowLinkEditPopup,
  setReloadLinks,
}) {
  const [updatedLink, setUpdatedLink] = useState("");

  const handleUpdate = async () => {
    try {
      const ref = doc(db, "links_and_resume", "links");
      await updateDoc(ref, {
        [linkName.toLowerCase()]: updatedLink,
      });

      setShowLinkEditPopup(false);
      setReloadLinks(true);
    } catch (error) {
      console.error(`Error updaing ${linkName} link:`, error);
    }
  };

  return (
    <div
      className="w-screen h-screen absolute top-0 left-0 
    bg-black/10 backdrop-blur-[2px] z-[999]
    flex justify-center items-center"
      onClick={() => setShowLinkEditPopup(false)}
    >
      <div
        className="py-4 px-8 rounded border border-cyan-400/40
      flex flex-col gap-4 items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{`Edit ${linkName} Link`}</h2>
        <input
          value={updatedLink || ""}
          onChange={(e) => setUpdatedLink(e.target.value)}
          placeholder={currentLink}
          className="w-[300px] bg-cyan-400/10 border border-cyan-400/20 outline-none p-2"
        />
        {updatedLink.length === 0 ? (
          <div className="mt-5 bg-gray-600 py-2 px-4 rounded cursor-not-allowed">
            Update
          </div>
        ) : (
          <div
            className="mt-5 bg-cyan-400/80 py-2 px-4 rounded cursor-pointer"
            onClick={handleUpdate}
          >
            Update
          </div>
        )}
      </div>
    </div>
  );
}
