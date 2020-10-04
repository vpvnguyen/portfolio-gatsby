import React from "react";
import { motion } from "framer-motion";
import theme from "../../ui/theme";
import useStaticExperienceQuery from "../../utils/hooks/useStaticExperienceQuery";
import MotionStyle from "../../ui/motion";

const style = {
  motionHeader: MotionStyle.springUpAboutMeHeader(),
  motionText: MotionStyle.springUpAboutMeText(),
};

const MotionHeader = ({ children }) => (
  <motion.h1
    style={theme.h1}
    variants={style.motionHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.h1>
);

const MotionText = ({ children }) => (
  <motion.p variants={style.motionText} initial={"initial"} animate={"animate"}>
    {children}
  </motion.p>
);

const AboutMe = () => {
  const data = useStaticExperienceQuery();

  return (
    <>
      <MotionHeader>{data.site.siteMetadata.experience.current}</MotionHeader>
      {data &&
        data.site.siteMetadata.experience.past.map(pastExperience => (
          <MotionText key={pastExperience}>{pastExperience}</MotionText>
        ))}
    </>
  );
};

export default AboutMe;
