import React from "react";
import PropTypes from "prop-types";

// material ui
import { Container } from "@material-ui/core";

// components
import Navbar from "../../components/Navbar/Navbar.js";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <main>{children}</main>
      </Container>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
