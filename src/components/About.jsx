import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { portrait } from "../assets";
import SectionArrow from "./SectionArrow";
import SectionHeader from "./SectionHeader";

const ServiceCard = ({ index, title, icon, description, level, rank }) => {
  const rankColorMap = {
    Compagnon: "#AF6DE7",
    Apprenti: "#BA4488",
    Novice: "#3B5A9B",
  };

  const backgroundColor = rankColorMap[rank] || "#1d2c71";

  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="xs:w-[250px] bg-[#1d2c71] text-white border-8bit relative font-jersey flex justify-between flex-col min-h-[50dvh]"
    >
      <div className="bg-[#1d2c71] border-8bit px-6 py-2 md:-mx-6 md:-mt-4 md:mb-4">
        <h3 className="text-[24px] text-center">{title}</h3>
      </div>

      <div>
        <img
          src={icon}
          alt={title}
          className="w-[80%] object-contain m-auto mb-8"
        />
      </div>

      <div className="md:-mx-4 -mt-4 -mb-2 border-8bit bg-[#1d2c71] p-2 h-[25%] flex flex-col justify-around">
        <div
          className="-mx-4 py-2 text-center  text-[20px] -mt-8 rounded-md border-8bit"
          style={{ backgroundColor }}
        >
          {rank}
        </div>
        <div className="text-center flex items-center mt-4 text-[18px]">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col h-full justify-stretch"
    >
          <SectionHeader
            title="Services"
            description="Découvrez mes domaines de compétences qui me permettront de réaliser vos projets."
            imgSrc={portrait}
            imgPosition="left"
            className="mb-10"
          />

        <div className="md:mt-20 xs:mx-[20px] flex flex-wrap gap-[15vw] md:gap-[15vw] lg:gap-[8vw] justify-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              level={service.level}
              rank={service.rank}
            />
          ))}
        </div>
      <SectionArrow targetId="tech" direction="down" />
      <SectionArrow targetId="hero" direction="up" />
    </section>
  );
};

export default About;
