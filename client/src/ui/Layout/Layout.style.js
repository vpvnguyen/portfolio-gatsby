import React from "react";
import PropTypes from "prop-types";

// material ui
import { Container } from "@material-ui/core";

const LayoutStyle = ({ children }) => {
  return (
    <>
      <Container maxWidth="md">
        <main>{children}</main>
      </Container>
    </>
  );
};

LayoutStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutStyle;
