import React from "react";
import LayoutStyle from "../../ui/layout/Layout.style";
import AboutMe from "./AboutMe";
import Welcome from "./Welcome";

const style = {
  container: {
    color: "#ffffff",
    padding: "5rem 0rem 10rem 0rem",
  },
  landingMessage: {
    padding: "5rem",
  },
  aboutMe: {
    paddingTop: "4rem",
    paddingBottom: "5rem",
  },
};

const Landing = () => (
  <LayoutStyle>
    <div style={style.container}>
      <div style={style.landingMessage}>
        <Welcome />
      </div>

      <div style={style.aboutMe}>
        <AboutMe />
      </div>
    </div>
  </LayoutStyle>
);

export default Landing;
