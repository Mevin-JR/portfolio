"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
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
        "pointer-events-none fixed w-[40px] h-[40px] rounded-full bg-cyan-300 opacity-50 animate-ripple";
      ripple.style.left = `${e.clientX - size / 2}px`;
      ripple.style.top = `${e.clientY - size / 2}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", addRipple);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", addRipple);
    };
  }, [isHidden]);

  return (
    <div
      ref={cursorRef}
      className={`fixed z-[9999] w-[20px] h-[20px] -translate-x-1/2 -translate-y-1/2 
      pointer-events-none rounded-full bg-cyan-400 transition-transform duration-75 
      shadow-[0_0_10px_#06b6d4,0_0_20px_#06b6d4,0_0_40px_#06b6d4] 
      ${isHidden ? "hidden" : ""}`}
    />
  );
}
