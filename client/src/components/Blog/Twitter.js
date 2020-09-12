import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import useScript from "../../utils/hooks/useScript";
import LayoutStyle from "../../ui/Layout/Layout.style";
import theme from "../../ui/theme";

const EmbedTwitterTimeline = (url, user) => {
  const data = useStaticQuery(graphql`
    query siteTwitterQuery {
      site {
        siteMetadata {
          social {
            twitter {
              url
              user
            }
          }
        }
      }
    }
  `);

  useScript("https://platform.twitter.com/widgets.js");
  return (
    <LayoutStyle>
      <h1 style={theme.h1}>Tweets</h1>
      <a
        className="twitter-timeline"
        href={data.site.siteMetadata.social.twitter.url}
      ></a>
    </LayoutStyle>
  );
};

export default EmbedTwitterTimeline;
