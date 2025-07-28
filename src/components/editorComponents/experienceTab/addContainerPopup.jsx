import ExperienceContainer from "./experienceContainer";

export default function AddContainerPopup({
  isOpen,
  setShowAddContainerPopup,
}) {
  if (!isOpen) return;

  return (
    <div
      className="w-screen h-screen absolute top-0 left-0 
    bg-black/10 backdrop-blur-sm z-[999]
    flex justify-center items-center"
      onClick={() => setShowAddContainerPopup(false)}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <ExperienceContainer isPopup={true} />
      </div>
    </div>
  );
}
