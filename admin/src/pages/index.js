import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Vincent Nguyen" />
    <Link to="/projects/">Manage Projects</Link>
    <h1>Admin Panel</h1>
  </Layout>
)

export default IndexPage
