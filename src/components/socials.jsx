"use client";

import { LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Tooltip from "./tooltip";
import { useEffect, useState } from "react";
import { copyEmailToClipboard, fetchLinksRealtime } from "@/helperFunctions";

export default function Socials({ iconSize = 32 }) {
  const [links, setLinks] = useState({});

  useEffect(() => {
    const unsub = fetchLinksRealtime(setLinks);
    return () => unsub();
  }, []);

  const socials = [
    {
      name: "Github",
      icon: <FaGithub size={iconSize} />,
      target: `${links.github}`,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={iconSize} />,
      target: `${links.linkedin}`,
    },
    {
      name: "Mail",
      icon: <LuMail size={iconSize} />,
      target: `${links.email}`,
    },
  ];

  const openTarget = (target) => {
    if (target.startsWith("copy")) {
      const email = target.replace("copy:", "");
      copyEmailToClipboard(email);
    } else {
      window.open(target, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <ul className="flex gap-3 items-center justify-center w-max">
      {socials.map(({ name, icon, target }) => (
        <li
          key={name}
          className="flex items-center justify-center cursor-pointer
            border border-gray-500 rounded bg-transparent p-2 transition-shadow hover:shadow-[0_0_25px_2px_rgba(255,255,255,0.5)]"
          style={{ width: `${iconSize + 18}px`, height: `${iconSize + 18}px` }}
          onClick={() => openTarget(target)}
        >
          <Tooltip text={name} position="bottom" bgColor="transparent">
            {icon}
          </Tooltip>
        </li>
      ))}
    </ul>
  );
}
