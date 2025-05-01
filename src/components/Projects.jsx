import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { mygithub, portrait } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import SectionArrow from "./SectionArrow";

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  const isActive = active === id;

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        isActive ? "lg:flex-[3.5]" : "lg:flex-[0.5]"
      } w-full lg:w-auto flex items-center justify-center min-w-[170px] h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}
    >
      {/* Overlay & Image */}
      <div className="absolute inset-0 border-8bit">
        <div className="absolute top-0 left-0 z-10 bg-[#10132C] h-full w-full opacity-[0.6]"></div>
        <img src={image} alt={name} className="absolute w-full h-full object-cover" />

        {/* Animation titre */}
        {["top", "bottom"].map((pos) => (
          <div
            key={pos}
            className={`absolute ${pos}-[-4px] left-0 right-0 h-[4px] z-30 pointer-events-none transition-all duration-200`}
          />
        ))}
        {["left", "right"].map((pos) => (
          <div
            key={pos}
            className={`absolute ${pos}-[-4px] top-0 bottom-0 w-[4px] z-30 pointer-events-none transition-all duration-200`}
          />
        ))}

        <div className="absolute inset-0 hover:shadow-[inset_-5px_-5px_0px_0px_#4AA52E] transition-shadow duration-300"></div>
      </div>

      {/* Top Banner */}
      {isActive ? (
  <div className="absolute top-0 left-0 right-0 z-20 bg-[#072d7d] border-8bit px-4 py-2 flex justify-between items-center xl:-mx-4 xl:-mt-4">
    <h2 className="font-bold sm:text-[20px] text-[16px] text-timberWolf uppercase font-jersey truncate">
      {name}
    </h2>
    <div
      onClick={(e) => {
        e.stopPropagation();
        window.open(repo, "_blank");
      }}
      className="bg-[#1c224f] sm:w-10 sm:h-10 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
      aria-label="Open GitHub repository"
    >
      <img
        src={mygithub}
        alt="source code"
        className="w-4/5 h-4/5 object-contain"
      />
    </div>
  </div>
) : (
  // Bottom banner
  <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#072d7d] border-8bit px-4 py-4 lg:py-1 text-center xl:-mx-2">
    <h3 className="font-bold sm:text-[16px] text-[14px] text-timberWolf uppercase font-jersey truncate">
      {name}
    </h3>
  </div>
)}

      {/* Content: if active */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 z-20 border-8bit bg-[#052D7D] p-4 xl:-mx-4">
          <p className="text-silver text-[13px] sm:text-[14px] leading-[20px] font-poppins tracking-[1px]">
            {description}
          </p>

          <div className="relative inline-block sm:w-[138px] w-[100px] sm:mt-[22px] mt-[16px] transition-transform duration-150 ease-in-out active:translate-y-1 active:scale-95">
            <button
              className="w-full text-center text-white py-1.5 font-jersey text-s
                bg-[#76778b] hover:bg-[#3a8eba]
                active:shadow-[inset_3px_3px_0px_0px_#396e8b]
                hover:shadow-[inset_-4px_-4px_0px_0px_#396e8b]
                shadow-[inset_-3px_-3px_0px_0px_#49484e]
                transition duration-200 ease-in-out transform
                flex items-center justify-center gap-1 h-auto z-20 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                window.open(demo, "_blank");
              }}
              aria-label="Open live demo"
            >
              LIVE DEMO
            </button>

            {/* Button Borders */}
            {["top", "bottom"].map((pos) => (
              <div
                key={pos}
                className={`absolute ${pos}-[-4px] left-0 right-0 h-[4px] bg-black pointer-events-none`}
              />
            ))}
            {["left", "right"].map((pos) => (
              <div
                key={pos}
                className={`absolute ${pos}-[-4px] top-0 bottom-0 w-[4px] bg-black pointer-events-none`}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState("project-1");

  return (
    <section id="projects" className="relative flex flex-col justify-between h-full">
      <div className="flex-grow">
        {/* Section Title */}
        <div className="w-full">
          <div className="border-8bit-title relative box-border">
            <motion.div
              variants={textVariant()}
              className="section-title flex items-center gap-6 py-2"
            >
              <div>
                <img
                  src={portrait}
                  className="max-w-[100px] h-auto object-contain"
                  alt="portrait"
                />
              </div>
              <div className="flex-1 flex justify-center text-left">
                <div>
                  <motion.h2
                    variants={fadeIn("", "", 0.2, 1)}
                    className="text-[26px] sm:text-[32px] text-white font-jersey"
                  >
                    Projects.
                  </motion.h2>
                  <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="text-flashWhite font-jersey text-[18px] leading-[26px]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at consectetur nibh. Praesent dictum dui eu porta congue. Vestibulum convallis sagittis purus sit amet interdum.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Project Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <div className="mt-[50px] flex lg:flex-row flex-col xl:gap-[4.5rem] gap-[2.5rem]">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                {...project}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section Navigation */}
      <SectionArrow targetId="experience" direction="down" />
      <SectionArrow targetId="tech" direction="up" />
    </section>
  );
};

export default Projects;
