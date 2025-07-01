"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-[9999] w-[50px] h-[50px] -translate-x-1/2 -translate-y-1/2 
      pointer-events-none rounded-full mix-blend-difference backdrop-brightness-[200%] 
      transition-transform duration-75 shadow-[0_0_30px_#06b6d4]"
    />
  );
}
