import Image from "next/image";
import ResumeBtn from "./resumeBtn";

export default function Main() {
  const socials = [
    { name: "LinkedIn", icon: "/icons/socials/linkedIn.svg" },
    { name: "Github", icon: "/icons/socials/github.svg" },
    { name: "Mail", icon: "/icons/socials/mail.svg" },
  ];

  return (
    <>
      <section
        id="hero-section"
        className="flex flex-col gap-10 items-center justify-center text-center text-white"
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
          className="flex flex-col gap-5 md:flex-row md:gap-10 justify-between items-center"
        >
          <ResumeBtn />

          <div id="socials">
            <h2 className="text-xl text-gray-300">Find me on</h2>
            <div className="flex gap-4 items-center justify-center">
              {socials.map((social) => (
                <Image
                  key={social.name}
                  src={social.icon}
                  alt={social.name}
                  height={22}
                  width={22}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
