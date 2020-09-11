import React from "react";
import LayoutStyle from "../../ui/Layout/Layout.style";

const style = {
  container: {
    color: "#ffffff",
    padding: "5rem 0rem 10rem 0rem",
  },
};

const Welcome = () => {
  return (
    <LayoutStyle>
      <div style={style.container}>
        <h1>Welcome!</h1>
        <h1>Hi, I'm Vincent :)</h1>
        <p>Welcome to my Portfolio.</p>
        <p>Great things are built here.</p>
        <p>Great things are built here.</p>
        <p>Great things are built here.</p>
        <p>Great things are built here.</p>
        <p>Great things are built here.</p>
        <p>Great things are built here.</p>
        <p>Great things are built here.</p>
        <p>Great things are built here.</p>
        <p>Great things are built here.</p>
        <AboutMe />
      </div>
    </LayoutStyle>
  );
};

const AboutMe = () => {
  return (
    <>
      <h1>About Me Header</h1>
    </>
  );
};

export default Welcome;
