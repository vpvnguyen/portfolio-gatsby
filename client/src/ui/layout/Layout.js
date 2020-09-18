import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../../components/header/Header.js";
import Navbar from "../../components/header/Navbar.js";

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
      <Header title={data.site.siteMetadata.title} />
      <Navbar name={data.site.siteMetadata.title} />
      <div>{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
