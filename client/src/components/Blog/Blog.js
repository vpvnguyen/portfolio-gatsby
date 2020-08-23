import React from "react";

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
    <>
      <h1>Blog</h1>
      <div style={style.blogContent}>
        <hr style={style.blogLine} />
        <h3>Post 1</h3>
        <p>Post 1 paragraph</p>
        <hr style={style.blogLine} />
        <h3>Post 2</h3>
        <p>Post 2 paragraph</p>
      </div>
    </>
  );
};

export default Blog;
