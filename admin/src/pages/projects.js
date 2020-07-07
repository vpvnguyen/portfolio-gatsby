import React from "react"

import Layout from "../components/layout.js"
import UploadProject from "../components/UploadProject.js"
import ListProject from "../components/ListProjects.js"

const style = {
  display: "block",
  overflow: "auto",
}

const Projects = () => {
  return (
    <Layout>
      <div style={style}>
        <ListProject />
        <UploadProject />
      </div>
    </Layout>
  )
}

export default Projects
