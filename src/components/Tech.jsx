import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { technologies } from '../constants';
import { BoxCanva } from './canvas';
import { reversePortrait } from '../assets';
import { fadeIn } from '../utils/motion';
import SectionArrow from './SectionArrow';
import SectionHeader from './SectionHeader';

const Tech = () => {
  return (
      <section id="tech" className="relative flex flex-col justify-between h-full">
        <div>
        <SectionHeader
  title="Technologies"
  description="Voici un aperçu des technologies et langages de programmation que j'utilise pour organiser et réaliser mes projets."
  imgSrc={reversePortrait}
  imgPosition="right"
  imgAlt=""
  className="mb-10"
/>

      {/* Technologies */}
      <div className="mt-14 flex flex-wrap justify-around gap-[2vh] lg:justify-center lg:gap-[10vh] lg:w-[80%] m-auto">
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

