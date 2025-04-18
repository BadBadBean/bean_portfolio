import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { mygithub, pineapple, pineappleHover } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

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
      {/* Layer principal */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 z-10 bg-jetLight h-full w-full opacity-[0.5]"></div>
        <img src={image} alt={name} className="absolute w-full h-full object-cover" />

        {/* Bordures animées */}
        <div className="absolute top-[-4px] left-0 right-0 h-[4px] bg-black z-30 pointer-events-none transition-all duration-200"></div>
        <div className="absolute bottom-[-4px] left-0 right-0 h-[4px] bg-black z-30 pointer-events-none transition-all duration-200"></div>
        <div className="absolute left-[-4px] top-0 bottom-0 w-[4px] bg-black z-30 pointer-events-none transition-all duration-200"></div>
        <div className="absolute right-[-4px] top-0 bottom-0 w-[4px] bg-black z-30 pointer-events-none transition-all duration-200"></div>

        <div className="absolute inset-0 
        hover:shadow-[inset_-5px_-5px_0px_0px_#4AA52E] transition-shadow duration-300"></div>
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
        <>
          <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(122,122,122,0.5)] z-20">
            <div className="absolute inset-0 flex justify-end m-3">
              <div className="relative">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(repo, "_blank");
                  }}
                  className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                    flex justify-center items-center cursor-pointer
                    sm:opacity-[0.9] opacity-[0.8] 
                   relative"
                >
                  <img
                    src={mygithub}
                    alt="source code"
                    className="w-4/5 h-4/5 object-contain z-20"
                  />
                </div>
              </div>
            </div>

            <h2 className="font-bold sm:text-[32px] text-[24px] text-timberWolf uppercase font-jersey sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p className="text-silver sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px]">
              {description}
            </p>

            {/* Bouton Live Demo animé */}
            <div
              className="relative inline-block sm:w-[138px] w-[100px] sm:mt-[22px] mt-[16px]
                transition-transform duration-150 ease-in-out active:translate-y-1 active:scale-95"
            >
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
              >
                LIVE DEMO
              </button>

              {/* Bordures rétro du bouton */}
              <div className="absolute top-[-4px] left-0 right-0 h-[4px] bg-black pointer-events-none"></div>
              <div className="absolute bottom-[-4px] left-0 right-0 h-[4px] bg-black pointer-events-none"></div>
              <div className="absolute left-[-4px] top-0 bottom-0 w-[4px] bg-black pointer-events-none"></div>
              <div className="absolute right-[-4px] top-0 bottom-0 w-[4px] bg-black pointer-events-none"></div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState("project-2");

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
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
  );
};

export default SectionWrapper(Projects, "projects");
