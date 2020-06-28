import React from "react";
import PropTypes from "prop-types";

// material ui
import { CssBaseline, Container } from "@material-ui/core";

// components
import Header from "../Header.js";
import Navbar from "../../components/Navbar/Navbar.js";
import SideBar from "../../components/SideBar/SideBar.js";
import Footer from "../Footer/Footer.js";

const style = {
  contentWrapper: {
    height: "100vh", // fallback
    height: "calc(var(--vh, 1vh) * 100)",
    margin: "0 auto",
  },
};

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <div style={style.contentWrapper}>
        <Navbar />
        <Container maxWidth="sm">
          <SideBar />
          <main>{children}</main>
        </Container>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
