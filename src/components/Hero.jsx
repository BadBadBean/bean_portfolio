import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { bean, darkbg } from '../assets';
import SectionArrow from './SectionArrow';

const Hero = () => {
  return (
    <>
      <div id="hero" className="absolute pt-50px left-0 z-0 h-[100vh] w-full object-bottom">
        <img
          src={darkbg}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover object-[center_80%]"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-full">
        <img
          src={darkbg}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-jersey uppercase`}>
              Hi, I&apos;m{' '}
              <span
                className="sm:text-eerieBlack sm:text-[90px] lg:text-[150px]
                text-eerieBlack text-[50px] font-jersey
                font-extrabold uppercase">
                Delphine
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              Lorem ipsum dolor sit amet. <br className="sm:block hidden" />
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-[100px] ml-[70vw] 
             w-[180px] sm:w-[220px] md:w-[260px] 
             h-auto object-contain"
            src={bean}
            alt="shaquille"
          />
        </div>
        <SectionArrow targetId="about" direction="down" />
      </section>
    </>
  );
};

export default Hero;
