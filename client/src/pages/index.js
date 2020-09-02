import React from "react";
import Layout from "../ui/Layout/Layout.js";
import Welcome from "../components/Welcome/Welcome.js";
import Blog from "../components/Blog/Blog.js";
import ListProjects from "../components/ListProjects/ListProjects.js";
import Footer from "../components/Footer/Footer.js";

const style = {
  page: {
    height: "100vh",
  },
  defaultImage: {
    maxWidth: `300px`,
    marginBottom: `1.45rem`,
  },
  landing: {
    height: "89%",
  },
  content: {
    display: "block",
    overflow: "auto",
  },
};

const IndexPage = () => {
  return (
    <Layout>
      <div style={style.page}>
        <div style={style.landing}>
          <Welcome />
        </div>

        <Blog style={style.content} />

        <ListProjects style={style.content} />

        <Footer />
      </div>
    </Layout>
  );
};
export default IndexPage;
