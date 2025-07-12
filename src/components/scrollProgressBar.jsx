"use client";

import { useState, useEffect } from "react";

export default function ScrollProgressBar() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollHeight(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-full bg-gray-200 z-50">
      <div
        className="bg-blue-500 w-full transition-all duration-75 ease-linear"
        style={{ height: `${scrollHeight}%` }}
      />
    </div>
  );
}
