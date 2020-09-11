import React from "react";

const style = {
  list: {
    listStyleType: "none",
  },
};

const AboutMe = () => {
  return (
    <>
      <h1>Software Engineer</h1>
      <ul style={style.list}>
        <li>Quality Assurance</li>
        <li>Test Automation</li>
        <li>Pipeline Management</li>
        <li>PCI Security Standards</li>
      </ul>
    </>
  );
};

export default AboutMe;
