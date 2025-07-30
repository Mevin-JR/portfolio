"use client";

import Tooltip from "@/components/tooltip";
import { useEffect, useState } from "react";
import ExperienceContainer from "./experienceContainer";
import { fetchExperienceContainers } from "@/helperFunctions";
import AddContainerPopup from "./addContainerPopup";

export default function ExperienceTab() {
  const [showAddContainerPopup, setShowAddContainerPopup] = useState(false);
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    const unsub = fetchExperienceContainers(setContainers);
    return () => unsub();
  }, []);

  return (
    <div className="w-full mt-10 flex flex-col gap-10 justify-center items-center">
      <h1 className="text-2xl text-cyan-400">Experience Continers</h1>
      {containers.length > 0 ? (
        <div className="relative w-[80%]">
          {containers.map((container, index) => (
            <ExperienceContainer key={index} containerData={container} />
          ))}
        </div>
      ) : (
        <div className="text-gray-400 mt-10">
          No experience containers found
        </div>
      )}

      <Tooltip
        text="Click to add an experience container"
        bgColor="transparent"
        position="bottom"
        textColor="cyan"
      >
        <div
          className="p-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg cursor-pointer"
          onClick={() => setShowAddContainerPopup(true)}
        >
          Add Experience
        </div>
      </Tooltip>
      {showAddContainerPopup && (
        <AddContainerPopup
          isOpen={showAddContainerPopup}
          setShowAddContainerPopup={setShowAddContainerPopup}
        />
      )}
    </div>
  );
}
