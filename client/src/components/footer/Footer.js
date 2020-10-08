import React from "react";
import Social from "../Social";
import theme from "../../ui/theme";

const style = {
  footer: {
    textAlign: "center",
    backgroundColor: theme.color.dark,
    color: theme.color.light,
  },
  footerContent: {
    padding: ".5rem",
  },
};

const Footer = () => (
  <footer style={style.footer}>
    <div style={style.footerContent}>
      © {new Date().getFullYear()} Vincent Nguyen
      <Social />
    </div>
  </footer>
);

export default Footer;
