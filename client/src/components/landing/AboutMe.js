import React from "react";
import { motion } from "framer-motion";
import theme from "../../ui/theme";
import useStaticExperienceQuery from "../../utils/hooks/useStaticExperienceQuery";

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
        damping: 50,
        delay: 2.5,
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
        damping: 100,
        delay: 4,
        y: {
          velocity: -50,
        },
      },
    },
  },
};

const MotionTitle = ({ children }) => {
  return (
    <motion.h1
      style={theme.h1}
      variants={style.motionTitle}
      initial={"before"}
      animate={"after"}
    >
      {children}
    </motion.h1>
  );
};

const MotionText = ({ children }) => (
  <motion.p variants={style.motionText} initial={"before"} animate={"after"}>
    {children}
  </motion.p>
);

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
