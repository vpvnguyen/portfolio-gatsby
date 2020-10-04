import React from "react";
import { motion } from "framer-motion";
import theme from "../../ui/theme";
import useStaticExperienceQuery from "../../utils/hooks/useStaticExperienceQuery";
import MotionStyle from "../../ui/motion";

const style = {
  aboutMeHeader: theme.h1,
  motionAboutMeHeader: MotionStyle.springUpAboutMeHeader(),
  motionAboutMeText: MotionStyle.springUpAboutMeText(),
};

const MotionAboutMeHeader = ({ children }) => (
  <motion.h1
    style={style.aboutMeHeader}
    variants={style.motionAboutMeHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.h1>
);

const MotionAboutMeText = ({ children }) => (
  <motion.p
    variants={style.motionAboutMeText}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.p>
);

const AboutMe = () => {
  const data = useStaticExperienceQuery();

  return (
    <>
      <MotionAboutMeHeader>
        {data.site.siteMetadata.experience.current}
      </MotionAboutMeHeader>
      {data &&
        data.site.siteMetadata.experience.past.map(pastExperience => (
          <MotionAboutMeText key={pastExperience}>
            {pastExperience}
          </MotionAboutMeText>
        ))}
    </>
  );
};

export default AboutMe;
