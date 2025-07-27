import Tooltip from "@/components/tooltip";
import { Building2, Calendar, MapPin, Plus, Tag, Trash2 } from "lucide-react";

export default function ExperienceTab() {
  const inputStyle = `outline-none p-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg`;

  return (
    <div className="w-full mt-10 flex flex-col gap-10 justify-center items-center">
      <h1 className="text-2xl text-cyan-400">Experience Continers</h1>
      <div
        className="relative w-[80%] p-5 flex flex-col items-center gap-10
       bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
      >
        <div
          className="absolute -top-3 -left-3 flex items-center justify-center
        w-10 h-10 rounded-xl bg-cyan-400 
        text-black text-2xl"
        >
          1
        </div>
        <div className="flex gap-5">
          <div className="basis-[25%] flex flex-col justify-center gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Calendar />
                <h2>Date</h2>
              </div>
              <input placeholder="Start Date" className={inputStyle} />
              <input placeholder="End Date" className={inputStyle} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Building2 />
                <h2>Company</h2>
              </div>
              <input placeholder="Company Name" className={inputStyle} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <MapPin />
                <h2>Location</h2>
              </div>
              <input placeholder="Work Location" className={inputStyle} />
            </div>
          </div>
          <div className="basis-[2%] flex items-center justify-center">
            <div className="w-1 h-[70%] bg-white/20 rounded" />
          </div>
          <div className="basis-[50%] flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2>Title</h2>
              <input placeholder="Experience Title" className={inputStyle} />
            </div>
            <div className="flex flex-col gap-2">
              <h2>Experience Description</h2>
              <div
                className="w-full h-[250px] overflow-scroll scrollbar-hide
                flex flex-col gap-2
              p-4 bg-black/55 backdrop-blur-sm border border-white/20 rounded-lg"
              >
                <div
                  className="flex gap-2 py-2
                border-b border-white/20"
                >
                  <h3 className="basis-[5%]">1.</h3>
                  <p className="basis-[90%] text-gray-400">Some para</p>
                  <Trash2 className="basis-[5%] text-red-400" />
                </div>
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
          </div>
        </div>
        <div className="w-[200px]">
          <div
            className="flex border border-cyan-400/50 bg-cyan-400/10 w-full
              text-sm text-cyan-400 rounded"
          >
            <div className="py-2 basis-[50%] flex items-center justify-center cursor-pointer hover:bg-cyan-400 hover:text-black transition-all duration-300">
              Update
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
    </div>
  );
}
