import React from "react";
import LayoutStyle from "../../ui/Layout/Layout.style";

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

const Blog = () => {
  return (
    <LayoutStyle>
      {/* TODO: create blog with gatsby plugin or call twitter API */}
      <h1>Blog</h1>
      <div style={style.blogContent}>
        <hr style={style.blogLine} />
        <h3>Post 1</h3>
        <p>Post 1 paragraph</p>
        <a
          class="twitter-timeline"
          href="https://twitter.com/Vincent33567189?ref_src=twsrc%5Etfw"
        >
          Tweets by Vincent33567189
        </a>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
        <hr style={style.blogLine} />
        <h3>Post 2</h3>
        <p>Post 2 paragraph</p>
      </div>
    </LayoutStyle>
  );
};

export default Blog;
