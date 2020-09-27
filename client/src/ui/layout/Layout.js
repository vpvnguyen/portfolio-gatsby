import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import Navbar from "../../components/header/Navbar";
import useStaticTitleQuery from "../../utils/hooks/useStaticTitleQuery";

const Layout = ({ children }) => {
  const data = useStaticTitleQuery();

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
