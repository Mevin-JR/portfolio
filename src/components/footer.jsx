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
    <footer className="xl:w-[80%] flex flex-col gap-5">
      <div className="bg-[#0f0f0f] rounded p-10 flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center">
        <div className="md:basis-[25%] flex flex-col gap-2 md:gap-5">
          <LogoText size={22} />
          <p className="text-sm text-gray-400">
            I’m Mevin, a full-stack developer, creative builder & tech
            enthusiast. Glad you stopped by my portfolio!
          </p>
        </div>
        <div className="w-full md:basis-[50%] flex flex-col md:flex-row gap-5 md:justify-around">
          <div className="flex flex-col gap-2 md:gap-5">
            <h2>General</h2>
            <ul className="text-sm text-gray-400 md:text-gray-300 flex md:flex-col gap-3">
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
          <div className="flex flex-col gap-2 md:gap-5">
            <h2>Specifics</h2>
            <ul className="text-sm text-gray-400 md:text-gray-300 flex md:flex-col gap-3">
              <li className={footerLiCSS}>
                <a href="#skills">Skills</a>
              </li>
              <li className={footerLiCSS}>
                <a href="#experience">Experience</a>
              </li>
              <li className="text-gray-600">Guest book</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:gap-5">
            <h2>More</h2>
            <ul className="text-sm text-gray-400 md:text-gray-300 flex md:flex-col gap-3">
              <li className={footerLiCSS}>
                <a href="#contact">Get in touch</a>
              </li>
              <li className="text-gray-600">Links</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between text-sm text-gray-400 px-5">
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
