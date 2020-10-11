import React from "react";
import { motion } from "framer-motion";
import LayoutStyle from "../../ui/layout/Layout.style";
import theme from "../../ui/theme";
import useStaticExperienceQuery from "../../utils/hooks/useStaticExperienceQuery";
import MotionStyle from "../../ui/motion";

const style = {
  experienceContainer: {
      fontSize: '.8rem',
      paddingLeft: '.5rem',
      paddingBottom: '.5rem'
  },
  experienceHeader: theme.h1,

  motionExperienceHeader: MotionStyle.fadeInHeadersLeft(),
  motionExperience: MotionStyle.fadeInExperienceRight(),
};

const MotionExperienceHeader = ({ children }) => (
  <motion.div
    variants={style.motionExperienceHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const MotionExperience = ({ children }) => (
  <motion.div
    variants={style.motionExperience}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
);

const Experience = () => {
  const data = useStaticExperienceQuery();

  return (
    <LayoutStyle>
      <MotionExperienceHeader >
        <h1 style={style.experienceHeader}>Experience</h1>
      </MotionExperienceHeader>
      <MotionExperience>
        {data.site.siteMetadata.experience.map((experience) => (
          <div style={style.experienceContainer}>{experience.toUpperCase()}</div>
        ))}
      </MotionExperience>
    </LayoutStyle>
  );
};

export default Experience;
