import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import LayoutStyle from "../../ui/Layout/Layout.style";
import useScript from "../../utils/hooks/useScript";

const style = {
  blogContent: {
    display: "flex",
    flexDirection: "column",
  },
  blogLine: {
    width: "70%",
    opacity: 0.25,
  },
};

const EmbedTwitterTimeline = (url, user) => (
  <a class="twitter-timeline" href={url}>
    Tweets by {user}
  </a>
);

const Blog = () => {
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
      <h1>Blog</h1>
      <div style={style.blogContent}>
        <hr style={style.blogLine} />

        {EmbedTwitterTimeline(
          data.site.siteMetadata.social.twitter.url,
          data.site.siteMetadata.social.twitter.user
        )}

        <hr style={style.blogLine} />
      </div>
    </LayoutStyle>
  );
};

export default Blog;
