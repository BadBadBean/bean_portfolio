import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { technologies } from '../constants';
import { BoxCanva } from './canvas';
import { reversePortrait } from '../assets';
import { fadeIn } from '../utils/motion';
import SectionArrow from './SectionArrow';

const Tech = () => {
  return (
      <section id="tech" className="relative flex flex-col justify-between h-full">
        <div>
          <div className="w-full flex" style={{ display: 'block' }}>
            <div className="border-8bit-title" style={{ display: 'block', position: 'relative', boxSizing: 'border-box' }}>
              <motion.div
                variants={textVariant()}
                className="section-title flex flex-row-reverse items-center gap-6 py-2"
              >

                <div>
                  <img
                    src={reversePortrait}
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
                  Technologies.
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

      {/* Technologies */}
      <div className="mt-14 flex flex-wrap justify-around gap-[2vh] lg:justify-center lg:gap-[8vh] lg:w-[80%] m-auto">
        {technologies.map((technology) => (
          <div className="w-24 h-24 sm:w-32 sm:h-32" key={technology.name}>
            <BoxCanva icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
    <SectionArrow targetId="projects" direction="down" />
    <SectionArrow targetId="about" direction="up" />
  </section>
  );
};

export default Tech

