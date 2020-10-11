import React from "react";
import { Helmet } from "react-helmet";
import { CssBaseline } from "@material-ui/core";

const Header = ({ author }) => (
  <>
    <CssBaseline />
    <Helmet author={author} />
  </>
);

export default Header;
