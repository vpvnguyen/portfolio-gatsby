import React from "react";
import { Link } from "gatsby";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Social from "../Social";
import theme from "../../ui/theme";
import ElevationScroll from "./ElevationScroll";
import useStaticResumeQuery from "../../utils/hooks/useStaticResumeQuery";

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
};

const Navbar = ({ name }) => {
  const data = useStaticResumeQuery();

  return (
    <div style={style.root}>
      <ElevationScroll>
        <AppBar position="fixed" style={style.navContainer}>
          <Toolbar style={style.navContainer}>
            <Button style={style.title} disableRipple>
              <Link to="/" style={style.title}>
                {name}
              </Link>
            </Button>

            <Social />

            <Button color="inherit">
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default Navbar;
