import { useState } from "react";
import { motion } from "framer-motion";
import { arrowUp, arrowDown } from "../assets";

const SectionArrow = ({ targetId, direction = "down", className = "" }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`absolute z-50 ${
        direction === "down" ? "bottom-3" : "top-3"
      } left-1/2 transform -translate-x-1/2 -ml-[20px]  ${className}`}
    >
      <motion.img
    src={direction === "down" ? arrowDown : arrowUp}
    alt={`arrow-${direction}`}
    className="w-10 h-10 object-contain"
    animate={{ y: [0, 10, 0] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
    }}
  />
    </motion.button>
  );
};

export default SectionArrow;
