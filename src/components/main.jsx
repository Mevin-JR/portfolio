"use client";

import { motion } from "motion/react";

import ResumeBtn from "./resumeBtn";
import Socials from "./socials";
import Image from "next/image";

export default function Main() {
  const skills = [
    { name: "HTML", icon: "/icons/tech/HTML5.png" },
    { name: "CSS", icon: "/icons/tech/CSS3.png" },
    { name: "Tailwind", icon: "/icons/tech/Tailwind_CSS.png" },
    { name: "Bootstrap", icon: "/icons/tech/Bootstrap.png" },
    { name: "JavaScript", icon: "/icons/tech/JavaScript.png" },
    { name: "NodeJS", icon: "/icons/tech/Node_js.png" },
    { name: "ReactJS", icon: "/icons/tech/React.png" },
    { name: "NextJS", icon: "/icons/tech/Next_js.png" },
    { name: "Express", icon: "/icons/tech/Express.png" },
    { name: "Electron", icon: "/icons/tech/Electron.png" },
    { name: "Firebase", icon: "/icons/tech/Firebase.png" },
    { name: "Git", icon: "/icons/tech/Git.png" },
    { name: "Github", icon: "/icons/tech/Github.png" },
    { name: "MySQL", icon: "/icons/tech/MySQL.png" },
    { name: "SQLite", icon: "/icons/tech/SQLite.png" },
    { name: "Java", icon: "/icons/tech/Java.png" },
    { name: "Python", icon: "/icons/tech/Python.png" },
    { name: "Flask", icon: "/icons/tech/Flask.png" },
    { name: "R", icon: "/icons/tech/R.png" },
    { name: "Figma", icon: "/icons/tech/Figma.png" },
  ];

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

      <motion.section
        id="about"
        className="h-screen md:h-[80vh] w-[80vw] flex flex-col gap-10 justify-between md:flex-row md:gap-0 items-center"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div id="about-left" className="flex flex-col gap-5 md:w-[45%] md:mt-0">
          <div id="about-title">
            <h1 className="text-gray-400 text-md md:text-lg uppercase">
              About Me
            </h1>
            <div className="text-2xl md:text-4xl font-bold flex gap-3">
              <h2>
                Hi there! I'm{" "}
                <span className="relative text-cyan-400">
                  Mevin{" "}
                  <Image
                    src="/handdrawn_underline.png"
                    alt="Underline"
                    width={120}
                    height={25}
                    className="absolute right-0 w-[80px] md:w-full"
                  />
                </span>
              </h2>
            </div>
          </div>
          <div className="text-gray-400 text-sm md:text-sm lg:text-lg">
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Socials />
          </motion.div>
        </div>
        <div id="about-right" className="md:w-[45%] h-auto">
          <Image
            src="/about_right.png"
            alt="About Section Image"
            width={800}
            height={800}
            className="animate-bobbing"
          />
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="h-screen w-[80vw] flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div id="skills-title" className="text-center">
          <h1 className="text-gray-400 text-md md:text-lg uppercase">
            My Skills
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold">Tools & Tech</h2>
        </div>

        <div
          id="skills-cards"
          className="mt-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-6 lg:gap-8"
        >
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="flex lg:flex-col gap-1 md:gap-4 items-center justify-center px-2 py-3 lg:px-4 lg:py-4
              bg-white/5 backdrop-blur-sm border border-white/20 shadow-md rounded 
              text-center text-gray-400 text-xs md:text-lg hover:shadow-[0_0_30px_#06b6d4] hover:text-cyan-400 transition-all duration-200"
            >
              <Image
                src={icon}
                alt={name}
                height={75}
                width={75}
                className="h-[15px] md:h-[20px] lg:h-[75px] 
                w-[15px] md:w-[20px] lg:w-[75px]"
              />
              <h3>{name}</h3>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.section
        id="work"
        className="h-screen w-[80vw] flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div id="work-title" className="text-center">
          <h1 className="text-gray-400 text-md md:text-lg uppercase">
            My Works
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
        </div>
        <div id="work-container">
          
        </div>
      </motion.section>
    </>
  );
}
