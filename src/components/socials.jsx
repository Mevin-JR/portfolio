"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import Tooltip from "./tooltip";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { fetchLinksRealtime } from "@/helperFunctions";

export default function Socials() {
  const [links, setLinks] = useState({});

  useEffect(() => {
    const unsub = fetchLinksRealtime(setLinks);
    return () => unsub();
  }, []);

  const socials = [
    {
      name: "Github",
      icon: (
        <Image
          src="/icons/socials/github.svg"
          alt="Github"
          height={32}
          width={32}
          className="aspect-square"
          priority
        />
      ),
      target: `${links.github}`,
    },
    {
      name: "LinkedIn",
      icon: (
        <Image
          src="/icons/socials/linkedIn.svg"
          alt="LinkedIn"
          height={32}
          width={32}
          className="aspect-square"
          priority
        />
      ),
      target: `${links.linkedin}`,
    },
    {
      name: "Mail",
      icon: <Mail height={32} width={32} className="aspect-square" />,
      target: `${links.email}`,
    },
  ];

  const openTarget = (target) => {
    if (target.startsWith("copy")) {
      const email = target.replace("copy:", "");
      // TODO: Look into this later
      // An unusual error here, when trying to copy using a mobile devices (without https or localhost)
      navigator.clipboard
        .writeText(email)
        .then(() => {
          toast.success(`${email}\nCopied to clipboard`, {
            duration: 5000,
            style: {
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            },
          });
        })
        .catch((error) => {
          toast.error("Failed to copy to clipboard", {
            duration: 5000,
            style: {
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            },
          });
          console.error(`Failed to copy: ${error}`);
        });
    } else {
      window.open(target, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <ul className="flex gap-3 items-center justify-center w-max">
      {socials.map(({ name, icon, target }) => (
        <li
          key={name}
          className="flex items-center justify-center w-[50px] h-[50px] cursor-pointer
            border border-gray-500 rounded bg-transparent p-2 transition-shadow hover:shadow-[0_0_25px_2px_rgba(255,255,255,0.5)]"
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
