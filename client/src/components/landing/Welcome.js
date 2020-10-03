import React from "react";
import { motion } from "framer-motion";
import theme from "../../ui/theme";
import MotionStyle from "../../ui/motion";

const style = {
  motionTitle: MotionStyle.springUpWelcomeHeader(),
  motionText: MotionStyle.springUpWelcomeText(),
};

const MotionTitle = ({ children }) => (
  <motion.h1
    style={theme.h1}
    variants={style.motionTitle}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.h1>
);

const MotionText = ({ children }) => (
  <motion.h2
    variants={style.motionText}
    initial={"initial"}
    animate={"animate"}
  >
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
