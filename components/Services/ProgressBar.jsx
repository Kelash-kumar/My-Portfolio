/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
const ProgressBar = ({ skillName, value, color }) => {
    return (
      <motion.div
        className="skill_progress__item"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p>{skillName}</p>
        <div className="progress">
          <div
            className="progress-bar"
            style={{
              width: `${value}%`,
              backgroundColor: `${color}`,
            }}
          ></div>
        </div>
      </motion.div>
    );
  };

  
export default ProgressBar;
