import React from "react";
import LayoutStyle from "../../ui/layout/Layout.style";
import Welcome from "./Welcome";

const style = {
  container: {
    color: "#ffffff",
    padding: "10rem 0rem 15rem 0rem",
  },
  landingMessage: {
    padding: "5rem",
  },
};

const Landing = () => (
  <LayoutStyle>
    <div style={style.container}>
      <div style={style.landingMessage}>
        <Welcome />
      </div>
    </div>
  </LayoutStyle>
);

export default Landing;
