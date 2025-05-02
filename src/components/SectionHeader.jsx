import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";

const SectionHeader = ({
  title,
  description,
  imgSrc,
  imgAlt = "section image",
  imgPosition = "left",
  className = "",
}) => {
  const isImageLeft = imgPosition === "left";

  return (
    <div className={`w-full ${className}`}>
      <div className="border-8bit-title relative box-border">
        <motion.div
          variants={textVariant(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`section-title flex items-center gap-6 py-2 ${
            isImageLeft ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div>
            <img
              src={imgSrc}
              alt={imgAlt}
              className="max-w-[100px] h-auto object-contain"
            />
          </div>

          <div className="flex-1 flex justify-center">
            <div className="text-left">
              <motion.h2
                variants={fadeIn("", "", 0.2, 1)}
                className="text-[26px] sm:text-[32px] text-white font-jersey"
              >
                {title}
              </motion.h2>
              <motion.p
                variants={fadeIn("", "", 0.3, 1)}
                className="text-flashWhite font-jersey text-[18px] leading-[26px]"
              >
                {description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionHeader;
