import React from "react";
import PropTypes from "prop-types";

const style = {
  container: {
    fontSize: "16px",
    margin: "auto",
    padding: "1em",
  },
};

const LayoutStyle = ({ children }) => (
  <main style={style.container}>{children}</main>
);

LayoutStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutStyle;
