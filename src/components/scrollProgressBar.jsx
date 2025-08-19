"use client";

import React, { useState, useEffect, useRef } from "react";

export default function ScrollProgressBar({
  barColor = "bg-blue-500",
  backgroundColor = "white",
  parentRef,
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef?.current) {
        const { top, bottom, height } =
          parentRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how far the parent element is scrolled into view
        const scrollProgress = windowHeight - top;
        const totalScrollable = height + 200; // Use only the parent element's height

        // Calculate percentage, ensuring it ranges from 0 to 100
        const scrollPercentage = Math.min(
          Math.max((scrollProgress / totalScrollable) * 100, 0),
          100
        );
        setProgress(scrollPercentage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="absolute w-2 h-full rounded-full overflow-hidden"
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className={`${barColor} absolute top-0 left-0 right-0 transition-all duration-300 ease-in-out`}
        style={{ height: `${progress}%` }}
      ></div>
    </div>
  );
}
