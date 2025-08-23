"use client";

import { motion } from "motion/react";
import Socials from "./socials";
import Image from "next/image";
import { LuArrowUpRight, LuCopy, LuMapPin, LuSparkle } from "react-icons/lu";
import {
  fetchExperienceContainers,
  logUniqueUserVisit,
  logUserVisit,
  updatePageViewCount,
} from "@/helperFunctions";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import LocationGlobe from "./locationGlobe";
const ResumeBtn = dynamic(() => import("./resumeBtn"), {
  ssr: false,
});

export default function Main() {
  const [experienceContainers, setExperienceContainers] = useState([]);
  const [viewportAmount, setViewportAmount] = useState(0.1);

  useEffect(() => {
    const updateViewportAmount = () => {
      if (window.innerWidth < 768) {
        setViewportAmount(0.1); // Mobile (default & sm)
      } else {
        setViewportAmount(0.3); // Desktop (md, lg, xl, 2xl ...)
      }
    };
    updateViewportAmount();
    window.addEventListener("resize", updateViewportAmount);
    return () => window.removeEventListener("resize", updateViewportAmount);
  }, []);

  useEffect(() => {
    const logVisitor = () => {
      let visitorId = localStorage.getItem("visitorId");
      if (!visitorId) {
        // Unique User
        visitorId = uuidv4();
        localStorage.setItem("visitorId", visitorId);

        logUniqueUserVisit(visitorId);
      } else {
        logUserVisit(visitorId);
      }
    };

    logVisitor();
    updatePageViewCount();
  }, []);

  useEffect(() => {
    const unsub = fetchExperienceContainers(setExperienceContainers);
    return () => unsub();
  }, []);

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
      gradient: "/gradients/orange.webp",
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
      gradient: "/gradients/yellow.webp",
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
      gradient: "/gradients/cyan.webp",
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
        className="min-h-screen py-20 w-[80vw] flex flex-col gap-10 justify-between md:flex-row md:gap-0 items-center"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: viewportAmount }}
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
        <div id="about-right" className="md:w-[45%]">
          <Image
            src="/about_right.webp"
            alt="About Section Image"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={60}
            priority
            className="animate-bobbing"
          />
        </div>
      </motion.section>
      <motion.section
        id="skills"
        className="min-h-screen py-20 w-[80vw] flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: viewportAmount }}
      >
        <div id="skills-title" className="text-center mb-10">
          <h1 className="text-gray-400 text-md md:text-lg uppercase">
            My Skills
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold">Tools & Tech</h2>
        </div>

        <div
          id="skills-cards"
          className="flex gap-3 md:gap-6 justify-center flex-wrap"
        >
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="w-24 md:w-40 flex lg:flex-col gap-1 md:gap-4 items-center justify-center px-2 py-3 lg:px-4 lg:py-4
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
        className="min-h-screen py-20 w-[80vw] flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: viewportAmount }}
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
        <div id="work-container" className="flex flex-col gap-20">
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
                        <LuArrowUpRight size={22} />
                      </div>
                    ) : (
                      <div
                        className="flex gap-1 cursor-not-allowed"
                        style={{ color: "gray" }}
                      >
                        <p>Live Demo</p>
                        <LuArrowUpRight size={22} />
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
        className="min-h-screen py-20 w-[80vw] flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: viewportAmount }}
      >
        <div id="experience-title" className="text-center mb-10 sm:mb-20">
          <h1 className="text-gray-400 text-md md:text-lg uppercase">
            My Experience
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold">
            Timeline of <span className="text-cyan-400">Growth</span>
          </h2>
        </div>
        <div
          id="experience-container"
          className="flex flex-col gap-20 lg:gap-32 w-full"
        >
          {experienceContainers.map(
            ({
              id,
              title,
              location,
              company,
              startDate,
              endDate,
              experienceDescription,
              tags,
            }) => (
              <div
                key={`${id}#${title}`}
                className="w-full flex flex-col lg:flex-row lg:justify-around gap-5 lg:gap-0"
              >
                <div className="basis-[20%] flex flex-col gap-3 text-gray-400 text-sm">
                  <h3 className="text-xs lg:text-sm">{`${startDate.toUpperCase()} - ${endDate}`}</h3>
                  <h2 className="text-white text-lg md:text-xl lg:text-2xl">
                    {company}
                  </h2>
                  <div className="flex gap-2 items-center">
                    <LuMapPin size={18} className="w-4 lg:w-5 h-4 lg:h-5" />
                    <h3 className="text-xs lg:text-sm">{location}</h3>
                  </div>
                </div>
                <div className="basis-[55%] flex flex-col gap-5 text-gray-400 text-xs md:text-sm">
                  <h2 className="text-white text-base lg:text-xl">{title}</h2>

                  {Object.values(experienceDescription).map((value, index) => (
                    <div
                      key={`${index}`}
                      className="flex gap-2 items-center justify-between"
                    >
                      <LuSparkle
                        fill="#22D3EE"
                        className="hidden sm:block basis-[35%] 2xl:basis-[10%] mt-[2px] w-4 h-4 text-cyan-400 subpixel-antialiased"
                        strokeWidth={1.25}
                      />
                      <p dangerouslySetInnerHTML={{ __html: value }} />
                    </div>
                  ))}

                  <div className="flex gap-2 lg:gap-3 flex-wrap">
                    {tags.map((tag) => (
                      <div
                        key={tag}
                        className="px-2 lg:px-4 py-2 text-white
                        bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </motion.section>
      <motion.section
        id="contact"
        className="min-h-screen py-40 w-[80vw] flex flex-col justify-between"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: viewportAmount }}
      >
        <div id="contact-title" className="mb-10">
          <h1 className="text-gray-400 text-md md:text-lg uppercase">
            Contact
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold">
            Get in <span className="text-cyan-400">Touch</span>
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="basis-[55%] flex flex-col gap-5">
            <div className="flex flex-col gap-5 text-gray-400">
              <p>
                I’m always open to new opportunities, collaborations, and
                meaningful conversations. Whether you have a project in mind or
                just want to connect, feel free to reach out.
              </p>
              <p>Available for full-time roles & freelance projects.</p>
            </div>
            <div className="h-full flex justify-between gap-5">
              <LocationGlobe />
              <div className="basis-[50%] flex flex-col justify-between gap-5">
                <div
                  className="relative h-full flex flex-col items-center justify-end gap-5
                bg-white/5 backdrop-blur-sm border border-white/20 shadow-md p-4 rounded-lg overflow-hidden"
                >
                  <Image
                    src="/backgrounds/wrinkled_black_bg.jpg"
                    alt="Background"
                    width={1000}
                    height={1000}
                    className="-z-20 w-full h-full absolute top-0 left-0 rounded-lg opacity-25
                    [mask-image:linear-gradient(to_bottom,black,transparent)]
                    [mask-repeat:no-repeat] [mask-size:100%_100%]
                    [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]
                    [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]"
                  />
                  <Image
                    src="/icons/logo_wings.png"
                    alt="Portfolio Logo"
                    width={300}
                    height={300}
                    className="-z-10 opacity-70 absolute -top-5 left-1/2 -translate-x-1/2"
                  />
                  <h3 className="flex justify-center items-center text-center text-xl font-bold drop-shadow-[0px_0px_20px_rgba(255,255,255,0.6)]">
                    Let's work together on your next project
                  </h3>
                  <div
                    className="flex items-center justify-center gap-3 cursor-pointer 
                  bg-white/0 backdrop-blur-sm border border-white/20 shadow-md p-4 rounded-lg"
                  >
                    <LuCopy size={18} />
                    <p>jrmevin@gmail.com</p>
                  </div>
                </div>
                <div
                  className="basis-[20%] relative h-full flex flex-col items-center justify-center gap-6
                    bg-white/5 backdrop-blur-sm border border-white/20 shadow-md p-4 rounded-lg"
                >
                  <Image
                    src="/backgrounds/wrinkled_black_bg.jpg"
                    alt="Background"
                    width={1000}
                    height={1000}
                    className="-z-10 w-full h-full absolute top-0 left-0 rounded-lg opacity-20"
                  />
                  <h3 className="text-2xl">Socials</h3>
                  <Socials />
                </div>
              </div>
            </div>
          </div>
          <div className="basis-[40%]">
            <form
              className="h-full w-full flex flex-col gap-8
                bg-white/5 backdrop-blur-sm border border-white/20 shadow-md p-10 rounded-lg"
            >
              <label className="flex flex-col gap-2">
                Full Name
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  className="text-cyan-400 outline-none bg-white/5 backdrop-blur-sm border border-white/20 shadow-md p-3 rounded-lg"
                />
              </label>
              <label className="flex flex-col gap-2">
                Email
                <input
                  type="text"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  className="text-cyan-400 outline-none bg-white/5 backdrop-blur-sm border border-white/20 shadow-md p-3 rounded-lg"
                />
              </label>
              <label className="flex flex-col gap-2">
                Message
                <textarea
                  placeholder="Hi! How are you..?"
                  className="h-40 resize-none outline-none scrollbar-hide text-cyan-400
                bg-white/5 backdrop-blur-sm border border-white/20 shadow-md p-3 rounded-lg"
                />
              </label>
              <button
                type="submit"
                className="self-end px-4 py-2 border 
                border-cyan-400/50 bg-cyan-400/20 text-cyan-400 rounded
                hover:text-black hover:bg-cyan-400 transition-all duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
}
