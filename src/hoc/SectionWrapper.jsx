import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName, fullHeight = false) => {
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.padding}`}
        style={fullHeight ? { 
          height: '100vh', 
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden' // Empêche les débordements horizontaux
        } : {}}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <div style={fullHeight ? { 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column',
          width: '100%' 
        } : {}}>
          <Component />
        </div>
      </motion.section>
    );
  }

  return HOC;
};

export default SectionWrapper;
