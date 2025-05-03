import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { bean, darkbg, arrowRightWhite } from '../assets';
import SectionArrow from './SectionArrow';

const Hero = () => {
  return (
    <>
      <div id="hero" className="absolute pt-50px left-0 z-0 h-[100vh] w-full object-bottom">
        <img
          src={darkbg}
          alt="background de jeu vidéo 8bit de nuit"
          className="w-full h-full sm:block hidden object-cover object-[center_80%]"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-full">
        <img
          src={darkbg}
          alt="background de jeu vidéo 8bit de nuit"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[125px] top-[150px] 
          lg:top-[200px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 bg-eerieBlack sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bg-eerieBlack sm:hidden" />
          </div>

          <div>
            <p
              className={`${styles.heroHeadText} text-eerieBlack font-jersey uppercase`}>
              Moi, c&apos;est{' '}
              <span
                className="sm:text-eerieBlack sm:text-[90px] lg:text-[150px]
                text-eerieBlack text-[50px] font-jersey
                font-extrabold uppercase">
                Delphine
              </span>
            </p>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack font-jersey`}>
              Bienvenue sur mon portfolio ! <br className="sm:block hidden" />
              Après des heures de bidouilles et de tutos, j’ai décidé de passer au niveau supérieur : faire une reconversion professionnelle et devenir développeuse&nbsp;🚀
            </p>
            <button
              className="w-fit text-center text-white py-[0.5em] px-[1em] font-jersey text-[16px] sm:text-[20px]
                bg-[#575766] hover:bg-[#3a8eba]
                active:shadow-[inset_3px_3px_0px_0px_#396e8b]
                hover:shadow-[inset_-4px_-4px_0px_0px_#396e8b]
                shadow-[inset_-3px_-3px_0px_0px_#34343d]
                transition duration-200 ease-in-out transform
                flex items-center justify-center gap-1 h-auto z-20 rounded-md mt-8"
              onClick={() =>
                window.open(
                  'https://www.canva.com/design/DADmg6iYmuY/BmPXFcF-MuK41PwSzIRYww/edit?utm_content=DADmg6iYmuY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
                  '_blank'
                )
              }
              onMouseOver={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', arrowRightWhite);
              }}>
              VOIR MON CV
              <img
                src={arrowRightWhite}
                className="download-btn w-[18px] h-[18px] object-contain"
                alt=""
              />
            </button>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div>
          <img
            className="absolute bottom-[100px] ml-[40vw] sm:ml-[70vw] 
             w-[220px] md:w-[260px] 
             h-auto object-contain"
            src={bean}
            alt="personnage 8bit"
          />
        </div>
        <SectionArrow targetId="about" direction="down" />
      </section>
    </>
  );
};

export default Hero;
