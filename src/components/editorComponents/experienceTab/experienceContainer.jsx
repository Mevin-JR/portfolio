import {
  LuBuilding2,
  LuCalendar,
  LuMapPin,
  LuPlus,
  LuTag,
  LuTrash2,
  LuX,
} from "react-icons/lu";
import Tooltip from "@/components/tooltip";
import { useState } from "react";
import DescriptionInput from "./descriptionInput";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";
import toast from "react-hot-toast";
import ConfirmationPopup from "@/components/confirmationPopup";

export default function ExperienceContainer({
  isPopup = false,
  setShowPopup = null,
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
  const [tagInput, setTagInput] = useState("");

  const [showDescriptionInput, setShowDescriptionInput] = useState(false);
  const [popupDescription, setPopupDescription] = useState({});
  const [popupTags, setPopupTags] = useState([]);

  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [confirmationHandlers, setConfirmationHandlers] = useState({
    onConfirm: () => {},
    onCancel: () => {},
  });

  const inputStyle = `outline-none text-white p-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg`;

  const addDescriptionPoint = (descriptionPoint) => {
    const key = Object.keys(popupDescription).length + 1;
    setPopupDescription((prev) => ({
      ...prev,
      [key]: descriptionPoint,
    }));
  };

  const removeDescription = (key) => {
    if (isPopup) {
      setPopupDescription((prev) => {
        const { [key]: _, ...updatedDescription } = prev;
        return updatedDescription;
      });
    } else {
      setDescription((prev) => {
        const { [key]: _, ...updatedDescription } = prev;
        return updatedDescription;
      });
    }
  };

  const resetContainerInput = () => {
    setStartDate("");
    setEndDate("");
    setCompanyName("");
    setLocation("");
    setTitle("");
    if (isPopup) {
      setPopupDescription({});
      setPopupTags([]);
    } else {
      setDescription({});
      setTags([]);
    }
  };

  const getLastContainerID = async () => {
    try {
      const containersRef = collection(db, "experience");
      const snap = await getDocs(containersRef);
      return snap.docs.length;
    } catch (error) {
      console.error("Error retreiving last container ID:", error);
    }
  };

  const setContainerFirebase = async (containerID) => {
    try {
      await setDoc(doc(db, "experience", containerID.toString()), {
        id: containerID,
        startDate,
        endDate,
        company: companyName,
        location,
        title,
        experienceDescription: isPopup ? popupDescription : description,
        tags: isPopup ? popupTags : tags,
      });
    } catch (error) {
      console.error("Error setting container to firestore:", error);
    }
  };

  const updateContainer = async (id) => {
    setContainerFirebase(id)
      .then(() => {
        toast.success(`Successfully updated container (${id})`, {
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
      })
      .catch((error) => {
        toast.error("Something went wrong", {
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
        console.error("Error updating experience container:", error);
      });
  };

  const addContainer = async () => {
    if (
      !startDate ||
      !endDate ||
      !companyName ||
      !location ||
      !title ||
      Object.keys(popupDescription).length === 0 ||
      popupTags.length === 0
    ) {
      toast.error("Container fields cannot be empty", {
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
      return;
    }

    try {
      const containerID = (await getLastContainerID()) + 1;

      setContainerFirebase(containerID);
      setShowPopup(false);
    } catch (error) {
      console.error("Error adding container to firestore:", error);
    }
  };

  const removeContainer = async (containerID) => {
    const isConfirmed = await new Promise((resolve) => {
      const handleConfirm = () => {
        setShowConfirmationPopup(false);
        resolve(true);
      };

      const handleCancel = () => {
        setShowConfirmationPopup(false);
        resolve(false);
      };

      setConfirmationHandlers({
        onConfirm: handleConfirm,
        onCancel: handleCancel,
      });
      setShowConfirmationPopup(true);
    });

    if (isConfirmed) {
      try {
        await deleteDoc(doc(db, "experience", containerID.toString()));

        toast.success(`Successfully deleted container (${id})`, {
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
      } catch (error) {
        toast.error("Error deleting container", {
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
        console.error(
          `Error removing experience container (${containerID})`,
          error
        );
      }
    }
  };

  return (
    <>
      <ConfirmationPopup
        isOpen={showConfirmationPopup}
        setIsOpen={setShowConfirmationPopup}
        onConfirm={confirmationHandlers.onConfirm}
        onCancel={confirmationHandlers.onCancel}
      />
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
        <div className="flex gap-5 text-gray-400">
          <div className="basis-[25%] flex flex-col justify-center gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <LuCalendar />
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
                <LuBuilding2 />
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
                <LuMapPin />
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
                    <LuPlus />
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
                          <p className="basis-[90%] w-40 text-white truncate overflow-hidden whitespace-nowrap">
                            {value}
                          </p>
                          <LuTrash2
                            className="absolute right-0 text-red-400 cursor-pointer"
                            onClick={() => removeDescription(key)}
                          />
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
                          className="relative flex w-full items-center py-2 border-b border-white/20"
                        >
                          <h3 className="basis-[5%]">{key}.</h3>
                          <p className="basis-[90%] w-40 text-white truncate overflow-hidden whitespace-nowrap">
                            {value}
                          </p>
                          <LuTrash2
                            className="absolute right-0 text-red-400 cursor-pointer"
                            onClick={() => removeDescription(key)}
                          />
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
                <LuTag />
                <h2>Tags</h2>
              </div>
              <p className="text-gray-400 text-xs">
                Tags are used to display the relevant technology or service used
                during the experience period
              </p>
            </div>
            {isPopup ? (
              <>
                <div className="flex items-center text-white">
                  <input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Add tag"
                    maxLength={15}
                    className="outline-none p-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-l-lg"
                  />
                  <div
                    className="w-full h-full flex items-center justify-center 
                    bg-white/5 backdrop-blur-sm border border-white/20 border-l-0 rounded-r-lg cursor-pointer hover:bg-white/15 transition-all duration-200"
                    onClick={() => {
                      if (!tagInput) return;
                      if (popupTags.length >= 15) return;
                      setPopupTags((prev) => [...prev, tagInput]);
                      setTagInput("");
                    }}
                  >
                    <Tooltip
                      text="Add tag"
                      bgColor="transparent"
                      textColor="cyan"
                    >
                      <LuPlus />
                    </Tooltip>
                  </div>
                </div>
                {popupTags && (
                  <div className="flex gap-2 flex-wrap max-h-[150px] overflow-scroll scrollbar-hide">
                    {popupTags.map((tag) => (
                      <div
                        key={`PopupTag#${tag}`}
                        className="relative text-sm text-white px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg group"
                      >
                        <div
                          className="hidden group-hover:flex absolute left-0 right-0 top-0 bottom-0 bg-[#222525]
                        justify-center items-center rounded-lg cursor-pointer"
                          onClick={() => {
                            setPopupTags((prev) =>
                              prev.filter((arrTag) => arrTag !== tag)
                            );
                          }}
                        >
                          <LuX size={20} className="text-red-500" />
                        </div>
                        {tag}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="flex items-center text-white">
                  <input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Add tag"
                    maxLength={15}
                    className="outline-none p-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-l-lg"
                  />
                  <div
                    className="w-full h-full flex items-center justify-center 
            bg-white/5 backdrop-blur-sm border border-white/20 border-l-0 rounded-r-lg cursor-pointer hover:bg-white/15 transition-all duration-200"
                    onClick={() => {
                      if (!tagInput) return;
                      if (tags.length >= 15) return;
                      setTags((prev) => [...prev, tagInput]);
                      setTagInput("");
                    }}
                  >
                    <Tooltip
                      text="Add tag"
                      bgColor="transparent"
                      textColor="cyan"
                    >
                      <LuPlus />
                    </Tooltip>
                  </div>
                </div>
                {tags && (
                  <div className="flex gap-2 flex-wrap max-h-[150px] overflow-scroll scrollbar-hide">
                    {tags.map((tag) => (
                      <div
                        key={`Tag#${tag}`}
                        className="relative text-sm text-white px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg group"
                      >
                        <div
                          className="hidden group-hover:flex absolute left-0 right-0 top-0 bottom-0 bg-red-200
                        justify-center items-center rounded-lg cursor-pointer"
                          onClick={() => {
                            setTags((prev) =>
                              prev.filter((arrTag) => arrTag !== tag)
                            );
                          }}
                        >
                          <LuX size={20} className="text-red-500" />
                        </div>
                        {tag}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="w-[200px]">
          <div
            className="flex border border-cyan-400/50 bg-cyan-400/10 w-full
              text-sm text-cyan-400 rounded"
          >
            {isPopup ? (
              <>
                <div
                  className="py-2 basis-[50%] flex items-center justify-center cursor-pointer hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  onClick={addContainer}
                >
                  Add
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-[1px] h-[50%] bg-cyan-400/60" />
                </div>
                <div
                  className="py-2 basis-[50%] flex items-center justify-center cursor-pointer hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  onClick={resetContainerInput}
                >
                  Reset
                </div>
              </>
            ) : (
              <>
                <div
                  className="py-2 basis-[50%] flex items-center justify-center cursor-pointer hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  onClick={() => updateContainer(id)}
                >
                  Update
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-[1px] h-[50%] bg-cyan-400/60" />
                </div>
                <div
                  className="py-2 basis-[50%] flex items-center justify-center cursor-pointer hover:bg-red-400 hover:text-black transition-all duration-300"
                  onClick={() => removeContainer(id)}
                >
                  Remove
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
