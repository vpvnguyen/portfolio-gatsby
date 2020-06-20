import React from "react";
import PropTypes from "prop-types";

// material ui
import { CssBaseline, Container } from "@material-ui/core";

// components
import Header from "../Header.js";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Navbar />
      <Container maxWidth="sm">
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
