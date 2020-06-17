import React from "react";
import { Link } from "gatsby";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

// social icons
import Social from "../Social/Social.js";

// effects
import ElevationScroll from "./Navbar.effects.js";

const style = {
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "White",
    "&:hover": {
      backgroundColor: "transparent",
    },
    textDecoration: "none" /* no underline */,
  },
};

const Navbar = () => {
  return (
    <div style={style.root}>
      {/* slight shadow effect for navbar when scrolling */}
      <ElevationScroll>
        {/* position="fixed" will fill bar to edges; keep bar fixed to top of screen when scrolling */}
        <AppBar position="fixed">
          <Toolbar style={style.root}>
            <Button variant="raised" style={style.title} disableRipple>
              <Link to="/" style={style.title}>
                Vincent Nguyen
              </Link>
            </Button>
            <Social />
            <Button color="inherit">
              <a
                href="https://docs.google.com/document/d/1PTogfVNXdTCEIQor0yN4gXIcFEKxHRFzGIlRl4287xM/edit?usp=sharing"
                target="_blank"
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
