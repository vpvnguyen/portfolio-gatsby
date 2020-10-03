import React from "react";
import { motion } from "framer-motion";
import theme from "../../ui/theme";

const style = {
  motionTitle: {
    before: {
      opacity: 0,
      y: 10,
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 80,
      },
    },
  },
  motionText: {
    before: {
      opacity: 0,
      y: 10,
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 50,
        delay: 1.5,
      },
    },
  },
};

const MotionTitle = ({ children }) => (
  <motion.h1
    style={theme.h1}
    variants={style.motionTitle}
    initial={"before"}
    animate={"after"}
  >
    {children}
  </motion.h1>
);

const MotionText = ({ children }) => (
  <motion.h2 variants={style.motionText} initial={"before"} animate={"after"}>
    {children}
  </motion.h2>
);

const Welcome = () => (
  <>
    <MotionTitle>Hi, I'm Vincent :)</MotionTitle>
    <MotionText>I enjoy breaking and building things.</MotionText>
  </>
);

export default Welcome;
