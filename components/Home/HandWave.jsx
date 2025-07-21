import React from "react";
import { motion, useAnimation } from "framer-motion";

const HandWave = () => {
  const controls = useAnimation();

  const waveAnimation = {
    rotate: [0, 20, 0, -20, 0], // Keyframes for rotation
    transition: {
      duration: 2,
      repeat: 1,
    },
  };

  React.useEffect(() => {
    controls.start(waveAnimation);
  }, [controls]);

  return (
    <motion.span
      role="img"
      aria-label="Waving Hand"
      style={{ fontSize: "1em", display: "inline-block" }}
      animate={controls}
    >
      👋
    </motion.span>
  );
};

export default HandWave;
