import React from "react";
import { motion } from "framer-motion";
import theme from "../../ui/theme";

const MotionTitle = ({ children }) => {
  const variants = {
    before: {
      opacity: 0,
      y: 10,
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.h1
      style={theme.h1}
      variants={variants}
      initial={"before"}
      animate={"after"}
    >
      {children}
    </motion.h1>
  );
};

const MotionText = ({ children }) => {
  const variants = {
    before: {
      opacity: 0,
      y: 10,
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
        delay: 1.5,
      },
    },
  };

  return (
    <motion.h2 variants={variants} initial={"before"} animate={"after"}>
      {children}
    </motion.h2>
  );
};

const Welcome = () => (
  <>
    <MotionTitle>Hi, I'm Vincent :)</MotionTitle>
    <MotionText>I enjoy breaking and building things.</MotionText>
  </>
);

export default Welcome;
