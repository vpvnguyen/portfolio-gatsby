import React from "react";
import { Helmet } from "react-helmet";

const Header = ({ title }) => {
  return <Helmet title={title} />;
};

export default Header;
