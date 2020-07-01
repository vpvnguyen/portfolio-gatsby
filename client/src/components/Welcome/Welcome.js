import React from "react";

const style = {
  welcomeWrapper: {
    // minHeight: "92vh",
    // // height: "20%",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "column",
    // paddingBottom: 650,
  },
  heading: {
    // paddingTop: -50,
    // paddingLeft: 50,
    // paddingBottom: 50,
  },
  intro: {
    // paddingTop: 50,
    // paddingLeft: 50,
  },
};

const Welcome = () => {
  return (
    <div style={style.welcomeWrapper}>
      <h1 style={style.heading}>Welcome!</h1>
      <div style={style.intro}>
        <h1>Hi, I'm Vincent :)</h1>
        <p>Welcome to my Portfolio.</p>
        <p>Great things are built here.</p>
      </div>
    </div>
  );
};

export default Welcome;
