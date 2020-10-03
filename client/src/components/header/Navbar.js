import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { motion } from "framer-motion";
import Social from "../Social";
import theme from "../../ui/theme";
import ElevationScroll from "./ElevationScroll";
import useStaticResumeQuery from "../../utils/hooks/useStaticResumeQuery";
import Motion from "../../ui/motion";

const style = {
  root: {
    backgroundColor: theme.color.dark,
    height: "70px",
  },
  navContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.color.dark,
    color: theme.color.accent,
  },
  title: {
    flexGrow: 1,
    color: theme.color.accent,
    "&:hover": {
      backgroundColor: "transparent",
    },
    textDecoration: "none",
  },
  resume: {
    color: theme.color.accent,
    textDecoration: "none",
  },
  motionButton: {
    initial: {
      cursor: "pointer",
    },
    whileHover: Motion.whileHoverScale(),
    whileTap: {
      color: theme.color.dark,
    },
  },
  motionNavbar: {
    initial: {
      y: -50,
    },
    animate: {
      rotate: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
      },
    },
  },
};

const Name = ({ name }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button style={style.title} onClick={scrollToTop}>
      {name}
    </Button>
  );
};

const Resume = () => {
  const data = useStaticResumeQuery();

  return (
    <Button>
      <a
        style={style.resume}
        href={data.site.siteMetadata.resume}
        target="_blank"
        rel="noreferrer"
        download
      >
        Resume
      </a>
    </Button>
  );
};

const MotionNavbar = ({ children }) => (
  <motion.nav
    initial={style.motionNavbar.initial}
    animate={style.motionNavbar.animate}
  >
    {children}
  </motion.nav>
);

const MotionButton = ({ children }) => (
  <motion.div
    initial={style.motionButton.initial}
    whileHover={style.motionButton.whileHover}
    whileTap={style.motionButton.whileTap}
  >
    {children}
  </motion.div>
);

const Navbar = ({ name }) => {
  return (
    <div style={style.root}>
      <ElevationScroll>
        <AppBar position="fixed" style={style.navContainer}>
          <MotionNavbar>
            <Toolbar>
              <MotionButton>
                <Name name={name} />
              </MotionButton>

              <Social />

              <MotionButton>
                <Resume />
              </MotionButton>
            </Toolbar>
          </MotionNavbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default Navbar;
