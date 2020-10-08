import React from "react";
import Social from "../Social";
import theme from "../../ui/theme";
import useStaticTitleQuery from "../../utils/hooks/useStaticTitleQuery";

const style = {
  footer: {
    backgroundColor: theme.color.dark,
    color: theme.color.light,
  },
  footerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: ".3rem",
  },
};

const Footer = () => {
  const data = useStaticTitleQuery();

  return (
    <footer style={style.footer}>
      <div style={style.footerContent}>
        © {new Date().getFullYear()} {data.site.siteMetadata.title}
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
