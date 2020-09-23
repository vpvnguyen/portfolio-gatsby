import React from "react";
import LayoutStyle from "../../ui/layout/Layout.style";
import theme from "../../ui/theme";
import useStaticTwitterQuery from "../../utils/hooks/useStaticTwitterQuery";
import useScript from "../../utils/hooks/useScript";

const EmbedTwitterTimeline = () => {
  const data = useStaticTwitterQuery();
  useScript("https://platform.twitter.com/widgets.js");

  return (
    <LayoutStyle>
      <h1 style={theme.h1}>Tweets</h1>

      <a
        aria-label="Twitter Feed"
        aria-hidden="true"
        className="twitter-timeline"
        href={data.site.siteMetadata.social.twitter.url}
      >
        {" "}
      </a>
    </LayoutStyle>
  );
};

export default EmbedTwitterTimeline;
