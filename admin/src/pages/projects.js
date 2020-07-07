import React from "react"

import Layout from "../components/layout.js"
import UploadProject from "../components/UploadProject.js"
import ListProject from "../components/ListProjects.js"
import AddProject from "../components/AddProject.js"

const style = {
  display: "block",
  overflow: "auto",
}

const Projects = () => {
  return (
    <Layout>
      <div style={style}>
        <AddProject />
        <ListProject />
        <UploadProject />
      </div>
    </Layout>
  )
}

export default Projects
