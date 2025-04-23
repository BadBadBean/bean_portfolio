import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { BoxCanva } from './canvas';
import { reversePortrait, arrow } from '../assets';
import { fadeIn } from '../utils/motion';

const Tech = () => {
  return (
      <div className="relative flex flex-col justify-between h-full">
        {/* Contenu principal */}
        <div>
          {/* Conteneur pour assurer que la bordure s'affiche correctement */}
          <div className="w-full flex" style={{ display: 'block' }}>
            <div className="border-8bit-title" style={{ display: 'block', position: 'relative', boxSizing: 'border-box' }}>
              <motion.div
                variants={textVariant()}
                className="section-title flex flex-row-reverse items-center gap-6 py-2"
              >
                {/* Image à gauche */}
                <div>
                  <img
                    src={reversePortrait}
                    className="max-w-[120px] h-auto object-contain"
                    alt="portrait"
                  />
                </div>
  
                {/* Bloc centré */}
                <div className="flex-1 flex justify-center">
                  <div className="text-left">
                    <motion.p
                      variants={fadeIn('', '', 0.1, 1)}
                      className="mt-4 text-flashWhite font-jersey text-[22px] max-w-3xl leading-[30px]"
                    >
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
                      sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea
                      quaerat alias accusamus voluptas autem!
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

      {/* Technologies */}
      <div className="mt-14 flex flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BoxCanva icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* Flèche animée en bas de la section */}
      <div className="absolute bottom-2 mb-4 z-10 w-full flex justify-center py-2">
        <a href="#projects">
          <motion.img
            src={arrow}
            alt="scroll arrow"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        </a>
      </div>
    </div>
  </div>
  );
};

export default SectionWrapper(Tech, 'tech', true);

