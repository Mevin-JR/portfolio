"use client";

import { useEffect, useState } from "react";
import { LuClock } from "react-icons/lu";

export default function LiveClock() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleString("en-GB", {
        timezone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(now);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div
      className="z-40 w-[110px] absolute bottom-2 left-[6px] flex gap-2 items-center justify-center
      bg-[#161616] border border-white/20 shadow-md p-3 rounded-lg font-mono"
    >
      <LuClock size={16} />
      <p className="text-sm text-yellow-400">{currentTime}</p>
    </div>
  );
}
