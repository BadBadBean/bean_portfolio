import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { mygithub, portrait } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import SectionArrow from "./SectionArrow";
import SectionHeader from "./SectionHeader";

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  tags,
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
      } flex flex-col items-center justify-center min-w-[170px] h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}
    >
      {/* Overlay & Image */}
      <div className="absolute inset-0 border-8bit">
        <div className="absolute top-0 left-0 z-10 bg-[#10132C] h-full w-full opacity-[0.7]"></div>
        <img src={image} alt={name} className="absolute w-full h-full object-cover" />

        {/* Bordures 8bit */}
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

      <div className={`absolute top-0 left-0 right-0 z-20 bg-[#072d7d] border-8bit px-4 py-2 flex justify-between items-center xl:-mx-4 xl:-mt-4 ${isActive ? "lg:flex" : "lg:hidden"} flex`}>
        <h3 className="font-bold sm:text-[20px] text-[16px] text-timberWolf uppercase font-jersey truncate">
          {name}
        </h3>
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
            alt="Lien vers le code sur github"
            className="w-4/5 h-4/5 object-contain"
          />
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 z-20 border-8bit bg-[#052D7D] p-4 xl:-mx-4 ${isActive ? "lg:block" : "lg:hidden"} block`}>
      <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <span key={tag.name}
              className={`px-[1em] py-[0.1em] text-s bg-[#000080] font-jersey uppercase rounded-md border-[2px] border-black text-white shadow-[2px_2px_0_#000]`}
            >
              {tag.name}
            </span>
            
            ))}
          </div>
        <p className="text-silver text-[16px] sm:text-[18px] leading-[20px] font-jersey">
          {description}
        </p>

        <div className="relative inline-block sm:w-[138px] w-[100px] sm:mt-[22px] mt-[16px] transition-transform duration-150 ease-in-out active:translate-y-1 active:scale-95">
          <button
            className="w-full text-center text-white py-1.5 font-jersey text-s
              bg-[#575766] hover:bg-[#3a8eba]
                active:shadow-[inset_3px_3px_0px_0px_#396e8b]
                hover:shadow-[inset_-4px_-4px_0px_0px_#396e8b]
                shadow-[inset_-3px_-3px_0px_0px_#34343d]
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

          {/* Bordures bouton */}
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
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState("project-1");

  return (
    <section id="projects" className="relative flex flex-col justify-between h-full">
      <div className="flex-grow">
        {/* Titre de section */}
        <SectionHeader
  title="Projets"
  description="Voici quelques uns de mes projets. Les trois premiers ont été réalisés dans le cadre de la formation Intégrateur Web de Openclassrooms et les deux derniers sont des projets personnels."
  imgSrc={portrait}
  imgPosition="left"
  className="mb-10"
/>

        {/* Cartes projets */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <div className="mt-[50px] flex lg:flex-row flex-col gap-[4.5rem]">
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
