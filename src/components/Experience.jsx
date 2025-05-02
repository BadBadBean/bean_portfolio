import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { download, downloadHover, resume, reversePortrait } from "../assets";
import { textVariant, fadeIn } from "../utils/motion";
import SectionArrow from "../components/SectionArrow";
import SectionHeader from "./SectionHeader";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#1c3b7d85',
      boxShadow:
      '4px 0 rgba(255, 255, 255, 0.6), -4px 0 rgba(255, 255, 255, 0.6), 0 -4px rgba(255, 255, 255, 0.6), 0 4px rgba(255, 255, 255, 0.6), 8px 0 rgba(0, 0, 255, 0.274), -8px 0 rgba(0, 0, 255, 0.5), 0 -8px rgba(0, 0, 255, 0.5), 0 8px rgba(0, 0, 255, 0.5), 0 0 0 4px rgba(0, 0, 255, 0.5)',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  ##1c3b7d85',
    }}
    date={
      <div>
        <h3 className="text-flashWhite text-[24px] font-jersey">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[=60%] h-[60%] object-contain"
        />
      </div>
    }>
    <div>
      <h3 className="text-flashWhite text-[18px] sm:text-[24px] font-jersey tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-flashWhite text-[22px] font-semibold font-jersey tracking-[1px]"
        style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <section id="experience" className="relative flex flex-col h-full">
      {/* Titre 8-bit */}
      <SectionHeader
  title="Expériences"
  description="Un petit résumé de mon parcours dans le milieu du développement web."
  imgSrc={reversePortrait}
  imgAlt="Portrait image"
  imgPosition="right" // or "left"
  className="mb-10"
/>

      {/* Timeline */} 
      <div className=" flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
      <SectionArrow targetId="contact" direction="down" />
      <SectionArrow targetId="projects" direction="up" />
    </section>
  );
};

export default Experience;
