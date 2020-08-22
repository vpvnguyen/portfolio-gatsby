import React from "react";
import { Link } from "gatsby";

import Layout from "../ui/Layout/Layout.js";
import Image from "../images/image.js";

import Welcome from "../components/Welcome/Welcome.js";
import Blog from "../components/Blog/Blog.js";
import ListProjects from "../components/ListProjects/ListProjects.js";
import ListProjectsSimple from "../components/ListProjects/ListProjectsSimple";
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

const IndexPage = () => (
  <Layout>
    <div style={style.page}>
      <div style={style.landing}>
        <Welcome />
      </div>

      <Blog style={style.content} />

      <ListProjectsSimple style={style.content} />

      <div style={style.content}>
        <div style={style.defaultImage}>
          <Image />
          <Link to="/page-2/">Go to page 2</Link>
          <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
          <br />
          <Link to="/projects/">Projects</Link>
        </div>
      </div>

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
