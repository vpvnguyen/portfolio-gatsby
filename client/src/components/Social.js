import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import theme from "../ui/theme.js";

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
