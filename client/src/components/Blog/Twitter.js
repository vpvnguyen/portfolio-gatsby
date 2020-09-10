import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import useScript from "../../utils/hooks/useScript";
import LayoutStyle from "../../ui/Layout/Layout.style";

const style = {
  container: {
    // padding: "40px",
    display: "flex",
    maxWidth: "50%",
    justifyContent: "center",
    alignItems: "center",
    // background: "#fafafa",
  },
  embedColor: {
    background: "#fafafa !important",
  },
};
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
      <div style={style.container}>
        <a
          class="twitter-timeline"
          href={data.site.siteMetadata.social.twitter.url}
          style={style.embedColor}
        >
          Tweets by {data.site.siteMetadata.social.twitter.user}
        </a>
      </div>
    </LayoutStyle>
  );
};

export default EmbedTwitterTimeline;
