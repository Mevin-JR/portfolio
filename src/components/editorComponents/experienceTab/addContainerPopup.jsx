import useScrollLock from "@/hooks/useScrollLock";
import ExperienceContainer from "./experienceContainer";

export default function AddContainerPopup({
  isOpen,
  setShowAddContainerPopup,
}) {
  useScrollLock(isOpen);
  if (!isOpen) return null;

  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 
    bg-black/10 backdrop-blur-md z-[999]
    flex justify-center items-center"
      onClick={() => setShowAddContainerPopup(false)}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <ExperienceContainer
          isPopup={true}
          setShowPopup={setShowAddContainerPopup}
        />
      </div>
    </div>
  );
}
