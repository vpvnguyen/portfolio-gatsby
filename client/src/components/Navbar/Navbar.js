import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// social icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "White",
    "&:hover": {
      backgroundColor: "transparent",
    },
    textDecoration: "none" /* no underline */,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button variant="raised" className={classes.title} disableRipple>
            <Link to="/" className={classes.title}>
              Vincent Nguyen
            </Link>
          </Button>
          <Button color="inherit">
            <a href="https://www.github.com/vpvnguyen" target="_blank">
              <GitHubIcon />
            </a>
          </Button>
          <Button color="inherit">
            <a href="https://www.linkedin.com/in/vpvnguyen" target="_blank">
              <LinkedInIcon />
            </a>
          </Button>
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
