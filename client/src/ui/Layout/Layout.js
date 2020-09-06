import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { CssBaseline } from "@material-ui/core";

import Header from "../Header.js";
import Navbar from "../../components/Navbar/Navbar.js";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query siteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <CssBaseline />
      <Header title={data.site.siteMetadata.title} />
      <Navbar name={data.site.siteMetadata.title} />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
