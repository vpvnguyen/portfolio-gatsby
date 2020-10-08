import React from "react";
import { motion } from "framer-motion";
import theme from "../../ui/theme";
import MotionStyle from "../../ui/motion";
import useStaticTitleQuery from "../../utils/hooks/useStaticTitleQuery";

const style = {
  welcomeHeader: theme.h1,
  motionWelcomeHeader: MotionStyle.springUpWelcomeHeader(),
  motionWelcomeText: MotionStyle.springUpWelcomeText(),
};

const MotionWelcomeHeader = ({ children }) => (
  <motion.div
    variants={style.motionWelcomeHeader}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.div>
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

const Welcome = () => {
  const data = useStaticTitleQuery();

  return (
    <>
      <MotionWelcomeHeader>
        <h1 style={style.welcomeHeader}>{data.site.siteMetadata.title}</h1>
      </MotionWelcomeHeader>
      <MotionWelcomeText>
        I enjoy breaking and building things.
      </MotionWelcomeText>
    </>
  );
};

export default Welcome;
