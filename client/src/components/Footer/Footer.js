import React from "react";

import Social from "../Social/Social.js";

const style = {
  footer: {
    textAlign: "center",
    marginBottom: "1rem",
  },
};

const Footer = () => {
  return (
    <footer style={style.footer}>
      © {new Date().getFullYear()} Vincent Nguyen,
      {` `}
      <a
        href="https://www.github.com/vpvnguyen/portfolio-gatsby"
        target="_BLANK"
        rel="noreferrer"
      >
        Source
      </a>
      <Social />
    </footer>
  );
};

export default Footer;
