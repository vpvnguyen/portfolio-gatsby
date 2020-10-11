import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import Navbar from "../../components/header/Navbar";
import useStaticAuthorQuery from "../../utils/hooks/useStaticAuthorQuery";

const Layout = ({ children }) => {
  const data = useStaticAuthorQuery();

  return (
    <>
      <Header author={data.site.siteMetadata.author} />
      <Navbar author={data.site.siteMetadata.author} />
      <div>{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
