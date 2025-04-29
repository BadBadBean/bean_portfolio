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
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}
    >
      <div className="absolute inset-0 border-8bit">
        <div className="absolute top-0 left-0 z-10 bg-[#10132C] h-full w-full opacity-[0.6]"></div>
        <img src={image} alt={name} className="absolute w-full h-full object-cover" />

        {/* Bordures animées */}
        {["top", "bottom"].map((pos) => (
          <div
            key={pos}
            className={`absolute ${pos === "top" ? "top-[-4px]" : "bottom-[-4px]"} left-0 right-0 h-[4px] z-30 pointer-events-none transition-all duration-200`}
          />
        ))}
        {["left", "right"].map((pos) => (
          <div
            key={pos}
            className={`absolute ${pos === "left" ? "left-[-4px]" : "right-[-4px]"} top-0 bottom-0 w-[4px] z-30 pointer-events-none transition-all duration-200`}
          />
        ))}

        <div className="absolute inset-0 hover:shadow-[inset_-5px_-5px_0px_0px_#4AA52E] transition-shadow duration-300"></div>
      </div>

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem] z-20">
          <h3 className="font-extrabold font-jersey uppercase w-[200px] h-[30px] 
            whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
            absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0] leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <div className="absolute bottom-0 justify-start border-8bit w-full flex-col bg-[#072d7d] p-6 z-20 -mx-12">
          <div className="flex justify-between border-8bit -mx-10 -mt-6 mb-6 bg-[#052D7D] px-[1em] py-[0.5em] rounded-md">
          <h2 className="font-bold sm:text-[32px] text-[24px] text-timberWolf uppercase font-jersey sm:mt-0 -mt-[1rem]">
            {name}
          </h2>
          <div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(repo, "_blank");
              }}
              className="bg-[#1c224f] sm:w-11 sm:h-11 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer sm:opacity-[0.9] opacity-[0.8]"
              aria-label="Open GitHub repository"
            >
              <img
                src={mygithub}
                alt="source code"
                className="w-4/5 h-4/5 object-contain z-20"
              />
            </div>
          </div>
          </div>

          <p className="text-silver sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px]">
            {description}
          </p>

          <div className="relative inline-block sm:w-[138px] w-[100px] sm:mt-[22px] mt-[16px] transition-transform duration-150 ease-in-out active:translate-y-1 active:scale-95">
            <button
              className="w-full text-center text-white py-1.5 font-jersey text-s
                bg-[#76778b] hover:bg-[#8633cd] 
                active:shadow-[inset_3px_3px_0px_0px_#3a1260]
                hover:shadow-[inset_-4px_-4px_0px_0px_#3a1260]
                shadow-[inset_-3px_-3px_0px_0px_#49484e]
                transition duration-200 ease-in-out transform
                flex items-center justify-center gap-1 h-auto z-20"
              onClick={(e) => {
                e.stopPropagation();
                window.open(demo, '_blank');
              }}
              aria-label="Open live demo"
            >
              LIVE DEMO
            </button>

            {/* Bordures rétro du bouton */}
            {["top", "bottom"].map((pos) => (
              <div
                key={pos}
                className={`absolute ${pos === "top" ? "top-[-4px]" : "bottom-[-4px]"} left-0 right-0 h-[4px] bg-black pointer-events-none`}
              />
            ))}
            {["left", "right"].map((pos) => (
              <div
                key={pos}
                className={`absolute ${pos === "left" ? "left-[-4px]" : "right-[-4px]"} top-0 bottom-0 w-[4px] bg-black pointer-events-none`}
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
        <div className="w-full" style={{ display: 'block' }}>
          <div className="border-8bit-title" style={{ display: 'block', position: 'relative', boxSizing: 'border-box' }}>
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
              <div className="flex-1 flex justify-center">
              <div className="text-left">
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

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <div className="mt-[50px] flex lg:flex-row flex-col gap-16">
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
      <SectionArrow targetId="experience" direction="down" />
      <SectionArrow targetId="tech" direction="up" />
    </section>
  );
};

export default Projects;
