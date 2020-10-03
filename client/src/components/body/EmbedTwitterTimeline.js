import React from "react";
import { motion } from "framer-motion";
import LayoutStyle from "../../ui/layout/Layout.style";
import theme from "../../ui/theme";
import useStaticTwitterQuery from "../../utils/hooks/useStaticTwitterQuery";
import useScript from "../../utils/hooks/useScript";
import MotionStyle from "../../ui/motion";

const MotionHeader = ({ children }) => (
  <motion.h1
    style={theme.h1}
    variants={MotionStyle.springUpHeaders()}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.h1>
);

const EmbedTwitterTimeline = () => {
  const data = useStaticTwitterQuery();
  useScript("https://platform.twitter.com/widgets.js");

  return (
    <LayoutStyle>
      <MotionHeader>Tweets</MotionHeader>

      <a
        aria-label="Twitter Feed"
        aria-hidden="true"
        className="twitter-timeline"
        href={data.site.siteMetadata.social.twitter.url}
      >
        {" "}
      </a>
    </LayoutStyle>
  );
};

export default EmbedTwitterTimeline;
