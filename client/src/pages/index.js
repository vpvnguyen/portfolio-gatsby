import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const style = {
  defaultImage: {
    maxWidth: `300px`,
    marginBottom: `1.45rem`,
  },
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm Vincent :)</h1>
    <p>Welcome to my Portfolio.</p>
    <p>Now go build something great.</p>
    <div style={style.defaultImage}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <br />
    <Link to="/time/">See Server Time</Link>
  </Layout>
)

export default IndexPage
