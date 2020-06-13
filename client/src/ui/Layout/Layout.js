import React from "react"
import PropTypes from "prop-types"
import Navbar from "../../components/Navbar/Navbar.js"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
