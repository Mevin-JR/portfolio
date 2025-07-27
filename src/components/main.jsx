"use client";

import { motion } from "motion/react";
import Socials from "./socials";
import Image from "next/image";
import { ArrowUpRight, MapPin, Sparkle } from "lucide-react";
import ScrollProgressBar from "./scrollProgressBar";

import dynamic from "next/dynamic";
const ResumeBtn = dynamic(() => import("./resumeBtn"), {
  ssr: false,
});

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
    { name: "Scikit", icon: "/icons/tech/Scikit.png" },
    { name: "R", icon: "/icons/tech/R.png" },
    { name: "Figma", icon: "/icons/tech/Figma.png" },
    { name: "AWS", icon: "/icons/tech/AWS.png" },
  ];

  const works = [
    {
      name: "Valorant Profiler",
      color: "#FF9365",
      gradient: "/gradients/orange.png",
      description: `<p>
                  Valorant Profiler is a desktop application designed to manage
                  and track Valorant player accounts. It integrates with the
                  Valorant API to fetch real-time player statistics, match
                  history, and performance data. The app aims to provide players
                  with an organized dashboard to monitor their progress and
                  compare stats across multiple accounts. It's currently under
                  development and scheduled to release soon.
                </p>
                <p>
                  Disclaimer: This application is not associated with,
                  affiliated with, or endorsed by Riot Games, Inc.
                </p>`,
      caption: `Your ultimate companion for Valorant — organize accounts,
                view real-time stats, and share profiles without the
                hassle.`,
      /* 
       TODO: Make this work with multiple images, user must be able to click and view multiple images of the same work
      */
      images: ["/works/valorant_profiler/2.png"],
      tags: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Electron",
        "Firebase",
        "Express",
        "Git",
      ].map((tag) => ({
        tagName: tag,
        tagIcon: skills.find((skill) => skill.name === tag)?.icon,
      })),
      github: "https://github.com/Mevin-JR/Valorant-Profiler",
      liveDemo: {
        enabled: false,
        demoLink: "",
      },
    },
    {
      name: "Chess Game",
      color: "#E3C16F",
      gradient: "/gradients/yellow.png",
      description: `<p>
                Chess Game is a custom-built chess application developed using Python and Pygame, 
                with all game logic implemented from scratch. The project focuses on recreating 
                the full chess experience — including movement rules, check/checkmate detection, 
                and turn-based logic — in an interactive and visually intuitive way.
                </p>`,
      caption: `A classic game, reimagined from scratch, custom-built chess powered by Python and Pygame.`,
      images: ["/works/chess_game/2.png"],
      tags: ["Python"].map((tag) => ({
        tagName: tag,
        tagIcon: skills.find((skill) => skill.name === tag)?.icon,
      })),
      github: "https://github.com/Mevin-JR/ChessGame",
      liveDemo: {
        enabled: false,
        demoLink: "",
      },
    },
    {
      name: "Aura Shield",
      color: "#0081BF",
      gradient: "/gradients/cyan.png",
      description: `<p>
                Aura Shield is a web application designed to detect and analyze potential 
                toxins or harmful substances in cosmetic products. Using machine learning 
                algorithms, the app identifies unsafe ingredients and presents results 
                through a user-friendly, intuitive interface — helping users make safer
                skincare choices.
                </p>
                <p>
                It also features a built-in cosmetic store and a face detection model that 
                analyzes your skin tone to recommend suitable products. Users can view detailed 
                ingredient breakdowns before purchasing, ensuring safer and more informed choices.
                </p>
                `,
      caption: `Know what you’re putting on your skin, ML-powered cosmetic analysis at your fingertips.`,
      images: ["/works/aura_shield/3.png"],
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Python",
        "Scikit",
        "Flask",
      ].map((tag) => ({
        tagName: tag,
        tagIcon: skills.find((skill) => skill.name === tag)?.icon,
      })),
      github: "https://github.com/Mevin-JR/AuraShield",
      liveDemo: {
        enabled: false,
        demoLink: "",
      },
    },
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
        className="min-h-screen py-10 w-[80vw] flex flex-col gap-10 justify-between md:flex-row md:gap-0 items-center"
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
                    priority
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
            priority
            className="animate-bobbing"
          />
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="min-h-screen py-10 w-[80vw] flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div id="skills-title" className="text-center mb-10">
          <h1 className="text-gray-400 text-md md:text-lg uppercase">
            My Skills
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold">Tools & Tech</h2>
        </div>

        <div
          id="skills-cards"
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-6"
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
        className="min-h-screen py-10 w-[80vw] flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* TODO: Motion for each work row */}
        <div id="work-title" className="text-center mb-10 sm:mb-20">
          <h1 className="text-gray-400 text-md md:text-lg uppercase">
            My Works
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
        </div>
        <div
          id="work-container"
          className="flex flex-col gap-40 sm:gap-30 md:gap-20"
        >
          {works.map(
            (
              {
                name,
                color,
                gradient,
                description,
                caption,
                images,
                tags,
                github,
                liveDemo,
              },
              index
            ) => (
              <div
                key={name}
                className={`w-full flex flex-col gap-10 md:gap-0 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center justify-around`}
              >
                <div className="w-full md:w-[45%] h-full flex flex-col gap-3 justify-center">
                  <div className="flex gap-2 items-center">
                    <div
                      className="h-1 w-5 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <h3
                      className="text-lg md:text-xl lg:text-2xl"
                      style={{ color: color }}
                    >
                      {name}
                    </h3>
                  </div>
                  <div
                    className="flex flex-col gap-2 text-gray-400 text-xs lg:text-sm xl:text-base"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
                    {tags.map(({ tagName, tagIcon }, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center gap-1 lg:gap-2 p-1 xl:p-2
                        bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                      >
                        <Image
                          src={tagIcon}
                          alt={tagName}
                          height={15}
                          width={15}
                        />
                        <h3 className="text-xs lg:text-sm">{tagName}</h3>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-4 sm:justify-normal text-sm lg:text-base">
                    <div
                      className="border border-cyan-400 p-2 lg:p-3 rounded-lg bg-cyan-400/10 text-cyan-400 cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                      onClick={() =>
                        window.open(github, "_blank", "noopener,noreferrer")
                      }
                    >
                      <p>View on Github</p>
                    </div>
                    {liveDemo.enabled ? (
                      <div
                        className="flex gap-1 cursor-pointer"
                        style={{ color: color }}
                      >
                        <p>Live Demo</p>
                        <ArrowUpRight />
                      </div>
                    ) : (
                      <div
                        className="flex gap-1 cursor-not-allowed"
                        style={{ color: "gray" }}
                      >
                        <p>Live Demo</p>
                        <ArrowUpRight />
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="w-full md:w-[45%] xl:w-[40%] h-full md:h-[400px] p-2 lg:p-4
                  bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                >
                  <div
                    className="relative h-[200px] sm:h-[250px] md:h-full overflow-hidden rounded
                      flex flex-col gap-6 items-center bg-cover group group-hover:overflow-visible"
                    style={{ backgroundImage: `url(${gradient})` }}
                  >
                    <h3
                      className="mt-2 sm:mt-5 md:mt-10 p-3 text-xs sm:text-sm lg:text-base text-center transition-all duration-300 group-hover:blur-sm"
                      style={{ color: color }}
                    >
                      {caption}
                    </h3>
                    <Image
                      src={images.pop()}
                      alt="Work Images"
                      width={500}
                      height={500}
                      className={`h-[150px] w-[250px] sm:h-[200px] sm:w-[300px] lg:h-[250px] lg:w-[350px] xl:h-[350px] xl:w-[500px]
                        absolute top-[50%] -rotate-3 rounded-lg transition-all duration-300 
                        group-hover:-translate-y-1/2 group-hover:rotate-0`}
                      style={{ boxShadow: `0 0 30px ${color}` }}
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </motion.section>
      <motion.section
        id="experience"
        className="min-h-screen py-10 w-[80vw] flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div id="experience-title" className="text-center mb-10 sm:mb-20">
          <h1 className="text-gray-400 text-md md:text-lg uppercase">
            My Experience
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold">
            Timeline of <span className="text-cyan-400">Growth</span>
          </h2>
        </div>
        <div id="experience-container" className="flex flex-col gap-10 w-full">
          <div className="flex w-full justify-around">
            <div className="flex flex-col gap-3 text-gray-400 text-sm basis-[20%]">
              <h3>SEP 2020 - Present</h3>
              <h2 className="text-white text-2xl">Freelance</h2>
              <div className="flex gap-2 items-center">
                <MapPin height={18} width={18} />
                <h3>Remote Work</h3>
              </div>
            </div>
            <div className="basis-[55%] flex flex-col gap-4 text-gray-400 text-sm">
              <h2 className="text-white text-xl">
                Full-Stack Engineer | Java Developer
              </h2>
              <div className="flex gap-2 items-center justify-between">
                <Sparkle
                  fill="#22D3EE"
                  className="mt-[2px] w-4 h-4 text-cyan-400 subpixel-antialiased basis-[10%]"
                  strokeWidth={1.25}
                />
                <p>
                  Led end-to-end development for MYMC, a prominent Indian
                  Minecraft server. Took charge of the entire technical
                  lifecycle, from planning, development, testing, deployment,
                  and maintenance of the MYMC server infrastructure. Helped grow
                  the community to over{" "}
                  <span className="text-white">2,000 members</span> and
                  maintained high retention with{" "}
                  <span className="text-white">100+ daily active players</span>{" "}
                  through consistent performance and feature updates.
                </p>
              </div>
              <div className="flex gap-2 items-center justify-between">
                <Sparkle
                  fill="#22D3EE"
                  className="mt-[2px] w-4 h-4 text-cyan-400 subpixel-antialiased basis-[10%]"
                  strokeWidth={1.25}
                />
                <p>
                  Built{" "}
                  <span className="text-white">
                    Java-based server-side mods
                  </span>{" "}
                  tailored to unique gameplay requirements such as economy
                  systems, mini-games, roleplay elements, custom items, and
                  administrative tools. Wrote efficient, modular code using
                  <span className="text-white"> Spigot/Bukkit APIs</span>,
                  enabling easy updates and integration with existing systems.
                  Regularly handled bug fixes, version compatibility (across
                  Minecraft updates), and{" "}
                  <span className="text-white">
                    plugin optimization to reduce server load.
                  </span>
                </p>
              </div>
              <div className="flex gap-2 items-center justify-between">
                <Sparkle
                  fill="#22D3EE"
                  className="mt-[2px] w-4 h-4 text-cyan-400 subpixel-antialiased basis-[10%]"
                  strokeWidth={1.25}
                />
                <p>
                  Served as the lead developer and infrastructure strategist for
                  a major Minecraft server with over{" "}
                  <span className="text-white">15,000 unique players</span>{" "}
                  across multiple game modes. Scaled server capacity across
                  multiple instances and integrated database solutions for
                  cross-server player data. Managed deployment workflows,
                  including{" "}
                  <span className="text-white">Git-based version control</span>{" "}
                  and <span className="text-white">CI/CD pipelines </span>to
                  roll out updates quickly and reliably.
                </p>
              </div>
              <div className="flex gap-2 items-center justify-between">
                <Sparkle
                  fill="#22D3EE"
                  className="mt-[2px] w-4 h-4 text-cyan-400 subpixel-antialiased basis-[10%]"
                  strokeWidth={1.25}
                />
                <p>
                  Created integrations with{" "}
                  <span className="text-white">third-party APIs</span>,
                  databases (e.g., MySQL), and in-game dashboards to track
                  player stats, economy, and achievements. Developed secure
                  systems for player authentication, anti-cheat, and mod
                  compatibility. Ensured consistent gameplay across all devices
                  (Java Edition and Bedrock compatibility when needed), working
                  around protocol and platform differences.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap w-[90%]">
                <div
                  className="px-4 py-2 text-white
                bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                >
                  Java
                </div>
                <div
                  className="px-4 py-2 text-white
                bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                >
                  React.js
                </div>
                <div
                  className="px-4 py-2 text-white
                bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                >
                  Next.js
                </div>
                <div
                  className="px-4 py-2 text-white
                bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                >
                  Node.js
                </div>
                <div
                  className="px-4 py-2 text-white
                bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                >
                  Express
                </div>
                <div
                  className="px-4 py-2 text-white
                bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                >
                  Bootstrap
                </div>
                <div
                  className="px-4 py-2 text-white
                bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                >
                  Tailwind CSS
                </div>
                <div
                  className="px-4 py-2 text-white
                bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                >
                  Python
                </div>
                <div
                  className="px-4 py-2 text-white
                bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                >
                  Flask
                </div>
                <div
                  className="px-4 py-2 text-white
                bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                >
                  Firebase
                </div>
                <div
                  className="px-4 py-2 text-white
                bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                >
                  Github
                </div>
                <div
                  className="px-4 py-2 text-white
                bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                >
                  AWS
                </div>
                <div
                  className="px-4 py-2 text-white
                bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                >
                  Figma
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-around">
            <div className="flex flex-col gap-3 text-gray-400 text-sm basis-[20%]">
              <h3>JAN 2025 - APR 2025</h3>
              <h2 className="text-white text-2xl">Zymo</h2>
              <div className="flex gap-2 items-center">
                <MapPin height={18} width={18} />
                <h3>Remote Work</h3>
              </div>
            </div>
            <div className="basis-[55%] flex flex-col gap-4 text-gray-400 text-sm">
              <h2 className="text-white text-xl">
                Intern Web Team Lead | Full-Stack Engineer
              </h2>
              <div className="flex gap-2 items-center justify-between">
                <Sparkle
                  fill="#22D3EE"
                  className="mt-[2px] w-4 h-4 text-cyan-400 subpixel-antialiased basis-[10%]"
                  strokeWidth={1.25}
                />
                <p>
                  Led end-to-end development for MYMC, a prominent Indian
                  Minecraft server. Took charge of the entire technical
                  lifecycle, from planning, development, testing, deployment,
                  and maintenance of the MYMC server infrastructure. Helped grow
                  the community to over{" "}
                  <span className="text-white">2,000 members</span> and
                  maintained high retention with{" "}
                  <span className="text-white">100+ daily active players</span>{" "}
                  through consistent performance and feature updates.
                </p>
              </div>
              <div className="flex gap-2 items-center justify-between">
                <Sparkle
                  fill="#22D3EE"
                  className="mt-[2px] w-4 h-4 text-cyan-400 subpixel-antialiased basis-[10%]"
                  strokeWidth={1.25}
                />
                <p>
                  Built{" "}
                  <span className="text-white">
                    Java-based server-side mods
                  </span>{" "}
                  tailored to unique gameplay requirements such as economy
                  systems, mini-games, roleplay elements, custom items, and
                  administrative tools. Wrote efficient, modular code using
                  <span className="text-white"> Spigot/Bukkit APIs</span>,
                  enabling easy updates and integration with existing systems.
                  Regularly handled bug fixes, version compatibility (across
                  Minecraft updates), and{" "}
                  <span className="text-white">
                    plugin optimization to reduce server load.
                  </span>
                </p>
              </div>

              <div className="flex gap-2 items-center justify-between">
                <Sparkle
                  fill="#22D3EE"
                  className="mt-[2px] w-4 h-4 text-cyan-400 subpixel-antialiased basis-[10%]"
                  strokeWidth={1.25}
                />
                <p>
                  Served as the lead developer and infrastructure strategist for
                  a major Minecraft server with over{" "}
                  <span className="text-white">15,000 unique players</span>{" "}
                  across multiple game modes. Scaled server capacity across
                  multiple instances and integrated database solutions for
                  cross-server player data. Managed deployment workflows,
                  including{" "}
                  <span className="text-white">Git-based version control</span>{" "}
                  and <span className="text-white">CI/CD pipelines </span>to
                  roll out updates quickly and reliably.
                </p>
              </div>
              <div className="flex gap-2 items-center justify-between">
                <Sparkle
                  fill="#22D3EE"
                  className="mt-[2px] w-4 h-4 text-cyan-400 subpixel-antialiased basis-[10%]"
                  strokeWidth={1.25}
                />
                <p>
                  Created integrations with{" "}
                  <span className="text-white">third-party APIs</span>,
                  databases (e.g., MySQL), and in-game dashboards to track
                  player stats, economy, and achievements. Developed secure
                  systems for player authentication, anti-cheat, and mod
                  compatibility. Ensured consistent gameplay across all devices
                  (Java Edition and Bedrock compatibility when needed), working
                  around protocol and platform differences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
