import React from "react";
import { Link } from "gatsby";

import Layout from "../ui/Layout/Layout.js";
import Image from "../images/image.js";

const style = {
  defaultImage: {
    maxWidth: `300px`,
    marginBottom: `1.45rem`,
  },
};

const IndexPage = () => (
  <Layout>
    <h1>Hi, I'm Vincent :)</h1>
    <p>Welcome to my Portfolio.</p>
    <p>Now go build something great.</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>

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
