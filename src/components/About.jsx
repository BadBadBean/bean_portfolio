import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { portrait, arrow } from '../assets';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="relative flex flex-col h-full justify-stretch">
      {/* Contenu principal */}
      <div className="flex-grow">
        {/* Conteneur pour assurer que la bordure s'affiche correctement */}
        <div className="w-full" style={{ display: 'block' }}>
          <div className="border-8bit-title" style={{ display: 'block', position: 'relative', boxSizing: 'border-box' }}>
            <motion.div
              variants={textVariant()}
              className="section-title flex items-center gap-6 py-2"
            >
              {/* Image à gauche */}
              <div>
                <img
                  src={portrait}
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

        {/* Cartes de services */}
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>

      {/* Flèche animée en bas de la section */}
      <div className="absolute bottom-2 mb-4 z-10 w-full flex justify-center py-2">
        <a href="#tech">
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
  );
};

export default SectionWrapper(About, 'about', true);
