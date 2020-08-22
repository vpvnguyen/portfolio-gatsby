import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Vincent Nguyen" />
    <Link to="/projects/">Manage Projects</Link>
    <br />
    <Link to="/box-shadow/">box shadow</Link>
    <br />
    <Link to="/data-table/">data table</Link>
    <h1>Admin Panel</h1>
  </Layout>
)

export default IndexPage
