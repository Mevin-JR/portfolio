import {
  Building2,
  Calendar,
  MapPin,
  Plus,
  PlusIcon,
  Tag,
  Trash2,
} from "lucide-react";
import Tooltip from "@/components/tooltip";
import { useState } from "react";
import DescriptionInput from "./descriptionInput";

export default function ExperienceContainer({
  isPopup = false,
  containerData = {},
}) {
  const [id, setID] = useState(containerData.id || "");
  const [startDate, setStartDate] = useState(containerData.startDate || "");
  const [endDate, setEndDate] = useState(containerData.endDate || "");
  const [companyName, setCompanyName] = useState(containerData.company || "");
  const [location, setLocation] = useState(containerData.location || "");
  const [title, setTitle] = useState(containerData.title || "");
  const [description, setDescription] = useState(
    containerData.experienceDescription || {}
  );
  const [tags, setTags] = useState(containerData.tags || []);
  const [showDescriptionInput, setShowDescriptionInput] = useState(false);
  const [popupDescription, setPopupDescription] = useState({});

  const addDescriptionPoint = (descriptionPoint) => {
    const key = Object.keys(popupDescription).length + 1;
    setPopupDescription((prev) => ({
      ...prev,
      [key]: descriptionPoint,
    }));
  };

  const inputStyle = `outline-none p-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg`;

  return (
    <>
      <div
        className="p-5 flex flex-col items-center gap-10
       bg-[#121414] backdrop-blur-sm border border-white/20 rounded-lg"
      >
        {id && (
          <div
            className="absolute -top-3 -left-3 flex items-center justify-center
        w-10 h-10 rounded-xl bg-cyan-400 
        text-black text-2xl"
          >
            {id}
          </div>
        )}
        <div className="flex gap-5">
          <div className="basis-[25%] flex flex-col justify-center gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Calendar />
                <h2>Date</h2>
              </div>
              <input
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={inputStyle}
              />
              <input
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className={inputStyle}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Building2 />
                <h2>Company</h2>
              </div>
              <input
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className={inputStyle}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <MapPin />
                <h2>Location</h2>
              </div>
              <input
                placeholder="Work Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={inputStyle}
              />
            </div>
          </div>
          <div className="basis-[2%] flex items-center justify-center">
            <div className="w-1 h-[70%] bg-white/20 rounded" />
          </div>
          <div className="basis-[50%] flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2>Title</h2>
              <input
                placeholder="Experience Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={inputStyle}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between items-center">
                <h2>Experience Description</h2>
                <Tooltip
                  text="Add Description"
                  bgColor="transparent"
                  textColor="cyan"
                >
                  <div
                    className="p-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg cursor-pointer"
                    onClick={() => setShowDescriptionInput(true)}
                  >
                    <PlusIcon />
                  </div>
                </Tooltip>
              </div>
              <div
                className="w-full h-[250px] overflow-scroll scrollbar-hide
                flex flex-col gap-2
              p-4 bg-black/55 backdrop-blur-sm border border-white/20 rounded-lg"
              >
                {isPopup ? (
                  <div className="flex flex-col gap-2">
                    {Object.keys(popupDescription).length !== 0 ? (
                      Object.entries(popupDescription).map(([key, value]) => (
                        <div
                          key={key}
                          className="relative flex items-center py-2 border-b border-white/20"
                        >
                          <h3 className="basis-[5%]">{key}.</h3>
                          <p className="basis-[90%] text-gray-400 truncate overflow-hidden whitespace-nowrap">
                            {value}
                          </p>
                          <Trash2 className="absolute right-0 text-red-400 cursor-pointer" />
                        </div>
                      ))
                    ) : (
                      <>
                        {!showDescriptionInput && (
                          <div className="text-gray-400">
                            No description found...
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    {Object.keys(description).length !== 0 ? (
                      Object.entries(description).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex w-full items-center py-2 border-b border-white/20"
                        >
                          <h3 className="basis-[5%]">{key}.</h3>
                          <p className="basis-[90%] text-gray-400">{value}</p>
                          <Trash2 className="basis-[5%] text-red-400 cursor-pointer" />
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-400">
                        No description found...
                      </div>
                    )}
                  </div>
                )}
                {showDescriptionInput && (
                  <DescriptionInput
                    isOpen={showDescriptionInput}
                    setIsOpen={setShowDescriptionInput}
                    addDescriptionPoint={addDescriptionPoint}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="basis-[2%] flex items-center justify-center">
            <div className="w-1 h-[70%] bg-white/20 rounded" />
          </div>
          <div className="basis-[25%] flex flex-col justify-center gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Tag />
                <h2>Tags</h2>
              </div>
              <p className="text-gray-400 text-xs">
                Tags are used to display the relevant technology or service used
                during the experience period
              </p>
            </div>
            <div className="flex items-center">
              <input
                placeholder="Add tag"
                className="outline-none p-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-l-lg"
              />
              <div
                className="w-full h-full flex items-center justify-center 
            bg-white/5 backdrop-blur-sm border border-white/20 border-l-0 rounded-r-lg cursor-pointer hover:bg-white/15 transition-all duration-200"
              >
                <Tooltip text="Add tag" bgColor="transparent" textColor="cyan">
                  <Plus />
                </Tooltip>
              </div>
            </div>
            {tags && (
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag) => (
                  <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg">
                    {tag}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="w-[200px]">
          <div
            className="flex border border-cyan-400/50 bg-cyan-400/10 w-full
              text-sm text-cyan-400 rounded"
          >
            <div className="py-2 basis-[50%] flex items-center justify-center cursor-pointer hover:bg-cyan-400 hover:text-black transition-all duration-300">
              {isPopup ? "Add" : "Update"}
            </div>
            <div className="flex justify-center items-center">
              <div className="w-[1px] h-[50%] bg-cyan-400/60" />
            </div>
            <div className="py-2 basis-[50%] flex items-center justify-center cursor-pointer hover:bg-cyan-400 hover:text-black transition-all duration-300">
              Reset
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
