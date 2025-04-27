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

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#eaeaec",
      color: "#292929",
      padding: "12px 16px",
      boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 4px",
    }}
    contentArrowStyle={{
      borderRight: "6px solid #232631",
    }}
    date={
      <h3 className="text-dim text-[14px] font-semibold font-beckman">
        {experience.date}
      </h3>
    }
    iconStyle={{
      background: experience.iconBg,
      width: "40px",
      height: "40px",
      top: "12px",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[70%] h-[70%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-jetLight text-[18px] font-bold font-beckman tracking-[1px]">
        {experience.title}
      </h3>
      <p className="text-taupe text-[16px] font-medium font-overcameBold tracking-[0.5px]">
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <section id="experience" className="relative flex flex-col h-full">
      {/* Titre 8-bit */}
      <div className="w-full">
        <div className="border-8bit-title">
          <motion.div
            variants={textVariant()}
            className="section-title flex flex-row-reverse items-center gap-4 py-2"
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
                  Work Experience.
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

      {/* Timeline */}
      
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}

          {/* Résumé button element */}
          <VerticalTimelineElement
            contentStyle={{
              background: "#eaeaec",
              color: "#292929",
              padding: "12px 16px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight: "6px solid  #232631",
            }}
            iconStyle={{ background: "#333333", width: "40px", height: "40px", top: "12px" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
            }
          >
            <button
              className="live-demo flex justify-between text-[14px] text-timberWolf font-bold font-beckman items-center py-3 px-3 w-[120px] h-[42px] rounded-[10px] bg-jetLight hover:bg-battleGray hover:text-eerieBlack transition duration-200"
              onClick={() =>
                window.open("resume link", "_blank") // remplace par ton lien
              }
              onMouseOver={() => {
                document
                  .querySelector(".download-btn")
                  .setAttribute("src", downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector(".download-btn")
                  .setAttribute("src", download);
              }}
            >
              MY RESUME
              <img
                src={download}
                alt="download"
                className="download-btn w-[20px] h-[20px] object-contain"
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <SectionArrow targetId="contact" direction="down" />
        <SectionArrow targetId="projects" direction="up" />
      
    </section>
  );
};

export default Experience;
