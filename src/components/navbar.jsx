"use client";

import { useState } from "react";
import LogoText from "./logoText";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  // TODO: Change nav items here (dynamic)
  const navLinks = [
    { text: "Home", link: "#" },
    { text: "About", link: "#about" },
    { text: "Work", link: "#work" },
    { text: "Contact", link: "#contact" },
  ];

  return (
    <nav className="z-20 fixed top-3 left-5 right-5 rounded-lg p-4">
      <div
        className="flex justify-between items-center 
             bg-white/5 backdrop-blur-sm border border-white/20 shadow-md p-3 rounded-lg
             lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:shadow-none lg:p-0 lg:rounded-none"
      >
        <LogoText />
        <ul className="hidden lg:flex gap-7 absolute left-1/2 transform -translate-x-1/2 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 shadow-md">
          {navLinks.map((navItem) => (
            <li
              key={navItem.text}
              className="relative group cursor-pointer px-2 py-1 hover:text-cyan-500 transition-all duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px]"
            >
              <Link href={navItem.link}>{navItem.text}</Link>
              {/* Bottom border */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 origin-right transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
              {/* Right border */}
              <span className="absolute bottom-0 right-0 w-[2px] h-0 bg-cyan-400 origin-bottom transition-all duration-300 group-hover:h-full"></span>
            </li>
          ))}
        </ul>
        <button className="lg:hidden" onClick={() => toggleMenu()}>
          <svg
            width="28"
            height="24"
            viewBox="0 0 38 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M0.770874 1.58331C0.770874 2.44625 1.47044 3.14581 2.33337 3.14581H8.58337C9.44631 3.14581 10.1459 2.44625 10.1459 1.58331C10.1459 0.720376 9.44631 0.020813 8.58337 0.020813H2.33337C1.47044 0.020813 0.770874 0.720376 0.770874 1.58331ZM15.3542 1.58331C15.3542 2.44625 16.0538 3.14581 16.9167 3.14581H35.6667C36.5296 3.14581 37.2292 2.44625 37.2292 1.58331C37.2292 0.720376 36.5296 0.020813 35.6667 0.020813H16.9167C16.0538 0.020813 15.3542 0.720376 15.3542 1.58331ZM37.2292 22.4166C37.2292 23.2796 36.5296 23.9791 35.6667 23.9791H29.4167C28.5538 23.9791 27.8542 23.2796 27.8542 22.4166C27.8542 21.5537 28.5538 20.8541 29.4167 20.8541H35.6667C36.5296 20.8541 37.2292 21.5537 37.2292 22.4166ZM22.6459 22.4166C22.6459 23.2796 21.9463 23.9791 21.0834 23.9791H2.33337C1.47044 23.9791 0.770874 23.2796 0.770874 22.4166C0.770874 21.5537 1.47044 20.8541 2.33337 20.8541H21.0834C21.9463 20.8541 22.6459 21.5537 22.6459 22.4166ZM0.770874 12C0.770874 12.8629 1.47044 13.5625 2.33337 13.5625H35.6667C36.5296 13.5625 37.2292 12.8629 37.2292 12C37.2292 11.1371 36.5296 10.4375 35.6667 10.4375H2.33337C1.47044 10.4375 0.770874 11.1371 0.770874 12Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <ul className="absolute right-4 flex flex-col items-center justify-center gap-5 mt-4 min-w-max bg-white/5 backdrop-blur-lg border border-white/20 shadow-md p-3 rounded-lg lg:hidden">
          {navLinks.map((navItem) => (
            <li
              key={navItem.link}
              className="hover:text-cyan-400 transition duration-200 cursor-pointer"
            >
              <a href={navItem.link}>{navItem.text}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
