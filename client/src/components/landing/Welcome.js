import React from "react";
import { motion } from "framer-motion";
import theme from "../../ui/theme";
import MotionStyle from "../../ui/motion";

const style = {
  welcomeHeader: theme.h1,
  motionWelcomeHeader: MotionStyle.springUpWelcomeHeader(),
  motionWelcomeText: MotionStyle.springUpWelcomeText(),
};

const MotionWelcomeHeader = ({ children }) => (
  <motion.h1
    style={style.welcomeHeader}
    variants={style.motionWelcomeHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.h1>
);

const MotionWelcomeText = ({ children }) => (
  <motion.h2
    variants={style.motionWelcomeText}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.h2>
);

const Welcome = () => (
  <>
    <MotionWelcomeHeader>Hi, I'm Vincent :)</MotionWelcomeHeader>
    <MotionWelcomeText>I enjoy breaking and building things.</MotionWelcomeText>
  </>
);

export default Welcome;
