import React from "react";
import LayoutStyle from "../../ui/Layout/Layout.style";
import Background from "../../ui/Background";

const style = {
  container: {
    color: "#FAFAFA",
    marginTop: "-20px",
    padding: "100px 0px 200px 0",
  },
};

const Welcome = () => {
  return (
    <Background>
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
