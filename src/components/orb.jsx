"use client";

import { useAccentColor } from "@/context/accentColorContext";
import { useEffect, useRef, useState } from "react";

export default function Orb() {
  const { accentColor } = useAccentColor();

  const cursorRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const moveOrb = (e) => {
      if (!cursorRef.current) return;

      const target = e.target;
      const isTextCursor =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable ||
        window.getComputedStyle(target).cursor === "text";

      setIsHidden(isTextCursor);

      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    const addRipple = (e) => {
      if (isHidden) return;

      const size = 40;
      const ripple = document.createElement("span");
      ripple.className =
        "pointer-events-none fixed w-[40px] h-[40px] rounded-full opacity-50 animate-ripple";
      ripple.style.backgroundColor = accentColor;
      ripple.style.left = `${e.clientX - size / 2}px`;
      ripple.style.top = `${e.clientY - size / 2}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    };

    document.addEventListener("mousemove", moveOrb);
    document.addEventListener("click", addRipple);
    return () => {
      document.removeEventListener("mousemove", moveOrb);
      document.removeEventListener("click", addRipple);
    };
  }, [isHidden, accentColor]);

  return (
    <div
      ref={cursorRef}
      className={`fixed z-[9999] w-[20px] h-[20px] -translate-x-1/2 -translate-y-1/2 
      pointer-events-none rounded-full transition-transform duration-75 
      ${isHidden ? "hidden" : ""}`}
      style={{
        backgroundColor: accentColor,
        boxShadow: `0 0 10px ${accentColor},
        0 0 20px ${accentColor},
        0 0 40px ${accentColor}`,
      }}
    />
  );
}
