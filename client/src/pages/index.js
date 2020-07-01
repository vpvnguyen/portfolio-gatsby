import React from "react";
import { Link } from "gatsby";

import Layout from "../ui/Layout/Layout.js";
import Image from "../images/image.js";

import Welcome from "../components/Welcome/Welcome.js";
import Blog from "../components/Blog/Blog.js";
import ListProjects from "../components/ListProjects/ListProjects.js";

const style = {
  contentWrapper: {
    height: "100vh", // fallback
    // width: "100vw",
    margin: "0 auto",
  },
  defaultImage: {
    maxWidth: `300px`,
    marginBottom: `1.45rem`,
  },
  sectionOne: {
    height: "50%",
  },
  sectionTwo: {
    height: "50%",
  },
  sectionThree: {
    height: "100%",
  },
  sectionFour: {
    height: "100%",
  },
  sectionFive: {
    height: "100%",
  },
};

const IndexPage = () => (
  <Layout>
    <div style={style.contentWrapper}>
      <div style={style.sectionOne}>
        <Welcome />
        <hr />
      </div>

      <div style={style.sectionTwo}>
        <Blog />
      </div>

      <div style={style.sectionThree}>
        <ListProjects />
      </div>

      <div style={style.sectionFour}>
        <div>
          <Link to="/page-2/">Go to page 2</Link>
          <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
          <br />
          <Link to="/time/">See Server Time</Link>
          <br />
          <Link to="/projects/">Projects</Link>
        </div>
      </div>

      <div style={style.sectionFive}>
        <div style={style.defaultImage}>
          <Image />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
