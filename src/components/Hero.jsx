/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 60; // Adjust this to match your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      className="relative h-[100dvh] w-full overflow-hidden bg-black flex flex-col justify-center items-center pt-24 pb-12"
      id="home"
    >
      {/* 1. Background Layers */}
      <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#96f_100%)]" />

      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:160px_160px]" />
      </div>

      {/* 2. Content Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 w-full h-full flex items-center text-white"
      >
        <div className="container mx-0 px-6 flex flex-col md:mx-auto flex-row items-center justify-between">
          {/* left side content */}
          <div className="w-full xl:w-3/5 mb-10 md:mb-0">
            <h1 className="text-6xl md:text-7xl 2xl:text-8xl font-bold mb-6 jetbrains-mono">
              HI, I'm <span className="text-purple">MD. TAMIM AHMED FAHIM</span>
            </h1>

            <h2 className="text-xl md:text-4xl md:whitespace-nowrap jetbrains-mono">
              Bioinformatics | Backend Developer
            </h2>
            <h2 className="text-lg md:text-4xl typewriter mb-6 jetbrains-mono">
              AI & ML | FOSS Geek_
            </h2>

            <h3 className="text-gray-300 text-md md:text-xl mb-6 jetbrains-mono">
              Bridging the gap between biology and code. I build robust systems
              to process complex datasets and solve real-world problems.
            </h3>

            <div className="mt-10 flex gap-4 jetbrains-mono">
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm px-4 py-2 bg-purple-800 rounded-3xl font-bold hover:bg-purple transition duration-300 transform hover:scale-105"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm px-4 py-2 border border-purple rounded-3xl font-bold hover:bg-purple transition duration-300 transform hover:scale-105"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* right side image */}
          <div className="hidden xl:w-2/5 xl:flex justify-end ">
            <div className="relative w-[450px] h:92 2xl:w-[550px] h-104">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple to-pink opacity-70">
                <motion.img
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  className="relative rounded-2xl w-[450px] h:92 object-cover z-10 animate-float 2xl:w-[550px] h-104"
                  src={assets.profileImg}
                  alt="profile image"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
