import React from "react";
import PropTypes from "prop-types";

// material ui
import { CssBaseline, Container } from "@material-ui/core";

// components
import Header from "../Header.js";
import Navbar from "../../components/Navbar/Navbar.js";

const style = {
  height: "100vh",
  margin: "0 auto",
};

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Navbar />
      <Container maxWidth="md">
        <main style={style}>{children}</main>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
