import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from "../styles";
import { portrait } from '../assets';
import SectionArrow from './SectionArrow';

const ServiceCard = ({ index, title, icon, description, level, rank }) => {
  const rankColorMap = {
    Apprentice: "#246f7f",
    Youngling: "#4CAF50",
    Novice: "#FF5722",
  };

  const backgroundColor = rankColorMap[rank] || rankColorMap.default;

  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] bg-[#1d2c71] text-white border-8bit relative font-jersey flex justify-between flex-col min-h-[50dvh]"
    >
      {/* Titre */}
      <div className='flex justify-between bg-[#1d2c71] border-8bit px-6 py-2 items-center
        -mx-6 -mt-4 mb-4'>
        <h3 className="text-[24px]">{title}</h3>
        <p className='text-white text-[24px] flex items-center justify-center'>{level}</p>
      </div>

      {/* Icône principale */}
      <div>
        <img src={icon} alt={title} className="w-[80%] object-contain m-auto mb-8" />
      </div>

      {/* Description */}
      <div className="-mx-4 -mt-4 -mb-2 border-8bit bg-[#1d2c71] p-2 h-[25%] flex flex-col justify-around">
        <div 
          className='-mx-4 py-2 text-center text-[20px] -mt-8 rounded-md border-8bit' 
          style={{ backgroundColor }}
        >
          {rank}
        </div>
        <div className='text-center flex items-center text-[18px]'>
          {description}
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative flex flex-col h-full justify-stretch">
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
                  className="max-w-[100px] h-auto object-contain"
                  alt="portrait"
                />
              </div>

              {/* Bloc centré */}
              <div className="flex-1 flex justify-center">
              <div className="text-left">
                <motion.h2
                  variants={fadeIn("", "", 0.2, 1)}
                  className="text-[26px] sm:text-[32px] text-white font-jersey"
                >
                  Overview.
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

        {/* Cartes de services */}
        <div className="mt-20 flex flex-wrap gap-[8vw] justify-center">
          {services.map((service, index) => (
            <ServiceCard 
            key={index}
            title={service.title}
            icon={service.icon}
            description={service.description}
            level={service.level}
            rank={service.rank}
            />
          ))}
        </div>
      </div>
      <SectionArrow targetId="tech" direction="down" />
      <SectionArrow targetId="hero" direction="up" />
    </section>
  );
};

export default About;
