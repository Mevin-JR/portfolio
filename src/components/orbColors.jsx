"use client";

import { useAccentColor } from "@/context/accentColorContext";
import { useState } from "react";
import Tooltip from "./tooltip";

export default function OrbColors() {
  const { accentColor, setAccentColor } = useAccentColor();
  const [isExpanded, setIsExpanded] = useState(false);

  const accentColors = ["#22D3EE", "#FF9365", "#E3C16F", "#0081BF"];

  return (
    <>
      <div
        className="hidden md:flex flex-col gap-2 fixed bottom-5 right-5"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {isExpanded && (
          <div
            className="flex flex-col-reverse gap-5 p-4 
            animate-fadeIn
          bg-white/5 backdrop-blur-2xl border border-white/20 shadow-md rounded-lg"
          >
            {accentColors.map((color) => (
              <Tooltip
                key={color}
                text="Change orb"
                bgColor="transparent"
                position="left"
                textColor={color}
              >
                <div
                  className="rounded-full h-5 w-5 cursor-pointer transition-transform duration-200 hover:scale-150"
                  onClick={() => setAccentColor(color)}
                  style={{
                    backgroundColor: color,
                    boxShadow: `0 0 20px ${color}`,
                  }}
                />
              </Tooltip>
            ))}
          </div>
        )}

        <div className="p-4 bg-white/5 backdrop-blur-2xl border border-white/20 shadow-md rounded-lg">
          <div
            className="rounded-full h-5 w-5"
            style={{
              backgroundColor: accentColor,
              boxShadow: `0 0 20px ${accentColor}`,
            }}
          />
        </div>
      </div>
    </>
  );
}
