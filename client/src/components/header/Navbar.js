import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { motion } from "framer-motion";
import Social from "../Social";
import theme from "../../ui/theme";
import ElevationScroll from "./ElevationScroll";
import useStaticResumeQuery from "../../utils/hooks/useStaticResumeQuery";
import MotionStyle from "../../ui/motion";

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
  motionButtonText: MotionStyle.scaleUpMenuItem(),
  motionToolbar: MotionStyle.springDownToolBar(),
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

const MotionToolbar = ({ children }) => (
  <motion.nav
    variants={style.motionToolbar}
    initial={"initial"}
    animate={"animate"}
  >
    {children}
  </motion.nav>
);

const MotionButtonText = ({ children }) => (
  <motion.div
    variants={style.motionButtonText}
    initial={"initial"}
    whileHover={"whileHover"}
    whileTap={"whileTap"}
  >
    {children}
  </motion.div>
);

const Navbar = ({ name }) => {
  return (
    <div style={style.root}>
      <ElevationScroll>
        <AppBar position="fixed" style={style.navContainer}>
          <MotionToolbar>
            <Toolbar>
              <MotionButtonText>
                <Name name={name} />
              </MotionButtonText>

              <Social />

              <MotionButtonText>
                <Resume />
              </MotionButtonText>
            </Toolbar>
          </MotionToolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default Navbar;
