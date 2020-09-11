import React from "react";
import LayoutStyle from "../../ui/Layout/Layout.style";
import AboutMe from "../Welcome/AboutMe";

const style = {
  container: {
    color: "#ffffff",
    padding: "5rem 0rem 10rem 0rem",
  },
  landingMessage: {
    padding: "5rem",
  },
  aboutMe: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
};

const Welcome = () => {
  return (
    <LayoutStyle>
      <div style={style.container}>
        <div style={style.landingMessage}>
          <h1>Hi, I'm Vincent :)</h1>
          <h1>I enjoy breaking and building things.</h1>
        </div>
        <div style={style.aboutMe}>
          <AboutMe />
        </div>
      </div>
    </LayoutStyle>
  );
};

export default Welcome;
