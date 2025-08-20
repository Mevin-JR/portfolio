import useScrollLock from "@/hooks/useScrollLock";
import { LuInfo } from "react-icons/lu";

export default function ConfirmationPopup({
  isOpen,
  setIsOpen,
  onConfirm,
  onCancel,
}) {
  useScrollLock(isOpen);
  if (!isOpen) return null;

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed top-0 left-0 w-screen h-screen
        bg-black/10 backdrop-blur-sm z-[999]
        flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[300px] h-[200px] flex flex-col items-center justify-center
       bg-[#121414] backdrop-blur-sm border border-white/20 rounded-lg"
      >
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-2xl">Are you sure?</h1>
            <div className="text-gray-400 flex items-center gap-1">
              <LuInfo size={15} />
              <p className="text-xs text-gray-400">
                This action is irreversible
              </p>
            </div>
          </div>
          <div className="w-full flex justify-around text-white">
            <div
              onClick={onConfirm}
              className="px-4 py-2 rounded-lg bg-green-600 cursor-pointer hover:scale-110 transition-transform duration-200"
            >
              Yes
            </div>
            <div
              onClick={onCancel}
              className="px-4 py-2 rounded-lg bg-red-600 cursor-pointer hover:scale-110 transition-transform duration-200"
            >
              No
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
