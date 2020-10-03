import React from "react";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@material-ui/icons";
import { motion } from "framer-motion";
import theme from "../ui/theme";
import useStaticSocialQuery from "../utils/hooks/useStaticSocialQuery";
import Motion from "../ui/motion";

const style = {
  links: {
    fontSize: "1.4em",
    margin: ".5rem",
    backgroundColor: theme.color.dark,
    color: theme.color.accent,
  },
  motion: {
    initial: {
      cursor: "pointer",
    },
    whileHover: Motion.whileHoverScale(),
    whileTap: {
      color: theme.color.dark,
    },
  },
};

const MotionIcon = ({ children, url }) => (
  <motion.a
    href={url}
    style={style.links}
    initial={style.motion.initial}
    whileHover={style.motion.whileHover}
    whileTap={style.motion.whileTap}
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </motion.a>
);

const Social = () => {
  const data = useStaticSocialQuery();

  return (
    <>
      <MotionIcon
        url={`${data.site.siteMetadata.social.github.url}${data.site.siteMetadata.social.github.user}`}
      >
        <GitHubIcon />
      </MotionIcon>

      <MotionIcon
        url={`${data.site.siteMetadata.social.linkedin.url}${data.site.siteMetadata.social.linkedin.user}`}
      >
        <LinkedInIcon />
      </MotionIcon>
    </>
  );
};

export default Social;
