"use client";

import { Parallax } from "react-scroll-parallax";

export default function HeroText1() {
  return (
    <Parallax>
      <p className="text-2xl text-white">
        Bringing your vision to life,{" "}
        <span className="text-cyan-500">one digital experience at a time</span>
      </p>
    </Parallax>
  );
}
