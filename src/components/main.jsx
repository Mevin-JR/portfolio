"use client";

import { motion, AnimatePresence } from "motion/react";

import ResumeBtn from "./resumeBtn";
import Socials from "./socials";
import Image from "next/image";

export default function Main() {
  return (
    <>
      <section
        id="hero-section"
        className="h-screen w-[80vw] flex flex-col gap-10 items-center justify-center text-center text-white"
      >
        <h1 id="hero-motto" className="text-2xl md:text-4xl font-bold">
          Bringing your visions to life,{" "}
          <span className="text-cyan-400">
            One digital experience at a time.
          </span>
        </h1>
        <h2 id="hero-info" className="text-xl text-gray-300">
          Hey! I'm{" "}
          <div className="relative inline-block group">
            <span className="relative z-10 font-semibold px-1 border-b-2 border-cyan-600 text-cyan-400 transition-colors duration-300 group-hover:text-white">
              Mevin JR
            </span>
            <span className="absolute z-0 inset-0 bg-cyan-600 scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 rounded rounded-b-none"></span>
          </div>
          , a full-stack developer and an aspiring software engineer
        </h2>
        <div
          id="hero-interactive"
          className="flex flex-col gap-10 md:flex-row md:gap-14 justify-between items-center"
        >
          <ResumeBtn />
          <Socials />
        </div>
      </section>

      <section
        id="about"
        className="h-screen w-[80vw] flex flex-col gap-10 md:flex-row md:gap-0 md:justify-between"
      >
        <motion.div
          id="about-left"
          className="flex flex-col gap-5 md:w-[45%] md:mt-0"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <div id="about-title">
            <h1 className="text-gray-400 text-lg">ABOUT ME</h1>
            <h2 className="text-2xl md:text-4xl font-bold">
              Hi there! I'm{" "}
              <span className="text-cyan-500 border-b-2 border-cyan-500">
                Mevin
              </span>
            </h2>
          </div>
          <div className="text-gray-400">
            <p>
              I'm Mevin John Rejimon, a full-stack developer who loves building
              powerful, user-friendly web applications. From frontend to
              backend, I thrive on solving complex problems with clean,
              efficient code. With a strong foundation in React, Next.js, and
              Node.js, I enjoy crafting scalable solutions that bring ideas to
              life.
            </p>
            <br />
            <p>
              Whether I’m tackling a complex coding challenge or learning a new
              tech stack, I approach each day with energy and purpose.
            </p>
            <br />
            <p>
              Beyond the screen, I’m always exploring new ideas and embracing
              the balance between tech and life. For me, it’s not just about
              writing great code, it’s about making a meaningful impact, one
              project at a time.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Socials />
          </motion.div>
        </motion.div>
        <motion.div
          id="about-right"
          className="md:w-[45%] h-auto"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Image
            src="/about_right.png"
            alt="About Section Image"
            width={800}
            height={800}
            className="animate-bobbing"
          />
        </motion.div>
      </section>
      {/* 
      <section id="work" className="h-screen w-[80vw]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
        sequi quibusdam vel reiciendis at? Impedit facilis, necessitatibus
        corporis eligendi eum vitae, commodi omnis ipsa maiores porro magni
        deleniti, animi et.
      </section> */}
    </>
  );
}
