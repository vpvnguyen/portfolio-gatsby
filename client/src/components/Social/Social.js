import React from "react";

// social icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

// theme
import theme from "../../ui/theme.js";
import { useStaticQuery, graphql } from "gatsby";

const style = {
  fontSize: "1.4em",
  margin: "0.2em",
  backgroundColor: theme.color.dark,
  color: theme.color.accent,
};

const Social = () => {
  const data = useStaticQuery(graphql`
    query siteSocialQuery {
      site {
        siteMetadata {
          social {
            github
            linkedin
          }
        }
      }
    }
  `);

  console.log("siteSocialQuery", data);

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
