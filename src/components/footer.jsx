"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import LogoText from "./logoText";
import { LuMail } from "react-icons/lu";
import { fetchLinksRealtime } from "@/helperFunctions";
import { useEffect, useState } from "react";

export default function Footer() {
  const [links, setLinks] = useState({});

  useEffect(() => {
    const unsub = fetchLinksRealtime(setLinks);
    return () => unsub();
  }, []);

  const footerLiCSS =
    "cursor-pointer hover:text-cyan-400 transition-colors duration-200";
  return (
    <footer className="w-[80%] flex flex-col gap-5">
      <div className="bg-[#0f0f0f] rounded p-10 flex justify-between items-center">
        <div className="basis-[25%] flex flex-col gap-5">
          <LogoText size={22} />
          <p className="text-sm text-gray-400">
            Hi, I’m Mevin, a backend developer, creative builder & tech
            enthusiast. Glad you stopped by my portfolio!
          </p>
        </div>
        <div className="basis-[50%] flex justify-around">
          <div className="flex flex-col gap-5">
            <h2>General</h2>
            <ul className="text-sm text-gray-300 flex flex-col gap-3">
              <li className={footerLiCSS}>
                <a href="#">Home</a>
              </li>
              <li className={footerLiCSS}>
                <a href="#about">About</a>
              </li>
              <li className={footerLiCSS}>
                <a href="#work">Work</a>
              </li>
              <li className={footerLiCSS}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2>Specifics</h2>
            <ul className="text-sm text-gray-300 flex flex-col gap-3">
              <li className={footerLiCSS}>
                <a href="#skills">Skills</a>
              </li>
              <li className={footerLiCSS}>
                <a href="#experience">Experience</a>
              </li>
              <li className={footerLiCSS}>Guest book</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2>More</h2>
            <ul className="text-sm text-gray-300 flex flex-col gap-3">
              <li className={footerLiCSS}>Links</li>
              <li className={footerLiCSS}>
                <a href="#contact">Get in touch</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between text-sm text-gray-400 px-5">
        <p>&copy; 2025 Mevin JR. All rights reserved</p>
        <div className="flex gap-3">
          <a href={links.github} target="_blank">
            <FaGithub size={16} />
          </a>
          <a href={links.linkedin} target="_blank">
            <FaLinkedin size={16} />
          </a>
          <LuMail size={16} />
        </div>
      </div>
    </footer>
  );
}
