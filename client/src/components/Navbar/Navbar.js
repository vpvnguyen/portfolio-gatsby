import React from "react";
import { Link } from "gatsby";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

// social icons
import Social from "../Social/Social.js";

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
      <AppBar position="static">
        <Toolbar>
          <Button variant="raised" style={style.title} disableRipple>
            <Link to="/" style={style.title}>
              Vincent Nguyen
            </Link>
          </Button>
          <Social />
          <Button color="inherit">
            <a href="#" target="_blank">
              Resume
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
