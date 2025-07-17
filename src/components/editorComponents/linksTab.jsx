"use client";
import { Info } from "lucide-react";
import LinkComponent from "./linkComponent";

export default function LinksTab() {
  return (
    <>
      <div className="mt-10 flex justify-between w-full">
        <div className="basis-[45%] flex flex-col gap-10">
          <h2 className="text-2xl text-cyan-400">Links</h2>
          <div className="flex gap-2 text-gray-400">
            <Info width={25} height={20} />
            <p className="text-sm">
              Change links used in various places (socials etc.) in the
              portfolio. The 'copy:' tag can be used to copy a particular string
              to the user's clipboard.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-10 justify-evenly">
            <LinkComponent linkName="Github" />
            <LinkComponent linkName="LinkedIn" />
            <LinkComponent linkName="Email" />
          </div>
        </div>
        <div className="self-center w-1 bg-cyan-400 rounded"></div>
        <div className="basis-[45%]">
          <h2 className="text-2xl text-cyan-400 mb-10">Resume</h2>
        </div>
      </div>
    </>
  );
}
