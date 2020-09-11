import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import useScript from "../../utils/hooks/useScript";
import LayoutStyle from "../../ui/Layout/Layout.style";

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
      <a
        class="twitter-timeline"
        href={data.site.siteMetadata.social.twitter.url}
      >
        Tweets by {data.site.siteMetadata.social.twitter.user}
      </a>
    </LayoutStyle>
  );
};

export default EmbedTwitterTimeline;
