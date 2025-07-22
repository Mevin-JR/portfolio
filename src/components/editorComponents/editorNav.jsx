"use client";

import { signOut } from "next-auth/react";
import { useEffect, useRef } from "react";

const tabs = [
  { key: "links", label: "Links & Resume" },
  { key: "about", label: "About me" },
  { key: "tools", label: "Tools & Tech" },
  { key: "projects", label: "Projects/Works" },
];

export default function EditorNav({ activeTab, setActiveTab }) {
  const underlineRef = useRef(null);
  const tabsRef = useRef({});

  useEffect(() => {
    const updateUnderline = () => {
      const el = tabsRef.current[activeTab];
      const underline = underlineRef.current;
      if (el && underline) {
        underline.style.width = `${el.offsetWidth}px`;
        underline.style.left = `${el.offsetLeft}px`;
      }
    };

    const timer = setTimeout(updateUnderline, 50);

    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="mt-5 mb-10 flex justify-between w-[75vw] border-b border-cyan-400">
      <ul className="relative flex gap-5 text-center">
        {tabs.map(({ key, label }) => (
          <li
            key={key}
            ref={(el) => (tabsRef.current[key] = el)}
            className={`py-2 px-4 cursor-pointer ${
              activeTab === key ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </li>
        ))}
        <div
          ref={underlineRef}
          className="absolute bottom-0 h-[3px] bg-white rounded-full shadow-[0px_0px_30px_#FFF] transition-all duration-300"
        />
      </ul>
      <div
        className="text-red-600 flex justify-center items-center px-3 cursor-pointer hover:scale-110 transition-all duration-300"
        onClick={() => signOut()}
      >
        Log Out
      </div>
    </div>
  );
}
