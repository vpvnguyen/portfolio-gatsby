import React from "react";

// social icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

// theme
import theme from "../../ui/theme.js";

const socialMedia = {
  user: "vpvnguyen",
  github: {
    url: user => `https://www.github.com/${user}`,
  },
  linkedin: {
    url: user => `https://www.linkedin.com/in/${user}`,
  },
};

const style = {
  fontSize: "1.4em",
  margin: "0.2em",
  backgroundColor: theme.primary,
  color: theme.secondary,
};

const Social = () => {
  return (
    <>
      <a
        style={style}
        href={socialMedia.github.url(socialMedia.user)}
        rel="noreferrer"
        target="_BLANK"
      >
        <GitHubIcon />
      </a>
      <a
        style={style}
        href={socialMedia.linkedin.url(socialMedia.user)}
        rel="noreferrer"
        target="_BLANK"
      >
        <LinkedInIcon />
      </a>
    </>
  );
};

export default Social;
