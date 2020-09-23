import React from "react";
import { Helmet } from "react-helmet";
import { CssBaseline } from "@material-ui/core";

const Header = ({ title }) => (
  <>
    <CssBaseline />
    <Helmet title={title} />
  </>
);

export default Header;
