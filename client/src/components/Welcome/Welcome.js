import React from "react";
import LayoutStyle from "../../ui/Layout/Layout.style";
import Background from "../../ui/Background";

const Welcome = () => {
  return (
    <Background>
      <LayoutStyle>
        <h1>Welcome!</h1>
        <h1>Hi, I'm Vincent :)</h1>
        <p>Welcome to my Portfolio.</p>
        <p>Great things are built here.</p>
        <AboutMe />
      </LayoutStyle>
    </Background>
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
