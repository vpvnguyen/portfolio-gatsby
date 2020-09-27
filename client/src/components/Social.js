import React from "react";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@material-ui/icons";
import theme from "../ui/theme";
import useStaticSocialQuery from "../utils/hooks/useStaticSocialQuery";

const style = {
  fontSize: "1.4em",
  margin: "0.2em",
  backgroundColor: theme.color.dark,
  color: theme.color.accent,
};

const Social = () => {
  const data = useStaticSocialQuery();

  return (
    <>
      <a
        style={style}
        href={`https://www.github.com/${data.site.siteMetadata.social.github}`}
        rel="noreferrer"
        target="_BLANK"
      >
        <GitHubIcon />
      </a>

      <a
        style={style}
        href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}
        rel="noreferrer"
        target="_BLANK"
      >
        <LinkedInIcon />
      </a>
    </>
  );
};

export default Social;
