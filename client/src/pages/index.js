import React from "react";
import { Link } from "gatsby";

import Layout from "../ui/Layout/Layout.js";
import Image from "../images/image.js";

import Welcome from "../components/Welcome/Welcome.js";
import ListProjects from "../components/ListProjects/ListProjects.js";

const style = {
  defaultImage: {
    maxWidth: `300px`,
    marginBottom: `1.45rem`,
  },
};

const IndexPage = () => (
  <Layout>
    <Welcome />
    <hr />
    <ListProjects />
    <div style={style.defaultImage}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <br />
    <Link to="/time/">See Server Time</Link>
    <br />
    <Link to="/projects/">Projects</Link>
  </Layout>
);

export default IndexPage;
