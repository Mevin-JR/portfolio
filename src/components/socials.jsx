import { Mail } from "lucide-react";
import Image from "next/image";
import Tooltip from "./tooltip";

export default function Socials() {
  const socials = [
    {
      name: "Github",
      icon: (
        <Image
          src="/icons/socials/github.svg"
          alt="Github"
          height={32}
          width={32}
        />
      ),
    },
    {
      name: "LinkedIn",
      icon: (
        <Image
          src="/icons/socials/linkedIn.svg"
          alt="LinkedIn"
          height={32}
          width={32}
        />
      ),
    },
    { name: "Mail", icon: <Mail height={32} width={32} /> },
  ];

  return (
    <ul className="flex gap-3 items-center justify-center">
      {socials.map(({ name, icon }) => (
        <Tooltip key={name} text={name} position="bottom" bgColor="transparent">
          <li
            className="flex items-center justify-center 
        border border-gray-500 rounded bg-transparent p-2 cursor-pointer transition-shadow hover:shadow-[0_0_25px_2px_rgba(255,255,255,0.5)]"
          >
            {icon}
          </li>
        </Tooltip>
      ))}
    </ul>
  );
}
