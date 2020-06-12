import React from "react"
import { Link } from "gatsby"

import Layout from "../ui/Layout/Layout.js"
import SEO from "../utils/Seo.js"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
