import React from "react";
import PropTypes from "prop-types";
import BackgroundImage from "../images/hb.jpg";
import theme from "./theme";

const style = {
  background: {
    /* top, transparent black, faked with gradient */
    backgroundImage: `
      linear-gradient(
      rgba(0, 0, 0, 0.7), 
      rgba(0, 0, 0, 0.8)
      ),
      url(${BackgroundImage})`,
    /* Background image is centered vertically and horizontally at all times */
    backgroundPosition: "center center",
    /* Background image doesn't tile */
    backgroundRepeat: "no-repeat",
    /* Background image is fixed in the viewport so that it doesn't move when
         the content's height is greater than the image's height */
    backgroundAttachment: "fixed",
    /* This is what makes the background image rescale based
         on the container's size */
    backgroundSize: "cover",
    /* Set a background color that will be displayed
         while the background image is loading */
    backgroundColor: theme.color.light,
  },
};

const Background = ({ children }) => {
  return (
    <>
      <div style={style.background}>{children}</div>
    </>
  );
};

Background.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Background;
