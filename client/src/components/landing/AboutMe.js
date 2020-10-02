import React from "react";
import { motion } from "framer-motion";
import theme from "../../ui/theme";
import useStaticExperienceQuery from "../../utils/hooks/useStaticExperienceQuery";

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
        delay: 2.5,
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
        delay: 3.5,
        y: {
          velocity: -100,
        },
      },
    },
  };

  return (
    <motion.p variants={variants} initial={"before"} animate={"after"}>
      {children}
    </motion.p>
  );
};

const AboutMe = () => {
  const data = useStaticExperienceQuery();

  return (
    <>
      <MotionTitle>{data.site.siteMetadata.experience.current}</MotionTitle>
      {data &&
        data.site.siteMetadata.experience.past.map((value, index) => (
          <MotionText key={value} index={index}>
            {value}
          </MotionText>
        ))}
    </>
  );
};

export default AboutMe;
