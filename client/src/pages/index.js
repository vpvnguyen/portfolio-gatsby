import React from "react";
import Layout from "../ui/Layout/Layout.js";
import Welcome from "../components/Welcome/Welcome.js";
import Blog from "../components/Blog/Blog.js";
import ListProjects from "../components/ListProjects/ListProjects.js";
import Footer from "../components/Footer/Footer.js";
import Twitter from "../components/Blog/Twitter";

const style = {
  page: {
    height: "100vh",
  },
  landing: {
    height: "89%",
  },
  content: {
    // flex: "1 100%",
    // justifyContent: "center",
    // flexWrap: "wrap",
    // overflow: "auto",
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  static: {
    flex: "1 100%",
  },
  left: {
    flex: 2,
  },
  right: {
    flex: 1,
  },
};

const IndexPage = () => {
  return (
    <Layout>
      <div style={style.page}>
        <div style={style.container}>
          <div style={style.static}>
            <Welcome />
          </div>
          {/* <Blog style={style.content} /> */}
          {/* <div style={style.content}> */}
          <div style={style.left}>
            <ListProjects />
          </div>
          <div style={style.right}>
            <Twitter />
          </div>
          {/* </div> */}
        </div>
        <Footer />
      </div>
    </Layout>
  );
};
export default IndexPage;
