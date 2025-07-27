"use client";

import { useEffect, useRef, useState } from "react";

export default function VerticalScrollBar() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const total = rect.height;
        const scrolled = Math.min(Math.max(windowHeight - rect.top, 0), total);
        setProgress((scrolled / total) * 90);
      } else if (rect.bottom <= 0) {
        setProgress(100);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[150vh] bg-gray-100 flex items-center justify-center"
    >
      <div className="absolute left-4 top-0 bottom-0 flex items-start justify-center">
        <div className="w-2 h-full bg-gray-300 rounded-full overflow-hidden">
          <div
            className="w-full bg-blue-600 transition-all duration-75"
            style={{ height: `${progress}%` }}
          />
        </div>
      </div>

      <div className="p-8">
        <p className="text-lg text-center">
          Scroll through this section to see the vertical bar fill.
        </p>
      </div>
    </section>
  );
}
